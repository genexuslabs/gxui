/// <reference path="..\Freezer\Ext\ext-all-dev.js" />

/**
* @class gxui.UserControl
* Abstract base class for gxui UserControls.
* @ignore
*/
Ext.define('gxui.UserControl', {
	mixins: {
		observable: 'Ext.util.Observable'
	},

	/**
	* Creates a new GxUI UserControl
	* @param {Object} [options] User control configuration options
	* @param {Boolean} [options.register] Indicates wether the newly created UserControl should be registered in gxui.UserControlManager.
	* @method constructor
	* @ignore
	*/
	constructor: function (options) {
		this.setOptions(options)
		this.initialize();

		return this;
	},

	//private
	setOptions: function (options) {
		this.options = {
			register: true
		};

		for (property in (options || {})) {
			this.options[property] = options[property];
		}
	},

	//private
	initialize: function () {
		this.rendered = false;

		this.addEvents({
			/**
			* @event show
			* Fires after the User Control has been shown.
			* @param {gxui.UserControl} this
			* @ignore
			*/
			"show": true,
			/**
			* @event destroy
			* Fires after the User Control is destroyed.
			* @param {gxui.UserControl} this
			* @ignore
			*/
			"destroy": true
		});

		if (this.options.register)
			this.register();
	},

	/**
	* Shows the user control and fires the 'show' event after showing it.
	* @ignore
	*/
	show: function () {
		try {
			if (!this.rendered) {
				Ext.onReady(function () {
					this.rendered = true;
					this.onRender();
				}, this);
			}
			else {
				if (this.onRefresh)
					this.onRefresh();
			}
		}
		catch (e) {
			gx.dbg.logEx(e, 'gxui.js', 'show');
		}
		finally {
			this.fireEvent("show", this);
		}
	},

	/**
	* Force the user control rendering.
	* @ignore
	*/
	forceRendering: function () {
		this.rendered = false;
	},

	/**
	* Destroys the user control and fires the 'destroy' event after destroying it. Each User Control must implement 
	* in the onDestroy method the destruction of the User Control.
	* @ignore
	*/
	destroy: function () {
		try {
			this.onDestroy();
		}
		catch (e) {
			gx.dbg.logEx(e, 'gxui.js', 'destroy');
		}

		this.fireEvent("destroy", this);
	},

	/**
	* Called by show method to render the User Control. This method has no default implementation
	* so it must be provided by inheriting classes.
	* @ignore
	*/
	onRender: Ext.emptyFn,

	/**
	* Called by show method instead of the onRender method, from the second time onwards, to refresh the User Control.
	* This method has no default implementation so it must be provided by inheriting classes.
	* @ignore
	*/
	onRefresh: Ext.emptyFn,

	/**
	* Called by destroy method to destroy the User Control. This method has a default implementation and can be 
	* overriden. The default implementation relays on a correct implementation of getUnderlyingControl method.
	* @ignore
	*/
	onDestroy: function () {
		var c = this.getUnderlyingControl();
		if (c) {
			var ct = c.ownerCt;
			if (ct) {
				if (ct.remove) {
					ct.remove(c);
				}
			}
			else {
				if (c.destroy) {
					c.destroy();
				}
			}
		}
	},

	/**
	* Returns the underlying control associated to the UserControl.  This method has no default implementation
	* so it MUST be provided by inheriting classes.
	* @ignore
	*/
	getUnderlyingControl: Ext.emptyFn,

	/**
	* Registers the User Control
	* @ignore
	* @private
	*/
	register: function () {
		gxui.UserControlManager.register(this);
	},

	/**
	* Registers the User Control
	* @ignore
	* @private
	*/
	unregister: function () {
		gxui.UserControlManager.unregister(this);
	},

	/**
	* Registers the User Control as a container.
	* @ignore
	* @private
	*/
	registerCt: function (el, addFn, doLayoutFn, scope) {
		gxui.UserControlManager.registerContainer(this, el, addFn, doLayoutFn, scope);
	},

	/**
	* Unregister the user Control to its parent container.
	* @ignore
	* @private
	*/
	unregisterCt: function (toRem) {
		gxui.UserControlManager.unregisterContainer(toRem);
	},

	/**
	* Adds the User Control to its parent container.
	* @ignore
	* @private
	*/
	addToParentContainer: function (uc) {
		gxui.afterShow(function () {
			try {
				var el = Ext.get(this.getContainerControl());
				this.checkIfInline(el);
				for (var el = Ext.get(this.getContainerControl()); el; el = el.parent("div")) {
					var ct = gxui.UserControlManager.isRegisteredContainer(el.dom)
					this.checkIfInline(el);
					if (ct) {
						if (ct.addFn) {
							Ext.bind(ct.addFn, ct.scope)(uc);
							if (ct.doLayoutFn)
								Ext.bind(ct.doLayoutFn, ct.scope);
						}
						return;
					}
				}
			}
			catch (e) {
				gx.dbg.logEx(e, 'gxui.js', 'afterShowHandler->' + this.getUniqueId());
			}
		}, this);
	},

	checkIfInline: function (el) {
		if (el.id.indexOf("gxHTMLWrp") >= 0 || el.hasCls("gx_usercontrol") || el.hasCls("gxui-uc-container"))
			el.setStyle("display", "inline");
	},

	/**
	* @ignore
	* @private
	*/
	getUniqueId: function () {
		var pO = this.ParentObject;
		return "gxui" + (pO ? (pO.CmpContext ? "-" + pO.CmpContext : "") + "-" + pO.ServerClass || "" : "") + "-" + this.ControlName;
	}
});

