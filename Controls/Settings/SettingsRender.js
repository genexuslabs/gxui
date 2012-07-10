/// <reference path="..\..\Freezer\Ext\ext-all-dev.js" />

/**
* @class gxui.Settings
* The gxui.Settings control lets you set GxUI Library global settings.
* It does not show any control on the page and should be placed only once in the form, as the first GxUI control (for example, in the master page).
* 
* For state management, it lets you select between storing the controls' state in cookies or in the server, through HTTP calls to a URL.
* The default value is to store the state in cookies. This option is ok in development environments or simple applications, however, HTTP should be used in production environments 
* where there is heavy usage of GxUI controls.
* 
* For localization, you can choose the language of ExtJS standard texts (for example, those used in {@link gxui.GridExtension} column menu options.
*
* # Example
* In the following example we will see how to store the state of a grid using gxui.GridExtension as its Custom Render in the server.
* 
* Dragging gxui.Settings control to the Master Page of your KB automatically imports the relevant objects to work with this control.
* 
* These objects are:
* 
* - gxuiSaveState (procedure)
* - gxuiInitState (data provider)
* - gxuiState (SDT) 
* 
* A code snippet will be also created in the Events of the Master Page.
* 
* After we have the above mentioned objects in our KB, we will have to create the structures that will allow us to save the state of of the grid (or any gxui control).
* 
* We start creating the UserState Transaction, which have the following structure:
* 
* - UserId *
* - UserGXUIStateId *
* - UserGXUIStateValue 
* 
* Once you have this transaction, we can modify the above mentioned objects as follows:
* 
* ## gxuiSaveState:
* 
*		Do 'Init'
*		Do 'Save'
*		Do 'Response'
*		
*		Sub 'Init'
*		    &data = &request.GetVariable(!'data')
*		    &matches = &data.Matches(!'{"name":"([^"]*)","value":"([^"]*)"}')
*		    For &match in &matches
*		        If &match.Groups.Count = 2
*		            &state = new()
*		            &state.name = &match.Groups.Item(1)
*		            &state.value = &match.Groups.Item(2)
*		            &states.Add(&state)            
*		        EndIf
*		    Endfor
*		EndSub
*		
*		Sub 'Save'
*		    For &state in &states    
*		        For each UserId UserGXUIStateId
*		            Where UserId = &user
*		            Where UserGXUIStateId = &state.name
*		            If &state.value = !'undefined'
*		                Delete
*		            Else
*		                UserGXUIStateValue = &state.value
*		            Endif
*		        When none
*		            If &state.value <> !'undefined'        
*		                New
*		                    UserId     = &user
*		                    UserGXUIStateId    = &state.name
*		                    UserGXUIStateValue    = &state.value
*		                EndNew
*		            Endif    
*		        Endfor                
*		    Endfor
*		EndSub
*		
*		Sub 'Response'
*		    &response.AddHeader(!"Content-Type", !"text/xml")
*		    &response.AddString(!'{success: true}')
*		EndSub
* 
* ## gxuiInitState:
* 
*		gxuiStates
*		{
*		    gxuiState Where UserId = &user
*		    {
*		        name = UserGXUIStateId.Trim()
*		        value = UserGXUIStateValue.Trim()
*		    }
*		}
*
* The SDT gxuiState remains the same (only has a name and a value).
*
*/
Ext.define('gxui.Settings', {
	extend: 'gxui.UserControl',

	initialize: function () {
		this.callParent(arguments);
	},

	// Databinding
	SetState: function (data) {
		this.State = data;
	},

	// Databinding
	GetState: function (data) {
		return this.State;
	},

	onRender: function () {
		var provider = null;
		if (gxui.CBoolean(this.Enable)) {
			if (this.Provider == gxui.Settings.StateProvider.HTTP) {
				if (this.SaveURL != "") {
					provider = Ext.create('Ext.ux.state.HttpProvider', {
						saveUrl: this.SaveURL,
						autoRead: false
						/*readUrl: this.ReadURL*/
					});
				}
			}
			else {
				if (this.Provider == gxui.Settings.StateProvider.Cookie) {
					provider = Ext.create('Ext.state.CookieProvider', {
						expires: new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 365)) //365 days
					})
				}
			}
		}
		else {
			// This is equivalent to removing the default provider set in gxui.js.
			provider = Ext.create('Ext.state.Provider');
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

	methods: {
		// Methods
		/**
		* Sets the language for ExtJS standard texts
		* @param {String} lang Language to set
		* @param {String} [charset] Charset for the script tag to use for including the localized standard texts
		* @method
		*/
		SetLanguage: function (lang, charset) {
			var s = Ext.getDom(this.LOCALE_SCRIPT_ID);
			var src = gx.util.resourceUrl(gx.basePath + gx.staticDirectory + "Shared/ext/locale/ext-lang-" + lang + ".js", true);
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

		RemoveLanguage: function () {
			var s = Ext.getDom(this.LOCALE_SCRIPT_ID);
			if (s) {
				document.getElementsByTagName("head")[0].removeChild(s);
			}
		}
	}
});

// Supported state providers
gxui.Settings.StateProvider = {
	Cookie: "Cookie",
	HTTP: "HTTP"
};
