////////////////////////////////////////////
//// gxui.ext.Portal
////////////////////////////////////////////
gxui.ext.Portal = Ext.extend(Ext.ux.Portal, {
	defaultType: 'gxuiportalcolumn',
	
	initComponent: function(){
		gxui.ext.Portal.superclass.initComponent.apply(this);
		this.addEvents({
			dragout: true
		});
	},
	initEvents: function(){
		gxui.ext.Portal.superclass.initEvents.call(this);
		this.dd = new gxui.ext.Portal.DropZone(this, this.dropConfig);
	}
});
Ext.reg('gxuiportal', gxui.ext.Portal);

////////////////////////////////////////////
//// gxui.ext.Portal.DropZone
////////////////////////////////////////////
gxui.ext.Portal.DropZone = function(portal, cfg){
    gxui.ext.Portal.DropZone.superclass.constructor.call(this, portal, cfg);
};

Ext.extend(gxui.ext.Portal.DropZone, Ext.ux.Portal.DropZone, {
    notifyOut : function(dd, e, data){
        delete this.grid;
        if(!this.lastPos){
            return;
        }
		var c = this.lastPos.c, col = this.lastPos.col, pos = this.lastPos.p;
		
		var outEvent = this.createEvent(dd, e, data, col, c, 
                pos !== false ? pos : c.items.getCount());
				
		this.portal.fireEvent('dragout', outEvent);
    }
});

////////////////////////////////////////////
//// gxui.ext.PortalColumn
////////////////////////////////////////////
gxui.ext.PortalColumn = Ext.extend(Ext.ux.PortalColumn, {
	    defaultType: 'gxuiportlet'
});
Ext.reg('gxuiportalcolumn', gxui.ext.PortalColumn);
