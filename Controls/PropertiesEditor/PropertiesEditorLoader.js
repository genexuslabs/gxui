gxui.PropertiesEditorLoader = function(options){
	/**
	 * @cfg {Object} categoryPathSeparator Categories hierarchy list separator. Defaults to "\"
	 */
	this.categoryPathSeparator = "\\";
	gxui.PropertiesEditorLoader.superclass.constructor.call(this, options);
	this.initialize();
};

Ext.extend(gxui.PropertiesEditorLoader, Ext.tree.TreeLoader, {
	/**
	* @cfg {Object} defParams The parameters that should be passed to gxui.Properties.ObjectDefsRepository for getting the objects' definitions.
	*/
	/**
	* @cfg {Object} objParams The parameters that should be passed to gxui.Properties.ObjectsRepository for getting the objects' properties.
	*/
	/**
	* @cfg {String} objId Id of the default object whose properties will be retrieved. Required before executing load method.
	*/
	initialize: function() {
		this.definitions = gxui.Properties.ObjectDefsRepository; // Just a shortcut to avoid writing the long class name
		this.definitions.init(this.defParams);
		this.objects = gxui.Properties.ObjectsRepository; // Just a shortcut to avoid writing the long class name
		this.objects.init(this.objParams);
	},

	createNode: function(attr) {
		attr.uiProvider = gxui.PropertiesEditorNodeUI;
		return gxui.PropertiesEditorLoader.superclass.createNode.apply(this, [attr]);
	},

	/**
	* Load an {@link Ext.tree.TreeNode} from the objId specified in the constructor.
	* This is called automatically when a node is expanded, but may be used to reload
	* a node (or append new children if the {@link #clearOnLoad} option is false.)
	* @param {Ext.tree.TreeNode} node
	* @param {Function} callback
	* @param {Boolean} alphOrder (Optional) Set to true if the properties should be loaded in alphabetical order, in flat format.
	*/
	load: function(node, callback, alphOrder, properties, definitions) {
		if (this.clearOnLoad) {
			node.children = [];
			delete this.categoriesNodes;
			delete this.propertiesNodes;

			while (node.firstChild) {
				node.removeChild(node.firstChild);
			}
		}
		if (this.doPreload(node)) { // preloaded json children
			if (typeof callback == "function") {
				callback();
			}
		}
		else if (properties && definitions) {
			this.processResponse(node, callback, properties, definitions, alphOrder);
			this.fireEvent("load", this, node);
		}
		else if (this.objId) {
			this.requestData(node, callback, alphOrder);
		}
		else if (typeof callback == "function") {
			callback();
		}
	},

	requestData: function(node, callback, alphOrder) {
		if (this.fireEvent("beforeload", this, node, callback) !== false) {
			this.transId = true;
			this.objects.getProperties(this.objId, node.attributes.Category || "", function(obj, store, r, success) {
				if (success) {
					this.definitions.getDefinition(obj.ObjectClass, function(def, success) {
						if (success)
							this.handleResponse(node, callback, obj, store, def, alphOrder);
						else
							this.handleFailure(node, callback);
					}, this);
				}
				else
					this.handleFailure();
			}, this);
		} else {
			// if the load is cancelled, make sure we notify
			// the node that we are done
			if (typeof callback == "function") {
				callback();
			}
		}
	},

	handleResponse: function(node, callback, obj, props, def, alphOrder) {
		this.transId = false;
		if (this.objId == obj.objId) {
			this.processResponse(node, callback, props, def, alphOrder);
		}
		this.fireEvent("load", this, node);
	},

	handleFailure: function(node, callback) {
		this.transId = false;
		this.fireEvent("loadexception", this, node);
		if (typeof callback == "function") {
			callback(this, node);
		}
	},

	processResponse: function(node, callback, props, def, alphOrder) {
		if (alphOrder === true) {
			this.createFlatOrderedTree(node, props, def);
		}
		else {
			this.createTree(node, props, def);
		}

		if (node.children) {
			node.beginUpdate();
			for (var i = 0, len = node.children.length; i < len; i++) {
				// Don't show those nodes that seem to be leafs but don't have any children. 
				// >>This is temporal, until we can set in the control if there's Lazy Loading or not.<<
				if (!node.children[i].leaf && (!node.children[i].children || node.children[i].children == [])) {
					node.removeChild(node.children[i]);
				}
				else {
					var n = this.createNode(node.children[i]);
					if (n) {
						node.appendChild(n);
					}
				}
			}
			node.endUpdate();
		}

		if (alphOrder === true) {
			node.sort(function(a, b) {
				if (a.text < b.text)
					return -1;
				if (a.text > b.text)
					return 1;
				return 0;
			});
		}

		if (typeof callback == "function") {
			callback(this, node);
		}
	},

	createTree: function(node, props, def) {
		var root = node.getOwnerTree().getRootNode();

		if (!node.attributes.Category) {
			node.attributes.Category = "";
		}

		if (!this.categoriesNodes) {
			this.categoriesNodes = {
				ROOT: root
			};
		}

		if (!this.propertiesNodes) {
			this.propertiesNodes = {};
		}

		Ext.each(def, function(descriptor) {
			// Find the property described by "descriptor" in props store.
			var idx = props.find("Name", new RegExp("^" + descriptor.Name + "$"));

			if (idx >= 0) {
				var prop = props.getAt(idx);
				var parentNode;
				if (node && ((node.attributes.Category == descriptor.Category && !descriptor.Parent) || (descriptor.Parent && (node.attributes.Parent == descriptor.Parent)))) {
					parentNode = node;
				}
				else {
					parentNode = this.getParentNode(root, descriptor);
				}

				if (parentNode && !this.propertiesNodes[descriptor.Name]) { // Defensive control to avoid loading the same node more than once
					this.addPropertyNode(parentNode, this.createPropertyNode(prop, descriptor));
				}
			}
			else {
				var categoryList = descriptor.Category.split(this.categoryPathSeparator)
				var category = categoryList.pop();
				if (descriptor.Category != "" && node.attributes.Category == categoryList.join(this.categoryPathSeparator)) {
					// Create branch of categories
					this.createBranch(node, descriptor, [category]);
				}
			}
		}, this);
	},

	createFlatOrderedTree: function(node, props, def) {
		var root = node.getOwnerTree().getRootNode();

		if (!this.propertiesNodes) {
			this.propertiesNodes = {};
		}

		Ext.each(def, function(descriptor) {
			// Find the property described by "descriptor" in props store.
			var idx = props.find("Name", descriptor.Name);

			if (idx >= 0) {
				var prop = props.getAt(idx);

				var parentNode = (descriptor.Parent) ? this.getParentNode(root, descriptor) : node;

				this.addPropertyNode(parentNode, this.createPropertyNode(prop, descriptor));
			}
		}, this);
	},

	getParentNode: function(root, descriptor) {
		var parentNode;
		if (descriptor.Parent) {
			if (this.propertiesNodes[descriptor.Parent]) {
				parentNode = this.propertiesNodes[descriptor.Parent];
			}
		}
		else {
			if (this.categoriesNodes[descriptor.Category || "ROOT"]) {
				parentNode = this.categoriesNodes[descriptor.Category || "ROOT"];
			}
			else {
				// Create branch of categories
				parentNode = this.createBranch(root, descriptor, descriptor.Category.split(this.categoryPathSeparator));
			}
		}
		return parentNode;
	},

	createPropertyNode: function(prop, descriptor) {
		return {
			id: descriptor.Name,
			text: descriptor.DisplayName,
			qtip: descriptor.DisplayName,
			value: prop.data.Value,
			isDefault: prop.data.IsDefault,
			isReadonly: prop.data.IsReadonly,
			editor: {
				xtype: descriptor.Editor,
				cfg: descriptor.EditorConfig || descriptor.EditorCfg
			},
			expanded: false,
			leaf: true,
			property: prop,
			descriptor: descriptor
		};
	},

	addPropertyNode: function(parentNode, newNode) {
		parentNode.leaf = false;
		if (!parentNode.children) {
			parentNode.children = [];
		}
		if (parentNode.children.length == 0) {
			parentNode.lastPropertyIndex = 0;
		}
		parentNode.children.splice(parentNode.lastPropertyIndex, 0, newNode);
		parentNode.lastPropertyIndex += 1;
		this.propertiesNodes[newNode.id] = newNode;
	},

	addCategoryNode: function(parentNode, newNode) {
		if (!parentNode.children)
			parentNode.children = [];
		parentNode.children.push(newNode);
		this.categoriesNodes[newNode.Category || "ROOT"] = newNode;
	},

	createBranch: function(node, descriptor, branch) {
		var id = node.id ? node.id + "\\" + branch[0] : "Category:" + "\\" + branch[0];
		var n = this.findChild(node, id);
		if (!n) {
			n = {
				id: this.getSafeNodeId(id),
				Category: descriptor.Category,
				text: branch[0],
				qtip: branch[0],
				value: "",
				isDefault: "",
				editor: "",
				expanded: false,
				leaf: false,
				cls: "gxui-prop-category"
			};
			this.addCategoryNode(node, n);
		}

		if (branch.length > 1) {
			return this.createBranch(n, descriptor, branch.slice(1))
		}
		return n;
	},

	findChild: function(node, id) {
		var safeId = this.getSafeNodeId(id);
		var child;
		if (node.children) {
			Ext.each(node.children, function(n) {
				if (n.id == safeId) {
					child = n;
					return false
				}
			}, this);
		}
		return child;
	},

	getSafeNodeId: function(unsafeId) {
		return encodeURI(unsafeId);
	}
});