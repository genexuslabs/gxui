/// <reference path="..\VStudio\vswd-ext_2.2.js" />

gxui.Container = Ext.extend(gxui.UserControl, {
	m_element: null,
	
	initialize: function(){
		gxui.Container.superclass.initialize.call(this);
		
		this.Width;
		this.Height;
		this.Visible;
	},
	
	onRender: function(){
		this.m_element = Ext.get(this.getChildContainer("Body"));
		this.m_element.enableDisplayMode();
		if (!gxui.CBoolean(this.Visible))
			this.m_element.hide();
		else
		    this.m_element.show();
	},
	
	onRefresh: function(){
		if (!gxui.CBoolean(this.Visible) && this.m_element.isVisible())
			this.m_element.slideOut();
			
		if (gxui.CBoolean(this.Visible) && !this.m_element.isVisible())
			this.m_element.slideIn();
	},

	getUnderlyingControl : function(){
		return this.m_element;
	}
});