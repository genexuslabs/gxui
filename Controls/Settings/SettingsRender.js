/// <reference path="..\VStudio\vswd-ext_2.2.js" />
gxui.Settings = Ext.extend(gxui.UserControl, {

	initialize: function() {
		gxui.Settings.superclass.initialize.call(this);

		this.Enable;
		this.Provider;
		this.SaveURL;
		//this.ReadURL;
		this.State;
	},

	// Databinding
	SetState: function(data) {
		this.State = data;
	},

	// Databinding
	GetState: function(data) {
		return this.State;
	},

	onRender: function() {
		var provider = null;
		if (gxui.CBoolean(this.Enable)) {
			if (this.Provider == gxui.Settings.StateProvider.HTTP) {
				if (this.SaveURL != "") {
					provider = new Ext.ux.HttpProvider({
						saveUrl: this.SaveURL,
						autoRead: false
						/*readUrl: this.ReadURL*/
					});
				}
			}
			else {
				if (this.Provider == gxui.Settings.StateProvider.Cookie) {
					provider = new Ext.state.CookieProvider({
						expires: new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 365)) //365 days
					})
				}
			}
		}
		else {
			// This is equivalent to removing the default provider set in gxui.js.
			provider = new Ext.state.Provider();
		}
		if (provider) {
			// Initialize state provider (required to be able to keep state in controls)
			Ext.state.Manager.setProvider(provider);
			if (this.Provider == gxui.Settings.StateProvider.HTTP) {
				Ext.state.Manager.getProvider().initState(this.State);
			}
			this.State = []; //Reset initial state to avoid innecessary traffic
		}
	},

	onDestroy: Ext.emptyFn,

	LOCALE_SCRIPT_ID: "ext-lang",

	// Methods
	SetLanguage: function(lang, charset) {
		var s = Ext.getDom(this.LOCALE_SCRIPT_ID);
		var src = gx.util.resourceUrl(gx.basePath + gx.staticDirectory + "Shared/ext/build/locale/ext-lang-" + lang + "-min.js", true);
		if (!s) {
			s = document.createElement("script");
			s.id = this.LOCALE_SCRIPT_ID;
			s.type = 'text/javascript';
			document.getElementsByTagName("head")[0].appendChild(s);
		}
		s.src = src;
		if (charset) {
			s.charset = charset;
		}
	},

	RemoveLanguage: function() {
		var s = Ext.getDom(this.LOCALE_SCRIPT_ID);
		if (s) {
			document.getElementsByTagName("head")[0].removeChild(s);
		}
	}

});

// Supported state providers
gxui.Settings.StateProvider = {
	Cookie: "Cookie",
	HTTP: "HTTP"
};
