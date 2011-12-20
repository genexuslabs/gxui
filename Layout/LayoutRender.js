gxui.Layout = Ext.extend(gxui.UserControl, {
	// Private members
	m_layout: null,

	initialize: function() {
		gxui.Layout.superclass.initialize.call(this);
	},

	onRender: function() {
		var regions = new Array();

		this.addRegion(regions, "North");
		this.addRegion(regions, "South");
		this.addRegion(regions, "West");
		this.addRegion(regions, "East");
		this.addRegion(regions, "Center");

		if (this.Width) {
			this.Width = parseInt(this.Width);
		}

		if (this.Height) {
			this.Height = parseInt(this.Height);
		}

		if (gxui.CBoolean(this.Nested)) {
			this.m_layout = new Ext.Panel({
				id: this.getUniqueId(),
				renderTo: this.getContainerControl(),
				border: false,
				items: regions,
				layout: 'border',
				cls: this.Cls || undefined,
				width: this.Width != 0 ? this.Width : 'auto',
				height: this.Height != 0 ? this.Height : 'auto',
				stateful: gxui.CBoolean(this.Stateful),
				stateId: (this.StateId != "") ? this.StateId : undefined
			});
		}
		else {
			this.m_layout = new Ext.ux.NestedViewport({
				id: this.getUniqueId(),
				items: regions,
				layout: 'border',
				cls: this.Cls || undefined,
				renderTo: 'MAINFORM',
				stateful: gxui.CBoolean(this.Stateful),
				stateId: (this.StateId != "") ? this.StateId : undefined
			});
		}

		// Register this User Control as a container. Each region of the layout is registered
		// as an individual container.
		this.registerAsContainer();

		if (gxui.CBoolean(this.Nested)) {
			// Add to parent UC container
			this.addToParentContainer(this.m_layout);
		}

		this.displayRegions();
	},

	onRefresh: function() {
		this.refreshRegion("North");
		this.refreshRegion("South");
		this.refreshRegion("West");
		this.refreshRegion("East");
		this.refreshRegion("Center");
	},

	getUnderlyingControl: function() {
		return this.m_layout;
	},

	getMargins: function(regionKey, str) {
		var margins = (this[regionKey + "Margins"]) ? this[regionKey + "Margins"].split(",") : ["0", "0", "0", "0"];
		return { top: parseInt(margins[0]), left: parseInt(margins[3]), right: parseInt(margins[1]), bottom: parseInt(margins[2]) };
	},

	getProperty: function(regionKey, propName) {
		var prop = this[regionKey + propName];
		if (prop == "true" || prop == "false")
			return gxui.CBoolean(prop);
		else
			if (propName.indexOf("Margins") >= 0) {
			return this.getMargins(regionKey, prop);
		}
		else if (propName == "CollapseMode") {
			return prop == "mini" ? "mini" : undefined;
		}
		else if (propName == "Layout") {
			return prop == "default" ? undefined : prop;
		}
		else
			return prop;
	},

	setRegionProperty: function(regionKey, propName, value) {
		if (regionKey) {
			var r = regionKey.toLowerCase();
			r = r.charAt(0).toUpperCase() + r.substr(1);
			if (this[r + propName]) {
				this[r + propName] = value;
			}
		}
	},

	createConfig: function(regionKey) {
		var lstnrs = {
			'render': {
				fn: function(r) {
					gxui.ext.LayoutManager.register(r);
					if (this.getProperty(regionKey, "DragDropMode") == "floating") {
						r.dt = new gxui.ext.FloatingDropTarget(r);
						if (r.region == 'north')
							r.getEl().setStyle({ "z-index": 1 });
					}
				},
				scope: this
			}
		};

		return {
			id: this.getUniqueId() + "-" + regionKey,
			region: regionKey.toLowerCase(),
			contentEl: this.getChildContainer(regionKey),
			hidden: this.getProperty(regionKey, "Hidden"),
			split: this.getProperty(regionKey, "Split"),
			autoScroll: (this.getProperty(regionKey, "DragDropMode") == "portal" || this.getProperty(regionKey, "Layout") != "fit") ? this.getProperty(regionKey, "AutoScroll") : false,
			header: this.getProperty(regionKey, "TitleBar"),
			title: this.getProperty(regionKey, "Title"),
			width: this.getProperty(regionKey, "Width"),
			height: this.getProperty(regionKey, "Height"),
			minWidth: this.getProperty(regionKey, "MinWidth") || 0,
			minHeight: this.getProperty(regionKey, "MinHeight") || 0,
			maxWidth: this.getProperty(regionKey, "MaxWidth") || 0,
			maxHeight: this.getProperty(regionKey, "MaxHeight") || 0,
			margins: this.getProperty(regionKey, "Margins"),
			collapsible: this.getProperty(regionKey, "Collapsible"),
			collapseMode: this.getProperty(regionKey, "CollapseMode"),
			collapsed: this.getProperty(regionKey, "Collapsed"),
			cmargins: this.getProperty(regionKey, "CollapsedMargins"),
			cls: "x-region-" + regionKey.toLowerCase(),
			floatable: this.getProperty(regionKey, "Floatable"),
			autoHide: this.getProperty(regionKey, "AutoHide"),
			animate: this.getProperty(regionKey, "Animate"),
			animFloat: this.getProperty(regionKey, "Animate"),
			duration: this.getProperty(regionKey, "Duration") / 1000,
			xtype: (this.getProperty(regionKey, "DragDropMode") == "portal") ? "gxuiportal" : undefined,
			items: (this.getProperty(regionKey, "DragDropMode") == "portal") ? [{ columnWidth: 1}] : undefined,
			layout: (this.getProperty(regionKey, "DragDropMode") == "portal") ? "column" : this.getProperty(regionKey, "Layout"),
			border: this.getProperty(regionKey, "Border"),
			//stateful: gxui.CBoolean(this.Stateful),
			//stateId: (this.StateId != "") ? this.StateId + "-" + regionKey : undefined,			
			listeners: lstnrs
		};
	},

	addRegion: function(items, regionKey) {
		items.push(this.createConfig(regionKey));
	},

	displayRegions: function() {
		Ext.each(this.m_layout.items.items,
				function(region, index, allRegions) {
					Ext.get(region.contentEl).setDisplayed(true);
				},
				this);
	},

	registerAsContainer: function() {
		Ext.each(this.m_layout.items.items,
				function(region, index, allRegions) {
					if (region.getXType() == 'gxuiportal')
						Ext.each(region.items.items,
								function(col, colIdx, allCols) {
									this.registerCt(region.contentEl, col.add, col.doLayout, col);
								},
								this);
					else
						this.registerCt(region.contentEl, region.add, region.doLayout, region);
				},
				this);
	},

	getRegion: function(regionKey) {
		if (regionKey) {
			if (this.m_layout.layout[regionKey.toLowerCase()]) {
				return this.m_layout.layout[regionKey.toLowerCase()].panel;
			}
		}
		return undefined;
	},

	refreshRegion: function(regionKey) {
		var region = this.getRegion(regionKey);
		if (region) {
			region.setTitle(this.getProperty(regionKey, "Title"));
		}
	},

	// Methods
	collapseRegion: function(regionKey, animate) {
		var region = this.getRegion(regionKey);

		if (region) {
			region.collapse(animate);
			this.setRegionProperty(regionKey, "Collapsed", "true");
		}
	},

	expandRegion: function(regionKey, animate) {
		var region = this.getRegion(regionKey);

		if (region) {
			region.expand(animate);
			this.setRegionProperty(regionKey, "Collapsed", "false");
		}
	},

	hideRegion: function(regionKey) {
		var region = this.getRegion(regionKey);

		if (region) {
			region.hide();
			this.m_layout.doLayout();
			this.setRegionProperty(regionKey, "Hidden", "true");
		}
	},

	showRegion: function(regionKey) {
		var region = this.getRegion(regionKey);

		if (region) {
			region.show();
			this.m_layout.doLayout();
			this.setRegionProperty(regionKey, "Hidden", "false");
		}
	}
});
