gxui.Splash = Ext.extend(gxui.UserControl, {
	m_cookieId: null,
	initialize: function(){
		gxui.Splash.superclass.initialize.call(this);

		this.Width;
		this.Height;
		this.Duration;
		this.Image;
		this.Message;
		this.Cls;
	},

	onRender: function(){

		if(gxui.getCookie(this.m_cookieId)==""){	
		
			try{			
				this.mask = Ext.get(document.body).mask(this.Message + " ", this.Cls);
				window.setTimeout("Ext.get(document.body).unmask();", this.Duration*1000);		
			}
			catch(err){};			
			gxui.setCookie(this.m_cookieId, '1', 0);			
		}
	
	}

});