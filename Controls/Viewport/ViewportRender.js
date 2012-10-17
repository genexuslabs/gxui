/// <reference path="..\..\Freezer\Ext\ext-all-dev.js" />

/**
* @class gxui.Viewport
* Viewport user control allows any contained GxUI control to occupy all the available space on screen.
* It can have only one GxUI control as a direct child, that must have its AddToParentGxUIControl property set to true.
*
*/
Ext.define('gxui.Viewport', {
	extend: 'gxui.UserControl',

	initialize: function () {
		this.callParent(arguments);
	},

	onRender: function () {
		var body = this.getChildContainer("Body");
		this.m_panel = Ext.create('gxui.container.NestedViewport', {
			id: this.getUniqueId(),
			contentEl: body,
			bodyCls: "gxui-noreset",
			layout: 'fit',
			renderTo: 'MAINFORM'
		});

		Ext.fly(body).setDisplayed(true);

		// Register as UC Container
		this.registerCt(this.getChildContainer("Body"), this.m_panel.add, this.m_panel.doLayout, this.m_panel);
	},

	getUnderlyingControl: function () {
		return this.m_panel;
	}
});