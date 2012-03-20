/*!
* AutoWidthColumns Plugin
* Version 1.0alpha
* Copyright(c) 2012 Skirtle's Den
* License: http://skirtlesden.com/ux/license
*/

/* Events:
* - beforecolumnresize
* - columnresize
*
* Plugin config:
* - emptyWidth: false, number or 'header'
* - includeHeader
* - maxWidth
* - minWidth
*
* Column config:
* - autoWidth: true, false, 'single' or config
*
* Public Methods:
* - constructor
* - autoWidthColumn
* - destroy
* - disable
* - enable
* - refresh
*
* Protected Methods:
* - beforeColumnResize
* - getEmptyWidth
* - onColumnResize
*/

Ext.define('Skirtle.grid.plugin.AutoWidthColumns', {
	alias: 'plugin.autowidthcolumns',
	extend: 'Ext.AbstractPlugin',
	mixins: { observable: 'Ext.util.Observable' },
	requires: ['Skirtle.grid.AutoWidther'],

	// private
	cfgCopy: ['emptyWidth', 'includeHeader', 'maxWidth', 'minWidth'],

	// The default width for all auto-sized columns when there are no rows
	emptyWidth: 'header',

	// Whether or not the header text should be considered as content in the column
	includeHeader: true,

	//
	pluginId: 'autowidthcolumns',

	init: function (grid) {
		var me = this;

		me.addEvents('beforecolumnresize', 'columnresize');
		me.mixins.observable.constructor.call(me);

		me.bindGrid(grid);
	},

	autoWidthColumn: function (col, configOverrides) {
		var me = this,
            column = Ext.isNumber(col) ? me.getCmp().columns[col] : col,
            config = me.resolveColumnConfig(column, configOverrides),
            width = me.autoWidther.autoWidthColumn(column, config);

		// width can also be false if no resize occurred
		if (width) {
			me.handleSingle(column);
		}

		return width;
	},

	bindGrid: function (grid) {
		var me = this,
            disabled = me.disabled,
            autoWidther;

		// Removes listeners from the current grid, if any
		me.disable();

		me.cmp = grid;

		if (autoWidther = me.autoWidther) {
			autoWidther.destroy();
		}

		if (autoWidther = me.autoWidther = grid ? me.createAutoWidther(grid) : null) {
			me.registerRelayedEvents(autoWidther);
		}

		if (!disabled) {
			// Adds listeners to the new grid
			me.enable();
		}
	},

	createAutoWidther: function (grid) {
		return Ext.create('Skirtle.grid.AutoWidther', Ext.apply({
			grid: grid
		}, this.autoWidtherConfig));
	},

	destroy: function () {
		this.bindGrid(null);
		this.clearListeners();
	},

	disable: function () {
		var me = this,
            grid = me.getCmp();

		if (grid) {
			me.unregisterListeners(grid);
		}

		me.callParent();
	},

	enable: function () {
		var me = this,
            grid = me.getCmp();

		if (me.disabled && grid) {
			me.registerListeners(grid);
		}

		me.callParent();
	},

	getGridViewChangeEvents: function () {
		return ['refresh', 'itemadd', 'itemremove', 'itemupdate'];
	},

	handleSingle: function (column) {
		if (column.autoWidth === 'single') {
			column.autoWidth = false;
		}
	},

	// Handler for the grid's columnshow event
	onGridColumnShow: function (ct, column) {
		if (column.autoWidth) {
			this.autoWidthColumn(column);
		}
	},

	// Handler for the grid view's refresh event
	onGridViewChange: function () {
		this.refresh();
	},

	registerListeners: function (grid) {
		var me = this;

		Ext.each(me.getGridViewChangeEvents(), function (eventName) {
			grid.getView().on(eventName, me.onGridViewChange, me);
		});

		grid.on('columnshow', me.onGridColumnShow, me);
	},

	// TODO: Tidy this up a bit
	registerRelayedEvents: function (autoWidther) {
		var me = this;

		autoWidther.on('beforecolumnresize', function (aw, column, config) {
			return me.fireEvent('beforecolumnresize', me, column, config);
		});

		autoWidther.on('columnresize', function (aw, column, config) {
			return me.fireEvent('columnresize', me, column, config);
		});
	},

	refresh: function () {
		var me = this,
            grid = me.getCmp(),
            columns = grid.columns,
            index = 0,
            len = columns.length,
            updated = false;

		if (!grid.rendered || !grid.getView().rendered) {
			return;
		}

		me.autoWidther.start();

		for (; index < len; ++index) {
			var column = columns[index];

			if (column.autoWidth && me.autoWidthColumn(column)) {
				updated = true;
			}
		}

		me.autoWidther.end();

		if (updated) {
			// TODO: Not always necessary and can be very time-consuming
			grid.headerCt.doLayout();
		}
	},

	resolveColumnConfig: function (column, configOverrides) {
		var config = {},
            me = this;

		if (configOverrides) {
			Ext.apply(config, configOverrides);
		}

		if (Ext.isObject(column.autoWidth)) {
			Ext.applyIf(config, column.autoWidth);
		}

		Ext.each(me.cfgCopy, function (prop) {
			if (!(prop in config)) {
				config[prop] = me[prop];
			}
		});

		return config;
	},

	unregisterListeners: function (grid) {
		var me = this;

		Ext.each(me.getGridViewChangeEvents(), function (eventName) {
			grid.getView().un(eventName, me.onGridViewChange, me);
		});

		grid.un('columnshow', me.onGridColumnShow, me);
	}
});