gxui.Viewport = Ext.extend(gxui.UserControl, {
	initialize: function() {
		gxui.Viewport.superclass.initialize.call(this);
	},

	onRender: function() {
		this.m_panel = new Ext.ux.NestedViewport({
			id: this.getUniqueId(),
			contentEl: this.getChildContainer("Body"),
			layout: 'fit',
			renderTo: 'MAINFORM'
		});
		
		// Register as UC Container
		this.registerCt(this.getChildContainer("Body"), this.m_panel.add, this.m_panel.doLayout, this.m_panel);
	},

	getUnderlyingControl: function() {
		return this.m_panel;
	}
});