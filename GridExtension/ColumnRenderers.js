/// <reference path="..\VStudio\vswd-ext_2.2.js" />

gxui.GridExtension.Column = function(gxGrid, gxColumn, actualColIndex, config) {
	Ext.apply(this, config);
	if (!this.id) {
		this.id = Ext.id();
	}
	this.gxGrid = gxGrid;
	this.gxColumn = gxColumn;
	this.actualColIndex = actualColIndex;
	this.renderer = this.renderer.createDelegate(this);
	this.editor = this.defineEditor(gxColumn, actualColIndex);
};

gxui.GridExtension.Column.prototype = {
	init: function(grid) {
		this.grid = grid;
		var view = this.grid.getView();
	},

	defineEditor: function(gxColumn, actualColIndex) {
		var types = gx.types;
		switch (gxColumn.type) {
			case types.numeric:
				var colData = this.gxGrid.ParentObject.GXValidFnc[gxColumn.gxId];
				return new Ext.form.NumberField({
					allowDecimals: colData.dec > 0 ? true : false,
					allowNegative: colData.sign,
					decimalPrecision: colData.dec,
					decimalSeparator: gx.decimalPoint,
					maxLength: colData.len
				});

			case types.date:
				return new Ext.form.DateField({
					getValue: function() {
						var date = Ext.form.DateField.prototype.getValue.call(this);
						if (date) {
							this.gxdate.assign_date(date);
							date.gxdate = this.gxdate;
						}
						return date;
					},
					setValue: function(date) {
						if (date.gxdate) {
							this.gxdate = date.gxdate;
						}
						Ext.form.DateField.prototype.setValue.call(this, date);
					}
				});

			case types.dateTime:
			    return new Ext.grid.GridEditor(new Ext.ux.form.DateTime({
			        getValue: function() {
			            var date = Ext.ux.form.DateTime.prototype.getValue.call(this);

			            if (date) {
			                this.gxdate.assign_date(date);
			                date.gxdate = this.gxdate;
			            }
			            return date;
			        },
			        setValue: function(date) {
			            if (date.gxdate) {
			                this.gxdate = date.gxdate;
			            }
			            Ext.ux.form.DateTime.prototype.setValue.call(this, date);
			        }
			    }), { autoSize: false, alignment: 'tr-tr?' });

			default:
				return new Ext.form.TextField();
		}
	},

	formatNumber: function(value, colData) {
		var picture = colData.pic;
		var numberFormat = {
			decimalSeparator: gx.decimalPoint,
			decimalPrecision: colData.dec,
			groupingSeparator: '',
			groupingSize: 0,
			currencySymbol: ''
		};
		if (picture.indexOf(gx.thousandSeparator) >= 0) {
			numberFormat.groupingSeparator = gx.thousandSeparator;
			numberFormat.groupingSize = 3;
		}
		v = Ext.util.Format.formatNumber(value, numberFormat);

		// Left fill with zeros if applies
		var matches = picture.match(new RegExp("^[9" + gx.decimalPoint + gx.thousandSeparator + "]+$"));
		if (matches && matches.length > 0) {
			v = picture.substr(0, picture.length - v.length).replace(/9/ig, "0") + v;
		}

		return v + "";
	},

	renderer: function(value, metadata, record, rowIndex, colIndex, store) {

		var cell = record.json[this.actualColIndex];
		var col = this.gxColumn;

		var v = value;
		if (col.type == gx.types.date || col.type == gx.types.dateTime) {
			/*v = value.gxdate.getString();

			if (value.gxdate.HasTimePart) {
			v += ' ' + value.gxdate.getTimeString(true, true);
			}*/
			v = cell.formattedValue;

		}
		if (col.type == gx.types.numeric && typeof (value) == "number") {
			v = this.formatNumber(value, this.gxGrid.ParentObject.GXValidFnc[this.gxColumn.gxId]);
		}



		if (gx.lang.gxBoolean(cell.visible)) {
			if (gx.lang.gxBoolean(this.gxGrid.UseThemeClasses) && cell.cssClass) {
				metadata.css += ' ' + cell.cssClass
			}

			if (cell.link) {
				return String.format('<a href="{0}" alt="{2}" target="{3}">{1}</a>', cell.link || "", v || "", cell.alt || "", cell.linkTarget || "");
			}

			var style = "";
			if (cell.style) {
				var color = cell.style.match(/color:(.+);?/);
				if (color) {
					style += String.format("color:{0};", color[1]);
				}

				var bgColor = cell.style.match(/background-color:(.+);?/);
				if (bgColor) {
					style += String.format("background-color:{0};", bgColor[1]);
				}
			}

			// If the cell fires a user event and is enabled, wrap with an anchor tag.
			if (/*gx.lang.gxBoolean(cell.enabled) &&*/(col.gxControl.eventName || col.gxControl.jsDynCode)) {
				style += 'cursor:pointer;';
			}

			if (style) {
				metadata.attr += String.format(' style="{0}"', style);
			}

			//Show Tooltip text if set
			if (cell.title) {
				v = String.format("<span qtip='{0}'>{1}</span>", cell.title, v);
			}
			return v;
		}
		return "";
	}
};

gxui.GridExtension.ImageColumn = Ext.extend(gxui.GridExtension.Column, {
	defineEditor: Ext.emptyFn,

	renderer: function(value, metadata, record, rowIndex, colIndex, store) {
		var cell = record.json[this.actualColIndex];
		if (gx.lang.gxBoolean(cell.visible)) {
			value = String.format('<img src="{0}" class="{1}" title="{2}" />', cell.value, cell.cssClass, cell.title);
		}
		return gxui.GridExtension.ImageColumn.superclass.renderer.apply(this, [value, metadata, record, rowIndex, colIndex, store]);
	}
});

