/// <reference path="..\..\Freezer\Ext\ext-all-dev.js" />

Ext.define('gxui.GridExtension.DragDrop', {
	constructor: function (gridUC, grid, cfg) {
		Ext.apply(this, cfg || {});

		this.gridUC = gridUC;
		this.m_grid = grid;

		this.configGridDragZone();
	},

	configGridDragZone: function () {
		var grid = this.m_grid;
		var ddPlugin = grid.getView().getPlugin(this.gridUC.getUniqueId() + '-dd');
		if (ddPlugin && ddPlugin.dragZone) {
			var dragZone = ddPlugin.dragZone;
			dragZone.onInitDrag = Ext.bind(this.initializeDrag, this);
			dragZone.onBeforeDrag = Ext.bind(this.onBeforeDrag, this);
			dragZone.onStartDrag = function () { console.log('onStartDrag', arguments); }
			// If I want to show visual feedback when a row being dragged hovers a valid drop target, the group of valid
			// drop targets must be intialized using a Ext.dd.DropZone. Must be done afterShow, so the target elements
			// exist in the dom.
			this.defineDropTargets();

			dragZone.primaryButtonOnly = gx.lang.gxBoolean(this.PrimaryButtonOnly);
		}
	},

	initializeDrag: function () {
		/**
		* @event OnInitDrag
		* Fires when a drag operation on a row is started. This event is useful to update the value of {@link #DragDropText} with row data.
		* @member gxui.GridExtension
		*/
		if (this.gridUC.OnInitDrag) {
			this.gridUC.OnInitDrag();
		}

		var ddPlugin = this.m_grid.getView().getPlugin(this.gridUC.getUniqueId() + '-dd');
		if (ddPlugin && ddPlugin.dragZone) {
			var dragZone = ddPlugin.dragZone;
			dragZone.ddel.update(this.DragDropText || ddPlugin.dragText);
			dragZone.proxy.update(dragZone.ddel.dom);
		}
	},

	onBeforeDrag: function (data, e) {
		var dnd = gx.fx.dnd;
		var grid = this.m_grid,
			gridUC = this.gridUC,
			record = grid.getView().getRecord(data.item),
			rowIndex = grid.getView().indexOf(data.item),
			actualRowIndex = gridUC.getActualRowIndex(grid, rowIndex),
			row = gridUC.rows[actualRowIndex],
			dragSource = this.getGxRowDragSource(row);

		if (dragSource) {
			dnd.dragInfo = function () { return ""; }; // Override this function to avoid standard GX dd proxy
			dnd.dragCtrl = data.ddel.dom;
			dnd.dragCtrl.gxId = row.gxId;
			dnd.dragCtrl.gxGrid = gridUC.ownerGrid.containerName;
			dnd.dragCtrl.gxGridName = gridUC.ownerGrid.gridName;
			dnd.dragCtrl.gxDndClassName = dragSource.cssClass;
			// Set the row as the dragged object
			dnd.drag(dragSource.obj, dragSource.types, dragSource.hdl);

			// Set the internal GX row in the data so it can be accessed in beforenodedrop in Treeview.
			data.gxGrid = gridUC;
			data.gxRow = row;
			data.gxColumns = gridUC.columns;
		}
		return true;
	},

	defineDropTargets: function () {
		if (!this.m_dropTargetsCreated) {
			this.m_dropTargets = {};
			var dnd = gx.fx.dnd;
			if (dnd.sources.length > 0) {
				// Get the types of the grids rows
				var types = dnd.sources[0].types;
				Ext.each(dnd.targets, function (t) {
					// If the target types matches the types of the grid rows
					if (gx.fx.matchingTypes(types, t.types)) {
						this.m_dropTargets[t.id] = new Ext.dd.DropTarget(Ext.get(t.id), {
							ddGroup: this.gridUC.DragDropGroup,

							notifyOver: function () {
								return this.dropAllowed;
							},

							notifyDrop: function () {
								return true;
							}

						});
					}
				}, this);
				this.m_dropTargetsCreated = true;
			}
		}
	},

	getGxRowDragSource: function (row) {
		var trId = this.gridUC.getRowGxInternalId(row);

		var dragSource;
		// Find the drag source for the row
		Ext.each(gx.fx.dnd.sources, function (s) {
			if (s.id == trId) {
				dragSource = s;
				return false;
			}
		});

		return dragSource;
	},

	destroy: function () {
		delete this.gridUC;
		delete this.m_grid;

		if (this.m_dropTargets) {
			for (dropTarget in this.m_dropTargets) {
				dropTarget.unreg();
			}
		}
		delete this.m_dropTargets;
	}
});
