/*!
* Grid Column AutoWidther
* Version 1.0alpha
* Copyright(c) 2012 Skirtle's Den
* License: http://skirtlesden.com/ux/license
*/
Ext.define('Skirtle.grid.AutoWidther', {
	mixins: { observable: 'Ext.util.Observable' },

	pendingCount: 0,

	constructor: function (config) {
		var me = this;

		Ext.apply(me, config);

		me.addEvents('beforecolumnresize', 'columnresize');
		me.mixins.observable.constructor.call(me);
	},

	autoWidthColumn: function (column, config) {
		var me = this,
            grid = me.grid,
            empty = grid.getStore().getCount() === 0,
            els,
            originalColumnElWidth,
            newWidth;

		config = config || {};

		// Don't resize hidden columns. Arguably this an overly simplistic approach but at least it has good performance
		if (column.isHidden() || !grid.rendered) {
			return false;
		}

		if (empty) {
			if (!Ext.isNumber(newWidth = me.getEmptyWidth(column, config))) {
				return false;
			}
		}
		else {
			newWidth = (config.includeHeader && me.calculateHeaderWidth(column, config)) || 1;

			// Can be multiple, e.g. using the grouping feature
			els = me.getColumnResizers(column, config);

			if (els.length) {
				// Reset the styles on the table so it uses auto sizing, unless this has already been done elsewhere
				me.start();

				Ext.each(els, function (el) {
					el = Ext.fly(el);
					var firstColCell = Ext.get(Ext.query("td." + el.dom.className)[0]);

					/* This is needed otherwise columns only get wider, not narrower.
					* Using getWidth() or getStyle() doesn't necessarily give us the value we want.
					* Even worse is getAttribute(), which doesn't always return a string.
					*/
					originalColumnElWidth = el.dom.style.width;
					el.setStyle('width', 'auto');

					newWidth = Math.max(el.getWidth(), newWidth, firstColCell.getWidth());

					// Put it back the way we found it
					el.setStyle('width', originalColumnElWidth);
				});

				// Put the table back the way we found it
				me.end();
			}
		}

		config.newWidth = newWidth;

		if (me.beforeColumnResize(column, config) === false
            || me.fireEvent('beforecolumnresize', me, column, config) === false) {
			return false;
		}

		// flex takes priority over width, so remove it
		if (column.flex) {
			column.flex = null;
		}

		if (me.isPending()) {
			Ext.suspendLayouts();
		}
		column.setWidth(config.newWidth);
		if (me.isPending()) {
			Ext.resumeLayouts();
		}

		// Required if the column was previously flexed as setWidth thinks the width is already correct
		column.width = config.newWidth;

		me.onColumnResize(column, config);
		me.fireEvent('columnresize', me, column, config);

		return config.newWidth;
	},

	// TODO: Should this be empty?
	beforeColumnResize: function (column, config) {
		if (config.minWidth) {
			config.newWidth = Math.max(config.newWidth, config.minWidth);
		}

		if (config.maxWidth) {
			config.newWidth = Math.min(config.newWidth, config.maxWidth);
		}
	},

	calculateHeaderWidth: function (column, config) {
		// TODO: Verify the need for all the null ternary checks
		var me = this,
            grid = me.grid,
            selector = me.headerCellSelector(column, config),
            triggerSelector = me.headerTriggerSelector(column, config),
            el = grid.getEl(),
            headerCell = el.down(selector),
            trigger = headerCell ? headerCell.down(triggerSelector) : null;

		return headerCell
            ? me.calculateWidth(headerCell) + (trigger ? trigger.getComputedWidth() : 0)
            : false;
	},

	// TODO: Currently only used for the header... is it really necessary?
	calculateWidth: function (cell) {
		var el = Ext.fly(cell);

		return el.getTextWidth() + el.getFrameWidth('lr');
	},

	destroy: function () {
		this.clearListeners();
		this.grid = null;
	},

	// Called when resizing is complete to set the styles on the table elements back to what they were at the start
	end: function () {
		if (! --this.pendingCount) {
			Ext.iterate(this.originalWidths, function (id, width) {
				var tableEl = Ext.fly(id);

				tableEl.setStyle('table-layout', '');
				tableEl.setWidth(width);
			});
		}
	},

	getColumnResizers: function (column, config) {
		// Grab the <th> rows (one per table) that are used to size the columns
		// TODO: can't assume x- prefix
		var els = this.grid.getEl().query('col.x-grid-cell-' + column.id);

		// Grouping feature - first table wraps everything and needs to be ignored
		if (els.length > 1 && Ext.fly(els[0]).parent('table').contains(els[1])) {
			els.shift();
		}

		return els;
	},

	getEmptyWidth: function (column, config) {
		if (config.emptyWidth === 'header') {
			return this.calculateHeaderWidth(column, config);
		}

		return config.emptyWidth;
	},

	getTableResizers: function () {
		// TODO: can't assume x- prefix
		var els = this.grid.getView().getEl().query('.x-grid-table');

		// Grouping feature - first table wraps everything and can be ignored
		if (els.length > 1 && Ext.fly(els[0]).contains(els[1])) {
			els.shift();
		}

		return els;
	},

	headerCellSelector: function (column, config) {
		// TODO: can't assume x- prefix
		// TODO: Should we even use a selector for this?
		return Ext.String.format('#{0} .x-column-header-inner', column.id);
	},

	headerTriggerSelector: function (column, config) {
		// TODO: can't assume x- prefix
		// TODO: Should we even use a selector for this?
		return '.x-column-header-trigger';
	},

	isPending: function () {
		return this.pendingCount !== 0;
	},

	onColumnResize: Ext.emptyFn,

	// Sets the table element for the grid to automatic width... must be reset using endAutoWidth when we're done
	start: function () {
		var me = this;

		if (!me.pendingCount++) {
			me.originalWidths = {};

			Ext.each(me.getTableResizers(), function (tableEl) {
				tableEl = Ext.fly(tableEl);

				me.originalWidths[Ext.id(tableEl)] = tableEl.getWidth();

				tableEl.setStyle({
					'table-layout': 'auto',
					width: 'auto'
				});
			});
		}
	}
});