gxui.GridExtension.CheckColumn = Ext.extend(gxui.GridExtension.Column, {
	init: function(grid) {
		gxui.GridExtension.CheckColumn.superclass.init.apply(this, arguments);
		this.grid.on('render', function() {
			var view = this.grid.getView();
			view.mainBody.on('mousedown', this.onMouseDown, this);
			this.grid.on('keypress', this.onKeyPress);
		}, this);
	},

	checkColumn: true,

	defineEditor: Ext.emptyFn,

	createEvent: function(rowIndex) {
		var record = this.grid.store.getAt(rowIndex);
		var originalValue = record.data[this.dataIndex];

		var value = (originalValue == this.checkedValue ? this.uncheckedValue : this.checkedValue);

		if (this.gxColumn.type == gx.types.bool) {
			var boolVal = gx.lang.booleanValue;
			value = boolVal(boolVal(originalValue) == boolVal(this.checkedValue) ? this.uncheckedValue : this.checkedValue);
		}

		return {
			grid: this.grid,
			record: record,
			field: this.dataIndex,
			value: value,
			originalValue: originalValue,
			row: rowIndex,
			column: this.grid.getColumnModel().findColumnIndex(this.dataIndex)
		}
	},

	onMouseDown: function(e, t) {
		if (t.className && t.className.indexOf('x-grid3-cc-' + this.id) != -1) {
			var cm = this.grid.getColumnModel();
			var colIndex = cm.findColumnIndex(this.dataIndex);
			var rowIndex = this.grid.getView().findRowIndex(t);
			if (cm.isCellEditable(colIndex, rowIndex)) {
				var record = this.grid.store.getAt(rowIndex);

				var editEvent = this.createEvent(rowIndex);
				record.set(this.dataIndex, editEvent.value);

				this.grid.fireEvent('afteredit', editEvent);
			}
		}
	},

	onKeyPress: function(e, t) {
		var sm = this.getSelectionModel();
		if (!sm.getSelectedCell) {
			return;
		}

		var cm = this.getColumnModel();

		var cell = sm.getSelectedCell();
		var col = cm.config[cell[1]];

		if (col.checkColumn) {
			e.preventDefault();
			var colIndex = cm.findColumnIndex(col.dataIndex);
			if (cm.isCellEditable(colIndex, cell[0])) {
				var key = e.getKey();
				if (key == e.SPACE || key == e.ENTER) {
					var record = this.store.getAt(cell[0]);

					var editEvent = col.createEvent(cell[0]);
					record.set(col.dataIndex, editEvent.value);

					this.fireEvent('afteredit', editEvent);
				}
			}
		}
	},

	renderer: function(value, metadata, record, rowIndex, colIndex, store) {
		var cell = record.json[this.actualColIndex];
		if (gx.lang.gxBoolean(cell.visible)) {
			var value = value.toString() == cell.checkedValue;
			metadata.css += ' x-grid3-check-col-td';
			value = '<div class="x-grid3-check-col' + (value ? '-on' : '') + ' x-grid3-cc-' + this.id + '">&#160;</div>';
		}
		return gxui.GridExtension.CheckColumn.superclass.renderer.apply(this, [value, metadata, record, rowIndex, colIndex, store]);
	}
});

gxui.GridExtension.RadioColumn = Ext.extend(gxui.GridExtension.Column, {
	defineEditor: function() {
		return new Ext.form.Radio();
	},

	renderer: function(value, metadata, record, rowIndex, colIndex, store) {
		var cell = record.json[this.actualColIndex];
		if (gx.lang.gxBoolean(cell.visible)) {
			if (typeof value == "string") {
				value = value.trim();
			}
			value = gx.fn.selectedDescription({ s: value, v: cell.possibleValues });
		}
		return gxui.GridExtension.RadioColumn.superclass.renderer.apply(this, [value, metadata, record, rowIndex, colIndex, store]);
	}
});

gxui.GridExtension.ComboColumn = Ext.extend(gxui.GridExtension.Column, {
	defineEditor: function(gxColumn, actualColIndex) {
		var combo = new Ext.form.ComboBox({
			lazyRender: true,
			typeAhead: true,
			triggerAction: 'all',
			selectOnFocus: true,
			disableKeyFilter: false,
			editable: true,
			forceSelection: true,
			store: [["", ""]],
			listeners: {
				'beforeshow': function() {
					var record = this.grid.store.getAt(this.row);
					var cell = record.json[this.actualColIndex];
					combo.getStore().loadData(cell.possibleValues);
				},
				'select': function() {
					this.editor.completeEdit();
				},
				scope: this
			}
		});
		return combo;
	},

	renderer: function(value, metadata, record, rowIndex, colIndex, store) {
		var cell = record.json[this.actualColIndex];
		if (gx.lang.gxBoolean(cell.visible)) {
			if (typeof cell.value == "string") {
				value = value + "";
			}
			value = gx.fn.selectedDescription({ s: value, v: cell.possibleValues });
		}
		return gxui.GridExtension.ComboColumn.superclass.renderer.apply(this, [value, metadata, record, rowIndex, colIndex, store]);
	}
});

gxui.GridExtension.ColumnRenderers = function() {
	var GE = gxui.GridExtension;
	var types = gx.html.controls.types;

	var renderers = {};
	renderers[types.image] = GE.ImageColumn;
	renderers[types.checkBox] = GE.CheckColumn;
	renderers[types.radio] = GE.RadioColumn;
	renderers[types.comboBox] = GE.ComboColumn;

	renderers.get = function(t) {
		if (this[t]) {
			return this[t];
		}
		return GE.Column;
	};

	return renderers;
} ();  
