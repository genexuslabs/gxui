/// <reference path="..\..\Freezer\Ext\ext-all-dev.js" />

/**
* @class gxui.Layout
* Layout User Control. Wraps an Ext.panel.Panel with a BorderLayout so it can be used from GeneXus.
* This is a multi-pane, application-oriented UI layout style that supports multiple nested panels, 
* automatic split bars between regions and built-in expanding and collapsing of regions.
*
* By setting {@link #Nested} = false (its defualt value), the control will automatically size itself to the size of the browser viewport 
* and manage window resizing. If you want to nest the gxui.Layout control inside another control, set {@link #Nested} = true.
*
* To hide a region, set the Hidden property of the region to false ({@link #NorthHidden}, {@link #SouthHidden}, {@link #WestHidden} , {@link #EastHidden} and {@link #CenterHidden} properties).
*/
Ext.define('gxui.Layout', {
	extend: 'gxui.UserControl',

	onRender: function () {
		var regions = [
			this.createConfig("North"),
			this.createConfig("South"),
			this.createConfig("West"),
			this.createConfig("East"),
			this.createConfig("Center")
		];

		if (this.Width) {
			this.Width = parseInt(this.Width);
		}

		if (this.Height) {
			this.Height = parseInt(this.Height);
		}

		if (gxui.CBoolean(this.Nested)) {
			this.m_layout = Ext.create('Ext.panel.Panel', {
				id: this.getUniqueId(),
				border: 0,
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
			this.m_layout = Ext.create('gxui.container.NestedViewport', {
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
	},

	onRefresh: function () {
		this.refreshRegion("North");
		this.refreshRegion("South");
		this.refreshRegion("West");
		this.refreshRegion("East");
		this.refreshRegion("Center");
	},

	onAfterRender: function () {
		this.displayRegions();
	},

	getUnderlyingControl: function () {
		return this.m_layout;
	},

	addToParent: function () {
		return gxui.CBoolean(this.Nested);
	},

	getMargins: function (regionKey, str) {
		var margins = (this[regionKey + "Margins"]) ? this[regionKey + "Margins"].split(",") : ["0", "0", "0", "0"];
		return { top: parseInt(margins[0]), left: parseInt(margins[3]), right: parseInt(margins[1]), bottom: parseInt(margins[2]) };
	},

	getProperty: function (regionKey, propName) {
		var value = this[regionKey + propName];

		if (regionKey == "Center" && (propName == "Width" || propName == "MaxWidth" || propName == "MinWidth"))
			return undefined;

		if ((propName == "Width" || propName == "Height") && (typeof (value) == "string" && value.indexOf("%") == -1))
			return parseInt(value);

		if (value == "true" || value == "false")
			return gxui.CBoolean(value);
		else if (propName.indexOf("Margins") >= 0)
			return this.getMargins(regionKey, value);
		else if (propName == "Layout")
			return value == "default" ? undefined : value;
		else
			return value;
	},

	setRegionProperty: function (regionKey, propName, value) {
		if (regionKey) {
			var r = regionKey.toLowerCase();
			r = r.charAt(0).toUpperCase() + r.substr(1);
			if (this[r + propName]) {
				this[r + propName] = value;
			}
		}
	},

	createConfig: function (regionKey) {
		var config = {
			id: this.getUniqueId() + "-" + regionKey,
			region: regionKey.toLowerCase(),
			contentEl: this.getChildContainer(regionKey),
			autoScroll: (this.getProperty(regionKey, "Layout") != "fit") ? this.getProperty(regionKey, "AutoScroll") : false,
			preventHeader: !this.getProperty(regionKey, "TitleBar"),
			cls: "x-region-" + regionKey.toLowerCase(),
			duration: this.getProperty(regionKey, "Duration") / 1000
		};

		gxui.tryPropertyMapping(config, Ext.bind(this.getProperty, this, [regionKey], 0), {
			"hidden": "Hidden",
			"split": "Split",
			"title": "Title",
			"width": "Width",
			"height": "Height",
			"minWidth": "MinWidth",
			"minHeight": "MinHeight",
			"maxWidth": "MaxWidth",
			"maxHeight": "MaxHeight",
			"margins": "Margins",
			"collapsible": "Collapsible",
			"collapsed": "Collapsed",
			"floatable": "Floatable",
			"animate": "Animate",
			"animFloat": "Animate",
			"layout": "Layout",
			"border": "Border"
		});

		return config;
	},

	displayRegions: function () {
		this.m_layout.items.each(function (region) {
			Ext.fly(region.contentEl).setDisplayed(true);
		});
	},

	registerAsContainer: function () {
		Ext.each(this.m_layout.items.items, function (region, index, allRegions) {
			this.registerCt(region.contentEl, region.add, region.doLayout, region);
		}, this);
	},

	getRegion: function (regionKey) {
		if (regionKey)
			return this.m_layout.layout.regions[regionKey.toLowerCase()];
		return null;
	},

	refreshRegion: function (regionKey) {
		var region = this.getRegion(regionKey);
		if (region) {
			region.setTitle(this.getProperty(regionKey, "Title"));
		}
	},

	// Methods
	/**
	* Collapses the region body so that it becomes hidden.
	* @param {String} regionKey Region name ("North", "South", "West" or "East")
	* @param {Boolean} [animate=true] True to animate the transition, else false.
	* @method
	*/
	CollapseRegion: function (regionKey, animate) {
		var region = this.getRegion(regionKey);

		if (region) {
			region.collapse(animate);
			this.setRegionProperty(regionKey, "Collapsed", "true");
		}
	},

	/**
	* Expands the region body so that it becomes visible.
	* @param {String} regionKey Region name ("North", "South", "West" or "East")
	* @param {Boolean} [animate] True to animate the transition, else false (defaults to the value of the AnimateCollapse property).
	* @method
	*/
	ExpandRegion: function (regionKey, animate) {
		var region = this.getRegion(regionKey);

		if (region) {
			region.expand(animate);
			this.setRegionProperty(regionKey, "Collapsed", "false");
		}
	},

	/**
	* Hides the region.
	* @param {String} regionKey Region name ("North", "South", "West" or "East")
	* @method
	*/
	HideRegion: function (regionKey) {
		var region = this.getRegion(regionKey);

		if (region) {
			region.hide();
			this.m_layout.doLayout();
			this.setRegionProperty(regionKey, "Hidden", "true");
		}
	},

	/**
	* Shows the region.
	* @param {String} regionKey Region name ("North", "South", "West" or "East")
	* @method
	*/
	ShowRegion: function (regionKey) {
		var region = this.getRegion(regionKey);

		if (region) {
			region.show();
			this.m_layout.doLayout();
			this.setRegionProperty(regionKey, "Hidden", "false");
		}
	}
});
