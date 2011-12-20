Ext.ux.NestedViewport = Ext.extend(Ext.Container, {
	initComponent : function() {
        Ext.ux.NestedViewport.superclass.initComponent.call(this);
        document.getElementsByTagName('html')[0].className += ' x-viewport';
		this.renderTo = Ext.get(this.renderTo);
		this.renderTo.addClass("x-nested");
		
        this.el = this.renderTo;
        this.el.setHeight = Ext.emptyFn;
        this.el.setWidth = Ext.emptyFn;
        this.el.setSize = Ext.emptyFn;
        this.el.dom.scroll = 'no';
        this.allowDomMove = false;
        this.autoWidth = true;
        this.autoHeight = true;
        Ext.EventManager.onWindowResize(this.fireResize, this);
	},
	
	fireResize : function(w, h){
	    this.fireEvent('resize', this, w, h, w, h);
    }
});
Ext.reg('xnestedviewport', Ext.ux.NestedViewport);