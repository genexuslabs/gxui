/// <reference path="..\..\Freezer\Ext\ext-all-dev.js" />

Ext.define('gxui.GridExtension.Column', {
	extend: 'Ext.grid.column.Column',
	alias: 'widget.gxui.column',

	constructor: function (config) {
		this.callParent([config]);
		this.renderer = Ext.bind(this.renderer, this);
		this.editor = this.defineEditor(this.gxColumn, this.actualColIndex);
	},

	destroy: function () {
		delete this.gxGrid;
		delete this.gxColumn;
		this.callParent(arguments);
	},

	mapDateFormat: function () {
		switch (gx.dateFormat) {
			case 'MDY':
				return "m/d/y";
			case 'DMY':
				return "d/m/y";
			case 'MDY4':
				return "m/d/Y";
			case 'DMY4':
				return "d/m/Y";
			case 'YMD':
				return "y/m/d";
			default:
				return "Y/m/d";
		}
	},

	mapTimeFormat: function (gxColumn) {
		if (gxColumn.gxControl.vStruct) {
			var nDec = gxColumn.gxControl.vStruct.dec,
			minutes = nDec > 3,
			seconds = nDec == 8,
			hours = nDec > 1;

			if (gx.timeFormat == 12) {
				if (hours && minutes && seconds)
					return "h:i:s A";

				if (hours && minutes)
					return "h:i A";

				if (hours)
					return "h A";
			}
			else {
				if (hours && minutes && seconds)
					return "H:i:s";

				if (hours && minutes)
					return "H:i";

				if (hours)
					return "H";
			}
		}

		return "h:i";
	},

	defineEditor: function (gxColumn, actualColIndex) {
		var types = gx.types;
		switch (gxColumn.type) {
			case types.numeric:
				var colData = this.gxGrid.ParentObject.GXValidFnc[gxColumn.gxId];
				return {
					xtype: 'numberfield',
					allowDecimals: colData.dec > 0 ? true : false,
					minValue: colData.sign ? Number.NEGATIVE_INFINITY : 0,
					decimalPrecision: colData.dec,
					decimalSeparator: gx.decimalPoint,
					enforceMaxLength: true,
					maxLength: colData.len,
					maxValue: Math.pow(10, colData.len - colData.dec - (colData.dec > 0 ? 1 : 0)) - (colData.dec > 0 ? 1 / Math.pow(10, colData.dec) : 0)
				};

			case types.date:
				return {
					xtype: 'datefield',
					format: this.mapDateFormat()
				};

			case types.dateTime:
				return {
					xtype: 'xdatetime',
					dateFormat: this.mapDateFormat(),
					timeFormat: this.mapTimeFormat(gxColumn)
				};

			default:
				if (gxColumn.gxControl.type == gx.html.controls.types.multipleLineEdit)
					return {
						xtype: 'textareafield',
						maxLength: gxColumn.gxControl.maxLength
					};

				return {
					xtype: 'textfield',
					maxLength: gxColumn.gxControl.maxLength
				};
		}
	},

	formatNumber: function (value, colData) {
		var picture = colData.pic;
		var numberFormat = "";
		var integerPart = "0"
		if (picture.indexOf(gx.thousandSeparator) >= 0) {
			integerPart += gx.thousandSeparator + "000";
		}
		if (colData.dec > 0)
			numberFormat = integerPart + gx.decimalPoint + (Ext.util.Format.leftPad("", colData.dec, '0') || '0');
		else
			numberFormat = integerPart;

		v = Ext.util.Format.number(value, numberFormat);

		// Left fill with zeros if applies
		var matches = picture.match(new RegExp("^[9" + gx.decimalPoint + gx.thousandSeparator + "]+$"));
		if (matches && matches.length > 0) {
			v = picture.substr(0, picture.length - v.length).replace(/9/ig, "0") + v;
		}

		return v + "";
	},

	mapDatePictureToFormat: function (vStruct) {
		var dateFormat = function (FormatPart, Picture) {
			if (FormatPart == 'Y' && Picture.substr(0, 10) == '99/99/9999')
				return 'Y';
			else if (FormatPart == 'Y')
				return 'y';
			else if (FormatPart == 'M')
				return 'm';
			else if (FormatPart == 'D')
				return 'd';
			else return '';
		};

		var dateTimeFormat = function (Dec) {
			var timeFmt = gx.timeFormat;
			var DPTF = '', AMPM = '', TimeFmt;
			if (timeFmt == 12) {
				DPTF = 'h';
				AMPM = ' A';
			} else if (timeFmt == 24) {
				DPTF = 'H';
				AMPM = '';
			} 

			if (Dec == 2)
				TimeFmt = '';
			else if (Dec == 5)
				TimeFmt = ':i';
			else if (Dec == 8)
				TimeFmt = ':i:s';
			else
				return '';

			return DPTF + TimeFmt + AMPM;
		};


		var Picture = vStruct.dp.pic,
			Dec = vStruct.dp.dec,
			Len = vStruct.len,
			dateFmt = gx.dateFormat,
			D1 = dateFmt.substr(0, 1),
			D2 = dateFmt.substr(1, 1),
			D3 = dateFmt.substr(2, 1),
			DD1 = dateFormat(D1, Picture),
			DD2 = dateFormat(D2, Picture),
			DD3 = dateFormat(D3, Picture),
			DT = dateTimeFormat(Dec);

		if (Len > 0 && Dec > 0)
			return DD1 + '/' + DD2 + '/' + DD3 + ' ' + DT;
		else if (Len > 0)
			return DD1 + '/' + DD2 + '/' + DD3;
		else
			return DT;
	},

	formatDate: function (value, vStruct) {
		var format = this.mapDatePictureToFormat(vStruct);
		return Ext.util.Format.date(value, format);
	},

	renderer: function (value, metadata, record, rowIndex, colIndex, store) {
		var cell = record.raw[this.actualColIndex],
			col = this.gxColumn,
			gxControl = cell.column.gxControl,
			controlTypes = gx.html.controls.types;

		var v = value;
		if (col.type == gx.types.date || col.type == gx.types.dateTime) {
			v = this.formatDate(value, gxControl.vStruct);
		}

		if (col.type == gx.types.numeric && typeof (value) == "number") {
			v = this.formatNumber(value, this.gxGrid.ParentObject.GXValidFnc[this.gxColumn.gxId]);
		}

		if (gx.lang.gxBoolean(cell.visible)) {
			if (gx.lang.gxBoolean(this.gxGrid.UseThemeClasses) && cell.cssClass) {
				metadata.css += ' ' + cell.cssClass
			}

			if (cell.link) {
				return Ext.String.format('<a href="{0}" alt="{2}" target="{3}">{1}</a>', cell.link || "", v || "", cell.alt || "", cell.linkTarget || "");
			}

			var style = "";
			if (cell.style) {
				var color = cell.style.match(/color:(.+);?/);
				if (color) {
					style += Ext.String.format("color:{0};", color[1]);
				}

				var bgColor = cell.style.match(/background-color:(.+);?/);
				if (bgColor) {
					style += Ext.String.format("background-color:{0};", bgColor[1]);
				}
			}

			// If the cell fires a user event and is enabled, wrap with an anchor tag.
			if (/*gx.lang.gxBoolean(cell.enabled) &&*/(col.gxControl.eventName || col.gxControl.jsDynCode)) {
				style += 'cursor:pointer;';
			}

			if (style)
				metadata.style = style;

			//Show Tooltip text if set
			if (cell.title) {
				v = Ext.String.format("<span qtip='{0}'>{1}</span>", cell.title, v);
			}
			return v;
		}
		return "";
	}
});

