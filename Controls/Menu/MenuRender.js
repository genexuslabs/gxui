/// <reference path="..\VStudio\vswd-ext_2.2.js" />
gxui.Menu = Ext.extend(gxui.UserControl, {
	initialize: function() {
		gxui.Menu.superclass.initialize.call(this);
	},

	// Databindings
	SetMenu: function(data) {
		this.Menu = data;
	},

	// Databindings
	GetMenu: function(data) {
		return this.Menu;
	},

	onRender: function() {
		this.m_menu = this.createMenu(this.Menu);
	},

	onRefresh: function() {
	},

	getUnderlyingControl: function() {
		return this.m_menu;
	},

	createMenu: function(menu) {
		if (menu) {
			return new Ext.menu.Menu({
				items: this.getContextMenuItems(menu)
			});
		}
	},

	getContextMenuItems: function(contextMenu) {
		var cmItems = [];

		Ext.each(contextMenu, function(item) {
			var config;
			switch (item.Type) {
				case 'Text':
					config = item.Text;
					break;
				case 'Separator':
					config = '-';
					break;
				case 'Menu':
					config = this.getBasicItemConfig(item);
					config.menu = this.getContextMenuItems(item.Items);
					delete config.handler;
					break;
				default:
					config = this.getBasicItemConfig(item);
					break;
			}

			cmItems.push(config);
		}, this);

		return cmItems;
	},

	getBasicItemConfig: function(item) {
		return {
			gxid: item.Id,
			text: item.Text,
			tooltip: item.Tooltip,
			icon: item.Icon,
			iconCls: item.IconCls,
			cls: (item.Cls != "") ? item.Cls : (item.Text != "") ? "x-btn-text-icon" : "x-btn-icon",
			disabled: item.Disabled,
			hidden: item.Hidden,
			handler: this.itemClickHandler,
			scope: this
		};
	},

	itemClickHandler: function(btn) {
		if (this.ItemClick) {
			this.ItemClickedId = btn.gxid;
			this.ItemClick();
		}
	},

	// Methods
	ShowMenu: function(m, x, y) {
		var menu = this.m_menu;
		if (m) {
			menu = this.createMenu(m);
		}
		var xy = (x && y) ? [x, y] : Ext.EventObject.getXY();
		if (menu) {
			menu.showAt(xy);
		}
	},

	ShowMenuXY: function(x, y) {
		this.ShowMenu(this.m_menu, x, y);
	}
});

// Supported item types
gxui.Menu.ItemType = {
	Button: "Button",
	Text: "Text",
	Separator: "Separator",
	Menu: "Menu"
};
