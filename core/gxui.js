/// <reference path="..\VStudio\vswd-ext_2.2.js" />
// gxui namespace and user controls base class definition

/**
* @class gxui
* gxui core utilities and functions.
* @singleton
* @ignore
*/
gxui = function () {
	var m_GenexusBuild = null;

	var fixCssReset = function () {
		var cssLines = [],
			cellSpacing,
			cellPadding;

		cssLines.push("table, table[cellspacing='0'] {",
					"    border-collapse: separate;",
					"}");

		// CSS rules are created on the fly so cellpadding and cellspacing values are not reseted.
		for (var i = 1; i <= 100; i++) {
			if (gxui.fixSpacingReset) {
				cellSpacing = [
					"table[cellspacing='", i, "'] {",
					"    border-collapse: separate;",
					"    border-spacing: ", i, "px;",
					"}"
				];

				cssLines.push(cellSpacing.join(""));
			}
			if (gxui.fixPaddingReset) {
				cellPadding = [
					"table[cellpadding='", i, "'] > tbody > tr > td:not([class]), table[cellpadding='", i, "'] > tbody > tr > th:not([class]) {",
					"    padding: ", i, "px;",
					"}"
				];

				cssLines.push(cellPadding.join(""));
			}
		}

		var head = document.getElementsByTagName('head')[0],
			styleEl = document.createElement('style');

		styleEl.type = 'text/css';

		if (styleEl.styleSheet) {
			styleEl.styleSheet.cssText = cssLines.join("");
		}
		else {
			styleEl.appendChild(document.createTextNode(cssLines.join("")));
		}
		head.appendChild(styleEl);
	};

	return {
		/**
		* If true, the reset on TD and TH elements padding made by ExtJS is reverted.
		* @private
		* @ignore
		*/
		fixPaddingReset: true,

		/**
		* If true, the reset on TABLE elements border-spacing and border-collapse properties made by ExtJS is reverted.
		* @private
		* @ignore
		*/
		fixSpacingReset: true,

		initialize: function () {

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

			gx.fx.obs.addObserver('gx.onready', this, function () {
				if (gx && Ext.ieVersion > 0 && Ext.ieVersion < 8) {
					if (gx.staticDirectory != "")
						this.StaticContent = gx.staticDirectory;
					else
						this.StaticContent = this.getCookie('StaticContent');

					Ext.BLANK_IMAGE_URL = gx.util.resourceUrl(gx.basePath + this.StaticContent + "Shared/ext/resources/themes/images/default/tree/s.gif", true);
				}

				// Fix CSS reset made by ExtJS that affects tables
				gxui.afterShow(fixCssReset, gxui);

				// Force popup size recalculation after showing controls
				if (gx.popup.ispopup()) {
					gxui.afterShow(function () {
						var popup = gx.popup.getPopup().window.gx.popup;
						Ext.defer(popup.autofit, 100, popup)
					}, gx.popup);
				}
			});

			// Default State provider
			Ext.state.Manager.setProvider(new Ext.state.CookieProvider({
				expires: new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 365)) //365 days
			}));

			// For versions prior to build 55424, gx.lang.inherits function is overriden to allow
			// GxUI to work properly with older versions of GeneXus.
			var gxBuild = gxui.getGeneXusBuild();
			if (gxBuild) {
				if (gxBuild > 54798) {
					var docEl = Ext.fly(document.documentElement);
					if (docEl) {
						docEl.addCls("gxui-xev2");
						if (gxBuild <= 64355) {
							docEl.addCls("gxui-msg-fix");
						}
					}
				}
				if (gxBuild < 55424) {
					gx.lang.inherits = function (subclass, superclass) {
						var oldProt = subclass.prototype;
						subclass.prototype = new superclass();
						for (var pName in oldProt) {
							if (typeof (subclass.prototype[pName]) == 'undefined')
								subclass.prototype[pName] = oldProt[pName];
						}
						if (typeof (subclass.prototype.base) == 'undefined')
							subclass.prototype.base = superclass;

						subclass.prototype.constructor = function () {
							superclass.prototype.constructor.apply(this, arguments);
							oldProt.constructor.apply(this, arguments);
						};
					};
				}
			}
		},

		/**
		* Converts a string representing a boolean value, to its corresponding Boolean value.
		* @param {String} string representation of the boolean value to convert.
		* @return {Boolean} The boolean value.
		* @method
		* @ignore
		*/
		CBoolean: function (str) {
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
		* @param {Function} [fn] Function to apply to the clone.
		* @return {Boolean} Cloned object.
		* @method
		* @ignore
		*/
		clone: function (obj, fn) {
			if (obj instanceof Array)
				return gxui.copyArray(obj, fn);
			if (typeof (obj) != 'object')
				return obj;
			if (obj == null)
				return obj;
			if (obj.clone)
				return obj.clone();
			var cloneObj = new Object();
			for (var i in obj)
				cloneObj[i] = gxui.clone(obj[i], fn);
			if (fn && typeof (fn) == 'function')
				fn(cloneObj);
			return cloneObj;
		},

		/**
		* Clones an array.
		* @param {Object} array to Clone.
		* @param {Function} [fn] Function to apply to the clone.
		* @return {Boolean} Cloned array.
		* @method
		* @ignore
		*/
		copyArray: function (arr, fn) {
			var res = [];
			for (var i = 0; i < arr.length; i++)
				res.push(gxui.clone(arr[i], fn));
			return res;
		},

		getCookie: function (c_name) {
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

		setCookie: function (name, value, days) {
			if (days) {
				var date = new Date();
				date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
				var expires = "; expires=" + date.toGMTString();
			}
			else expires = "";
			document.cookie = name + "=" + value + expires + "; path=/";
		},

		dateFormat: function () {
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

		date: function (string) {
			return new Date.parseDate(string, this.dateFormat());
		},

		/**
		* Fires after the show method of all the registered User Controls has been executed.
		* Shorthand method for gxui.UserControlManager.afterShow.
		* @param {Function} fn The method the event invokes
		* @param {Object} scope (optional) An object that becomes the scope of the handler
		* @param {Boolean} options (optional) An object containing standard Ext.EventManager.addListener options
		* @ignore
		*/
		afterShow: function (fn, scope, options) {
			gxui.UserControlManager.afterShow(fn, scope, options);
		},

		/**
		* Maps a set of properties from a source object to another set of properties of a target object.
		* If the value of the source property is undefined, it is not mapped to the target object.
		* The source can be a function instead of an object, in which case it is called passing the source property name.
		* @param {Object} targetObj Target object
		* @param {Mixed} source If it's an object, the properties will be mapped from here. If it's a function, it will be called for each property, passing the source property name.
		* @param {Object} propertyMap An object mapping the target and source properties. The keys of the hash are the names of the target properties. The values are the names of the source properties.
		* @method
		* @private
		*/
		tryPropertyMapping: function (targetObj, source, propertyMap) {
			for (var targetProp in propertyMap) {
				var sourceValue,
					sourceProp = propertyMap[targetProp],
					ignoreEmpty = false;

				if (typeof (propertyMap[targetProp]) == "object") {
					ignoreEmpty = propertyMap[targetProp].ignoreEmpty || false;
					sourceProp = propertyMap[targetProp].property;
				}

				if (typeof (source) == "function")
					sourceValue = source(sourceProp);
				else
					sourceValue = source[sourceProp];

				if (ignoreEmpty) {
					if (sourceValue)
						targetObj[targetProp] = sourceValue;
				}
				else {
					if (sourceValue !== undefined)
						targetObj[targetProp] = sourceValue;
				}
			}
		},

		/**
		* Returns the number of the build of GeneXus used to generate the application
		* @return {Number} GeneXus Build number.
		* @method
		* @ignore
		*/
		getGeneXusBuild: function () {
			if (m_GenexusBuild === null) {
				try {
					var metaElements = document.getElementsByTagName('meta'),
						generatorEl = null,
						versionEl = null;
					for (var i = 0, len = metaElements.length; i < len; i++) {
						if (metaElements[i].name.toLowerCase() == "version")
							versionEl = metaElements[i];
						if (metaElements[i].name.toLowerCase() == "generator")
							generatorEl = metaElements[i];
					}

					var value = versionEl ? versionEl.getAttribute('content') : generatorEl.getAttribute('content');
					var matches = value.match(/-(\d+)$/);
					if (matches.length > 1)
						m_GenexusBuild = parseInt(matches[1]);
				}
				catch (e) {
					m_GenexusBuild = 0;
				}
			}

			return m_GenexusBuild;
		}
	};
} ();

gxui.initialize();