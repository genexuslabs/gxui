////////////////////////////////////////////
//// gxui.ext.LayoutManager
////////////////////////////////////////////
gxui.ext.LayoutManager = function(){
	var list = [];
	
	dropHandler = function(e){
		e.panel.createResizer("s");
		this.forceDoLayout();
		e.panel.ownerCt.items.each(function(p){
			p.saveState();
		});
	};
	
	beforeDropHandler = function(e){
		e.panel.undoFloat();
	};

	return {
		register: function(layout){
			list.push(layout);
			var xt = layout.getXType();
			if (xt == "gxuiportal"){
				layout.on('drop', dropHandler, this);
				layout.on('dragout', function(){
					this.forceDoLayout();
				}, this);
				layout.on('beforedrop', beforeDropHandler, this);
				return true;
			}
			
			if (xt == "panel"){
				layout.on('add', function(){
					this.forceDoLayout();
				}, this);
				return true;
			}
			
			return false;
		},
		
		unregister: function(layout){
			list.remove(layout);
		},
		
		forceDoLayout: function(l){
            setTimeout(function(){
				if (l) 
					l.doLayout();
				else {
					for (var i = 0; i < list.length; i++) {
						var layout = list[i];
						if (layout) {
							layout.doLayout();
						}
					}
				}
            }, 100);
		}
	};
}();