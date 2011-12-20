/// <reference path="..\VStudio\vswd-ext_2.2.js" />

gxui.Treeview = Ext.extend(gxui.UserControl, {
    // Private members
    m_tree: null,

    initialize: function() {
        gxui.Treeview.superclass.initialize.call(this);

        this.NotifyContext = "false";
        this.NotifyDataType = 'gxuiTreeNode';
        this.CheckedNodes = [];
    },

    // Databinding
    SetChildren: function(data) {
        this.Children = data;
    },

    // Databinding
    GetChildren: function(data) {
        return this.Children;
    },

    // Databinding
    SetCheckedNodes: function(data) {
        this.CheckedNodes = data;
    },

    // Databinding
    GetCheckedNodes: function(data) {
        if (this.m_tree) {
            this.CheckedNodes = this.m_tree.getChecked("id");
        }
        return this.CheckedNodes;
    },

    // Databinding
    SetUncheckedNodes: function(data) {
        this.UncheckedNodes = data;
    },

    // Databinding
    GetUncheckedNodes: function(data) {
        if (this.m_tree) {
            var root = this.m_tree.getRootNode();
            if (root) {
                var nodes = [];
                root.cascade(function() {
                    if (this.attributes.checked === false) {
                        nodes.push(this.id);
                    }
                });
                this.UncheckedNodes = nodes;
            }
        }
        return this.UncheckedNodes;
    },

    // Databinding
    SetDropData: function(data) {
        this.DropData = data;
    },

    // Databinding
    GetDropData: function(data) {
        return this.DropData;
    },

    // Databinding
    SetSelectedNodeData: function(data) {
        this.SelectedNodeData = data;
    },

    // Databinding
    GetSelectedNodeData: function(data) {
        return this.SelectedNodeData;
    },

    onRender: function() {
        var Tree = Ext.tree;
        var enableCheckbox = gxui.CBoolean(this.EnableCheckbox);
        var ddGroup = this.DragDropGroup || undefined;

        this.Width = parseInt(this.Width);
        this.Height = parseInt(this.Height);

        this.m_tree = new Tree.TreePanel({
            id: this.getUniqueId(),
            renderTo: this.getContainerControl(),
            width: (this.Width != 100) ? this.Width : undefined,
            height: (this.Height != 100) ? this.Height : undefined,
            title: this.Title,
            frame: gxui.CBoolean(this.Frame),
            border: gxui.CBoolean(this.Border),
            cls: this.Cls,
            animate: gxui.CBoolean(this.Animate),
            rootVisible: gxui.CBoolean(this.RootVisible),
            lines: gxui.CBoolean(this.ShowLines),
            loader: new Tree.TreeLoader({
                dataUrl: (gxui.CBoolean(this.LazyLoading)) ? this.LoaderURL : undefined,
                preloadChildren: !gxui.CBoolean(this.LazyLoading),
                createNode: function(attr) {
                    // Create node function is overriden to remove checked attribute if checkboxes aren't enabled, to avoid
                    // rendering the checkbox when not needed.
                    if (!enableCheckbox) {
                        delete attr.checked;
                    }
                    return Ext.tree.TreeLoader.prototype.createNode.call(this, attr);
                },
                listeners: {
                    'beforeload': function() {
                        this.loading = true;
                    },
                    'load': function() {
                        this.loading = false;
                    },
                    scope: this
                }
            }),
            enableDD: gxui.CBoolean(this.EnableDragDrop),
            ddAppendOnly: gxui.CBoolean(this.AppendOnly),
            dragConfig: {
                primaryButtonOnly: false,
                ddGroup: ddGroup
            },
            dropConfig: {
                ddGroup: ddGroup
            },
            autoScroll: gxui.CBoolean(this.AutoScroll),
            containerScroll: gxui.CBoolean(this.Scroll),
            stateful: gxui.CBoolean(this.Stateful),
            stateId: (this.StateId && this.StateId != "") ? this.StateId : this.getUniqueId(),
            stateEvents: gxui.CBoolean(this.Stateful) ? ['collapsenode', 'expandnode'] : undefined,
            getState: gxui.CBoolean(this.Stateful) ? gxui.Treeview.getState : undefined,
            applyState: gxui.CBoolean(this.Stateful) ? gxui.Treeview.applyState(gxui.CBoolean(this.LazyLoading)) : undefined,
            root: new Tree.AsyncTreeNode({
                id: (this.RootId ? this.RootId : 'ROOT'),
                text: this.RootText,
                icon: (this.RootIcon ? this.RootIcon : undefined),
                cls: (this.RootCls ? this.RootCls : undefined),
                iconCls: (this.RootIconCls ? this.RootIconCls : undefined),
                draggable: false, // disable root node dragging
                children: !gxui.CBoolean(this.LazyLoading) ? gxui.clone(this.Children.length && this.Children.length > 0 ? this.Children : [this.Children]) : undefined
            }),
            selModel: gxui.CBoolean(this.Multiselection) ? new Ext.tree.MultiSelectionModel() : undefined
        });

        this.m_tree.addListener(this.getListeners());

        if (gxui.CBoolean(this.Multiselection)) {
            this.m_tree.getSelectionModel().addListener('selectionchange', function(selModel, nodes) {
                this.SelectedNodes = [];
                Ext.each(nodes, function(node) {
                    this.SelectedNodes.push(node.id);
                }, this);
            }, this);
        }

        if (gxui.CBoolean(this.Editable)) {
            this.m_treeEditor = new Ext.tree.TreeEditor(this.m_tree, {}, {
                allowBlank: false,
                selectOnFocus: true,
                cancelOnEsc: true,
                completeOnEnter: true,
                ignoreNoChange: true,
                listeners: {
                    'complete': function(editor, value) {
                        this.NodeEditText = value;
                        if (this.NodeEdit) {
                            this.NodeEdit();
                        }
                    },
                    scope: this
                },
                // Overriden function to avoid bug in IE. See: http://www.extjs.com/forum/showthread.php?43408-2.2-OPEN-TreeEditor-Behaviour&p=285736
                triggerEdit: function(node, defer) {
                    this.completeEdit();
                    if (node.attributes.editable !== false) {

                        this.editNode = node;
                        if (this.tree.autoScroll && !Ext.isIE) {
                            node.ui.getEl().scrollIntoView(this.tree.body);
                        }
                        this.autoEditTimer = this.startEdit.defer(this.editDelay, this, [node.ui.textNode, node.text]);
                        return false;
                    }
                }
            });
        }

        // Add a tree sorter in folder mode
        if (gxui.CBoolean(this.Sort))
            new Tree.TreeSorter(this.m_tree, { folderSort: true });

        // Add to parent UC container
        if (gxui.CBoolean(this.AddToParentGxUIControl)) {
            this.addToParentContainer(this.m_tree);
        }

        this.m_tree.render();

        if (gxui.CBoolean(this.ExpandRoot))
            this.m_tree.getRootNode().expand(gxui.CBoolean(this.ExpandAll), gxui.CBoolean(this.Animate));
    },

    onRefresh: function() {
        var selNode = this.m_tree.getSelectionModel().getSelectedNode();
        if (selNode) {
            this.setSelectedNode(selNode);
        }
    },

    getUnderlyingControl: function() {
        return this.m_tree;
    },

    loadTreeNodes: function() {
        var children = gxui.clone(this.Children.length && this.Children.length > 0 ? this.Children : [this.Children]);
        this.m_tree.root.attributes.children = children;
    },

    getRowDropData: function(dropEvent) {
        if (dropEvent.data && dropEvent.data.gxRow) {
            var gxRow = dropEvent.data.gxRow;
            var gxCols = dropEvent.data.gxColumns;

            var dropData = {};
            Ext.each(gxCols, function(col, i) {
                var colName = col.gxAttName || (col.gxAttId.charAt(0) == "&" ? col.gxAttId.substring(1) : col.gxAttId);
                dropData[colName] = gxRow.values[i];
            }, this);

            return dropData;
        }

        return null;
    },

    getNodeById: function(node) {
        return this.m_tree.getNodeById(node);
    },

    getListeners: function() {
        var listeners = {
            'click': function(node, e) {
                this.endEdit();
                this.setSelectedNode(node);
                if (gx.lang.emptyObject(node.attributes.href)) {
                    if (this.NotifyContext == "true") {
                        var types = new Array();
                        types[0] = this.NotifyDataType;

                        this.notifyContext(types, { id: node.id, text: node.text, leaf: node.leaf, icon: node.attributes.icon });
                    }
                    if (this.Click && (!node.hasChildNodes() || !gxui.CBoolean(this.DisableBranchEvents))) {
                        this.Click();
                    }
                }
            },

            'dblclick': function(node, e) {
                this.endEdit();
                this.setSelectedNode(node);
                if (this.DoubleClick && (!node.hasChildNodes() || !gxui.CBoolean(this.DisableBranchEvents))) {
                    this.DoubleClick();
                }
            },

            'nodedragover': function(dragOverEvent) {
                if (this.NodeOver) {
                    // Set UC properties before fireing the event
                    this.DropTarget = dragOverEvent.target.id;
                    this.DropPoint = dragOverEvent.point;
                    if (dragOverEvent.source.grid) {
                        this.DropData = this.getRowDropData(dragOverEvent);
                    }
                    else {
                        this.DropNode = dragOverEvent.dropNode.id;
                    }

                    this.DropAllowed = true;

                    // Fire the event
                    this.NodeOver();

                    return this.DropAllowed;
                }
                return true;
            },

            'beforenodedrop': function(dropEvent) {
                dropEvent.rawEvent.preventDefault();
                if (dropEvent.source.grid) {
                    this.DropTarget = dropEvent.target.id;
                    this.DropPoint = dropEvent.point;

                    this.DropData = this.getRowDropData(dropEvent);
                    dropEvent.target.ui.endDrop(); // Ended here because if the RowDrop runs in the server, the ghost is not hidden.

                    if (this.RowDrop) {
                        this.RowDrop();
                    }
                }

                // Disable context menu until (workaround for avoiding showing context menu in right click D&D operations in IE and Chrome)
                Ext.getBody().on('contextmenu', Ext.emptyFn, this, {
                    single: true,
                    stopEvent: true,
                    preventDefault: true
                });
            },

            'nodedrop': function(dropEvent) {
                this.DropTarget = dropEvent.target.id;
                this.DropPoint = dropEvent.point;

                if (dropEvent.dropNode) {
                    this.DropNode = dropEvent.dropNode.id;
                    if (this.NodeDrop) {
                        this.NodeDrop();
                    }
                }
            },

            'checkchange': function(node) {
                if (this.CheckChange) {
                    this.setSelectedNode(node);
                    node.select();
                    this.CheckChange();
                }
            },

            scope: this
        };

        if (this.ContextMenu) {
            listeners['contextmenu'] = function(node) {
                this.endEdit();
                if (this.ContextMenu) {
                    this.setSelectedNode(node);
                    node.select();
                    this.ContextMenu();
                }
            };
        }

        return listeners;
    },

    setSelectedNode: function(node) {
        this.SelectedNode = node.id;
        this.SelectedText = node.text;
        this.SelectedIcon = node.attributes.icon;
        this.SelectedNodeData = node.attributes.data;
        this.SelectedNodeChecked = node.attributes.checked || false;
    },

    endEdit: function() {
        if (this.m_treeEditor) {
            this.m_treeEditor.completeEdit();
        }
    },

    // Helper function used by public methods that must be run when the tree is done loading its nodes.
    doAfterLoad: function(fn, scope) {
        if (this.loading) {
            this.m_tree.getLoader().on('load', fn, scope, { single: true });
        }
        else {
            fn.call(scope);
        }
    },

    // Methods
    SelectNode: function(nodeId) {
        this.doAfterLoad(function() {
            var node = this.getNodeById(nodeId);
            if (node) {
                this.setSelectedNode(node)
                node.select();
                this.m_tree.expandPath(node.getPath());
            }
        }, this);
    },

    ExpandNode: function(nodeId) {
        this.doAfterLoad(function() {
            var node = this.getNodeById(nodeId);
            if (node) {
                node.expand();
            }
        }, this);
    },

    ExpandAllNodes: function() {
        this.doAfterLoad(function() {
            this.m_tree.expandAll();
        }, this);
    },

    CollapseNode: function(nodeId) {
        this.doAfterLoad(function() {
            var node = this.getNodeById(nodeId);
            if (node) {
                node.collapse();
            }
        }, this);
    },

    CollapseAllNodes: function() {
        this.doAfterLoad(function() {
            this.m_tree.collapseAll();
        }, this);
    },

    Reload: function(node, expand) {
        // node can be a TreeNode or a String with the Id of a node. If node is undefined, the root node is reloaded.
        var n = node ? ((typeof node == 'object') ? node : this.getNodeById(node)) : this.m_tree.getRootNode();

        if (n) {
            var loadCallback = function() {
                if (expand || expand === undefined) {
                    n.expand();
                }
            };

            var loader = this.m_tree.getLoader();
            if (gxui.CBoolean(this.LazyLoading)) {
                loader.dataUrl = this.LoaderURL;
                if (loader.isLoading())
                    loader.load.defer(500, loader, [n, loadCallback]);
                else
                    loader.load(n, loadCallback);
            }
            else {
                this.loadTreeNodes();
                // Workaround to force the node load event to execute, so the state is applied.
                loader.load(n, function() {
                    this.fireEvent("load", this);
                    loadCallback();
                } .createDelegate(n));
            }

            if (this.SelectedNode != undefined) {
                this.SelectNode(this.SelectedNode);
            }
        }
    },

    Refresh: function() {
        this.m_tree.setHeight((this.Width != 100) ? this.Width : undefined);
        this.m_tree.setWidth((this.Height != 100) ? this.Height : undefined);
        this.m_tree.setTitle(this.Title);
        this.Reload(this.m_tree.getRootNode(), gxui.CBoolean(this.ExpandRoot));
    },

    Show: function() {
        this.m_tree.setVisible(true);
    },

    Hide: function() {
        this.m_tree.setVisible(false);
    },

    GetNodeParentId: function(nodeId) {
        var node = this.getNodeById(nodeId);
        if (node && node.parentNode) {
            return node.parentNode.id;
        }
        return "";
    },

    SetNodeData: function(nodeId, nodeData) {
        var node = this.getNodeById(nodeId);
        if (node) {
            node.attributes.data = nodeData;
        }
    },

    GetNodeData: function(nodeId) {
        var node = this.getNodeById(nodeId);
        if (node) {
            return node.attributes.data;
        }
    },

    SetNodeText: function(nodeId, text) {
        var node = this.getNodeById(nodeId);
        if (node) {
            node.setText(text);
        }
    },

    StartEdit: function(nodeId, value) {
        var node = this.getNodeById(nodeId);
        if (node) {
            this.m_treeEditor.editNode = node;
            this.m_treeEditor.startEdit(value || node.ui.textNode);
        }
    },

    CancelEdit: function() {
        this.m_treeEditor.cancelEdit();
    },

    ClearAllNodes: function() {
        var root = this.m_tree.getRootNode();
        while (root.firstChild) {
            root.removeChild(root.firstChild);
        }
        delete root.attributes.children;
    },
	
	NodeExists: function(nodeId) {
		var node = this.getNodeById(nodeId);
		return (node ? true : false);
	}
});

gxui.Treeview.getState = function() {
	var nodes = [];
	this.getRootNode().eachChild(function(child) {
		//function to store state of tree recursively
		var storeTreeState = function(node, expandedNodes) {
			if (node.isExpanded() && node.childNodes.length > 0) {
				expandedNodes.push(node.getPath());
				node.eachChild(function(child) {
					storeTreeState(child, expandedNodes);
				});
			}
		};
		storeTreeState(child, nodes);
	});

	return {
		expandedNodes: nodes
	}
};

gxui.Treeview.applyState = function(lazyLoading) {
	return function(state) {
		var that = this;
		// If lazyLoading is enabled in the tree, attach to the loader's load event. If not, attach to the root node load event.
		var subject = lazyLoading ? this.getLoader() : this.root;
		subject.on('load', function() {
			//read state in from cookie, not from what is passed in
			var cookie = Ext.state.Manager.get(that.stateId);
			var nodes = cookie.expandedNodes;
			for (var i = 0; i < nodes.length; i++) {
				if (typeof nodes[i] != 'undefined') {
					that.expandPath(nodes[i]);
				}
			}
		});
	}
};
