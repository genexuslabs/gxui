/// <reference path="..\VStudio\vswd-ext_2.2.js" />
gxui.KeyMap = Ext.extend(gxui.UserControl, {
	initialize: function() {
		gxui.KeyMap.superclass.initialize.call(this);
	},

	onRender: function() {
		this.m_keyMap = new Ext.KeyMap(document);
	},

	onRefresh: function() {
	},

	getUnderlyingControl: function() {
		return null;
	},

	keyHandler: function(key) {
		if (typeof (key) == 'number') {
			this.Key = "";
			this.KeyCode = key;
		}
		else {
			this.Key = key;
			this.KeyCode = 0;
		}

		if (this.KeyPressed)
			this.KeyPressed();
	},

	// Methods
	MonitorKey: function(key, ctrlKey, shiftKey, altKey) {
		var keyConfig = { key: key };

		if (ctrlKey !== undefined)
			keyConfig.ctrl = ctrlKey;
		if (shiftKey !== undefined)
			keyConfig.shift = shiftKey;
		if (altKey !== undefined)
			keyConfig.alt = altKey;

		this.m_keyMap.on(keyConfig, function() { this.keyHandler(key); }, this);
	},

	MonitorKeyByCode: function() {
		this.MonitorKey.apply(this, arguments);
	},

	Enable: function() {
		this.m_keyMap.enable();
	},

	Disable: function() {
		this.m_keyMap.disable();
	},

	IsEnabled: function() {
		return this.m_keyMap.isEnabled();
	}
});
