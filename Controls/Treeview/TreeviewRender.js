/// <reference path="..\..\Freezer\Ext\ext-all-dev.js" />

/**
* @class gxui.Treeview
* Tree User Control. Wraps Ext.tree.Panel so it can be used from GeneXus.
*
* This control provides tree-structured UI representation of tree-structured data and is an excellent tool for displaying heirarchical data in an application.
* Tree nodes can be loaded invoking a remote URL or through a SDT.
* To load the tree by invoking a remote URL, set {@link #LazyLoading} = true and set {@link #LoaderURL} to the URL of a procedure that will populate the tree 
* (a main procedure with call protocol = HTTP that returns a collection of gxuiTreeviewNode SDT in Json format). For example: 
* 
*     Treeview.LoaderURL = Procedure.Link()
*
* To load a tree from a SDT, set {@link #LazyLoading} = false and set {@link #Children} to a variable with gxuiTreeviewNode type. The variable might be a collection 
* or a single node with child nodes.
*/
Ext.define('gxui.Treeview', {
	extend: 'gxui.UserControl',

	initialize: function () {
		this.callParent(arguments);

		this.NotifyContext = "false";
		this.NotifyDataType = 'gxuiTreeNode';
		this.CheckedNodes = [];
	},

	// Databinding
	SetChildren: function (data) {
		this.Children = data;
	},

	// Databinding
	GetChildren: function (data) {
		return this.Children;
	},

	// Databinding
	SetCheckedNodes: function (data) {
		this.CheckedNodes = data;
	},

	// Databinding
	GetCheckedNodes: function (data) {
		this.CheckedNodes = [];
		if (this.m_tree) {
			var checkedNodes = this.m_tree.getChecked();
			this.CheckedNodes = Ext.Array.map(checkedNodes, function (node) {
				return node.data.id;
			}, this);
		}
		return this.CheckedNodes
	},

	// Databinding
	SetUncheckedNodes: function (data) {
		this.UncheckedNodes = data;
	},

	// Databinding
	GetUncheckedNodes: function (data) {
		this.UncheckedNodes = [];
		if (this.m_tree) {
			var root = this.m_tree.getRootNode();
			if (root) {
				var nodes = [];
				root.cascadeBy(function () {
					if (this.data.checked === false) {
						nodes.push(this.data.id);
					}
				});
				this.UncheckedNodes = nodes;
			}
		}
		return this.UncheckedNodes;
	},

	// Databinding
	SetDropData: function (data) {
		this.DropData = data;
	},

	// Databinding
	GetDropData: function (data) {
		return this.DropData;
	},

	// Databinding
	SetSelectedNodeData: function (data) {
		this.SelectedNodeData = data;
	},

	// Databinding
	GetSelectedNodeData: function (data) {
		return this.SelectedNodeData;
	},

	// Databinding
	SetSelectedNodes: function (data) {
		this.SelectedNodes = data;
	},

	// Databinding
	GetSelectedNodes: function () {
		return this.SelectedNodes;
	},

	onRender: function () {
		var Tree = Ext.tree;
		var ddGroup = this.DragDropGroup || undefined;

		this.Width = parseInt(this.Width);
		this.Height = parseInt(this.Height);
		this.EnableCheckbox = gxui.CBoolean(this.EnableCheckbox);
		this.LazyLoading = gxui.CBoolean(this.LazyLoading);

		var store = this.createStore();

		var config = {
			id: this.getUniqueId(),
			title: this.Title,
			frame: gxui.CBoolean(this.Frame),
			border: gxui.CBoolean(this.Border) ? undefined : 0,
			cls: this.Cls,
			animate: gxui.CBoolean(this.Animate),
			rootVisible: gxui.CBoolean(this.RootVisible),
			lines: gxui.CBoolean(this.ShowLines),
			store: store,
			folderSort: gxui.CBoolean(this.Sort),
			viewConfig: {},
			plugins: [],
			autoScroll: gxui.CBoolean(this.AutoScroll),
			stateful: gxui.CBoolean(this.Stateful),
			stateId: (this.StateId && this.StateId != "") ? this.StateId : this.getUniqueId(),
			stateEvents: gxui.CBoolean(this.Stateful) ? ['itemcollapse', 'itemexpand'] : undefined,
			getState: gxui.CBoolean(this.Stateful) ? this.getState : undefined,
			applyState: gxui.CBoolean(this.Stateful) ? this.applyState(this.LazyLoading) : undefined,
			listeners: this.getListeners()
		};

		// @TODO: Change this to use AutoWidth and AutoHeight
		if (this.Width != 100)
			config.width = this.Width;
		else
			config.autoWidth = true;

		if (this.Height != 100)
			config.height = this.Height;
		else
			config.autoHeight = true;

		if (gxui.CBoolean(this.EnableDragDrop)) {
			config.viewConfig.plugins = {
				ptype: 'treeviewdragdrop',
				appendOnly: gxui.CBoolean(this.AppendOnly),
				ddGroup: ddGroup
			};
			config.viewConfig.listeners = this.getDDListeners();
		}

		if (gxui.CBoolean(this.Multiselection)) {
			config.selModel = {
				mode: 'MULTI',
				listeners: {
					'selectionchange': function (selModel, nodes) {
						this.SelectedNodes = [];
						Ext.each(nodes, function (node) {
							this.SelectedNodes.push(node.data.id);
						}, this);
					},
					scope: this
				}
			};
		}

		if (gxui.CBoolean(this.Editable)) {
			// The column has to be explicitly defined, to set editor properties
			config.columns = [{
				xtype: 'treecolumn',
				dataIndex: 'text',
				flex: 1,
				editor: {
					xtype: 'textfield',
					allowBlank: false,
					selectOnFocus: true,
					cancelOnEsc: true,
					ignoreNoChange: true
				}
			}];

			config.hideHeaders = true;

			config.plugins.push({
				ptype: 'cellediting',
				pluginId: this.getUniqueId() + '-celledit',
				clicksToEdit: 2,
				listeners: {
					'edit': function (editor, e) {
						this.NodeEditText = e.value;
						if (this.NodeEdit) {
							this.NodeEdit();
						}
					},
					scope: this
				}
			});
			config.viewConfig.toggleOnDblClick = false;
		}

		this.m_tree = Ext.create('Ext.tree.Panel', config);
	},

	onRefresh: function () {
		var selNodes = this.m_tree.getSelectionModel().getSelection();
		if (selNodes && selNodes[0]) {
			this.setSelectedNode(selNodes[0]);
		}
	},

	onAfterRender: function () {
		if (gxui.CBoolean(this.ExpandRoot)) {
			Ext.defer(function () {
				this.m_tree.getRootNode().expand(gxui.CBoolean(this.ExpandAll));
			}, 300, this);
		}
	},

	getUnderlyingControl: function () {
		return this.m_tree;
	},

	addToParent: function () {
		return gxui.CBoolean(this.AddToParentGxUIControl);
	},

	createRootNode: function () {
		return {
			id: (this.RootId ? this.RootId : 'ROOT'),
			text: this.RootText,
			icon: (this.RootIcon ? this.RootIcon : undefined),
			cls: (this.RootCls ? this.RootCls : undefined),
			iconCls: (this.RootIconCls ? this.RootIconCls : undefined),
			draggable: false, // disable root node dragging
			children: !this.LazyLoading ? this.cloneNodes(this.Children) : undefined,
			expanded: gxui.CBoolean(this.ExpandRoot)
		};
	},

	createStore: function () {
		var config = {
			root: this.createRootNode(),
			_enableCheckbox: this.EnableCheckbox
		};


		if (this.LazyLoading) {
			config.proxy = {
				type: 'ajax',
				url: this.LoaderURL,
				reader: {
					type: 'json'
				},
				actionMethods: {
					create: "POST",
					read: "POST",
					update: "POST",
					destroy: "POST"
				}
			};
		}

		return config;
	},

	cloneNodes: function (children) {
		children = gxui.clone(children);

		return children.length && children.length > 0 ? children : [children]
	},

	getRowDropData: function (data) {
		if (data && data.gxRow) {
			var gxGrid = data.gxGrid,
				gxRow = data.gxRow,
				gxCols = data.gxColumns;

			var dropData = {};
			for (var i = 0, len = gxCols.length; i < len; i++) {
				var col = gxCols[i],
					colName = col.gxAttName || (col.gxAttId.charAt(0) == "&" ? col.gxAttId.substring(1) : col.gxAttId),
					cell = gxGrid.getPropertiesCell(data.gxGrid.getUnderlyingControl(), gxRow.id, i, true);
				dropData[colName] = cell.value;
			}

			return dropData;
		}

		return null;
	},

	getNodeById: function (nodeId) {
		return this.m_tree.getStore().getNodeById(nodeId);
	},

	getDDListeners: function () {
		return {
			'dragover': function (node, data, overModel, dropPosition) {
				if (this.NodeOver) {
					// Set UC properties before fireing the event
					this.DropTarget = overModel.data.id;
					this.DropPoint = dropPosition;

					if (data.gxGrid) {
						this.DropData = this.getRowDropData(data);
					}
					else {
						this.DropNode = data.records[0].data.id;
					}

					this.DropAllowed = true;

					/**
					* @event NodeOver
					* Fires when a node is being dragged over another node. While the node is being dragged, an icon is shown describing if the
					* drop operation over the hovered node is allowed. To indicate that the drop operation is allowed (default), set {@link #DropAllowed} = true.
					* To indicate that the drop operation is not allowed, set {@link #DropAllowed} = false.
					* The following properties are set when the event is fired:
					*
					* - {@link #DropTarget}
					* - {@link #DropPoint}
					* - {@link #DropNode}
					*
					*/
					this.NodeOver();

					return this.DropAllowed;
				}
				return true;
			},

			'beforedrop': function (node, data, overModel, dropPosition, opts) {
				if (data.gxGrid) {
					this.DropTarget = overModel.data.id;
					this.DropPoint = dropPosition;

					this.DropData = this.getRowDropData(data);
					opts.cancelDrop();

					if (this.RowDrop) {
						this.RowDrop();
					}
				}
			},

			'drop': function (node, data, overModel, dropPosition) {
				this.DropTarget = overModel.data.id;
				this.DropPoint = dropPosition;

				if (data.records.length > 0) {
					this.DropNode = data.records[0].data.id;
					if (this.NodeDrop) {
						/**
						* @event NodeDrop
						* Fires when a node is dropped.
						* The following properties are set when the event is fired:
						*
						* - {@link #DropTarget}
						* - {@link #DropPoint}
						* - {@link #DropNode}
						*
						*/
						this.NodeDrop();
					}
				}
			},

			scope: this
		};
	},

	getListeners: function () {
		var listeners = {
			'itemclick': function (view, node, item, index, e) {
				var editorPlugin = this.getEditorPlugin();
				var startEdit = (node.data.id == this.SelectedNode) && editorPlugin;
				this.endEdit();
				this.setSelectedNode(node);
				if (!node.data.href) {
					if (this.NotifyContext == "true") {
						this.notifyContext([this.NotifyDataType], { id: node.data.id, text: node.data.text, leaf: node.data.leaf, icon: node.data.icon });
					}
					if (this.Click && (!node.hasChildNodes() || !gxui.CBoolean(this.DisableBranchEvents))) {
						/**
						* @event Click
						* Fires when a node is clicked. The following properties are set when the event is fired:
						*
						* - {@link #SelectedNode}
						* - {@link #SelectedText}
						* - {@link #SelectedIcon}
						* - {@link #SelectedNodeData}
						* - {@link #SelectedNodeChecked}
						*
						*/
						this.Click();
					}
				}
				if (startEdit) {
					editorPlugin.startEdit(node, 0);
				}
			},

			'itemdblclick': function (view, node) {
				this.endEdit();
				this.setSelectedNode(node);
				if (this.DoubleClick && (!node.hasChildNodes() || !gxui.CBoolean(this.DisableBranchEvents))) {
					/**
					* @event DoubleClick
					* Fires when a node is double clicked. The following properties are set when the event is fired:
					*
					* - {@link #SelectedNode}
					* - {@link #SelectedText}
					* - {@link #SelectedIcon}
					* - {@link #SelectedNodeData}
					* - {@link #SelectedNodeChecked}
					*
					*/
					this.DoubleClick();
				}
			},

			'checkchange': function (node) {
				if (this.CheckChange) {
					this.setSelectedNode(node);
					/**
					* @event CheckChange
					* Fires when a node with a checkbox changes its value. The following properties are set when the event is fired:
					*
					* - {@link #SelectedNode}
					* - {@link #SelectedText}
					* - {@link #SelectedIcon}
					* - {@link #SelectedNodeData}
					* - {@link #SelectedNodeChecked}
					*
					*/
					this.CheckChange();
				}
			},

			scope: this
		};

		if (this.ContextMenu) {
			listeners['itemcontextmenu'] = function (view, node) {
				this.endEdit();
				if (this.ContextMenu) {
					this.setSelectedNode(node);
					this.m_tree.getSelectionModel().select(node);
					/**
					* @event ContextMenu
					* Fires when a node is right clicked. The following properties are set when the event is fired:
					*
					* - {@link #SelectedNode}
					* - {@link #SelectedText}
					* - {@link #SelectedIcon}
					* - {@link #SelectedNodeData}
					* - {@link #SelectedNodeChecked}
					*
					*/
					this.ContextMenu();
				}
			};
		}

		return listeners;
	},

	setSelectedNode: function (node) {
		this.SelectedNode = node.data.id;
		this.SelectedText = node.data.text;
		this.SelectedIcon = node.data.icon;
		this.SelectedNodeData = node.data.data;
		this.SelectedNodeChecked = node.data.checked || false;
	},

	getEditorPlugin: function () {
		return this.m_tree.getPlugin(this.getUniqueId() + '-celledit');
	},

	endEdit: function () {
		var editorPlugin = this.getEditorPlugin();
		if (editorPlugin) {
			editorPlugin.completeEdit();
		}
	},

	getState: function () {
		var nodes = [], state = Ext.tree.Panel.prototype.getState.apply(this, arguments);
		this.getRootNode().eachChild(function (child) {
			//function to store state of tree recursively
			var storeTreeState = function (node, expandedNodes) {
				if (node.isExpanded() && node.childNodes.length > 0) {
					expandedNodes.push(node.getPath("id"));
					node.eachChild(function (child) {
						storeTreeState(child, expandedNodes);
					});
				}
			};
			storeTreeState(child, nodes);
		});

		Ext.apply(state, {
			expandedNodes: nodes
		});

		return state;
	},

	applyState: function (lazyLoading) {
		return function (state) {
			var nodes = state.expandedNodes || [],
				len = nodes.length;

			var expandNodes = Ext.bind(function () {
				for (var i = 0; i < len; i++) {
					if (typeof nodes[i] != 'undefined') {
						this.expandPath(nodes[i], 'id');
					}
				}
				Ext.tree.Panel.prototype.applyState.call(this, state)
			}, this);
			
			this.collapseAll();
			if (lazyLoading) {
				setTimeout(expandNodes, 100);
			}
			else {
				expandNodes();
			}
		};
	},

	findChildNode: function (id, nodes) {
		for (var i = 0, len = nodes.length; i < len; i++) {
			if (nodes[i].id == id) {
				return nodes[i];
			}
			if (nodes[i].children.length > 0) {
				var node = this.findChildNode(id, nodes[i].children);
				if (node) {
					return node;
				}
			}
		}
		return null;
	},

	setNodeProperty: function (nodeId, name, value) {
		var node = this.getNodeById(nodeId);
		if (node) {
			node.set(name, value);
		}
	},

	methods: {
		// Methods
		/**
		* Selects a node by id.
		* @param {String} nodeId Node id
		* @method
		*/
		SelectNode: function (nodeId) {
			var node = this.getNodeById(nodeId);
			if (node) {
				this.setSelectedNode(node)
				this.m_tree.getSelectionModel().select(node);
				this.m_tree.expandPath(node.getPath("id"), "id");
			}
		},

		/**
		* Selects the node immediately following the currently selected node.
		* @method
		*/
		SelectNextNode: function () {
			this.m_tree.getSelectionModel().selectNext();
		},

		/**
		* Selects the node that precedes the currently selected node.
		* @method
		*/
		SelectPreviousNode: function () {
			this.m_tree.getSelectionModel().selectPrevious();
		},

		/**
		* Remove a node from the tree
		* @param {String} nodeId Node id
		* @method
		*/
		DeleteNode: function (nodeId) {
			var node = this.getNodeById(nodeId);
			if (node) {
				node.remove();
			}
		},

		/**
		* Expand a node by id.
		* @param {String} nodeId Node id
		* @method
		*/
		ExpandNode: function (nodeId) {
			var node = this.getNodeById(nodeId);
			if (node) {
				node.expand();
			}
		},

		/**
		* Expand all the tree nodes.
		* @method
		*/
		ExpandAllNodes: function () {
			this.m_tree.expandAll();
		},

		/**
		* Collapse a node by id.
		* @param {String} nodeId Node id
		* @method
		*/
		CollapseNode: function (nodeId) {
			var node = this.getNodeById(nodeId);
			if (node) {
				node.collapse();
			}
		},

		/**
		* Collapse all the tree nodes.
		* @method
		*/
		CollapseAllNodes: function () {
			this.m_tree.collapseAll();
		},

		/**
		* Reloads the tree from a given node. If a node is not provided, it reloads the tree from the root node.
		* If {@link #LazyLoading} = false, the tree is always reloaded from the root node, reading the value from {@link #Children} property.
		* @param {String} [nodeId] Node id
		* @method
		*/
		Reload: function (node, expand) {
			var tree = this.m_tree;
			// node can be a TreeNode or a String with the Id of a node. If node is undefined, the root node is reloaded.
			var n = node ? ((typeof node == 'object') ? node : this.getNodeById(node)) : tree.getRootNode();

			if (n) {
				var loadCallback = function (node, initState) {
					node = node || n;
					if (expand || expand === undefined) {
						node.expand();
					}
					if (initState !== false) {
						tree.initState();
					}
				};

				var store = tree.getStore();
				if (this.LazyLoading) {
					var loadCfg = {
						callback: Ext.bind(loadCallback, this),
						node: n
					};

					store.getProxy().url = this.LoaderURL;
					if (store.isLoading())
						Ext.defer(store.load, 500, store, [loadCfg]);
					else
						store.load(loadCfg);
				}
				else {
					if (n == tree.getRootNode()) {
						tree.setRootNode(this.createRootNode());
					}
					else {
						var rawNode = this.findChildNode(node, this.Children),
							newNode = n.parentNode.replaceChild(rawNode, n);
					}
					loadCallback(newNode, false);
				}

				if (this.SelectedNode != undefined) {
					this.SelectNode(this.SelectedNode);
				}
			}
		},

		/**
		* Reloads the tree from the root node and applies {@link #Width}, {@link #Height} and {@link #Title} properties.
		* @method
		*/
		Refresh: function () {
			var tree = this.m_tree;
			tree.setHeight((this.Height != 100) ? this.Height : undefined);
			tree.setWidth((this.Width != 100) ? this.Width : undefined);
			tree.setTitle(this.Title);
			this.Reload(tree.getRootNode(), gxui.CBoolean(this.ExpandRoot));
		},

		/**
		* Shows the control
		* @method
		*/
		Show: function () {
			this.m_tree.setVisible(true);
		},

		/**
		* Hides the control
		* @method
		*/
		Hide: function () {
			this.m_tree.setVisible(false);
		},

		/**
		* Returns the id of the parent of the given node. If the given node doesn't exist or is the root node, it returns "".
		* @param {String} nodeId Node id
		* @return {String}
		* @method
		*/
		GetNodeParentId: function (nodeId) {
			var node = this.getNodeById(nodeId);
			if (node && node.parentNode) {
				return node.parentNode.data.id;
			}
			return "";
		},

		/**
		* Sets the data property of the given node with nodeData.
		* @param {String} nodeId Node id
		* @param {Object} nodeData Node data to set in the data property of the node. It can be any type of SDT.
		* @method
		*/
		SetNodeData: function (nodeId, nodeData) {
			var node = this.getNodeById(nodeId);
			if (node) {
				node.data.data = nodeData;
			}
		},

		/**
		* Returns the data property of the given node.
		* @param {String} nodeId Node id
		* @return {Object}
		* @method
		*/
		GetNodeData: function (nodeId) {
			var node = this.getNodeById(nodeId);
			if (node) {
				return node.data.data;
			}
		},

		/**
		* Sets the text of a given node.
		* @param {String} nodeId Node id
		* @param {String} text New text for the node
		* @method
		*/
		SetNodeText: function (nodeId, text) {
			this.setNodeProperty(nodeId, 'text', text);
		},


		/**
		* Sets the boolean value of a property of a given node.
		* @param {String} nodeId Node id
		* @param {String} name Property name
		* @param {Boolean} value Property value
		* @method
		*/
		SetNodePropertyBoolean: function (nodeId, name, value) {
			this.setNodeProperty(nodeId, name, value);
		},

		/**
		* Sets the string value of a property of a given node.
		* @param {String} nodeId Node id
		* @param {String} name Property name
		* @param {String} value Property value
		* @method
		*/
		SetNodePropertyString: function (nodeId, name, value) {
			this.setNodeProperty(nodeId, name, value);
		},

		/**
		* Sets the numeric value of a property of a given node.
		* @param {String} nodeId Node id
		* @param {String} name Property name
		* @param {Number} value Property value
		* @method
		*/
		SetNodePropertyNumber: function (nodeId, name, value) {
			this.setNodeProperty(nodeId, name, value);
		},

		/**
		* Starts editing a given node
		* @param {String} nodeId Node id
		* @param {Number} [value] A value to initialize the node editor with.
		* @method
		*/
		StartEdit: function (nodeId, value) {
			var node = this.getNodeById(nodeId),
				editorPlugin;
			if (node) {
				editorPlugin = this.getEditorPlugin();
				if (editorPlugin) {
					if (value !== undefined) {
						editorPlugin.on({
							'beforeedit': function (editor, e) {
								e.value = value;
							},
							single: true
						});
					}
					editorPlugin.startEdit(node, 0);
				}
			}
		},

		/**
		* Cancels any active editing.
		* @method
		*/
		CancelEdit: function () {
			var editorPlugin = this.getEditorPlugin();
			if (editorPlugin) {
				editorPlugin.cancelEdit();
			}
		},

		/**
		* Sets the text of a given node.
		* @param {String} nodeId Node id
		* @param {String} text New text for the node
		* @method
		*/
		ClearAllNodes: function () {
			var root = this.m_tree.getRootNode();
			root.removeAll();
			delete root.data.children;
		},

		/**
		* Returns true if the given node exists in the tree.
		* @param {String} nodeId Node id
		* @return {Boolean}
		* @method
		*/
		NodeExists: function (nodeId) {
			var node = this.getNodeById(nodeId);
			return (node ? true : false);
		}
	}
});

// isValidDropPoint is overriden to be able to fire dragover event.
Ext.tree.ViewDropZone.override({
	isValidDropPoint: function (node, position, dragZone, e, data) {
		if (this.callOverridden(arguments) === false)
			return false;

		if (this.view.fireEvent('dragover', node, data, this.view.getRecord(node), position, e) === false)
			return false;

		return true;
	}
});

Ext.data.TreeStore.override({
	fillNode: function (node, records) {
		if (records) {
			for (var i = 0, len = records.length; i < len; i++) {
				var record = records[i];
				if (!this._enableCheckbox) {
					delete record.raw.checked;
					record.data.checked = null;
				}
				if (record.raw.leaf === false && record.raw.children && record.raw.children.length == 0)
					delete record.raw.children;
			}
		}
		return this.callOverridden(arguments);
	}
});