Ext.define('gxui.GridExtension.ImageColumn', {
	extend: 'gxui.GridExtension.Column',
	alias: 'widget.gxui.imagecolumn',

	defineEditor: Ext.emptyFn,

	renderer: function (value, metadata, record, rowIndex, colIndex, store) {
		var cell = record.raw[this.actualColIndex];
		if (gx.lang.gxBoolean(cell.visible)) {
			value = Ext.String.format('<img src="{0}" class="{1}" title="{2}" />', cell.value, cell.cssClass, cell.title);
		}
		return this.callParent([value, metadata, record, rowIndex, colIndex, store]);
	}
});

Ext.define('gxui.GridExtension.CheckColumn', {
	extend: 'Ext.ux.CheckColumn',
	alias: 'widget.gxui.checkcolumn',

	processEvent: function (type, view, cell, recordIndex, cellIndex, e) {
		if (type == 'mousedown' || (type == 'keydown' && (e.getKey() == e.ENTER || e.getKey() == e.SPACE))) {
			var record = view.panel.store.getAt(recordIndex),
				cell = record.raw[this.actualColIndex];
			if (cell.enabled)
				return this.callParent(arguments);
		}
		else {
			return this.callParent(arguments);
		}
	},
	listeners: {
		'checkchange': function (column, rowIndex, checked) {
			var grid = column.ownerCt.ownerCt,
				editorPlugin = grid.getPlugin(grid.id + '-celledit'),
				editingContext = editorPlugin.getEditingContext(rowIndex, column);

			if (editorPlugin)
				editorPlugin.fireEvent('edit', this, editingContext);

			grid.fireEvent('cellclick', grid.getView(), null, editingContext.colIdx, editingContext.record, null, editingContext.rowIdx, editingContext);
		}
	}
});