/**
* @class gxui.UserControlManager
* Class for managing gxui UserControls.
* @singleton
* @ignore
*/
gxui.UserControlManager = function() {
	var ucList = [];
	var ctList = [];

	var afterShowEvent;

	var initAfterShow = function() {
		afterShowEvent = new Ext.util.Event();
	};

	var ucShowListener = function(uc) {
		try {
			var ucListItem = this.isRegisteredUC(uc)
			if (ucListItem) {
				ucListItem.shown = true;
			}

			var allShown = true;
			Ext.each(ucList, function(item) {
				return allShown = item.shown && allShown;
			}, this);

			if (allShown && afterShowEvent) {
				afterShowEvent.fire();
				Ext.each(ucList, function(item) {
					// Fire doLayout function in those controls that don't have a parent control.
					var extUC = item.uc.getUnderlyingControl();
					if (extUC && !extUC.ownerCt && extUC.doLayout) {
						extUC.doLayout();
					}
					item.shown = false;
				}, this);
			}
		}
		catch (e) {
			gx.dbg.logEx(e, 'gxui.js', 'ucShowListener');
		}
	};

	return {
		getUCList: function() {
			var l = [];
			Ext.each(ucList, function(item) {
				l.push(item.uc);
			});
			return l;
		},

		getContainersList: function() {
			return ctList;
		},

		register: function(uc) {
			ucList.push({
				uc: uc,
				shown: false
			});

			uc.on("show", ucShowListener, this);

			uc.on("destroy", function(uc) {
				this.unregister(uc);
				this.unregisterContainer(uc);
				if (uc.afterShowHandler)
					afterShowEvent.removeListener(uc.afterShowHandler, uc);
			}, this);
		},

		unregister: function(uc) {
			var toRem = this.isRegisteredUC(uc);
			if (toRem)
				ucList.remove(toRem);
		},

		registerContainer: function(uc, el, addFn, doLayoutFn, scope) {
			ctList.push({
				uc: uc,
				el: el,
				addFn: addFn,
				doLayoutFn: doLayoutFn,
				scope: scope
			});
		},

		unregisterContainer: function(obj) {
			toRem = this.isRegisteredContainer(obj);
			if (toRem)
				ctList.remove(toRem);
		},

		isRegisteredUC: function(uc) {
			var obj = null;

			Ext.each(ucList, function(item) {
				if (uc == item.uc) {
					obj = item;
					return false;
				}
			}, this);

			return obj;
		},

		isRegisteredContainer: function(el) {
			var ct = null;

			if (el.layout) {
				Ext.each(ctList, function(item) {
					if (el == item.scope) {
						ct = item;
						return false;
					}
				}, this);
			}
			else
				if (el.tagName) { // If el argument is a HTMLElement
				Ext.each(ctList, function(item) {
					if (el == item.el) {
						ct = item;
						return false;
					}
				}, this);
			}
			else { // If el argument is a gxui.UserControl
				uc = el;
				Ext.each(ctList, function(item) {
					if (uc == item.uc) {
						ct = item;
						return false;
					}
				}, this);
			}

			return ct;
		},

		/**
		* Fires after the show method of all the registered User Controls has been executed.
		* @param {Function} fn The method the event invokes
		* @param {Object} [scope] An object that becomes the scope of the handler
		* @param {Boolean} [options] An object containing standard Ext.EventManager.addListener options
		* @method
		* @ignore
		*/
		afterShow: function(fn, scope, options) {
			if (!afterShowEvent)
				initAfterShow();

			scope.afterShowHandler = fn;
			afterShowEvent.addListener(fn, scope, options)
		}
	};
} ();
