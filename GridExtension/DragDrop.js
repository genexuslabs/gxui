/// <reference path="..\VStudio\vswd-ext_2.2.js" />

gxui.GridExtension.DragDrop = function(gridUC, cfg) {
	Ext.apply(this, cfg || {});

	this.gridUC = gridUC;
	this.m_grid = gridUC.getUnderlyingControl()

	this.configGridDragZone();
};

gxui.GridExtension.DragDrop.prototype = {
	configGridDragZone: function() {
		var grid = this.m_grid;
		var dragZone = grid.getView().dragZone;
		if (dragZone) {
			dragZone.onInitDrag = this.initializeDrag.createDelegate(this);
			dragZone.onBeforeDrag = this.onBeforeDrag.createDelegate(this);
			// If I want to show visual feedback when a row being dragged hovers a valid drop target, the group of valid
			// drop targets must be intialized using a Ext.dd.DropZone. Must be done afterShow, so the target elements
			// exist in the dom.
			gxui.afterShow(this.defineDropTargets, this);

			dragZone.primaryButtonOnly = gx.lang.gxBoolean(this.PrimaryButtonOnly);
		}
	},

	initializeDrag: function(e) {
		if (this.gridUC.OnInitDrag) {
			this.gridUC.OnInitDrag();
		}

		var dragZone = this.m_grid.getView().dragZone;
		var data = dragZone.dragData;
		dragZone.ddel.innerHTML = this.DragDropText || dragZone.grid.getDragDropText();
		dragZone.proxy.update(dragZone.ddel);
	},

	onBeforeDrag: function(data, e) {
		var row = this.gridUC.rows[data.rowIndex], dnd = gx.fx.dnd;
		var dragSource = this.getGxRowDragSource(row);

		if (dragSource) {
			dnd.dragCtrl = data.ddel;
			dnd.dragCtrl.gxId = row.gxId;
			dnd.dragCtrl.gxGrid = this.gridUC.ownerGrid.containerName;
			dnd.dragCtrl.gxGridName = this.gridUC.ownerGrid.gridName;
			dnd.dragCtrl.gxDndClassName = dragSource.cssClass;
			// Set the row as the dragged object
			dnd.drag(dragSource.obj, dragSource.types, dragSource.hdl);
		}

		// Set the internal GX row in the data so it can be accessed in beforenodedrop in Treeview.
		data.gxRow = row;
		data.gxColumns = this.gridUC.columns;
		return true;
	},

	defineDropTargets: function() {
		if (!this.m_dropTargetsCreated) {
			this.m_dropTargets = {};
			var dnd = gx.fx.dnd;
			if (dnd.sources.length > 0) {
				// Get the types of the grids rows
				var types = dnd.sources[0].types;
				Ext.each(dnd.targets, function(t) {
					// If the target types matches the types of the grid rows
					if (gx.fx.matchingTypes(types, t.types)) {
						this.m_dropTargets[t.id] = new Ext.dd.DropTarget(Ext.get(t.id), {
							ddGroup: this.m_grid.getView().dragZone.ddGroup,

							notifyOver: function() {
								return this.dropAllowed;
							}
						});
					}
				}, this);
				this.m_dropTargetsCreated = true;
			}
		}
	},

	getGxRowDragSource: function(row) {
		var trId = this.gridUC.getRowGxInternalId(row);

		var dragSource;
		// Find the drag source for the row
		Ext.each(gx.fx.dnd.sources, function(s) {
			if (s.id == trId) {
				dragSource = s;
				return false;
			}
		});

		return dragSource;
	},

	destroy: function() {
		delete this.gridUC;
		delete this.m_grid;

		if (this.m_dropTargets) {
			for (dropTarget in this.m_dropTargets) {
				dropTarget.unreg();
			}
		}
		delete this.m_dropTargets;
	}
};