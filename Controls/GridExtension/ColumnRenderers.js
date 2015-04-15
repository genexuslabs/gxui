/// <reference path="..\..\Freezer\Ext\ext-all-dev.js" />

Ext.define('gxui.GridExtension.Column', function () {
	var pictureHelperRegex;

	return {
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

			if (gx.timeFormat == 12) {
				return "h:i A";
			}

			return "H:i";
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
			var extUtilFormat = Ext.util.Format;
			var picture = colData.pic;
			var numberFormat = "";
			var integerPart = "0"
			if (picture.indexOf(gx.thousandSeparator) >= 0) {
				integerPart += ",000";
			}
			if (colData.dec > 0)
				numberFormat = integerPart + "." + (extUtilFormat.leftPad("", colData.dec, '0') || '0');
			else
				numberFormat = integerPart;

			extUtilFormat.thousandSeparator = gx.thousandSeparator;
			extUtilFormat.decimalSeparator = gx.decimalPoint;
			v = extUtilFormat.number(value, numberFormat);

			// Left fill with zeros if applies
			if (!pictureHelperRegex) {
				pictureHelperRegex = new RegExp("^[9" + gx.decimalPoint + gx.thousandSeparator + "]+$");
			}
			var matches = picture.match(pictureHelperRegex);
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
			var gxdate = value.gxdate;
			if (value - new Date(0, 0, 0, 0, 0, 0, 0) === 0 && gxdate) {
				var gxFormat = gxdate.SFmt,
					dp = vStruct.dp;
				if (dp && dp.pic && dp.pic.indexOf("9999") >= 0) {
					gxFormat = "Y4";
				}
				return gxdate.emptyDateString(gxFormat);
			}
			else {
				var format = this.mapDatePictureToFormat(vStruct);
				return Ext.util.Format.date(value, format);
			}
		},

		renderer: function (value, metadata, record, rowIndex, colIndex, store) {
			if (record.isSummary) {
				return value;
			}

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
				if (!metadata.tdCls) {
					metadata.tdCls = '';
				}

				if (gx.lang.gxBoolean(this.gxGrid.UseThemeClasses) && cell.cssClass) {
					metadata.tdCls += ' ' + cell.cssClass
				}

				if (cell.link) {
					v = Ext.String.format('<a href="{0}" alt="{2}" target="{3}">{1}</a>', cell.link || "", v || "", cell.alt || "", cell.linkTarget || "");
				}

				var style = "";
				if (cell.style)
					style += this.extractCssProperties(["text-decoration", "color", "background-color", "font-weight"], cell.style);

				// If the cell fires a user event and is enabled, wrap with an anchor tag.
				if (cell.grid.grid.isCellEventEnabled(cell)) {
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
		},

		extractCssProperties: function (properties, inputStyle) {
			var buffer = [];
			for (var i = 0, len = properties.length; i < len; i++) {
				var propMatch = inputStyle.match(new RegExp(properties[i] + ":([^;]+);?"));
				if (propMatch)
					buffer.push(Ext.String.format(properties[i] + ":{0};", propMatch[1]));
			}
			return buffer.join("");
		},

		getEditorPlugin: function () {
			return this.gxGrid.getEditorPlugin();
		}
	};
} ());

Ext.define('gxui.GridExtension.ImageColumn', {
	extend: 'gxui.GridExtension.Column',
	alias: 'widget.gxui.imagecolumn',

	defineEditor: Ext.emptyFn,

	renderer: function (value, metadata, record, rowIndex, colIndex, store) {
		var cell = record.raw[this.actualColIndex];
		if (gx.lang.gxBoolean(cell.visible)) {
			var styleBuffer = [];
			if (cell.width) {
				styleBuffer.push("width:");
				styleBuffer.push(cell.width);
				styleBuffer.push(cell.widthUnit);
				styleBuffer.push(";");
			}
			if (cell.height) {
				styleBuffer.push("height:");
				styleBuffer.push(cell.height);
				styleBuffer.push(cell.heightUnit);
				styleBuffer.push(";");
			}
			value = Ext.String.format('<img src="{0}" class="{1}" title="{2}" style="{3}"/>', cell.value, cell.cssClass, cell.title, styleBuffer.join(""));
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
		var vStruct = gxColumn.gxControl.vStruct,
			isSuggest = vStruct && vStruct.gxsgprm && this.gxGrid.requestSuggest;

		return {
			xtype: 'combobox',
			editable: isSuggest,
			triggerAction: 'all',
			selectOnFocus: true,
			disableKeyFilter: false,
			forceSelection: true,
			store: [["", ""]],
			queryMode: 'local',
			typeAhead: isSuggest ? vStruct.gxsgprm[3] : false,
			getActiveRecord: function (column) {
				var plugin = column.getEditorPlugin();
				if (column.gxGrid.EditModel == 'CellEditModel')
					return plugin.getActiveRecord();
				return plugin.context.record;
			},
			populateCombo: function (column, query) {
				var record = this.getActiveRecord(column),
					cell = record.raw[column.actualColIndex],
					gxGrid = column.gxGrid;

				if (isSuggest) {
					query = query || "";
					gxGrid.requestSuggest(column.actualColIndex, cell.row.id, query).done(Ext.bind(function (data) {
						this.getStore().loadData(Ext.Array.map(data, function (item) {
							return [item.c, item.d];
						}));
					}, this));
				}
				else {
					this.getStore().loadData(cell.possibleValues);
					if (typeof cell.value == "string")
						this.select(cell.value.trim());
					else
						this.select(cell.value);
				}
			},
			listeners: {
				'beforerender': function (combo) {
					if (this.gxGrid.EditModel == 'CellEditModel') {
						combo.populateCombo(this);
					}
					else {
						combo.ownerCt.on('show', Ext.bind(combo.populateCombo, combo, [this]));
					}
				},
				'beforequery': function (queryEvent) {
					queryEvent.combo.populateCombo(this, queryEvent.query || queryEvent.combo.rawValue);
				},
				'select': function () {
					if (this.gxGrid.EditModel == 'CellEditModel') {
						this.getEditorPlugin().completeEdit();
					}
				},
				scope: this
			}
		};
	},

	renderer: function (value, metadata, record, rowIndex, colIndex, store) {
		var cell = record.raw[this.actualColIndex];
		if (gx.lang.gxBoolean(cell.visible)) {
			if (!cell.vStruct || !cell.vStruct.gxsgprm || !this.gxGrid.requestSuggest) {
				if (typeof cell.value == "string") {
					value = value + "";
				}
				value = gx.fn.selectedDescription({ s: value, v: cell.possibleValues });
			}
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

	renderers.get = function (col) {
		var t = col.gxControl.type,
			vStruct = col.gxControl.vStruct;

		if (vStruct && t == types.singleLineEdit && vStruct.gxsgprm && col.gxControl.grid.grid.requestSuggest) {
			return renderers[types.comboBox];
		}

		if (this[t]) {
			return this[t];
		}

		return 'gxui.column';
	};

	return renderers;
} ();  
