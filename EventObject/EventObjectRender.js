/// <reference path="..\VStudio\vswd-ext_2.2.js" />
gxui.EventObject = Ext.extend(gxui.UserControl, {
	initialize: function() {
		gxui.EventObject.superclass.initialize.call(this);
	},

	onRender: function() {
		gx.fx.obs.addObserver('gx.onbeforeevent', this, function() {
			var e = Ext.EventObject;
			this.Key = e.getKey();

			var xy = e.getXY();
			if (xy && xy.length > 0) {
				this.X = xy[0];
				this.Y = xy[1];
			}

			this.MouseButton = e.button;

			this.AltKey = e.altKey;
			this.CtrlKey = e.ctrlKey;
			this.ShiftKey = e.shiftKey;
		});
	},

	onRefresh: function() {
	},

	getUnderlyingControl: function() {
		return null;
	},

	PrevenDefault: function() {
		Ext.EventObject.preventDefault();
	},

	StopEvent: function() {
		Ext.EventObject.stopEvent();
	},

	StopPropagation: function() {
		Ext.EventObject.stopPropagation();
	}
});
