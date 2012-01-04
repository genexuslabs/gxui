gxui.PropertiesEditorTree = Ext.extend(Ext.tree.TreePanel, {
	lines: false,
	borderWidth: 2, // the combined left/right border for each cell
	cls: 'x-column-tree',
	rootVisible: false,
	/**
	* @cfg {Boolean} readOnly Set to true if the property editor is read only. Defaults to false.
	*/
	readOnly: false,

	/**
	* @cfg {Boolean} alphOrder Set to true if the properties should be loaded in alphabetical order, in flat format. Defaults to false.
	*/
	alphOrder: false,

	/**
	* @cfg {Boolean} enableContextMenu Set to true to enable the context menu. Defaults to true.
	*/
	enableContextMenu: true,

	/**
	* @cfg {String} useDefaultText Text to show in the context menu for the "Use Default" option.
	*/
	useDefaultText: "Use Default",

	/**
	* @cfg {String} LoadingText Text to show when the properties are being loaded.
	*/
	loadingText: "Loading...",

	initComponent: function() {
		this.filter.filterActiveClass = 'gxui-prop-filter-active';

		this.filter.filterTextField = new Ext.form.TextField({
			width: this.filter.width,
			emptyText: this.filter.emptyText,
			listeners: {
				render: function(f) {
					f.el.on('keydown', function(e) {
						if (e.getKey() != e.TAB) {
							this.filterTree(e.target.value);
						}
					}, this, { buffer: 350 });

					f.el.on('blur', function(e) {
						// Select first visible node of the tree when leaving the filter field.
						this.root.cascade(function(n) {
							var selNode = this.getSelectionModel().getSelectedNode();
							if (!selNode || (selNode && selNode.hidden)) {
								if (n.isLeaf() && !n.hidden) {
									n.select();
									return false;
								}
								return true;
							}
						}, this);
					}, this);
				},
				scope: this
			}
		});

		this.tbar = [
			this.filter.filterTextField,
			' ',
			' ',
			Ext.apply(this.tbarActions.order, {
				toggleHandler: function(btn, state) {
					this.alphOrder = state;
					this.loadProperties();
				},
				enableToggle: true,
				scope: this
			}),
			'-',
			Ext.apply(this.tbarActions.expand, {
				handler: function() {
					this.root.expand(true);
					this.resizeColumns();
				},
				scope: this
			}),
			Ext.apply(this.tbarActions.collapse, {
				handler: function() {
					this.root.collapse(true);
					this.resizeColumns();
				},
				scope: this
			})
		];

		this.root = new Ext.tree.AsyncTreeNode({
			expanded: true,
			expandable: false,
			cls: 'gxui-prop-category'
		});

		gxui.PropertiesEditorTree.superclass.initComponent.call(this);

		this.addEvents(
		/**
		* @event labeldoubleclick
		* Fires a label is double clicked
		* @param {gxui.PropertiesEditorTree} this
		* @param {Object} node Double clicked node
		*/
			"labeldoubleclick",

		/**
		* @event valuechanged
		* Fires when the value of the property is changed
		* @param {gxui.PropertiesEditorTree} this
		* @param {Object} node Changed node
		*/
			"valuechanged",

		/**
		* @event defaultvalue
		* Fires when the user selects to reset a property to its default value
		* @param {gxui.PropertiesEditorTree} this
		* @param {Object} node Changed node
		*/
			"defaultvalue"
		);

		// This is necessary to enable moving with the keyboard, no matter if the user clicks 
		// on the property label or outside of it.
		this.getSelectionModel().on('selectionchange', function(selModel, node) {
			if (node) {
				node.ui.anchor.focus();
			}
		}, this);

		if (!this.stateEvents) {
			this.stateEvents = [];
		}
		this.stateEvents.push('collapsenode');
		this.stateEvents.push('expandnode');
	},

	onRender: function() {
		gxui.PropertiesEditorTree.superclass.onRender.apply(this, arguments);
		this.headers = this.body.createChild({ cls: 'x-tree-headers' }, this.innerCt.dom);

		var cols = this.columns, c;
		var totalWidth = 0;

		var totalWidth = this.createTreeHeaders(cols.label);
		totalWidth += this.createTreeHeaders(cols.value);

		this.headers.createChild({ cls: 'x-clear' });
		// prevent floats from wrapping when clipped
		this.headers.setWidth(totalWidth);
		this.innerCt.setWidth(totalWidth);

		this.filter.treeFilter = new Ext.tree.TreeFilter(this, {
			clearBlank: true,
			autoClear: true
		});

		this.on('bodyresize', function() {
			this.resizeColumns();
		}, this);

		if (this.enableContextMenu) {
			this.on('contextmenu', this.onContextMenu, this);
		}

		this.indicator = this.body.createChild({ tag: 'div', cls: 'loading-indicator', style: 'display:none;', html: this.loadingText });
		this.indicator.setVisibilityMode(Ext.Element.DISPLAY);

		this.getLoader().on('load', this.applyState.createDelegate(this));
	},

	loadProperties: function(objId, propsObj, defsObj) {
		var loader = this.getLoader();
		if (objId) {
			loader.objId = objId;
		}
		this.showIndicator();

		var propsStore = (!propsObj || !defsObj) ? undefined : new Ext.data.JsonStore({
			fields: gxui.Properties.ObjectsRepository.fields,
			data: propsObj,
			autoLoad: true
		});

		var args = [this.getRootNode(),
			function() {
				// Re-apply the filter after reloading the properties.
				this.filterTree(this.filter.filterTextField.getValue());
				// Set the node that was selected before reloading as the currently selected node. This shouldn't be necesary if stateful is enabled.
				//			if (this.selectionPath) {
				//				this.selectPath(this.selectionPath);
				//			}
				this.resizeColumns();
				this.hideIndicator();
			} .createDelegate(this),
			this.alphOrder,
			propsStore,
			defsObj
		];

		if (loader.isLoading())
			loader.load.defer(500, loader, args);
		else
			loader.load.apply(loader, args);
	},

	createTreeHeaders: function(c) {
		var totalWidth = c.width;
		this.headers.createChild({
			cls: 'x-tree-hd ' + (c.cls ? c.cls + '-hd' : ''),
			cn: {
				cls: 'x-tree-hd-text',
				html: c.header
			},
			style: 'width:' + (c.width - this.borderWidth) + 'px;'
		});

		return totalWidth;
	},

	hiddenCategories: [],

	filterTree: function(text) {
		Ext.each(this.hiddenCategories, function(n) {
			n.ui.show();
		});

		if (text == "") {
			this.filter.treeFilter.clear();
			this.filter.filterTextField.removeClass(this.filter.filterActiveClass);
			return;
		}
		else {
			// Expand all the nodes of the tree before filtering.
			this.root.expand(true);

			this.filter.filterTextField.addClass(this.filter.filterActiveClass);

			var re = new RegExp(Ext.escapeRe(text), 'i');
			this.filter.treeFilter.filterBy(function(n) {
				return (!n.leaf && n.attributes.Category != undefined) || re.test(n.attributes.text);
			});

			// hide empty categories that weren't filtered
			this.hiddenCategories = [];
			this.hideCategories(this.root);
		}
		this.resizeColumns();
	},

	hideCategories: function(node) {
		if (!node.leaf && node.attributes.Category != undefined) {
			var hide = true;
			node.eachChild(function(n) {
				hide = this.hideCategories(n) && hide;
			}, this);

			if (hide) {
				node.ui.hide();
				this.hiddenCategories.push(node);
			}
		}

		return node.hidden;
	},

	onContextMenu: function(node, e) {
		if (node.isLeaf() && !node.attributes.isReadonly) {
			if (!this.contextMenu) {
				this.contextMenu = new Ext.menu.Menu({
					items: [
								{
									id: 'use-default',
									text: this.useDefaultText
								}
							],
					listeners: {
						itemclick: function(item) {
							switch (item.id) {
								case 'use-default':
									this.fireEvent('defaultvalue', this, this.ctxNode);
									break;
							}
						},
						scope: this
					}
				});
			}
			this.ctxNode = node;
			this.ctxNode.select();
			this.contextMenu.showAt(e.getXY());
		}
		else {
			this.ctxNode = null;
		}
	},

	// Overriden
	getSelectionModel: function() {
		if (!this.selModel) {
			this.selModel = new gxui.PropertiesEditorSelectionModel();
		}
		return this.selModel;
	},

	// Resize columns
	resizeColumns: function() {
		var Cwidth = this.body.getViewSize().width;

		if (Cwidth) {
			var labelWidth = Cwidth * 0.5;
			var valueWidth = Cwidth * 0.5;
			Ext.select("div.x-tree-hd:nth-child(1)", false, this.getId()).setWidth(labelWidth);
			Ext.select("div.x-tree-col:nth-child(1)", false, this.getId()).setWidth(valueWidth);
			Ext.select("div.x-tree-col:nth-child(2)", false, this.getId()).setWidth(valueWidth);
			this.columns.label.width = labelWidth;
			this.columns.value.width = valueWidth;

			this.headers.setWidth(labelWidth + valueWidth);
			this.innerCt.setWidth(labelWidth + valueWidth);
		}
	},

	showIndicator: function() {
		if (this.indicator) {
			this.indicator.show();
		}
	},

	hideIndicator: function() {
		if (this.indicator) {
			this.indicator.hide();
		}
	},

	setPropertyValue: function(id, value) {
		var node = (typeof id == "object") ? id : this.getNodeById(id);
		if (node) {
			node.attributes.value = value;
			var valueNode = node.ui.valueNode;
			var valueEditor = node.ui.valueEditor;
			valueNode.update((valueEditor && valueEditor.renderer ? valueEditor.renderer(value) : value) || "&nbsp;");
			this.fireEvent('valuechanged', this, node);
		}
	},

	getPropertyValue: function(id) {
		var node = (typeof id == "object") ? id : this.getNodeById(id);
		if (node) {
			return node.attributes.value;
		}
	},

	getState: function() {
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
	},

	applyState: function() {
		//read state in from cookie, not from what is passed in
		var cookie = Ext.state.Manager.get(this.stateId);
		if (!cookie)
			return;
		var nodes = cookie.expandedNodes;
		for (var i = 0; i < nodes.length; i++) {
			if (typeof nodes[i] != 'undefined') {
				this.expandPath(nodes[i]);
			}
		}
	}
});

// Custom selection model for properties editor.
gxui.PropertiesEditorSelectionModel = Ext.extend(Ext.tree.DefaultSelectionModel, {
	onKeyDown: function(e){
		gxui.PropertiesEditorSelectionModel.superclass.onKeyDown.call(this, e);
		
		var k = e.getKey();
		switch(k){
			case e.TAB:
				e.preventDefault();
				if (!e.shiftKey && !e.ctrlKey){
					this.selNode.ui.startEditorDeferred(this.tree, this.selNode);
				}
			break;
		};
	}
});