Ext.define('gxui.GridExtension.RadioColumn', {
	extend: 'gxui.GridExtension.Column',
	alias: 'widget.gxui.radiocolumn',

	defineEditor: Ext.emptyFn,

	renderer: function (value, metadata, record, rowIndex, colIndex, store) {
		var cell = record.raw[this.actualColIndex];
		if (gx.lang.gxBoolean(cell.visible)) {
			if (typeof value == "string") {
				value = value.trim();
			}
			value = gx.fn.selectedDescription({ s: value, v: cell.possibleValues });
		}
		return this.callParent([value, metadata, record, rowIndex, colIndex, store]);
	}
});

Ext.define('gxui.GridExtension.ComboColumn', {
	extend: 'gxui.GridExtension.Column',
	alias: 'widget.gxui.combocolumn',

	defineEditor: function (gxColumn, actualColIndex) {
		return {
			xtype: 'combobox',
			editable: false,
			triggerAction: 'all',
			selectOnFocus: true,
			disableKeyFilter: false,
			forceSelection: true,
			store: [["", ""]],
			queryMode: 'local',
			populateCombo: function (column) {
				var grid = column.ownerCt.ownerCt,
					record = grid.getPlugin(grid.id + '-celledit').getActiveRecord();
				var cell = record.raw[column.actualColIndex];
				this.getStore().loadData(cell.possibleValues);
				if (typeof cell.value == "string")
					this.select(cell.value.trim());
				else
					this.select(cell.value);
			},
			listeners: {
				'beforerender': function (combo) {
					combo.populateCombo(this);
				},
				'beforequery': function (queryEvent) {
					queryEvent.combo.populateCombo(this);
				},
				'select': function () {
					var grid = this.ownerCt.ownerCt,
						editorPlugin = grid.getPlugin(grid.id + '-celledit');
					editorPlugin.completeEdit();
				},
				scope: this
			}
		};
	},

	renderer: function (value, metadata, record, rowIndex, colIndex, store) {
		var cell = record.raw[this.actualColIndex];
		if (gx.lang.gxBoolean(cell.visible)) {
			if (typeof cell.value == "string") {
				value = value + "";
			}
			value = gx.fn.selectedDescription({ s: value, v: cell.possibleValues });
		}
		return this.callParent([value, metadata, record, rowIndex, colIndex, store]);
	}
});

gxui.GridExtension.ColumnRenderers = function () {
	var GE = gxui.GridExtension;
	var types = gx.html.controls.types;

	var renderers = {};
	renderers[types.image] = 'gxui.imagecolumn';
	renderers[types.checkBox] = 'gxui.checkcolumn';
	renderers[types.radio] = 'gxui.radiocolumn';
	renderers[types.comboBox] = 'gxui.combocolumn';

	renderers.get = function (t) {
		if (this[t]) {
			return this[t];
		}
		return 'gxui.column';
	};

	return renderers;
} ();  
