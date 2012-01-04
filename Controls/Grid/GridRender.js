/// <reference path="..\VStudio\vswd-ext_2.2.js" />

gxui.Grid = Ext.extend(gxui.UserControl, {
	// Private members
	m_colModel: null,
	m_record: null,
	m_dataStore: null,
	m_grid: null,
	m_view: null,
	m_selModel: null,
	m_pagingTb: null,
	m_toolbar: null,
	m_gxTbar: null,
	m_filters: null,

	initialize: function() {
		gxui.Grid.superclass.initialize.call(this);

		if (!gxui.Grid.Overrided) {
			Ext.override(Ext.grid.GridView, { fitColumns: this.fitColumns });
			Ext.override(Ext.grid.GridPanel, { applyState: this.applyState, getState: this.getState });
			gxui.Grid.Overrided = true;
		}

		if (!gxui.Grid.HttpProxyOverrided) {
			Ext.override(Ext.data.HttpProxy, { loadResponse: this.httpProxyLoadResponse });
			gxui.Grid.HttpProxyOverrided = true;
		}

		this.Width;
		this.Height;
		this.DataStoreURL;
		this.DataStoreParms;
		this.Data;
		this.ColumnModelData;
		this.Identifier;
		this.Record;
		this.Total;
		this.Paging;
		this.PageSize;
		this.DisplayInfo;
		this.DisplayMsg;
		this.EmptyMsg;
		this.EnableDragDrop;
		this.EnableColumnHide;
		this.EnableColumnMove;
		this.LoadingIndicator;
		this.LoadingMsg;
		this.DefaultSortable;
		this.DefaultResizable;
		this.TrackMouseOver;
		this.SelectionModel;
		this.SingleSelect;
		this.StripeRows;
		this.AutoWidth;
		this.AutoSizeColumns;
		this.MinColumnWidth;
		this.DefaultWidth;
		this.AutoHeight;
		this.Resizable;
		this.MinWidth;
		this.MaxWidth;
		this.MinHeight;
		this.MaxHeight;
		this.Wrap;
		this.Handles;
		this.Pinned;
		this.RemoteSort;
		this.DefaultSortField;
		this.DefaultSortDirection;
		this.SelectedRowData;
		this.UseToolbar;
		this.ToolbarData;
		this.ButtonPressedId;

		this.UserFilters;
		this.FiltersMode;
		this.AddSearchField;
		this.SearchFieldWidth;

		this.Cls;
		this.IconCls;
		this.Title;
		this.Collapsible;
		this.AnimateCollapse;
		this.Frame;
		this.ForceFit;
		this.Grouping;
		this.GroupField;
		this.GroupTemplate;
		this.HideGroupedField;

		this.Stateful;
		this.StateId;
	},

	// Databinding for property ColumnModel
	SetColumnModel: function(columnModel) {
		if (this.ColumnModelData && (Ext.util.JSON.encode(this.ColumnModelData) != Ext.util.JSON.encode(columnModel))) {
			this.destroy();
			this.forceRendering();
		}
		this.ColumnModelData = columnModel;
	},

	// Databinding for property ColumnModel
	GetColumnModel: function(columnModel) {
		return this.ColumnModelData;
	},

	// Databinding for property Data
	SetData: function(data) {
		this.Data = data;
		//this.initializeDataStore();
	},

	// Databinding for property Data
	GetData: function(data) {
		return this.Data;
	},

	// Databinding for property DataStoreParms
	SetDataStoreParms: function(data) {
		this.DataStoreParms = data;
	},

	// Databinding for property DataStoreParms
	GetDataStoreParams: function() {
		return this.DataStoreParms;
	},

	// Databinding for property SelectedRowData
	SetSelectedRowData: function(data) {
		this.SelectedRowData = data;
	},

	// Databinding for property DragDropData
	GetSelectedRowData: function(data) {
		return this.SelectedRowData;
	},

	// Databinding for property Data
	SetToolbarData: function(data) {
		this.ToolbarData = data;
	},

	// Databinding for property Data
	GetToolbarData: function(data) {
		return this.ToolbarData;
	},

	onRender: function() {
		this.initializeSelectionModel();
		this.initializeColumnModel();
		this.initializeFilters();
		this.initializeDataStore();
		this.initializeGrid();
		this.addListeners();

		this.refreshGrid();

		if (this.m_gxTbar)
			this.m_gxTbar.defineBtnsDropTarget();

		// Add to parent UC container
		this.addToParentContainer(this.m_grid);
	},

	onRefresh: function() {
		if (this.forceRefresh) {
			this.forceRefresh = false;
			this.Refresh();
		}

		if (gxui.CBoolean(this.UseToolbar)) {
			this.m_gxTbar.onRefresh();
		}
	},

	getUnderlyingControl: function() {
		return this.m_grid;
	},

	initializeSelectionModel: function() {
		if (this.SelectionModel == "CheckBoxSelectionModel")
			this.m_selModel = new Ext.grid.CheckboxSelectionModel({ singleSelect: gxui.CBoolean(this.SingleSelect) });
		else if (this.SelectionModel == "SmartCheckBoxSelectionModel")
			this.m_selModel = new Ext.grid.SmartCheckboxSelectionModel({ singleSelect: gxui.CBoolean(this.SingleSelect), dataIndex: 'checked' });
		else if (this.SelectionModel == "RadioSelectionModel")
			this.m_selModel = new Ext.grid.RadioSelectionModel({ dataIndex: 'checked' });
		else
			this.m_selModel = new Ext.grid.RowSelectionModel({ singleSelect: gxui.CBoolean(this.SingleSelect) });

		this.m_selModel.on("selectionchange", this.updateSelection, this);

		if (gxui.CBoolean(this.LockSelections))
			this.m_selModel.lock();
	},

	initializeColumnModel: function() {

		var cmData = this.ColumnModelData;
		if (cmData && cmData.Columns) {

			var cmDataCols = cmData.Columns;
			var cmconf;

			if (this.SelectionModel == "RowSelectionModel")
				cmconf = this.GetColumnModelConfig(cmDataCols);
			else
				cmconf = [this.m_selModel].concat(this.GetColumnModelConfig(cmDataCols));

			this.colModel = new Ext.grid.ColumnModel(cmconf);
			//this.colModel.defaultSortable = gxui.CBoolean(this.DefaultSortable);
			this.colModel.defaultWidth = ((cmData.DefaultWidth > 0) ? cmData.DefaultWidth : 100);
			var mdata = new Array();
			for (var i = 0; i < cmDataCols.length; i++) {
				var c = cmDataCols[i];
				mdata.push({
					name: c.dataIndex,
					type: c.dataType,
					dateFormat: c.format
				});
			}
			this.m_record = Ext.data.Record.create(mdata);
		}
	},

	initializeFilters: function() {

		if (gxui.CBoolean(this.UseFilters) && this.ColumnModelData && this.ColumnModelData.Columns) {

			var filters = new Array();

			var cmDataCols = this.ColumnModelData.Columns;
			for (var i = 0; i < cmDataCols.length; i++) {

				var c = cmDataCols[i];

				if (gxui.CBoolean(c.filter)) {

					/*var*/f = c.filterData;

					var cfg = {
						dataIndex: c.dataIndex,
						type: f.type,
						active: gxui.CBoolean(f.active),
						single: gxui.CBoolean(f.single),
						value: {}
					};

					switch (f.type) {

						case "date":
							cfg.dateFormat = gxui.dateFormat();
							if (f.values && (f.values.length > 0)) {
								for (var v = 0; v < f.values.length; v++) {
									var fv = f.values[v];
									var date = gxui.date(fv.value);
									if (fv.comparison == "after")
										cfg.value.after = date;
									else if (fv.comparison == "before")
										cfg.value.before = date;
									else
										cfg.value.on = date;
								}
							}
							break;

						case "numeric":
							if (f.values && (f.values.length > 0)) {
								for (var v = 0; v < f.values.length; v++) {
									var fv = f.values[v];
									if (fv.comparison == "gt")
										cfg.value.gt = fv.value;
									else if (fv.comparison == "lt")
										cfg.value.lt = fv.value;
									else
										cfg.value.eq = fv.value;
								}
							}
							break;

						case "boolean":
							cfg.defaultValue = f.value;
							break;

						case "list":
							cfg.options = f.options;
							cfg.value = f.value;

						default:
							cfg.value = f.value;
					}

					filters.push(cfg);
				}
			}

			this.m_filters = new Ext.grid.GridFilters({
				filters: filters
			});

			Ext.grid.GridFilters.prototype.menuFilterText = this.FiltersText;
			Ext.grid.filter.BooleanFilter.prototype.yesText = this.YesText;
			Ext.grid.filter.BooleanFilter.prototype.noText = this.NoText;
			Ext.grid.filter.DateFilter.prototype.beforeText = this.BeforeText;
			Ext.grid.filter.DateFilter.prototype.afterText = this.AfterText;
			Ext.grid.filter.DateFilter.prototype.onText = this.OnText;

		}
	},

	initializeDataStore: function() {
		var storeConfig;
		if (this.DataStoreURL != "") {
			storeConfig = {
				proxy: new Ext.data.HttpProxy({ url: this.DataStoreURL }),
				reader: new Ext.data.XmlReader({
					id: this.Identifier,
					record: this.Record,
					totalRecords: this.Total,
					success: '@success'
				}, this.m_record),
				remoteSort: gxui.CBoolean(this.RemoteSort),
				baseParams: { limit: parseInt(this.PageSize) }, //si bien en la paging toolbar ya se configura el pagesize, al usar el search filter no se toma en cuenta por eso se agrega en el store
				listeners: {
					'loadexception': {
						fn: function(proxy, options, response) {
							var error = Ext.DomQuery.selectValue('error', this.m_dataStore.reader.xmlData);
							this.LoadExceptionError = error;
							if (this.LoadException)
								this.LoadException();
						},
						scope: this
					}
				}
			};
		}
		else {
			if (this.Data) {
				storeConfig = {
					proxy: new Ext.data.MemoryProxy(this.Data),
					reader: new Ext.data.JsonReader({
						id: this.Identifier,
						root: this.Root,
						totalProperty: this.Total
					}, this.m_record)
				};
			}
		}

		if (gxui.CBoolean(this.Grouping)) {
			storeConfig.groupField = this.GroupField;
			this.m_dataStore = new Ext.data.GroupingStore(storeConfig);
		}
		else
			this.m_dataStore = new Ext.data.Store(storeConfig);

		if (this.DefaultSortField)
			this.m_dataStore.setDefaultSort(this.DefaultSortField, this.DefaultSortDir || 'ASC');
	},

	initializeGrid: function() {

		if (gxui.CBoolean(this.Paging)) {

			this.m_pagingTb = new Ext.PagingToolbar({
				store: this.m_dataStore,
				pageSize: parseInt(this.PageSize),
				plugins: this.m_filters,
				displayInfo: this.DisplayInfo,
				displayMsg: this.DisplayMsg, //'Displaying results {0} - {1} of {2}',
				emptyMsg: this.EmptyMsg // "No results to display"
			});

			this.m_pagingTb.firstText = this.FirstText;
			this.m_pagingTb.lastText = this.LastText;
			this.m_pagingTb.nextText = this.NextText;
			this.m_pagingTb.prevText = this.PreviousText;
			this.m_pagingTb.refreshText = this.RefreshText;
			this.m_pagingTb.afterPageText = this.AfterPageText;
			this.m_pagingTb.beforePageText = this.BeforePageText;
		}

		if (gxui.CBoolean(this.UseToolbar)) {

			if (gxui.CBoolean(this.AddSearchField)) {
				if (!this.ToolbarData.Buttons) {
					this.ToolbarData.Buttons = [];
				}
				this.ToolbarData.Buttons.push({ Type: 'Fill' });
				this.ToolbarData.Buttons.push({
					Type: 'Search',
					Store: this.m_dataStore,
					Width: this.SearchFieldWidth,
					AutoRefresh: this.SearchFieldAutoRefresh,
					AutoRefreshTimeout: this.SearchFieldAutoRefreshTimeout
				});
			}

			this.m_gxTbar = new gxui.Toolbar({ register: false });

			this.m_toolbar = this.m_gxTbar.CreateToolbar({
				id: this.getUniqueId() + "_Toolbar",
				data: this.ToolbarData,
				container: this,
				on: {
					'beforebuttonpressed': {
						fn: function(uc, btn, e) {
							this.updateSelection();
							if (btn.RefreshData)
								this.forceRefresh = true; // Esto hace que cuando se ejecute el onRefresh, se fuerce un refresh del grid.
						},
						scope: this
					}
				}
			});

		}

		var loadMask = (gxui.CBoolean(this.LoadingIndicator) && this.LoadingMsg) ? { msg: this.LoadingMsg} : gxui.CBoolean(this.LoadingIndicator);

		if (gxui.CBoolean(this.Grouping))
			this.m_view = new Ext.grid.GroupingView({
				autoFill: gxui.CBoolean(this.AutoSizeColumns),
				forceFit: gxui.CBoolean(this.ForceFit),
				hideGroupedColumn: gxui.CBoolean(this.HideGroupedField),
				groupTextTpl: (this.GroupTemplate != "") ? this.GroupTemplate : "{text}"
			});
		else
			this.m_view = new Ext.grid.GridView({
				autoFill: gxui.CBoolean(this.AutoSizeColumns),
				forceFit: gxui.CBoolean(this.ForceFit)
			});

		this.Width = parseInt(this.Width);
		this.Height = parseInt(this.Height);
		this.m_grid = new Ext.grid.GridPanel({
			id: this.getUniqueId(),
			renderTo: this.getContainerControl(),
			store: this.m_dataStore,
			cm: this.colModel,
			sm: this.m_selModel,
			trackMouseOver: gxui.CBoolean(this.TrackMouseOver),
			loadMask: loadMask,
			view: this.m_view,
			enableColumnHide: gxui.CBoolean(this.EnableColumnHide),
			enableColumnMove: gxui.CBoolean(this.EnableColumnMove),
			minColumnWidth: this.MinColumnWidth,
			autoHeight: gxui.CBoolean(this.AutoHeight),
			autoWidth: gxui.CBoolean(this.AutoWidth),
			width: (this.Width != 100) ? this.Width : undefined,
			height: (this.Height != 100) ? this.Height : undefined,
			collapsible: gxui.CBoolean(this.Collapsible),
			animCollapse: gxui.CBoolean(this.AnimateCollapse),
			title: this.Title,
			cls: this.Cls,
			iconCls: this.IconCls,
			frame: gxui.CBoolean(this.Frame),
			enableDragDrop: gxui.CBoolean(this.EnableDragDrop),
			stripeRows: gxui.CBoolean(this.StripeRows),
			stateful: gxui.CBoolean(this.Stateful),
			stateId: (this.StateId != "") ? this.StateId : undefined,
			bbar: this.m_pagingTb,
			tbar: this.m_toolbar,
			plugins: this.m_filters
		});

		this.m_dataStore = this.m_grid.store;

		if (gxui.CBoolean(this.Resizable)) {
			var rz = new Ext.Resizable(this.m_grid.getEl(), {
				wrap: this.Wrap,
				minWidth: this.MinWidth,
				maxWidth: this.MaxWidth,
				minHeight: this.MinHeight,
				maxHeight: this.MaxHeight,
				pinned: this.Pinned,
				handles: this.Handles
			});

			rz.on('resize', this.m_grid.doLayout, this.m_grid);
		}

	},

	refreshGrid: function() {
		if (this.DataStoreURL != "") {
			if (gxui.CBoolean(this.Paging))
				this.m_grid.store.load({ params: Ext.apply({ start: 0, limit: parseInt(this.PageSize) }, this.DataStoreParms) });
			else
				this.m_grid.store.load({ params: this.DataStoreParms });
		}
		else {
			if (this.Data) {
				this.m_grid.store.loadData(this.Data);
			}
		}
	},

	updateSelection: function() {
		this.SelectedRowData = new Array();
		var selRows = this.m_grid.getSelectionModel().getSelections();
		if (selRows)
			Ext.each(selRows,
					function(item, index, allItems) {
						this.SelectedRowData.push(item.data);
					},
					this);
	},

	addListeners: function() {

		this.m_grid.addListener('rowclick', function(grid, rowIndex, e) {
			this.updateSelection();
			if (this.RowClick)
				this.RowClick();
		}, this);

		this.m_grid.addListener('rowdblclick', function(grid, rowIndex, e) {
			this.updateSelection();
			if (this.RowDoubleClick)
				this.RowDoubleClick();
		}
		, this);

		this.m_grid.addListener('cellclick', function(grid, rowIndex, columnIndex, e) {
			this.updateSelection();
			this.SelectedColumn = columnIndex;
			if (this.CellClick)
				this.CellClick();
		}
		, this);

		this.m_grid.addListener('celldblclick', function(grid, rowIndex, columnIndex, e) {
			this.updateSelection();
			this.SelectedColumn = columnIndex;
			if (this.CellDoubleClick)
				this.CellDoubleClick();
		}
		, this);
	},

	GetColumnModelConfig: function(cols) {
		var config = new Array();

		for (var i = 0; i < cols.length; i++) {
			var col = cols[i];
			config.push({
				id: (col.id != "") ? col.id : undefined,
				header: col.header,
				dataIndex: col.dataIndex,
				width: (col.width != 0) ? col.width : undefined,
				hidden: gxui.CBoolean(col.hidden),
				hideable: (col.hideable != "") ? gxui.CBoolean(col.hideable) : undefined,
				sortable: (col.sortable != "") ? gxui.CBoolean(col.sortable) : gxui.CBoolean(this.DefaultSortable),
				resizable: (col.resizable != "") ? gxui.CBoolean(col.resizable) : gxui.CBoolean(this.DefaultResizable),
				fixed: (col.fixed != "") ? gxui.CBoolean(col.fixed) : undefined,
				menuDisabled: gxui.CBoolean(col.menuDisabled),
				align: (col.align != "") ? col.align : undefined,
				renderer: (col.renderer != "") ? col.renderer : undefined,
				css: (col.css != "") ? col.css : undefined
			});
		}
		return config;
	},

	fitColumns: function(preventRefresh, onlyExpand, omitColumn) {

		var cm = this.cm, leftOver, dist, i;
		var tw = cm.getTotalWidth(false);
		var aw = this.grid.getGridEl().getWidth(true) - this.scrollOffset;

		if (aw < 20) {
			return;
		}
		var extra = aw - tw;

		if (extra === 0) {
			return false;
		}

		var vc = cm.getColumnCount(true);
		var ac = vc - (typeof omitColumn == 'number' ? 1 : 0);
		if (ac === 0) {
			ac = 1;
			omitColumn = undefined;
		}
		var colCount = cm.getColumnCount();
		var cols = [];
		var extraCol = 0;
		var width = 0;
		var w;
		for (i = 0; i < colCount; i++) {
			if (!cm.isHidden(i) && !cm.isFixed(i) && i !== omitColumn) {
				w = cm.getColumnWidth(i);
				cols.push(i);
				extraCol = i;
				cols.push(w);
				width += w;
			}
		}
		var frac = (aw - cm.getTotalWidth()) / width;
		while (cols.length) {
			w = cols.pop();
			i = cols.pop();
			cm.setColumnWidth(i, Math.max(this.grid.minColumnWidth, Math.floor(w + w * frac)), true);
		}

		if ((tw = cm.getTotalWidth(false)) > aw) {
			for (i = 0; i < colCount; i++) {
				if (!cm.isHidden(i) && !cm.isFixed(i) && i !== omitColumn) {
					w = cm.getColumnWidth(i);
					cols.push(i);
					cols.push(w);
					width += w;
				}
			}
			var delta = (tw - aw) / cols.length;
			while (cols.length) {
				w = cols.pop();
				i = cols.pop();
				cm.setColumnWidth(i, Math.max(0, Math.floor(w - delta)), true);
			}
		}

		if (preventRefresh !== true) {
			this.updateAllColumnWidths();
		}

		return true;
	},

	applyState: function(state) {
		var cm = this.colModel;
		var cs = state.columns;
		if (cs) {
			for (var i = 0, len = cs.length; i < len; i++) {
				var s = cs[i];
				var c = cm.getColumnById(s.id);
				if (c) {
					c.hidden = s.hidden;
					c.width = s.width;
					var oldIndex = cm.getIndexById(s.id);
					if (oldIndex != i) {
						cm.moveColumn(oldIndex, i);
					}
				}
			}
		}
		if (state.sort) {
			this.store[this.store.remoteSort ? 'setDefaultSort' : 'sort'](state.sort.field, state.sort.direction);
		}
		if (state.group && this.store.groupBy) {
			this.store.groupBy(state.group);
		}
	},

	getState: function() {
		var o = { columns: [] };
		for (var i = 0, c; c = this.colModel.config[i]; i++) {
			o.columns[i] = {
				id: c.id,
				width: c.width
			};
			if (c.hidden) {
				o.columns[i].hidden = true;
			}
		}
		var ss = this.store.getSortState();
		if (ss) {
			o.sort = ss;
		}
		if (this.store.getGroupState) {
			var gs = this.store.getGroupState();
			if (gs) {
				o.group = gs;
			}
		}
		return o;
	},

	httpProxyLoadResponse: function(o, success, response) {
		delete this.activeRequest;
		if (!success) {
			this.fireEvent("loadexception", this, o, response);
			o.request.callback.call(o.request.scope, null, o.request.arg, false);
			return;
		}
		var result;
		try {
			result = o.reader.read(response);
			if (result.success === false) {
				this.fireEvent("loadexception", this, o, response);
				//return;
			}
		} catch (e) {
			this.fireEvent("loadexception", this, o, response, e);
			o.request.callback.call(o.request.scope, null, o.request.arg, false);
			return;
		}
		this.fireEvent("load", this, o, o.request.arg);
		o.request.callback.call(o.request.scope, result, o.request.arg, true);
	},

	// Methods
	Refresh: function() {
		this.refreshGrid();
	},

	SelectRow: function(row, keepExisting) {
		index = this.m_grid.getStore().indexOfId(row);
		this.SelectRowByIndex(index, keepExisting);
	},

	SelectRowByIndex: function(rowIndex, keepExisting) {
		this.m_grid.getSelectionModel().selectRow(rowIndex, keepExisting);
	},

	DeselectRow: function(row) {
		index = this.m_grid.getStore().indexOfId(row);
		this.DeselectRowByIndex(index);
	},

	DeselectRowByIndex: function(rowIndex) {
		this.m_grid.getSelectionModel().deselectRow(rowIndex);
	},

	ClearSelections: function() {
		this.m_grid.getSelectionModel().clearSelections();
	}
});