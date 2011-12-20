////////////////////////////////////////////
//// gxui.ext.FloatingDropTarget
////////////////////////////////////////////
gxui.ext.FloatingDropTarget = function(area, cfg){
	this.area = area;
	gxui.ext.FloatingDropTarget.superclass.constructor.call(this, area.bwrap.dom, cfg);
};

Ext.extend(gxui.ext.FloatingDropTarget, Ext.dd.DropTarget, {
	notifyDrop : function(s, e, d){
        var lel = s.panel.getEl();
        var del = s.proxy.getEl();
		if (del) {
			if (s.proxy.getProxy()) 
				s.proxy.getProxy().remove();
			s.panel.getEl().dom.parentNode.removeChild(s.panel.getEl().dom);
			this.area.add(s.panel);
			this.area.doLayout();
			s.panel.doFloat(del.getWidth(), del.getX(), del.getY());
			s.panel.createResizer();
			return true;
		}
		return false;
	},
	notifyOver : function(s, e, d){
		s.proxy.getProxy().remove();
	}
});
