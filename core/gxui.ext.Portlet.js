////////////////////////////////////////////
//// gxui.ext.Portlet
////////////////////////////////////////////
gxui.ext.Portlet = Ext.extend(Ext.ux.Portlet, {
    collapsible:true,
	resizable:true,
	resizeHandles: 'all',
	autoScroll: true,
	stateEvents: ['collapse', 'expand'],

	initComponent: function(){
		gxui.ext.Portlet.superclass.initComponent.apply(this);
		this.on('beforecollapse', function(){
			this.expandedHeight = this.getBox().height;
		}, this);
		var ownerCtDoLayout = function(){
			gxui.ext.LayoutManager.forceDoLayout(this.ownerCt);
			if (this.ownerCt && this.ownerCt.ownerCt)
				gxui.ext.LayoutManager.forceDoLayout(this.ownerCt.ownerCt);
		};
		this.on('collapse', ownerCtDoLayout, this);
		this.on('expand', ownerCtDoLayout, this);
		this.on('resize', ownerCtDoLayout, this);
	},
    initEvents : function(){
        gxui.ext.Portlet.superclass.initEvents.call(this);
		
        this.el.on("mousedown", this.toFront, this);
        this.manager = gxui.ext.PortletManager;
        this.manager.register(this);
    },
	initDraggable: function(){
        this.dd = new gxui.ext.Portlet.DD(this, this.dropConfig);
	},
	render: function(){
		gxui.ext.Portlet.superclass.render.apply(this, arguments);
		if (this.st) {
			if (this.st.column) {
				if (this.st.elPositioning) 
					this.getEl().setPositioning(this.st.elPositioning);
				
				var col = Ext.getCmp(this.st.column);
				if (col) {
					var xt = col.getXType();
					
					if (xt == "gxuiportalcolumn") {
						this.getEl().dom.parentNode.removeChild(this.getEl().dom);
						if (this.st.columnPos != undefined) 
							col.insert(this.st.columnPos, this);
						else 
							col.add(this);
						col.doLayout();
						//col.ownerCt.doLayout();
					}
					
					if (xt == "panel") {
						if (this.expandedHeight)
							this.setHeight(this.expandedHeight);
						col.add(this);
						//gxui.ext.LayoutManager.forceDoLayout();
						//col.doLayout();
					}
				}
			}
		}
		this.createResizer();
	},
	doFloat : function(width, x, y){
		this.resetPositioning();
		this.getEl().setStyle('position', 'absolute');
		this.setWidth(width);
		
		var points = this.getEl().parent().translatePoints(x, y);
/*		var tempX = x, tempY = y;
		var el = this.getEl();
		while (el = el.parent()){
		  if (el.getStyle("position") == 'absolute' || el.getStyle("position") == 'relative'){
		  	 var lefttop = el.translatePoints(tempX, tempY);
		     tempX = lefttop.left;
		     tempY = lefttop.top;
		  }
		}*/
		this.getEl().setLeftTop(points.left, points.top);
	},
	undoFloat : function(){
		this.resetPositioning();
		this.setWidth('auto');
	},
	resetPositioning : function(){
		this.getEl().setPositioning({
			'position' : "static",
			'left' : "auto",
			'top' : "auto",
			'bottom' : "",
			'right' : ""
		});
	},				
	getState : function(){
		return Ext.apply(Ext.apply(gxui.ext.Portlet.superclass.getState.call(this) || {}, this.getBox()), {
			st: {
				column: (this.ownerCt) ? this.ownerCt.id : null,
				columnPos: (this.ownerCt) ? this.ownerCt.items.indexOf(this) : null,
				elPositioning: this.getEl().getPositioning(),
				expandedHeight: this.expandedHeight
			},
			collapsed: this.collapsed,
			resizeHandles: this.resizeHandles
		});
	},
	createResizer : function(resizeHandles){
		this.destroyResizer();
        if(this.resizable && !this.resizer){
			var overrideCreateProxy = (this.ownerCt && this.ownerCt.getXType() == "gxuiportalcolumn");
			 
			var createProxyProtoType = Ext.Element.prototype.createProxy;
			if (overrideCreateProxy) {
				resizeHandles = 's';
				Ext.Element.prototype.createProxy = function(config){
					return Ext.DomHelper.append(this.dom, config, true);
				};
			}
			
			var resConfig = {
				minWidth: this.minWidth || 200,
				minHeight: this.minHeight || 100,
				handles: resizeHandles || this.resizeHandles || "all",
				transparent: true,
				pinned: this.pinned,
				resizeElement: this.resizerAction
			};
			
			if (this.maxWidth)
				resConfig.maxWidth = this.maxWidth;
			if (this.maxHeight)
				resConfig.maxHeight = this.maxHeight;

			this.resizer = new Ext.Resizable(this.el, resConfig);
			this.resizer.window = this;
			this.resizer.on('resize', this.onResizer, this);
			this.resizer.on("beforeresize", this.beforeResize, this);
			
			if (overrideCreateProxy) {
				resizeHandles = 's';
				Ext.Element.prototype.createProxy = createProxyProtoType;
			}
			
        }
	},
	destroyResizer : function(){
		if (this.resizer){
			this.resizer.destroy()
			delete this.resizer;
			
			this.un('beforeresize', this.beforeResize, this);
			this.un('resize', this.onResizer, this);
		}
	},
    onResizer : function(oResizable, iWidth, iHeight, e) {
        this.setHeight(iHeight);
    },
    onCollapse : function(doAnim, animArg) {
        this.el.setHeight('');  
        Ext.ux.Portlet.superclass.onCollapse.call(this, doAnim, animArg);
    },
    toFront : function(){
        this.manager.bringToFront(this)
        return this;
    },
    setZIndex : function(index){
        this.el.setStyle("z-index", ++index);
        index += 5;

        if(this.resizer){
            this.resizer.proxy.setStyle("z-index", ++index);
        }

		this.saveState();
        this.lastZIndex = index;
    },
	resizerAction : Ext.Window.prototype.resizerAction,
    beforeResize : function(){
        this.resizeBox = this.el.getBox();
    },
    handleResize : Ext.Window.prototype.handleResize,
    updateHandles : Ext.Window.prototype.updateHandles,
    onDestroy : function(){
        if(this.manager){
            this.manager.unregister(this);
        }
        gxui.ext.Portlet.superclass.onDestroy.call(this);
    }
});
Ext.reg('gxuiportlet', gxui.ext.Portlet);

