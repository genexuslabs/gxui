
/// <reference path="..\..\Freezer\Ext\ext-all-dev.js" />

/**
* @class gxui.Panel
* Panel User Control. Wraps Ext.panel.Panel so it can be used from GeneXus.
*
* The control basically is a container of other controls. After dragging the control to the form you can include any control in the cell provided by the control.
* Also, it came with a Toolbar included.
* {@img Panel/panelSample.png}
*
* #More information:#
* For examples please see the [online KB][1].
* [1]: http://xev2.genexusserver.com/gxserver/action.aspx?1,RSSReader2.0:0:c9584656-94b6-4ccd-890f-332d11fc2c25:41
*/
Ext.define('gxui.Panel', {
	extend: 'gxui.UserControl',

	/**
	* @event ButtonPressed
	* @inheritdoc gxui.Toolbar#ButtonPressed
	*/

	//private
	SetToolbarData: function (data) {
		this.ToolbarData = data;
	},

	//private
	GetToolbarData: function (data) {
		return this.ToolbarData;
	},

	onRender: function () {
		var config = this.getConfig();

		if (gxui.CBoolean(this.ShowAsWindow)) {
			config.closeAction = "hide";
			config.renderTo = 'MAINFORM';
			config.modal = gxui.CBoolean(this.Modal);
			config.constrainHeader = true;
			this.m_panel = new Ext.create('Ext.window.Window', config);

			if (gx.lang.gxBoolean(this.Visible)) {
				this.m_panel.show();
			}
		}
		else {
			this.m_panel = Ext.create('Ext.panel.Panel', config);
		}

		// Register as UC Container
		this.registerCt(this.getChildContainer("Body"), this.m_panel.add, this.m_panel.doLayout, this.m_panel);
	},

	onRefresh: function () {
		var panel = this.m_panel;
		if (this.Title != panel.title) {
			panel.setTitle(this.Title);
		}
		if (!panel.ownerCt) {
			var width = parseInt(this.Width),
				height = parseInt(this.Height);

			if ((!gxui.CBoolean(this.AutoWidth) && panel.getWidth() != width) || (!gxui.CBoolean(this.AutoHeight) && panel.getHeight() != height)) {
				panel.animate({
					to: {
						width: width,
						height: height
					}
				});
			}
		}

		if (gx.lang.gxBoolean(this.Visible) && !this.m_panel.isVisible()) {
			panel.show();
		}
		else {
			if (!gx.lang.gxBoolean(this.Visible) && panel.isVisible()) {
				panel.hide();
			}
		}

		if (gxui.CBoolean(this.UseToolbar)) {
			this.m_gxTbar.SetData(this.ToolbarData);
			this.m_gxTbar.onRefresh();
		}
	},

	getUnderlyingControl: function () {
		return this.m_panel;
	},

	addToParent: function () {
		return !gxui.CBoolean(this.ShowAsWindow) && (this.AddToParentGxUIControl == undefined || gxui.CBoolean(this.AddToParentGxUIControl));
	},

	//private
	getConfig: function () {
		var dockedItems = [],
			bodyEl = Ext.get(this.getChildContainer("Body"));

		if (gxui.CBoolean(this.UseToolbar)) {
			var position = this.ToolbarPosition || 'top';

			this.m_gxTbar = Ext.create('gxui.Toolbar', { register: false });
			this.m_toolbar = this.m_gxTbar.createToolbar({
				id: this.getUniqueId() + "_Toolbar",
				data: this.ToolbarData,
				vertical: !(position == 'bottom' || position == 'top'),
				dock: position,
				container: this
			});

			dockedItems.push(this.m_toolbar);
		}

		bodyEl.enableDisplayMode().show();
		if (gxui.CBoolean(this.AutoHeight)) {
			bodyEl.setStyle({
				height: 'auto',
				display: 'inline-block'
			});
		}

		var config = {
			contentEl: bodyEl,
			id: this.getUniqueId(),
			autoWidth: gxui.CBoolean(this.AutoWidth),
			autoHeight: gxui.CBoolean(this.AutoHeight),
			autoScroll: (this.Layout == 'default'),
			frame: gxui.CBoolean(this.Frame),
			border: gxui.CBoolean(this.Border) ? 2 : false,
			collapsible: gxui.CBoolean(this.Collapsible),
			collapsed: gxui.CBoolean(this.Collapsed),
			animCollapse: gxui.CBoolean(this.AnimateCollapse),
			resizable: gxui.CBoolean(this.Resizable),
			dockedItems: dockedItems,
			listeners: this.getListeners(),
			stateful: gxui.CBoolean(this.Stateful),
			stateId: (this.StateId != "") ? this.StateId : undefined,
			layout: this.Layout == 'default' ? undefined : this.Layout,
			bodyCls: "gxui-noreset"
		};

		gxui.tryPropertyMapping(config, this, {
			"title": "Title",
			"headerPosition": "HeaderPosition",
			"minWidth": "MinWidth",
			"minHeight": "MinHeight",
			"maxWidth": "MaxWidth",
			"maxHeight": "MaxHeight",
			"collapseDirection": "CollapseDirection",
			"resizeHandles": "Handles",
			"iconCls": "IconCls",
			"cls": "Cls"
		});

		if (!gxui.CBoolean(this.AutoWidth))
			config.width = parseInt(this.Width);

		if (!gxui.CBoolean(this.AutoHeight))
			config.height = parseInt(this.Height);

		if (!gx.lang.gxBoolean(this.Visible))
			config.hidden = true;

		return config;
	},

	fixAutoDimensions: function (panel) {
		if (!this.fixingAutoDims) {
			this.fixingAutoDims = true;
			if (panel.rendered) {
				if (gxui.CBoolean(this.AutoHeight)) {
					panel.el.setHeight('auto');
					panel.body.setHeight('auto');
					if (panel.header && (panel.headerPosition == "top" || panel.headerPosition == "bottom")) {
						panel.body.setStyle('margin-bottom', Ext.dom.AbstractElement.addUnits(panel.header.getHeight(), "px"));
					}
				}

				if (gxui.CBoolean(this.AutoWidth)) {
					panel.el.setWidth('auto');
					panel.body.setWidth('auto');
					if (panel.header && (panel.headerPosition == "top" || panel.headerPosition == "bottom")) {
						Ext.defer(panel.header.setWidth, 50, panel.header, ['auto']);
					}
				}
			}
			this.fixingAutoDims = false;
		}
	},

	//private
	getListeners: function () {
		return {
			'collapse': function () {
				this.Collapsed = "true";
			},

			'expand': function () {
				this.Collapsed = "false";
			},

			'hide': function () {
				this.Visible = false;
				/**
				* @event OnClose
				* Fires after a panel, configured as a Window ({@link #ShowAsWindow} = True), is closed.
				*/
				if (this.OnClose) {
					this.OnClose();
				}
			},

			'add': this.fixAutoDimensions,

			'afterrender': this.fixAutoDimensions,

			scope: this
		};
	},

	methods: {
		// Methods
		/**
		* @method
		* @inheritdoc gxui.Toolbar#ChangeToolbar
		*/
		ChangeToolbar: function (toolbarData) {
			if (this.m_gxTbar)
				this.m_toolbar = this.m_gxTbar.ChangeToolbar(toolbarData, this.getUniqueId() + "_Toolbar", this);
		},

		/**
		* Collapses the panel body so that the body becomes hidden.
		* @param {Boolean} [animate] True to animate the transition, else false (defaults to the value of the AnimateCollapse property).
		* @method
		*/
		Collapse: function (animate) {
			this.m_panel.collapse(this.CollapseDirection, animate);
		},

		/**
		* Expands the panel body so that it becomes visible.
		* @param {Boolean} [animate] True to animate the transition, else false (defaults to the value of the AnimateCollapse property).
		* @method
		*/
		Expand: function (animate) {
			this.m_panel.expand(animate);
		},

		/**
		* @method
		* @inheritdoc gxui.Toolbar#DisableItem
		*/
		DisableToolbarItem: function (itemId) {
			this.m_gxTbar.DisableItem(itemId);
		},

		/**
		* @method
		* @inheritdoc gxui.Toolbar#EnableItem
		*/
		EnableToolbarItem: function (itemId) {
			this.m_gxTbar.EnableItem(itemId);
		},

		/**
		* @method
		* @inheritdoc gxui.Toolbar#HideItem
		*/
		HideToolbarItem: function (itemId) {
			this.m_gxTbar.HideItem(itemId);
		},

		/**
		* @method
		* @inheritdoc gxui.Toolbar#ShowItem
		*/
		ShowToolbarItem: function (itemId) {
			this.m_gxTbar.ShowItem(itemId);
		},

		/**
		* Centers the panel (only applies when ShowAsWindow property is set to true).
		* @method
		*/
		CenterWindow: function () {
			if (gxui.CBoolean(this.ShowAsWindow)) {
				this.m_panel.center();
			}
		}
	}
});