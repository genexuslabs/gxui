/// <reference path="..\VStudio\vswd-ext_2.2.js" />
// gxui namespace and user controls base class definition

/**
* @class gxui
* gxui core utilities and functions.
* @singleton
*/
gxui = function() {

	return {
		initialize: function() {

			// Initialize QuickTips
			Ext.tip.QuickTipManager.init();

			// Define a namespace for extensions of Ext components
			Ext.namespace('gxui.ext');
			// Define a namespace for object properties management classes
			Ext.namespace('gxui.Properties');
			// Define a namespace for GX interop classes
			Ext.namespace('gxui.GX');
			// Define a namespace for GxUI user extensions
			Ext.namespace('gxui.ux');

			gx.fx.obs.addObserver('gx.onready', this, function() {
				if (gx) {
					if (gx.staticDirectory != "")
						this.StaticContent = gx.staticDirectory;
					else
						this.StaticContent = this.getCookie('StaticContent');

					Ext.BLANK_IMAGE_URL = gx.util.resourceUrl(gx.basePath + this.StaticContent + "Shared/ext/resources/images/default/s.gif", true);
				}
			});

			// Default State provider
			Ext.state.Manager.setProvider(new Ext.state.CookieProvider({
				expires: new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 365)) //365 days
			}));

/*			//////////////////////////////////////////////////////////////////////////////////////////
			// This is a temporal fix for a problem with Chrome and FitLayout http://extjs.com/forum/showthread.php?p=312137#post312137
			Ext.override(Ext.layout.FitLayout, {
				onLayout: function(ct, target) {
					Ext.layout.FitLayout.superclass.onLayout.call(this, ct, target);
					if (!this.container.collapsed) {
						var size = !Ext.isChrome && target.dom != Ext.getBody().dom ? target.getStyleSize() : target.getViewSize();
						this.setItemSize(this.activeItem || ct.items.itemAt(0), size);
					}
				}
			});
			//////////////////////////////////////////////////////////////////////////////////////////
			// This is a temporal fix for a problem with insertBefore function in IE.
			Ext.override(Ext.dd.PanelProxy, {
				moveProxy: function(parentNode, before) {
					if (this.proxy) {
						if (Ext.isIE && before == undefined) {
							parentNode.insertBefore(this.proxy.dom);
							return;
						}
						parentNode.insertBefore(this.proxy.dom, before);
					}
				}
			});
			//////////////////////////////////////////////////////////////////////////////////////////
			// This is a temporal fix for a problem with blur when a TextField is used inside a TabPanel and the tab is changed.
			Ext.override(Ext.form.TextField, {
				onFocus: function() {
					Ext.form.TextField.superclass.onFocus.call(this);
					this.mimicing = true;
					Ext.get(Ext.isIE ? document.body : document).on("mousedown", this.mimicBlur, this, { delay: 10 });
				},
				mimicBlur: function(e) {
					if (this.el.dom != e.target) {
						this.mimicing = false;
						Ext.get(Ext.isIE ? document.body : document).un("mousedown", this.mimicBlur, this);
						this.onBlur();
					}
				},
				onDestroy: function() {
					if (this.mimicing) {
						Ext.get(Ext.isIE ? document.body : document).un("mousedown", this.mimicBlur, this);
					}
					Ext.form.TextField.superclass.onDestroy.call(this);
				}
			});

			// Set an initial z-index value below the one used by GX for popups, so windows will be shown behind the popups.
			Ext.WindowMgr.zseed = 800;

			//////////////////////////////////////////////////////////////////////////////////////////
			// This is a temporal fix: getAttributeNS doesn't work in IE9.
			if (Ext.isIE && gx.util.browser.ieVersion() > 8) {
				Ext.override(Ext.Element, {
					getAttributeNS : function(ns, name){
						var d = this.dom;
						return d.getAttributeNS(ns, name) || d.getAttribute(ns+":"+name) || d.getAttribute(name) || d[name];
					}
				});
			}
*/
		},

		/**
		* Converts a string representing a boolean value, to its corresponding Boolean value.
		* @param {String} string representation of the boolean value to convert.
		* @return {Boolean} The boolean value.
		*/
		CBoolean: function(str) {
			if (str) {
				if (typeof (str) == 'string')
					return (str.toLowerCase() == "true")
				return str;
			}
			else
				return false;
		},


		/**
		* Clones an object.
		* @param {Object} object to Clone.
		* @return {Boolean} Cloned object.
		*/
		clone: function(obj) {
			if (obj instanceof Array)
				return gxui.copyArray(obj);
			if (typeof (obj) != 'object')
				return obj;
			if (obj == null)
				return obj;
			if (obj.clone)
				return obj.clone();
			var cloneObj = new Object();
			for (var i in obj)
				cloneObj[i] = gxui.clone(obj[i]);
			return cloneObj;
		},

		/**
		* Clones an array.
		* @param {Object} array to Clone.
		* @return {Boolean} Cloned array.
		*/
		copyArray: function(arr) {
			var res = [];
			for (var i = 0; i < arr.length; i++)
				res.push(gxui.clone(arr[i]));
			return res;
		},

		getCookie: function(c_name) {
			if (document.cookie.length > 0) {
				c_start = document.cookie.indexOf(c_name + "=");
				if (c_start != -1) {
					c_start = c_start + c_name.length + 1;
					c_end = document.cookie.indexOf(";", c_start);
					if (c_end == -1) c_end = document.cookie.length;
					return unescape(document.cookie.substring(c_start, c_end));
				}
			}
			return "";
		},

		setCookie: function(name, value, days) {
			if (days) {
				var date = new Date();
				date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
				var expires = "; expires=" + date.toGMTString();
			}
			else expires = "";
			document.cookie = name + "=" + value + expires + "; path=/";
		},

		dateFormat: function() {
			var gxDF = gx.dateFormat;
			switch (gxDF) {
				case "MDY": return "m/d/y";
				case "MDY4": return "m/d/Y";
				case "YMD": return "y/m/d";
				case "Y4MD": return "Y/m/d";
				case "DMY": return "d/m/y";
				case "DMY4": return "d/m/Y";
			}
		},

		date: function(string) {
			return new Date.parseDate(string, this.dateFormat());
		},

		/**
		* Fires after the show method of all the registered User Controls has been executed.
		* Shorthand method for gxui.UserControlManager.afterShow.
		* @param {Function} fn The method the event invokes
		* @param {Object} scope (optional) An object that becomes the scope of the handler
		* @param {boolean} options (optional) An object containing standard Ext.EventManager.addListener options
		*/
		afterShow: function(fn, scope, options) {
			gxui.UserControlManager.afterShow(fn, scope, options);
		}
	};
} ();

gxui.initialize();