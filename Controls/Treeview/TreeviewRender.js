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
			autoRender: this.getContainerControl(),
			width: this.Width,
			height: this.Height,
			title: this.Title,
			frame: gxui.CBoolean(this.Frame),
			border: gxui.CBoolean(this.Border),
			cls: this.Cls,
			animate: gxui.CBoolean(this.Animate),
			rootVisible: gxui.CBoolean(this.RootVisible),
			lines: gxui.CBoolean(this.ShowLines),
			store: store,
			folderSort: gxui.CBoolean(this.Sort),
			viewConfig: {},
			autoScroll: gxui.CBoolean(this.AutoScroll),
			stateful: gxui.CBoolean(this.Stateful),
			stateId: (this.StateId && this.StateId != "") ? this.StateId : this.getUniqueId(),
			stateEvents: gxui.CBoolean(this.Stateful) ? ['itemcollapse', 'itemexpand'] : undefined,
			getState: gxui.CBoolean(this.Stateful) ? this.getState : undefined,
			applyState: gxui.CBoolean(this.Stateful) ? this.applyState(this.LazyLoading) : undefined,
			listeners: this.getListeners()
		};

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

		this.m_tree = Ext.create('Ext.tree.Panel', config);
		// @TODO: Implement Editable feature when it is available in ExtJS 4.1
		//		if (gxui.CBoolean(this.Editable)) {
		//			this.m_treeEditor = new Ext.tree.TreeEditor(this.m_tree, {}, {
		//				allowBlank: false,
		//				selectOnFocus: true,
		//				cancelOnEsc: true,
		//				completeOnEnter: true,
		//				ignoreNoChange: true,
		//				listeners: {
		//					'complete': function (editor, value) {
		//						this.NodeEditText = value;
		//						if (this.NodeEdit) {
		//							this.NodeEdit();
		//						}
		//					},
		//					scope: this
		//				},
		//				// Overriden function to avoid bug in IE. See: http://www.extjs.com/forum/showthread.php?43408-2.2-OPEN-TreeEditor-Behaviour&p=285736
		//				triggerEdit: function (node, defer) {
		//					this.completeEdit();
		//					if (node.attributes.editable !== false) {

		//						this.editNode = node;
		//						if (this.tree.autoScroll && !Ext.isIE) {
		//							node.ui.getEl().scrollIntoView(this.tree.body);
		//						}
		//						this.autoEditTimer = this.startEdit.defer(this.editDelay, this, [node.ui.textNode, node.text]);
		//						return false;
		//					}
		//				}
		//			});
		//		}

		// Add to parent UC container
		if (gxui.CBoolean(this.AddToParentGxUIControl)) {
			this.addToParentContainer(this.m_tree);
		}

		this.m_tree.render();

		if (gxui.CBoolean(this.ExpandRoot))
			this.m_tree.getRootNode().expand(gxui.CBoolean(this.ExpandAll), gxui.CBoolean(this.Animate));
	},

	onRefresh: function () {
		var selNode = this.m_tree.getSelectionModel().getSelectedNode();
		if (selNode) {
			this.setSelectedNode(selNode);
		}
	},

	getUnderlyingControl: function () {
		return this.m_tree;
	},

	createStore: function () {
		var config = {
			root: {
				id: (this.RootId ? this.RootId : 'ROOT'),
				text: this.RootText,
				icon: (this.RootIcon ? this.RootIcon : undefined),
				cls: (this.RootCls ? this.RootCls : undefined),
				iconCls: (this.RootIconCls ? this.RootIconCls : undefined),
				draggable: false, // disable root node dragging
				children: !this.LazyLoading ? this.cloneNodes(this.Children) : undefined
			},
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

	getRowDropData: function (dropEvent) {
		if (dropEvent.data && dropEvent.data.gxRow) {
			var gxRow = dropEvent.data.gxRow;
			var gxCols = dropEvent.data.gxColumns;

			var dropData = {};
			Ext.each(gxCols, function (col, i) {
				var colName = col.gxAttName || (col.gxAttId.charAt(0) == "&" ? col.gxAttId.substring(1) : col.gxAttId);
				dropData[colName] = gxRow.values[i];
			}, this);

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
					// @TODO: Implement D&D interoperability with grids when gxui.GridExtension is implemented.
					//					if (dragOverEvent.source.grid) {
					//						this.DropData = this.getRowDropData(dragOverEvent);
					//					}
					//					else {
					this.DropNode = data.records[0].data.id;
					//					}

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

			'beforedrop': function (node, data, overModel, dropPosition, dropFunction) {
				// @TODO: Implement D&D interoperability with grids when gxui.GridExtension is implemented.
				//				data.event.preventDefault();
				//				if (dropEvent.source.grid) {
				//					this.DropTarget = dropEvent.target.id;
				//					this.DropPoint = dropEvent.point;

				//					this.DropData = this.getRowDropData(dropEvent);
				//					dropEvent.target.ui.endDrop(); // Ended here because if the RowDrop runs in the server, the ghost is not hidden.

				//					if (this.RowDrop) {
				//						this.RowDrop();
				//					}
				//				}

				//				// Disable context menu until (workaround for avoiding showing context menu in right click D&D operations in IE and Chrome)
				//				Ext.getBody().on('contextmenu', Ext.emptyFn, this, {
				//					single: true,
				//					stopEvent: true,
				//					preventDefault: true
				//				});
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
				//this.endEdit();
				this.setSelectedNode(node);
				if (!node.data.href) {
					if (this.NotifyContext == "true") {
						this.notifyContext([this.NotifyDataType], { id: node.id, text: node.text, leaf: node.leaf, icon: node.attributes.icon });
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
			},

			'itemdblclick': function (view, node) {
				//this.endEdit();
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
				//this.endEdit();
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

	endEdit: function () {
		if (this.m_treeEditor) {
			this.m_treeEditor.completeEdit();
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

			this.collapseAll(function () {
				for (var i = 0; i < len; i++) {
					if (typeof nodes[i] != 'undefined') {
						this.expandPath(nodes[i], 'id');
					}
				}
				Ext.tree.Panel.prototype.applyState.call(this, state)
			}, this);
		};
	},

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
		// node can be a TreeNode or a String with the Id of a node. If node is undefined, the root node is reloaded.
		var n = node ? ((typeof node == 'object') ? node : this.getNodeById(node)) : this.m_tree.getRootNode();

		if (n) {
			var loadCallback = Ext.bind(function () {
				if (expand || expand === undefined) {
					n.expand();
				}
				this.m_tree.initState();
			}, this);

			var store = this.m_tree.getStore();
			if (this.LazyLoading) {
				store.getProxy().url = this.LoaderURL;
				if (store.isLoading())
					Ext.defer(store.load, 500, store, [{
						callback: loadCallback,
						node: n
					}]);
				else
					store.load({
						callback: loadCallback,
						node: n
					});
			}
			else {
				var children = this.cloneNodes(this.Children);
				var root = this.m_tree.getRootNode();
				root.removeAll();
				root.appendChild(children);
				loadCallback();
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
		tree.setHeight((this.Width != 100) ? this.Width : undefined);
		tree.setWidth((this.Height != 100) ? this.Height : undefined);
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
	* Returns the if of the parent of the given node. If the given node doesn't exist or is the root node, it returns "".
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
		var node = this.getNodeById(nodeId);
		if (node) {
			node.set("text", text);
		}
	},

	// @TODO: Implementar cuando funcione Edit
	StartEdit: function (nodeId, value) {
		var node = this.getNodeById(nodeId);
		if (node) {
			this.m_treeEditor.editNode = node;
			this.m_treeEditor.startEdit(value || node.ui.textNode);
		}
	},

	// @TODO: Implementar cuando funcione Edit
	CancelEdit: function () {
		this.m_treeEditor.cancelEdit();
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
		for (var i = 0, len = records.length; i < len; i++) {
			var record = records[i];
			if (!this._enableCheckbox) {
				delete record.raw.checked;
				record.data.checked = null;
			}
			if (record.raw.leaf === false && record.raw.children && record.raw.children.length == 0)
				delete record.raw.children;
		}
		return this.callOverridden(arguments);
	}
});