/// <reference path="..\VStudio\vswd-ext_2.1.js" />

gxui.Accordion = function (){
	this.FitHeight;
	this.Draggable;
	this.ForceOrder;
	this.Independent;
	this.KeepState;
	this.Width;
	this.Height;
	this.Panels;
	this.DragDropGroup;

	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)
		if (!this._AlreadyShown){
			this._AlreadyShown = true;
			Ext.BLANK_IMAGE_URL = '/shared/ext-1.1/resources/images/default/s.gif';
			
			Ext.onReady(function(){
				var accContainer = Ext.get(this.ContainerName);
				accContainer.setWidth(this.Width);
				accContainer.setHeight(this.Height);

				this.accordion = new Ext.ux.Accordion(accContainer,{
										fitHeight: gxui.CBoolean(this.FitHeight),
										ddGroup: this.DragDropGroup || 'accordion',
										forceOrder: gxui.CBoolean(this.ForceOrder),
										independent: gxui.CBoolean(this.Independent),
										keepState: gxui.CBoolean(this.KeepState),
										draggable: gxui.CBoolean(this.Draggable),
										animate: true,
										fitContainer: true,
										fitToFrame: true});
				var panels = Ext.util.JSON.decode(this.Panels);
				Ext.each(panels,
						function(item, index, allItems){
							var titleEl = Ext.get(this.getChildContainer("Title" + item.id));
							if (titleEl)
								item.title = titleEl.dom.innerHTML;
							var iconEl = Ext.get(this.getChildContainer("Icon" + item.id)).down("input[type='image']");
							if (iconEl)
								item.icon = iconEl.getAttributeNS("", "src");
							var panel = this.accordion.add(new Ext.ux.InfoPanel({
											icon: (item.icon) ? item.icon : null,
											id: Ext.id(),
											autoCreate: true,
											title: (item.title) ? item.title : item.id,
											minWidth: (item.minWidth) ? item.minWidth : null,
											maxWidth: (item.maxWidth) ? item.maxWidth : null,
											minHeight: (item.minHeight) ? item.minHeight : null,
											maxHeight: (item.maxHeight) ? item.maxHeight : null,
											resizable: (item.resizable) ? (item.resizable == 'true') : null,
											collapsed: (item.collapsed) ? (item.collapsed == 'true') : null,
											bodyEl: this.getChildContainer(item.id)}));
						},
						this);
						Ext.state.Manager.setProvider(new Ext.state.CookieProvider());
						Ext.ux.AccordionManager.restoreState();
			}, this);
		}
		///UserCodeRegionEnd: (do not remove this comment.)
	};
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)
	
	///UserCodeRegionEnd: (do not remove this comment.):
};

Ext.extend(gxui.Accordion, gxui.UserControl);