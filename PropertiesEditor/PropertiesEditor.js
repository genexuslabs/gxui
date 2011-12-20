/// <reference path="..\VStudio\vswd-ext_2.2.js" />

gxui.PropertiesEditor = Ext.extend(gxui.UserControl, {
	initialize: function() {
		gxui.PropertiesEditor.superclass.initialize.call(this);
	},

	onRender: function() {
		this.m_tree = new gxui.PropertiesEditorTree({
			id: this.getUniqueId(),
			renderTo: this.getContainerControl(),
			width: (this.Width != 300) ? this.Width : undefined,
			height: gxui.CBoolean(this.AutoHeight) ? undefined : this.Height,
			autoHeight: gxui.CBoolean(this.AutoHeight),
			readOnly: gxui.CBoolean(this.ReadOnly),
			autoScroll: true,
			hideHeader: true,
			cls: 'gxui-prop-panel',
			enableContextMenu: this.EnableContextMenu,
			useDefaultText: this.UseDefaultText,
			loadingText: this.LoadingText,
			animate: false,
			animCollapse: false,
			stateful: true,
			stateId: this.getUniqueId(),

			filter: {
				width: this.FilterBoxWidth,
				emptyText: this.FilterEmptyText
			},

			tbarActions: {
				order: {
					tooltip: this.IconOrderTooltip || 'Order',
					icon: this.IconOrderURL ? this.IconExpandURL : undefined,
					iconCls: this.IconOrderURL ? 'x-btn-text-icon' : 'icon-order'
				},
				expand: {
					tooltip: this.IconExpandTooltip || 'Expand all',
					icon: this.IconExpandURL ? this.IconExpandURL : undefined,
					iconCls: this.IconExpandURL ? 'x-btn-text-icon' : 'icon-expand-all'
				},
				collapse: {
					tooltip: this.IconCollapseTooltip || 'Collapse all',
					icon: this.IconCollapseURL ? this.IconCollapseURL : undefined,
					iconCls: this.IconCollapseURL ? 'x-btn-text-icon' : 'icon-collapse-all'
				}
			},

			columns: {
				label: {
					width: 0,
					dataIndex: 'text'
				},
				value: {
					width: 0,
					dataIndex: 'value'
				}
			},

			loader: new gxui.PropertiesEditorLoader({
				objId: this.ObjectId,
				defParams: {
					url: this.DefinitionsLoaderURL
				},
				objParams: {
					url: this.PropertiesLoaderURL
				}
			})
		});
		this.addListeners();

		// Add to parent UC container
		this.addToParentContainer(this.m_tree);
	},

	onRefresh: function() {
		var doRefresh = function() {
			if (gxui.CBoolean(this.Refresh)) {
				this.m_tree.loadProperties(this.ObjectId);
				this.Refresh = false;
			}

			this.m_scheduled = false;
		};

		if (!this.m_scheduled) {
			this.m_scheduled = true;
			setTimeout(doRefresh.createDelegate(this), 500);
		}
	},

	getUnderlyingControl: function() {
		return this.m_tree;
	},

	addListeners: function() {
		this.m_tree.on({
			'defaultvalue': {
				fn: function(tree, node) {
					this.SelectedPropertyId = node.attributes.id;
					this.SelectedPropertyValue = node.attributes.value;
					if (this.GetDefault) {
						this.GetDefault();
					}
				},
				scope: this
			},
			'valuechanged': {
				fn: function(tree, node, col) {
					this.SelectedPropertyId = node.attributes.id;
					this.SelectedPropertyValue = node.attributes.value;
					if (this.PropertyChanged) {
						this.PropertyChanged();
					}
				},
				scope: this
			}
		});
	},

	SetSelectedObjectId: function(id) {
		this.ObjectId = id;
		this.RefreshData();
	},

	SetSelectedObject: function(propsObj, defsObj) {
		this.m_tree.loadProperties(null, propsObj, defsObj);
	},

	RefreshData: function() {
		this.Refresh = true;
		this.onRefresh();
	},

	SetPropertyValue: function(propId, value) {
		this.m_tree.setPropertyValue(propId, value);
	},

	GetPropertyValue: function(propId) {
		return this.m_tree.getPropertyValue(propId);
	}
});