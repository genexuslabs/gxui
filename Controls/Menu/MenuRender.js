/// <reference path="..\..\Freezer\Ext\ext-all-dev.js" />

/**
* @class gxui.Menu
* A basic floating menu control. It supports adding buttons, separators and submenus. It's an implementation of Ext.menu.Menu.
* The control basically loads a SDT which contains the menu items. Consequently you will have to 
* define a variable based on a collection of gxuiToolbarItem SDT which must be assigned to the {@link #Menu} property of the control.
* This variable will have a collection of items (gxuiToolbarItem SDT) that will be displayed in the menu.
*
* {@img Menu/menu1.png}
* Example of a data provider to load the items shown in the above image.
*
*		gxuiButton
*		{
*			Id = !"EXPORT"
*			Text = !'Export to Excel'
*			Tooltip = 'Export to Excel'
*			Type = gxuiMenuItemTypes.Button
*		}
*		gxuiButton
*		{
*			Id = !"GENERATEPDF"
*			Text = 'Generate PDF'
*			Tooltip = 'Generate PDF'
*			Type = gxuiMenuItemTypes.Button
*		}
*		gxuiButton
*		{
*			Type = gxuiMenuItemTypes.Separator
*		}
*		gxuiButton
*		{
*			Id = !"INSERT"
*			Text = 'Insert'
*			Tooltip = 'Insert'
*			Type = gxuiMenuItemTypes.Menu
*			Items
*			{
*				Item
*				{
*					Id = !'4'
*					Text = 'Insert Customer'
*					Tooltip = 'Insert Customer'
*					Type = gxuiMenuItemTypes.Button
*				}
*				Item
*				{
*					Id = !'5'
*					Text = 'Insert Company'
*					Tooltip = 'Insert Company'
*					Type = gxuiMenuItemTypes.Button
*				}
*			}
*		}
*
* To show the menu (for example when a TextBlock is clicked) use {@link #ShowMenu} or {@link ShowMenuXY} methods.
*		Event TextBlock1.Click
*			gxui_Menu1.ShowMenu()
*		EndEvent
*
* gxuiMenu provides an ItemClick event that is fired when an item is selected.
*		Event gxui_Menu1.ItemClick
*		  //Display selected menu option
*		  msg(!'Item Clicked Id : ' + gxui_Menu1.ItemClickedId)
*		EndEvent
*
* gxuiMenu can also be associated to another gxui controls, like gxui.GridExtension.
* For instance, if you want to display a context menu when the user right clicks on a selected line then you need to use this code.
*		Event Grid1.ContextMenu()
*		    //Associate a context menu to the grid
*		    gxui_Menu1.ShowMenu()
*		EndEvent
*
* {@img Menu/menu2.png}
*
* #More information:#
* For more examples please see the [online KB][1].
* [1]: http://xev2.genexusserver.com/gxserver/action.aspx?1,RSSReader2.0:0:c9584656-94b6-4ccd-890f-332d11fc2c25:19
*/
Ext.define('gxui.Menu', {
	extend: 'gxui.UserControl',

	initialize: function () {
		this.callParent(arguments);
		this.unmanagedLayout = true;
	},

	// Databindings
	SetMenu: function (data) {
		this.Menu = data;
	},

	// Databindings
	GetMenu: function (data) {
		return this.Menu;
	},

	onRender: function () {
		this.m_menu = this.createMenu(this.Menu);
	},

	onRefresh: function () {
	},

	getUnderlyingControl: function () {
		return this.m_menu;
	},

	// Overriden
	runDeferredMethod: function () {
		return !!this.getUnderlyingControl();
	},

	createMenu: function (menu) {
		if (menu) {
			return new Ext.menu.Menu({
				items: this.getContextMenuItems(menu),
				ignoreParentClicks: true
			});
		}
	},

	getContextMenuItems: function (contextMenu) {
		var cmItems = [];

		if (contextMenu) {
			Ext.each(contextMenu, function (item) {
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
		}

		return cmItems;
	},

	getBasicItemConfig: function (item) {
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

	itemClickHandler: function (btn) {
		/**
		* @event ItemClick
		* Fires after a menu option has been pressed. The only options that fire this event are those of type Button.
		* The following properties are set when the event is fired:
		*
		* - {@link #ItemClickedId}
		*/
		if (this.ItemClick) {
			this.ItemClickedId = btn.gxid;
			this.ItemClick();
		}
	},

	methods: {
		// Methods
		/**
		* Shows the menu. If the menu is called without parameters, the menu configured in the {@link #Menu} property will be shown in the cursor position.
		* @param {gxuiToolbarItem[]} [menu] The menu to show. This parameter should be used when showing a menu different from the one specified in {@link #Menu} property
		* or when the menu specified in the {@link #Menu} property is changed.
		* @param {Number} [x] x position
		* @param {Number} [y] y position
		* @method
		*/
		ShowMenu: function (m, x, y) {
			var menu = this.m_menu;
			if (m) {
				menu = this.createMenu(m);
			}
			var xy = (x && y) ? [x, y] : Ext.EventObject.getXY();
			if (menu) {
				menu.showAt(xy);
			}
		},

		/**
		* Shows the menu configured in the {@link #Menu} property in the specified position.
		* @param {Number} x x position
		* @param {Number} y y position
		* @method
		*/
		ShowMenuXY: function (x, y) {
			this.ShowMenu(this.Menu, x, y);
		}
	}
});

// Supported item types
gxui.Menu.ItemType = {
	Button: "Button",
	Text: "Text",
	Separator: "Separator",
	Menu: "Menu"
};
