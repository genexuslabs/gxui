/// <reference path="..\VStudio\vswd-ext_2.2.js" />
gxui.GridExtension = Ext.extend(gxui.UserControl, {
	initialize: function() {
		gxui.GridExtension.superclass.initialize.call(this);
	},

	onRender: function() {
		this.ColumnsToResize = new Array();
		this.ImagesForResizing = [];
		var selModel = this.createSelectionModel();
		var cmConf = this.getColumnsConfig(selModel);
		var cm = this.createColumnModel(cmConf.columns);
		var store = this.createStore(cmConf.fields);
		var pagingTb = this.createPagingToolbar();
		var view = this.createGridView();

		// create the Grid
		this.m_grid = this.createGridPanel(selModel, cmConf, cm, store, pagingTb, view);

		// D&D listeners:
		if (gx.lang.gxBoolean(this.ownerGrid.defaultDragable)) {
			this.m_DD = new gxui.GridExtension.DragDrop(this, {
				DragDropText: this.DragDropText,
				PrimaryButtonOnly: this.PrimaryButtonOnly
			});
		}

		this.fixInheritedCentering();

		// Correct width when it isn't specified
		if (!this.gxWidth) {
			this.m_grid.setWidth(this.m_grid.getColumnModel().getTotalWidth() + 21);
		}

		// Add to parent UC container
		if (gx.lang.gxBoolean(this.AddToParentGxUIControl)) {
			this.addToParentContainer(this.m_grid);
		}

		this.resizeImageColumns();

	},

	onRefresh: function() {
		var grid = this.m_grid;

		var selModel = this.createSelectionModel();
		var cmConf = this.getColumnsConfig(selModel);
		var store = this.createStore(cmConf.fields);

		grid.reconfigure(store, this.createColumnModel(cmConf.columns));
		this.updatePagingToolbar(grid.getBottomToolbar());

		this.keepSelection(grid);

		if (gx.lang.gxBoolean(this.gxAllowCollapsing)) {
			if (gx.lang.gxBoolean(this.gxCollapsed)) {
				grid.collapse();
			}
			else {
				grid.expand();
			}
		}

		if (this.Visible != undefined) {
			if (gx.lang.gxBoolean(this.gxVisible) && !grid.isVisible()) {
				grid.show();
			}
			else {
				if (!gx.lang.gxBoolean(this.gxVisible) && grid.isVisible()) {
					grid.hide();
				}
			}
		}

		if (!grid.ownerCt) {
			if (this.GridHeight && grid.getBox().height != this.GridHeight) {
				grid.setHeight(this.GridHeight);
			}

			if (this.gxWidth && grid.getBox().width != this.gxWidth) {
				grid.setWidth(this.gxWidth);
			}
		}

		grid.setTitle(this.Title);
		this.resizeImageColumns();

	},

	onDestroy: function() {
		if (this.m_DD) {
			this.m_DD.destroy();
		}
		gxui.GridExtension.superclass.onDestroy.call(this);
	},

	getUnderlyingControl: function() {
		return this.m_grid;
	},

	createGridPanel: function(selModel, cmConf, cm, store, pagingTb, view) {
		var GridClass;
		if (this.isEditable()) {
			GridClass = gx.lang.gxBoolean(this.EnableColumnLocking) ? Ext.grid.LockingEditorGridPanel : Ext.grid.EditorGridPanel;
		}
		else {
			GridClass = gx.lang.gxBoolean(this.EnableColumnLocking) ? Ext.grid.LockingGridPanel : Ext.grid.GridPanel;
		}
		//fix for IE
		this.gxWidth = parseInt(this.gxWidth);

		var remoteSort = gx.lang.gxBoolean(this.RemoteSort);

		var config = {
			id: this.getUniqueId(),
			store: store,
			cm: cm,
			sm: selModel,
			view: view,
			cls: "",
			autoExpandColumn: cmConf.autoExpandColumn ? cmConf.autoExpandColumn : undefined,
			enableColumnHide: gx.lang.gxBoolean(this.EnableColumnHide),
			enableColumnMove: gx.lang.gxBoolean(this.EnableColumnMove),
			enableDragDrop: gx.lang.gxBoolean(this.ownerGrid.defaultDragable) && gx.lang.gxBoolean(this.gxAllowSelection),
			ddGroup: this.DragDropGroup || "",
			stripeRows: (this.gxTitleBackstyle == gx.grid.styles.report),
			disableSelection: !gx.lang.gxBoolean(this.gxAllowSelection),
			trackMouseOver: gx.lang.gxBoolean(this.gxAllowHovering),
			collapsible: gx.lang.gxBoolean(this.gxAllowCollapsing),
			collapsed: gx.lang.gxBoolean(this.gxCollapsed),
			header: gx.lang.gxBoolean(this.gxAllowCollapsing),
			height: !gx.lang.gxBoolean(this.AutoHeight) && this.GridHeight ? this.GridHeight : undefined,
			width: this.gxWidth ? this.gxWidth : undefined,
			autoHeight: gx.lang.gxBoolean(this.AutoHeight),
			title: this.Title ? this.Title : undefined,
			minColumnWidth: parseInt(this.MinColumnWidth),
			//cls: this.gx.CssClass,
			renderTo: this.getContainerControl(),
			bbar: pagingTb,
			listeners: this.gridListeners(),
			stateful: gx.lang.gxBoolean(this.Stateful),
			stateId: this.StateId || undefined,
			clicksToEdit: 1,
			plugins: cmConf.plugins,
			reconfigure: function(store, colModel) { // Overriden to avoid losing state when reconfiguring the store and column model
				var state = this.getState();
				if (this.loadMask) {
					this.loadMask.destroy();
					this.loadMask = new Ext.LoadMask(this.bwrap,
                    Ext.apply({ store: store }, this.initialConfig.loadMask));
				}
				this.view.bind(store, colModel);
				this.store = store;
				this.colModel = colModel;
				if (this.stateful) {
					this.applyState(state);
				}
				if (this.rendered) {
					this.view.refresh(true);
				}
			},
			applyState: function(state) {
				if (remoteSort) {
					delete state.sort;
				}
				GridClass.superclass.applyState.call(this, state);
			}
		};

		if (gx.lang.gxBoolean(this.EnableColumnLocking)) {
			config.cls += " x-grid-locked";
		}

		if (gx.lang.gxBoolean(this.UseThemeClasses)) {
			config.cls += ' ' + this.gxCssClass;
		}

		var grid = new GridClass(config);

		return grid;
	},

	createSelectionModel: function() {
		if (gx.lang.gxBoolean(this.gxAllowSelection)) {
			if (this.SelectionModel == "CheckBoxSelectionModel")
				return new Ext.grid.CheckboxSelectionModel({ singleSelect: true });
			if (this.SelectionModel == "SmartCheckBoxSelectionModel")
				return new Ext.grid.SmartCheckboxSelectionModel({ singleSelect: true, dataIndex: 'checked' });
			if (this.SelectionModel == "RadioSelectionModel")
				return new Ext.grid.RadioSelectionModel({ dataIndex: 'checked' });

			return new Ext.grid.RowSelectionModel({ singleSelect: true });
		}
	},

	getColumnsConfig: function(selModel) {
		var columns = this.columns;

		var getColumnType = function(col) {
			switch (col.type) {
				case gx.types.numeric:
					return "float";
				case gx.types.bool:
					return "boolean";
				case gx.types.date:
					return "date";
				case gx.types.dateTime:
					return "date";
				default:
					return "string";
			};
		};

		var dateConverter = function(v) {
			var gxdate = new gx.date.gxdate(v);
			gxdate.Value.gxdate = gxdate;
			return gxdate.Value;
		};

		var conf = {
			columns: [],
			fields: [],
			autoExpandColumn: 0,
			plugins: []
		};

		if (this.SelectionModel != "RowSelectionModel" && selModel) {
			conf.columns.push(selModel);
		}

		var GE = gxui.GridExtension, controlTypes = gx.html.controls.types;

		Ext.each(this.columns, function(col, i) {
			if (gx.lang.gxBoolean(col.visible)) {
				if (gx.lang.gxBoolean(col.AutoExpand)) {
					conf.autoExpandColumn = col.gxAttId;
				}

				var colType = getColumnType(col);
				conf.fields.push({
					name: col.gxAttName || col.gxAttId,
					mapping: i,  // For the mapping only the column index is sent, because the getJsonAccessor is overriden to access this.properties matrix
					type: colType,
					convert: colType == 'date' ? dateConverter : undefined
					//,dateFormat
				});

				var colWidth;
				if (/*col.gxControl.type != controlTypes.checkBox && */col.gxControl.type != controlTypes.comboBox) {
					colWidth = !gx.lang.gxBoolean(col.AutoExpand) && col.gxWidthUnit == "px" ? col.width || 0 : undefined;
				}
				if (colWidth == "" || col.htmlName.indexOf("PROMPT_") > -1) { //autoresize
					var titleWidth = this.calculateControlWidth(col.title);
					colWidth = this.getColumnWidth(col, i, titleWidth);
					if (col.gxControl.type == controlTypes.image)
						this.ColumnsToResize.push({ id: col.gxAttId });
				}
				// WA because the width is not present in the column
				if (!colWidth && col.gxControl.type == controlTypes.comboBox) {
					colWidth = col.gxControl.width;
				}

				var ColRendererClass = GE.ColumnRenderers.get(col.gxControl.type);
				var colRenderer = new ColRendererClass(this, col, i, {
					id: col.gxAttId,
					dataIndex: col.gxAttName || col.gxAttId,
					header: col.title,
					//tooltip: col.gxTooltip,
					width: colWidth,
					hidden: gx.lang.gxBoolean(col.Hidden || false),
					align: col.align,
					//css: col.gxControl.cssClass,
					//fixed,
					hideable: gx.lang.gxBoolean(col.Hideable),
					menuDisabled: gx.lang.gxBoolean(col.MenuDisabled),
					resizable: gx.lang.gxBoolean(col.Resizable),
					sortable: gx.lang.gxBoolean(col.Sortable),
					locked: gx.lang.gxBoolean(col.Lock) || undefined,
					grid: this.m_grid, // This is to send the grid when reconfigure() method is called, so the columns have a pointer to the menu
					checkedValue: col.gxChecked,
					uncheckedValue: col.gxUnChecked
				});

				conf.columns.push(colRenderer);
				conf.plugins.push(colRenderer);
			}
		}, this);

		return conf;
	},

	resizeImageColumns: function() {
		for (var j = 0; this.ColumnsToResize[j] != undefined; j++) {
			var columnIndex = this.m_grid.getColumnModel().getIndexById(this.ColumnsToResize[j].id);
			this.ImagesForResizing[columnIndex] = new Array();
			var actualColumnIndex = this.getActualColumnIndex(this.m_grid.getColumnModel(), columnIndex);
			for (var i = 0; this.properties[i] != undefined; i++) {
				var field = this.properties[i][actualColumnIndex];
				if (field.type == gx.html.controls.types.image) {
					image = new Image();
					this.ImagesForResizing[columnIndex].push(image);
					image.onload = this.setImageColumnWidth.createDelegate(this, [columnIndex]);
					image.src = field.value;
				}
			}
		}
	},

	setImageColumnWidth: function(columnIndex) {
		if (this.ImagesForResizing[columnIndex].length == this.properties.length) {
			var maxWidth = this.calculateControlWidth(this.m_grid.view.cm.config[columnIndex].gxColumn.title);
			var width;
			for (var j = 0; this.ImagesForResizing[columnIndex][j] != undefined; j++) {
				width = this.ImagesForResizing[columnIndex][j].width;
				if (width > maxWidth)
					maxWidth = width;
				if (this.isPromptColumn(columnIndex))
					break; ;
			}
			this.m_grid.getView().cm.setColumnWidth(columnIndex, maxWidth + 27, false);
			if (!this.gxWidth) {
				this.m_grid.setWidth(this.m_grid.getColumnModel().getTotalWidth() + 21);
			}
			this.ImagesForResizing[columnIndex] = new Array();
		}
	},

	isPromptColumn: function(columnIndex) {
		return this.m_grid.view.cm.config[columnIndex].gxColumn.htmlName.indexOf("PROMPT_") > -1;
	},

	getColumnWidth: function(col, j, maxWidth) {
		var width = 0;
		var newDiv = document.createElement('div');
		var added = false;
		var image;
		for (var i = 0; this.properties[i] != undefined; i++) {
			var field = this.properties[i][j];
			if (field.type != gx.html.controls.types.image) {
				added = true;
				width = this.calculateControlWidth(field, newDiv);
				if (parseInt(width) > maxWidth)
					maxWidth = width;
			}
		}
		if (added)
			document.body.removeChild(newDiv);
		return maxWidth + 25;
	},

	calculateControlWidth: function(field, newDiv) {
		if (newDiv == undefined) {
			newDiv = document.createElement('div');
			var remove = true;
		}
		if (field.getHtml)
			newDiv.innerHTML = field.getHtml();
		else
			newDiv.innerHTML = "<span>" + field + "</span>";
		newDiv.style.visibility = "hidden";
		document.body.appendChild(newDiv);
		var width = newDiv.children[0].offsetWidth;
		if (remove)
			document.body.removeChild(newDiv);
		return width;
	},

	createColumnModel: function(columns) {
		var ColModelClass = gx.lang.gxBoolean(this.EnableColumnLocking) ? Ext.grid.LockingColumnModel : Ext.grid.ColumnModel;

		var cm = new ColModelClass(columns);
		cm.defaultWidth = this.DefaultColumnWidth;

		cm.on('hiddenchange', function(colModel, columnIndex, hidden) {
			var actualColIndex = this.getActualColumnIndex(colModel, columnIndex);
			this.columns[actualColIndex].Hidden = hidden;
		}, this);

		cm.isCellEditable = function(colIndex, rowIndex) {
			var col = cm.config[colIndex];
			var cell = this.getPropertiesCell(this.m_grid, rowIndex, colIndex, false);
			return gx.lang.gxBoolean(cell.enabled) && gx.lang.gxBoolean(cell.visible) && (cm.getCellEditor(colIndex, rowIndex) || col.checkColumn);
		} .createDelegate(this);

		return cm;
	},

	createStore: function(fields) {
		var reader = new Ext.data.JsonReader({}, fields);
		reader.getJsonAccessor = function(i) {
			return function(obj) {
				var hasReturn = obj[i].grid.instanciateRow(obj[i].gridRow);
				var value;
				if (hasReturn && obj[i].column.gxControl.type != gx.html.controls.types.checkBox) {
					var bkpObj = gx.O;
					var pO = obj[i].grid.parentObject;
					gx.setGxO(pO.CmpContext, pO.IsMasterPage);
					value = pO.GXValidFnc[obj[i].column.gxId].val();
					gx.setGxO(bkpObj.CmpContext, bkpObj.IsMasterPage);
				}
				else
					value = obj[i].value;
				if (typeof value == "string")
					value = gx.text.trim(value);
				return value;
			};
		};

		var remoteSort = gx.lang.gxBoolean(this.RemoteSort);
		var storeConfig = {
			autoDestroy: true,
			remoteSort: remoteSort,
			reader: reader,
			data: this.properties,
			listeners: {
				'beforeload': function(store) {
					this.SortField = store.sortInfo.field;
					this.SortOrder = store.sortInfo.direction;
					if (remoteSort) {
						// Remember the SortField and SortOrder selected by the user.
						this.m_grid.saveState();
						this.goToPage.defer(30, this, ["FIRST"]);
						return false;
					}
				},
				'datachanged': function(store) {
					// Remember the GroupField selected by the user.
					if (gx.lang.gxBoolean(this.Grouping)) {
						this.GroupField = store.groupField;
					}
				},
				scope: this
			}
		};

		if (this.SortField) {
			storeConfig.sortInfo = { field: this.SortField, direction: this.SortOrder || "ASC" };
		}

		if (gx.lang.gxBoolean(this.Grouping)) {
			if (!storeConfig.sortInfo){
				storeConfig.sortInfo = { field: this.GroupField };
			}
			storeConfig.groupField = this.GroupField;
			return new Ext.data.GroupingStore(storeConfig);
		}
		return new Ext.data.Store(storeConfig);
	},

	createPagingToolbar: function() {
		var pagingTb = [];
		var cp = this.currentPage;
		var tp = 100000; // Todavía no hay una property que de el total de páginas.

		if (this.usePaging || this.OnFirstPage) {
			pagingTb.push({
				tooltip: this.FirstText,
				iconCls: "x-tbar-page-first",
				disabled: cp == 1,
				handler: this.OnFirstPage || this.goToPage.createDelegate(this, ["first"]),
				scope: this
			});
		}

		if (this.usePaging || this.OnPreviousPage) {
			pagingTb.push({
				tooltip: this.PreviousText,
				iconCls: "x-tbar-page-prev",
				disabled: cp == 1,
				handler: this.OnPreviousPage || this.goToPage.createDelegate(this, ["prev"]),
				scope: this
			});
		}

		if (this.usePaging || ((this.OnFirstPage || this.OnPreviousPage) && (this.OnNextPage || this.OnLastPage))) {
			pagingTb.push("-");
		}

		if (this.usePaging || this.OnNextPage) {
			pagingTb.push({
				tooltip: this.NextText,
				iconCls: "x-tbar-page-next",
				disabled: cp == tp,
				handler: this.OnNextPage || this.goToPage.createDelegate(this, ["next"]),
				scope: this
			});
		}

		if (this.usePaging || this.OnLastPage) {
			pagingTb.push({
				tooltip: this.LastText,
				iconCls: "x-tbar-page-last",
				disabled: cp == tp,
				handler: this.OnLastPage || this.goToPage.createDelegate(this, ["last"]),
				scope: this
			});
		}

		if (this.usePaging || this.OnFirstPage || this.OnPreviousPage || this.OnNextPage || this.OnLastPage) {
			pagingTb.push("-");
		}

		pagingTb.push({
			tooltip: this.RefreshText,
			iconCls: "x-tbar-loading",
			handler: this.refreshGrid,
			scope: this
		});

		return pagingTb;
	},

	updatePagingToolbar: function(tb) {
		if (tb) {
			var cp = 10000; // Debería ser this.currentPage pero no est?andando
			var tp = 100000; // Todavía no hay una property que de el total de páginas.

			if (tb.items.itemAt(0)) {
				tb.items.itemAt(0).setDisabled(cp == 1);
			}
			if (tb.items.itemAt(1)) {
				tb.items.itemAt(1).setDisabled(cp == 1);
			}
			if (tb.items.itemAt(3)) {
				tb.items.itemAt(3).setDisabled(cp == tp);
			}
			if (tb.items.itemAt(4)) {
				tb.items.itemAt(4).setDisabled(cp == tp);
			}
		}
	},

	createGridView: function() {
		if (gx.lang.gxBoolean(this.EnableColumnLocking)) {
			return new Ext.grid.LockingGridView({
				forceFit: gx.lang.gxBoolean(this.ForceFit)
			});
		}

		if (gx.lang.gxBoolean(this.Grouping)) {
			return new Ext.grid.GroupingView({
				forceFit: gx.lang.gxBoolean(this.ForceFit),
				hideGroupedColumn: gx.lang.gxBoolean(this.HideGroupedField),
				groupTextTpl: this.GroupTemplate || "{text}"
			});
		}
		return new Ext.grid.GridView({
			forceFit: gx.lang.gxBoolean(this.ForceFit)
		});
	},

	setSelectedRow: function(rowIndex) {
		// Set row as selected
		this.SelectedRow = rowIndex + 1;
		var actualRowIndex = this.getActualRowIndex(this.m_grid, rowIndex);
		this.selectRow(actualRowIndex);
	},

	keepSelection: function(grid) {
		if (this.SelectedRow >= 1) {
			grid.getSelectionModel().selectRow(this.SelectedRow - 1);
			var isLoading = this.ownerGrid.isLoading;
			this.ownerGrid.isLoading = true;
			this.selectRow(this.SelectedRow - 1);
			this.ownerGrid.isLoading = isLoading;
			return false;
		}
	},

	gridListeners: function() {
		return {
			'rowclick': function(grid, rowIndex, e) {
				var actualRowIndex = this.getActualRowIndex(grid, rowIndex);
				var row = this.rows[actualRowIndex];
				if (row) {
					this.setSelectedRow(rowIndex);
					// Set context
					if (this.ownerGrid.defaultSetsContext) {
						var setter = this.getGxRowContextSetter(row);
						if (setter) {
							this.notifyContext(setter.types, setter.obj);
						}
					}
				}

			},

			'cellclick': function(grid, rowIndex, columnIndex, e) {
				var cell = this.getPropertiesCell(grid, rowIndex, columnIndex, false);
				if (cell.type == gx.html.controls.types.image || !cell.enabled)
					this.fireCellClickEvent(rowIndex, columnIndex);
			},

			'cellcontextmenu': function(grid, rowIndex, cellIndex, e) {
				if (this.ContextMenu) {
					this.setSelectedRow(rowIndex);
					grid.getSelectionModel().selectRow(rowIndex);
					this.ContextMenu();
					e.preventDefault();
				}
			},

			'beforeedit': function(e) {
				var col = e.grid.getColumnModel().config[e.column];
				col.col = e.column;
				col.row = e.row;
				if (col.checkColumn) {
					return false;
				}
			},

			'afteredit': function(e) {
				var actualColIndex = this.getActualColumnIndex(e.grid.getColumnModel(), e.column);
				var cell = this.getPropertiesCell(e.grid, e.row, actualColIndex, true);
				cell.value = e.value;

				if (e.value instanceof Date) {
					var gxdate = e.value.gxdate;
					cell.value = gxdate.getString();
					if (gxdate.HasTimePart) {
						cell.value += ' ' + gxdate.getTimeString(true, true);
					}
				}
				if (typeof (e.value) == "number") {
					cell.value = gxui.GridExtension.Column.prototype.formatNumber(e.value, this.ParentObject.GXValidFnc[this.columns[actualColIndex].gxId]);
				}

				// Fire cell click event
				var colControl = cell.column.gxControl, controlTypes = gx.html.controls.types;
				if (colControl.type == controlTypes.checkBox || colControl.type == controlTypes.comboBox) {
					this.fireCellClickEvent(e.row, e.column)
				}
			},

			//            'validateedit': function(e) {
			//                var col = e.grid.getColumnModel().config[e.column];
			//                col.col = e.column;
			//                col.row = e.row;
			//                var actualColIndex = this.getActualColumnIndex(e.grid.getColumnModel(), e.column);
			//                var cell = this.getPropertiesCell(e.grid, e.row, actualColIndex, true);
			//                cell.value = e.value;
			//                //gx.csv.validateAll();
			//                cell.gxvalid = 0;
			//                gx.csv.validate(cell, cell.column.gxId);
			//                if (col.checkColumn) {
			//                    return false;
			//                }
			//            },
			scope: this
		};
	},

	isEditable: function() {
		var isEditable = false;
		for (var i = 0, cols = this.columns.length; i < cols; i++) {
			isEditable = isEditable || gx.lang.gxBoolean(this.columns[i].enabled);
			if (isEditable) {
				return isEditable;
			}
		}
		for (var i = 0, rows = this.properties.length; i < rows; i++) {
			for (var j = 0, cols = this.properties[i].length; j < cols; j++) {
				isEditable = isEditable || gx.lang.gxBoolean(this.properties[i][j].enabled);
				if (isEditable) {
					return isEditable;
				}
			}
		}
	},

	getActualColumnIndex: function(cm, colIndex) {
		var colId = cm.getColumnId(colIndex);
		var length = this.columns.length;
		for (var i = 0; i < length; i++) {
			if (this.columns[i].gxAttId == colId) {
				return i;
			}
		}
		return -1;
	},

	getActualRowIndex: function(grid, rowIndex) {
		return grid.getStore().getAt(rowIndex).json[0].row.id;
	},

	getPropertiesCell: function(grid, rowIndex, columnIndex, isActualColIndex) {
		var actualColIndex = columnIndex;
		if (!isActualColIndex) {
			actualColIndex = this.getActualColumnIndex(grid.getColumnModel(), columnIndex);
		}
		var record = grid.getStore().getAt(rowIndex);  // Get the Record
		if (record) {
			return record.json[actualColIndex];
		}
		return null;
	},

	goToPage: function(page) {
		if (typeof page == "string") {
			if (this.ownerGrid.pagingCommand) {
				this.ownerGrid.pagingCommand(page.toUpperCase());
				return;
			}
			this.UnSelectRows();
			gx.fn.setHidden(this.gxCmpContext + this.gxGridName.toUpperCase() + "PAGING", page.toUpperCase());
			gx.evt.execEvt(this.gxCmpContext + "E" + this.gxGridName.toUpperCase() + "PAGING.", gx.evt.dummyCtrl);

			return;
		}
	},

	refreshGrid: function() {
		var og = this.ownerGrid, po = this.ParentObject;
		if (og.parentObject.autoRefresh && og.refreshVars.length > 0) {
			og.callAsyncRefresh(og.getRefreshParmsUrl())
		}
		else {
			po.executeServerEvent('RFR', true);
		}
	},

	// This is to correct the inherited value of the text-align property, because
	// if a TD parent element has de align property set to a value other than "left", 
	// that value is inherited by all the tables that compose the grid.
	fixInheritedCentering: function() {
		var textAlign = this.m_grid.el ? this.m_grid.el.getStyle('text-align') : "";
		if (textAlign == "") {
			return;
		}
		if (textAlign.indexOf("center") >= 0 || textAlign.indexOf("right") >= 0) {
			this.m_grid.el.setStyle('text-align', 'left');
			Ext.select("table", false, this.m_grid.el.dom).setStyle('text-align', 'left');
			// This is to solve a problem in IE with the locked column. It is shown centered. Reseting the position property solves the problem.
			if (Ext.isIE && gx.lang.gxBoolean(this.EnableColumnLocking)) {
				var fn = function() {
					Ext.select(".x-grid3-locked", false, this.m_grid.el.dom).setStyle('position', 'fixed').setStyle('position', 'absolute');
				};
				fn.defer(100, this);
			}
		}
		if (Ext.isIE) {
			Ext.onReady(function() {
				var view = this.m_grid.getView().refresh(true);
			}, this);
		}
	},

	getRowGxInternalId: function(row) {
		return this.ownerGrid.containerName + 'Row_' + row.gxId;
	},

	getGxRowContextSetter: function(row) {
		var trId = this.getRowGxInternalId(row);

		var setter;
		// Find the context source for the row
		Ext.each(gx.fx.ctx.setters, function(s) {
			if (s.id == trId) {
				setter = s;
				return false;
			}
		}, this);

		return setter;
	},

	fireCellClickEvent: function(rowIndex, columnIndex) {
		var grid = this.m_grid;
		var actualColIndex = this.getActualColumnIndex(grid.getColumnModel(), columnIndex);
		var actualRowIndex = this.getActualRowIndex(grid, rowIndex);
		var cell = this.getPropertiesCell(grid, actualRowIndex, actualColIndex, true);
		if (this.executeEvent) {
			this.executeEvent(actualColIndex, actualRowIndex);
		}
	},

	// Methods
	SelectRow: function(rowIndex) {
		// Row index is 1 based, for compatibility with GeneXus criteria
		if (rowIndex) {
			this.setSelectedRow(rowIndex - 1);
			this.m_grid.getSelectionModel().selectRow(rowIndex - 1);
		}
	},

	UnSelectRows: function() {
		if (this.SelectedRow != undefined) {
			delete this.SelectedRow;
		}
		this.m_grid.getSelectionModel().clearSelections();
	},

	getSelectedRow: function() {
		return this.SelectedRow;
	},

	getCellValue: function(ctrlId) {
		var grid = this.m_grid;
		for (var i = 0; this.properties[this.SelectedRow - 1][i] != undefined; i++) {
			if (this.properties[this.SelectedRow - 1][i].id == ctrlId)
				break;
		}
		var columnIndex = i;
		var actualRowIndex = this.getActualRowIndex(grid, this.SelectedRow - 1);
		var cell = this.getPropertiesCell(grid, actualRowIndex, columnIndex, true);
		return cell.value;
	},

	setCellValue: function(cell, value) {
		value = value + "";
		var grid = this.m_grid;
		var columnName;
		for (var i = 0; this.properties[this.SelectedRow - 1][i] != undefined; i++) {
			if (this.properties[this.SelectedRow - 1][i].id == cell.id) {
				columnName = this.properties[this.SelectedRow - 1][i].column.gxAttName;
				break;
			}
		}
		var columnIndex = i;
		var actualRowIndex = this.getActualRowIndex(grid, this.SelectedRow - 1);
		var gxdate = null;
		if (this.columns[i].type == gx.types.date || this.columns[i].type == gx.types.dateTime) {
			var gxdate = new gx.date.gxdate(value);
			gxdate.Value.gxdate = gxdate;
			value = gxdate.getString();
			if (gxdate.HasTimePart) {
				value += ' ' + gxdate.getTimeString(true, true);
			}
		}
		this.properties[actualRowIndex][columnIndex].value = value;
		this.m_grid.getStore().getAt(actualRowIndex).set(columnName, (gxdate != null) ? gxdate.Value : value);

	}
});
