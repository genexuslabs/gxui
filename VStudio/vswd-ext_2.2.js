Ext = {
	apply : function(o, c, defaults) {
	/// <param name="o" type="Object"/>
	/// <param name="c" type="Object"/>
	/// <param name="defaults" type="Object"/>
	/// <returns type="Object" />
	},
	emptyFn : function() {
	/// <returns type="Function" />
	},
	applyIf : function(o, c) {
	/// <param name="o" type="Object"/>
	/// <param name="c" type="Object"/>
	/// <returns type="Object" />
	},
	addBehaviors : function(o) {
	/// <param name="o" type="Object"/>
	},
	id : function(el, prefix) {
	/// <param name="el" type="Mixed" optional="true"/>
	/// <param name="prefix" type="String" optional="true"/>
	/// <returns type="String" />
	},
	extend : function(sb, sp, overrides) {
	/// <param name="sb" type="Function"/>
	/// <param name="sp" type="Function"/>
	/// <param name="overrides" type="Object" optional="true"/>
	/// <returns type="Function" />
	},
	override : function(origclass, overrides) {
	/// <param name="origclass" type="Object"/>
	/// <param name="overrides" type="Object"/>
	},
	namespace : function(namespace1, namespace2, etc) {
	/// <param name="namespace1" type="String"/>
	/// <param name="namespace2" type="String"/>
	/// <param name="etc" type="String"/>
	},
	urlEncode : function(o) {
	/// <param name="o" type="Object"/>
	/// <returns type="String" />
	},
	urlDecode : function(string, overwrite) {
	/// <param name="string" type="String"/>
	/// <param name="overwrite" type="Boolean" optional="true"/>
	/// <returns type="Object" />
	},
	each : function(array, fn, scope) {
	/// <param name="array" type="Array|NodeList|Mixed"/>
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object"/>
	},
	combine : function() {	},
	escapeRe : function(s) {
	/// <param name="s" type="String"/>
	/// <returns type="String" />
	},
	callback : function(cb, scope, args, delay) {
	},
	getDom : function(el) {
	/// <param name="el" type="Mixed"/>
	/// <returns type="HTMLElement" />
	},
	getDoc : function() {	},
	getBody : function() {	},
	getCmp : function(id) {
	/// <param name="id" type="String"/>
	/// <returns type="Ext.Component" />
	},
	num : function(v, defaultValue) {
	/// <param name="v" type="Mixed"/>
	/// <param name="defaultValue" type="Number"/>
	/// <returns type="Number" />
	},
	destroy : function(arg1, arg2, etc) {
	/// <param name="arg1" type="Mixed"/>
	/// <param name="arg2" type="Mixed" optional="true"/>
	/// <param name="etc" type="Mixed"/>
	},
	removeNode : function(n) {
	/// <param name="n" type="HTMLElement"/>
	},
	type : function(o) {
	/// <param name="o" type="Mixed"/>
	/// <returns type="String" />
	},
	isEmpty : function(v, allowBlank) {
	/// <param name="v" type="Mixed"/>
	/// <param name="allowBlank" type="Boolean" optional="true"/>
	/// <returns type="Boolean" />
	},
	value : function(v, defaultValue, allowBlank) {
	},
	isArray : function(v) {
	/// <param name="v" type="Object"/>
	/// <returns type="Boolean" />
	},
	isDate : function(v) {
	/// <param name="v" type="Object"/>
	/// <returns type="Boolean" />
	},
	ns : function() {	},
	query : function(path, root, type) {
	/// <param name="path" type="String"/>
	/// <param name="root" type="Node" optional="true"/>
	/// <returns type="Array" />
	},
	onReady : function(fn, scope, options) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object"/>
	/// <param name="options" type="boolean"/>
	},
	get : function(el) {
	/// <param name="el" type="Mixed"/>
	/// <returns type="Ext.Element" />
	},
	fly : function(el, named) {
	/// <param name="el" type="String|HTMLElement"/>
	/// <param name="named" type="String" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	select : function(selector, unique, root) {
	/// <param name="selector" type="String|Array"/>
	/// <param name="unique" type="Boolean" optional="true"/>
	/// <param name="root" type="HTMLElement|String" optional="true"/>
	/// <returns type="Ext.CompositeElementLite" />
	},
	encode : function(o) {
	/// <param name="o" type="Mixed"/>
	/// <returns type="String" />
	},
	decode : function(json) {
	/// <param name="json" type="String"/>
	/// <returns type="Object" />
	},
	reg : function(xtype, cls) {
	/// <param name="xtype" type="String"/>
	/// <param name="cls" type="Constructor"/>
	},
	log : function() {	},
	logf : function(format, arg1, arg2, etc) {
	},
	dump : function(o) {
	},
	time : function(name) {
	},
	timeEnd : function(name, printResults) {
	}
}

Ext.lib = {}

Ext.lib.Dom = {
	getViewWidth : function(full) {
	},
	getViewHeight : function(full) {
	},
	getDocumentHeight : function() {	},
	getDocumentWidth : function() {	},
	getViewportHeight : function() {	},
	getViewportWidth : function() {	},
	isAncestor : function(p, c) {
	},
	getRegion : function(el) {
	},
	getY : function(el) {
	},
	getX : function(el) {
	},
	getXY : function(el) {
	},
	setXY : function(el, xy) {
	},
	setX : function(el, x) {
	},
	setY : function(el, y) {
	}
}

Ext.lib.Event = {
	startInterval : function() {	},
	onAvailable : function(p_id, p_fn, p_obj, p_override) {
	},
	addListener : function(el, eventName, fn) {
	},
	removeListener : function(el, eventName, fn) {
	},
	getTarget : function(ev, resolveTextNode) {
	},
	resolveTextNode : function(node) {
	},
	getPageX : function(ev) {
	},
	getPageY : function(ev) {
	},
	getXY : function(ev) {
	},
	getRelatedTarget : function(ev) {
	},
	getTime : function(ev) {
	},
	stopEvent : function(ev) {
	},
	stopPropagation : function(ev) {
	},
	preventDefault : function(ev) {
	},
	getEvent : function(e) {
	},
	getCharCode : function(ev) {
	},
	getEl : function(id) {
	},
	clearCache : function() {	},
	purgeElement : function(el, recurse, eventName) {
	},
	getListeners : function(el, eventName) {
	},
	getScroll : function() {	},
	on : function(el, eventName, fn) {
	},
	un : function(el, eventName, fn) {
	}
}

Ext.lib.Event.elCache = {}

Ext.lib.Ajax = {
	request : function(method, uri, cb, data, options) {
	},
	serializeForm : function(form) {
	},
	setProgId : function(id) {
	},
	setDefaultPostHeader : function(b) {
	},
	setDefaultXhrHeader : function(b) {
	},
	setPollingInterval : function(i) {
	},
	createXhrObject : function(transactionId) {
	},
	getConnectionObject : function() {	},
	asyncRequest : function(method, uri, callback, postData) {
	},
	handleReadyState : function(o, callback) {
	},
	handleTransactionResponse : function(o, callback, isAbort) {
	},
	createResponseObject : function(o, callbackArg) {
	},
	createExceptionObject : function(tId, callbackArg, isAbort) {
	},
	initHeader : function(label, value, isDefault) {
	},
	setHeader : function(o) {
	},
	resetDefaultHeaders : function() {	},
	abort : function(o, callback, isTimeout) {
	},
	isCallInProgress : function(o) {
	},
	releaseObject : function(o) {
	}
}

Ext.lib.Ajax.headers = {}

Ext.lib.Ajax.defaultHeaders = {}

Ext.lib.Ajax.poll = {}

Ext.lib.Ajax.timeout = {}

Ext.lib.Region = function(t, r, b, l) {
}
Ext.lib.Region.getRegion = function(el) {
}


Ext.lib.Point = function(x, y) {
}

Ext.lib.Anim = {
	scroll : function(el, args, duration, easing, cb, scope) {
	},
	motion : function(el, args, duration, easing, cb, scope) {
	},
	color : function(el, args, duration, easing, cb, scope) {
	},
	run : function(el, args, duration, easing, cb, scope, type) {
	}
}

Ext.lib.AnimBase = function(el, attributes, duration, method) {
}

Ext.lib.AnimMgr = {
	registerElement : function(tween) {
	},
	unRegister : function(tween, index) {
	},
	start : function() {	},
	stop : function(tween) {
	},
	run : function() {	}
}

Ext.lib.Bezier = {
	getPosition : function(points, t) {
	}
}

Ext.lib.ColorAnim = function(el, attributes, duration, method) {
}

Ext.lib.Easing = {
	easeNone : function(t, b, c, d) {
	},
	easeIn : function(t, b, c, d) {
	},
	easeOut : function(t, b, c, d) {
	},
	easeBoth : function(t, b, c, d) {
	},
	easeInStrong : function(t, b, c, d) {
	},
	easeOutStrong : function(t, b, c, d) {
	},
	easeBothStrong : function(t, b, c, d) {
	},
	elasticIn : function(t, b, c, d, a, p) {
	},
	elasticOut : function(t, b, c, d, a, p) {
	},
	elasticBoth : function(t, b, c, d, a, p) {
	},
	backIn : function(t, b, c, d, s) {
	},
	backOut : function(t, b, c, d, s) {
	},
	backBoth : function(t, b, c, d, s) {
	},
	bounceIn : function(t, b, c, d) {
	},
	bounceOut : function(t, b, c, d) {
	},
	bounceBoth : function(t, b, c, d) {
	}
}

Ext.lib.Motion = function(el, attributes, duration, method) {
}

Ext.lib.Scroll = function(el, attributes, duration, method) {
}

Ext.DomHelper = {
	markup : function(o) {
	/// <param name="o" type="Object"/>
	/// <returns type="String" />
	},
	applyStyles : function(el, styles) {
	/// <param name="el" type="String|HTMLElement"/>
	/// <param name="styles" type="String|Object|Function"/>
	},
	insertHtml : function(where, el, html) {
	/// <param name="where" type="String"/>
	/// <param name="el" type="HTMLElement"/>
	/// <param name="html" type="String"/>
	/// <returns type="HTMLElement" />
	},
	insertBefore : function(el, o, returnElement) {
	/// <param name="el" type="Mixed"/>
	/// <param name="o" type="Object|String"/>
	/// <param name="returnElement" type="Boolean" optional="true"/>
	/// <returns type="HTMLElement" />
	},
	insertAfter : function(el, o, returnElement) {
	/// <param name="el" type="Mixed"/>
	/// <param name="o" type="Object"/>
	/// <param name="returnElement" type="Boolean" optional="true"/>
	/// <returns type="HTMLElement" />
	},
	insertFirst : function(el, o, returnElement) {
	/// <param name="el" type="Mixed"/>
	/// <param name="o" type="Object|String"/>
	/// <param name="returnElement" type="Boolean" optional="true"/>
	/// <returns type="HTMLElement" />
	},
	doInsert : function(el, o, returnElement, pos, sibling) {
	},
	append : function(el, o, returnElement) {
	/// <param name="el" type="Mixed"/>
	/// <param name="o" type="Object|String"/>
	/// <param name="returnElement" type="Boolean" optional="true"/>
	/// <returns type="HTMLElement" />
	},
	overwrite : function(el, o, returnElement) {
	/// <param name="el" type="Mixed"/>
	/// <param name="o" type="Object|String"/>
	/// <param name="returnElement" type="Boolean" optional="true"/>
	/// <returns type="HTMLElement" />
	},
	createTemplate : function(o) {
	/// <param name="o" type="Object"/>
	/// <returns type="Ext.Template" />
	}
}

Ext.DomHelper.Template = function(html) {
}
Ext.DomHelper.Template.from = function(el, config) {
	/// <param name="el" type="String|HTMLElement"/>
	/// <param name="config" type="Object"/>
	/// <returns type="Ext.Template" />
}


Ext.Template = function(html) {
	/// <param name="html" type="String|Array"/>
}
Ext.Template.from = function(el, config) {
	/// <param name="el" type="String|HTMLElement"/>
	/// <param name="config" type="Object"/>
	/// <returns type="Ext.Template" />
}


Ext.DomQuery = {
	getStyle : function(el, name) {
	},
	compile : function(path, type) {
	/// <param name="path" type="String"/>
	/// <param name="type" type="String" optional="true"/>
	/// <returns type="Function" />
	},
	select : function(path, root, type) {
	/// <param name="path" type="String"/>
	/// <param name="root" type="Node" optional="true"/>
	/// <returns type="Array" />
	},
	selectNode : function(path, root) {
	/// <param name="path" type="String"/>
	/// <param name="root" type="Node" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	selectValue : function(path, root, defaultValue) {
	/// <param name="path" type="String"/>
	/// <param name="root" type="Node" optional="true"/>
	/// <param name="defaultValue" type="String"/>
	/// <returns type="String" />
	},
	selectNumber : function(path, root, defaultValue) {
	/// <param name="path" type="String"/>
	/// <param name="root" type="Node" optional="true"/>
	/// <param name="defaultValue" type="Number"/>
	/// <returns type="Number" />
	},
	is : function(el, ss) {
	/// <param name="el" type="String|HTMLElement|Array"/>
	/// <param name="ss" type="String"/>
	/// <returns type="Boolean" />
	},
	filter : function(els, ss, nonMatches) {
	/// <param name="els" type="Array"/>
	/// <param name="ss" type="String"/>
	/// <param name="nonMatches" type="Boolean"/>
	/// <returns type="Array" />
	}
}

Ext.DomQuery.operators = {}

Ext.DomQuery.pseudos = {
	empty : function(c) {
	},
	contains : function(c, v) {
	},
	nodeValue : function(c, v) {
	},
	checked : function(c) {
	},
	not : function(c, ss) {
	},
	any : function(c, selectors) {
	},
	odd : function(c) {
	},
	even : function(c) {
	},
	nth : function(c, a) {
	},
	first : function(c) {
	},
	last : function(c) {
	},
	has : function(c, ss) {
	},
	next : function(c, ss) {
	},
	prev : function(c, ss) {
	}
}

Ext.util = {}

Ext.util.Observable = function() {}
Ext.util.Observable.capture = function(o, fn, scope) {
	/// <param name="o" type="Observable"/>
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
}
Ext.util.Observable.releaseCapture = function(o) {
	/// <param name="o" type="Observable"/>
}


Ext.util.Event = function(obj, name) {
}

Ext.util.DelayedTask = function(fn, scope, args) {
	/// <param name="fn" type="Function" optional="true"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <param name="args" type="Array" optional="true"/>
}

Ext.util.TaskRunner = function(interval) {
	/// <param name="interval" type="Number" optional="true"/>
}

Ext.util.MixedCollection = function(allowFunctions, keyFn) {
	/// <param name="allowFunctions" type="Boolean"/>
	/// <param name="keyFn" type="Function"/>
}

Ext.util.JSON = {
	encodeDate : function(o) {
	},
	encode : function(o) {
	/// <param name="o" type="Mixed"/>
	/// <returns type="String" />
	},
	decode : function(json) {
	/// <param name="json" type="String"/>
	/// <returns type="Object" />
	}
}

Ext.util.Format = {
	ellipsis : function(value, len) {
	/// <param name="value" type="String"/>
	/// <param name="len" type="Number"/>
	/// <returns type="String" />
	},
	undef : function(value) {
	/// <param name="value" type="Mixed"/>
	/// <returns type="Mixed" />
	},
	defaultValue : function(value, defaultValue) {
	/// <param name="value" type="Mixed"/>
	/// <param name="defaultValue" type="String"/>
	/// <returns type="String" />
	},
	htmlEncode : function(value) {
	/// <param name="value" type="String"/>
	/// <returns type="String" />
	},
	htmlDecode : function(value) {
	/// <param name="value" type="String"/>
	/// <returns type="String" />
	},
	trim : function(value) {
	/// <param name="value" type="String"/>
	/// <returns type="String" />
	},
	substr : function(value, start, length) {
	/// <param name="value" type="String"/>
	/// <param name="start" type="Number"/>
	/// <param name="length" type="Number"/>
	/// <returns type="String" />
	},
	lowercase : function(value) {
	/// <param name="value" type="String"/>
	/// <returns type="String" />
	},
	uppercase : function(value) {
	/// <param name="value" type="String"/>
	/// <returns type="String" />
	},
	capitalize : function(value) {
	/// <param name="value" type="String"/>
	/// <returns type="String" />
	},
	call : function(value, fn) {
	},
	usMoney : function(v) {
	/// <param name="v" type="Number|String"/>
	/// <returns type="String" />
	},
	date : function(v, format) {
	/// <param name="v" type="String|Date"/>
	/// <param name="format" type="String" optional="true"/>
	/// <returns type="String" />
	},
	dateRenderer : function(format) {
	/// <param name="format" type="String"/>
	/// <returns type="Function" />
	},
	stripTags : function(v) {
	/// <param name="v" type="Mixed"/>
	/// <returns type="String" />
	},
	stripScripts : function(v) {
	/// <param name="v" type="Mixed"/>
	/// <returns type="String" />
	},
	fileSize : function(size) {
	/// <param name="size" type="Number|String"/>
	/// <returns type="String" />
	},
	math : function(v, a) {
	},
	nl2br : function(v) {
	}
}

Ext.util.CSS = {
	createStyleSheet : function(cssText, id) {
	/// <param name="cssText" type="String"/>
	/// <param name="id" type="String"/>
	/// <returns type="StyleSheet" />
	},
	removeStyleSheet : function(id) {
	/// <param name="id" type="String"/>
	},
	swapStyleSheet : function(id, url) {
	/// <param name="id" type="String"/>
	/// <param name="url" type="String"/>
	},
	refreshCache : function() {
	/// <returns type="Object" />
	},
	cacheStyleSheet : function(ss) {
	},
	getRules : function(refreshCache) {
	/// <param name="refreshCache" type="Boolean"/>
	/// <returns type="Object" />
	},
	getRule : function(selector, refreshCache) {
	/// <param name="selector" type="String|Array"/>
	/// <param name="refreshCache" type="Boolean"/>
	/// <returns type="CSSRule" />
	},
	updateRule : function(selector, property, value) {
	/// <param name="selector" type="String|Array"/>
	/// <param name="property" type="String"/>
	/// <param name="value" type="String"/>
	/// <returns type="Boolean" />
	}
}

Ext.util.ClickRepeater = function(el, config) {
	/// <param name="el" type="Mixed"/>
	/// <param name="config" type="Object"/>
}

Ext.util.TextMetrics = {
	measure : function(el, text, fixedWidth) {
	/// <param name="el" type="String|HTMLElement"/>
	/// <param name="text" type="String"/>
	/// <param name="fixedWidth" type="Number" optional="true"/>
	/// <returns type="Object" />
	},
	createInstance : function(el, fixedWidth) {
	/// <param name="el" type="String|HTMLElement"/>
	/// <param name="fixedWidth" type="Number" optional="true"/>
	/// <returns type="Ext.util.TextMetrics.Instance" />
	}
}

Ext.util.TextMetrics.Instance = function(bindTo, fixedWidth) {
}

Ext.EventManager = {
	addListener : function(element, eventName, fn, scope, options) {
	/// <param name="element" type="String|HTMLElement"/>
	/// <param name="eventName" type="String"/>
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <param name="options" type="Object" optional="true"/>
	},
	removeListener : function(element, eventName, fn, scope) {
	/// <param name="element" type="String|HTMLElement"/>
	/// <param name="eventName" type="String"/>
	/// <param name="fn" type="Function"/>
	},
	removeAll : function(element) {
	/// <param name="element" type="String|HTMLElement"/>
	},
	onDocumentReady : function(fn, scope, options) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <param name="options" type="boolean" optional="true"/>
	},
	onWindowResize : function(fn, scope, options) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object"/>
	/// <param name="options" type="boolean"/>
	},
	fireWindowResize : function() {	},
	onTextResize : function(fn, scope, options) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object"/>
	/// <param name="options" type="boolean"/>
	},
	removeResizeListener : function(fn, scope) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object"/>
	},
	fireResize : function() {	},
	on : function(element, eventName, fn, scope, options) {
	/// <param name="element" type="String|HTMLElement"/>
	/// <param name="eventName" type="String"/>
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <param name="options" type="Object" optional="true"/>
	},
	un : function(element, eventName, fn, scope) {
	/// <param name="element" type="String|HTMLElement"/>
	/// <param name="eventName" type="String"/>
	/// <param name="fn" type="Function"/>
	/// <returns type="Boolean" />
	}
}

Ext.EventObjectImpl = function(e) {
}

Ext.Element = function(element, forceNew) {
	/// <param name="element" type="String|HTMLElement"/>
	/// <param name="forceNew" type="Boolean" optional="true"/>
}
Ext.Element.addUnits = function(v, defaultUnit) {
}
Ext.Element.get = function(el) {
	/// <param name="el" type="Mixed"/>
	/// <returns type="Ext.Element" />
}
Ext.Element.uncache = function(el) {
}
Ext.Element.garbageCollect = function() {}
Ext.Element.fly = function(el, named) {
	/// <param name="el" type="String|HTMLElement"/>
	/// <param name="named" type="String" optional="true"/>
	/// <returns type="Ext.Element" />
}
Ext.Element.selectorFunction = function(path, root, type) {
}
Ext.Element.select = function(selector, unique, root) {
}
Ext.Element.measureText = function(el, text, fixedWidth) {
}


Ext.Element.borders = {}

Ext.Element.paddings = {}

Ext.Element.margins = {}

Ext.Element.cache = {}

Ext.Element.Flyweight = function(dom) {
}

Ext.Fx = {
	slideIn : function(anchor, o) {
	/// <param name="anchor" type="String" optional="true"/>
	/// <param name="o" type="Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	slideOut : function(anchor, o) {
	/// <param name="anchor" type="String" optional="true"/>
	/// <param name="o" type="Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	puff : function(o) {
	/// <param name="o" type="Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	switchOff : function(o) {
	/// <param name="o" type="Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	highlight : function(color, o) {
	/// <param name="color" type="String" optional="true"/>
	/// <param name="o" type="Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	frame : function(color, count, o) {
	/// <param name="color" type="String" optional="true"/>
	/// <param name="count" type="Number" optional="true"/>
	/// <param name="o" type="Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	pause : function(seconds) {
	/// <param name="seconds" type="Number"/>
	/// <returns type="Ext.Element" />
	},
	fadeIn : function(o) {
	/// <param name="o" type="Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	fadeOut : function(o) {
	/// <param name="o" type="Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	scale : function(w, h, o) {
	/// <param name="w" type="Number"/>
	/// <param name="h" type="Number"/>
	/// <param name="o" type="Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	shift : function(o) {
	/// <param name="o" type="Object"/>
	/// <returns type="Ext.Element" />
	},
	ghost : function(anchor, o) {
	/// <param name="anchor" type="String" optional="true"/>
	/// <param name="o" type="Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	syncFx : function() {
	/// <returns type="Ext.Element" />
	},
	sequenceFx : function() {
	/// <returns type="Ext.Element" />
	},
	nextFx : function() {	},
	hasActiveFx : function() {
	/// <returns type="Boolean" />
	},
	stopFx : function() {
	/// <returns type="Ext.Element" />
	},
	beforeFx : function(o) {
	},
	hasFxBlock : function() {
	/// <returns type="Boolean" />
	},
	queueFx : function(o, fn) {
	},
	fxWrap : function(pos, o, vis) {
	},
	fxUnwrap : function(wrap, pos, o) {
	},
	getFxRestore : function() {	},
	afterFx : function(o) {
	},
	getFxEl : function() {	},
	fxanim : function(args, opt, animType, defaultDur, defaultEase, cb) {
	},
	resize : function(w, h, o) {
	}
}

Ext.CompositeElement = function(els) {
}
Ext.CompositeElement.createCall = function(proto, fnName) {
}


Ext.CompositeElementLite = function(els) {
}

Ext.data = {}

Ext.data.Connection = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.data.SortTypes = {
	none : function(s) {
	/// <param name="s" type="Mixed"/>
	/// <returns type="Mixed" />
	},
	asText : function(s) {
	/// <param name="s" type="Mixed"/>
	/// <returns type="String" />
	},
	asUCText : function(s) {
	/// <param name="s" type="Mixed"/>
	/// <returns type="String" />
	},
	asUCString : function(s) {
	/// <param name="s" type="Mixed"/>
	/// <returns type="String" />
	},
	asDate : function(s) {
	/// <param name="s" type="Mixed"/>
	/// <returns type="Number" />
	},
	asFloat : function(s) {
	/// <param name="s" type="Mixed"/>
	/// <returns type="Float" />
	},
	asInt : function(s) {
	/// <param name="s" type="Mixed"/>
	/// <returns type="Number" />
	}
}

Ext.data.Record = function(data, id) {
	/// <param name="data" type="Array"/>
	/// <param name="id" type="Object" optional="true"/>
}
Ext.data.Record.create = function(o) {
	/// <param name="o" type="Array"/>
	/// <returns type="function" />
}


Ext.data.Store = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.data.SimpleStore = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.data.JsonStore = function(c) {
	/// <param name="c" type="Object"/>
}

Ext.data.Field = function(config) {
}

Ext.data.DataReader = function(meta, recordType) {
	/// <param name="meta" type="Object"/>
	/// <param name="recordType" type="Object"/>
}

Ext.data.DataProxy = function() {}

Ext.data.MemoryProxy = function(data) {
	/// <param name="data" type="Object"/>
}

Ext.data.HttpProxy = function(conn) {
	/// <param name="conn" type="Object"/>
}

Ext.data.ScriptTagProxy = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.data.JsonReader = function(meta, recordType) {
	/// <param name="meta" type="Object"/>
	/// <param name="recordType" type="Object"/>
}

Ext.data.XmlReader = function(meta, recordType) {
	/// <param name="meta" type="Object"/>
	/// <param name="recordType" type="Object"/>
}

Ext.data.ArrayReader = function(meta, recordType) {
	/// <param name="meta" type="Object"/>
	/// <param name="recordType" type="Object"/>
}

Ext.data.Tree = function(root) {
	/// <param name="root" type="Node" optional="true"/>
}

Ext.data.Node = function(attributes) {
	/// <param name="attributes" type="Object"/>
}

Ext.data.GroupingStore = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.Updater = function(el, forceNew) {
	/// <param name="el" type="Mixed"/>
	/// <param name="forceNew" type="Boolean" optional="true"/>
}
Ext.Updater.updateElement = function(el, url, params, options) {
	/// <param name="el" type="Mixed"/>
	/// <param name="url" type="String"/>
	/// <param name="params" type="String|Object" optional="true"/>
	/// <param name="options" type="Object" optional="true"/>
}


Ext.Updater.defaults = {}

Ext.Updater.BasicRenderer = function() {}

Ext.UpdateManager = function() {}
Ext.UpdateManager.updateElement = function(el, url, params, options) {
	/// <param name="el" type="Mixed"/>
	/// <param name="url" type="String"/>
	/// <param name="params" type="String|Object" optional="true"/>
	/// <param name="options" type="Object" optional="true"/>
}


Ext.UpdateManager.defaults = {}

Ext.UpdateManager.BasicRenderer = function() {}

Ext.XTemplate = function(parts) {
	/// <param name="parts" type="String|Array|Object"/>
}

Ext.KeyNav = function(el, config) {
	/// <param name="el" type="Mixed"/>
	/// <param name="config" type="Object"/>
}

Ext.KeyMap = function(el, config, eventName) {
	/// <param name="el" type="Mixed"/>
	/// <param name="config" type="Object"/>
	/// <param name="eventName" type="String" optional="true"/>
}

Ext.dd = {}

Ext.dd.DragDrop = function(id, sGroup, config) {
	/// <param name="id" type="String"/>
	/// <param name="sGroup" type="String"/>
	/// <param name="config" type="object"/>
}

Ext.dd.DragDropMgr = {
	init : function() {	},
	lock : function() {	},
	unlock : function() {	},
	isLocked : function() {
	/// <returns type="boolean" />
	},
	regDragDrop : function(oDD, sGroup) {
	/// <param name="oDD" type="DragDrop"/>
	/// <param name="sGroup" type="String"/>
	},
	removeDDFromGroup : function(oDD, sGroup) {
	},
	regHandle : function(sDDId, sHandleId) {
	/// <param name="sDDId" type="String"/>
	/// <param name="sHandleId" type="String"/>
	},
	isDragDrop : function(id) {
	/// <param name="id" type="String"/>
	/// <returns type="boolean" />
	},
	getRelated : function(p_oDD, bTargetsOnly) {
	/// <param name="p_oDD" type="DragDrop"/>
	/// <param name="bTargetsOnly" type="boolean"/>
	/// <returns type="DragDrop[]" />
	},
	isLegalTarget : function(oDD, oTargetDD) {
	/// <param name="oDD" type="DragDrop"/>
	/// <param name="oTargetDD" type="DragDrop"/>
	/// <returns type="boolean" />
	},
	isTypeOfDD : function(oDD) {
	/// <param name="oDD" type="Object"/>
	/// <returns type="boolean" />
	},
	isHandle : function(sDDId, sHandleId) {
	/// <param name="sDDId" type="String"/>
	/// <returns type="boolean" />
	},
	getDDById : function(id) {
	/// <param name="id" type="String"/>
	/// <returns type="Ext.dd.DragDrop" />
	},
	handleMouseDown : function(e, oDD) {
	/// <param name="e" type="Event"/>
	},
	startDrag : function(x, y) {
	/// <param name="x" type="int"/>
	/// <param name="y" type="int"/>
	},
	handleMouseUp : function(e) {
	/// <param name="e" type="Event"/>
	},
	stopEvent : function(e) {
	/// <param name="e" type="Event"/>
	},
	stopDrag : function(e) {
	/// <param name="e" type="Event"/>
	},
	handleMouseMove : function(e) {
	/// <param name="e" type="Event"/>
	},
	fireEvents : function(e, isDrop) {
	/// <param name="e" type="Event"/>
	/// <param name="isDrop" type="boolean"/>
	},
	getBestMatch : function(dds) {
	/// <param name="dds" type="DragDrop[]"/>
	/// <returns type="Ext.dd.DragDrop" />
	},
	refreshCache : function(groups) {
	/// <param name="groups" type="Object"/>
	},
	verifyEl : function(el) {
	/// <param name="el" type="HTMLElement"/>
	/// <returns type="boolean" />
	},
	getLocation : function(oDD) {
	/// <param name="oDD" type="DragDrop"/>
	/// <returns type="Ext.lib.Region" />
	},
	isOverTarget : function(pt, oTarget, intersect) {
	/// <param name="pt" type="Ext.lib.Point"/>
	/// <param name="oTarget" type="DragDrop"/>
	/// <returns type="boolean" />
	},
	unregAll : function() {	},
	getElWrapper : function(id) {
	/// <param name="id" type="String"/>
	/// <returns type="Ext.dd.DDM.ElementWrapper" />
	},
	getElement : function(id) {
	/// <param name="id" type="String"/>
	/// <returns type="Object" />
	},
	getCss : function(id) {
	/// <param name="id" type="String"/>
	/// <returns type="Object" />
	},
	getPosX : function(el) {
	/// <returns type="int" />
	},
	getPosY : function(el) {
	/// <returns type="int" />
	},
	swapNode : function(n1, n2) {
	},
	getScroll : function() {	},
	getStyle : function(el, styleProp) {
	/// <param name="el" type="HTMLElement"/>
	/// <param name="styleProp" type="string"/>
	/// <returns type="string" />
	},
	getScrollTop : function() {
	/// <returns type="int" />
	},
	getScrollLeft : function() {
	/// <returns type="int" />
	},
	moveToEl : function(moveEl, targetEl) {
	/// <param name="moveEl" type="HTMLElement"/>
	/// <param name="targetEl" type="HTMLElement"/>
	},
	numericSort : function(a, b) {
	},
	handleWasClicked : function(node, id) {
	}
}

Ext.dd.DragDropMgr.ids = {}

Ext.dd.DragDropMgr.handleIds = {}

Ext.dd.DragDropMgr.dragOvers = {}

Ext.dd.DragDropMgr.locationCache = {}

Ext.dd.DragDropMgr.elementCache = {}

Ext.dd.DragDropMgr.ElementWrapper = function(el) {
}

Ext.dd.DDM = {
	init : function() {	},
	lock : function() {	},
	unlock : function() {	},
	isLocked : function() {
	/// <returns type="boolean" />
	},
	regDragDrop : function(oDD, sGroup) {
	/// <param name="oDD" type="DragDrop"/>
	/// <param name="sGroup" type="String"/>
	},
	removeDDFromGroup : function(oDD, sGroup) {
	},
	regHandle : function(sDDId, sHandleId) {
	/// <param name="sDDId" type="String"/>
	/// <param name="sHandleId" type="String"/>
	},
	isDragDrop : function(id) {
	/// <param name="id" type="String"/>
	/// <returns type="boolean" />
	},
	getRelated : function(p_oDD, bTargetsOnly) {
	/// <param name="p_oDD" type="DragDrop"/>
	/// <param name="bTargetsOnly" type="boolean"/>
	/// <returns type="DragDrop[]" />
	},
	isLegalTarget : function(oDD, oTargetDD) {
	/// <param name="oDD" type="DragDrop"/>
	/// <param name="oTargetDD" type="DragDrop"/>
	/// <returns type="boolean" />
	},
	isTypeOfDD : function(oDD) {
	/// <param name="oDD" type="Object"/>
	/// <returns type="boolean" />
	},
	isHandle : function(sDDId, sHandleId) {
	/// <param name="sDDId" type="String"/>
	/// <returns type="boolean" />
	},
	getDDById : function(id) {
	/// <param name="id" type="String"/>
	/// <returns type="Ext.dd.DragDrop" />
	},
	handleMouseDown : function(e, oDD) {
	/// <param name="e" type="Event"/>
	},
	startDrag : function(x, y) {
	/// <param name="x" type="int"/>
	/// <param name="y" type="int"/>
	},
	handleMouseUp : function(e) {
	/// <param name="e" type="Event"/>
	},
	stopEvent : function(e) {
	/// <param name="e" type="Event"/>
	},
	stopDrag : function(e) {
	/// <param name="e" type="Event"/>
	},
	handleMouseMove : function(e) {
	/// <param name="e" type="Event"/>
	},
	fireEvents : function(e, isDrop) {
	/// <param name="e" type="Event"/>
	/// <param name="isDrop" type="boolean"/>
	},
	getBestMatch : function(dds) {
	/// <param name="dds" type="DragDrop[]"/>
	/// <returns type="Ext.dd.DragDrop" />
	},
	refreshCache : function(groups) {
	/// <param name="groups" type="Object"/>
	},
	verifyEl : function(el) {
	/// <param name="el" type="HTMLElement"/>
	/// <returns type="boolean" />
	},
	getLocation : function(oDD) {
	/// <param name="oDD" type="DragDrop"/>
	/// <returns type="Ext.lib.Region" />
	},
	isOverTarget : function(pt, oTarget, intersect) {
	/// <param name="pt" type="Ext.lib.Point"/>
	/// <param name="oTarget" type="DragDrop"/>
	/// <returns type="boolean" />
	},
	unregAll : function() {	},
	getElWrapper : function(id) {
	/// <param name="id" type="String"/>
	/// <returns type="Ext.dd.DDM.ElementWrapper" />
	},
	getElement : function(id) {
	/// <param name="id" type="String"/>
	/// <returns type="Object" />
	},
	getCss : function(id) {
	/// <param name="id" type="String"/>
	/// <returns type="Object" />
	},
	getPosX : function(el) {
	/// <returns type="int" />
	},
	getPosY : function(el) {
	/// <returns type="int" />
	},
	swapNode : function(n1, n2) {
	},
	getScroll : function() {	},
	getStyle : function(el, styleProp) {
	/// <param name="el" type="HTMLElement"/>
	/// <param name="styleProp" type="string"/>
	/// <returns type="string" />
	},
	getScrollTop : function() {
	/// <returns type="int" />
	},
	getScrollLeft : function() {
	/// <returns type="int" />
	},
	moveToEl : function(moveEl, targetEl) {
	/// <param name="moveEl" type="HTMLElement"/>
	/// <param name="targetEl" type="HTMLElement"/>
	},
	numericSort : function(a, b) {
	},
	handleWasClicked : function(node, id) {
	}
}

Ext.dd.DDM.ids = {}

Ext.dd.DDM.handleIds = {}

Ext.dd.DDM.dragOvers = {}

Ext.dd.DDM.locationCache = {}

Ext.dd.DDM.elementCache = {}

Ext.dd.DDM.ElementWrapper = function(el) {
}

Ext.dd.DD = function(id, sGroup, config) {
	/// <param name="id" type="String"/>
	/// <param name="sGroup" type="String"/>
	/// <param name="config" type="object"/>
}

Ext.dd.DDProxy = function(id, sGroup, config) {
	/// <param name="id" type="String"/>
	/// <param name="sGroup" type="String"/>
	/// <param name="config" type="object"/>
}

Ext.dd.DDTarget = function(id, sGroup, config) {
	/// <param name="id" type="String"/>
	/// <param name="sGroup" type="String"/>
	/// <param name="config" type="object"/>
}

Ext.dd.DragTracker = function(config) {
}

Ext.dd.ScrollManager = {
	register : function(el) {
	/// <param name="el" type="Mixed|Array"/>
	},
	unregister : function(el) {
	/// <param name="el" type="Mixed|Array"/>
	},
	refreshCache : function() {	}
}

Ext.dd.Registry = {
	register : function(el, data) {
	/// <param name="el" type="String|HTMLElement"/>
	/// <param name="data" type="Object" optional="true"/>
	},
	unregister : function(el) {
	/// <param name="el" type="String|HTMLElement"/>
	},
	getHandle : function(id) {
	/// <param name="id" type="String|HTMLElement"/>
	/// <returns type="Object" />
	},
	getHandleFromEvent : function(e) {
	/// <param name="e" type="Event"/>
	/// <returns type="Object" />
	},
	getTarget : function(id) {
	/// <param name="id" type="String|HTMLElement"/>
	/// <returns type="Object" />
	},
	getTargetFromEvent : function(e) {
	/// <param name="e" type="Event"/>
	/// <returns type="Object" />
	}
}

Ext.dd.StatusProxy = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.dd.DragSource = function(el, config) {
	/// <param name="el" type="Mixed"/>
	/// <param name="config" type="Object"/>
}

Ext.dd.DropTarget = function(el, config) {
	/// <param name="el" type="Mixed"/>
	/// <param name="config" type="Object"/>
}

Ext.dd.DragZone = function(el, config) {
	/// <param name="el" type="Mixed"/>
	/// <param name="config" type="Object"/>
}

Ext.dd.DropZone = function(el, config) {
	/// <param name="el" type="Mixed"/>
	/// <param name="config" type="Object"/>
}

Ext.dd.PanelProxy = function(panel, config) {
}

Ext.ComponentMgr = {
	register : function(c) {
	/// <param name="c" type="Ext.Component"/>
	},
	unregister : function(c) {
	/// <param name="c" type="Ext.Component"/>
	},
	get : function(id) {
	/// <param name="id" type="String"/>
	/// <returns type="Ext.Component" />
	},
	onAvailable : function(id, fn, scope) {
	/// <param name="id" type="String"/>
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object"/>
	},
	registerType : function(xtype, cls) {
	/// <param name="xtype" type="String"/>
	/// <param name="cls" type="Constructor"/>
	},
	create : function(config, defaultType) {
	/// <param name="config" type="Object"/>
	/// <param name="defaultType" type="Constructor"/>
	}
}

Ext.Component = function(config) {
	/// <param name="config" type="Ext.Element|String|Object"/>
}

Ext.Action = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.Layer = function(config, existingEl) {
	/// <param name="config" type="Object"/>
	/// <param name="existingEl" type="String|HTMLElement" optional="true"/>
}

Ext.Shadow = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.Shadow.Pool = {
	pull : function() {	},
	push : function(sh) {
	}
}

Ext.BoxComponent = function(config) {
	/// <param name="config" type="Ext.Element|String|Object"/>
}

Ext.SplitBar = function(dragElement, resizingElement, orientation, placement, existingProxy) {
	/// <param name="dragElement" type="Mixed"/>
	/// <param name="resizingElement" type="Mixed"/>
	/// <param name="orientation" type="Number" optional="true"/>
	/// <param name="placement" type="Number" optional="true"/>
}
Ext.SplitBar.createProxy = function(dir) {
}


Ext.SplitBar.BasicLayoutAdapter = function() {}

Ext.SplitBar.AbsoluteLayoutAdapter = function(container) {
	/// <param name="container" type="Mixed"/>
}

Ext.Container = function() {}

Ext.Container.LAYOUTS = {}

Ext.Container.LAYOUTS.auto = function(config) {
}

Ext.Container.LAYOUTS.fit = function() {}

Ext.Container.LAYOUTS.card = function() {}

Ext.Container.LAYOUTS.anchor = function() {}

Ext.Container.LAYOUTS.column = function() {}

Ext.Container.LAYOUTS.border = function() {}

Ext.Container.LAYOUTS.border.Region = function(layout, config, pos) {
	/// <param name="layout" type="Layout"/>
	/// <param name="config" type="Object"/>
	/// <param name="pos" type="String"/>
}

Ext.Container.LAYOUTS.border.SplitRegion = function(layout, config, pos) {
	/// <param name="layout" type="Layout"/>
	/// <param name="config" type="Object"/>
	/// <param name="pos" type="String"/>
}

Ext.Container.LAYOUTS.form = function() {}

Ext.Container.LAYOUTS.accordion = function() {}

Ext.Container.LAYOUTS.table = function() {}

Ext.Container.LAYOUTS.absolute = function() {}

Ext.layout = {}

Ext.layout.ContainerLayout = function(config) {
}

Ext.layout.FitLayout = function() {}

Ext.layout.CardLayout = function() {}

Ext.layout.AnchorLayout = function() {}

Ext.layout.ColumnLayout = function() {}

Ext.layout.BorderLayout = function() {}

Ext.layout.BorderLayout.Region = function(layout, config, pos) {
	/// <param name="layout" type="Layout"/>
	/// <param name="config" type="Object"/>
	/// <param name="pos" type="String"/>
}

Ext.layout.BorderLayout.SplitRegion = function(layout, config, pos) {
	/// <param name="layout" type="Layout"/>
	/// <param name="config" type="Object"/>
	/// <param name="pos" type="String"/>
}

Ext.layout.FormLayout = function() {}

Ext.layout.Accordion = function() {}

Ext.layout.TableLayout = function() {}

Ext.layout.AbsoluteLayout = function() {}

Ext.Viewport = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.Panel = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.Panel.DD = function(panel, cfg) {
}

Ext.Window = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.Window.DD = function(win) {
}

Ext.WindowGroup = function() {}

Ext.state = {}

Ext.state.Provider = function() {}

Ext.state.Manager = {
	setProvider : function(stateProvider) {
	/// <param name="stateProvider" type="Provider"/>
	},
	get : function(key, defaultValue) {
	/// <param name="key" type="String"/>
	/// <param name="defaultValue" type="Mixed"/>
	/// <returns type="Mixed" />
	},
	set : function(key, value) {
	/// <param name="key" type="String"/>
	/// <param name="value" type="Mixed"/>
	},
	clear : function(key) {
	/// <param name="key" type="String"/>
	},
	getProvider : function() {
	/// <returns type="Ext.state.Provider" />
	}
}

Ext.state.CookieProvider = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.DataView = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.ColorPalette = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.DatePicker = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.TabPanel = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.TabPanel.AccessStack = function() {}

Ext.Button = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.ButtonToggleMgr = {
	register : function(btn) {
	},
	unregister : function(btn) {
	}
}

Ext.SplitButton = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.MenuButton = function() {}

Ext.CycleButton = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.Toolbar = function(config) {
	/// <param name="config" type="Object|Array"/>
}

Ext.Toolbar.Item = function(el) {
	/// <param name="el" type="HTMLElement"/>
}

Ext.Toolbar.Separator = function() {}

Ext.Toolbar.Spacer = function() {}

Ext.Toolbar.Fill = function() {}

Ext.Toolbar.TextItem = function(t) {
	/// <param name="t" type="String|Object"/>
}

Ext.Toolbar.Button = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.Toolbar.SplitButton = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.Toolbar.MenuButton = function() {}

Ext.PagingToolbar = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.Resizable = function(el, config) {
	/// <param name="el" type="Mixed"/>
	/// <param name="config" type="Object"/>
}

Ext.Resizable.positions = {}

Ext.Resizable.Handle = function(rz, pos, disableTrackOver, transparent) {
}

Ext.Editor = function(field, config) {
	/// <param name="field" type="Ext.form.Field"/>
	/// <param name="config" type="Object"/>
}

Ext.MessageBox = {
	getDialog : function(titleText) {
	/// <returns type="Ext.Window" />
	},
	updateText : function(text) {
	/// <param name="text" type="String" optional="true"/>
	/// <returns type="Ext.MessageBox" />
	},
	updateProgress : function(value, progressText, msg) {
	/// <param name="value" type="Number"/>
	/// <param name="progressText" type="String"/>
	/// <param name="msg" type="String"/>
	/// <returns type="Ext.MessageBox" />
	},
	isVisible : function() {
	/// <returns type="Boolean" />
	},
	hide : function() {
	/// <returns type="Ext.MessageBox" />
	},
	show : function(options) {
	/// <param name="options" type="Object"/>
	/// <returns type="Ext.MessageBox" />
	},
	setIcon : function(icon) {
	/// <param name="icon" type="String"/>
	/// <returns type="Ext.MessageBox" />
	},
	progress : function(title, msg, progressText) {
	/// <param name="title" type="String"/>
	/// <param name="msg" type="String"/>
	/// <param name="progressText" type="String" optional="true"/>
	/// <returns type="Ext.MessageBox" />
	},
	wait : function(msg, title, config) {
	/// <param name="msg" type="String"/>
	/// <param name="title" type="String" optional="true"/>
	/// <param name="config" type="Object" optional="true"/>
	/// <returns type="Ext.MessageBox" />
	},
	alert : function(title, msg, fn, scope) {
	/// <param name="title" type="String"/>
	/// <param name="msg" type="String"/>
	/// <param name="fn" type="Function" optional="true"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <returns type="Ext.MessageBox" />
	},
	confirm : function(title, msg, fn, scope) {
	/// <param name="title" type="String"/>
	/// <param name="msg" type="String"/>
	/// <param name="fn" type="Function" optional="true"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <returns type="Ext.MessageBox" />
	},
	prompt : function(title, msg, fn, scope, multiline, value) {
	/// <param name="title" type="String"/>
	/// <param name="msg" type="String"/>
	/// <param name="fn" type="Function" optional="true"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <param name="multiline" type="Boolean|Number" optional="true"/>
	/// <param name="value" type="String" optional="true"/>
	/// <returns type="Ext.MessageBox" />
	}
}

Ext.MessageBox.OK = {}

Ext.MessageBox.CANCEL = {}

Ext.MessageBox.OKCANCEL = {}

Ext.MessageBox.YESNO = {}

Ext.MessageBox.YESNOCANCEL = {}

Ext.MessageBox.buttonText = {}

Ext.Msg = {
	getDialog : function(titleText) {
	/// <returns type="Ext.Window" />
	},
	updateText : function(text) {
	/// <param name="text" type="String" optional="true"/>
	/// <returns type="Ext.MessageBox" />
	},
	updateProgress : function(value, progressText, msg) {
	/// <param name="value" type="Number"/>
	/// <param name="progressText" type="String"/>
	/// <param name="msg" type="String"/>
	/// <returns type="Ext.MessageBox" />
	},
	isVisible : function() {
	/// <returns type="Boolean" />
	},
	hide : function() {
	/// <returns type="Ext.MessageBox" />
	},
	show : function(options) {
	/// <param name="options" type="Object"/>
	/// <returns type="Ext.MessageBox" />
	},
	setIcon : function(icon) {
	/// <param name="icon" type="String"/>
	/// <returns type="Ext.MessageBox" />
	},
	progress : function(title, msg, progressText) {
	/// <param name="title" type="String"/>
	/// <param name="msg" type="String"/>
	/// <param name="progressText" type="String" optional="true"/>
	/// <returns type="Ext.MessageBox" />
	},
	wait : function(msg, title, config) {
	/// <param name="msg" type="String"/>
	/// <param name="title" type="String" optional="true"/>
	/// <param name="config" type="Object" optional="true"/>
	/// <returns type="Ext.MessageBox" />
	},
	alert : function(title, msg, fn, scope) {
	/// <param name="title" type="String"/>
	/// <param name="msg" type="String"/>
	/// <param name="fn" type="Function" optional="true"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <returns type="Ext.MessageBox" />
	},
	confirm : function(title, msg, fn, scope) {
	/// <param name="title" type="String"/>
	/// <param name="msg" type="String"/>
	/// <param name="fn" type="Function" optional="true"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <returns type="Ext.MessageBox" />
	},
	prompt : function(title, msg, fn, scope, multiline, value) {
	/// <param name="title" type="String"/>
	/// <param name="msg" type="String"/>
	/// <param name="fn" type="Function" optional="true"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <param name="multiline" type="Boolean|Number" optional="true"/>
	/// <param name="value" type="String" optional="true"/>
	/// <returns type="Ext.MessageBox" />
	}
}

Ext.Msg.OK = {}

Ext.Msg.CANCEL = {}

Ext.Msg.OKCANCEL = {}

Ext.Msg.YESNO = {}

Ext.Msg.YESNOCANCEL = {}

Ext.Msg.buttonText = {}

Ext.Tip = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.ToolTip = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.QuickTip = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.QuickTips = {
	init : function(autoRender) {
	/// <param name="autoRender" type="Boolean"/>
	},
	enable : function() {	},
	disable : function() {	},
	isEnabled : function() {
	/// <returns type="Boolean" />
	},
	getQuickTip : function() {	},
	register : function(config) {
	/// <param name="config" type="Object"/>
	},
	unregister : function(el) {
	/// <param name="el" type="String|HTMLElement|Element"/>
	},
	tips : function(config) {
	/// <param name="config" type="Object"/>
	}
}

Ext.tree = {}

Ext.tree.TreePanel = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.tree.TreePanel.nodeTypes = {}

Ext.tree.TreePanel.nodeTypes.node = function(attributes) {
}

Ext.tree.TreePanel.nodeTypes.async = function(config) {
}

Ext.tree.TreeEventModel = function(tree) {
}

Ext.tree.DefaultSelectionModel = function(config) {
}

Ext.tree.MultiSelectionModel = function(config) {
}

Ext.tree.TreeNode = function(attributes) {
	/// <param name="attributes" type="Object|String"/>
}

Ext.tree.AsyncTreeNode = function(config) {
	/// <param name="config" type="Object|String"/>
}

Ext.tree.TreeNodeUI = function(node) {
}

Ext.tree.RootTreeNodeUI = function() {}

Ext.tree.TreeLoader = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.tree.TreeFilter = function(tree, config) {
	/// <param name="tree" type="TreePanel"/>
	/// <param name="config" type="Object" optional="true"/>
}

Ext.tree.TreeSorter = function(tree, config) {
	/// <param name="tree" type="TreePanel"/>
	/// <param name="config" type="Object"/>
}

Ext.tree.TreeDropZone = function(tree, config) {
	/// <param name="tree" type="String|HTMLElement|Element"/>
	/// <param name="config" type="Object"/>
}

Ext.tree.TreeDragZone = function(tree, config) {
	/// <param name="tree" type="String|HTMLElement|Element"/>
	/// <param name="config" type="Object"/>
}

Ext.tree.TreeEditor = function(tree, fc, config) {
	/// <param name="tree" type="TreePanel"/>
	/// <param name="fc" type="Object" optional="true"/>
	/// <param name="config" type="Object" optional="true"/>
}

Ext.menu = {}

Ext.menu.Menu = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.menu.MenuNav = function(menu) {
}

Ext.menu.MenuMgr = {
	hideAll : function() {	},
	register : function(menu) {
	},
	get : function(menu) {
	/// <param name="menu" type="String|Object"/>
	/// <returns type="Ext.menu.Menu" />
	},
	unregister : function(menu) {
	},
	registerCheckable : function(menuItem) {
	},
	unregisterCheckable : function(menuItem) {
	},
	getCheckedItem : function(groupId) {
	},
	setCheckedItem : function(groupId, itemId) {
	}
}

Ext.menu.BaseItem = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.menu.TextItem = function(cfg) {
	/// <param name="cfg" type="Object|String"/>
}

Ext.menu.Separator = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.menu.Item = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.menu.CheckItem = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.menu.Adapter = function(component, config) {
	/// <param name="component" type="Ext.Component"/>
	/// <param name="config" type="Object"/>
}

Ext.menu.DateItem = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.menu.ColorItem = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.menu.DateMenu = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.menu.ColorMenu = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.form = {}

Ext.form.Field = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.form.Field.msgFx = {}

Ext.form.Field.msgFx.normal = {
	show : function(msgEl, f) {
	},
	hide : function(msgEl, f) {
	}
}

Ext.form.Field.msgFx.slide = {
	show : function(msgEl, f) {
	},
	hide : function(msgEl, f) {
	}
}

Ext.form.Field.msgFx.slideRight = {
	show : function(msgEl, f) {
	},
	hide : function(msgEl, f) {
	}
}

Ext.form.MessageTargets = {}

Ext.form.MessageTargets.qtip = {
	mark : function(f) {
	},
	clear : function(f) {
	}
}

Ext.form.MessageTargets.title = {
	mark : function(f) {
	},
	clear : function(f) {
	}
}

Ext.form.MessageTargets.under = {
	mark : function(f) {
	},
	clear : function(f) {
	}
}

Ext.form.MessageTargets.side = {
	mark : function(f) {
	},
	clear : function(f) {
	}
}

Ext.form.MessageTargets.around = {
	mark : function(f) {
	},
	clear : function(f) {
	}
}

Ext.form.TextField = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.form.TriggerField = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.form.TwinTriggerField = function() {}

Ext.form.TextArea = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.form.NumberField = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.form.DateField = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.form.ComboBox = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.form.Checkbox = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.form.CheckboxGroup = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.form.Radio = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.form.RadioGroup = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.form.Hidden = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.form.BasicForm = function(el, config) {
	/// <param name="el" type="Mixed"/>
	/// <param name="config" type="Object"/>
}

Ext.form.FormPanel = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.form.FieldSet = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.form.HtmlEditor = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.form.TimeField = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.form.Label = function(config) {
	/// <param name="config" type="Ext.Element|String|Object"/>
}

Ext.form.Action = function(form, options) {
}

Ext.form.Action.Submit = function(form, options) {
}

Ext.form.Action.Load = function(form, options) {
}

Ext.form.Action.ACTION_TYPES = {}

Ext.form.Action.ACTION_TYPES.load = function(form, options) {
}

Ext.form.Action.ACTION_TYPES.submit = function(form, options) {
}

Ext.form.VTypes = {
	email : function(v) {
	/// <param name="v" type="String"/>
	},
	url : function(v) {
	/// <param name="v" type="String"/>
	},
	alpha : function(v) {
	/// <param name="v" type="String"/>
	},
	alphanum : function(v) {
	/// <param name="v" type="String"/>
	}
}

Ext.BasicForm = function(el, config) {
}

Ext.FormPanel = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.grid = {}

Ext.grid.GridPanel = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.grid.GridView = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.grid.GridView.SplitDragZone = function(grid, hd) {
}

Ext.grid.GridView.ColumnDragZone = function(grid, hd) {
}

Ext.grid.GroupingView = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.grid.HeaderDragZone = function(grid, hd, hd2) {
}

Ext.grid.HeaderDropZone = function(grid, hd, hd2) {
}

Ext.grid.SplitDragZone = function(grid, hd, hd2) {
}

Ext.grid.GridDragZone = function(grid, config) {
}

Ext.grid.ColumnModel = function(config) {
	/// <param name="config" type="Object"/>
}
Ext.grid.ColumnModel.defaultRenderer = function(value) {
}


Ext.grid.DefaultColumnModel = function(config) {
}
Ext.grid.DefaultColumnModel.defaultRenderer = function(value) {
}


Ext.grid.AbstractSelectionModel = function() {}

Ext.grid.RowSelectionModel = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.grid.CellSelectionModel = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.grid.EditorGridPanel = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.grid.GridEditor = function(field, config) {
}

Ext.grid.PropertyStore = function(grid, source) {
	/// <param name="grid" type="Ext.grid.Grid"/>
	/// <param name="source" type="Object"/>
}

Ext.grid.PropertyColumnModel = function(grid, store) {
	/// <param name="grid" type="Ext.grid.Grid"/>
	/// <param name="store" type="Object"/>
}

Ext.grid.PropertyGrid = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.grid.RowNumberer = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.grid.CheckboxSelectionModel = function(config) {
	/// <param name="config" type="Object"/>
}

Ext.LoadMask = function(el, config) {
	/// <param name="el" type="Mixed"/>
	/// <param name="config" type="Object"/>
}

Ext.ProgressBar = function() {}

Ext.Slider = function() {}

Ext.Slider.Vertical = {
	onResize : function(w, h) {
	},
	getRatio : function() {	},
	moveThumb : function(v, animate) {
	},
	onDrag : function(e) {
	},
	onClickChange : function(local) {
	}
}

Ext.StatusBar = function(config) {
	/// <param name="config" type="Object|Array"/>
}

Ext.History = {
	init : function(onReady, scope) {
	/// <param name="onReady" type="Boolean" optional="true"/>
	/// <param name="scope" type="Object" optional="true"/>
	},
	add : function(token, preventDup) {
	/// <param name="token" type="String"/>
	/// <param name="preventDup" type="Boolean"/>
	},
	back : function() {	},
	forward : function() {	},
	getToken : function() {
	/// <returns type="String" />
	}
}

Ext.History.events = {}

Ext.debug = {}

Ext.debug.ScriptsPanel = function() {}

Ext.debug.LogPanel = function() {}

Ext.debug.DomTree = function() {}

Ext.debug.HtmlNode = function(n) {
}


Ext.lib.Region.prototype = {
	contains : function(region) {
	},
	getArea : function() {	},
	intersect : function(region) {
	},
	union : function(region) {
	},
	constrainTo : function(r) {
	},
	adjust : function(t, l, b, r) {
	},
	top : null,
	right : null,
	bottom : null,
	left : null
}

Ext.lib.Point.prototype = {
	x : null,
	y : null
}

Ext.lib.AnimBase.prototype = {
	patterns : null,
	doMethod : function(attr, start, end) {
	},
	setAttribute : function(attr, val, unit) {
	},
	getAttribute : function(attr) {
	},
	getDefaultUnit : function(attr) {
	},
	animateX : function(callback, scope) {
	},
	setRuntimeAttribute : function(attr) {
	},
	init : function(el, attributes, duration, method) {
	}
}

Ext.lib.ColorAnim.prototype = new Ext.lib.AnimBase;

Ext.lib.ColorAnim.prototype.parseColor = function(s) {
}

Ext.lib.Motion.prototype = new Ext.lib.ColorAnim;

Ext.lib.Scroll.prototype = new Ext.lib.ColorAnim;

Ext.Template.prototype = {
	applyTemplate : function(values) {
	/// <param name="values" type="Object|Array"/>
	/// <returns type="String" />
	},
	set : function(html, compile) {
	/// <param name="html" type="String"/>
	/// <param name="compile" type="Boolean" optional="true"/>
	/// <returns type="Ext.Template" />
	},
	disableFormats : false,
	re : new RegExp,
	compile : function() {
	/// <returns type="Ext.Template" />
	},
	call : function(fnName, value, allValues) {
	},
	insertFirst : function(el, values, returnElement) {
	/// <param name="el" type="Mixed"/>
	/// <param name="values" type="Object|Array"/>
	/// <param name="returnElement" type="Boolean" optional="true"/>
	/// <returns type="HTMLElement" />
	},
	insertBefore : function(el, values, returnElement) {
	/// <param name="el" type="Mixed"/>
	/// <param name="values" type="Object|Array"/>
	/// <param name="returnElement" type="Boolean" optional="true"/>
	/// <returns type="HTMLElement" />
	},
	insertAfter : function(el, values, returnElement) {
	/// <param name="el" type="Mixed"/>
	/// <param name="values" type="Object|Array"/>
	/// <param name="returnElement" type="Boolean" optional="true"/>
	/// <returns type="HTMLElement" />
	},
	append : function(el, values, returnElement) {
	/// <param name="el" type="Mixed"/>
	/// <param name="values" type="Object|Array"/>
	/// <param name="returnElement" type="Boolean" optional="true"/>
	/// <returns type="HTMLElement" />
	},
	doInsert : function(where, el, values, returnEl) {
	},
	overwrite : function(el, values, returnElement) {
	/// <param name="el" type="Mixed"/>
	/// <param name="values" type="Object|Array"/>
	/// <param name="returnElement" type="Boolean" optional="true"/>
	/// <returns type="HTMLElement" />
	},
	apply : function(values) {
	/// <param name="values" type="Object|Array"/>
	/// <returns type="String" />
	},
	html : null
}

Ext.util.Observable.prototype = {
	fireEvent : function(eventName, args) {
	/// <param name="eventName" type="String"/>
	/// <param name="args" type="Object..."/>
	/// <returns type="Boolean" />
	},
	filterOptRe : new RegExp,
	addListener : function(eventName, fn, scope, o) {
	/// <param name="eventName" type="String"/>
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <param name="o" type="Object" optional="true"/>
	},
	removeListener : function(eventName, fn, scope) {
	/// <param name="eventName" type="String"/>
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	},
	purgeListeners : function() {	},
	relayEvents : function(o, events) {
	/// <param name="o" type="Object"/>
	/// <param name="events" type="Array"/>
	},
	addEvents : function(o) {
	/// <param name="o" type="Object"/>
	},
	hasListener : function(eventName) {
	/// <param name="eventName" type="String"/>
	/// <returns type="Boolean" />
	},
	suspendEvents : function() {	},
	resumeEvents : function() {	},
	getMethodEvent : function(method) {
	},
	beforeMethod : function(method, fn, scope) {
	},
	afterMethod : function(method, fn, scope) {
	},
	removeMethodListener : function(method, fn, scope) {
	},
	on : function(eventName, fn, scope, o) {
	/// <param name="eventName" type="String"/>
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <param name="o" type="Object" optional="true"/>
	},
	un : function(eventName, fn, scope) {
	/// <param name="eventName" type="String"/>
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	}
}

Ext.util.Event.prototype = {
	addListener : function(fn, scope, options) {
	},
	createListener : function(fn, scope, o) {
	},
	findListener : function(fn, scope) {
	},
	isListening : function(fn, scope) {
	},
	removeListener : function(fn, scope) {
	},
	clearListeners : function() {	},
	fire : function() {	},
	name : null,
	obj : null,
	listeners : null
}

Ext.util.DelayedTask.prototype = {
	delay : function(delay, newFn, newScope, newArgs) {
	/// <param name="delay" type="Number"/>
	/// <param name="newFn" type="Function" optional="true"/>
	/// <param name="newScope" type="Object" optional="true"/>
	/// <param name="newArgs" type="Array" optional="true"/>
	},
	cancel : function() {	}
}

Ext.util.TaskRunner.prototype = {
	start : function(task) {
	/// <param name="task" type="Object"/>
	/// <returns type="Object" />
	},
	stop : function(task) {
	/// <param name="task" type="Object"/>
	/// <returns type="Object" />
	},
	stopAll : function() {	}
}

Ext.util.MixedCollection.prototype = new Ext.util.Observable;

Ext.util.MixedCollection.prototype.allowFunctions = false;
Ext.util.MixedCollection.prototype.add = function(key, o) {
	/// <param name="key" type="String"/>
	/// <param name="o" type="Object"/>
	/// <returns type="Object" />
}
Ext.util.MixedCollection.prototype.getKey = function(o) {
	/// <param name="o" type="Object"/>
	/// <returns type="Object" />
}
Ext.util.MixedCollection.prototype.replace = function(key, o) {
	/// <param name="key" type="String"/>
	/// <param name="o" type="Object"/>
	/// <returns type="Object" />
}
Ext.util.MixedCollection.prototype.addAll = function(objs) {
	/// <param name="objs" type="Object|Array"/>
}
Ext.util.MixedCollection.prototype.each = function(fn, scope) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
}
Ext.util.MixedCollection.prototype.eachKey = function(fn, scope) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
}
Ext.util.MixedCollection.prototype.find = function(fn, scope) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <returns type="Object" />
}
Ext.util.MixedCollection.prototype.insert = function(index, key, o) {
	/// <param name="index" type="Number"/>
	/// <param name="key" type="String"/>
	/// <param name="o" type="Object" optional="true"/>
	/// <returns type="Object" />
}
Ext.util.MixedCollection.prototype.remove = function(o) {
	/// <param name="o" type="Object"/>
	/// <returns type="Object" />
}
Ext.util.MixedCollection.prototype.removeAt = function(index) {
	/// <param name="index" type="Number"/>
	/// <returns type="Object" />
}
Ext.util.MixedCollection.prototype.removeKey = function(key) {
	/// <param name="key" type="String"/>
	/// <returns type="Object" />
}
Ext.util.MixedCollection.prototype.getCount = function() {
	/// <returns type="Number" />
}
Ext.util.MixedCollection.prototype.indexOf = function(o) {
	/// <param name="o" type="Object"/>
	/// <returns type="Number" />
}
Ext.util.MixedCollection.prototype.indexOfKey = function(key) {
	/// <param name="key" type="String"/>
	/// <returns type="Number" />
}
Ext.util.MixedCollection.prototype.item = function(key) {
	/// <param name="key" type="String|Number"/>
	/// <returns type="Object" />
}
Ext.util.MixedCollection.prototype.itemAt = function(index) {
	/// <param name="index" type="Number"/>
	/// <returns type="Object" />
}
Ext.util.MixedCollection.prototype.key = function(key) {
	/// <param name="key" type="String|Number"/>
	/// <returns type="Object" />
}
Ext.util.MixedCollection.prototype.contains = function(o) {
	/// <param name="o" type="Object"/>
	/// <returns type="Boolean" />
}
Ext.util.MixedCollection.prototype.containsKey = function(key) {
	/// <param name="key" type="String"/>
	/// <returns type="Boolean" />
}
Ext.util.MixedCollection.prototype.clear = function() {}
Ext.util.MixedCollection.prototype.first = function() {
	/// <returns type="Object" />
}
Ext.util.MixedCollection.prototype.last = function() {
	/// <returns type="Object" />
}
Ext.util.MixedCollection.prototype.sort = function(dir, fn) {
	/// <param name="dir" type="String" optional="true"/>
	/// <param name="fn" type="Function" optional="true"/>
}
Ext.util.MixedCollection.prototype.keySort = function(dir, fn) {
	/// <param name="dir" type="String" optional="true"/>
	/// <param name="fn" type="Function" optional="true"/>
}
Ext.util.MixedCollection.prototype.getRange = function(start, end) {
	/// <param name="start" type="Number" optional="true"/>
	/// <param name="end" type="Number" optional="true"/>
	/// <returns type="Array" />
}
Ext.util.MixedCollection.prototype.filter = function(property, value, anyMatch, caseSensitive) {
	/// <param name="property" type="String"/>
	/// <param name="value" type="String|RegExp"/>
	/// <param name="anyMatch" type="Boolean" optional="true"/>
	/// <param name="caseSensitive" type="Boolean" optional="true"/>
	/// <returns type="Ext.util.MixedCollection" />
}
Ext.util.MixedCollection.prototype.filterBy = function(fn, scope) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <returns type="Ext.util.MixedCollection" />
}
Ext.util.MixedCollection.prototype.findIndex = function(property, value, start, anyMatch, caseSensitive) {
	/// <param name="property" type="String"/>
	/// <param name="value" type="String|RegExp"/>
	/// <param name="start" type="Number" optional="true"/>
	/// <param name="anyMatch" type="Boolean" optional="true"/>
	/// <param name="caseSensitive" type="Boolean" optional="true"/>
	/// <returns type="Number" />
}
Ext.util.MixedCollection.prototype.findIndexBy = function(fn, scope, start) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <param name="start" type="Number" optional="true"/>
	/// <returns type="Number" />
}
Ext.util.MixedCollection.prototype.createValueMatcher = function(value, anyMatch, caseSensitive) {
}
Ext.util.MixedCollection.prototype.clone = function() {
	/// <returns type="Ext.util.MixedCollection" />
}
Ext.util.MixedCollection.prototype.get = function(key) {
	/// <param name="key" type="String|Number"/>
	/// <returns type="Object" />
}
Ext.util.MixedCollection.prototype.items = null;
Ext.util.MixedCollection.prototype.map = null;
Ext.util.MixedCollection.prototype.keys = null;
Ext.util.MixedCollection.prototype.length = null;

Ext.util.ClickRepeater.prototype = new Ext.util.Observable;

Ext.util.ClickRepeater.prototype.interval = 0;
Ext.util.ClickRepeater.prototype.delay = 0;
Ext.util.ClickRepeater.prototype.preventDefault = false;
Ext.util.ClickRepeater.prototype.stopDefault = false;
Ext.util.ClickRepeater.prototype.timer = 0;
Ext.util.ClickRepeater.prototype.handleMouseDown = function() {}
Ext.util.ClickRepeater.prototype.click = function() {}
Ext.util.ClickRepeater.prototype.easeOutExpo = function(t, b, c, d) {
}
Ext.util.ClickRepeater.prototype.handleMouseOut = function() {}
Ext.util.ClickRepeater.prototype.handleMouseReturn = function() {}
Ext.util.ClickRepeater.prototype.handleMouseUp = function() {}
Ext.util.ClickRepeater.prototype.el = null;

Ext.EventObjectImpl.prototype = {
	browserEvent : null,
	button : 0,
	shiftKey : false,
	ctrlKey : false,
	altKey : false,
	BACKSPACE : 0,
	TAB : 0,
	NUM_CENTER : 0,
	ENTER : 0,
	RETURN : 0,
	SHIFT : 0,
	CTRL : 0,
	CONTROL : 0,
	ALT : 0,
	PAUSE : 0,
	CAPS_LOCK : 0,
	ESC : 0,
	SPACE : 0,
	PAGE_UP : 0,
	PAGEUP : 0,
	PAGE_DOWN : 0,
	PAGEDOWN : 0,
	END : 0,
	HOME : 0,
	LEFT : 0,
	UP : 0,
	RIGHT : 0,
	DOWN : 0,
	PRINT_SCREEN : 0,
	INSERT : 0,
	DELETE : 0,
	ZERO : 0,
	ONE : 0,
	TWO : 0,
	THREE : 0,
	FOUR : 0,
	FIVE : 0,
	SIX : 0,
	SEVEN : 0,
	EIGHT : 0,
	NINE : 0,
	A : 0,
	B : 0,
	C : 0,
	D : 0,
	E : 0,
	F : 0,
	G : 0,
	H : 0,
	I : 0,
	J : 0,
	K : 0,
	L : 0,
	M : 0,
	N : 0,
	O : 0,
	P : 0,
	Q : 0,
	R : 0,
	S : 0,
	T : 0,
	U : 0,
	V : 0,
	W : 0,
	X : 0,
	Y : 0,
	Z : 0,
	CONTEXT_MENU : 0,
	NUM_ZERO : 0,
	NUM_ONE : 0,
	NUM_TWO : 0,
	NUM_THREE : 0,
	NUM_FOUR : 0,
	NUM_FIVE : 0,
	NUM_SIX : 0,
	NUM_SEVEN : 0,
	NUM_EIGHT : 0,
	NUM_NINE : 0,
	NUM_MULTIPLY : 0,
	NUM_PLUS : 0,
	NUM_MINUS : 0,
	NUM_PERIOD : 0,
	NUM_DIVISION : 0,
	F1 : 0,
	F2 : 0,
	F3 : 0,
	F4 : 0,
	F5 : 0,
	F6 : 0,
	F7 : 0,
	F8 : 0,
	F9 : 0,
	F10 : 0,
	F11 : 0,
	F12 : 0,
	setEvent : function(e) {
	},
	stopEvent : function() {	},
	preventDefault : function() {	},
	isNavKeyPress : function() {	},
	isSpecialKey : function() {	},
	stopPropagation : function() {	},
	getCharCode : function() {
	/// <returns type="Number" />
	},
	getKey : function() {
	/// <returns type="Number" />
	},
	getPageX : function() {
	/// <returns type="Number" />
	},
	getPageY : function() {
	/// <returns type="Number" />
	},
	getTime : function() {
	/// <returns type="Number" />
	},
	getXY : function() {
	/// <returns type="Array" />
	},
	getTarget : function(selector, maxDepth, returnEl) {
	/// <param name="selector" type="String" optional="true"/>
	/// <param name="maxDepth" type="Number|Mixed" optional="true"/>
	/// <param name="returnEl" type="Boolean" optional="true"/>
	/// <returns type="HTMLelement" />
	},
	getRelatedTarget : function() {
	/// <returns type="HTMLElement" />
	},
	getWheelDelta : function() {
	/// <returns type="Number" />
	},
	hasModifier : function() {
	/// <returns type="Boolean" />
	},
	within : function(el, related) {
	/// <param name="el" type="Mixed"/>
	/// <param name="related" type="Boolean" optional="true"/>
	/// <returns type="Boolean" />
	},
	getPoint : function() {	}
}

Ext.Element.prototype = {
	originalDisplay : "",
	visibilityMode : 0,
	defaultUnit : "",
	setVisibilityMode : function(visMode) {
	/// <returns type="Ext.Element" />
	},
	enableDisplayMode : function(display) {
	/// <param name="display" type="String" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	findParent : function(simpleSelector, maxDepth, returnEl) {
	/// <param name="simpleSelector" type="String"/>
	/// <param name="maxDepth" type="Number|Mixed" optional="true"/>
	/// <param name="returnEl" type="Boolean" optional="true"/>
	/// <returns type="HTMLElement" />
	},
	findParentNode : function(simpleSelector, maxDepth, returnEl) {
	/// <param name="simpleSelector" type="String"/>
	/// <param name="maxDepth" type="Number|Mixed" optional="true"/>
	/// <param name="returnEl" type="Boolean" optional="true"/>
	/// <returns type="HTMLElement" />
	},
	up : function(simpleSelector, maxDepth) {
	/// <param name="simpleSelector" type="String"/>
	/// <param name="maxDepth" type="Number|Mixed" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	is : function(simpleSelector) {
	/// <param name="simpleSelector" type="String"/>
	/// <returns type="Boolean" />
	},
	animate : function(args, duration, onComplete, easing, animType) {
	/// <param name="args" type="Object"/>
	/// <param name="duration" type="Float" optional="true"/>
	/// <param name="onComplete" type="Function" optional="true"/>
	/// <param name="easing" type="String" optional="true"/>
	/// <param name="animType" type="String" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	anim : function(args, opt, animType, defaultDur, defaultEase, cb) {
	},
	preanim : function(a, i) {
	},
	clean : function(forceReclean) {
	/// <param name="forceReclean" type="Boolean" optional="true"/>
	},
	scrollIntoView : function(container, hscroll) {
	/// <param name="container" type="Mixed" optional="true"/>
	/// <param name="hscroll" type="Boolean" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	scrollChildIntoView : function(child, hscroll) {
	},
	autoHeight : function(animate, duration, onComplete, easing) {
	/// <param name="animate" type="Boolean" optional="true"/>
	/// <param name="duration" type="Float" optional="true"/>
	/// <param name="onComplete" type="Function" optional="true"/>
	/// <param name="easing" type="String" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	contains : function(el) {
	/// <param name="el" type="HTMLElement|String"/>
	/// <returns type="Boolean" />
	},
	isVisible : function(deep) {
	/// <param name="deep" type="Boolean" optional="true"/>
	/// <returns type="Boolean" />
	},
	select : function(selector, unique) {
	/// <param name="selector" type="String"/>
	/// <param name="unique" type="Boolean" optional="true"/>
	/// <returns type="Ext.CompositeElement" />
	},
	query : function(selector) {
	/// <param name="selector" type="String"/>
	/// <returns type="Array" />
	},
	child : function(selector, returnDom) {
	/// <param name="selector" type="String"/>
	/// <param name="returnDom" type="Boolean" optional="true"/>
	/// <returns type="HTMLElement" />
	},
	down : function(selector, returnDom) {
	/// <param name="selector" type="String"/>
	/// <param name="returnDom" type="Boolean" optional="true"/>
	/// <returns type="HTMLElement" />
	},
	initDD : function(group, config, overrides) {
	/// <param name="group" type="String"/>
	/// <param name="config" type="Object"/>
	/// <param name="overrides" type="Object"/>
	/// <returns type="Ext.dd.DD" />
	},
	initDDProxy : function(group, config, overrides) {
	/// <param name="group" type="String"/>
	/// <param name="config" type="Object"/>
	/// <param name="overrides" type="Object"/>
	/// <returns type="Ext.dd.DDProxy" />
	},
	initDDTarget : function(group, config, overrides) {
	/// <param name="group" type="String"/>
	/// <param name="config" type="Object"/>
	/// <param name="overrides" type="Object"/>
	/// <returns type="Ext.dd.DDTarget" />
	},
	setVisible : function(visible, animate) {
	/// <param name="visible" type="Boolean"/>
	/// <param name="animate" type="Boolean|Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	isDisplayed : function() {
	/// <returns type="Boolean" />
	},
	toggle : function(animate) {
	/// <param name="animate" type="Boolean|Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	setDisplayed : function(value) {
	/// <param name="value" type="Mixed"/>
	/// <returns type="Ext.Element" />
	},
	focus : function() {
	/// <returns type="Ext.Element" />
	},
	blur : function() {
	/// <returns type="Ext.Element" />
	},
	addClass : function(className) {
	/// <param name="className" type="String|Array"/>
	/// <returns type="Ext.Element" />
	},
	radioClass : function(className) {
	/// <param name="className" type="String|Array"/>
	/// <returns type="Ext.Element" />
	},
	removeClass : function(className) {
	/// <param name="className" type="String|Array"/>
	/// <returns type="Ext.Element" />
	},
	classReCache : null,
	toggleClass : function(className) {
	/// <param name="className" type="String"/>
	/// <returns type="Ext.Element" />
	},
	hasClass : function(className) {
	/// <param name="className" type="String"/>
	/// <returns type="Boolean" />
	},
	replaceClass : function(oldClassName, newClassName) {
	/// <param name="oldClassName" type="String"/>
	/// <param name="newClassName" type="String"/>
	/// <returns type="Ext.Element" />
	},
	getStyles : function(style1, style2, etc) {
	/// <param name="style1" type="String"/>
	/// <param name="style2" type="String"/>
	/// <param name="etc" type="String"/>
	/// <returns type="Object" />
	},
	getStyle : function(prop) {
	/// <param name="prop" type="String"/>
	/// <returns type="String" />
	},
	setStyle : function(prop, value) {
	/// <param name="prop" type="String|Object"/>
	/// <param name="value" type="String" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	applyStyles : function(style) {
	/// <param name="style" type="String|Object|Function"/>
	/// <returns type="Ext.Element" />
	},
	getX : function() {
	/// <returns type="Number" />
	},
	getY : function() {
	/// <returns type="Number" />
	},
	getXY : function() {
	/// <returns type="Array" />
	},
	getOffsetsTo : function(el) {
	/// <param name="el" type="Mixed"/>
	/// <returns type="Array" />
	},
	setX : function(x, animate) {
	/// <param name="x" type="Number"/>
	/// <param name="animate" type="Boolean|Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	setY : function(y, animate) {
	/// <param name="y" type="Number"/>
	/// <param name="animate" type="Boolean|Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	setLeft : function(left) {
	/// <param name="left" type="String"/>
	/// <returns type="Ext.Element" />
	},
	setTop : function(top) {
	/// <param name="top" type="String"/>
	/// <returns type="Ext.Element" />
	},
	setRight : function(right) {
	/// <param name="right" type="String"/>
	/// <returns type="Ext.Element" />
	},
	setBottom : function(bottom) {
	/// <param name="bottom" type="String"/>
	/// <returns type="Ext.Element" />
	},
	setXY : function(pos, animate) {
	/// <param name="pos" type="Array"/>
	/// <param name="animate" type="Boolean|Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	setLocation : function(x, y, animate) {
	/// <param name="x" type="Number"/>
	/// <param name="y" type="Number"/>
	/// <param name="animate" type="Boolean|Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	moveTo : function(x, y, animate) {
	/// <param name="x" type="Number"/>
	/// <param name="y" type="Number"/>
	/// <param name="animate" type="Boolean|Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	getRegion : function() {
	/// <returns type="Ext.lib.Region" />
	},
	getHeight : function(contentHeight) {
	/// <param name="contentHeight" type="Boolean" optional="true"/>
	/// <returns type="Number" />
	},
	getWidth : function(contentWidth) {
	/// <param name="contentWidth" type="Boolean" optional="true"/>
	/// <returns type="Number" />
	},
	getComputedHeight : function() {
	/// <returns type="Number" />
	},
	getComputedWidth : function() {
	/// <returns type="Number" />
	},
	getSize : function(contentSize) {
	/// <param name="contentSize" type="Boolean" optional="true"/>
	/// <returns type="Object" />
	},
	getStyleSize : function() {	},
	getViewSize : function() {
	/// <returns type="Object" />
	},
	getValue : function(asNumber) {
	/// <param name="asNumber" type="Boolean"/>
	/// <returns type="String" />
	},
	adjustWidth : function(width) {
	},
	adjustHeight : function(height) {
	},
	setWidth : function(width, animate) {
	/// <param name="width" type="Number"/>
	/// <param name="animate" type="Boolean|Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	setHeight : function(height, animate) {
	/// <param name="height" type="Number"/>
	/// <param name="animate" type="Boolean|Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	setSize : function(width, height, animate) {
	/// <param name="width" type="Number"/>
	/// <param name="height" type="Number"/>
	/// <param name="animate" type="Boolean|Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	setBounds : function(x, y, width, height, animate) {
	/// <param name="x" type="Number"/>
	/// <param name="y" type="Number"/>
	/// <param name="width" type="Number"/>
	/// <param name="height" type="Number"/>
	/// <param name="animate" type="Boolean|Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	setRegion : function(region, animate) {
	/// <param name="region" type="Ext.lib.Region"/>
	/// <param name="animate" type="Boolean|Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	addListener : function(eventName, fn, scope, options) {
	/// <param name="eventName" type="String"/>
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <param name="options" type="Object" optional="true"/>
	},
	removeListener : function(eventName, fn, scope) {
	/// <param name="eventName" type="String"/>
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	removeAllListeners : function() {
	/// <returns type="Ext.Element" />
	},
	relayEvent : function(eventName, observable) {
	/// <param name="eventName" type="String"/>
	/// <param name="observable" type="Object"/>
	},
	setOpacity : function(opacity, animate) {
	/// <param name="opacity" type="Float"/>
	/// <param name="animate" type="Boolean|Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	getLeft : function(local) {
	/// <param name="local" type="Boolean"/>
	/// <returns type="Number" />
	},
	getRight : function(local) {
	/// <param name="local" type="Boolean"/>
	/// <returns type="Number" />
	},
	getTop : function(local) {
	/// <param name="local" type="Boolean"/>
	/// <returns type="Number" />
	},
	getBottom : function(local) {
	/// <param name="local" type="Boolean"/>
	/// <returns type="Number" />
	},
	position : function(pos, zIndex, x, y) {
	/// <param name="pos" type="String" optional="true"/>
	/// <param name="zIndex" type="Number" optional="true"/>
	/// <param name="x" type="Number" optional="true"/>
	/// <param name="y" type="Number" optional="true"/>
	},
	clearPositioning : function(value) {
	/// <param name="value" type="String" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	getPositioning : function() {
	/// <returns type="Object" />
	},
	getBorderWidth : function(side) {
	/// <param name="side" type="String"/>
	/// <returns type="Number" />
	},
	getPadding : function(side) {
	/// <param name="side" type="String"/>
	/// <returns type="Number" />
	},
	setPositioning : function(pc) {
	/// <param name="pc" type="Object"/>
	/// <returns type="Ext.Element" />
	},
	fixDisplay : function() {	},
	setOverflow : function(v) {
	},
	setLeftTop : function(left, top) {
	/// <param name="left" type="String"/>
	/// <param name="top" type="String"/>
	/// <returns type="Ext.Element" />
	},
	move : function(direction, distance, animate) {
	/// <param name="direction" type="String"/>
	/// <param name="distance" type="Number"/>
	/// <param name="animate" type="Boolean|Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	clip : function() {
	/// <returns type="Ext.Element" />
	},
	unclip : function() {
	/// <returns type="Ext.Element" />
	},
	getAnchorXY : function(anchor, local, s) {
	/// <param name="anchor" type="String" optional="true"/>
	/// <param name="local" type="Boolean" optional="true"/>
	/// <param name="s" type="Object" optional="true"/>
	/// <returns type="Array" />
	},
	getAlignToXY : function(el, p, o) {
	/// <param name="el" type="Mixed"/>
	/// <param name="p" type="String"/>
	/// <param name="o" type="Array" optional="true"/>
	/// <returns type="Array" />
	},
	getConstrainToXY : function(el, local, offsets, proposedXY) {
	},
	adjustForConstraints : function(xy, parent, offsets) {
	},
	alignTo : function(element, position, offsets, animate) {
	/// <param name="element" type="Mixed"/>
	/// <param name="position" type="String"/>
	/// <param name="offsets" type="Array" optional="true"/>
	/// <param name="animate" type="Boolean|Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	anchorTo : function(el, alignment, offsets, animate, monitorScroll, callback) {
	/// <param name="el" type="Mixed"/>
	/// <param name="alignment" type="String"/>
	/// <param name="offsets" type="Array" optional="true"/>
	/// <param name="animate" type="Boolean|Object" optional="true"/>
	/// <param name="monitorScroll" type="Boolean|Number" optional="true"/>
	/// <param name="callback" type="Function"/>
	/// <returns type="Ext.Element" />
	},
	clearOpacity : function() {
	/// <returns type="Ext.Element" />
	},
	hide : function(animate) {
	/// <param name="animate" type="Boolean|Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	show : function(animate) {
	/// <param name="animate" type="Boolean|Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	addUnits : function(size) {
	},
	update : function(html, loadScripts, callback) {
	/// <param name="html" type="String"/>
	/// <param name="loadScripts" type="Boolean" optional="true"/>
	/// <param name="callback" type="Function" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	load : function() {
	/// <returns type="Ext.Element" />
	},
	getUpdater : function() {
	/// <returns type="Ext.Updater" />
	},
	unselectable : function() {
	/// <returns type="Ext.Element" />
	},
	getCenterXY : function() {
	/// <returns type="Array" />
	},
	center : function(centerIn) {
	/// <param name="centerIn" type="Mixed" optional="true"/>
	},
	isBorderBox : function() {
	/// <returns type="Boolean" />
	},
	getBox : function(contentBox, local) {
	/// <param name="contentBox" type="Boolean" optional="true"/>
	/// <param name="local" type="Boolean" optional="true"/>
	/// <returns type="Object" />
	},
	getFrameWidth : function(sides, onlyContentBox) {
	/// <param name="sides" type="String"/>
	/// <returns type="Number" />
	},
	setBox : function(box, adjust, animate) {
	/// <param name="box" type="Object"/>
	/// <param name="adjust" type="Boolean" optional="true"/>
	/// <param name="animate" type="Boolean|Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	repaint : function() {
	/// <returns type="Ext.Element" />
	},
	getMargins : function(side) {
	/// <param name="side" type="String" optional="true"/>
	/// <returns type="Object" />
	},
	addStyles : function(sides, styles) {
	},
	createProxy : function(config, renderTo, matchBox) {
	/// <param name="config" type="String|Object"/>
	/// <param name="renderTo" type="String|HTMLElement" optional="true"/>
	/// <param name="matchBox" type="Boolean" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	mask : function(msg, msgCls) {
	/// <param name="msg" type="String" optional="true"/>
	/// <param name="msgCls" type="String" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	unmask : function() {	},
	isMasked : function() {
	/// <returns type="Boolean" />
	},
	createShim : function() {
	/// <returns type="Ext.Element" />
	},
	remove : function() {	},
	hover : function(overFn, outFn, scope) {
	/// <param name="overFn" type="Function"/>
	/// <param name="outFn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	addClassOnOver : function(className) {
	/// <param name="className" type="String"/>
	/// <returns type="Ext.Element" />
	},
	addClassOnFocus : function(className) {
	/// <param name="className" type="String"/>
	/// <returns type="Ext.Element" />
	},
	addClassOnClick : function(className) {
	/// <param name="className" type="String"/>
	/// <returns type="Ext.Element" />
	},
	swallowEvent : function(eventName, preventDefault) {
	/// <param name="eventName" type="String"/>
	/// <param name="preventDefault" type="Boolean" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	parent : function(selector, returnDom) {
	/// <param name="selector" type="String" optional="true"/>
	/// <param name="returnDom" type="Boolean" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	next : function(selector, returnDom) {
	/// <param name="selector" type="String" optional="true"/>
	/// <param name="returnDom" type="Boolean" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	prev : function(selector, returnDom) {
	/// <param name="selector" type="String" optional="true"/>
	/// <param name="returnDom" type="Boolean" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	first : function(selector, returnDom) {
	/// <param name="selector" type="String" optional="true"/>
	/// <param name="returnDom" type="Boolean" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	last : function(selector, returnDom) {
	/// <param name="selector" type="String" optional="true"/>
	/// <param name="returnDom" type="Boolean" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	matchNode : function(dir, start, selector, returnDom) {
	},
	appendChild : function(el) {
	/// <param name="el" type="String|HTMLElement|Array|Element|CompositeElement"/>
	/// <returns type="Ext.Element" />
	},
	createChild : function(config, insertBefore, returnDom) {
	/// <param name="config" type="Object"/>
	/// <param name="insertBefore" type="HTMLElement" optional="true"/>
	/// <param name="returnDom" type="Boolean" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	appendTo : function(el) {
	/// <param name="el" type="Mixed"/>
	/// <returns type="Ext.Element" />
	},
	insertBefore : function(el) {
	/// <param name="el" type="Mixed"/>
	/// <returns type="Ext.Element" />
	},
	insertAfter : function(el) {
	/// <param name="el" type="Mixed"/>
	/// <returns type="Ext.Element" />
	},
	insertFirst : function(el, returnDom) {
	/// <param name="el" type="Mixed|Object"/>
	/// <returns type="Ext.Element" />
	},
	insertSibling : function(el, where, returnDom) {
	/// <param name="el" type="Mixed|Object|Array"/>
	/// <param name="where" type="String" optional="true"/>
	/// <param name="returnDom" type="Boolean" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	wrap : function(config, returnDom) {
	/// <param name="config" type="Object" optional="true"/>
	/// <param name="returnDom" type="Boolean" optional="true"/>
	/// <returns type="HTMLElement" />
	},
	replace : function(el) {
	/// <param name="el" type="Mixed"/>
	/// <returns type="Ext.Element" />
	},
	replaceWith : function(el) {
	/// <param name="el" type="Mixed|Object"/>
	/// <returns type="Ext.Element" />
	},
	insertHtml : function(where, html, returnEl) {
	/// <param name="where" type="String"/>
	/// <param name="html" type="String"/>
	/// <param name="returnEl" type="Boolean" optional="true"/>
	/// <returns type="HTMLElement" />
	},
	set : function(o, useSet) {
	/// <param name="o" type="Object"/>
	/// <param name="useSet" type="Boolean" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	addKeyListener : function(key, fn, scope) {
	/// <param name="key" type="Number|Array|Object|String"/>
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <returns type="Ext.KeyMap" />
	},
	addKeyMap : function(config) {
	/// <param name="config" type="Object"/>
	/// <returns type="Ext.KeyMap" />
	},
	isScrollable : function() {
	/// <returns type="Boolean" />
	},
	scrollTo : function(side, value, animate) {
	/// <param name="side" type="String"/>
	/// <param name="value" type="Number"/>
	/// <param name="animate" type="Boolean|Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	scroll : function(direction, distance, animate) {
	/// <param name="direction" type="String"/>
	/// <param name="distance" type="Number"/>
	/// <param name="animate" type="Boolean|Object" optional="true"/>
	/// <returns type="Boolean" />
	},
	translatePoints : function(x, y) {
	/// <param name="x" type="Number|Array"/>
	/// <param name="y" type="Number" optional="true"/>
	/// <returns type="Object" />
	},
	getScroll : function() {
	/// <returns type="Object" />
	},
	getColor : function(attr, defaultValue, prefix) {
	/// <param name="attr" type="String"/>
	/// <param name="defaultValue" type="String"/>
	/// <param name="prefix" type="String" optional="true"/>
	},
	boxWrap : function(cls) {
	/// <param name="cls" type="String" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	getAttributeNS : function(ns, name) {
	/// <param name="ns" type="String"/>
	/// <param name="name" type="String"/>
	/// <returns type="String" />
	},
	getTextWidth : function(text, min, max) {
	/// <param name="text" type="String"/>
	/// <param name="min" type="Number" optional="true"/>
	/// <param name="max" type="Number" optional="true"/>
	/// <returns type="Number" />
	},
	on : function(eventName, fn, scope, options) {
	/// <param name="eventName" type="String"/>
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <param name="options" type="Object" optional="true"/>
	},
	mon : function(eventName, fn, scope, options) {
	},
	getUpdateManager : function() {	},
	un : function(eventName, fn, scope) {
	/// <param name="eventName" type="String"/>
	/// <param name="fn" type="Function"/>
	/// <returns type="Ext.Element" />
	},
	autoBoxAdjust : false,
	dom : null,
	id : null,
	slideIn : function(anchor, o) {
	/// <param name="anchor" type="String" optional="true"/>
	/// <param name="o" type="Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	slideOut : function(anchor, o) {
	/// <param name="anchor" type="String" optional="true"/>
	/// <param name="o" type="Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	puff : function(o) {
	/// <param name="o" type="Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	switchOff : function(o) {
	/// <param name="o" type="Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	highlight : function(color, o) {
	/// <param name="color" type="String" optional="true"/>
	/// <param name="o" type="Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	frame : function(color, count, o) {
	/// <param name="color" type="String" optional="true"/>
	/// <param name="count" type="Number" optional="true"/>
	/// <param name="o" type="Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	pause : function(seconds) {
	/// <param name="seconds" type="Number"/>
	/// <returns type="Ext.Element" />
	},
	fadeIn : function(o) {
	/// <param name="o" type="Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	fadeOut : function(o) {
	/// <param name="o" type="Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	scale : function(w, h, o) {
	/// <param name="w" type="Number"/>
	/// <param name="h" type="Number"/>
	/// <param name="o" type="Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	shift : function(o) {
	/// <param name="o" type="Object"/>
	/// <returns type="Ext.Element" />
	},
	ghost : function(anchor, o) {
	/// <param name="anchor" type="String" optional="true"/>
	/// <param name="o" type="Object" optional="true"/>
	/// <returns type="Ext.Element" />
	},
	syncFx : function() {
	/// <returns type="Ext.Element" />
	},
	sequenceFx : function() {
	/// <returns type="Ext.Element" />
	},
	nextFx : function() {	},
	hasActiveFx : function() {
	/// <returns type="Boolean" />
	},
	stopFx : function() {
	/// <returns type="Ext.Element" />
	},
	beforeFx : function(o) {
	},
	hasFxBlock : function() {
	/// <returns type="Boolean" />
	},
	queueFx : function(o, fn) {
	},
	fxWrap : function(pos, o, vis) {
	},
	fxUnwrap : function(wrap, pos, o) {
	},
	getFxRestore : function() {	},
	afterFx : function(o) {
	},
	getFxEl : function() {	},
	fxanim : function(args, opt, animType, defaultDur, defaultEase, cb) {
	},
	resize : function(w, h, o) {
	}
}

Ext.Element.Flyweight.prototype = {
	isFlyweight : false
}

Ext.CompositeElement.prototype = {
	isComposite : false,
	addElements : function(els) {
	},
	fill : function(els) {
	/// <param name="els" type="String|Array"/>
	/// <returns type="Ext.CompositeElement" />
	},
	filter : function(selector) {
	/// <param name="selector" type="String"/>
	/// <returns type="Ext.CompositeElement" />
	},
	invoke : function(fn, args) {
	},
	add : function(els) {
	/// <param name="els" type="String|Array"/>
	/// <returns type="Ext.CompositeElement" />
	},
	each : function(fn, scope) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <returns type="Ext.CompositeElement" />
	},
	item : function(index) {
	/// <param name="index" type="Number"/>
	/// <returns type="Ext.Element" />
	},
	first : function() {
	/// <returns type="Ext.Element" />
	},
	last : function() {
	/// <returns type="Ext.Element" />
	},
	getCount : function() {
	/// <returns type="Number" />
	},
	contains : function(el) {
	/// <param name="el" type="Mixed"/>
	/// <returns type="Boolean" />
	},
	indexOf : function(el) {
	/// <param name="el" type="Mixed"/>
	},
	removeElement : function(el, removeDom) {
	/// <param name="el" type="Mixed"/>
	/// <param name="removeDom" type="Boolean" optional="true"/>
	/// <returns type="Ext.CompositeElement" />
	},
	replaceElement : function(el, replacement, domReplace) {
	/// <param name="el" type="Mixed"/>
	/// <param name="replacement" type="Mixed"/>
	/// <param name="domReplace" type="Boolean" optional="true"/>
	/// <returns type="Ext.CompositeElement" />
	},
	clear : function() {	},
	elements : null
}

Ext.CompositeElementLite.prototype = new Ext.CompositeElement;

Ext.CompositeElementLite.prototype.addElements = function(els) {
}
Ext.CompositeElementLite.prototype.invoke = function(fn, args) {
}
Ext.CompositeElementLite.prototype.item = function(index) {
	/// <param name="index" type="Number"/>
	/// <returns type="Ext.Element" />
}
Ext.CompositeElementLite.prototype.addListener = function(eventName, handler, scope, opt) {
}
Ext.CompositeElementLite.prototype.each = function(fn, scope) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <returns type="Ext.CompositeElement" />
}
Ext.CompositeElementLite.prototype.indexOf = function(el) {
}
Ext.CompositeElementLite.prototype.replaceElement = function(el, replacement, domReplace) {
}
Ext.CompositeElementLite.prototype.on = function(eventName, handler, scope, opt) {
}
Ext.CompositeElementLite.prototype.el = null;

Ext.data.Connection.prototype = new Ext.util.Observable;

Ext.data.Connection.prototype.timeout = 0;
Ext.data.Connection.prototype.autoAbort = false;
Ext.data.Connection.prototype.disableCaching = false;
Ext.data.Connection.prototype.disableCachingParam = "";
Ext.data.Connection.prototype.request = function(o) {
	/// <param name="o" type="Object"/>
	/// <returns type="Number" />
}
Ext.data.Connection.prototype.isLoading = function(transId) {
	/// <param name="transId" type="Number" optional="true"/>
	/// <returns type="Boolean" />
}
Ext.data.Connection.prototype.abort = function(transId) {
	/// <param name="transId" type="Number" optional="true"/>
}
Ext.data.Connection.prototype.handleResponse = function(response) {
}
Ext.data.Connection.prototype.handleFailure = function(response, e) {
}
Ext.data.Connection.prototype.doFormUpload = function(o, ps, url) {
}

Ext.data.Record.prototype = {
	dirty : false,
	editing : false,
	error : null,
	modified : null,
	join : function(store) {
	},
	set : function(name, value) {
	/// <param name="name" type="String"/>
	/// <param name="value" type="Object"/>
	},
	get : function(name) {
	/// <param name="name" type="String"/>
	/// <returns type="Object" />
	},
	beginEdit : function() {	},
	cancelEdit : function() {	},
	endEdit : function() {	},
	reject : function(silent) {
	/// <param name="silent" type="Boolean" optional="true"/>
	},
	commit : function(silent) {
	/// <param name="silent" type="Boolean" optional="true"/>
	},
	getChanges : function() {
	/// <returns type="Object" />
	},
	hasError : function() {	},
	clearError : function() {	},
	copy : function(newId) {
	/// <param name="newId" type="String" optional="true"/>
	/// <returns type="Ext.data.Record" />
	},
	isModified : function(fieldName) {
	/// <param name="fieldName" type="String"/>
	/// <returns type="Boolean" />
	},
	id : null,
	data : null
}

Ext.data.Store.prototype = new Ext.util.Observable;

Ext.data.Store.prototype.remoteSort = false;
Ext.data.Store.prototype.pruneModifiedRecords = false;
Ext.data.Store.prototype.lastOptions = null;
Ext.data.Store.prototype.destroy = function() {}
Ext.data.Store.prototype.add = function(records) {
	/// <param name="records" type="Ext.data.Record[]"/>
}
Ext.data.Store.prototype.addSorted = function(record) {
	/// <param name="record" type="Ext.data.Record"/>
}
Ext.data.Store.prototype.remove = function(record) {
	/// <param name="record" type="Ext.data.Record"/>
}
Ext.data.Store.prototype.removeAll = function() {}
Ext.data.Store.prototype.insert = function(index, records) {
	/// <param name="index" type="Number"/>
	/// <param name="records" type="Ext.data.Record[]"/>
}
Ext.data.Store.prototype.indexOf = function(record) {
	/// <param name="record" type="Ext.data.Record"/>
	/// <returns type="Number" />
}
Ext.data.Store.prototype.indexOfId = function(id) {
	/// <param name="id" type="String"/>
	/// <returns type="Number" />
}
Ext.data.Store.prototype.getById = function(id) {
	/// <param name="id" type="String"/>
	/// <returns type="Ext.data.Record" />
}
Ext.data.Store.prototype.getAt = function(index) {
	/// <param name="index" type="Number"/>
	/// <returns type="Ext.data.Record" />
}
Ext.data.Store.prototype.getRange = function(start, end) {
	/// <param name="start" type="Number" optional="true"/>
	/// <param name="end" type="Number" optional="true"/>
	/// <returns type="Ext.data.Record[]" />
}
Ext.data.Store.prototype.storeOptions = function(o) {
}
Ext.data.Store.prototype.load = function(options) {
	/// <param name="options" type="Object"/>
	/// <returns type="Boolean" />
}
Ext.data.Store.prototype.reload = function(options) {
	/// <param name="options" type="Object" optional="true"/>
}
Ext.data.Store.prototype.loadRecords = function(o, options, success) {
}
Ext.data.Store.prototype.loadData = function(o, append) {
	/// <param name="o" type="Object"/>
	/// <param name="append" type="Boolean" optional="true"/>
}
Ext.data.Store.prototype.getCount = function() {
	/// <returns type="Number" />
}
Ext.data.Store.prototype.getTotalCount = function() {
	/// <returns type="Number" />
}
Ext.data.Store.prototype.getSortState = function() {
	/// <returns type="Object" />
}
Ext.data.Store.prototype.applySort = function() {}
Ext.data.Store.prototype.sortData = function(f, direction) {
}
Ext.data.Store.prototype.setDefaultSort = function(field, dir) {
	/// <param name="field" type="String"/>
	/// <param name="dir" type="String" optional="true"/>
}
Ext.data.Store.prototype.sort = function(fieldName, dir) {
	/// <param name="fieldName" type="String"/>
	/// <param name="dir" type="String" optional="true"/>
}
Ext.data.Store.prototype.each = function(fn, scope) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
}
Ext.data.Store.prototype.getModifiedRecords = function() {
	/// <returns type="Ext.data.Record[]" />
}
Ext.data.Store.prototype.createFilterFn = function(property, value, anyMatch, caseSensitive) {
}
Ext.data.Store.prototype.sum = function(property, start, end) {
	/// <param name="property" type="String"/>
	/// <param name="start" type="Number"/>
	/// <param name="end" type="Number"/>
	/// <returns type="Number" />
}
Ext.data.Store.prototype.filter = function(property, value, anyMatch, caseSensitive) {
	/// <param name="property" type="String"/>
	/// <param name="value" type="String|RegExp"/>
	/// <param name="anyMatch" type="Boolean" optional="true"/>
	/// <param name="caseSensitive" type="Boolean" optional="true"/>
}
Ext.data.Store.prototype.filterBy = function(fn, scope) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
}
Ext.data.Store.prototype.query = function(property, value, anyMatch, caseSensitive) {
	/// <param name="property" type="String"/>
	/// <param name="value" type="String|RegExp"/>
	/// <param name="anyMatch" type="Boolean" optional="true"/>
	/// <param name="caseSensitive" type="Boolean" optional="true"/>
	/// <returns type="Ext.util.MixedCollection" />
}
Ext.data.Store.prototype.queryBy = function(fn, scope) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <returns type="Ext.util.MixedCollection" />
}
Ext.data.Store.prototype.find = function(property, value, start, anyMatch, caseSensitive) {
	/// <param name="property" type="String"/>
	/// <param name="value" type="String|RegExp"/>
	/// <param name="start" type="Number" optional="true"/>
	/// <param name="anyMatch" type="Boolean" optional="true"/>
	/// <param name="caseSensitive" type="Boolean" optional="true"/>
	/// <returns type="Number" />
}
Ext.data.Store.prototype.findBy = function(fn, scope, start) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <param name="start" type="Number" optional="true"/>
	/// <returns type="Number" />
}
Ext.data.Store.prototype.collect = function(dataIndex, allowNull, bypassFilter) {
	/// <param name="dataIndex" type="String"/>
	/// <param name="allowNull" type="Boolean" optional="true"/>
	/// <param name="bypassFilter" type="Boolean" optional="true"/>
	/// <returns type="Array" />
}
Ext.data.Store.prototype.clearFilter = function(suppressEvent) {
	/// <param name="suppressEvent" type="Boolean"/>
}
Ext.data.Store.prototype.isFiltered = function() {
	/// <returns type="Boolean" />
}
Ext.data.Store.prototype.afterEdit = function(record) {
}
Ext.data.Store.prototype.afterReject = function(record) {
}
Ext.data.Store.prototype.afterCommit = function(record) {
}
Ext.data.Store.prototype.commitChanges = function() {}
Ext.data.Store.prototype.rejectChanges = function() {}
Ext.data.Store.prototype.onMetaChange = function(meta, rtype, o) {
}
Ext.data.Store.prototype.findInsertIndex = function(record) {
}
Ext.data.Store.prototype.data = null;
Ext.data.Store.prototype.baseParams = null;
Ext.data.Store.prototype.paramNames = null;
Ext.data.Store.prototype.modified = null;
Ext.data.Store.prototype.sortToggle = null;

Ext.data.SimpleStore.prototype = new Ext.data.Store;

Ext.data.SimpleStore.prototype.loadData = function(data, append) {
}

Ext.data.JsonStore.prototype = new Ext.data.Store;

Ext.data.Field.prototype = {
	dateFormat : null,
	defaultValue : "",
	mapping : null,
	sortType : null,
	sortDir : ""
}

Ext.data.DataReader.prototype = {
	meta : null,
	recordType : null
}

Ext.data.DataProxy.prototype = new Ext.util.Observable;

Ext.data.MemoryProxy.prototype = new Ext.data.DataProxy;

Ext.data.MemoryProxy.prototype.load = function(params, reader, callback, scope, arg) {
	/// <param name="params" type="Object"/>
	/// <param name="reader" type="Ext.data.DataReader"/>
	/// <param name="callback" type="Function"/>
	/// <param name="scope" type="Object"/>
	/// <param name="arg" type="Object"/>
}
Ext.data.MemoryProxy.prototype.update = function(params, records) {
}
Ext.data.MemoryProxy.prototype.data = null;

Ext.data.HttpProxy.prototype = new Ext.data.DataProxy;

Ext.data.HttpProxy.prototype.getConnection = function() {
	/// <returns type="Ext.data.Connection" />
}
Ext.data.HttpProxy.prototype.load = function(params, reader, callback, scope, arg) {
	/// <param name="params" type="Object"/>
	/// <param name="reader" type="Ext.data.DataReader"/>
	/// <param name="callback" type="Function"/>
	/// <param name="scope" type="Object"/>
	/// <param name="arg" type="Object"/>
}
Ext.data.HttpProxy.prototype.loadResponse = function(o, success, response) {
}
Ext.data.HttpProxy.prototype.update = function(dataSet) {
}
Ext.data.HttpProxy.prototype.updateResponse = function(dataSet) {
}
Ext.data.HttpProxy.prototype.conn = null;
Ext.data.HttpProxy.prototype.useAjax = null;

Ext.data.ScriptTagProxy.prototype = new Ext.data.DataProxy;

Ext.data.ScriptTagProxy.prototype.timeout = 0;
Ext.data.ScriptTagProxy.prototype.callbackParam = "";
Ext.data.ScriptTagProxy.prototype.nocache = false;
Ext.data.ScriptTagProxy.prototype.load = function(params, reader, callback, scope, arg) {
	/// <param name="params" type="Object"/>
	/// <param name="reader" type="Ext.data.DataReader"/>
	/// <param name="callback" type="Function"/>
	/// <param name="scope" type="Object"/>
	/// <param name="arg" type="Object"/>
}
Ext.data.ScriptTagProxy.prototype.isLoading = function() {}
Ext.data.ScriptTagProxy.prototype.abort = function() {}
Ext.data.ScriptTagProxy.prototype.destroyTrans = function(trans, isLoaded) {
}
Ext.data.ScriptTagProxy.prototype.handleResponse = function(o, trans) {
}
Ext.data.ScriptTagProxy.prototype.handleFailure = function(trans) {
}
Ext.data.ScriptTagProxy.prototype.head = null;

Ext.data.JsonReader.prototype = new Ext.data.DataReader;

Ext.data.JsonReader.prototype.read = function(response) {
	/// <param name="response" type="Object"/>
	/// <returns type="Object" />
}
Ext.data.JsonReader.prototype.onMetaChange = function(meta, recordType, o) {
}
Ext.data.JsonReader.prototype.simpleAccess = function(obj, subsc) {
}
Ext.data.JsonReader.prototype.getJsonAccessor = function(expr) {
}
Ext.data.JsonReader.prototype.readRecords = function(o) {
	/// <param name="o" type="Object"/>
	/// <returns type="Object" />
}

Ext.data.XmlReader.prototype = new Ext.data.DataReader;

Ext.data.XmlReader.prototype.read = function(response) {
	/// <param name="response" type="Object"/>
	/// <returns type="Object" />
}
Ext.data.XmlReader.prototype.readRecords = function(doc) {
	/// <param name="doc" type="Object"/>
	/// <returns type="Object" />
}

Ext.data.ArrayReader.prototype = new Ext.data.JsonReader;

Ext.data.ArrayReader.prototype.readRecords = function(o) {
	/// <param name="o" type="Object"/>
	/// <returns type="Object" />
}

Ext.data.Tree.prototype = new Ext.util.Observable;

Ext.data.Tree.prototype.pathSeparator = "";
Ext.data.Tree.prototype.proxyNodeEvent = function() {}
Ext.data.Tree.prototype.getRootNode = function() {
	/// <returns type="Ext.data.Node" />
}
Ext.data.Tree.prototype.setRootNode = function(node) {
	/// <param name="node" type="Node"/>
	/// <returns type="Ext.data.Node" />
}
Ext.data.Tree.prototype.getNodeById = function(id) {
	/// <param name="id" type="String"/>
	/// <returns type="Ext.data.Node" />
}
Ext.data.Tree.prototype.registerNode = function(node) {
}
Ext.data.Tree.prototype.unregisterNode = function(node) {
}
Ext.data.Tree.prototype.nodeHash = null;
Ext.data.Tree.prototype.root = null;

Ext.data.Node.prototype = new Ext.util.Observable;

Ext.data.Node.prototype.fireEvent = function(evtName) {
}
Ext.data.Node.prototype.isLeaf = function() {
	/// <returns type="Boolean" />
}
Ext.data.Node.prototype.setFirstChild = function(node) {
}
Ext.data.Node.prototype.setLastChild = function(node) {
}
Ext.data.Node.prototype.isLast = function() {
	/// <returns type="Boolean" />
}
Ext.data.Node.prototype.isFirst = function() {
	/// <returns type="Boolean" />
}
Ext.data.Node.prototype.hasChildNodes = function() {
	/// <returns type="Boolean" />
}
Ext.data.Node.prototype.isExpandable = function() {
	/// <returns type="Boolean" />
}
Ext.data.Node.prototype.appendChild = function(node) {
	/// <param name="node" type="Node|Array"/>
	/// <returns type="Ext.data.Node" />
}
Ext.data.Node.prototype.removeChild = function(node) {
	/// <param name="node" type="Node"/>
	/// <returns type="Ext.data.Node" />
}
Ext.data.Node.prototype.insertBefore = function(node, refNode) {
	/// <param name="node" type="Node"/>
	/// <param name="refNode" type="Node"/>
	/// <returns type="Ext.data.Node" />
}
Ext.data.Node.prototype.remove = function() {
	/// <returns type="Ext.data.Node" />
}
Ext.data.Node.prototype.item = function(index) {
	/// <param name="index" type="Number"/>
	/// <returns type="Ext.data.Node" />
}
Ext.data.Node.prototype.replaceChild = function(newChild, oldChild) {
	/// <param name="newChild" type="Node"/>
	/// <param name="oldChild" type="Node"/>
	/// <returns type="Ext.data.Node" />
}
Ext.data.Node.prototype.indexOf = function(child) {
	/// <param name="child" type="Node"/>
	/// <returns type="Number" />
}
Ext.data.Node.prototype.getOwnerTree = function() {
	/// <returns type="Ext.data.Tree" />
}
Ext.data.Node.prototype.getDepth = function() {
	/// <returns type="Number" />
}
Ext.data.Node.prototype.setOwnerTree = function(tree) {
}
Ext.data.Node.prototype.getPath = function(attr) {
	/// <param name="attr" type="String" optional="true"/>
	/// <returns type="String" />
}
Ext.data.Node.prototype.bubble = function(fn, scope, args) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <param name="args" type="Array" optional="true"/>
}
Ext.data.Node.prototype.cascade = function(fn, scope, args) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <param name="args" type="Array" optional="true"/>
}
Ext.data.Node.prototype.eachChild = function(fn, scope, args) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <param name="args" type="Array" optional="true"/>
}
Ext.data.Node.prototype.findChild = function(attribute, value) {
	/// <param name="attribute" type="String"/>
	/// <param name="value" type="Mixed"/>
	/// <returns type="Ext.data.Node" />
}
Ext.data.Node.prototype.findChildBy = function(fn, scope) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <returns type="Ext.data.Node" />
}
Ext.data.Node.prototype.sort = function(fn, scope) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
}
Ext.data.Node.prototype.contains = function(node) {
	/// <param name="node" type="Node"/>
	/// <returns type="Boolean" />
}
Ext.data.Node.prototype.isAncestor = function(node) {
	/// <param name="node" type="Node"/>
	/// <returns type="Boolean" />
}
Ext.data.Node.prototype.attributes = null;
Ext.data.Node.prototype.leaf = null;
Ext.data.Node.prototype.id = null;
Ext.data.Node.prototype.childNodes = null;
Ext.data.Node.prototype.parentNode = null;
Ext.data.Node.prototype.firstChild = null;
Ext.data.Node.prototype.lastChild = null;
Ext.data.Node.prototype.previousSibling = null;
Ext.data.Node.prototype.nextSibling = null;
Ext.data.Node.prototype.listeners = null;

Ext.data.GroupingStore.prototype = new Ext.data.Store;

Ext.data.GroupingStore.prototype.remoteGroup = false;
Ext.data.GroupingStore.prototype.groupOnSort = false;
Ext.data.GroupingStore.prototype.clearGrouping = function() {}
Ext.data.GroupingStore.prototype.groupBy = function(field, forceRegroup) {
	/// <param name="field" type="String"/>
	/// <param name="forceRegroup" type="Boolean" optional="true"/>
}
Ext.data.GroupingStore.prototype.applySort = function() {}
Ext.data.GroupingStore.prototype.applyGrouping = function(alwaysFireChange) {
}
Ext.data.GroupingStore.prototype.getGroupState = function() {}

Ext.UpdateManager.prototype = new Ext.util.Observable;

Ext.UpdateManager.prototype.getDefaultRenderer = function() {}
Ext.UpdateManager.prototype.getEl = function() {
	/// <returns type="Ext.Element" />
}
Ext.UpdateManager.prototype.update = function(url, params, callback, discardUrl) {
	/// <param name="url" type="Object"/>
}
Ext.UpdateManager.prototype.formUpdate = function(form, url, reset, callback) {
	/// <param name="form" type="String|HTMLElement"/>
	/// <param name="url" type="String" optional="true"/>
	/// <param name="reset" type="Boolean" optional="true"/>
	/// <param name="callback" type="Function" optional="true"/>
}
Ext.UpdateManager.prototype.refresh = function(callback) {
	/// <param name="callback" type="Function" optional="true"/>
}
Ext.UpdateManager.prototype.startAutoRefresh = function(interval, url, params, callback, refreshNow) {
	/// <param name="interval" type="Number"/>
	/// <param name="url" type="String|Object|Function" optional="true"/>
	/// <param name="params" type="String|Object" optional="true"/>
	/// <param name="callback" type="Function" optional="true"/>
	/// <param name="refreshNow" type="Boolean" optional="true"/>
}
Ext.UpdateManager.prototype.stopAutoRefresh = function() {}
Ext.UpdateManager.prototype.isAutoRefreshing = function() {}
Ext.UpdateManager.prototype.showLoading = function() {}
Ext.UpdateManager.prototype.processSuccess = function(response) {
}
Ext.UpdateManager.prototype.updateComplete = function(response) {
}
Ext.UpdateManager.prototype.processFailure = function(response) {
}
Ext.UpdateManager.prototype.setRenderer = function(renderer) {
	/// <param name="renderer" type="Object"/>
}
Ext.UpdateManager.prototype.getRenderer = function() {
	/// <returns type="Object" />
}
Ext.UpdateManager.prototype.setDefaultUrl = function(defaultUrl) {
	/// <param name="defaultUrl" type="String|Function"/>
}
Ext.UpdateManager.prototype.abort = function() {}
Ext.UpdateManager.prototype.isUpdating = function() {
	/// <returns type="Boolean" />
}

Ext.UpdateManager.BasicRenderer.prototype = {
	render : function(el, response, updateManager, callback) {
	/// <param name="el" type="Ext.Element"/>
	/// <param name="response" type="Object"/>
	/// <param name="updateManager" type="Updater"/>
	/// <param name="callback" type="Function"/>
	}
}

Ext.XTemplate.prototype = new Ext.Template;

Ext.XTemplate.prototype.re = new RegExp;
Ext.XTemplate.prototype.codeRe = new RegExp;
Ext.XTemplate.prototype.applySubTemplate = function(id, values, parent, xindex, xcount) {
}
Ext.XTemplate.prototype.compileTpl = function(tpl) {
}
Ext.XTemplate.prototype.applyTemplate = function(values) {
	/// <param name="values" type="Object"/>
	/// <returns type="String" />
}
Ext.XTemplate.prototype.compile = function() {
	/// <returns type="Function" />
}
Ext.XTemplate.prototype.master = null;
Ext.XTemplate.prototype.tpls = null;

Ext.KeyNav.prototype = {
	disabled : false,
	defaultEventAction : "",
	forceKeyDown : false,
	prepareEvent : function(e) {
	},
	relay : function(e) {
	},
	doRelay : function(e, h, hname) {
	},
	enter : false,
	left : false,
	right : false,
	up : false,
	down : false,
	tab : false,
	esc : false,
	pageUp : false,
	pageDown : false,
	del : false,
	home : false,
	end : false,
	keyToHandler : null,
	enable : function() {	},
	disable : function() {	},
	el : null
}

Ext.KeyMap.prototype = {
	stopEvent : false,
	addBinding : function(config) {
	/// <param name="config" type="Object|Array"/>
	},
	on : function(key, fn, scope) {
	/// <param name="key" type="Number|Array|Object"/>
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	},
	handleKeyDown : function(e) {
	},
	isEnabled : function() {
	/// <returns type="Boolean" />
	},
	enable : function() {	},
	disable : function() {	},
	el : null,
	eventName : null,
	bindings : null
}

Ext.dd.DragDrop.prototype = {
	id : null,
	config : null,
	dragElId : null,
	handleElId : null,
	invalidHandleTypes : null,
	invalidHandleIds : null,
	invalidHandleClasses : null,
	startPageX : 0,
	startPageY : 0,
	groups : null,
	locked : false,
	lock : function() {	},
	unlock : function() {	},
	isTarget : false,
	padding : null,
	constrainX : false,
	constrainY : false,
	minX : 0,
	maxX : 0,
	minY : 0,
	maxY : 0,
	maintainOffset : false,
	xTicks : null,
	yTicks : null,
	primaryButtonOnly : false,
	available : false,
	hasOuterHandles : false,
	b4StartDrag : function(x, y) {
	},
	startDrag : function(x, y) {
	/// <param name="x" type="int"/>
	/// <param name="y" type="int"/>
	},
	b4Drag : function(e) {
	},
	onDrag : function(e) {
	/// <param name="e" type="Event"/>
	},
	onDragEnter : function(e, id) {
	/// <param name="e" type="Event"/>
	/// <param name="id" type="String|DragDrop[]"/>
	},
	b4DragOver : function(e) {
	},
	onDragOver : function(e, id) {
	/// <param name="e" type="Event"/>
	/// <param name="id" type="String|DragDrop[]"/>
	},
	b4DragOut : function(e) {
	},
	onDragOut : function(e, id) {
	/// <param name="e" type="Event"/>
	/// <param name="id" type="String|DragDrop[]"/>
	},
	b4DragDrop : function(e) {
	},
	onDragDrop : function(e, id) {
	/// <param name="e" type="Event"/>
	/// <param name="id" type="String|DragDrop[]"/>
	},
	onInvalidDrop : function(e) {
	/// <param name="e" type="Event"/>
	},
	b4EndDrag : function(e) {
	},
	endDrag : function(e) {
	/// <param name="e" type="Event"/>
	},
	b4MouseDown : function(e) {
	/// <param name="e" type="Event"/>
	},
	onMouseDown : function(e) {
	/// <param name="e" type="Event"/>
	},
	onMouseUp : function(e) {
	/// <param name="e" type="Event"/>
	},
	onAvailable : function() {	},
	defaultPadding : null,
	constrainTo : function(constrainTo, pad, inContent) {
	/// <param name="constrainTo" type="Mixed"/>
	/// <param name="pad" type="Object|Number" optional="true"/>
	/// <param name="inContent" type="Boolean" optional="true"/>
	},
	getEl : function() {
	/// <returns type="HTMLElement" />
	},
	getDragEl : function() {
	/// <returns type="HTMLElement" />
	},
	init : function(id, sGroup, config) {
	/// <param name="sGroup" type="String"/>
	/// <param name="config" type="object"/>
	},
	initTarget : function(id, sGroup, config) {
	/// <param name="sGroup" type="String"/>
	/// <param name="config" type="object"/>
	},
	applyConfig : function() {	},
	handleOnAvailable : function() {	},
	setPadding : function(iTop, iRight, iBot, iLeft) {
	/// <param name="iTop" type="int"/>
	/// <param name="iRight" type="int"/>
	/// <param name="iBot" type="int"/>
	/// <param name="iLeft" type="int"/>
	},
	setInitPosition : function(diffX, diffY) {
	/// <param name="diffX" type="int"/>
	/// <param name="diffY" type="int"/>
	},
	setStartPosition : function(pos) {
	},
	addToGroup : function(sGroup) {
	/// <param name="sGroup" type="string"/>
	},
	removeFromGroup : function(sGroup) {
	/// <param name="sGroup" type="string"/>
	},
	setDragElId : function(id) {
	/// <param name="id" type="string"/>
	},
	setHandleElId : function(id) {
	/// <param name="id" type="string"/>
	},
	setOuterHandleElId : function(id) {
	},
	unreg : function() {	},
	destroy : function() {	},
	isLocked : function() {
	/// <returns type="boolean" />
	},
	handleMouseDown : function(e, oDD) {
	/// <param name="e" type="Event"/>
	/// <param name="oDD" type="Ext.dd.DragDrop"/>
	},
	clickValidator : function(e) {
	},
	addInvalidHandleType : function(tagName) {
	/// <param name="tagName" type="string"/>
	},
	addInvalidHandleId : function(id) {
	/// <param name="id" type="string"/>
	},
	addInvalidHandleClass : function(cssClass) {
	/// <param name="cssClass" type="string"/>
	},
	removeInvalidHandleType : function(tagName) {
	/// <param name="tagName" type="string"/>
	},
	removeInvalidHandleId : function(id) {
	/// <param name="id" type="string"/>
	},
	removeInvalidHandleClass : function(cssClass) {
	/// <param name="cssClass" type="string"/>
	},
	isValidHandleChild : function(node) {
	/// <param name="node" type="HTMLElement"/>
	/// <returns type="boolean" />
	},
	setXTicks : function(iStartX, iTickSize) {
	},
	setYTicks : function(iStartY, iTickSize) {
	},
	setXConstraint : function(iLeft, iRight, iTickSize) {
	/// <param name="iLeft" type="int"/>
	/// <param name="iRight" type="int"/>
	/// <param name="iTickSize" type="int"/>
	},
	clearConstraints : function() {	},
	clearTicks : function() {	},
	setYConstraint : function(iUp, iDown, iTickSize) {
	/// <param name="iUp" type="int"/>
	/// <param name="iDown" type="int"/>
	/// <param name="iTickSize" type="int"/>
	},
	resetConstraints : function(maintainOffset) {
	/// <param name="maintainOffset" type="boolean"/>
	},
	getTick : function(val, tickArray) {
	/// <param name="val" type="int"/>
	/// <param name="tickArray" type="int[]"/>
	/// <returns type="int" />
	}
}

Ext.dd.DDM.ElementWrapper.prototype = {
	el : null,
	id : null,
	css : null
}

Ext.dd.DD.prototype = new Ext.dd.DragDrop;

Ext.dd.DD.prototype.scroll = false;
Ext.dd.DD.prototype.autoOffset = function(iPageX, iPageY) {
	/// <param name="iPageX" type="int"/>
	/// <param name="iPageY" type="int"/>
}
Ext.dd.DD.prototype.setDelta = function(iDeltaX, iDeltaY) {
	/// <param name="iDeltaX" type="int"/>
	/// <param name="iDeltaY" type="int"/>
}
Ext.dd.DD.prototype.setDragElPos = function(iPageX, iPageY) {
	/// <param name="iPageX" type="int"/>
	/// <param name="iPageY" type="int"/>
}
Ext.dd.DD.prototype.alignElWithMouse = function(el, iPageX, iPageY) {
	/// <param name="el" type="HTMLElement"/>
	/// <param name="iPageX" type="int"/>
	/// <param name="iPageY" type="int"/>
}
Ext.dd.DD.prototype.cachePosition = function(iPageX, iPageY) {
}
Ext.dd.DD.prototype.autoScroll = function(x, y, h, w) {
	/// <param name="x" type="int"/>
	/// <param name="y" type="int"/>
	/// <param name="h" type="int"/>
	/// <param name="w" type="int"/>
}
Ext.dd.DD.prototype.getTargetCoord = function(iPageX, iPageY) {
	/// <param name="iPageX" type="int"/>
	/// <param name="iPageY" type="int"/>
}
Ext.dd.DD.prototype.applyConfig = function() {}
Ext.dd.DD.prototype.b4MouseDown = function(e) {
}
Ext.dd.DD.prototype.b4Drag = function(e) {
}

Ext.dd.DDProxy.prototype = new Ext.dd.DD;

Ext.dd.DDProxy.prototype.resizeFrame = false;
Ext.dd.DDProxy.prototype.centerFrame = false;
Ext.dd.DDProxy.prototype.createFrame = function() {}
Ext.dd.DDProxy.prototype.initFrame = function() {}
Ext.dd.DDProxy.prototype.applyConfig = function() {}
Ext.dd.DDProxy.prototype.showFrame = function(iPageX, iPageY) {
	/// <param name="iPageX" type="int"/>
	/// <param name="iPageY" type="int"/>
}
Ext.dd.DDProxy.prototype.b4MouseDown = function(e) {
}
Ext.dd.DDProxy.prototype.b4StartDrag = function(x, y) {
}
Ext.dd.DDProxy.prototype.b4EndDrag = function(e) {
}
Ext.dd.DDProxy.prototype.endDrag = function(e) {
}
Ext.dd.DDProxy.prototype.beforeMove = function() {}
Ext.dd.DDProxy.prototype.afterDrag = function() {}

Ext.dd.DDTarget.prototype = new Ext.dd.DragDrop;

Ext.dd.DragTracker.prototype = new Ext.util.Observable;

Ext.dd.DragTracker.prototype.active = false;
Ext.dd.DragTracker.prototype.tolerance = 0;
Ext.dd.DragTracker.prototype.autoStart = false;
Ext.dd.DragTracker.prototype.initEl = function(el) {
}
Ext.dd.DragTracker.prototype.destroy = function() {}
Ext.dd.DragTracker.prototype.onMouseDown = function(e, target) {
}
Ext.dd.DragTracker.prototype.onMouseMove = function(e, target) {
}
Ext.dd.DragTracker.prototype.onMouseUp = function(e) {
}
Ext.dd.DragTracker.prototype.triggerStart = function(isTimer) {
}
Ext.dd.DragTracker.prototype.clearStart = function() {}
Ext.dd.DragTracker.prototype.stopSelect = function(e) {
}
Ext.dd.DragTracker.prototype.onBeforeStart = function(e) {
}
Ext.dd.DragTracker.prototype.onStart = function(xy) {
}
Ext.dd.DragTracker.prototype.onDrag = function(e) {
}
Ext.dd.DragTracker.prototype.onEnd = function(e) {
}
Ext.dd.DragTracker.prototype.getDragTarget = function() {}
Ext.dd.DragTracker.prototype.getDragCt = function() {}
Ext.dd.DragTracker.prototype.getXY = function(constrain) {
}
Ext.dd.DragTracker.prototype.getOffset = function(constrain) {
}
Ext.dd.DragTracker.prototype.constrainModes = null;

Ext.dd.StatusProxy.prototype = {
	dropAllowed : "",
	dropNotAllowed : "",
	setStatus : function(cssClass) {
	/// <param name="cssClass" type="String"/>
	},
	reset : function(clearGhost) {
	/// <param name="clearGhost" type="Boolean"/>
	},
	update : function(html) {
	/// <param name="html" type="String|HTMLElement"/>
	},
	getEl : function() {
	/// <returns type="Ext.Layer" />
	},
	getGhost : function() {
	/// <returns type="Ext.Element" />
	},
	hide : function(clear) {
	/// <param name="clear" type="Boolean"/>
	},
	stop : function() {	},
	show : function() {	},
	sync : function() {	},
	repair : function(xy, callback, scope) {
	/// <param name="xy" type="Array"/>
	/// <param name="callback" type="Function"/>
	/// <param name="scope" type="Object"/>
	},
	afterRepair : function() {	},
	id : null,
	el : null,
	ghost : null,
	dropStatus : ""
}

Ext.dd.DragSource.prototype = new Ext.dd.DDProxy;

Ext.dd.DragSource.prototype.dropAllowed = "";
Ext.dd.DragSource.prototype.dropNotAllowed = "";
Ext.dd.DragSource.prototype.getDragData = function(e) {
	/// <returns type="Object" />
}
Ext.dd.DragSource.prototype.onDragEnter = function(e, id) {
}
Ext.dd.DragSource.prototype.beforeDragEnter = function(target, e, id) {
	/// <param name="target" type="Ext.dd.DragDrop"/>
	/// <param name="e" type="Event"/>
	/// <param name="id" type="String"/>
	/// <returns type="Boolean" />
}
Ext.dd.DragSource.prototype.alignElWithMouse = function() {}
Ext.dd.DragSource.prototype.onDragOver = function(e, id) {
}
Ext.dd.DragSource.prototype.beforeDragOver = function(target, e, id) {
	/// <param name="target" type="Ext.dd.DragDrop"/>
	/// <param name="e" type="Event"/>
	/// <param name="id" type="String"/>
	/// <returns type="Boolean" />
}
Ext.dd.DragSource.prototype.onDragOut = function(e, id) {
}
Ext.dd.DragSource.prototype.beforeDragOut = function(target, e, id) {
	/// <param name="target" type="Ext.dd.DragDrop"/>
	/// <param name="e" type="Event"/>
	/// <param name="id" type="String"/>
	/// <returns type="Boolean" />
}
Ext.dd.DragSource.prototype.onDragDrop = function(e, id) {
}
Ext.dd.DragSource.prototype.beforeDragDrop = function(target, e, id) {
	/// <param name="target" type="Ext.dd.DragDrop"/>
	/// <param name="e" type="Event"/>
	/// <param name="id" type="String"/>
	/// <returns type="Boolean" />
}
Ext.dd.DragSource.prototype.onValidDrop = function(target, e, id) {
}
Ext.dd.DragSource.prototype.getRepairXY = function(e, data) {
}
Ext.dd.DragSource.prototype.onInvalidDrop = function(target, e, id) {
}
Ext.dd.DragSource.prototype.afterRepair = function() {}
Ext.dd.DragSource.prototype.beforeInvalidDrop = function(target, e, id) {
	/// <param name="target" type="Ext.dd.DragDrop"/>
	/// <param name="e" type="Event"/>
	/// <param name="id" type="String"/>
	/// <returns type="Boolean" />
}
Ext.dd.DragSource.prototype.handleMouseDown = function(e) {
}
Ext.dd.DragSource.prototype.onBeforeDrag = function(data, e) {
	/// <param name="data" type="Object"/>
	/// <param name="e" type="Event"/>
	/// <returns type="Boolean" />
}
Ext.dd.DragSource.prototype.onStartDrag = function(x, y) {
	/// <param name="x" type="Number"/>
	/// <param name="y" type="Number"/>
}
Ext.dd.DragSource.prototype.startDrag = function(x, y) {
}
Ext.dd.DragSource.prototype.onInitDrag = function(x, y) {
}
Ext.dd.DragSource.prototype.getProxy = function() {
	/// <returns type="Ext.dd.StatusProxy" />
}
Ext.dd.DragSource.prototype.hideProxy = function() {}
Ext.dd.DragSource.prototype.triggerCacheRefresh = function() {}
Ext.dd.DragSource.prototype.b4EndDrag = function(e) {
}
Ext.dd.DragSource.prototype.endDrag = function(e) {
}
Ext.dd.DragSource.prototype.onEndDrag = function(data, e) {
}
Ext.dd.DragSource.prototype.autoOffset = function(x, y) {
}
Ext.dd.DragSource.prototype.el = null;
Ext.dd.DragSource.prototype.dragging = null;

Ext.dd.DropTarget.prototype = new Ext.dd.DDTarget;

Ext.dd.DropTarget.prototype.dropAllowed = "";
Ext.dd.DropTarget.prototype.dropNotAllowed = "";
Ext.dd.DropTarget.prototype.isTarget = false;
Ext.dd.DropTarget.prototype.isNotifyTarget = false;
Ext.dd.DropTarget.prototype.notifyEnter = function(dd, e, data) {
	/// <param name="dd" type="Ext.dd.DragSource"/>
	/// <param name="e" type="Event"/>
	/// <param name="data" type="Object"/>
	/// <returns type="String" />
}
Ext.dd.DropTarget.prototype.notifyOver = function(dd, e, data) {
	/// <param name="dd" type="Ext.dd.DragSource"/>
	/// <param name="e" type="Event"/>
	/// <param name="data" type="Object"/>
	/// <returns type="String" />
}
Ext.dd.DropTarget.prototype.notifyOut = function(dd, e, data) {
	/// <param name="dd" type="Ext.dd.DragSource"/>
	/// <param name="e" type="Event"/>
	/// <param name="data" type="Object"/>
}
Ext.dd.DropTarget.prototype.notifyDrop = function(dd, e, data) {
	/// <param name="dd" type="Ext.dd.DragSource"/>
	/// <param name="e" type="Event"/>
	/// <param name="data" type="Object"/>
	/// <returns type="Boolean" />
}
Ext.dd.DropTarget.prototype.el = null;

Ext.dd.DragZone.prototype = new Ext.dd.DragSource;

Ext.dd.DragZone.prototype.getDragData = function(e) {
	/// <param name="e" type="EventObject"/>
	/// <returns type="Object" />
}
Ext.dd.DragZone.prototype.onInitDrag = function(x, y) {
	/// <param name="x" type="Number"/>
	/// <param name="y" type="Number"/>
	/// <returns type="Boolean" />
}
Ext.dd.DragZone.prototype.afterRepair = function() {}
Ext.dd.DragZone.prototype.getRepairXY = function(e) {
	/// <param name="e" type="EventObject"/>
	/// <returns type="Array" />
}

Ext.dd.DropZone.prototype = new Ext.dd.DropTarget;

Ext.dd.DropZone.prototype.getTargetFromEvent = function(e) {
	/// <param name="e" type="Event"/>
	/// <returns type="Object" />
}
Ext.dd.DropZone.prototype.onNodeEnter = function(n, dd, e, data) {
	/// <param name="n" type="Object"/>
	/// <param name="dd" type="Ext.dd.DragSource"/>
	/// <param name="e" type="Event"/>
	/// <param name="data" type="Object"/>
}
Ext.dd.DropZone.prototype.onNodeOver = function(n, dd, e, data) {
	/// <param name="n" type="Object"/>
	/// <param name="dd" type="Ext.dd.DragSource"/>
	/// <param name="e" type="Event"/>
	/// <param name="data" type="Object"/>
	/// <returns type="String" />
}
Ext.dd.DropZone.prototype.onNodeOut = function(n, dd, e, data) {
	/// <param name="n" type="Object"/>
	/// <param name="dd" type="Ext.dd.DragSource"/>
	/// <param name="e" type="Event"/>
	/// <param name="data" type="Object"/>
}
Ext.dd.DropZone.prototype.onNodeDrop = function(n, dd, e, data) {
	/// <param name="n" type="Object"/>
	/// <param name="dd" type="Ext.dd.DragSource"/>
	/// <param name="e" type="Event"/>
	/// <param name="data" type="Object"/>
	/// <returns type="Boolean" />
}
Ext.dd.DropZone.prototype.onContainerOver = function(dd, e, data) {
	/// <param name="dd" type="Ext.dd.DragSource"/>
	/// <param name="e" type="Event"/>
	/// <param name="data" type="Object"/>
	/// <returns type="String" />
}
Ext.dd.DropZone.prototype.onContainerDrop = function(dd, e, data) {
	/// <param name="dd" type="Ext.dd.DragSource"/>
	/// <param name="e" type="Event"/>
	/// <param name="data" type="Object"/>
	/// <returns type="Boolean" />
}
Ext.dd.DropZone.prototype.notifyEnter = function(dd, e, data) {
	/// <param name="dd" type="Ext.dd.DragSource"/>
	/// <param name="e" type="Event"/>
	/// <param name="data" type="Object"/>
	/// <returns type="String" />
}
Ext.dd.DropZone.prototype.notifyOver = function(dd, e, data) {
	/// <param name="dd" type="Ext.dd.DragSource"/>
	/// <param name="e" type="Event"/>
	/// <param name="data" type="Object"/>
	/// <returns type="String" />
}
Ext.dd.DropZone.prototype.notifyOut = function(dd, e, data) {
	/// <param name="dd" type="Ext.dd.DragSource"/>
	/// <param name="e" type="Event"/>
	/// <param name="data" type="Object"/>
}
Ext.dd.DropZone.prototype.notifyDrop = function(dd, e, data) {
	/// <param name="dd" type="Ext.dd.DragSource"/>
	/// <param name="e" type="Event"/>
	/// <param name="data" type="Object"/>
	/// <returns type="Boolean" />
}
Ext.dd.DropZone.prototype.triggerCacheRefresh = function() {}

Ext.dd.PanelProxy.prototype = {
	insertProxy : false,
	setStatus : function() {	},
	reset : function() {	},
	update : function() {	},
	stop : function() {	},
	sync : function() {	},
	getEl : function() {
	/// <returns type="Ext.Element" />
	},
	getGhost : function() {
	/// <returns type="Ext.Element" />
	},
	getProxy : function() {
	/// <returns type="Ext.Element" />
	},
	hide : function() {	},
	show : function() {	},
	repair : function(xy, callback, scope) {
	},
	moveProxy : function(parentNode, before) {
	/// <param name="parentNode" type="HTMLElement"/>
	/// <param name="before" type="HTMLElement" optional="true"/>
	},
	panel : null,
	id : null
}

Ext.Component.prototype = new Ext.util.Observable;

Ext.Component.prototype.disabledClass = "";
Ext.Component.prototype.allowDomMove = false;
Ext.Component.prototype.autoShow = false;
Ext.Component.prototype.hideMode = "";
Ext.Component.prototype.hideParent = false;
Ext.Component.prototype.hidden = false;
Ext.Component.prototype.disabled = false;
Ext.Component.prototype.rendered = false;
Ext.Component.prototype.ctype = "";
Ext.Component.prototype.actionMode = "";
Ext.Component.prototype.getActionEl = function() {}
Ext.Component.prototype.initPlugin = function(p) {
}
Ext.Component.prototype.initComponent = function() {}
Ext.Component.prototype.render = function(container, position) {
	/// <param name="container" type="Element|HTMLElement|String" optional="true"/>
	/// <param name="position" type="String|Number" optional="true"/>
}
Ext.Component.prototype.initState = function(config) {
}
Ext.Component.prototype.initStateEvents = function() {}
Ext.Component.prototype.applyState = function(state, config) {
}
Ext.Component.prototype.getState = function() {}
Ext.Component.prototype.saveState = function() {}
Ext.Component.prototype.applyToMarkup = function(el) {
	/// <param name="el" type="String|HTMLElement"/>
}
Ext.Component.prototype.addClass = function(cls) {
	/// <param name="cls" type="string"/>
}
Ext.Component.prototype.removeClass = function(cls) {
	/// <param name="cls" type="string"/>
}
Ext.Component.prototype.onRender = function(ct, position) {
}
Ext.Component.prototype.getAutoCreate = function() {}
Ext.Component.prototype.afterRender = function() {}
Ext.Component.prototype.destroy = function() {}
Ext.Component.prototype.beforeDestroy = function() {}
Ext.Component.prototype.onDestroy = function() {}
Ext.Component.prototype.getEl = function() {
	/// <returns type="Ext.Element" />
}
Ext.Component.prototype.getId = function() {
	/// <returns type="String" />
}
Ext.Component.prototype.getItemId = function() {
	/// <returns type="String" />
}
Ext.Component.prototype.focus = function(selectText, delay) {
	/// <param name="selectText" type="Boolean" optional="true"/>
	/// <param name="delay" type="Boolean|Number" optional="true"/>
	/// <returns type="Ext.Component" />
}
Ext.Component.prototype.blur = function() {}
Ext.Component.prototype.disable = function() {
	/// <returns type="Ext.Component" />
}
Ext.Component.prototype.onDisable = function() {}
Ext.Component.prototype.enable = function() {
	/// <returns type="Ext.Component" />
}
Ext.Component.prototype.onEnable = function() {}
Ext.Component.prototype.setDisabled = function(disabled) {
	/// <param name="disabled" type="Boolean"/>
}
Ext.Component.prototype.show = function() {
	/// <returns type="Ext.Component" />
}
Ext.Component.prototype.onShow = function() {}
Ext.Component.prototype.hide = function() {
	/// <returns type="Ext.Component" />
}
Ext.Component.prototype.onHide = function() {}
Ext.Component.prototype.setVisible = function(visible) {
	/// <param name="visible" type="Boolean"/>
	/// <returns type="Ext.Component" />
}
Ext.Component.prototype.isVisible = function() {}
Ext.Component.prototype.cloneConfig = function(overrides) {
	/// <param name="overrides" type="Object"/>
	/// <returns type="Ext.Component" />
}
Ext.Component.prototype.getXType = function() {
	/// <returns type="String" />
}
Ext.Component.prototype.isXType = function(xtype, shallow) {
	/// <param name="xtype" type="String"/>
	/// <param name="shallow" type="Boolean" optional="true"/>
}
Ext.Component.prototype.getXTypes = function() {
	/// <returns type="String" />
}
Ext.Component.prototype.findParentBy = function(fn) {
	/// <param name="fn" type="Function"/>
	/// <returns type="Array" />
}
Ext.Component.prototype.findParentByType = function(xtype) {
	/// <param name="xtype" type="String|Class"/>
	/// <returns type="Ext.Container" />
}
Ext.Component.prototype.mon = function(item, ename, fn, scope, opt) {
}
Ext.Component.prototype.initialConfig = null;

Ext.Action.prototype = {
	isAction : false,
	setText : function(text) {
	/// <param name="text" type="String"/>
	},
	getText : function() {	},
	setIconClass : function(cls) {
	/// <param name="cls" type="String"/>
	},
	getIconClass : function() {	},
	setDisabled : function(v) {
	/// <param name="v" type="Boolean"/>
	},
	enable : function() {	},
	disable : function() {	},
	isDisabled : function() {	},
	setHidden : function(v) {
	/// <param name="v" type="Boolean"/>
	},
	show : function() {	},
	hide : function() {	},
	isHidden : function() {	},
	setHandler : function(fn, scope) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object"/>
	},
	each : function(fn, scope) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object"/>
	},
	callEach : function(fnName, args) {
	},
	addComponent : function(comp) {
	},
	removeComponent : function(comp) {
	},
	execute : function(arg1, arg2, etc) {
	/// <param name="arg1" type="Mixed" optional="true"/>
	/// <param name="arg2" type="Mixed" optional="true"/>
	/// <param name="etc" type="Mixed"/>
	},
	initialConfig : null,
	items : null
}

Ext.Layer.prototype = new Ext.Element;

Ext.Layer.prototype.getZIndex = function() {}
Ext.Layer.prototype.getShim = function() {}
Ext.Layer.prototype.hideShim = function() {}
Ext.Layer.prototype.disableShadow = function() {}
Ext.Layer.prototype.enableShadow = function(show) {
}
Ext.Layer.prototype.sync = function(doShow) {
}
Ext.Layer.prototype.destroy = function() {}
Ext.Layer.prototype.remove = function() {}
Ext.Layer.prototype.beginUpdate = function() {}
Ext.Layer.prototype.endUpdate = function() {}
Ext.Layer.prototype.hideUnders = function(negOffset) {
}
Ext.Layer.prototype.constrainXY = function() {}
Ext.Layer.prototype.isVisible = function() {}
Ext.Layer.prototype.showAction = function() {}
Ext.Layer.prototype.hideAction = function() {}
Ext.Layer.prototype.setVisible = function(v, a, d, c, e) {
}
Ext.Layer.prototype.storeXY = function(xy) {
}
Ext.Layer.prototype.storeLeftTop = function(left, top) {
}
Ext.Layer.prototype.beforeFx = function() {}
Ext.Layer.prototype.afterFx = function() {}
Ext.Layer.prototype.beforeAction = function() {}
Ext.Layer.prototype.setLeft = function(left) {
}
Ext.Layer.prototype.setTop = function(top) {
}
Ext.Layer.prototype.setLeftTop = function(left, top) {
}
Ext.Layer.prototype.setXY = function(xy, a, d, c, e) {
}
Ext.Layer.prototype.createCB = function(c) {
}
Ext.Layer.prototype.setX = function(x, a, d, c, e) {
}
Ext.Layer.prototype.setY = function(y, a, d, c, e) {
}
Ext.Layer.prototype.setSize = function(w, h, a, d, c, e) {
}
Ext.Layer.prototype.setWidth = function(w, a, d, c, e) {
}
Ext.Layer.prototype.setHeight = function(h, a, d, c, e) {
}
Ext.Layer.prototype.setBounds = function(x, y, w, h, a, d, c, e) {
}
Ext.Layer.prototype.setZIndex = function(zindex) {
	/// <param name="zindex" type="Number"/>
	/// <returns type="this" />
}
Ext.Layer.prototype.constrain = null;
Ext.Layer.prototype.zindex = null;
Ext.Layer.prototype.useShim = null;
Ext.Layer.prototype.useDisplay = null;

Ext.Shadow.prototype = {
	offset : 0,
	defaultMode : "",
	show : function(target) {
	/// <param name="target" type="Mixed"/>
	},
	isVisible : function() {	},
	realign : function(l, t, w, h) {
	/// <param name="l" type="Number"/>
	/// <param name="t" type="Number"/>
	/// <param name="w" type="Number"/>
	/// <param name="h" type="Number"/>
	},
	hide : function() {	},
	setZIndex : function(z) {
	/// <param name="z" type="Number"/>
	},
	adjusts : null
}

Ext.BoxComponent.prototype = new Ext.Component;

Ext.BoxComponent.prototype.initComponent = function() {}
Ext.BoxComponent.prototype.boxReady = false;
Ext.BoxComponent.prototype.deferHeight = false;
Ext.BoxComponent.prototype.setSize = function(w, h) {
	/// <param name="w" type="Number|Object"/>
	/// <param name="h" type="Number"/>
	/// <returns type="Ext.BoxComponent" />
}
Ext.BoxComponent.prototype.setWidth = function(width) {
	/// <param name="width" type="Number"/>
	/// <returns type="Ext.BoxComponent" />
}
Ext.BoxComponent.prototype.setHeight = function(height) {
	/// <param name="height" type="Number"/>
	/// <returns type="Ext.BoxComponent" />
}
Ext.BoxComponent.prototype.getSize = function() {
	/// <returns type="Object" />
}
Ext.BoxComponent.prototype.getPosition = function(local) {
	/// <param name="local" type="Boolean" optional="true"/>
	/// <returns type="Array" />
}
Ext.BoxComponent.prototype.getBox = function(local) {
	/// <param name="local" type="Boolean" optional="true"/>
	/// <returns type="Object" />
}
Ext.BoxComponent.prototype.updateBox = function(box) {
	/// <param name="box" type="Object"/>
	/// <returns type="Ext.BoxComponent" />
}
Ext.BoxComponent.prototype.getResizeEl = function() {}
Ext.BoxComponent.prototype.getPositionEl = function() {}
Ext.BoxComponent.prototype.setPosition = function(x, y) {
	/// <param name="x" type="Number"/>
	/// <param name="y" type="Number"/>
	/// <returns type="Ext.BoxComponent" />
}
Ext.BoxComponent.prototype.setPagePosition = function(x, y) {
	/// <param name="x" type="Number"/>
	/// <param name="y" type="Number"/>
	/// <returns type="Ext.BoxComponent" />
}
Ext.BoxComponent.prototype.onRender = function(ct, position) {
}
Ext.BoxComponent.prototype.afterRender = function() {}
Ext.BoxComponent.prototype.syncSize = function() {
	/// <returns type="Ext.BoxComponent" />
}
Ext.BoxComponent.prototype.onResize = function(adjWidth, adjHeight, rawWidth, rawHeight) {
}
Ext.BoxComponent.prototype.onPosition = function(x, y) {
}
Ext.BoxComponent.prototype.adjustSize = function(w, h) {
}
Ext.BoxComponent.prototype.adjustPosition = function(x, y) {
}

Ext.SplitBar.prototype = new Ext.util.Observable;

Ext.SplitBar.prototype.onStartProxyDrag = function(x, y) {
}
Ext.SplitBar.prototype.onEndProxyDrag = function(e) {
}
Ext.SplitBar.prototype.getAdapter = function() {}
Ext.SplitBar.prototype.setAdapter = function(adapter) {
	/// <param name="adapter" type="Object"/>
}
Ext.SplitBar.prototype.getMinimumSize = function() {
	/// <returns type="Number" />
}
Ext.SplitBar.prototype.setMinimumSize = function(minSize) {
	/// <param name="minSize" type="Number"/>
}
Ext.SplitBar.prototype.getMaximumSize = function() {
	/// <returns type="Number" />
}
Ext.SplitBar.prototype.setMaximumSize = function(maxSize) {
	/// <param name="maxSize" type="Number"/>
}
Ext.SplitBar.prototype.setCurrentSize = function(size) {
	/// <param name="size" type="Number"/>
}
Ext.SplitBar.prototype.destroy = function(removeEl) {
	/// <param name="removeEl" type="Boolean"/>
}
Ext.SplitBar.prototype.el = null;
Ext.SplitBar.prototype.resizingEl = null;
Ext.SplitBar.prototype.orientation = null;
Ext.SplitBar.prototype.minSize = null;
Ext.SplitBar.prototype.maxSize = null;
Ext.SplitBar.prototype.animate = null;
Ext.SplitBar.prototype.useShim = null;
Ext.SplitBar.prototype.shim = null;
Ext.SplitBar.prototype.dd = null;
Ext.SplitBar.prototype.dragSpecs = null;
Ext.SplitBar.prototype.adapter = null;

Ext.SplitBar.BasicLayoutAdapter.prototype = {
	init : function(s) {
	},
	getElementSize : function(s) {
	/// <param name="s" type="Ext.SplitBar"/>
	},
	setElementSize : function(s, newSize, onComplete) {
	/// <param name="s" type="Ext.SplitBar"/>
	/// <param name="newSize" type="Number"/>
	/// <param name="onComplete" type="Function"/>
	}
}

Ext.SplitBar.AbsoluteLayoutAdapter.prototype = {
	init : function(s) {
	},
	getElementSize : function(s) {
	},
	setElementSize : function(s, newSize, onComplete) {
	},
	moveSplitter : function(s) {
	},
	basic : null,
	container : null
}

Ext.Container.prototype = new Ext.BoxComponent;

Ext.Container.prototype.autoDestroy = false;
Ext.Container.prototype.defaultType = "";
Ext.Container.prototype.initComponent = function() {}
Ext.Container.prototype.initItems = function() {}
Ext.Container.prototype.setLayout = function(layout) {
}
Ext.Container.prototype.render = function() {}
Ext.Container.prototype.getLayoutTarget = function() {}
Ext.Container.prototype.getComponentId = function(comp) {
}
Ext.Container.prototype.add = function(comp) {
	/// <param name="comp" type="Ext.Component|Object"/>
	/// <returns type="Ext.Component" />
}
Ext.Container.prototype.insert = function(index, comp) {
	/// <param name="index" type="Number"/>
	/// <param name="comp" type="Ext.Component"/>
	/// <returns type="Ext.Component" />
}
Ext.Container.prototype.applyDefaults = function(c) {
}
Ext.Container.prototype.onBeforeAdd = function(item) {
}
Ext.Container.prototype.remove = function(comp, autoDestroy) {
	/// <param name="comp" type="Component|String"/>
	/// <param name="autoDestroy" type="Boolean" optional="true"/>
}
Ext.Container.prototype.getComponent = function(comp) {
	/// <param name="comp" type="String|Number"/>
	/// <returns type="Ext.Component" />
}
Ext.Container.prototype.lookupComponent = function(comp) {
}
Ext.Container.prototype.createComponent = function(config) {
}
Ext.Container.prototype.doLayout = function(shallow) {
	/// <param name="shallow" type="Boolean" optional="true"/>
}
Ext.Container.prototype.getLayout = function() {
	/// <returns type="Ext.layout.ContainerLayout" />
}
Ext.Container.prototype.beforeDestroy = function() {}
Ext.Container.prototype.bubble = function(fn, scope, args) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <param name="args" type="Array" optional="true"/>
}
Ext.Container.prototype.cascade = function(fn, scope, args) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <param name="args" type="Array" optional="true"/>
}
Ext.Container.prototype.findById = function(id) {
	/// <param name="id" type="String"/>
	/// <returns type="Ext.Component" />
}
Ext.Container.prototype.findByType = function(xtype) {
	/// <param name="xtype" type="String|Class"/>
	/// <returns type="Array" />
}
Ext.Container.prototype.find = function(prop, value) {
	/// <param name="prop" type="String"/>
	/// <param name="value" type="String"/>
	/// <returns type="Array" />
}
Ext.Container.prototype.findBy = function(fn, scope) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <returns type="Array" />
}

Ext.layout.ContainerLayout.prototype = {
	monitorResize : false,
	activeItem : null,
	layout : function() {	},
	onLayout : function(ct, target) {
	},
	isValidParent : function(c, target) {
	},
	renderAll : function(ct, target) {
	},
	renderItem : function(c, position, target) {
	},
	onResize : function() {	},
	setContainer : function(ct) {
	},
	parseMargins : function(v) {
	},
	destroy : function() {	}
}

Ext.layout.FitLayout.prototype = new Ext.layout.ContainerLayout;

Ext.layout.FitLayout.prototype.monitorResize = false;
Ext.layout.FitLayout.prototype.onLayout = function(ct, target) {
}
Ext.layout.FitLayout.prototype.setItemSize = function(item, size) {
}

Ext.layout.CardLayout.prototype = new Ext.layout.FitLayout;

Ext.layout.CardLayout.prototype.deferredRender = false;
Ext.layout.CardLayout.prototype.renderHidden = false;
Ext.layout.CardLayout.prototype.setActiveItem = function(item) {
	/// <param name="item" type="String|Number"/>
}
Ext.layout.CardLayout.prototype.renderAll = function(ct, target) {
}

Ext.layout.AnchorLayout.prototype = new Ext.layout.ContainerLayout;

Ext.layout.AnchorLayout.prototype.monitorResize = false;
Ext.layout.AnchorLayout.prototype.getAnchorViewSize = function(ct, target) {
}
Ext.layout.AnchorLayout.prototype.onLayout = function(ct, target) {
}
Ext.layout.AnchorLayout.prototype.parseAnchor = function(a, start, cstart) {
}
Ext.layout.AnchorLayout.prototype.adjustWidthAnchor = function(value, comp) {
}
Ext.layout.AnchorLayout.prototype.adjustHeightAnchor = function(value, comp) {
}

Ext.layout.ColumnLayout.prototype = new Ext.layout.ContainerLayout;

Ext.layout.ColumnLayout.prototype.monitorResize = false;
Ext.layout.ColumnLayout.prototype.extraCls = "";
Ext.layout.ColumnLayout.prototype.scrollOffset = 0;
Ext.layout.ColumnLayout.prototype.isValidParent = function(c, target) {
}
Ext.layout.ColumnLayout.prototype.onLayout = function(ct, target) {
}

Ext.layout.BorderLayout.prototype = new Ext.layout.ContainerLayout;

Ext.layout.BorderLayout.prototype.monitorResize = false;
Ext.layout.BorderLayout.prototype.rendered = false;
Ext.layout.BorderLayout.prototype.onLayout = function(ct, target) {
}
Ext.layout.BorderLayout.prototype.destroy = function() {}

Ext.layout.BorderLayout.Region.prototype = {
	collapsible : false,
	split : false,
	floatable : false,
	minWidth : 0,
	minHeight : 0,
	defaultMargins : null,
	defaultNSCMargins : null,
	defaultEWCMargins : null,
	isCollapsed : false,
	render : function(ct, p) {
	/// <returns type="String" />
	},
	getCollapsedEl : function() {	},
	onExpandClick : function(e) {
	},
	onCollapseClick : function(e) {
	},
	beforeCollapse : function(p, animate) {
	},
	onCollapse : function(animate) {
	},
	beforeExpand : function(animate) {
	},
	onExpand : function() {	},
	collapseClick : function(e) {
	},
	onHide : function() {	},
	onShow : function() {	},
	isVisible : function() {
	/// <returns type="Boolean" />
	},
	getMargins : function() {
	/// <returns type="Object" />
	},
	getSize : function() {
	/// <returns type="Object" />
	},
	setPanel : function(panel) {
	/// <param name="panel" type="Ext.Panel"/>
	},
	getMinWidth : function() {
	/// <returns type="Number" />
	},
	getMinHeight : function() {
	/// <returns type="Number" />
	},
	applyLayoutCollapsed : function(box) {
	},
	applyLayout : function(box) {
	},
	beforeSlide : function() {	},
	afterSlide : function() {	},
	initAutoHide : function() {	},
	clearAutoHide : function() {	},
	clearMonitor : function() {	},
	slideOut : function() {	},
	afterSlideIn : function() {	},
	slideIn : function(cb) {
	},
	slideInIf : function(e) {
	},
	anchors : null,
	sanchors : null,
	canchors : null,
	getAnchor : function() {	},
	getCollapseAnchor : function() {	},
	getSlideAnchor : function() {	},
	getAlignAdj : function() {	},
	getExpandAdj : function() {	},
	layout : null,
	position : null,
	state : null,
	margins : null
}

Ext.layout.BorderLayout.SplitRegion.prototype = new Ext.layout.BorderLayout.Region;

Ext.layout.BorderLayout.SplitRegion.prototype.splitTip = "";
Ext.layout.BorderLayout.SplitRegion.prototype.collapsibleSplitTip = "";
Ext.layout.BorderLayout.SplitRegion.prototype.useSplitTips = false;
Ext.layout.BorderLayout.SplitRegion.prototype.splitSettings = null;
Ext.layout.BorderLayout.SplitRegion.prototype.applyFns = null;
Ext.layout.BorderLayout.SplitRegion.prototype.render = function(ct, p) {
}
Ext.layout.BorderLayout.SplitRegion.prototype.getSize = function() {}
Ext.layout.BorderLayout.SplitRegion.prototype.getHMaxSize = function() {}
Ext.layout.BorderLayout.SplitRegion.prototype.getVMaxSize = function() {}
Ext.layout.BorderLayout.SplitRegion.prototype.onSplitMove = function(split, newSize) {
}
Ext.layout.BorderLayout.SplitRegion.prototype.getSplitBar = function() {
	/// <returns type="Ext.SplitBar" />
}

Ext.layout.FormLayout.prototype = new Ext.layout.AnchorLayout;

Ext.layout.FormLayout.prototype.labelSeparator = "";
Ext.layout.FormLayout.prototype.getAnchorViewSize = function(ct, target) {
}
Ext.layout.FormLayout.prototype.setContainer = function(ct) {
}
Ext.layout.FormLayout.prototype.renderItem = function(c, position, target) {
}
Ext.layout.FormLayout.prototype.adjustWidthAnchor = function(value, comp) {
}
Ext.layout.FormLayout.prototype.isValidParent = function(c, target) {
}

Ext.layout.Accordion.prototype = new Ext.layout.FitLayout;

Ext.layout.Accordion.prototype.fill = false;
Ext.layout.Accordion.prototype.autoWidth = false;
Ext.layout.Accordion.prototype.titleCollapse = false;
Ext.layout.Accordion.prototype.hideCollapseTool = false;
Ext.layout.Accordion.prototype.collapseFirst = false;
Ext.layout.Accordion.prototype.animate = false;
Ext.layout.Accordion.prototype.sequence = false;
Ext.layout.Accordion.prototype.activeOnTop = false;
Ext.layout.Accordion.prototype.renderItem = function(c) {
}
Ext.layout.Accordion.prototype.beforeExpand = function(p, anim) {
}
Ext.layout.Accordion.prototype.setItemSize = function(item, size) {
}

Ext.layout.TableLayout.prototype = new Ext.layout.ContainerLayout;

Ext.layout.TableLayout.prototype.monitorResize = false;
Ext.layout.TableLayout.prototype.setContainer = function(ct) {
}
Ext.layout.TableLayout.prototype.onLayout = function(ct, target) {
}
Ext.layout.TableLayout.prototype.getRow = function(index) {
}
Ext.layout.TableLayout.prototype.getNextCell = function(c) {
}
Ext.layout.TableLayout.prototype.getNextNonSpan = function(colIndex, rowIndex) {
}
Ext.layout.TableLayout.prototype.renderItem = function(c, position, target) {
}
Ext.layout.TableLayout.prototype.isValidParent = function(c, target) {
}

Ext.layout.AbsoluteLayout.prototype = new Ext.layout.AnchorLayout;

Ext.layout.AbsoluteLayout.prototype.extraCls = "";
Ext.layout.AbsoluteLayout.prototype.isForm = false;
Ext.layout.AbsoluteLayout.prototype.setContainer = function(ct) {
}
Ext.layout.AbsoluteLayout.prototype.onLayout = function(ct, target) {
}
Ext.layout.AbsoluteLayout.prototype.getAnchorViewSize = function(ct, target) {
}
Ext.layout.AbsoluteLayout.prototype.isValidParent = function(c, target) {
}
Ext.layout.AbsoluteLayout.prototype.adjustWidthAnchor = function(value, comp) {
}
Ext.layout.AbsoluteLayout.prototype.adjustHeightAnchor = function(value, comp) {
}

Ext.Viewport.prototype = new Ext.Container;

Ext.Viewport.prototype.initComponent = function() {}
Ext.Viewport.prototype.fireResize = function(w, h) {
}

Ext.Panel.prototype = new Ext.Container;

Ext.Panel.prototype.baseCls = "";
Ext.Panel.prototype.collapsedCls = "";
Ext.Panel.prototype.maskDisabled = false;
Ext.Panel.prototype.animCollapse = false;
Ext.Panel.prototype.headerAsText = false;
Ext.Panel.prototype.buttonAlign = "";
Ext.Panel.prototype.collapsed = false;
Ext.Panel.prototype.collapseFirst = false;
Ext.Panel.prototype.minButtonWidth = 0;
Ext.Panel.prototype.elements = "";
Ext.Panel.prototype.toolTarget = "";
Ext.Panel.prototype.collapseEl = "";
Ext.Panel.prototype.slideAnchor = "";
Ext.Panel.prototype.disabledClass = "";
Ext.Panel.prototype.deferHeight = false;
Ext.Panel.prototype.expandDefaults = null;
Ext.Panel.prototype.collapseDefaults = null;
Ext.Panel.prototype.initComponent = function() {}
Ext.Panel.prototype.createElement = function(name, pnode) {
}
Ext.Panel.prototype.onRender = function(ct, position) {
}
Ext.Panel.prototype.setIconClass = function(cls) {
	/// <param name="cls" type="String"/>
}
Ext.Panel.prototype.makeFloating = function(cfg) {
}
Ext.Panel.prototype.getTopToolbar = function() {
	/// <returns type="Ext.Toolbar" />
}
Ext.Panel.prototype.getBottomToolbar = function() {
	/// <returns type="Ext.Toolbar" />
}
Ext.Panel.prototype.addButton = function(config, handler, scope) {
	/// <param name="config" type="String|Object"/>
	/// <param name="handler" type="Function"/>
	/// <param name="scope" type="Object"/>
	/// <returns type="Ext.Button" />
}
Ext.Panel.prototype.addTool = function() {}
Ext.Panel.prototype.onShow = function() {}
Ext.Panel.prototype.onHide = function() {}
Ext.Panel.prototype.createToolHandler = function(t, tc, overCls, panel) {
}
Ext.Panel.prototype.afterRender = function() {}
Ext.Panel.prototype.setAutoScroll = function() {}
Ext.Panel.prototype.getKeyMap = function() {}
Ext.Panel.prototype.initEvents = function() {}
Ext.Panel.prototype.initDraggable = function() {}
Ext.Panel.prototype.beforeEffect = function() {}
Ext.Panel.prototype.afterEffect = function() {}
Ext.Panel.prototype.createEffect = function(a, cb, scope) {
}
Ext.Panel.prototype.collapse = function(animate) {
	/// <param name="animate" type="Boolean"/>
	/// <returns type="Ext.Panel" />
}
Ext.Panel.prototype.onCollapse = function(doAnim, animArg) {
}
Ext.Panel.prototype.afterCollapse = function() {}
Ext.Panel.prototype.expand = function(animate) {
	/// <param name="animate" type="Boolean"/>
	/// <returns type="Ext.Panel" />
}
Ext.Panel.prototype.onExpand = function(doAnim, animArg) {
}
Ext.Panel.prototype.afterExpand = function() {}
Ext.Panel.prototype.toggleCollapse = function(animate) {
	/// <param name="animate" type="Boolean"/>
	/// <returns type="Ext.Panel" />
}
Ext.Panel.prototype.onDisable = function() {}
Ext.Panel.prototype.onEnable = function() {}
Ext.Panel.prototype.onResize = function(w, h) {
}
Ext.Panel.prototype.adjustBodyHeight = function(h) {
}
Ext.Panel.prototype.adjustBodyWidth = function(w) {
}
Ext.Panel.prototype.onPosition = function() {}
Ext.Panel.prototype.getFrameWidth = function() {
	/// <returns type="Number" />
}
Ext.Panel.prototype.getFrameHeight = function() {
	/// <returns type="Number" />
}
Ext.Panel.prototype.getInnerWidth = function() {
	/// <returns type="Number" />
}
Ext.Panel.prototype.getInnerHeight = function() {
	/// <returns type="Number" />
}
Ext.Panel.prototype.syncShadow = function() {}
Ext.Panel.prototype.getLayoutTarget = function() {}
Ext.Panel.prototype.setTitle = function(title, iconCls) {
	/// <param name="title" type="String"/>
	/// <param name="iconCls" type="String" optional="true"/>
}
Ext.Panel.prototype.getUpdater = function() {
	/// <returns type="Ext.Updater" />
}
Ext.Panel.prototype.load = function(config) {
	/// <param name="config" type="Object|String|Function"/>
	/// <returns type="Ext.Panel" />
}
Ext.Panel.prototype.beforeDestroy = function() {}
Ext.Panel.prototype.createClasses = function() {}
Ext.Panel.prototype.createGhost = function(cls, useShim, appendTo) {
}
Ext.Panel.prototype.doAutoLoad = function() {}

Ext.Panel.DD.prototype = new Ext.dd.DD;

Ext.Panel.DD.prototype.showFrame = function() {}
Ext.Panel.DD.prototype.startDrag = function() {}
Ext.Panel.DD.prototype.b4StartDrag = function(x, y) {
}
Ext.Panel.DD.prototype.b4MouseDown = function(e) {
}
Ext.Panel.DD.prototype.onInitDrag = function(x, y) {
}
Ext.Panel.DD.prototype.createFrame = function() {}
Ext.Panel.DD.prototype.getDragEl = function(e) {
}
Ext.Panel.DD.prototype.endDrag = function(e) {
}
Ext.Panel.DD.prototype.autoOffset = function(x, y) {
}
Ext.Panel.DD.prototype.panel = null;
Ext.Panel.DD.prototype.dragData = null;
Ext.Panel.DD.prototype.proxy = null;
Ext.Panel.DD.prototype.moveOnly = false;
Ext.Panel.DD.prototype.scroll = false;
Ext.Panel.DD.prototype.headerOffsets = [];

Ext.Window.prototype = new Ext.Panel;

Ext.Window.prototype.baseCls = "";
Ext.Window.prototype.resizable = false;
Ext.Window.prototype.draggable = false;
Ext.Window.prototype.closable = false;
Ext.Window.prototype.constrain = false;
Ext.Window.prototype.constrainHeader = false;
Ext.Window.prototype.plain = false;
Ext.Window.prototype.minimizable = false;
Ext.Window.prototype.maximizable = false;
Ext.Window.prototype.minHeight = 0;
Ext.Window.prototype.minWidth = 0;
Ext.Window.prototype.expandOnShow = false;
Ext.Window.prototype.closeAction = "";
Ext.Window.prototype.elements = "";
Ext.Window.prototype.collapsible = false;
Ext.Window.prototype.initHidden = false;
Ext.Window.prototype.monitorResize = false;
Ext.Window.prototype.frame = false;
Ext.Window.prototype.floating = false;
Ext.Window.prototype.initComponent = function() {}
Ext.Window.prototype.getState = function() {}
Ext.Window.prototype.onRender = function(ct, position) {
}
Ext.Window.prototype.initEvents = function() {}
Ext.Window.prototype.initDraggable = function() {}
Ext.Window.prototype.onEsc = function() {}
Ext.Window.prototype.beforeDestroy = function() {}
Ext.Window.prototype.onDestroy = function() {}
Ext.Window.prototype.initTools = function() {}
Ext.Window.prototype.resizerAction = function() {}
Ext.Window.prototype.beforeResize = function() {}
Ext.Window.prototype.updateHandles = function() {}
Ext.Window.prototype.handleResize = function(box) {
}
Ext.Window.prototype.focus = function() {}
Ext.Window.prototype.setAnimateTarget = function(el) {
	/// <param name="el" type="String|Element"/>
}
Ext.Window.prototype.beforeShow = function() {}
Ext.Window.prototype.show = function(animateTarget, cb, scope) {
	/// <param name="animateTarget" type="String|Element" optional="true"/>
	/// <param name="cb" type="Function" optional="true"/>
	/// <param name="scope" type="Object" optional="true"/>
}
Ext.Window.prototype.afterShow = function() {}
Ext.Window.prototype.animShow = function() {}
Ext.Window.prototype.hide = function(animateTarget, cb, scope) {
	/// <param name="animateTarget" type="String|Element" optional="true"/>
	/// <param name="cb" type="Function" optional="true"/>
	/// <param name="scope" type="Object" optional="true"/>
}
Ext.Window.prototype.afterHide = function() {}
Ext.Window.prototype.animHide = function() {}
Ext.Window.prototype.onWindowResize = function() {}
Ext.Window.prototype.doConstrain = function() {}
Ext.Window.prototype.ghost = function(cls) {
}
Ext.Window.prototype.unghost = function(show, matchPosition) {
}
Ext.Window.prototype.minimize = function() {}
Ext.Window.prototype.close = function() {}
Ext.Window.prototype.maximize = function() {}
Ext.Window.prototype.restore = function() {}
Ext.Window.prototype.toggleMaximize = function() {}
Ext.Window.prototype.fitContainer = function() {}
Ext.Window.prototype.setZIndex = function(index) {
}
Ext.Window.prototype.alignTo = function(element, position, offsets) {
	/// <param name="element" type="Mixed"/>
	/// <param name="position" type="String"/>
	/// <param name="offsets" type="Array" optional="true"/>
	/// <returns type="Ext.Window" />
}
Ext.Window.prototype.anchorTo = function(el, alignment, offsets, monitorScroll, _pname) {
	/// <param name="el" type="Mixed"/>
	/// <param name="alignment" type="String"/>
	/// <param name="offsets" type="Array" optional="true"/>
	/// <param name="monitorScroll" type="Boolean|Number" optional="true"/>
	/// <returns type="Ext.Window" />
}
Ext.Window.prototype.toFront = function() {
	/// <returns type="Ext.Window" />
}
Ext.Window.prototype.setActive = function(active) {
	/// <param name="active" type="Boolean"/>
}
Ext.Window.prototype.toBack = function() {
	/// <returns type="Ext.Window" />
}
Ext.Window.prototype.center = function() {
	/// <returns type="Ext.Window" />
}

Ext.Window.DD.prototype = new Ext.dd.DD;

Ext.Window.DD.prototype.moveOnly = false;
Ext.Window.DD.prototype.headerOffsets = [];
Ext.Window.DD.prototype.startDrag = function() {}
Ext.Window.DD.prototype.b4Drag = function() {}
Ext.Window.DD.prototype.onDrag = function(e) {
}
Ext.Window.DD.prototype.endDrag = function(e) {
}
Ext.Window.DD.prototype.win = null;

Ext.state.Provider.prototype = new Ext.util.Observable;

Ext.state.Provider.prototype.get = function(name, defaultValue) {
	/// <param name="name" type="String"/>
	/// <param name="defaultValue" type="Mixed"/>
	/// <returns type="Mixed" />
}
Ext.state.Provider.prototype.clear = function(name) {
	/// <param name="name" type="String"/>
}
Ext.state.Provider.prototype.set = function(name, value) {
	/// <param name="name" type="String"/>
	/// <param name="value" type="Mixed"/>
}
Ext.state.Provider.prototype.decodeValue = function(cookie) {
	/// <param name="cookie" type="String"/>
	/// <returns type="Mixed" />
}
Ext.state.Provider.prototype.encodeValue = function(v) {
	/// <param name="v" type="Mixed"/>
	/// <returns type="String" />
}
Ext.state.Provider.prototype.state = null;

Ext.state.CookieProvider.prototype = new Ext.state.Provider;

Ext.state.CookieProvider.prototype.set = function(name, value) {
}
Ext.state.CookieProvider.prototype.clear = function(name) {
}
Ext.state.CookieProvider.prototype.readCookies = function() {}
Ext.state.CookieProvider.prototype.setCookie = function(name, value) {
}
Ext.state.CookieProvider.prototype.clearCookie = function(name) {
}
Ext.state.CookieProvider.prototype.path = null;
Ext.state.CookieProvider.prototype.expires = null;
Ext.state.CookieProvider.prototype.domain = null;
Ext.state.CookieProvider.prototype.secure = null;

Ext.DataView.prototype = new Ext.BoxComponent;

Ext.DataView.prototype.selectedClass = "";
Ext.DataView.prototype.emptyText = "";
Ext.DataView.prototype.deferEmptyText = false;
Ext.DataView.prototype.trackOver = false;
Ext.DataView.prototype.last = false;
Ext.DataView.prototype.initComponent = function() {}
Ext.DataView.prototype.onRender = function() {}
Ext.DataView.prototype.afterRender = function() {}
Ext.DataView.prototype.refresh = function() {}
Ext.DataView.prototype.prepareData = function(data) {
	/// <param name="data" type="Array|Object"/>
	/// <returns type="Array" />
}
Ext.DataView.prototype.collectData = function(records, startIndex) {
	/// <param name="records" type="Array"/>
	/// <returns type="Array" />
}
Ext.DataView.prototype.bufferRender = function(records) {
}
Ext.DataView.prototype.onUpdate = function(ds, record) {
}
Ext.DataView.prototype.onAdd = function(ds, records, index) {
}
Ext.DataView.prototype.onRemove = function(ds, record, index) {
}
Ext.DataView.prototype.refreshNode = function(index) {
	/// <param name="index" type="Number"/>
}
Ext.DataView.prototype.updateIndexes = function(startIndex, endIndex) {
}
Ext.DataView.prototype.setStore = function(store, initial) {
	/// <param name="store" type="Store"/>
}
Ext.DataView.prototype.findItemFromChild = function(node) {
	/// <param name="node" type="HTMLElement"/>
	/// <returns type="HTMLElement" />
}
Ext.DataView.prototype.onClick = function(e) {
}
Ext.DataView.prototype.onContextMenu = function(e) {
}
Ext.DataView.prototype.onDblClick = function(e) {
}
Ext.DataView.prototype.onMouseOver = function(e) {
}
Ext.DataView.prototype.onMouseOut = function(e) {
}
Ext.DataView.prototype.onItemClick = function(item, index, e) {
}
Ext.DataView.prototype.doSingleSelection = function(item, index, e) {
}
Ext.DataView.prototype.doMultiSelection = function(item, index, e) {
}
Ext.DataView.prototype.getSelectionCount = function() {
	/// <returns type="Number" />
}
Ext.DataView.prototype.getSelectedNodes = function() {
	/// <returns type="Array" />
}
Ext.DataView.prototype.getSelectedIndexes = function() {
	/// <returns type="Array" />
}
Ext.DataView.prototype.getSelectedRecords = function() {
	/// <returns type="Array" />
}
Ext.DataView.prototype.getRecords = function(nodes) {
	/// <param name="nodes" type="Array"/>
	/// <returns type="Array" />
}
Ext.DataView.prototype.getRecord = function(node) {
	/// <param name="node" type="HTMLElement"/>
	/// <returns type="Ext.data.Record" />
}
Ext.DataView.prototype.clearSelections = function(suppressEvent, skipUpdate) {
	/// <param name="suppressEvent" type="Boolean" optional="true"/>
}
Ext.DataView.prototype.isSelected = function(node) {
	/// <param name="node" type="HTMLElement|Number"/>
	/// <returns type="Boolean" />
}
Ext.DataView.prototype.deselect = function(node) {
	/// <param name="node" type="HTMLElement|Number"/>
}
Ext.DataView.prototype.select = function(nodeInfo, keepExisting, suppressEvent) {
	/// <param name="nodeInfo" type="Array|HTMLElement|String|Number"/>
	/// <param name="keepExisting" type="Boolean" optional="true"/>
	/// <param name="suppressEvent" type="Boolean" optional="true"/>
}
Ext.DataView.prototype.selectRange = function(start, end, keepExisting) {
	/// <param name="start" type="Number"/>
	/// <param name="end" type="Number"/>
	/// <param name="keepExisting" type="Boolean" optional="true"/>
}
Ext.DataView.prototype.getNode = function(nodeInfo) {
	/// <param name="nodeInfo" type="HTMLElement|String|Number"/>
	/// <returns type="HTMLElement" />
}
Ext.DataView.prototype.getNodes = function(start, end) {
	/// <param name="start" type="Number" optional="true"/>
	/// <param name="end" type="Number" optional="true"/>
	/// <returns type="Array" />
}
Ext.DataView.prototype.indexOf = function(node) {
	/// <param name="node" type="HTMLElement|String|Number"/>
	/// <returns type="Number" />
}
Ext.DataView.prototype.onBeforeLoad = function() {}
Ext.DataView.prototype.onDestroy = function() {}

Ext.ColorPalette.prototype = new Ext.Component;

Ext.ColorPalette.prototype.itemCls = "";
Ext.ColorPalette.prototype.value = null;
Ext.ColorPalette.prototype.clickEvent = "";
Ext.ColorPalette.prototype.ctype = "";
Ext.ColorPalette.prototype.allowReselect = false;
Ext.ColorPalette.prototype.colors = [];
Ext.ColorPalette.prototype.onRender = function(container, position) {
}
Ext.ColorPalette.prototype.afterRender = function() {}
Ext.ColorPalette.prototype.handleClick = function(e, t) {
}
Ext.ColorPalette.prototype.select = function(color) {
	/// <param name="color" type="String"/>
}

Ext.DatePicker.prototype = new Ext.Component;

Ext.DatePicker.prototype.todayText = "";
Ext.DatePicker.prototype.okText = "";
Ext.DatePicker.prototype.cancelText = "";
Ext.DatePicker.prototype.todayTip = "";
Ext.DatePicker.prototype.minText = "";
Ext.DatePicker.prototype.maxText = "";
Ext.DatePicker.prototype.format = "";
Ext.DatePicker.prototype.disabledDaysText = "";
Ext.DatePicker.prototype.disabledDatesText = "";
Ext.DatePicker.prototype.constrainToViewport = false;
Ext.DatePicker.prototype.monthNames = [];
Ext.DatePicker.prototype.dayNames = [];
Ext.DatePicker.prototype.nextText = "";
Ext.DatePicker.prototype.prevText = "";
Ext.DatePicker.prototype.monthYearText = "";
Ext.DatePicker.prototype.startDay = 0;
Ext.DatePicker.prototype.showToday = false;
Ext.DatePicker.prototype.initComponent = function() {}
Ext.DatePicker.prototype.initDisabledDays = function() {}
Ext.DatePicker.prototype.setDisabledDates = function(dd) {
	/// <param name="dd" type="Array|RegExp"/>
}
Ext.DatePicker.prototype.setDisabledDays = function(dd) {
	/// <param name="dd" type="Array"/>
}
Ext.DatePicker.prototype.setMinDate = function(dt) {
	/// <param name="dt" type="Date"/>
}
Ext.DatePicker.prototype.setMaxDate = function(dt) {
	/// <param name="dt" type="Date"/>
}
Ext.DatePicker.prototype.setValue = function(value) {
	/// <param name="value" type="Date"/>
}
Ext.DatePicker.prototype.getValue = function() {
	/// <returns type="Date" />
}
Ext.DatePicker.prototype.focus = function() {}
Ext.DatePicker.prototype.onRender = function(container, position) {
}
Ext.DatePicker.prototype.createMonthPicker = function() {}
Ext.DatePicker.prototype.showMonthPicker = function() {}
Ext.DatePicker.prototype.updateMPYear = function(y) {
}
Ext.DatePicker.prototype.updateMPMonth = function(sm) {
}
Ext.DatePicker.prototype.selectMPMonth = function(m) {
}
Ext.DatePicker.prototype.onMonthClick = function(e, t) {
}
Ext.DatePicker.prototype.onMonthDblClick = function(e, t) {
}
Ext.DatePicker.prototype.hideMonthPicker = function(disableAnim) {
}
Ext.DatePicker.prototype.showPrevMonth = function(e) {
}
Ext.DatePicker.prototype.showNextMonth = function(e) {
}
Ext.DatePicker.prototype.showPrevYear = function() {}
Ext.DatePicker.prototype.showNextYear = function() {}
Ext.DatePicker.prototype.handleMouseWheel = function(e) {
}
Ext.DatePicker.prototype.handleDateClick = function(e, t) {
}
Ext.DatePicker.prototype.selectToday = function() {}
Ext.DatePicker.prototype.update = function(date, forceRefresh) {
}
Ext.DatePicker.prototype.beforeDestroy = function() {}

Ext.TabPanel.prototype = new Ext.Panel;

Ext.TabPanel.prototype.monitorResize = false;
Ext.TabPanel.prototype.deferredRender = false;
Ext.TabPanel.prototype.tabWidth = 0;
Ext.TabPanel.prototype.minTabWidth = 0;
Ext.TabPanel.prototype.resizeTabs = false;
Ext.TabPanel.prototype.enableTabScroll = false;
Ext.TabPanel.prototype.scrollIncrement = 0;
Ext.TabPanel.prototype.scrollRepeatInterval = 0;
Ext.TabPanel.prototype.scrollDuration = 0;
Ext.TabPanel.prototype.animScroll = false;
Ext.TabPanel.prototype.tabPosition = "";
Ext.TabPanel.prototype.baseCls = "";
Ext.TabPanel.prototype.autoTabs = false;
Ext.TabPanel.prototype.autoTabSelector = "";
Ext.TabPanel.prototype.activeTab = null;
Ext.TabPanel.prototype.tabMargin = 0;
Ext.TabPanel.prototype.plain = false;
Ext.TabPanel.prototype.wheelIncrement = 0;
Ext.TabPanel.prototype.idDelimiter = "";
Ext.TabPanel.prototype.itemCls = "";
Ext.TabPanel.prototype.elements = "";
Ext.TabPanel.prototype.headerAsText = false;
Ext.TabPanel.prototype.frame = false;
Ext.TabPanel.prototype.hideBorders = false;
Ext.TabPanel.prototype.initComponent = function() {}
Ext.TabPanel.prototype.render = function() {}
Ext.TabPanel.prototype.onRender = function(ct, position) {
}
Ext.TabPanel.prototype.afterRender = function() {}
Ext.TabPanel.prototype.initEvents = function() {}
Ext.TabPanel.prototype.findTargets = function(e) {
}
Ext.TabPanel.prototype.onStripMouseDown = function(e) {
}
Ext.TabPanel.prototype.onStripContextMenu = function(e) {
}
Ext.TabPanel.prototype.readTabs = function(removeExisting) {
	/// <param name="removeExisting" type="Boolean"/>
}
Ext.TabPanel.prototype.initTab = function(item, index) {
}
Ext.TabPanel.prototype.onAdd = function(tp, item, index) {
}
Ext.TabPanel.prototype.onBeforeAdd = function(item) {
}
Ext.TabPanel.prototype.onRemove = function(tp, item) {
}
Ext.TabPanel.prototype.onBeforeShowItem = function(item) {
}
Ext.TabPanel.prototype.onItemDisabled = function(item) {
}
Ext.TabPanel.prototype.onItemEnabled = function(item) {
}
Ext.TabPanel.prototype.onItemTitleChanged = function(item) {
}
Ext.TabPanel.prototype.getTabEl = function(item) {
	/// <param name="item" type="Panel"/>
	/// <returns type="HTMLElement" />
}
Ext.TabPanel.prototype.onResize = function() {}
Ext.TabPanel.prototype.beginUpdate = function() {}
Ext.TabPanel.prototype.endUpdate = function() {}
Ext.TabPanel.prototype.hideTabStripItem = function(item) {
	/// <param name="item" type="Number|String|Panel"/>
}
Ext.TabPanel.prototype.unhideTabStripItem = function(item) {
	/// <param name="item" type="Number|String|Panel"/>
}
Ext.TabPanel.prototype.delegateUpdates = function() {}
Ext.TabPanel.prototype.autoSizeTabs = function() {}
Ext.TabPanel.prototype.adjustBodyWidth = function(w) {
}
Ext.TabPanel.prototype.setActiveTab = function(item) {
	/// <param name="item" type="String|Panel"/>
}
Ext.TabPanel.prototype.getActiveTab = function() {
	/// <returns type="Ext.Panel" />
}
Ext.TabPanel.prototype.getItem = function(item) {
	/// <param name="item" type="String"/>
	/// <returns type="Ext.Panel" />
}
Ext.TabPanel.prototype.autoScrollTabs = function() {}
Ext.TabPanel.prototype.createScrollers = function() {}
Ext.TabPanel.prototype.getScrollWidth = function() {}
Ext.TabPanel.prototype.getScrollPos = function() {}
Ext.TabPanel.prototype.getScrollArea = function() {}
Ext.TabPanel.prototype.getScrollAnim = function() {}
Ext.TabPanel.prototype.getScrollIncrement = function() {}
Ext.TabPanel.prototype.scrollToTab = function(item, animate) {
	/// <param name="item" type="Panel"/>
	/// <param name="animate" type="Boolean"/>
}
Ext.TabPanel.prototype.scrollTo = function(pos, animate) {
}
Ext.TabPanel.prototype.onWheel = function(e) {
}
Ext.TabPanel.prototype.onScrollRight = function() {}
Ext.TabPanel.prototype.onScrollLeft = function() {}
Ext.TabPanel.prototype.updateScrollButtons = function() {}
Ext.TabPanel.prototype.activate = function(item) {
	/// <param name="item" type="String|Panel"/>
}

Ext.Button.prototype = new Ext.Component;

Ext.Button.prototype.hidden = false;
Ext.Button.prototype.disabled = false;
Ext.Button.prototype.pressed = false;
Ext.Button.prototype.enableToggle = false;
Ext.Button.prototype.menuAlign = "";
Ext.Button.prototype.type = "";
Ext.Button.prototype.menuClassTarget = "";
Ext.Button.prototype.clickEvent = "";
Ext.Button.prototype.handleMouseEvents = false;
Ext.Button.prototype.tooltipType = "";
Ext.Button.prototype.buttonSelector = "";
Ext.Button.prototype.initComponent = function() {}
Ext.Button.prototype.onRender = function(ct, position) {
}
Ext.Button.prototype.initButtonEl = function(btn, btnEl) {
}
Ext.Button.prototype.afterRender = function() {}
Ext.Button.prototype.setIconClass = function(cls) {
	/// <param name="cls" type="String"/>
}
Ext.Button.prototype.beforeDestroy = function() {}
Ext.Button.prototype.onDestroy = function() {}
Ext.Button.prototype.autoWidth = function() {}
Ext.Button.prototype.setHandler = function(handler, scope) {
	/// <param name="handler" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
}
Ext.Button.prototype.setText = function(text) {
	/// <param name="text" type="String"/>
}
Ext.Button.prototype.getText = function() {
	/// <returns type="String" />
}
Ext.Button.prototype.toggle = function(state) {
	/// <param name="state" type="Boolean" optional="true"/>
}
Ext.Button.prototype.focus = function() {}
Ext.Button.prototype.onDisable = function() {}
Ext.Button.prototype.onEnable = function() {}
Ext.Button.prototype.showMenu = function() {}
Ext.Button.prototype.hideMenu = function() {}
Ext.Button.prototype.hasVisibleMenu = function() {
	/// <returns type="Boolean" />
}
Ext.Button.prototype.onClick = function(e) {
}
Ext.Button.prototype.isMenuTriggerOver = function(e, internal) {
}
Ext.Button.prototype.isMenuTriggerOut = function(e, internal) {
}
Ext.Button.prototype.onMouseOver = function(e) {
}
Ext.Button.prototype.monitorMouseOver = function(e) {
}
Ext.Button.prototype.onMouseOut = function(e) {
}
Ext.Button.prototype.onFocus = function(e) {
}
Ext.Button.prototype.onBlur = function(e) {
}
Ext.Button.prototype.getClickEl = function(e, isUp) {
}
Ext.Button.prototype.onMouseDown = function(e) {
}
Ext.Button.prototype.onMouseUp = function(e) {
}
Ext.Button.prototype.onMenuShow = function(e) {
}
Ext.Button.prototype.onMenuHide = function(e) {
}
Ext.Button.prototype.restoreClick = function() {}

Ext.MenuButton.prototype = new Ext.Button;

Ext.MenuButton.prototype.arrowSelector = "";
Ext.MenuButton.prototype.initComponent = function() {}
Ext.MenuButton.prototype.onRender = function(ct, position) {
}
Ext.MenuButton.prototype.autoWidth = function() {}
Ext.MenuButton.prototype.setArrowHandler = function(handler, scope) {
	/// <param name="handler" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
}
Ext.MenuButton.prototype.onClick = function(e) {
}
Ext.MenuButton.prototype.getClickEl = function(e, isUp) {
}
Ext.MenuButton.prototype.onDisable = function() {}
Ext.MenuButton.prototype.onEnable = function() {}
Ext.MenuButton.prototype.isMenuTriggerOver = function(e) {
}
Ext.MenuButton.prototype.isMenuTriggerOut = function(e, internal) {
}
Ext.MenuButton.prototype.onDestroy = function() {}

Ext.CycleButton.prototype = new Ext.MenuButton;

Ext.CycleButton.prototype.getItemText = function(item) {
}
Ext.CycleButton.prototype.setActiveItem = function(item, suppressEvent) {
	/// <param name="item" type="Ext.menu.CheckItem"/>
	/// <param name="suppressEvent" type="Boolean"/>
}
Ext.CycleButton.prototype.getActiveItem = function() {
	/// <returns type="Ext.menu.CheckItem" />
}
Ext.CycleButton.prototype.initComponent = function() {}
Ext.CycleButton.prototype.checkHandler = function(item, pressed) {
}
Ext.CycleButton.prototype.toggleSelected = function() {}

Ext.Toolbar.prototype = new Ext.BoxComponent;

Ext.Toolbar.prototype.trackMenus = false;
Ext.Toolbar.prototype.initComponent = function() {}
Ext.Toolbar.prototype.autoCreate = null;
Ext.Toolbar.prototype.onRender = function(ct, position) {
}
Ext.Toolbar.prototype.afterRender = function() {}
Ext.Toolbar.prototype.add = function(arg1, arg2, etc) {
	/// <param name="arg1" type="Mixed"/>
	/// <param name="arg2" type="Mixed"/>
	/// <param name="etc" type="Mixed"/>
}
Ext.Toolbar.prototype.addSeparator = function() {
	/// <returns type="Ext.Toolbar.Item" />
}
Ext.Toolbar.prototype.addSpacer = function() {
	/// <returns type="Ext.Toolbar.Spacer" />
}
Ext.Toolbar.prototype.addFill = function() {
	/// <returns type="Ext.Toolbar.Fill" />
}
Ext.Toolbar.prototype.addElement = function(el) {
	/// <param name="el" type="Mixed"/>
	/// <returns type="Ext.Toolbar.Item" />
}
Ext.Toolbar.prototype.addItem = function(item) {
	/// <param name="item" type="Ext.Toolbar.Item"/>
	/// <returns type="Ext.Toolbar.Item" />
}
Ext.Toolbar.prototype.addButton = function(config) {
	/// <param name="config" type="Object|Array"/>
	/// <returns type="Ext.Toolbar.Button" />
}
Ext.Toolbar.prototype.initMenuTracking = function(item) {
}
Ext.Toolbar.prototype.addText = function(text) {
	/// <param name="text" type="String"/>
	/// <returns type="Ext.Toolbar.Item" />
}
Ext.Toolbar.prototype.insertButton = function(index, item) {
	/// <param name="index" type="Number"/>
	/// <param name="item" type="Object|Ext.Toolbar.Item|Ext.Toolbar.Button|Array"/>
	/// <returns type="Ext.Toolbar.Button" />
}
Ext.Toolbar.prototype.addDom = function(config, returnEl) {
	/// <param name="config" type="Object"/>
	/// <returns type="Ext.Toolbar.Item" />
}
Ext.Toolbar.prototype.addField = function(field) {
	/// <param name="field" type="Ext.form.Field"/>
	/// <returns type="Ext.Toolbar.Item" />
}
Ext.Toolbar.prototype.nextBlock = function() {}
Ext.Toolbar.prototype.onDestroy = function() {}
Ext.Toolbar.prototype.onDisable = function() {}
Ext.Toolbar.prototype.onEnable = function() {}
Ext.Toolbar.prototype.onButtonTriggerOver = function(btn) {
}
Ext.Toolbar.prototype.onButtonMenuShow = function(btn) {
}
Ext.Toolbar.prototype.onButtonMenuHide = function(btn) {
}

Ext.Toolbar.Item.prototype = {
	getEl : function() {
	/// <returns type="HTMLElement" />
	},
	render : function(td) {
	},
	destroy : function() {	},
	show : function() {	},
	hide : function() {	},
	setVisible : function(visible) {
	/// <param name="visible" type="Boolean"/>
	},
	focus : function() {	},
	disable : function() {	},
	enable : function() {	},
	el : null,
	id : null,
	hidden : null
}

Ext.Toolbar.Separator.prototype = new Ext.Toolbar.Item;

Ext.Toolbar.Separator.prototype.enable = function() {}
Ext.Toolbar.Separator.prototype.disable = function() {}
Ext.Toolbar.Separator.prototype.focus = function() {}

Ext.Toolbar.Spacer.prototype = new Ext.Toolbar.Item;

Ext.Toolbar.Spacer.prototype.enable = function() {}
Ext.Toolbar.Spacer.prototype.disable = function() {}
Ext.Toolbar.Spacer.prototype.focus = function() {}

Ext.Toolbar.Fill.prototype = new Ext.Toolbar.Spacer;

Ext.Toolbar.Fill.prototype.render = function(td) {
}

Ext.Toolbar.TextItem.prototype = new Ext.Toolbar.Item;

Ext.Toolbar.TextItem.prototype.enable = function() {}
Ext.Toolbar.TextItem.prototype.disable = function() {}
Ext.Toolbar.TextItem.prototype.focus = function() {}

Ext.Toolbar.Button.prototype = new Ext.Button;

Ext.Toolbar.Button.prototype.hideParent = false;
Ext.Toolbar.Button.prototype.onDestroy = function() {}

Ext.Toolbar.MenuButton.prototype = new Ext.MenuButton;

Ext.Toolbar.MenuButton.prototype.hideParent = false;
Ext.Toolbar.MenuButton.prototype.onDestroy = function() {}

Ext.PagingToolbar.prototype = new Ext.Toolbar;

Ext.PagingToolbar.prototype.pageSize = 0;
Ext.PagingToolbar.prototype.displayMsg = "";
Ext.PagingToolbar.prototype.emptyMsg = "";
Ext.PagingToolbar.prototype.beforePageText = "";
Ext.PagingToolbar.prototype.afterPageText = "";
Ext.PagingToolbar.prototype.firstText = "";
Ext.PagingToolbar.prototype.prevText = "";
Ext.PagingToolbar.prototype.nextText = "";
Ext.PagingToolbar.prototype.lastText = "";
Ext.PagingToolbar.prototype.refreshText = "";
Ext.PagingToolbar.prototype.paramNames = null;
Ext.PagingToolbar.prototype.initComponent = function() {}
Ext.PagingToolbar.prototype.onRender = function(ct, position) {
}
Ext.PagingToolbar.prototype.updateInfo = function() {}
Ext.PagingToolbar.prototype.onLoad = function(store, r, o) {
}
Ext.PagingToolbar.prototype.getPageData = function() {}
Ext.PagingToolbar.prototype.onLoadError = function() {}
Ext.PagingToolbar.prototype.readPage = function(d) {
}
Ext.PagingToolbar.prototype.onPagingKeydown = function(e) {
}
Ext.PagingToolbar.prototype.beforeLoad = function() {}
Ext.PagingToolbar.prototype.doLoad = function(start) {
}
Ext.PagingToolbar.prototype.changePage = function(page) {
	/// <param name="page" type="Integer"/>
}
Ext.PagingToolbar.prototype.onClick = function(which) {
}
Ext.PagingToolbar.prototype.unbind = function(store) {
	/// <param name="store" type="Ext.data.Store"/>
}
Ext.PagingToolbar.prototype.bind = function(store) {
	/// <param name="store" type="Ext.data.Store"/>
}

Ext.Resizable.prototype = new Ext.util.Observable;

Ext.Resizable.prototype.resizeChild = false;
Ext.Resizable.prototype.adjustments = [];
Ext.Resizable.prototype.minWidth = 0;
Ext.Resizable.prototype.minHeight = 0;
Ext.Resizable.prototype.maxWidth = 0;
Ext.Resizable.prototype.maxHeight = 0;
Ext.Resizable.prototype.enabled = false;
Ext.Resizable.prototype.animate = false;
Ext.Resizable.prototype.duration = 0;
Ext.Resizable.prototype.dynamic = false;
Ext.Resizable.prototype.handles = false;
Ext.Resizable.prototype.multiDirectional = false;
Ext.Resizable.prototype.disableTrackOver = false;
Ext.Resizable.prototype.easing = "";
Ext.Resizable.prototype.widthIncrement = 0;
Ext.Resizable.prototype.heightIncrement = 0;
Ext.Resizable.prototype.pinned = false;
Ext.Resizable.prototype.width = null;
Ext.Resizable.prototype.height = null;
Ext.Resizable.prototype.preserveRatio = false;
Ext.Resizable.prototype.transparent = false;
Ext.Resizable.prototype.minX = 0;
Ext.Resizable.prototype.minY = 0;
Ext.Resizable.prototype.draggable = false;
Ext.Resizable.prototype.resizeTo = function(width, height) {
	/// <param name="width" type="Number"/>
	/// <param name="height" type="Number"/>
}
Ext.Resizable.prototype.startSizing = function(e, handle) {
}
Ext.Resizable.prototype.onMouseDown = function(handle, e) {
}
Ext.Resizable.prototype.onMouseUp = function(e) {
}
Ext.Resizable.prototype.updateChildSize = function() {}
Ext.Resizable.prototype.snap = function(value, inc, min) {
}
Ext.Resizable.prototype.resizeElement = function() {}
Ext.Resizable.prototype.constrain = function(v, diff, m, mx) {
}
Ext.Resizable.prototype.onMouseMove = function(e) {
}
Ext.Resizable.prototype.handleOver = function() {}
Ext.Resizable.prototype.handleOut = function() {}
Ext.Resizable.prototype.getEl = function() {
	/// <returns type="Ext.Element" />
}
Ext.Resizable.prototype.getResizeChild = function() {
	/// <returns type="Ext.Element" />
}
Ext.Resizable.prototype.destroy = function(removeEl) {
	/// <param name="removeEl" type="Boolean" optional="true"/>
}
Ext.Resizable.prototype.syncHandleHeight = function() {}
Ext.Resizable.prototype.el = null;
Ext.Resizable.prototype.proxy = null;
Ext.Resizable.prototype.corner = null;
Ext.Resizable.prototype.activeHandle = null;

Ext.Resizable.Handle.prototype = {
	afterResize : function(rz) {
	},
	onMouseDown : function(e) {
	},
	onMouseOver : function(e) {
	},
	onMouseOut : function(e) {
	},
	position : null,
	rz : null,
	el : null
}

Ext.Editor.prototype = new Ext.Component;

Ext.Editor.prototype.value = "";
Ext.Editor.prototype.alignment = "";
Ext.Editor.prototype.shadow = "";
Ext.Editor.prototype.constrain = false;
Ext.Editor.prototype.swallowKeys = false;
Ext.Editor.prototype.completeOnEnter = false;
Ext.Editor.prototype.cancelOnEsc = false;
Ext.Editor.prototype.updateEl = false;
Ext.Editor.prototype.initComponent = function() {}
Ext.Editor.prototype.onRender = function(ct, position) {
}
Ext.Editor.prototype.onSpecialKey = function(field, e) {
}
Ext.Editor.prototype.startEdit = function(el, value) {
	/// <param name="el" type="Mixed"/>
	/// <param name="value" type="String" optional="true"/>
}
Ext.Editor.prototype.doAutoSize = function() {}
Ext.Editor.prototype.setSize = function(w, h) {
	/// <param name="w" type="Number"/>
	/// <param name="h" type="Number"/>
}
Ext.Editor.prototype.realign = function() {}
Ext.Editor.prototype.completeEdit = function(remainVisible) {
	/// <param name="remainVisible" type="Boolean"/>
}
Ext.Editor.prototype.onShow = function() {}
Ext.Editor.prototype.deferredFocus = function() {}
Ext.Editor.prototype.cancelEdit = function(remainVisible) {
	/// <param name="remainVisible" type="Boolean"/>
}
Ext.Editor.prototype.onBlur = function() {}
Ext.Editor.prototype.onHide = function() {}
Ext.Editor.prototype.setValue = function(v) {
	/// <param name="v" type="Mixed"/>
}
Ext.Editor.prototype.getValue = function() {
	/// <returns type="Mixed" />
}
Ext.Editor.prototype.beforeDestroy = function() {}
Ext.Editor.prototype.field = null;

Ext.Tip.prototype = new Ext.Panel;

Ext.Tip.prototype.minWidth = 0;
Ext.Tip.prototype.maxWidth = 0;
Ext.Tip.prototype.shadow = "";
Ext.Tip.prototype.defaultAlign = "";
Ext.Tip.prototype.autoRender = false;
Ext.Tip.prototype.quickShowInterval = 0;
Ext.Tip.prototype.frame = false;
Ext.Tip.prototype.hidden = false;
Ext.Tip.prototype.baseCls = "";
Ext.Tip.prototype.floating = null;
Ext.Tip.prototype.autoHeight = false;
Ext.Tip.prototype.initComponent = function() {}
Ext.Tip.prototype.afterRender = function() {}
Ext.Tip.prototype.showAt = function(xy) {
	/// <param name="xy" type="Array"/>
}
Ext.Tip.prototype.doAutoWidth = function() {}
Ext.Tip.prototype.showBy = function(el, pos) {
	/// <param name="el" type="Mixed"/>
	/// <param name="pos" type="String" optional="true"/>
}
Ext.Tip.prototype.initDraggable = function() {}

Ext.ToolTip.prototype = new Ext.Tip;

Ext.ToolTip.prototype.showDelay = 0;
Ext.ToolTip.prototype.hideDelay = 0;
Ext.ToolTip.prototype.dismissDelay = 0;
Ext.ToolTip.prototype.mouseOffset = [];
Ext.ToolTip.prototype.trackMouse = false;
Ext.ToolTip.prototype.constrainPosition = false;
Ext.ToolTip.prototype.initComponent = function() {}
Ext.ToolTip.prototype.initTarget = function() {}
Ext.ToolTip.prototype.onMouseMove = function(e) {
}
Ext.ToolTip.prototype.getTargetXY = function() {}
Ext.ToolTip.prototype.onTargetOver = function(e) {
}
Ext.ToolTip.prototype.delayShow = function() {}
Ext.ToolTip.prototype.onTargetOut = function(e) {
}
Ext.ToolTip.prototype.delayHide = function() {}
Ext.ToolTip.prototype.hide = function() {}
Ext.ToolTip.prototype.show = function() {}
Ext.ToolTip.prototype.showAt = function(xy) {
}
Ext.ToolTip.prototype.clearTimer = function(name) {
}
Ext.ToolTip.prototype.clearTimers = function() {}
Ext.ToolTip.prototype.onShow = function() {}
Ext.ToolTip.prototype.onHide = function() {}
Ext.ToolTip.prototype.onDocMouseDown = function(e) {
}
Ext.ToolTip.prototype.onDisable = function() {}
Ext.ToolTip.prototype.adjustPosition = function(x, y) {
}
Ext.ToolTip.prototype.onDestroy = function() {}

Ext.QuickTip.prototype = new Ext.ToolTip;

Ext.QuickTip.prototype.interceptTitles = false;
Ext.QuickTip.prototype.tagConfig = null;
Ext.QuickTip.prototype.initComponent = function() {}
Ext.QuickTip.prototype.register = function(config) {
	/// <param name="config" type="Object"/>
}
Ext.QuickTip.prototype.unregister = function(el) {
	/// <param name="el" type="String|HTMLElement|Element"/>
}
Ext.QuickTip.prototype.onTargetOver = function(e) {
}
Ext.QuickTip.prototype.onTargetOut = function(e) {
}
Ext.QuickTip.prototype.showAt = function(xy) {
}
Ext.QuickTip.prototype.hide = function() {}

Ext.tree.TreePanel.prototype = new Ext.Panel;

Ext.tree.TreePanel.prototype.rootVisible = false;
Ext.tree.TreePanel.prototype.animate = false;
Ext.tree.TreePanel.prototype.lines = false;
Ext.tree.TreePanel.prototype.enableDD = false;
Ext.tree.TreePanel.prototype.hlDrop = false;
Ext.tree.TreePanel.prototype.pathSeparator = "";
Ext.tree.TreePanel.prototype.initComponent = function() {}
Ext.tree.TreePanel.prototype.proxyNodeEvent = function(ename, a1, a2, a3, a4, a5, a6) {
}
Ext.tree.TreePanel.prototype.getRootNode = function() {
	/// <returns type="Ext.data.Node" />
}
Ext.tree.TreePanel.prototype.setRootNode = function(node) {
	/// <param name="node" type="Node"/>
	/// <returns type="Ext.data.Node" />
}
Ext.tree.TreePanel.prototype.getNodeById = function(id) {
	/// <param name="id" type="String"/>
	/// <returns type="Ext.data.Node" />
}
Ext.tree.TreePanel.prototype.registerNode = function(node) {
}
Ext.tree.TreePanel.prototype.unregisterNode = function(node) {
}
Ext.tree.TreePanel.prototype.restrictExpand = function(node) {
}
Ext.tree.TreePanel.prototype.getChecked = function(a, startNode) {
	/// <param name="a" type="String" optional="true"/>
	/// <param name="startNode" type="TreeNode" optional="true"/>
	/// <returns type="Array" />
}
Ext.tree.TreePanel.prototype.getEl = function() {
	/// <returns type="Ext.Element" />
}
Ext.tree.TreePanel.prototype.getLoader = function() {
	/// <returns type="Ext.tree.TreeLoader" />
}
Ext.tree.TreePanel.prototype.expandAll = function() {}
Ext.tree.TreePanel.prototype.collapseAll = function() {}
Ext.tree.TreePanel.prototype.getSelectionModel = function() {
	/// <returns type="TreeSelectionModel" />
}
Ext.tree.TreePanel.prototype.expandPath = function(path, attr, callback) {
	/// <param name="path" type="String"/>
	/// <param name="attr" type="String" optional="true"/>
	/// <param name="callback" type="Function" optional="true"/>
}
Ext.tree.TreePanel.prototype.selectPath = function(path, attr, callback) {
	/// <param name="path" type="String"/>
	/// <param name="attr" type="String" optional="true"/>
	/// <param name="callback" type="Function" optional="true"/>
}
Ext.tree.TreePanel.prototype.getTreeEl = function() {
	/// <returns type="Ext.Element" />
}
Ext.tree.TreePanel.prototype.onRender = function(ct, position) {
}
Ext.tree.TreePanel.prototype.initEvents = function() {}
Ext.tree.TreePanel.prototype.afterRender = function() {}
Ext.tree.TreePanel.prototype.onDestroy = function() {}

Ext.tree.TreeNode.prototype = new Ext.data.Node;

Ext.tree.TreeNode.prototype.preventHScroll = false;
Ext.tree.TreeNode.prototype.isExpanded = function() {
	/// <returns type="Boolean" />
}
Ext.tree.TreeNode.prototype.getUI = function() {
	/// <returns type="Ext.tree.TreeNodeUI" />
}
Ext.tree.TreeNode.prototype.getLoader = function() {}
Ext.tree.TreeNode.prototype.setFirstChild = function(node) {
}
Ext.tree.TreeNode.prototype.setLastChild = function(node) {
}
Ext.tree.TreeNode.prototype.appendChild = function(n) {
}
Ext.tree.TreeNode.prototype.removeChild = function(node) {
}
Ext.tree.TreeNode.prototype.insertBefore = function(node, refNode) {
}
Ext.tree.TreeNode.prototype.setText = function(text) {
	/// <param name="text" type="String"/>
}
Ext.tree.TreeNode.prototype.select = function() {}
Ext.tree.TreeNode.prototype.unselect = function() {}
Ext.tree.TreeNode.prototype.isSelected = function() {
	/// <returns type="Boolean" />
}
Ext.tree.TreeNode.prototype.expand = function(deep, anim, callback) {
	/// <param name="deep" type="Boolean" optional="true"/>
	/// <param name="anim" type="Boolean" optional="true"/>
	/// <param name="callback" type="Function" optional="true"/>
}
Ext.tree.TreeNode.prototype.isHiddenRoot = function() {}
Ext.tree.TreeNode.prototype.collapse = function(deep, anim) {
	/// <param name="deep" type="Boolean" optional="true"/>
	/// <param name="anim" type="Boolean" optional="true"/>
}
Ext.tree.TreeNode.prototype.delayedExpand = function(delay) {
}
Ext.tree.TreeNode.prototype.cancelExpand = function() {}
Ext.tree.TreeNode.prototype.toggle = function() {}
Ext.tree.TreeNode.prototype.ensureVisible = function(callback) {
}
Ext.tree.TreeNode.prototype.expandChildNodes = function(deep) {
	/// <param name="deep" type="Boolean" optional="true"/>
}
Ext.tree.TreeNode.prototype.collapseChildNodes = function(deep) {
	/// <param name="deep" type="Boolean" optional="true"/>
}
Ext.tree.TreeNode.prototype.disable = function() {}
Ext.tree.TreeNode.prototype.enable = function() {}
Ext.tree.TreeNode.prototype.renderChildren = function(suppressEvent) {
}
Ext.tree.TreeNode.prototype.sort = function(fn, scope) {
}
Ext.tree.TreeNode.prototype.render = function(bulkRender) {
}
Ext.tree.TreeNode.prototype.renderIndent = function(deep, refresh) {
}
Ext.tree.TreeNode.prototype.beginUpdate = function() {}
Ext.tree.TreeNode.prototype.endUpdate = function() {}
Ext.tree.TreeNode.prototype.destroy = function() {}
Ext.tree.TreeNode.prototype.childrenRendered = null;
Ext.tree.TreeNode.prototype.rendered = null;
Ext.tree.TreeNode.prototype.expanded = null;
Ext.tree.TreeNode.prototype.isTarget = null;
Ext.tree.TreeNode.prototype.draggable = null;
Ext.tree.TreeNode.prototype.allowChildren = null;
Ext.tree.TreeNode.prototype.text = null;
Ext.tree.TreeNode.prototype.disabled = null;
Ext.tree.TreeNode.prototype.ui = null;

Ext.tree.AsyncTreeNode.prototype = new Ext.tree.TreeNode;

Ext.tree.AsyncTreeNode.prototype.expand = function(deep, anim, callback) {
}
Ext.tree.AsyncTreeNode.prototype.isLoading = function() {
	/// <returns type="Boolean" />
}
Ext.tree.AsyncTreeNode.prototype.loadComplete = function(deep, anim, callback) {
}
Ext.tree.AsyncTreeNode.prototype.isLoaded = function() {
	/// <returns type="Boolean" />
}
Ext.tree.AsyncTreeNode.prototype.hasChildNodes = function() {}
Ext.tree.AsyncTreeNode.prototype.reload = function(callback) {
	/// <param name="callback" type="Function"/>
}
Ext.tree.AsyncTreeNode.prototype.loaded = null;
Ext.tree.AsyncTreeNode.prototype.loading = null;

Ext.tree.TreeEventModel.prototype = {
	initEvents : function() {	},
	getNode : function(e) {
	},
	getNodeTarget : function(e) {
	},
	delegateOut : function(e, t) {
	},
	delegateOver : function(e, t) {
	},
	delegateClick : function(e, t) {
	},
	delegateDblClick : function(e, t) {
	},
	delegateContextMenu : function(e, t) {
	},
	onNodeClick : function(e, node) {
	},
	onNodeOver : function(e, node) {
	},
	onNodeOut : function(e, node) {
	},
	onIconOver : function(e, node) {
	},
	onIconOut : function(e, node) {
	},
	onIconClick : function(e, node) {
	},
	onCheckboxClick : function(e, node) {
	},
	onNodeDblClick : function(e, node) {
	},
	onNodeContextMenu : function(e, node) {
	},
	beforeEvent : function(e) {
	},
	disable : function() {	},
	enable : function() {	},
	tree : null
}

Ext.tree.DefaultSelectionModel.prototype = new Ext.util.Observable;

Ext.tree.DefaultSelectionModel.prototype.init = function(tree) {
}
Ext.tree.DefaultSelectionModel.prototype.onNodeClick = function(node, e) {
}
Ext.tree.DefaultSelectionModel.prototype.select = function(node) {
	/// <param name="node" type="TreeNode"/>
	/// <returns type="Ext.tree.TreeNode" />
}
Ext.tree.DefaultSelectionModel.prototype.unselect = function(node) {
	/// <param name="node" type="TreeNode"/>
}
Ext.tree.DefaultSelectionModel.prototype.clearSelections = function() {}
Ext.tree.DefaultSelectionModel.prototype.getSelectedNode = function() {
	/// <returns type="Ext.tree.TreeNode" />
}
Ext.tree.DefaultSelectionModel.prototype.isSelected = function(node) {
	/// <param name="node" type="TreeNode"/>
	/// <returns type="Boolean" />
}
Ext.tree.DefaultSelectionModel.prototype.selectPrevious = function() {}
Ext.tree.DefaultSelectionModel.prototype.selectNext = function() {}
Ext.tree.DefaultSelectionModel.prototype.onKeyDown = function(e) {
}
Ext.tree.DefaultSelectionModel.prototype.selNode = null;

Ext.tree.MultiSelectionModel.prototype = new Ext.util.Observable;

Ext.tree.MultiSelectionModel.prototype.init = function(tree) {
}
Ext.tree.MultiSelectionModel.prototype.onNodeClick = function(node, e) {
}
Ext.tree.MultiSelectionModel.prototype.select = function(node, e, keepExisting) {
	/// <param name="node" type="TreeNode"/>
	/// <param name="e" type="EventObject" optional="true"/>
	/// <param name="keepExisting" type="Boolean"/>
	/// <returns type="Ext.tree.TreeNode" />
}
Ext.tree.MultiSelectionModel.prototype.unselect = function(node) {
	/// <param name="node" type="TreeNode"/>
}
Ext.tree.MultiSelectionModel.prototype.clearSelections = function(suppressEvent) {
}
Ext.tree.MultiSelectionModel.prototype.isSelected = function(node) {
	/// <param name="node" type="TreeNode"/>
	/// <returns type="Boolean" />
}
Ext.tree.MultiSelectionModel.prototype.getSelectedNodes = function() {
	/// <returns type="Array" />
}
Ext.tree.MultiSelectionModel.prototype.onKeyDown = function(e) {
}
Ext.tree.MultiSelectionModel.prototype.selectNext = function() {}
Ext.tree.MultiSelectionModel.prototype.selectPrevious = function() {}
Ext.tree.MultiSelectionModel.prototype.selNodes = null;
Ext.tree.MultiSelectionModel.prototype.selMap = null;

Ext.tree.TreeNodeUI.prototype = {
	removeChild : function(node) {
	},
	beforeLoad : function() {	},
	afterLoad : function() {	},
	onTextChange : function(node, text, oldText) {
	},
	onDisableChange : function(node, state) {
	},
	onSelectedChange : function(state) {
	},
	onMove : function(tree, node, oldParent, newParent, index, refNode) {
	},
	addClass : function(cls) {
	/// <param name="cls" type="String|Array"/>
	},
	removeClass : function(cls) {
	/// <param name="cls" type="String|Array"/>
	},
	remove : function() {	},
	fireEvent : function() {	},
	initEvents : function() {	},
	getDDHandles : function() {	},
	hide : function() {	},
	show : function() {	},
	onContextMenu : function(e) {
	},
	onClick : function(e) {
	},
	onDblClick : function(e) {
	},
	onOver : function(e) {
	},
	onOut : function(e) {
	},
	onCheckChange : function() {	},
	ecClick : function(e) {
	},
	startDrop : function() {	},
	endDrop : function() {	},
	expand : function() {	},
	focus : function() {	},
	toggleCheck : function(value) {
	/// <param name="value" type="Boolean"/>
	},
	blur : function() {	},
	animExpand : function(callback) {
	},
	highlight : function() {	},
	collapse : function() {	},
	animCollapse : function(callback) {
	},
	getContainer : function() {	},
	getEl : function() {	},
	appendDDGhost : function(ghostNode) {
	},
	getDDRepairXY : function() {	},
	onRender : function() {	},
	render : function(bulkRender) {
	},
	renderElements : function(n, a, targetNode, bulkRender) {
	},
	getAnchor : function() {
	/// <returns type="HtmlElement" />
	},
	getTextEl : function() {
	/// <returns type="Ext.debug.HtmlNode" />
	},
	getIconEl : function() {
	/// <returns type="HtmlElement" />
	},
	isChecked : function() {
	/// <returns type="Boolean" />
	},
	updateExpandIcon : function() {	},
	getChildIndent : function() {	},
	renderIndent : function() {	},
	destroy : function() {	},
	node : null,
	rendered : null,
	animating : null,
	wasLeaf : null,
	ecc : null,
	emptyIcon : null
}

Ext.tree.RootTreeNodeUI.prototype = new Ext.tree.TreeNodeUI;

Ext.tree.RootTreeNodeUI.prototype.render = function() {}
Ext.tree.RootTreeNodeUI.prototype.collapse = function() {}
Ext.tree.RootTreeNodeUI.prototype.expand = function() {}

Ext.tree.TreeLoader.prototype = new Ext.util.Observable;

Ext.tree.TreeLoader.prototype.uiProviders = null;
Ext.tree.TreeLoader.prototype.clearOnLoad = false;
Ext.tree.TreeLoader.prototype.load = function(node, callback) {
	/// <param name="node" type="Ext.tree.TreeNode"/>
	/// <param name="callback" type="Function"/>
}
Ext.tree.TreeLoader.prototype.doPreload = function(node) {
}
Ext.tree.TreeLoader.prototype.getParams = function(node) {
}
Ext.tree.TreeLoader.prototype.requestData = function(node, callback) {
}
Ext.tree.TreeLoader.prototype.isLoading = function() {}
Ext.tree.TreeLoader.prototype.abort = function() {}
Ext.tree.TreeLoader.prototype.createNode = function(attr) {
}
Ext.tree.TreeLoader.prototype.processResponse = function(response, node, callback) {
}
Ext.tree.TreeLoader.prototype.handleResponse = function(response) {
}
Ext.tree.TreeLoader.prototype.handleFailure = function(response) {
}
Ext.tree.TreeLoader.prototype.baseParams = null;

Ext.tree.TreeFilter.prototype = {
	clearBlank : false,
	reverse : false,
	autoClear : false,
	remove : false,
	filter : function(value, attr, startNode) {
	/// <param name="value" type="String|RegExp"/>
	/// <param name="attr" type="String" optional="true"/>
	/// <param name="startNode" type="TreeNode" optional="true"/>
	},
	filterBy : function(fn, scope, startNode) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	},
	clear : function() {	},
	tree : null,
	filtered : null
}

Ext.tree.TreeSorter.prototype = {
	doSort : function(node) {
	},
	compareNodes : function(n1, n2) {
	},
	updateSort : function(tree, node) {
	},
	updateSortParent : function(node) {
	},
	sortFn : function(n1, n2) {
	}
}

Ext.tree.TreeDropZone.prototype = new Ext.dd.DropZone;

Ext.tree.TreeDropZone.prototype.ddGroup = "";
Ext.tree.TreeDropZone.prototype.expandDelay = 0;
Ext.tree.TreeDropZone.prototype.expandNode = function(node) {
}
Ext.tree.TreeDropZone.prototype.queueExpand = function(node) {
}
Ext.tree.TreeDropZone.prototype.cancelExpand = function() {}
Ext.tree.TreeDropZone.prototype.isValidDropPoint = function(n, pt, dd, e, data) {
}
Ext.tree.TreeDropZone.prototype.getDropPoint = function(e, n, dd) {
}
Ext.tree.TreeDropZone.prototype.onNodeEnter = function(n, dd, e, data) {
}
Ext.tree.TreeDropZone.prototype.onNodeOver = function(n, dd, e, data) {
}
Ext.tree.TreeDropZone.prototype.onNodeOut = function(n, dd, e, data) {
}
Ext.tree.TreeDropZone.prototype.onNodeDrop = function(n, dd, e, data) {
}
Ext.tree.TreeDropZone.prototype.completeDrop = function(de) {
}
Ext.tree.TreeDropZone.prototype.afterNodeMoved = function(dd, data, e, targetNode, dropNode) {
}
Ext.tree.TreeDropZone.prototype.getTree = function() {}
Ext.tree.TreeDropZone.prototype.removeDropIndicators = function(n) {
}
Ext.tree.TreeDropZone.prototype.beforeDragDrop = function(target, e, id) {
}
Ext.tree.TreeDropZone.prototype.afterRepair = function(data) {
}
Ext.tree.TreeDropZone.prototype.allowParentInsert = null;
Ext.tree.TreeDropZone.prototype.allowContainerDrop = null;
Ext.tree.TreeDropZone.prototype.appendOnly = null;
Ext.tree.TreeDropZone.prototype.tree = null;
Ext.tree.TreeDropZone.prototype.dragOverData = null;
Ext.tree.TreeDropZone.prototype.lastInsertClass = null;

Ext.tree.TreeDragZone.prototype = new Ext.dd.DragZone;

Ext.tree.TreeDragZone.prototype.ddGroup = "";
Ext.tree.TreeDragZone.prototype.onBeforeDrag = function(data, e) {
}
Ext.tree.TreeDragZone.prototype.onInitDrag = function(e) {
}
Ext.tree.TreeDragZone.prototype.getRepairXY = function(e, data) {
}
Ext.tree.TreeDragZone.prototype.onEndDrag = function(data, e) {
}
Ext.tree.TreeDragZone.prototype.onValidDrop = function(dd, e, id) {
}
Ext.tree.TreeDragZone.prototype.beforeInvalidDrop = function(e, id) {
}
Ext.tree.TreeDragZone.prototype.afterRepair = function() {}
Ext.tree.TreeDragZone.prototype.tree = null;

Ext.tree.TreeEditor.prototype = new Ext.Editor;

Ext.tree.TreeEditor.prototype.alignment = "";
Ext.tree.TreeEditor.prototype.autoSize = false;
Ext.tree.TreeEditor.prototype.hideEl = false;
Ext.tree.TreeEditor.prototype.cls = "";
Ext.tree.TreeEditor.prototype.shim = false;
Ext.tree.TreeEditor.prototype.shadow = "";
Ext.tree.TreeEditor.prototype.maxWidth = 0;
Ext.tree.TreeEditor.prototype.editDelay = 0;
Ext.tree.TreeEditor.prototype.initEditor = function(tree) {
}
Ext.tree.TreeEditor.prototype.fitToTree = function(ed, el) {
}
Ext.tree.TreeEditor.prototype.triggerEdit = function(node, defer) {
}
Ext.tree.TreeEditor.prototype.bindScroll = function() {}
Ext.tree.TreeEditor.prototype.beforeNodeClick = function(node, e) {
}
Ext.tree.TreeEditor.prototype.onNodeDblClick = function(node, e) {
}
Ext.tree.TreeEditor.prototype.updateNode = function(ed, value) {
}
Ext.tree.TreeEditor.prototype.onHide = function() {}
Ext.tree.TreeEditor.prototype.onSpecialKey = function(field, e) {
}
Ext.tree.TreeEditor.prototype.tree = null;

Ext.menu.Menu.prototype = new Ext.util.Observable;

Ext.menu.Menu.prototype.minWidth = 0;
Ext.menu.Menu.prototype.shadow = "";
Ext.menu.Menu.prototype.subMenuAlign = "";
Ext.menu.Menu.prototype.defaultAlign = "";
Ext.menu.Menu.prototype.allowOtherMenus = false;
Ext.menu.Menu.prototype.ignoreParentClicks = false;
Ext.menu.Menu.prototype.hidden = false;
Ext.menu.Menu.prototype.createEl = function() {}
Ext.menu.Menu.prototype.render = function() {}
Ext.menu.Menu.prototype.autoWidth = function() {}
Ext.menu.Menu.prototype.delayAutoWidth = function() {}
Ext.menu.Menu.prototype.findTargetItem = function(e) {
}
Ext.menu.Menu.prototype.onClick = function(e) {
}
Ext.menu.Menu.prototype.setActiveItem = function(item, autoExpand) {
}
Ext.menu.Menu.prototype.tryActivate = function(start, step) {
}
Ext.menu.Menu.prototype.onMouseOver = function(e) {
}
Ext.menu.Menu.prototype.onMouseOut = function(e) {
}
Ext.menu.Menu.prototype.isVisible = function() {
	/// <returns type="Boolean" />
}
Ext.menu.Menu.prototype.show = function(el, pos, parentMenu) {
	/// <param name="el" type="Mixed"/>
	/// <param name="pos" type="String" optional="true"/>
	/// <param name="parentMenu" type="Ext.menu.Menu" optional="true"/>
}
Ext.menu.Menu.prototype.showAt = function(xy, parentMenu, _e) {
	/// <param name="xy" type="Array"/>
	/// <param name="parentMenu" type="Ext.menu.Menu" optional="true"/>
}
Ext.menu.Menu.prototype.focus = function() {}
Ext.menu.Menu.prototype.doFocus = function() {}
Ext.menu.Menu.prototype.hide = function(deep) {
	/// <param name="deep" type="Boolean" optional="true"/>
}
Ext.menu.Menu.prototype.add = function(args) {
	/// <param name="args" type="Mixed"/>
	/// <returns type="Ext.menu.Item" />
}
Ext.menu.Menu.prototype.getEl = function() {
	/// <returns type="Ext.Element" />
}
Ext.menu.Menu.prototype.addSeparator = function() {
	/// <returns type="Ext.menu.Item" />
}
Ext.menu.Menu.prototype.addElement = function(el) {
	/// <param name="el" type="Mixed"/>
	/// <returns type="Ext.menu.Item" />
}
Ext.menu.Menu.prototype.addItem = function(item) {
	/// <param name="item" type="Ext.menu.Item"/>
	/// <returns type="Ext.menu.Item" />
}
Ext.menu.Menu.prototype.addMenuItem = function(config) {
	/// <param name="config" type="Object"/>
	/// <returns type="Ext.menu.Item" />
}
Ext.menu.Menu.prototype.addText = function(text) {
	/// <param name="text" type="String"/>
	/// <returns type="Ext.menu.Item" />
}
Ext.menu.Menu.prototype.insert = function(index, item) {
	/// <param name="index" type="Number"/>
	/// <param name="item" type="Ext.menu.Item"/>
	/// <returns type="Ext.menu.Item" />
}
Ext.menu.Menu.prototype.remove = function(item) {
	/// <param name="item" type="Ext.menu.Item"/>
}
Ext.menu.Menu.prototype.removeAll = function() {}
Ext.menu.Menu.prototype.destroy = function() {}
Ext.menu.Menu.prototype.beforeDestroy = function() {}
Ext.menu.Menu.prototype.id = null;
Ext.menu.Menu.prototype.items = null;

Ext.menu.MenuNav.prototype = new Ext.KeyNav;

Ext.menu.MenuNav.prototype.doRelay = function(e, h) {
}
Ext.menu.MenuNav.prototype.up = function(e, m) {
}
Ext.menu.MenuNav.prototype.down = function(e, m) {
}
Ext.menu.MenuNav.prototype.right = function(e, m) {
}
Ext.menu.MenuNav.prototype.left = function(e, m) {
}
Ext.menu.MenuNav.prototype.enter = function(e, m) {
}
Ext.menu.MenuNav.prototype.scope = null;
Ext.menu.MenuNav.prototype.menu = null;

Ext.menu.BaseItem.prototype = new Ext.Component;

Ext.menu.BaseItem.prototype.canActivate = false;
Ext.menu.BaseItem.prototype.activeClass = "";
Ext.menu.BaseItem.prototype.hideOnClick = false;
Ext.menu.BaseItem.prototype.hideDelay = 0;
Ext.menu.BaseItem.prototype.ctype = "";
Ext.menu.BaseItem.prototype.actionMode = "";
Ext.menu.BaseItem.prototype.render = function(container, parentMenu) {
}
Ext.menu.BaseItem.prototype.onRender = function(container, position) {
}
Ext.menu.BaseItem.prototype.setHandler = function(handler, scope) {
	/// <param name="handler" type="Function"/>
	/// <param name="scope" type="Object"/>
}
Ext.menu.BaseItem.prototype.onClick = function(e) {
}
Ext.menu.BaseItem.prototype.activate = function() {}
Ext.menu.BaseItem.prototype.deactivate = function() {}
Ext.menu.BaseItem.prototype.shouldDeactivate = function(e) {
}
Ext.menu.BaseItem.prototype.handleClick = function(e) {
}
Ext.menu.BaseItem.prototype.expandMenu = function(autoActivate) {
}
Ext.menu.BaseItem.prototype.hideMenu = function() {}

Ext.menu.TextItem.prototype = new Ext.menu.BaseItem;

Ext.menu.TextItem.prototype.hideOnClick = false;
Ext.menu.TextItem.prototype.itemCls = "";
Ext.menu.TextItem.prototype.onRender = function() {}

Ext.menu.Separator.prototype = new Ext.menu.BaseItem;

Ext.menu.Separator.prototype.itemCls = "";
Ext.menu.Separator.prototype.hideOnClick = false;
Ext.menu.Separator.prototype.onRender = function(li) {
}

Ext.menu.Item.prototype = new Ext.menu.BaseItem;

Ext.menu.Item.prototype.itemCls = "";
Ext.menu.Item.prototype.canActivate = false;
Ext.menu.Item.prototype.showDelay = 0;
Ext.menu.Item.prototype.hideDelay = 0;
Ext.menu.Item.prototype.ctype = "";
Ext.menu.Item.prototype.onRender = function(container, position) {
}
Ext.menu.Item.prototype.setText = function(text) {
	/// <param name="text" type="String"/>
}
Ext.menu.Item.prototype.setIconClass = function(cls) {
	/// <param name="cls" type="String"/>
}
Ext.menu.Item.prototype.handleClick = function(e) {
}
Ext.menu.Item.prototype.activate = function(autoExpand) {
}
Ext.menu.Item.prototype.shouldDeactivate = function(e) {
}
Ext.menu.Item.prototype.deactivate = function() {}
Ext.menu.Item.prototype.expandMenu = function(autoActivate) {
}
Ext.menu.Item.prototype.deferExpand = function(autoActivate) {
}
Ext.menu.Item.prototype.hideMenu = function() {}
Ext.menu.Item.prototype.deferHide = function() {}

Ext.menu.CheckItem.prototype = new Ext.menu.Item;

Ext.menu.CheckItem.prototype.itemCls = "";
Ext.menu.CheckItem.prototype.groupClass = "";
Ext.menu.CheckItem.prototype.checked = false;
Ext.menu.CheckItem.prototype.ctype = "";
Ext.menu.CheckItem.prototype.onRender = function(c) {
}
Ext.menu.CheckItem.prototype.destroy = function() {}
Ext.menu.CheckItem.prototype.setChecked = function(state, suppressEvent) {
	/// <param name="state" type="Boolean"/>
	/// <param name="suppressEvent" type="Boolean" optional="true"/>
}
Ext.menu.CheckItem.prototype.handleClick = function(e) {
}

Ext.menu.Adapter.prototype = new Ext.menu.BaseItem;

Ext.menu.Adapter.prototype.canActivate = false;
Ext.menu.Adapter.prototype.onRender = function(container, position) {
}
Ext.menu.Adapter.prototype.activate = function() {}
Ext.menu.Adapter.prototype.deactivate = function() {}
Ext.menu.Adapter.prototype.disable = function() {}
Ext.menu.Adapter.prototype.enable = function() {}
Ext.menu.Adapter.prototype.component = null;

Ext.menu.DateItem.prototype = new Ext.menu.Adapter;

Ext.menu.DateItem.prototype.onSelect = function(picker, date) {
}
Ext.menu.DateItem.prototype.picker = null;

Ext.menu.ColorItem.prototype = new Ext.menu.Adapter;

Ext.menu.ColorItem.prototype.palette = null;

Ext.menu.DateMenu.prototype = new Ext.menu.Menu;

Ext.menu.DateMenu.prototype.cls = "";
Ext.menu.DateMenu.prototype.beforeDestroy = function() {}
Ext.menu.DateMenu.prototype.plain = null;
Ext.menu.DateMenu.prototype.picker = null;

Ext.menu.ColorMenu.prototype = new Ext.menu.Menu;

Ext.menu.ColorMenu.prototype.plain = null;
Ext.menu.ColorMenu.prototype.palette = null;

Ext.form.Field.prototype = new Ext.BoxComponent;

Ext.form.Field.prototype.invalidClass = "";
Ext.form.Field.prototype.invalidText = "";
Ext.form.Field.prototype.focusClass = "";
Ext.form.Field.prototype.validationEvent = "";
Ext.form.Field.prototype.validateOnBlur = false;
Ext.form.Field.prototype.validationDelay = 0;
Ext.form.Field.prototype.defaultAutoCreate = null;
Ext.form.Field.prototype.fieldClass = "";
Ext.form.Field.prototype.msgTarget = "";
Ext.form.Field.prototype.msgFx = "";
Ext.form.Field.prototype.readOnly = false;
Ext.form.Field.prototype.disabled = false;
Ext.form.Field.prototype.isFormField = false;
Ext.form.Field.prototype.hasFocus = false;
Ext.form.Field.prototype.initComponent = function() {}
Ext.form.Field.prototype.getName = function() {
	/// <returns type="String" />
}
Ext.form.Field.prototype.onRender = function(ct, position) {
}
Ext.form.Field.prototype.initValue = function() {}
Ext.form.Field.prototype.isDirty = function() {}
Ext.form.Field.prototype.afterRender = function() {}
Ext.form.Field.prototype.fireKey = function(e) {
}
Ext.form.Field.prototype.reset = function() {}
Ext.form.Field.prototype.initEvents = function() {}
Ext.form.Field.prototype.onFocus = function() {}
Ext.form.Field.prototype.beforeBlur = function() {}
Ext.form.Field.prototype.onBlur = function() {}
Ext.form.Field.prototype.isValid = function(preventMark) {
	/// <param name="preventMark" type="Boolean"/>
	/// <returns type="Boolean" />
}
Ext.form.Field.prototype.validate = function() {
	/// <returns type="Boolean" />
}
Ext.form.Field.prototype.processValue = function(value) {
}
Ext.form.Field.prototype.validateValue = function(value) {
}
Ext.form.Field.prototype.markInvalid = function(msg) {
	/// <param name="msg" type="String" optional="true"/>
}
Ext.form.Field.prototype.getErrorCt = function() {}
Ext.form.Field.prototype.alignErrorIcon = function() {}
Ext.form.Field.prototype.clearInvalid = function() {}
Ext.form.Field.prototype.getRawValue = function() {
	/// <returns type="Mixed" />
}
Ext.form.Field.prototype.getValue = function() {
	/// <returns type="Mixed" />
}
Ext.form.Field.prototype.setRawValue = function(v) {
	/// <param name="v" type="Mixed"/>
	/// <returns type="Mixed" />
}
Ext.form.Field.prototype.setValue = function(v) {
	/// <param name="v" type="Mixed"/>
}
Ext.form.Field.prototype.adjustSize = function(w, h) {
}
Ext.form.Field.prototype.adjustWidth = function(tag, w) {
}

Ext.form.TextField.prototype = new Ext.form.Field;

Ext.form.TextField.prototype.grow = false;
Ext.form.TextField.prototype.growMin = 0;
Ext.form.TextField.prototype.growMax = 0;
Ext.form.TextField.prototype.vtype = null;
Ext.form.TextField.prototype.maskRe = null;
Ext.form.TextField.prototype.disableKeyFilter = false;
Ext.form.TextField.prototype.allowBlank = false;
Ext.form.TextField.prototype.minLength = 0;
Ext.form.TextField.prototype.maxLength = null;
Ext.form.TextField.prototype.minLengthText = "";
Ext.form.TextField.prototype.maxLengthText = "";
Ext.form.TextField.prototype.selectOnFocus = false;
Ext.form.TextField.prototype.blankText = "";
Ext.form.TextField.prototype.validator = null;
Ext.form.TextField.prototype.regex = null;
Ext.form.TextField.prototype.regexText = "";
Ext.form.TextField.prototype.emptyText = null;
Ext.form.TextField.prototype.emptyClass = "";
Ext.form.TextField.prototype.initComponent = function() {}
Ext.form.TextField.prototype.initEvents = function() {}
Ext.form.TextField.prototype.processValue = function(value) {
}
Ext.form.TextField.prototype.filterValidation = function(e) {
}
Ext.form.TextField.prototype.onKeyUpBuffered = function(e) {
}
Ext.form.TextField.prototype.onKeyUp = function(e) {
}
Ext.form.TextField.prototype.onKeyDown = function(e) {
}
Ext.form.TextField.prototype.onKeyPress = function(e) {
}
Ext.form.TextField.prototype.reset = function() {}
Ext.form.TextField.prototype.applyEmptyText = function() {}
Ext.form.TextField.prototype.preFocus = function() {}
Ext.form.TextField.prototype.postBlur = function() {}
Ext.form.TextField.prototype.filterKeys = function(e) {
}
Ext.form.TextField.prototype.setValue = function(v) {
}
Ext.form.TextField.prototype.validateValue = function(value) {
	/// <param name="value" type="Mixed"/>
	/// <returns type="Boolean" />
}
Ext.form.TextField.prototype.selectText = function(start, end) {
	/// <param name="start" type="Number" optional="true"/>
	/// <param name="end" type="Number" optional="true"/>
}
Ext.form.TextField.prototype.autoSize = function() {}

Ext.form.TriggerField.prototype = new Ext.form.TextField;

Ext.form.TriggerField.prototype.defaultAutoCreate = null;
Ext.form.TriggerField.prototype.hideTrigger = false;
Ext.form.TriggerField.prototype.autoSize = function() {}
Ext.form.TriggerField.prototype.monitorTab = false;
Ext.form.TriggerField.prototype.deferHeight = false;
Ext.form.TriggerField.prototype.mimicing = false;
Ext.form.TriggerField.prototype.onResize = function(w, h) {
}
Ext.form.TriggerField.prototype.adjustSize = function(w, h) {
}
Ext.form.TriggerField.prototype.getResizeEl = function() {}
Ext.form.TriggerField.prototype.getPositionEl = function() {}
Ext.form.TriggerField.prototype.alignErrorIcon = function() {}
Ext.form.TriggerField.prototype.onRender = function(ct, position) {
}
Ext.form.TriggerField.prototype.afterRender = function() {}
Ext.form.TriggerField.prototype.initTrigger = function() {}
Ext.form.TriggerField.prototype.onDestroy = function() {}
Ext.form.TriggerField.prototype.onFocus = function() {}
Ext.form.TriggerField.prototype.checkTab = function(e) {
}
Ext.form.TriggerField.prototype.onBlur = function() {}
Ext.form.TriggerField.prototype.mimicBlur = function(e) {
}
Ext.form.TriggerField.prototype.triggerBlur = function() {}
Ext.form.TriggerField.prototype.beforeBlur = function() {}
Ext.form.TriggerField.prototype.validateBlur = function(e) {
}
Ext.form.TriggerField.prototype.onDisable = function() {}
Ext.form.TriggerField.prototype.onEnable = function() {}
Ext.form.TriggerField.prototype.onShow = function() {}
Ext.form.TriggerField.prototype.onHide = function() {}
Ext.form.TriggerField.prototype.onTriggerClick = function(e) {
	/// <param name="e" type="EventObject"/>
}

Ext.form.TwinTriggerField.prototype = new Ext.form.TriggerField;

Ext.form.TwinTriggerField.prototype.initComponent = function() {}
Ext.form.TwinTriggerField.prototype.getTrigger = function(index) {
}
Ext.form.TwinTriggerField.prototype.initTrigger = function() {}
Ext.form.TwinTriggerField.prototype.onTrigger1Click = function() {}
Ext.form.TwinTriggerField.prototype.onTrigger2Click = function() {}

Ext.form.TextArea.prototype = new Ext.form.TextField;

Ext.form.TextArea.prototype.growMin = 0;
Ext.form.TextArea.prototype.growMax = 0;
Ext.form.TextArea.prototype.growAppend = "";
Ext.form.TextArea.prototype.growPad = 0;
Ext.form.TextArea.prototype.enterIsSpecial = false;
Ext.form.TextArea.prototype.preventScrollbars = false;
Ext.form.TextArea.prototype.onRender = function(ct, position) {
}
Ext.form.TextArea.prototype.onDestroy = function() {}
Ext.form.TextArea.prototype.fireKey = function(e) {
}
Ext.form.TextArea.prototype.onKeyUp = function(e) {
}
Ext.form.TextArea.prototype.autoSize = function() {}

Ext.form.NumberField.prototype = new Ext.form.TextField;

Ext.form.NumberField.prototype.fieldClass = "";
Ext.form.NumberField.prototype.allowDecimals = false;
Ext.form.NumberField.prototype.decimalSeparator = "";
Ext.form.NumberField.prototype.decimalPrecision = 0;
Ext.form.NumberField.prototype.allowNegative = false;
Ext.form.NumberField.prototype.minValue = null;
Ext.form.NumberField.prototype.maxValue = null;
Ext.form.NumberField.prototype.minText = "";
Ext.form.NumberField.prototype.maxText = "";
Ext.form.NumberField.prototype.nanText = "";
Ext.form.NumberField.prototype.baseChars = "";
Ext.form.NumberField.prototype.initEvents = function() {}
Ext.form.NumberField.prototype.validateValue = function(value) {
}
Ext.form.NumberField.prototype.getValue = function() {}
Ext.form.NumberField.prototype.setValue = function(v) {
}
Ext.form.NumberField.prototype.parseValue = function(value) {
}
Ext.form.NumberField.prototype.fixPrecision = function(value) {
}
Ext.form.NumberField.prototype.beforeBlur = function() {}

Ext.form.DateField.prototype = new Ext.form.TriggerField;

Ext.form.DateField.prototype.format = "";
Ext.form.DateField.prototype.altFormats = "";
Ext.form.DateField.prototype.disabledDaysText = "";
Ext.form.DateField.prototype.disabledDatesText = "";
Ext.form.DateField.prototype.minText = "";
Ext.form.DateField.prototype.maxText = "";
Ext.form.DateField.prototype.invalidText = "";
Ext.form.DateField.prototype.triggerClass = "";
Ext.form.DateField.prototype.showToday = false;
Ext.form.DateField.prototype.defaultAutoCreate = null;
Ext.form.DateField.prototype.initComponent = function() {}
Ext.form.DateField.prototype.initDisabledDays = function() {}
Ext.form.DateField.prototype.setDisabledDates = function(dd) {
	/// <param name="dd" type="Array"/>
}
Ext.form.DateField.prototype.setDisabledDays = function(dd) {
	/// <param name="dd" type="Array"/>
}
Ext.form.DateField.prototype.setMinValue = function(dt) {
	/// <param name="dt" type="Date"/>
}
Ext.form.DateField.prototype.setMaxValue = function(dt) {
	/// <param name="dt" type="Date"/>
}
Ext.form.DateField.prototype.validateValue = function(value) {
}
Ext.form.DateField.prototype.validateBlur = function() {}
Ext.form.DateField.prototype.getValue = function() {
	/// <returns type="Date" />
}
Ext.form.DateField.prototype.setValue = function(date) {
	/// <param name="date" type="String|Date"/>
}
Ext.form.DateField.prototype.parseDate = function(value) {
}
Ext.form.DateField.prototype.onDestroy = function() {}
Ext.form.DateField.prototype.formatDate = function(date) {
}
Ext.form.DateField.prototype.menuListeners = null;
Ext.form.DateField.prototype.onTriggerClick = function() {}
Ext.form.DateField.prototype.beforeBlur = function() {}

Ext.form.ComboBox.prototype = new Ext.form.TriggerField;

Ext.form.ComboBox.prototype.defaultAutoCreate = null;
Ext.form.ComboBox.prototype.listClass = "";
Ext.form.ComboBox.prototype.selectedClass = "";
Ext.form.ComboBox.prototype.triggerClass = "";
Ext.form.ComboBox.prototype.shadow = "";
Ext.form.ComboBox.prototype.listAlign = "";
Ext.form.ComboBox.prototype.maxHeight = 0;
Ext.form.ComboBox.prototype.minHeight = 0;
Ext.form.ComboBox.prototype.triggerAction = "";
Ext.form.ComboBox.prototype.minChars = 0;
Ext.form.ComboBox.prototype.typeAhead = false;
Ext.form.ComboBox.prototype.queryDelay = 0;
Ext.form.ComboBox.prototype.pageSize = 0;
Ext.form.ComboBox.prototype.selectOnFocus = false;
Ext.form.ComboBox.prototype.queryParam = "";
Ext.form.ComboBox.prototype.loadingText = "";
Ext.form.ComboBox.prototype.resizable = false;
Ext.form.ComboBox.prototype.handleHeight = 0;
Ext.form.ComboBox.prototype.editable = false;
Ext.form.ComboBox.prototype.allQuery = "";
Ext.form.ComboBox.prototype.mode = "";
Ext.form.ComboBox.prototype.minListWidth = 0;
Ext.form.ComboBox.prototype.forceSelection = false;
Ext.form.ComboBox.prototype.typeAheadDelay = 0;
Ext.form.ComboBox.prototype.lazyInit = false;
Ext.form.ComboBox.prototype.initComponent = function() {}
Ext.form.ComboBox.prototype.onRender = function(ct, position) {
}
Ext.form.ComboBox.prototype.initValue = function() {}
Ext.form.ComboBox.prototype.initList = function() {}
Ext.form.ComboBox.prototype.bindStore = function(store, initial) {
}
Ext.form.ComboBox.prototype.initEvents = function() {}
Ext.form.ComboBox.prototype.onDestroy = function() {}
Ext.form.ComboBox.prototype.unsetDelayCheck = function() {}
Ext.form.ComboBox.prototype.fireKey = function(e) {
}
Ext.form.ComboBox.prototype.onResize = function(w, h) {
}
Ext.form.ComboBox.prototype.onEnable = function() {}
Ext.form.ComboBox.prototype.onDisable = function() {}
Ext.form.ComboBox.prototype.setEditable = function(value) {
	/// <param name="value" type="Boolean"/>
}
Ext.form.ComboBox.prototype.onBeforeLoad = function() {}
Ext.form.ComboBox.prototype.onLoad = function() {}
Ext.form.ComboBox.prototype.onTypeAhead = function() {}
Ext.form.ComboBox.prototype.onSelect = function(record, index) {
}
Ext.form.ComboBox.prototype.getValue = function() {
	/// <returns type="String" />
}
Ext.form.ComboBox.prototype.clearValue = function() {}
Ext.form.ComboBox.prototype.setValue = function(v) {
	/// <param name="v" type="String"/>
}
Ext.form.ComboBox.prototype.findRecord = function(prop, value) {
}
Ext.form.ComboBox.prototype.onViewMove = function(e, t) {
}
Ext.form.ComboBox.prototype.onViewOver = function(e, t) {
}
Ext.form.ComboBox.prototype.onViewClick = function(doFocus) {
}
Ext.form.ComboBox.prototype.restrictHeight = function() {}
Ext.form.ComboBox.prototype.onEmptyResults = function() {}
Ext.form.ComboBox.prototype.isExpanded = function() {}
Ext.form.ComboBox.prototype.selectByValue = function(v, scrollIntoView) {
	/// <param name="v" type="String"/>
	/// <param name="scrollIntoView" type="Boolean"/>
	/// <returns type="Boolean" />
}
Ext.form.ComboBox.prototype.select = function(index, scrollIntoView) {
	/// <param name="index" type="Number"/>
	/// <param name="scrollIntoView" type="Boolean"/>
}
Ext.form.ComboBox.prototype.selectNext = function() {}
Ext.form.ComboBox.prototype.selectPrev = function() {}
Ext.form.ComboBox.prototype.onKeyUp = function(e) {
}
Ext.form.ComboBox.prototype.validateBlur = function() {}
Ext.form.ComboBox.prototype.initQuery = function() {}
Ext.form.ComboBox.prototype.doForce = function() {}
Ext.form.ComboBox.prototype.doQuery = function(q, forceAll) {
	/// <param name="q" type="String"/>
	/// <param name="forceAll" type="Boolean"/>
}
Ext.form.ComboBox.prototype.getParams = function(q) {
}
Ext.form.ComboBox.prototype.collapse = function() {}
Ext.form.ComboBox.prototype.collapseIf = function(e) {
}
Ext.form.ComboBox.prototype.expand = function() {}
Ext.form.ComboBox.prototype.onTriggerClick = function() {}

Ext.form.Checkbox.prototype = new Ext.form.Field;

Ext.form.Checkbox.prototype.checkedCls = "";
Ext.form.Checkbox.prototype.focusCls = "";
Ext.form.Checkbox.prototype.overCls = "";
Ext.form.Checkbox.prototype.mouseDownCls = "";
Ext.form.Checkbox.prototype.tabIndex = 0;
Ext.form.Checkbox.prototype.checked = false;
Ext.form.Checkbox.prototype.defaultAutoCreate = null;
Ext.form.Checkbox.prototype.baseCls = "";
Ext.form.Checkbox.prototype.initComponent = function() {}
Ext.form.Checkbox.prototype.initEvents = function() {}
Ext.form.Checkbox.prototype.initCheckEvents = function() {}
Ext.form.Checkbox.prototype.onRender = function(ct, position) {
}
Ext.form.Checkbox.prototype.onDestroy = function() {}
Ext.form.Checkbox.prototype.onFocus = function(e) {
}
Ext.form.Checkbox.prototype.onBlur = function(e) {
}
Ext.form.Checkbox.prototype.onResize = function() {}
Ext.form.Checkbox.prototype.onKeyUp = function(e) {
}
Ext.form.Checkbox.prototype.onClick = function(e) {
}
Ext.form.Checkbox.prototype.onEnable = function() {}
Ext.form.Checkbox.prototype.onDisable = function() {}
Ext.form.Checkbox.prototype.toggleValue = function() {}
Ext.form.Checkbox.prototype.getResizeEl = function() {}
Ext.form.Checkbox.prototype.getPositionEl = function() {}
Ext.form.Checkbox.prototype.getActionEl = function() {}
Ext.form.Checkbox.prototype.markInvalid = function() {}
Ext.form.Checkbox.prototype.clearInvalid = function() {}
Ext.form.Checkbox.prototype.initValue = function() {}
Ext.form.Checkbox.prototype.getValue = function() {
	/// <returns type="Boolean" />
}
Ext.form.Checkbox.prototype.setValue = function(v) {
	/// <param name="v" type="Boolean|String"/>
}

Ext.form.CheckboxGroup.prototype = new Ext.form.Field;

Ext.form.CheckboxGroup.prototype.columns = "";
Ext.form.CheckboxGroup.prototype.vertical = false;
Ext.form.CheckboxGroup.prototype.allowBlank = false;
Ext.form.CheckboxGroup.prototype.blankText = "";
Ext.form.CheckboxGroup.prototype.defaultType = "";
Ext.form.CheckboxGroup.prototype.groupCls = "";
Ext.form.CheckboxGroup.prototype.onRender = function(ct, position) {
}
Ext.form.CheckboxGroup.prototype.validateValue = function(value) {
}
Ext.form.CheckboxGroup.prototype.onDisable = function() {}
Ext.form.CheckboxGroup.prototype.onEnable = function() {}
Ext.form.CheckboxGroup.prototype.onResize = function(w, h) {
}
Ext.form.CheckboxGroup.prototype.reset = function() {}
Ext.form.CheckboxGroup.prototype.initValue = function() {}
Ext.form.CheckboxGroup.prototype.getValue = function() {}
Ext.form.CheckboxGroup.prototype.getRawValue = function() {}
Ext.form.CheckboxGroup.prototype.setValue = function() {}
Ext.form.CheckboxGroup.prototype.setRawValue = function() {}

Ext.form.Radio.prototype = new Ext.form.Checkbox;

Ext.form.Radio.prototype.inputType = "";
Ext.form.Radio.prototype.baseCls = "";
Ext.form.Radio.prototype.getGroupValue = function() {
	/// <returns type="String" />
}
Ext.form.Radio.prototype.getParent = function() {}
Ext.form.Radio.prototype.toggleValue = function() {}
Ext.form.Radio.prototype.setValue = function(v) {
	/// <param name="v" type="String|Boolean"/>
}
Ext.form.Radio.prototype.markInvalid = function() {}
Ext.form.Radio.prototype.clearInvalid = function() {}

Ext.form.RadioGroup.prototype = new Ext.form.CheckboxGroup;

Ext.form.RadioGroup.prototype.allowBlank = false;
Ext.form.RadioGroup.prototype.blankText = "";
Ext.form.RadioGroup.prototype.defaultType = "";
Ext.form.RadioGroup.prototype.groupCls = "";

Ext.form.Hidden.prototype = new Ext.form.Field;

Ext.form.Hidden.prototype.inputType = "";
Ext.form.Hidden.prototype.onRender = function() {}
Ext.form.Hidden.prototype.initEvents = function() {}
Ext.form.Hidden.prototype.setSize = function() {}
Ext.form.Hidden.prototype.setWidth = function() {}
Ext.form.Hidden.prototype.setHeight = function() {}
Ext.form.Hidden.prototype.setPosition = function() {}
Ext.form.Hidden.prototype.setPagePosition = function() {}
Ext.form.Hidden.prototype.markInvalid = function() {}
Ext.form.Hidden.prototype.clearInvalid = function() {}

Ext.BasicForm.prototype = new Ext.util.Observable;

Ext.BasicForm.prototype.timeout = 0;
Ext.BasicForm.prototype.activeAction = null;
Ext.BasicForm.prototype.trackResetOnLoad = false;
Ext.BasicForm.prototype.initEl = function(el) {
	/// <returns type="Mixed" />
}
Ext.BasicForm.prototype.getEl = function() {
	/// <returns type="Ext.Element" />
}
Ext.BasicForm.prototype.onSubmit = function(e) {
}
Ext.BasicForm.prototype.destroy = function() {}
Ext.BasicForm.prototype.isValid = function() {
	/// <returns type="Boolean" />
}
Ext.BasicForm.prototype.isDirty = function() {
	/// <returns type="Boolean" />
}
Ext.BasicForm.prototype.doAction = function(action, options) {
	/// <param name="action" type="String|Object"/>
	/// <param name="options" type="Object" optional="true"/>
	/// <returns type="Ext.BasicForm" />
}
Ext.BasicForm.prototype.submit = function(options) {
	/// <param name="options" type="Object"/>
	/// <returns type="Ext.BasicForm" />
}
Ext.BasicForm.prototype.load = function(options) {
	/// <param name="options" type="Object"/>
	/// <returns type="Ext.BasicForm" />
}
Ext.BasicForm.prototype.updateRecord = function(record) {
	/// <param name="record" type="Record"/>
	/// <returns type="Ext.BasicForm" />
}
Ext.BasicForm.prototype.loadRecord = function(record) {
	/// <param name="record" type="Record"/>
	/// <returns type="Ext.BasicForm" />
}
Ext.BasicForm.prototype.beforeAction = function(action) {
}
Ext.BasicForm.prototype.afterAction = function(action, success) {
}
Ext.BasicForm.prototype.findField = function(id) {
	/// <param name="id" type="String"/>
	/// <returns type="Ext.data.Field" />
}
Ext.BasicForm.prototype.markInvalid = function(errors) {
	/// <param name="errors" type="Array|Object"/>
	/// <returns type="Ext.BasicForm" />
}
Ext.BasicForm.prototype.setValues = function(values) {
	/// <param name="values" type="Array|Object"/>
	/// <returns type="Ext.BasicForm" />
}
Ext.BasicForm.prototype.getValues = function(asString) {
	/// <param name="asString" type="Boolean" optional="true"/>
	/// <returns type="String" />
}
Ext.BasicForm.prototype.clearInvalid = function() {
	/// <returns type="Ext.BasicForm" />
}
Ext.BasicForm.prototype.reset = function() {
	/// <returns type="Ext.BasicForm" />
}
Ext.BasicForm.prototype.add = function(field1, field2, etc) {
	/// <param name="field1" type="Field"/>
	/// <param name="field2" type="Field" optional="true"/>
	/// <param name="etc" type="Field" optional="true"/>
	/// <returns type="Ext.BasicForm" />
}
Ext.BasicForm.prototype.remove = function(field) {
	/// <param name="field" type="Field"/>
	/// <returns type="Ext.BasicForm" />
}
Ext.BasicForm.prototype.render = function() {
	/// <returns type="Ext.BasicForm" />
}
Ext.BasicForm.prototype.applyToFields = function(o) {
	/// <param name="o" type="Object"/>
	/// <returns type="Ext.BasicForm" />
}
Ext.BasicForm.prototype.applyIfToFields = function(o) {
	/// <param name="o" type="Object"/>
	/// <returns type="Ext.BasicForm" />
}
Ext.BasicForm.prototype.items = null;

Ext.FormPanel.prototype = new Ext.Panel;

Ext.FormPanel.prototype.buttonAlign = "";
Ext.FormPanel.prototype.minButtonWidth = 0;
Ext.FormPanel.prototype.labelAlign = "";
Ext.FormPanel.prototype.monitorValid = false;
Ext.FormPanel.prototype.monitorPoll = 0;
Ext.FormPanel.prototype.layout = "";
Ext.FormPanel.prototype.initComponent = function() {}
Ext.FormPanel.prototype.createForm = function() {}
Ext.FormPanel.prototype.initFields = function() {}
Ext.FormPanel.prototype.getLayoutTarget = function() {}
Ext.FormPanel.prototype.getForm = function() {
	/// <returns type="Ext.form.BasicForm" />
}
Ext.FormPanel.prototype.onRender = function(ct, position) {
}
Ext.FormPanel.prototype.beforeDestroy = function() {}
Ext.FormPanel.prototype.initEvents = function() {}
Ext.FormPanel.prototype.onAdd = function(ct, c) {
}
Ext.FormPanel.prototype.onRemove = function(c) {
}
Ext.FormPanel.prototype.startMonitoring = function() {}
Ext.FormPanel.prototype.stopMonitoring = function() {}
Ext.FormPanel.prototype.load = function(options) {
	/// <param name="options" type="Object"/>
}
Ext.FormPanel.prototype.onDisable = function() {}
Ext.FormPanel.prototype.onEnable = function() {}
Ext.FormPanel.prototype.bindHandler = function() {}

Ext.form.FieldSet.prototype = new Ext.Panel;

Ext.form.FieldSet.prototype.baseCls = "";
Ext.form.FieldSet.prototype.layout = "";
Ext.form.FieldSet.prototype.onRender = function(ct, position) {
}
Ext.form.FieldSet.prototype.onCollapse = function(doAnim, animArg) {
}
Ext.form.FieldSet.prototype.onExpand = function(doAnim, animArg) {
}
Ext.form.FieldSet.prototype.onCheckClick = function() {}

Ext.form.HtmlEditor.prototype = new Ext.form.Field;

Ext.form.HtmlEditor.prototype.enableFormat = false;
Ext.form.HtmlEditor.prototype.enableFontSize = false;
Ext.form.HtmlEditor.prototype.enableColors = false;
Ext.form.HtmlEditor.prototype.enableAlignments = false;
Ext.form.HtmlEditor.prototype.enableLists = false;
Ext.form.HtmlEditor.prototype.enableSourceEdit = false;
Ext.form.HtmlEditor.prototype.enableLinks = false;
Ext.form.HtmlEditor.prototype.enableFont = false;
Ext.form.HtmlEditor.prototype.createLinkText = "";
Ext.form.HtmlEditor.prototype.defaultLinkValue = "";
Ext.form.HtmlEditor.prototype.fontFamilies = [];
Ext.form.HtmlEditor.prototype.defaultFont = "";
Ext.form.HtmlEditor.prototype.validationEvent = false;
Ext.form.HtmlEditor.prototype.deferHeight = false;
Ext.form.HtmlEditor.prototype.initialized = false;
Ext.form.HtmlEditor.prototype.activated = false;
Ext.form.HtmlEditor.prototype.sourceEditMode = false;
Ext.form.HtmlEditor.prototype.onFocus = function() {}
Ext.form.HtmlEditor.prototype.iframePad = 0;
Ext.form.HtmlEditor.prototype.hideMode = "";
Ext.form.HtmlEditor.prototype.defaultAutoCreate = null;
Ext.form.HtmlEditor.prototype.initComponent = function() {}
Ext.form.HtmlEditor.prototype.createFontOptions = function() {}
Ext.form.HtmlEditor.prototype.createToolbar = function(editor) {
}
Ext.form.HtmlEditor.prototype.getDocMarkup = function() {}
Ext.form.HtmlEditor.prototype.getEditorBody = function() {}
Ext.form.HtmlEditor.prototype.getDoc = function() {}
Ext.form.HtmlEditor.prototype.getWin = function() {}
Ext.form.HtmlEditor.prototype.onRender = function(ct, position) {
}
Ext.form.HtmlEditor.prototype.initFrame = function() {}
Ext.form.HtmlEditor.prototype.checkDesignMode = function() {}
Ext.form.HtmlEditor.prototype.onResize = function(w, h) {
}
Ext.form.HtmlEditor.prototype.toggleSourceEdit = function(sourceEditMode) {
	/// <param name="sourceEditMode" type="Boolean" optional="true"/>
}
Ext.form.HtmlEditor.prototype.createLink = function() {}
Ext.form.HtmlEditor.prototype.adjustSize = function(w, h) {
}
Ext.form.HtmlEditor.prototype.getResizeEl = function() {}
Ext.form.HtmlEditor.prototype.getPositionEl = function() {}
Ext.form.HtmlEditor.prototype.initEvents = function() {}
Ext.form.HtmlEditor.prototype.markInvalid = function() {}
Ext.form.HtmlEditor.prototype.clearInvalid = function() {}
Ext.form.HtmlEditor.prototype.setValue = function(v) {
}
Ext.form.HtmlEditor.prototype.cleanHtml = function(html) {
	/// <param name="html" type="String"/>
}
Ext.form.HtmlEditor.prototype.syncValue = function() {}
Ext.form.HtmlEditor.prototype.pushValue = function() {}
Ext.form.HtmlEditor.prototype.deferFocus = function() {}
Ext.form.HtmlEditor.prototype.focus = function() {}
Ext.form.HtmlEditor.prototype.initEditor = function() {}
Ext.form.HtmlEditor.prototype.onDestroy = function() {}
Ext.form.HtmlEditor.prototype.onFirstFocus = function() {}
Ext.form.HtmlEditor.prototype.adjustFont = function(btn) {
}
Ext.form.HtmlEditor.prototype.onEditorEvent = function(e) {
}
Ext.form.HtmlEditor.prototype.updateToolbar = function() {}
Ext.form.HtmlEditor.prototype.relayBtnCmd = function(btn) {
}
Ext.form.HtmlEditor.prototype.relayCmd = function(cmd, value) {
	/// <param name="cmd" type="String"/>
	/// <param name="value" type="String|Boolean" optional="true"/>
}
Ext.form.HtmlEditor.prototype.execCmd = function(cmd, value) {
	/// <param name="cmd" type="String"/>
	/// <param name="value" type="String|Boolean" optional="true"/>
}
Ext.form.HtmlEditor.prototype.applyCommand = function(e) {
}
Ext.form.HtmlEditor.prototype.insertAtCursor = function(text) {
	/// <param name="text" type="String"/>
}
Ext.form.HtmlEditor.prototype.fixKeys = null;
Ext.form.HtmlEditor.prototype.getToolbar = function() {
	/// <returns type="Ext.Toolbar" />
}
Ext.form.HtmlEditor.prototype.buttonTips = null;

Ext.form.TimeField.prototype = new Ext.form.ComboBox;

Ext.form.TimeField.prototype.minValue = null;
Ext.form.TimeField.prototype.maxValue = null;
Ext.form.TimeField.prototype.minText = "";
Ext.form.TimeField.prototype.maxText = "";
Ext.form.TimeField.prototype.invalidText = "";
Ext.form.TimeField.prototype.format = "";
Ext.form.TimeField.prototype.altFormats = "";
Ext.form.TimeField.prototype.increment = 0;
Ext.form.TimeField.prototype.mode = "";
Ext.form.TimeField.prototype.triggerAction = "";
Ext.form.TimeField.prototype.typeAhead = false;
Ext.form.TimeField.prototype.initDate = "";
Ext.form.TimeField.prototype.initComponent = function() {}
Ext.form.TimeField.prototype.getValue = function() {}
Ext.form.TimeField.prototype.setValue = function(value) {
}
Ext.form.TimeField.prototype.validateValue = function(value) {
}
Ext.form.TimeField.prototype.parseDate = function(value) {
}
Ext.form.TimeField.prototype.formatDate = function(date) {
}
Ext.form.TimeField.prototype.beforeBlur = function() {}

Ext.form.Label.prototype = new Ext.BoxComponent;

Ext.form.Label.prototype.onRender = function(ct, position) {
}
Ext.form.Label.prototype.setText = function(t, encode) {
	/// <param name="t" type="String"/>
	/// <param name="encode" type="Boolean" optional="true"/>
	/// <returns type="Ext.form.Label" />
}

Ext.form.Action.prototype = {
	type : "",
	run : function(options) {
	},
	success : function(response) {
	},
	handleResponse : function(response) {
	},
	failure : function(response) {
	},
	processResponse : function(response) {
	},
	getUrl : function(appendParams) {
	},
	getMethod : function() {	},
	getParams : function() {	},
	createCallback : function(opts) {
	},
	form : null,
	options : null
}

Ext.form.Action.ACTION_TYPES.submit.prototype = new Ext.form.Action;

Ext.form.Action.ACTION_TYPES.submit.prototype.type = "";
Ext.form.Action.ACTION_TYPES.submit.prototype.run = function() {}
Ext.form.Action.ACTION_TYPES.submit.prototype.success = function(response) {
}
Ext.form.Action.ACTION_TYPES.submit.prototype.handleResponse = function(response) {
}

Ext.form.Action.ACTION_TYPES.load.prototype = new Ext.form.Action;

Ext.form.Action.ACTION_TYPES.load.prototype.type = "";
Ext.form.Action.ACTION_TYPES.load.prototype.run = function() {}
Ext.form.Action.ACTION_TYPES.load.prototype.success = function(response) {
}
Ext.form.Action.ACTION_TYPES.load.prototype.handleResponse = function(response) {
}
Ext.form.Action.ACTION_TYPES.load.prototype.reader = null;

Ext.grid.GridPanel.prototype = new Ext.Panel;

Ext.grid.GridPanel.prototype.ddText = "";
Ext.grid.GridPanel.prototype.minColumnWidth = 0;
Ext.grid.GridPanel.prototype.trackMouseOver = false;
Ext.grid.GridPanel.prototype.enableDragDrop = false;
Ext.grid.GridPanel.prototype.enableColumnMove = false;
Ext.grid.GridPanel.prototype.enableColumnHide = false;
Ext.grid.GridPanel.prototype.enableHdMenu = false;
Ext.grid.GridPanel.prototype.stripeRows = false;
Ext.grid.GridPanel.prototype.autoExpandColumn = false;
Ext.grid.GridPanel.prototype.autoExpandMin = 0;
Ext.grid.GridPanel.prototype.autoExpandMax = 0;
Ext.grid.GridPanel.prototype.view = null;
Ext.grid.GridPanel.prototype.loadMask = false;
Ext.grid.GridPanel.prototype.deferRowRender = false;
Ext.grid.GridPanel.prototype.rendered = false;
Ext.grid.GridPanel.prototype.viewReady = false;
Ext.grid.GridPanel.prototype.stateEvents = [];
Ext.grid.GridPanel.prototype.initComponent = function() {}
Ext.grid.GridPanel.prototype.onRender = function(ct, position) {
}
Ext.grid.GridPanel.prototype.initEvents = function() {}
Ext.grid.GridPanel.prototype.initStateEvents = function() {}
Ext.grid.GridPanel.prototype.applyState = function(state) {
}
Ext.grid.GridPanel.prototype.getState = function() {}
Ext.grid.GridPanel.prototype.afterRender = function() {}
Ext.grid.GridPanel.prototype.reconfigure = function(store, colModel) {
	/// <param name="store" type="Ext.data.Store"/>
	/// <param name="colModel" type="Ext.grid.ColumnModel"/>
}
Ext.grid.GridPanel.prototype.onKeyDown = function(e) {
}
Ext.grid.GridPanel.prototype.onDestroy = function() {}
Ext.grid.GridPanel.prototype.processEvent = function(name, e) {
}
Ext.grid.GridPanel.prototype.onClick = function(e) {
}
Ext.grid.GridPanel.prototype.onMouseDown = function(e) {
}
Ext.grid.GridPanel.prototype.onContextMenu = function(e, t) {
}
Ext.grid.GridPanel.prototype.onDblClick = function(e) {
}
Ext.grid.GridPanel.prototype.walkCells = function(row, col, step, fn, scope) {
}
Ext.grid.GridPanel.prototype.getSelections = function() {}
Ext.grid.GridPanel.prototype.onResize = function() {}
Ext.grid.GridPanel.prototype.getGridEl = function() {
	/// <returns type="Ext.Element" />
}
Ext.grid.GridPanel.prototype.stopEditing = function() {}
Ext.grid.GridPanel.prototype.getSelectionModel = function() {
	/// <returns type="SelectionModel" />
}
Ext.grid.GridPanel.prototype.getStore = function() {
	/// <returns type="DataSource" />
}
Ext.grid.GridPanel.prototype.getColumnModel = function() {
	/// <returns type="Ext.grid.DefaultColumnModel" />
}
Ext.grid.GridPanel.prototype.getView = function() {
	/// <returns type="Ext.grid.GridView" />
}
Ext.grid.GridPanel.prototype.getDragDropText = function() {
	/// <returns type="String" />
}

Ext.grid.GridView.prototype = new Ext.util.Observable;

Ext.grid.GridView.prototype.deferEmptyText = false;
Ext.grid.GridView.prototype.scrollOffset = 0;
Ext.grid.GridView.prototype.autoFill = false;
Ext.grid.GridView.prototype.forceFit = false;
Ext.grid.GridView.prototype.sortClasses = [];
Ext.grid.GridView.prototype.sortAscText = "";
Ext.grid.GridView.prototype.sortDescText = "";
Ext.grid.GridView.prototype.columnsText = "";
Ext.grid.GridView.prototype.borderWidth = 0;
Ext.grid.GridView.prototype.tdClass = "";
Ext.grid.GridView.prototype.hdCls = "";
Ext.grid.GridView.prototype.cellSelectorDepth = 0;
Ext.grid.GridView.prototype.rowSelectorDepth = 0;
Ext.grid.GridView.prototype.cellSelector = "";
Ext.grid.GridView.prototype.rowSelector = "";
Ext.grid.GridView.prototype.initTemplates = function() {}
Ext.grid.GridView.prototype.fly = function(el) {
}
Ext.grid.GridView.prototype.getEditorParent = function(ed) {
}
Ext.grid.GridView.prototype.initElements = function() {}
Ext.grid.GridView.prototype.getRows = function() {}
Ext.grid.GridView.prototype.findCell = function(el) {
}
Ext.grid.GridView.prototype.findCellIndex = function(el, requiredCls) {
}
Ext.grid.GridView.prototype.getCellIndex = function(el) {
}
Ext.grid.GridView.prototype.findHeaderCell = function(el) {
}
Ext.grid.GridView.prototype.findHeaderIndex = function(el) {
}
Ext.grid.GridView.prototype.findRow = function(el) {
}
Ext.grid.GridView.prototype.findRowIndex = function(el) {
}
Ext.grid.GridView.prototype.getRow = function(row) {
	/// <param name="row" type="Number"/>
	/// <returns type="HtmlElement" />
}
Ext.grid.GridView.prototype.getCell = function(row, col) {
	/// <param name="row" type="Number"/>
	/// <param name="col" type="Number"/>
	/// <returns type="HtmlElement" />
}
Ext.grid.GridView.prototype.getHeaderCell = function(index) {
	/// <param name="index" type="Number"/>
	/// <returns type="HtmlElement" />
}
Ext.grid.GridView.prototype.addRowClass = function(row, cls) {
}
Ext.grid.GridView.prototype.removeRowClass = function(row, cls) {
}
Ext.grid.GridView.prototype.removeRow = function(row) {
}
Ext.grid.GridView.prototype.removeRows = function(firstRow, lastRow) {
}
Ext.grid.GridView.prototype.getScrollState = function() {}
Ext.grid.GridView.prototype.restoreScroll = function(state) {
}
Ext.grid.GridView.prototype.scrollToTop = function() {}
Ext.grid.GridView.prototype.syncScroll = function() {}
Ext.grid.GridView.prototype.syncHeaderScroll = function() {}
Ext.grid.GridView.prototype.updateSortIcon = function(col, dir) {
}
Ext.grid.GridView.prototype.updateAllColumnWidths = function() {}
Ext.grid.GridView.prototype.updateColumnWidth = function(col, width) {
}
Ext.grid.GridView.prototype.updateColumnHidden = function(col, hidden) {
}
Ext.grid.GridView.prototype.doRender = function(cs, rs, ds, startRow, colCount, stripe) {
}
Ext.grid.GridView.prototype.processRows = function(startRow, skipStripe) {
}
Ext.grid.GridView.prototype.afterRender = function() {}
Ext.grid.GridView.prototype.renderUI = function() {}
Ext.grid.GridView.prototype.layout = function() {}
Ext.grid.GridView.prototype.onLayout = function(vw, vh) {
}
Ext.grid.GridView.prototype.onColumnWidthUpdated = function(col, w, tw) {
}
Ext.grid.GridView.prototype.onAllColumnWidthsUpdated = function(ws, tw) {
}
Ext.grid.GridView.prototype.onColumnHiddenUpdated = function(col, hidden, tw) {
}
Ext.grid.GridView.prototype.updateColumnText = function(col, text) {
}
Ext.grid.GridView.prototype.afterMove = function(colIndex) {
}
Ext.grid.GridView.prototype.init = function(grid) {
}
Ext.grid.GridView.prototype.getColumnId = function(index) {
}
Ext.grid.GridView.prototype.renderHeaders = function() {}
Ext.grid.GridView.prototype.getColumnTooltip = function(i) {
}
Ext.grid.GridView.prototype.beforeUpdate = function() {}
Ext.grid.GridView.prototype.updateHeaders = function() {}
Ext.grid.GridView.prototype.focusRow = function(row) {
	/// <param name="row" type="Number"/>
}
Ext.grid.GridView.prototype.focusCell = function(row, col, hscroll) {
	/// <param name="row" type="Number"/>
	/// <param name="col" type="Number"/>
}
Ext.grid.GridView.prototype.ensureVisible = function(row, col, hscroll) {
}
Ext.grid.GridView.prototype.insertRows = function(dm, firstRow, lastRow, isUpdate) {
}
Ext.grid.GridView.prototype.deleteRows = function(dm, firstRow, lastRow) {
}
Ext.grid.GridView.prototype.getColumnStyle = function(col, isHeader) {
}
Ext.grid.GridView.prototype.getColumnWidth = function(col) {
}
Ext.grid.GridView.prototype.getTotalWidth = function() {}
Ext.grid.GridView.prototype.fitColumns = function(preventRefresh, onlyExpand, omitColumn) {
}
Ext.grid.GridView.prototype.autoExpand = function(preventUpdate) {
}
Ext.grid.GridView.prototype.getColumnData = function() {}
Ext.grid.GridView.prototype.renderRows = function(startRow, endRow) {
}
Ext.grid.GridView.prototype.renderBody = function() {}
Ext.grid.GridView.prototype.refreshRow = function(record) {
}
Ext.grid.GridView.prototype.refresh = function(headersToo) {
	/// <param name="headersToo" type="Boolean" optional="true"/>
}
Ext.grid.GridView.prototype.applyEmptyText = function() {}
Ext.grid.GridView.prototype.updateHeaderSortState = function() {}
Ext.grid.GridView.prototype.destroy = function() {}
Ext.grid.GridView.prototype.onDenyColumnHide = function() {}
Ext.grid.GridView.prototype.render = function() {}
Ext.grid.GridView.prototype.initData = function(ds, cm) {
}
Ext.grid.GridView.prototype.onDataChange = function() {}
Ext.grid.GridView.prototype.onClear = function() {}
Ext.grid.GridView.prototype.onUpdate = function(ds, record) {
}
Ext.grid.GridView.prototype.onAdd = function(ds, records, index) {
}
Ext.grid.GridView.prototype.onRemove = function(ds, record, index, isUpdate) {
}
Ext.grid.GridView.prototype.onLoad = function() {}
Ext.grid.GridView.prototype.onColWidthChange = function(cm, col, width) {
}
Ext.grid.GridView.prototype.onHeaderChange = function(cm, col, text) {
}
Ext.grid.GridView.prototype.onHiddenChange = function(cm, col, hidden) {
}
Ext.grid.GridView.prototype.onColumnMove = function(cm, oldIndex, newIndex) {
}
Ext.grid.GridView.prototype.onColConfigChange = function() {}
Ext.grid.GridView.prototype.initUI = function(grid) {
}
Ext.grid.GridView.prototype.initEvents = function() {}
Ext.grid.GridView.prototype.onHeaderClick = function(g, index) {
}
Ext.grid.GridView.prototype.onRowOver = function(e, t) {
}
Ext.grid.GridView.prototype.onRowOut = function(e, t) {
}
Ext.grid.GridView.prototype.handleWheel = function(e) {
}
Ext.grid.GridView.prototype.onRowSelect = function(row) {
}
Ext.grid.GridView.prototype.onRowDeselect = function(row) {
}
Ext.grid.GridView.prototype.onCellSelect = function(row, col) {
}
Ext.grid.GridView.prototype.onCellDeselect = function(row, col) {
}
Ext.grid.GridView.prototype.onColumnSplitterMoved = function(i, w) {
}
Ext.grid.GridView.prototype.handleHdMenuClick = function(item) {
}
Ext.grid.GridView.prototype.isHideableColumn = function(c) {
}
Ext.grid.GridView.prototype.beforeColMenuShow = function() {}
Ext.grid.GridView.prototype.handleHdDown = function(e, t) {
}
Ext.grid.GridView.prototype.handleHdOver = function(e, t) {
}
Ext.grid.GridView.prototype.handleHdMove = function(e, t) {
}
Ext.grid.GridView.prototype.handleHdOut = function(e, t) {
}
Ext.grid.GridView.prototype.hasRows = function() {}
Ext.grid.GridView.prototype.bind = function(d, c) {
}

Ext.grid.GridView.SplitDragZone.prototype = new Ext.dd.DDProxy;

Ext.grid.GridView.SplitDragZone.prototype.b4StartDrag = function(x, y) {
}
Ext.grid.GridView.SplitDragZone.prototype.handleMouseDown = function(e) {
}
Ext.grid.GridView.SplitDragZone.prototype.endDrag = function(e) {
}
Ext.grid.GridView.SplitDragZone.prototype.autoOffset = function() {}
Ext.grid.GridView.SplitDragZone.prototype.grid = null;
Ext.grid.GridView.SplitDragZone.prototype.view = null;
Ext.grid.GridView.SplitDragZone.prototype.marker = null;
Ext.grid.GridView.SplitDragZone.prototype.proxy = null;
Ext.grid.GridView.SplitDragZone.prototype.hw = null;

Ext.grid.HeaderDragZone.prototype = new Ext.dd.DragZone;

Ext.grid.HeaderDragZone.prototype.maxDragWidth = 0;
Ext.grid.HeaderDragZone.prototype.getDragData = function(e) {
}
Ext.grid.HeaderDragZone.prototype.onInitDrag = function(e) {
}
Ext.grid.HeaderDragZone.prototype.afterValidDrop = function() {}
Ext.grid.HeaderDragZone.prototype.afterInvalidDrop = function() {}
Ext.grid.HeaderDragZone.prototype.grid = null;
Ext.grid.HeaderDragZone.prototype.view = null;

Ext.grid.GridView.ColumnDragZone.prototype = new Ext.grid.HeaderDragZone;

Ext.grid.GridView.ColumnDragZone.prototype.handleMouseDown = function(e) {
}
Ext.grid.GridView.ColumnDragZone.prototype.callHandleMouseDown = function(e) {
}

Ext.grid.GroupingView.prototype = new Ext.grid.GridView;

Ext.grid.GroupingView.prototype.hideGroupedColumn = false;
Ext.grid.GroupingView.prototype.showGroupName = false;
Ext.grid.GroupingView.prototype.startCollapsed = false;
Ext.grid.GroupingView.prototype.enableGrouping = false;
Ext.grid.GroupingView.prototype.enableGroupingMenu = false;
Ext.grid.GroupingView.prototype.enableNoGroups = false;
Ext.grid.GroupingView.prototype.emptyGroupText = "";
Ext.grid.GroupingView.prototype.ignoreAdd = false;
Ext.grid.GroupingView.prototype.groupTextTpl = "";
Ext.grid.GroupingView.prototype.gidSeed = 0;
Ext.grid.GroupingView.prototype.initTemplates = function() {}
Ext.grid.GroupingView.prototype.findGroup = function(el) {
}
Ext.grid.GroupingView.prototype.getGroups = function() {}
Ext.grid.GroupingView.prototype.onAdd = function() {}
Ext.grid.GroupingView.prototype.onRemove = function(ds, record, index, isUpdate) {
}
Ext.grid.GroupingView.prototype.refreshRow = function(record) {
}
Ext.grid.GroupingView.prototype.beforeMenuShow = function() {}
Ext.grid.GroupingView.prototype.renderUI = function() {}
Ext.grid.GroupingView.prototype.onGroupByClick = function() {}
Ext.grid.GroupingView.prototype.onShowGroupsClick = function(mi, checked) {
}
Ext.grid.GroupingView.prototype.toggleGroup = function(group, expanded) {
	/// <param name="group" type="String"/>
	/// <param name="expanded" type="Boolean" optional="true"/>
}
Ext.grid.GroupingView.prototype.toggleAllGroups = function(expanded) {
	/// <param name="expanded" type="Boolean" optional="true"/>
}
Ext.grid.GroupingView.prototype.expandAllGroups = function() {}
Ext.grid.GroupingView.prototype.collapseAllGroups = function() {}
Ext.grid.GroupingView.prototype.interceptMouse = function(e) {
}
Ext.grid.GroupingView.prototype.getGroup = function(v, r, groupRenderer, rowIndex, colIndex, ds) {
}
Ext.grid.GroupingView.prototype.getGroupField = function() {}
Ext.grid.GroupingView.prototype.renderRows = function() {}
Ext.grid.GroupingView.prototype.doRender = function(cs, rs, ds, startRow, colCount, stripe) {
}
Ext.grid.GroupingView.prototype.getGroupId = function(value) {
	/// <param name="value" type="String"/>
	/// <returns type="String" />
}
Ext.grid.GroupingView.prototype.doGroupStart = function(buf, g, cs, ds, colCount) {
}
Ext.grid.GroupingView.prototype.doGroupEnd = function(buf, g, cs, ds, colCount) {
}
Ext.grid.GroupingView.prototype.getRows = function() {}
Ext.grid.GroupingView.prototype.updateGroupWidths = function() {}
Ext.grid.GroupingView.prototype.onColumnWidthUpdated = function(col, w, tw) {
}
Ext.grid.GroupingView.prototype.onAllColumnWidthsUpdated = function(ws, tw) {
}
Ext.grid.GroupingView.prototype.onColumnHiddenUpdated = function(col, hidden, tw) {
}
Ext.grid.GroupingView.prototype.onLayout = function() {}
Ext.grid.GroupingView.prototype.onBeforeRowSelect = function(sm, rowIndex) {
}
Ext.grid.GroupingView.prototype.groupByText = "";
Ext.grid.GroupingView.prototype.showGroupsText = "";

Ext.grid.HeaderDropZone.prototype = new Ext.dd.DropZone;

Ext.grid.HeaderDropZone.prototype.proxyOffsets = [];
Ext.grid.HeaderDropZone.prototype.fly = function(el, named) {
}
Ext.grid.HeaderDropZone.prototype.getTargetFromEvent = function(e) {
}
Ext.grid.HeaderDropZone.prototype.nextVisible = function(h) {
}
Ext.grid.HeaderDropZone.prototype.prevVisible = function(h) {
}
Ext.grid.HeaderDropZone.prototype.positionIndicator = function(h, n, e) {
}
Ext.grid.HeaderDropZone.prototype.onNodeEnter = function(n, dd, e, data) {
}
Ext.grid.HeaderDropZone.prototype.onNodeOver = function(n, dd, e, data) {
}
Ext.grid.HeaderDropZone.prototype.onNodeOut = function(n, dd, e, data) {
}
Ext.grid.HeaderDropZone.prototype.onNodeDrop = function(n, dd, e, data) {
}
Ext.grid.HeaderDropZone.prototype.grid = null;
Ext.grid.HeaderDropZone.prototype.view = null;
Ext.grid.HeaderDropZone.prototype.proxyTop = null;
Ext.grid.HeaderDropZone.prototype.proxyBottom = null;

Ext.grid.SplitDragZone.prototype = new Ext.dd.DDProxy;

Ext.grid.SplitDragZone.prototype.fly = function(el, named) {
}
Ext.grid.SplitDragZone.prototype.b4StartDrag = function(x, y) {
}
Ext.grid.SplitDragZone.prototype.handleMouseDown = function(e) {
}
Ext.grid.SplitDragZone.prototype.endDrag = function(e) {
}
Ext.grid.SplitDragZone.prototype.autoOffset = function() {}
Ext.grid.SplitDragZone.prototype.grid = null;
Ext.grid.SplitDragZone.prototype.view = null;
Ext.grid.SplitDragZone.prototype.proxy = null;

Ext.grid.GridDragZone.prototype = new Ext.dd.DragZone;

Ext.grid.GridDragZone.prototype.ddGroup = "";
Ext.grid.GridDragZone.prototype.getDragData = function(e) {
}
Ext.grid.GridDragZone.prototype.onInitDrag = function(e) {
}
Ext.grid.GridDragZone.prototype.afterRepair = function() {}
Ext.grid.GridDragZone.prototype.getRepairXY = function(e, data) {
	/// <param name="e" type="EventObject"/>
	/// <returns type="Array" />
}
Ext.grid.GridDragZone.prototype.onEndDrag = function(data, e) {
}
Ext.grid.GridDragZone.prototype.onValidDrop = function(dd, e, id) {
}
Ext.grid.GridDragZone.prototype.beforeInvalidDrop = function(e, id) {
}
Ext.grid.GridDragZone.prototype.view = null;
Ext.grid.GridDragZone.prototype.grid = null;
Ext.grid.GridDragZone.prototype.ddel = null;

Ext.grid.DefaultColumnModel.prototype = new Ext.util.Observable;

Ext.grid.DefaultColumnModel.prototype.getColumnId = function(index) {
	/// <param name="index" type="Number"/>
	/// <returns type="String" />
}
Ext.grid.DefaultColumnModel.prototype.setConfig = function(config, initial) {
	/// <param name="config" type="Array"/>
}
Ext.grid.DefaultColumnModel.prototype.getColumnById = function(id) {
	/// <param name="id" type="String"/>
	/// <returns type="Object" />
}
Ext.grid.DefaultColumnModel.prototype.getIndexById = function(id) {
	/// <param name="id" type="String"/>
	/// <returns type="Number" />
}
Ext.grid.DefaultColumnModel.prototype.moveColumn = function(oldIndex, newIndex) {
	/// <param name="oldIndex" type="Number"/>
	/// <param name="newIndex" type="Number"/>
}
Ext.grid.DefaultColumnModel.prototype.isLocked = function(colIndex) {
}
Ext.grid.DefaultColumnModel.prototype.setLocked = function(colIndex, value, suppressEvent) {
}
Ext.grid.DefaultColumnModel.prototype.getTotalLockedWidth = function() {}
Ext.grid.DefaultColumnModel.prototype.getLockedCount = function() {}
Ext.grid.DefaultColumnModel.prototype.getColumnCount = function(visibleOnly) {
	/// <returns type="Number" />
}
Ext.grid.DefaultColumnModel.prototype.getColumnsBy = function(fn, scope) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <returns type="Array" />
}
Ext.grid.DefaultColumnModel.prototype.isSortable = function(col) {
	/// <param name="col" type="Number"/>
	/// <returns type="Boolean" />
}
Ext.grid.DefaultColumnModel.prototype.isMenuDisabled = function(col) {
	/// <param name="col" type="Number"/>
	/// <returns type="Boolean" />
}
Ext.grid.DefaultColumnModel.prototype.getRenderer = function(col) {
	/// <param name="col" type="Number"/>
	/// <returns type="Function" />
}
Ext.grid.DefaultColumnModel.prototype.setRenderer = function(col, fn) {
	/// <param name="col" type="Number"/>
	/// <param name="fn" type="Function"/>
}
Ext.grid.DefaultColumnModel.prototype.getColumnWidth = function(col) {
	/// <param name="col" type="Number"/>
	/// <returns type="Number" />
}
Ext.grid.DefaultColumnModel.prototype.setColumnWidth = function(col, width, suppressEvent) {
	/// <param name="col" type="Number"/>
	/// <param name="width" type="Number"/>
}
Ext.grid.DefaultColumnModel.prototype.getTotalWidth = function(includeHidden) {
	/// <param name="includeHidden" type="Boolean"/>
	/// <returns type="Number" />
}
Ext.grid.DefaultColumnModel.prototype.getColumnHeader = function(col) {
	/// <param name="col" type="Number"/>
	/// <returns type="String" />
}
Ext.grid.DefaultColumnModel.prototype.setColumnHeader = function(col, header) {
	/// <param name="col" type="Number"/>
	/// <param name="header" type="String"/>
}
Ext.grid.DefaultColumnModel.prototype.getColumnTooltip = function(col) {
	/// <param name="col" type="Number"/>
	/// <returns type="String" />
}
Ext.grid.DefaultColumnModel.prototype.setColumnTooltip = function(col, tooltip) {
	/// <param name="col" type="Number"/>
	/// <param name="tooltip" type="String"/>
}
Ext.grid.DefaultColumnModel.prototype.getDataIndex = function(col) {
	/// <param name="col" type="Number"/>
	/// <returns type="String" />
}
Ext.grid.DefaultColumnModel.prototype.setDataIndex = function(col, dataIndex) {
	/// <param name="col" type="Number"/>
	/// <param name="dataIndex" type="String"/>
}
Ext.grid.DefaultColumnModel.prototype.findColumnIndex = function(dataIndex) {
	/// <param name="dataIndex" type="String"/>
	/// <returns type="Number" />
}
Ext.grid.DefaultColumnModel.prototype.isCellEditable = function(colIndex, rowIndex) {
	/// <param name="colIndex" type="Number"/>
	/// <param name="rowIndex" type="Number"/>
	/// <returns type="Boolean" />
}
Ext.grid.DefaultColumnModel.prototype.getCellEditor = function(colIndex, rowIndex) {
	/// <param name="colIndex" type="Number"/>
	/// <param name="rowIndex" type="Number"/>
	/// <returns type="Object" />
}
Ext.grid.DefaultColumnModel.prototype.setEditable = function(col, editable) {
	/// <param name="col" type="Number"/>
	/// <param name="editable" type="Boolean"/>
}
Ext.grid.DefaultColumnModel.prototype.isHidden = function(colIndex) {
	/// <param name="colIndex" type="Number"/>
	/// <returns type="Boolean" />
}
Ext.grid.DefaultColumnModel.prototype.isFixed = function(colIndex) {
}
Ext.grid.DefaultColumnModel.prototype.isResizable = function(colIndex) {
	/// <returns type="Boolean" />
}
Ext.grid.DefaultColumnModel.prototype.setHidden = function(colIndex, hidden) {
	/// <param name="colIndex" type="Number"/>
	/// <param name="hidden" type="Boolean"/>
}
Ext.grid.DefaultColumnModel.prototype.setEditor = function(col, editor) {
	/// <param name="col" type="Number"/>
	/// <param name="editor" type="Object"/>
}
Ext.grid.DefaultColumnModel.prototype.defaultWidth = null;
Ext.grid.DefaultColumnModel.prototype.defaultSortable = null;

Ext.grid.AbstractSelectionModel.prototype = new Ext.util.Observable;

Ext.grid.AbstractSelectionModel.prototype.init = function(grid) {
}
Ext.grid.AbstractSelectionModel.prototype.lock = function() {}
Ext.grid.AbstractSelectionModel.prototype.unlock = function() {}
Ext.grid.AbstractSelectionModel.prototype.isLocked = function() {
	/// <returns type="Boolean" />
}
Ext.grid.AbstractSelectionModel.prototype.locked = null;

Ext.grid.RowSelectionModel.prototype = new Ext.grid.AbstractSelectionModel;

Ext.grid.RowSelectionModel.prototype.singleSelect = false;
Ext.grid.RowSelectionModel.prototype.initEvents = function() {}
Ext.grid.RowSelectionModel.prototype.onRefresh = function() {}
Ext.grid.RowSelectionModel.prototype.onRemove = function(v, index, r) {
}
Ext.grid.RowSelectionModel.prototype.onRowUpdated = function(v, index, r) {
}
Ext.grid.RowSelectionModel.prototype.selectRecords = function(records, keepExisting) {
	/// <param name="records" type="Array"/>
	/// <param name="keepExisting" type="Boolean" optional="true"/>
}
Ext.grid.RowSelectionModel.prototype.getCount = function() {
	/// <returns type="Number" />
}
Ext.grid.RowSelectionModel.prototype.selectFirstRow = function() {}
Ext.grid.RowSelectionModel.prototype.selectLastRow = function(keepExisting) {
	/// <param name="keepExisting" type="Boolean" optional="true"/>
}
Ext.grid.RowSelectionModel.prototype.selectNext = function(keepExisting) {
	/// <param name="keepExisting" type="Boolean" optional="true"/>
	/// <returns type="Boolean" />
}
Ext.grid.RowSelectionModel.prototype.selectPrevious = function(keepExisting) {
	/// <param name="keepExisting" type="Boolean" optional="true"/>
	/// <returns type="Boolean" />
}
Ext.grid.RowSelectionModel.prototype.hasNext = function() {
	/// <returns type="Boolean" />
}
Ext.grid.RowSelectionModel.prototype.hasPrevious = function() {
	/// <returns type="Boolean" />
}
Ext.grid.RowSelectionModel.prototype.getSelections = function() {
	/// <returns type="Array" />
}
Ext.grid.RowSelectionModel.prototype.getSelected = function() {
	/// <returns type="Ext.data.Record" />
}
Ext.grid.RowSelectionModel.prototype.each = function(fn, scope) {
	/// <param name="fn" type="Function"/>
	/// <param name="scope" type="Object" optional="true"/>
	/// <returns type="Boolean" />
}
Ext.grid.RowSelectionModel.prototype.clearSelections = function(fast) {
}
Ext.grid.RowSelectionModel.prototype.selectAll = function() {}
Ext.grid.RowSelectionModel.prototype.hasSelection = function() {
	/// <returns type="Boolean" />
}
Ext.grid.RowSelectionModel.prototype.isSelected = function(index) {
	/// <param name="index" type="Number|Record"/>
	/// <returns type="Boolean" />
}
Ext.grid.RowSelectionModel.prototype.isIdSelected = function(id) {
	/// <param name="id" type="String"/>
	/// <returns type="Boolean" />
}
Ext.grid.RowSelectionModel.prototype.handleMouseDown = function(g, rowIndex, e) {
}
Ext.grid.RowSelectionModel.prototype.selectRows = function(rows, keepExisting) {
	/// <param name="rows" type="Array"/>
	/// <param name="keepExisting" type="Boolean" optional="true"/>
}
Ext.grid.RowSelectionModel.prototype.selectRange = function(startRow, endRow, keepExisting) {
	/// <param name="startRow" type="Number"/>
	/// <param name="endRow" type="Number"/>
	/// <param name="keepExisting" type="Boolean" optional="true"/>
}
Ext.grid.RowSelectionModel.prototype.deselectRange = function(startRow, endRow, preventViewNotify) {
	/// <param name="startRow" type="Number"/>
	/// <param name="endRow" type="Number"/>
}
Ext.grid.RowSelectionModel.prototype.selectRow = function(index, keepExisting, preventViewNotify) {
	/// <param name="index" type="Number"/>
	/// <param name="keepExisting" type="Boolean" optional="true"/>
}
Ext.grid.RowSelectionModel.prototype.deselectRow = function(index, preventViewNotify) {
	/// <param name="index" type="Number"/>
}
Ext.grid.RowSelectionModel.prototype.restoreLast = function() {}
Ext.grid.RowSelectionModel.prototype.acceptsNav = function(row, col, cm) {
}
Ext.grid.RowSelectionModel.prototype.onEditorKey = function(field, e) {
}
Ext.grid.RowSelectionModel.prototype.selections = null;
Ext.grid.RowSelectionModel.prototype.last = null;
Ext.grid.RowSelectionModel.prototype.lastActive = null;

Ext.grid.CellSelectionModel.prototype = new Ext.grid.AbstractSelectionModel;

Ext.grid.CellSelectionModel.prototype.initEvents = function() {}
Ext.grid.CellSelectionModel.prototype.beforeEdit = function(e) {
}
Ext.grid.CellSelectionModel.prototype.onRowUpdated = function(v, index, r) {
}
Ext.grid.CellSelectionModel.prototype.onViewChange = function() {}
Ext.grid.CellSelectionModel.prototype.getSelectedCell = function() {
	/// <returns type="Array" />
}
Ext.grid.CellSelectionModel.prototype.clearSelections = function(preventNotify) {
	/// <param name="preventNotify" type="Boolean"/>
}
Ext.grid.CellSelectionModel.prototype.hasSelection = function() {
	/// <returns type="Boolean" />
}
Ext.grid.CellSelectionModel.prototype.handleMouseDown = function(g, row, cell, e) {
}
Ext.grid.CellSelectionModel.prototype.select = function(rowIndex, colIndex, preventViewNotify, preventFocus, r) {
	/// <param name="rowIndex" type="Number"/>
	/// <param name="colIndex" type="Number"/>
}
Ext.grid.CellSelectionModel.prototype.isSelectable = function(rowIndex, colIndex, cm) {
}
Ext.grid.CellSelectionModel.prototype.handleKeyDown = function(e) {
}
Ext.grid.CellSelectionModel.prototype.acceptsNav = function(row, col, cm) {
}
Ext.grid.CellSelectionModel.prototype.onEditorKey = function(field, e) {
}
Ext.grid.CellSelectionModel.prototype.selection = null;

Ext.grid.EditorGridPanel.prototype = new Ext.grid.GridPanel;

Ext.grid.EditorGridPanel.prototype.clicksToEdit = 0;
Ext.grid.EditorGridPanel.prototype.isEditor = false;
Ext.grid.EditorGridPanel.prototype.detectEdit = false;
Ext.grid.EditorGridPanel.prototype.autoEncode = false;
Ext.grid.EditorGridPanel.prototype.trackMouseOver = false;
Ext.grid.EditorGridPanel.prototype.initComponent = function() {}
Ext.grid.EditorGridPanel.prototype.initEvents = function() {}
Ext.grid.EditorGridPanel.prototype.onCellDblClick = function(g, row, col) {
}
Ext.grid.EditorGridPanel.prototype.onAutoEditClick = function(e, t) {
}
Ext.grid.EditorGridPanel.prototype.onEditComplete = function(ed, value, startValue) {
}
Ext.grid.EditorGridPanel.prototype.startEditing = function(row, col) {
	/// <param name="row" type="Number"/>
	/// <param name="col" type="Number"/>
}
Ext.grid.EditorGridPanel.prototype.preEditValue = function(r, field) {
}
Ext.grid.EditorGridPanel.prototype.postEditValue = function(value, originalValue, r, field) {
}
Ext.grid.EditorGridPanel.prototype.stopEditing = function(cancel) {
	/// <param name="cancel" type="Boolean" optional="true"/>
}
Ext.grid.EditorGridPanel.prototype.onDestroy = function() {}

Ext.grid.GridEditor.prototype = new Ext.Editor;

Ext.grid.GridEditor.prototype.alignment = "";
Ext.grid.GridEditor.prototype.autoSize = "";
Ext.grid.GridEditor.prototype.hideEl = false;
Ext.grid.GridEditor.prototype.cls = "";
Ext.grid.GridEditor.prototype.shim = false;
Ext.grid.GridEditor.prototype.shadow = false;

Ext.grid.PropertyStore.prototype = new Ext.util.Observable;

Ext.grid.PropertyStore.prototype.setSource = function(o) {
}
Ext.grid.PropertyStore.prototype.onUpdate = function(ds, record, type) {
}
Ext.grid.PropertyStore.prototype.getProperty = function(row) {
}
Ext.grid.PropertyStore.prototype.isEditableValue = function(val) {
}
Ext.grid.PropertyStore.prototype.setValue = function(prop, value) {
}
Ext.grid.PropertyStore.prototype.getSource = function() {}
Ext.grid.PropertyStore.prototype.grid = null;
Ext.grid.PropertyStore.prototype.store = null;

Ext.grid.PropertyColumnModel.prototype = new Ext.grid.DefaultColumnModel;

Ext.grid.PropertyColumnModel.prototype.nameText = "";
Ext.grid.PropertyColumnModel.prototype.valueText = "";
Ext.grid.PropertyColumnModel.prototype.dateFormat = "";
Ext.grid.PropertyColumnModel.prototype.renderDate = function(dateVal) {
}
Ext.grid.PropertyColumnModel.prototype.renderBool = function(bVal) {
}
Ext.grid.PropertyColumnModel.prototype.isCellEditable = function(colIndex, rowIndex) {
}
Ext.grid.PropertyColumnModel.prototype.getRenderer = function(col) {
}
Ext.grid.PropertyColumnModel.prototype.renderProp = function(v) {
}
Ext.grid.PropertyColumnModel.prototype.renderCell = function(val) {
}
Ext.grid.PropertyColumnModel.prototype.getPropertyName = function(name) {
}
Ext.grid.PropertyColumnModel.prototype.getCellEditor = function(colIndex, rowIndex) {
}
Ext.grid.PropertyColumnModel.prototype.grid = null;
Ext.grid.PropertyColumnModel.prototype.store = null;
Ext.grid.PropertyColumnModel.prototype.bselect = null;
Ext.grid.PropertyColumnModel.prototype.editors = null;
Ext.grid.PropertyColumnModel.prototype.renderCellDelegate = null;
Ext.grid.PropertyColumnModel.prototype.renderPropDelegate = null;

Ext.grid.PropertyGrid.prototype = new Ext.grid.EditorGridPanel;

Ext.grid.PropertyGrid.prototype.enableColumnMove = false;
Ext.grid.PropertyGrid.prototype.stripeRows = false;
Ext.grid.PropertyGrid.prototype.trackMouseOver = false;
Ext.grid.PropertyGrid.prototype.clicksToEdit = 0;
Ext.grid.PropertyGrid.prototype.enableHdMenu = false;
Ext.grid.PropertyGrid.prototype.viewConfig = null;
Ext.grid.PropertyGrid.prototype.initComponent = function() {}
Ext.grid.PropertyGrid.prototype.onRender = function() {}
Ext.grid.PropertyGrid.prototype.afterRender = function() {}
Ext.grid.PropertyGrid.prototype.setSource = function(source) {
	/// <param name="source" type="Object"/>
}
Ext.grid.PropertyGrid.prototype.getSource = function() {
	/// <returns type="Object" />
}

Ext.grid.RowNumberer.prototype = {
	header : "",
	width : 0,
	sortable : false,
	fixed : false,
	menuDisabled : false,
	dataIndex : "",
	id : "",
	rowspan : null,
	renderer : function(v, p, record, rowIndex) {
	}
}

Ext.grid.CheckboxSelectionModel.prototype = new Ext.grid.RowSelectionModel;

Ext.grid.CheckboxSelectionModel.prototype.header = "";
Ext.grid.CheckboxSelectionModel.prototype.width = 0;
Ext.grid.CheckboxSelectionModel.prototype.sortable = false;
Ext.grid.CheckboxSelectionModel.prototype.menuDisabled = false;
Ext.grid.CheckboxSelectionModel.prototype.fixed = false;
Ext.grid.CheckboxSelectionModel.prototype.dataIndex = "";
Ext.grid.CheckboxSelectionModel.prototype.id = "";
Ext.grid.CheckboxSelectionModel.prototype.initEvents = function() {}
Ext.grid.CheckboxSelectionModel.prototype.onMouseDown = function(e, t) {
}
Ext.grid.CheckboxSelectionModel.prototype.onHdMouseDown = function(e, t) {
}
Ext.grid.CheckboxSelectionModel.prototype.renderer = function(v, p, record) {
}

Ext.LoadMask.prototype = {
	msg : "",
	msgCls : "",
	disabled : false,
	disable : function() {	},
	enable : function() {	},
	onLoad : function() {	},
	onBeforeLoad : function() {	},
	show : function() {	},
	hide : function() {	},
	destroy : function() {	},
	el : null
}

Ext.ProgressBar.prototype = new Ext.BoxComponent;

Ext.ProgressBar.prototype.baseCls = "";
Ext.ProgressBar.prototype.waitTimer = null;
Ext.ProgressBar.prototype.initComponent = function() {}
Ext.ProgressBar.prototype.onRender = function(ct, position) {
}
Ext.ProgressBar.prototype.afterRender = function() {}
Ext.ProgressBar.prototype.updateProgress = function(value, text) {
	/// <param name="value" type="Float" optional="true"/>
	/// <param name="text" type="String" optional="true"/>
	/// <returns type="Ext.ProgressBar" />
}
Ext.ProgressBar.prototype.wait = function(o) {
	/// <param name="o" type="Object" optional="true"/>
	/// <returns type="Ext.ProgressBar" />
}
Ext.ProgressBar.prototype.isWaiting = function() {
	/// <returns type="Boolean" />
}
Ext.ProgressBar.prototype.updateText = function(text) {
	/// <param name="text" type="String" optional="true"/>
	/// <returns type="Ext.ProgressBar" />
}
Ext.ProgressBar.prototype.syncProgressBar = function() {}
Ext.ProgressBar.prototype.setSize = function(w, h) {
	/// <param name="w" type="Number"/>
	/// <param name="h" type="Number"/>
	/// <returns type="Ext.ProgressBar" />
}
Ext.ProgressBar.prototype.reset = function(hide) {
	/// <param name="hide" type="Boolean" optional="true"/>
	/// <returns type="Ext.ProgressBar" />
}

Ext.Slider.prototype = new Ext.BoxComponent;

Ext.Slider.prototype.vertical = false;
Ext.Slider.prototype.minValue = 0;
Ext.Slider.prototype.maxValue = 0;
Ext.Slider.prototype.keyIncrement = 0;
Ext.Slider.prototype.increment = 0;
Ext.Slider.prototype.clickRange = [];
Ext.Slider.prototype.clickToChange = false;
Ext.Slider.prototype.animate = false;
Ext.Slider.prototype.dragging = false;
Ext.Slider.prototype.initComponent = function() {}
Ext.Slider.prototype.onRender = function() {}
Ext.Slider.prototype.initEvents = function() {}
Ext.Slider.prototype.onMouseDown = function(e) {
}
Ext.Slider.prototype.onClickChange = function(local) {
}
Ext.Slider.prototype.onKeyDown = function(e) {
}
Ext.Slider.prototype.doSnap = function(value) {
}
Ext.Slider.prototype.afterRender = function() {}
Ext.Slider.prototype.getRatio = function() {}
Ext.Slider.prototype.normalizeValue = function(v) {
}
Ext.Slider.prototype.setValue = function(v, animate, changeComplete) {
	/// <param name="v" type="Number"/>
	/// <param name="animate" type="Boolean"/>
}
Ext.Slider.prototype.translateValue = function(v) {
}
Ext.Slider.prototype.reverseValue = function(pos) {
}
Ext.Slider.prototype.moveThumb = function(v, animate) {
}
Ext.Slider.prototype.focus = function() {}
Ext.Slider.prototype.onBeforeDragStart = function(e) {
}
Ext.Slider.prototype.onDragStart = function(e) {
}
Ext.Slider.prototype.onDrag = function(e) {
}
Ext.Slider.prototype.onDragEnd = function(e) {
}
Ext.Slider.prototype.onResize = function(w, h) {
}
Ext.Slider.prototype.syncThumb = function() {}
Ext.Slider.prototype.getValue = function() {
	/// <returns type="Number" />
}

Ext.StatusBar.prototype = new Ext.Toolbar;

Ext.StatusBar.prototype.cls = "";
Ext.StatusBar.prototype.busyIconCls = "";
Ext.StatusBar.prototype.busyText = "";
Ext.StatusBar.prototype.autoClear = 0;
Ext.StatusBar.prototype.activeThreadId = 0;
Ext.StatusBar.prototype.initComponent = function() {}
Ext.StatusBar.prototype.afterRender = function() {}
Ext.StatusBar.prototype.setStatus = function(o) {
	/// <param name="o" type="Object|String"/>
	/// <returns type="Ext.StatusBar" />
}
Ext.StatusBar.prototype.clearStatus = function(o) {
	/// <param name="o" type="Object" optional="true"/>
	/// <returns type="Ext.StatusBar" />
}
Ext.StatusBar.prototype.setText = function(text) {
	/// <param name="text" type="String" optional="true"/>
	/// <returns type="Ext.StatusBar" />
}
Ext.StatusBar.prototype.getText = function() {
	/// <returns type="String" />
}
Ext.StatusBar.prototype.setIcon = function(cls) {
	/// <param name="cls" type="String" optional="true"/>
	/// <returns type="Ext.StatusBar" />
}
Ext.StatusBar.prototype.showBusy = function(o) {
	/// <param name="o" type="Object|String" optional="true"/>
	/// <returns type="Ext.StatusBar" />
}

Ext.debug.ScriptsPanel.prototype = new Ext.Panel;

Ext.debug.ScriptsPanel.prototype.id = "";
Ext.debug.ScriptsPanel.prototype.region = "";
Ext.debug.ScriptsPanel.prototype.minWidth = 0;
Ext.debug.ScriptsPanel.prototype.split = false;
Ext.debug.ScriptsPanel.prototype.width = 0;
Ext.debug.ScriptsPanel.prototype.border = false;
Ext.debug.ScriptsPanel.prototype.layout = "";
Ext.debug.ScriptsPanel.prototype.style = "";
Ext.debug.ScriptsPanel.prototype.initComponent = function() {}
Ext.debug.ScriptsPanel.prototype.evalScript = function() {}
Ext.debug.ScriptsPanel.prototype.clear = function() {}

Ext.debug.LogPanel.prototype = new Ext.Panel;

Ext.debug.LogPanel.prototype.autoScroll = false;
Ext.debug.LogPanel.prototype.region = "";
Ext.debug.LogPanel.prototype.border = false;
Ext.debug.LogPanel.prototype.style = "";
Ext.debug.LogPanel.prototype.log = function() {}
Ext.debug.LogPanel.prototype.clear = function() {}

Ext.debug.DomTree.prototype = new Ext.tree.TreePanel;

Ext.debug.DomTree.prototype.enableDD = false;
Ext.debug.DomTree.prototype.lines = false;
Ext.debug.DomTree.prototype.rootVisible = false;
Ext.debug.DomTree.prototype.animate = false;
Ext.debug.DomTree.prototype.hlColor = "";
Ext.debug.DomTree.prototype.autoScroll = false;
Ext.debug.DomTree.prototype.region = "";
Ext.debug.DomTree.prototype.border = false;
Ext.debug.DomTree.prototype.initComponent = function() {}

Ext.debug.HtmlNode.prototype = new Ext.tree.AsyncTreeNode;

Ext.debug.HtmlNode.prototype.cls = "";
Ext.debug.HtmlNode.prototype.preventHScroll = false;
Ext.debug.HtmlNode.prototype.refresh = function(highlight) {
}
Ext.debug.HtmlNode.prototype.onExpand = function() {}
Ext.debug.HtmlNode.prototype.onCollapse = function() {}
Ext.debug.HtmlNode.prototype.render = function(bulkRender) {
}
Ext.debug.HtmlNode.prototype.highlightNode = function() {}
Ext.debug.HtmlNode.prototype.highlight = function() {}
Ext.debug.HtmlNode.prototype.frame = function() {}
Ext.debug.HtmlNode.prototype.unframe = function() {}
Ext.debug.HtmlNode.prototype.htmlNode = null;
Ext.debug.HtmlNode.prototype.tagName = null;

// static property
Ext.StoreMgr = null;
Ext.version = "";
Ext.isStrict = false;
Ext.isSecure = false;
Ext.isReady = false;
Ext.enableGarbageCollector = false;
Ext.enableListenerCollection = false;
Ext.SSL_SECURE_URL = "";
Ext.BLANK_IMAGE_URL = "";
Ext.isOpera = false;
Ext.isSafari = false;
Ext.isSafari3 = false;
Ext.isSafari2 = false;
Ext.isIE = false;
Ext.isIE6 = false;
Ext.isIE7 = false;
Ext.isGecko = false;
Ext.isGecko2 = false;
Ext.isGecko3 = false;
Ext.isBorderBox = false;
Ext.isLinux = false;
Ext.isWindows = false;
Ext.isMac = false;
Ext.isAir = false;
Ext.useShims = false;
Ext.lib.Event.doAdd = null;
Ext.lib.Event.doRemove = null;
Ext.lib.Event.POLL_RETRYS = 0;
Ext.lib.Event.POLL_INTERVAL = 0;
Ext.lib.Event.EL = 0;
Ext.lib.Event.TYPE = 0;
Ext.lib.Event.FN = 0;
Ext.lib.Event.WFN = 0;
Ext.lib.Event.OBJ = 0;
Ext.lib.Event.ADJ_SCOPE = 0;
Ext.lib.Ajax.hasHeaders = false;
Ext.lib.Ajax.useDefaultHeader = false;
Ext.lib.Ajax.defaultPostHeader = "";
Ext.lib.Ajax.useDefaultXhrHeader = false;
Ext.lib.Ajax.defaultXhrHeader = "";
Ext.lib.Ajax.hasDefaultHeaders = false;
Ext.lib.Ajax.pollInterval = 0;
Ext.lib.Ajax.transactionId = 0;
Ext.lib.Ajax.activeX = [];
Ext.lib.AnimMgr.fps = 0;
Ext.lib.AnimMgr.delay = 0;
Ext.DomHelper.useDom = false;
Ext.DomQuery.matchers = [];
Ext.util.Format.stripTagsRE = new RegExp;
Ext.util.Format.stripScriptsRe = new RegExp;
Ext.EventManager.ieDeferSrc = false;
Ext.EventManager.textResizeInterval = 0;
Ext.EventManager.stoppedMouseDownEvent = new Ext.util.Event;
Ext.EventObject = new Ext.EventObjectImpl;
Ext.Element.collectorThreadId = null;
Ext.Element.unitPattern = new RegExp;
Ext.Element.boxMarkup = "";
Ext.Element.VISIBILITY = 0;
Ext.Element.DISPLAY = 0;
Ext.Element.borders.l = "";
Ext.Element.borders.r = "";
Ext.Element.borders.t = "";
Ext.Element.borders.b = "";
Ext.Element.paddings.l = "";
Ext.Element.paddings.r = "";
Ext.Element.paddings.t = "";
Ext.Element.paddings.b = "";
Ext.Element.margins.l = "";
Ext.Element.margins.r = "";
Ext.Element.margins.t = "";
Ext.Element.margins.b = "";
Ext.enableFx = false;
Ext.data.SortTypes.stripTagsRE = new RegExp;
Ext.data.Record.AUTO_ID = 0;
Ext.data.Record.EDIT = "";
Ext.data.Record.REJECT = "";
Ext.data.Record.COMMIT = "";
Ext.data.ScriptTagProxy.TRANS_ID = 0;
Ext.Ajax = new Ext.data.Connection;
Ext.Ajax.extraParams = null;
Ext.Ajax.url = null;
Ext.Ajax.defaultHeaders = null;
Ext.Ajax.method = null;
Ext.Ajax.serializeForm = function(form) {
	/// <param name="form" type="String|HTMLElement"/>
	/// <returns type="String" />
}
Ext.Updater.defaults.timeout = 0;
Ext.Updater.defaults.loadScripts = false;
Ext.Updater.defaults.sslBlankUrl = "";
Ext.Updater.defaults.disableCaching = false;
Ext.Updater.defaults.showLoadIndicator = false;
Ext.Updater.defaults.indicatorText = "";
Ext.UpdateManager.defaults.timeout = 0;
Ext.UpdateManager.defaults.loadScripts = false;
Ext.UpdateManager.defaults.sslBlankUrl = "";
Ext.UpdateManager.defaults.disableCaching = false;
Ext.UpdateManager.defaults.showLoadIndicator = false;
Ext.UpdateManager.defaults.indicatorText = "";
Ext.TaskMgr = new Ext.util.TaskRunner;
Ext.dd.DragDropMgr.dragCurrent = null;
Ext.dd.DragDropMgr.clickTimeout = null;
Ext.dd.DragDropMgr.deltaX = 0;
Ext.dd.DragDropMgr.deltaY = 0;
Ext.dd.DragDropMgr.preventDefault = false;
Ext.dd.DragDropMgr.stopPropagation = false;
Ext.dd.DragDropMgr.initialized = false;
Ext.dd.DragDropMgr.locked = false;
Ext.dd.DragDropMgr.POINT = 0;
Ext.dd.DragDropMgr.INTERSECT = 0;
Ext.dd.DragDropMgr.mode = 0;
Ext.dd.DragDropMgr.useCache = false;
Ext.dd.DragDropMgr.clickPixelThresh = 0;
Ext.dd.DragDropMgr.clickTimeThresh = 0;
Ext.dd.DragDropMgr.dragThreshMet = false;
Ext.dd.DragDropMgr.startX = 0;
Ext.dd.DragDropMgr.startY = 0;
Ext.dd.DDM.dragCurrent = null;
Ext.dd.DDM.clickTimeout = null;
Ext.dd.DDM.deltaX = 0;
Ext.dd.DDM.deltaY = 0;
Ext.dd.DDM.preventDefault = false;
Ext.dd.DDM.stopPropagation = false;
Ext.dd.DDM.initialized = false;
Ext.dd.DDM.locked = false;
Ext.dd.DDM.POINT = 0;
Ext.dd.DDM.INTERSECT = 0;
Ext.dd.DDM.mode = 0;
Ext.dd.DDM.useCache = false;
Ext.dd.DDM.clickPixelThresh = 0;
Ext.dd.DDM.clickTimeThresh = 0;
Ext.dd.DDM.dragThreshMet = false;
Ext.dd.DDM.startX = 0;
Ext.dd.DDM.startY = 0;
Ext.dd.DDProxy.dragElId = "";
Ext.dd.ScrollManager.vthresh = 0;
Ext.dd.ScrollManager.hthresh = 0;
Ext.dd.ScrollManager.increment = 0;
Ext.dd.ScrollManager.frequency = 0;
Ext.dd.ScrollManager.animate = false;
Ext.dd.ScrollManager.animDuration = 0;
Ext.ComponentMgr.all = new Ext.util.MixedCollection;
Ext.Component.AUTO_ID = 0;
Ext.SplitBar.VERTICAL = 0;
Ext.SplitBar.HORIZONTAL = 0;
Ext.SplitBar.LEFT = 0;
Ext.SplitBar.RIGHT = 0;
Ext.SplitBar.TOP = 0;
Ext.SplitBar.BOTTOM = 0;
Ext.WindowMgr = new Ext.WindowGroup;
Ext.Resizable.positions.n = "";
Ext.Resizable.positions.s = "";
Ext.Resizable.positions.e = "";
Ext.Resizable.positions.w = "";
Ext.Resizable.positions.se = "";
Ext.Resizable.positions.sw = "";
Ext.Resizable.positions.nw = "";
Ext.Resizable.positions.ne = "";
Ext.MessageBox.OK.ok = false;
Ext.MessageBox.CANCEL.cancel = false;
Ext.MessageBox.OKCANCEL.ok = false;
Ext.MessageBox.OKCANCEL.cancel = false;
Ext.MessageBox.YESNO.yes = false;
Ext.MessageBox.YESNO.no = false;
Ext.MessageBox.YESNOCANCEL.yes = false;
Ext.MessageBox.YESNOCANCEL.no = false;
Ext.MessageBox.YESNOCANCEL.cancel = false;
Ext.MessageBox.INFO = "";
Ext.MessageBox.WARNING = "";
Ext.MessageBox.QUESTION = "";
Ext.MessageBox.ERROR = "";
Ext.MessageBox.defaultTextHeight = 0;
Ext.MessageBox.maxWidth = 0;
Ext.MessageBox.minWidth = 0;
Ext.MessageBox.minProgressWidth = 0;
Ext.MessageBox.buttonText.ok = "";
Ext.MessageBox.buttonText.cancel = "";
Ext.MessageBox.buttonText.yes = "";
Ext.MessageBox.buttonText.no = "";
Ext.Msg.OK.ok = false;
Ext.Msg.CANCEL.cancel = false;
Ext.Msg.OKCANCEL.ok = false;
Ext.Msg.OKCANCEL.cancel = false;
Ext.Msg.YESNO.yes = false;
Ext.Msg.YESNO.no = false;
Ext.Msg.YESNOCANCEL.yes = false;
Ext.Msg.YESNOCANCEL.no = false;
Ext.Msg.YESNOCANCEL.cancel = false;
Ext.Msg.INFO = "";
Ext.Msg.WARNING = "";
Ext.Msg.QUESTION = "";
Ext.Msg.ERROR = "";
Ext.Msg.defaultTextHeight = 0;
Ext.Msg.maxWidth = 0;
Ext.Msg.minWidth = 0;
Ext.Msg.minProgressWidth = 0;
Ext.Msg.buttonText.ok = "";
Ext.Msg.buttonText.cancel = "";
Ext.Msg.buttonText.yes = "";
Ext.Msg.buttonText.no = "";
Ext.form.Action.CLIENT_INVALID = "";
Ext.form.Action.SERVER_INVALID = "";
Ext.form.Action.CONNECT_FAILURE = "";
Ext.form.Action.LOAD_FAILURE = "";
Ext.form.VTypes.emailText = "";
Ext.form.VTypes.emailMask = new RegExp;
Ext.form.VTypes.urlText = "";
Ext.form.VTypes.alphaText = "";
Ext.form.VTypes.alphaMask = new RegExp;
Ext.form.VTypes.alphanumText = "";
Ext.form.VTypes.alphanumMask = new RegExp;
Ext.grid.GroupingView.GROUP_ID = 0;
Ext.grid.PropertyRecord = new Function();
Ext.History.fieldId = "";
Ext.History.iframeId = "";
