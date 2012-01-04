/// <reference path="..\VStudio\vswd-ext_2.2.js" />

/**
* @class gxui.PropertyEditorMgr
* Provides a registry of all gxui.PropertiesEditor component Editors
* @singleton
*/
gxui.PropertyEditorMgr = function() {
	return {
		types: {},

		register: function(xtype, cls) {
			this.types[xtype] = cls;
			cls.xtype = xtype;
		},

		unregister: function(xtype) {
			delete this.types[xtype];
		},

		isRegistered: function(xtype) {
			return this.types[xtype] != undefined;
		},

		create: function(xtype, propertiesEditor, property, config) {
			if (this.types[xtype]) {
				return new this.types[xtype](propertiesEditor, property, config);
			}
			return null;
		}
	};
} ();

/**
* @class gxui.PropertyEditor
* @extends Ext.Editor
* Base class for all gxui.PropertiesEditor component Editors. Provides a default editor configuration.
* @constructor
* @param {gxui.PropertiesEditor} propertiesEditor The PropertiesEditor component to whom this editor is bound
* @param {Object} property The property this editor allows to edit.
* @param {Object} config (optional) Additional config for the editor.
*/
gxui.PropertyEditor = function(propertiesEditor, property, config) {
	config = config || {};
	var field = config.field || new Ext.form.TextField(Ext.apply(config, {
		allowBlank: true
	}));

	gxui.PropertyEditor.superclass.constructor.call(this, field, config);

	this.propertiesEditor = propertiesEditor;
	this.property = property;
};

Ext.extend(gxui.PropertyEditor, Ext.Editor, {
	cancelOnEsc: true,
	completeOnEnter: true,
	updateEl: true,
	ignoreNoChange: true,
	autoSize: true,
	constrain: true,
	cls: 'x-small-editor',
	
	renderer: function(value) {
		if (value && this.field && this.field.initialConfig.inputType == 'password')
			return value.replace(/./g, '*');
		return value;
	}
});

gxui.PropertyEditorMgr.register("text-editor", gxui.PropertyEditor);