////////////////////////////////////////////
//// gxui.ext.Portlet.DD
////////////////////////////////////////////
gxui.ext.Portlet.DD = function(portlet, cfg){
    this.portlet = portlet;
    gxui.ext.Portlet.DD.superclass.constructor.call(this, portlet, cfg);
};

Ext.extend(gxui.ext.Portlet.DD, Ext.Panel.DD, {
	startDrag: function(){
		this.proxy.getProxy().remove();
	},
    onDragOut: function(e){
		this.proxy.getProxy().remove();
	},
    endDrag : function(e){
        this.proxy.hide();
        this.panel.saveState();
    }
});

////////////////////////////////////////////
//// gxui.ext.PortletManager
////////////////////////////////////////////
gxui.ext.PortletManager = function(){
	var list = {};
    var accessList = [];
    var front = null;
	
    var sortPortlets = function(d1, d2){
        return (!d1._lastAccess || d1._lastAccess < d2._lastAccess) ? -1 : 1;
    };
	
    var orderPortlets = function(){
        var a = accessList, len = a.length;
        if(len > 0){
            a.sort(sortPortlets);
            var seed = a[0].manager.zseed;
            for(var i = 0; i < len; i++){
                var portlet = a[i];
                if(portlet && !portlet.hidden){
                    portlet.setZIndex(seed + (i*10));
                }
            }
        }
    };
	
	return {
        zseed : 9000,

        register : function(portlet){
            list[portlet.id] = portlet;
			accessList.push(portlet);
        },

        unregister : function(portlet){
            delete list[portlet.id];
			accessList.remove(portlet);
        },
		
        get : function(pid){
            return typeof pid == "object" ? pid : list[pid];
        },
		
		bringToFront : function(portlet){
            portlet = this.get(portlet);
            if(portlet != front){
                portlet._lastAccess = new Date().getTime();
                orderPortlets();
            }
		}
	};
}();