/// <reference path="..\..\Freezer\Ext\ext-all-dev.js" />

/**
* @class gxui.Splash
* This control shows a splash screen. The splash screen is shown only once (a cookie is stored to remember if it was already shown). 
* To customize the splash screen
*/
Ext.define('gxui.Splash', {
	extend: 'gxui.UserControl',

	initialize: function () {
		this.callParent(arguments);
	},

	onRender: function () {
		var cookieId = this.getUniqueId() + '-cookie';

		if (gxui.getCookie(cookieId) == "") {
			try {
				this.m_mask = Ext.get(document.body).mask(this.Message + " ", this.Cls);
				this.m_mask.next().addCls('gxui-splash-msg');
				setTimeout(function () {
					Ext.get(document.body).unmask();
				}, this.Duration * 1000);
			}
			catch (err) { };
			gxui.setCookie(cookieId, '1', 0);
		}
	}

});