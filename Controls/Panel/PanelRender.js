/// <reference path="..\..\Freezer\Ext\ext-all-dev.js" />

/**
* @class gxui.Panel
* Panel User Control. Wraps Ext.panel.Panel so it can be used from GeneXus.
*
* The control basically is a container of other controls. After dragging the control to the form you can include any control in the cell provided by the control.
* Also, it came with a Toolbar included.
* {@img Panel/panelSample.png}
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
		if (gxui.CBoolean(this.UseToolbar)) {
			this.m_gxTbar = Ext.create('gxui.Toolbar', { register: false });
			this.m_toolbar = this.m_gxTbar.createToolbar({
				id: this.getUniqueId() + "_Toolbar",
				data: this.ToolbarData,
				container: this
			});
		}

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
		panel.setTitle(this.Title);
		if (!panel.ownerCt) {
			panel.animate({
				to: {
					width: parseInt(this.Width),
					height: parseInt(this.Height)
				}
			});
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

	onAfterRender: function (panel) {
		panel.body.first('.gx_usercontrol_child').enableDisplayMode().show();
	},

	getUnderlyingControl: function () {
		return this.m_panel;
	},

	addToParent: function () {
		return !gxui.CBoolean(this.ShowAsWindow) && (this.AddToParentGxUIControl == undefined || gxui.CBoolean(this.AddToParentGxUIControl));
	},

	//private
	getConfig: function () {
		var config = {
			contentEl: this.getChildContainer("Body"),
			id: this.getUniqueId(),
			autoWidth: gxui.CBoolean(this.AutoWidth),
			autoHeight: gxui.CBoolean(this.AutoHeight),
			autoScroll: this.Layout == 'default' ? true : false,
			frame: gxui.CBoolean(this.Frame),
			border: gxui.CBoolean(this.Border) ? undefined : 0,
			collapsible: gxui.CBoolean(this.Collapsible),
			collapsed: gxui.CBoolean(this.Collapsed),
			animCollapse: gxui.CBoolean(this.AnimateCollapse),
			resizable: gxui.CBoolean(this.Resizable),
			tbar: this.m_toolbar,
			listeners: this.getListeners(),
			stateful: gxui.CBoolean(this.Stateful),
			stateId: (this.StateId != "") ? this.StateId : undefined,
			layout: this.Layout == 'default' ? undefined : this.Layout
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

			scope: this
		};
	},

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
});