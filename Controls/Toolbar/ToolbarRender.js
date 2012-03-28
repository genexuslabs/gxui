/// <reference path="..\..\Freezer\Ext\ext-all-dev.js" />

/**
* @class gxui.Toolbar
* Toolbar User Control. Wraps Ext.toolbar.Toolbar so it can be used from GeneXus.
* The control basically loads a SDT which contains the toolbar items. Consequently you will have to 
* define a variable based on gxuiToolbar SDT which must be assigned to the {@link #Data} property of the control.
* This variable will have a collection of items (gxuiToolbarItem SDT) that will be displayed in the toolbar.
*/
Ext.define('gxui.Toolbar', {
	extend: 'gxui.UserControl',

	initialize: function () {
		this.callParent();

		this.Width;
		this.Height;
		this.Data;
		this.ButtonPressedId = "";
		this.EditFieldValue = "";

		this.addEvents({
			/**
			* @event beforebuttonpressed
			* Fires before a click on a toolbar Button (Type = "Button") is processed. Return false to cancel the default action.
			* @param {gxui.UserControl} this
			* @param {Ext.Toolbar.Button} btn Pressed button
			* @param {Ext.EventObject} e
			* @ignore
			*/
			"beforebuttonpressed": true,
			/**
			* @event buttonpressed
			* Fires after a toolbar Button (Type = "Button") has been pressed.
			* @param {gxui.UserControl} this
			* @param {Ext.Toolbar.Button} btn Pressed button
			* @param {Ext.EventObject} e
			* @ignore
			*/
			"buttonpressed": true,
			/**
			* @event editfieldkeypress
			* Fires after a key has been pressed in a toolbar Edit field (Type == "Edit").
			* @param {gxui.UserControl} this
			* @param {Ext.form.TextField} edit Edit field
			* @param {Ext.EventObject} e
			* @ignore
			*/
			"editfieldkeypress": true,
			/**
			* @event editfieldblur
			* Fires after a toolbar Edit field (Type == "Edit") loses focus.
			* @param {gxui.UserControl} this
			* @param {Ext.form.TextField} edit Edit field
			* @ignore
			*/
			"editfieldblur": true
		});


		// Register default Toolbar item resolvers
		gxui.Toolbar.ItemResolvers.register({
			"Button": function (toolbar, button) {
				var config = {
					id: toolbar.getUniqueButtonId(button.Id),
					gxConfirmation: gxui.CBoolean(button.AskConfirmation) ? button.Confirmation : false,
					cls: toolbar.getBtnCls(button),
					enableToggle: gxui.CBoolean(button.EnableToggle),
					pressed: gxui.CBoolean(button.Pressed),
					disabled: gxui.CBoolean(button.Disabled),
					hidden: gxui.CBoolean(button.Hidden),
					handler: toolbar.buttonClickHandler,
					isDropTarget: gxui.CBoolean(button.IsDropTarget),
					scope: toolbar,
					RefreshData: gxui.CBoolean(button.RefreshData)
				};

				gxui.tryPropertyMapping(config, button, {
					"gxid": "Id",
					"text": "Text",
					"tooltip": "Tooltip",
					"icon": "Icon",
					"iconCls": "IconCls",
					"rowspan": "RowSpan",
					"colspan": "ColSpan",
					"iconAlign": "IconAlign",
					"arrowAlign": "ArrowAlign",
					"scale": "Scale"
				});

				return config;
			},

			"Text": function (toolbar, button) {
				return button.Text;
			},

			"Edit": function (toolbar, button) {
				var edit = Ext.create('Ext.form.field.Text', {
					id: toolbar.getUniqueButtonId(button.Id),
					cls: button.Cls,
					width: 180,
					disabled: gxui.CBoolean(button.Disabled),
					hidden: gxui.CBoolean(button.Hidden),
					enableKeyEvents: true
				});

				if (edit.Text != '')
					edit.emptyText = button.Text;

				edit.on({
					"keypress": {
						fn: function (field, e) {
							this.fireEvent("editfieldkeypress", this, field, e);
							if (e.getKey() == Ext.EventObject.ENTER) {
								e.stopEvent();
								this.editActionHandler(field);
							}
						},
						scope: toolbar
					},
					"blur": {
						fn: function (field) {
							this.fireEvent("editfieldblur", this, field);
							this.editActionHandler(field);
						},
						scope: toolbar
					}
				});
				edit.gxid = button.Id;

				return edit;
			},

			"Fill": function () {
				return Ext.create('Ext.toolbar.Fill');
			},

			"Separator": function () {
				return "-";
			},

			"Menu": function (toolbar, button) {
				var menuItems = [];

				Ext.each(button.Items, function (item, index, allItems) {
					menuItems.push(toolbar.getConfig(item));
				});

				var config = {
					hidden: gxui.CBoolean(button.Hidden),
					menu: menuItems,
					cls: toolbar.getBtnCls(button),
					disabled: gxui.CBoolean(button.Disabled)
				};

				gxui.tryPropertyMapping(config, button, {
					"text": "Text",
					"tooltip": "Tooltip",
					"icon": "Icon",
					"iconCls": "IconCls",
					"rowspan": "RowSpan",
					"colspan": "ColSpan",
					"iconAlign": "IconAlign",
					"arrowAlign": "ArrowAlign",
					"scale": "Scale"
				});

				return config;
			},

			"SplitButton": function (toolbar, button) {
				var splitButton = gxui.Toolbar.ItemResolvers.get(gxui.Toolbar.ItemType.Menu)(toolbar, button);

				splitButton.gxid = button.Id;
				splitButton.gxConfirmation = gxui.CBoolean(button.AskConfirmation) ? button.Confirmation : false;
				splitButton.xtype = 'splitbutton';
				splitButton.enableToggle = gxui.CBoolean(button.EnableToggle);
				splitButton.pressed = gxui.CBoolean(button.Pressed);
				if (gxui.CBoolean(button.EnableToggle)) {
					splitButton.toggleHandler = toolbar.buttonClickHandler;
				}
				else {
					splitButton.handler = toolbar.buttonClickHandler;
				}
				splitButton.scope = toolbar;

				return splitButton;
			},

			"Group": function (toolbar, button) {
				var groupItems = [];

				Ext.each(button.Items, function (item, index, allItems) {
					groupItems.push(toolbar.getConfig(item));
				});

				var config = {
					xtype: 'buttongroup',
					defaults: {},
					items: groupItems
				};

				gxui.tryPropertyMapping(config, button, {
					"title": "Text",
					"columns": "GroupColumns"
				});

				gxui.tryPropertyMapping(config.defaults, button, {
					"scale": "Scale",
					"iconAlign": "IconAlign",
					"arrowAlign": "arrowAlign"
				});

				return config;
			}
		});
	},

	//private
	SetData: function (data) {
		this.Data = data;
	},

	//private
	GetData: function (data) {
		return this.Data;
	},

	//private
	GetToolbar: function (add) {
		return this.m_toolbar;
	},

	onRender: function () {
		this.createToolbar().render(this.getContainerControl());
	},

	onRefresh: function () {
		this.refreshButtons(this.Data.Buttons, this.m_toolbar.items);
	},

	getUnderlyingControl: function () {
		return this.m_toolbar;
	},

	//private
	createToolbar: function (options) {
		if (options) {
			if (options.id) {
				this.getUniqueId = function () {
					return options.id;
				};
			}

			if (options.data) {
				this.SetData(options.data);
			}

			if (options.container) {
				options.container.buttonActionHandler = this.buttonActionHandler;
				options.container.editActionHandler = this.editActionHandler;

				this.buttonActionHandler = Ext.bind(this.buttonActionHandler, options.container);
				this.editActionHandler = Ext.bind(this.editActionHandler, options.container);
			}

			if (options.on) {
				this.on(options.on);
			}
		}

		this.m_toolbar = Ext.create('Ext.toolbar.Toolbar', {
			id: this.getUniqueId(),
			stateful: false,
			items: this.createButtons(),
			docked: 'top'
		});

		return this.m_toolbar;
	},

	//private
	createButtons: function () {
		var toolbarItems = [];
		if (this.Data && this.Data.Buttons) {
			Ext.each(this.Data.Buttons, function (item, index, allItems) {
				if (!item.Type) {
					item.Type = gxui.Toolbar.ItemType.Button;
				}
				toolbarItems.push(this.getConfig(item));
				if (this.SeparateAll && allItems[index + 1])
					toolbarItems.push('-');
			}, this);
		}
		return toolbarItems;
	},

	//private
	buttonClickHandler: function (btn, e) {
		if (this.fireEvent("beforebuttonpressed", this, btn, e) !== false) {
			if (btn.gxConfirmation) {
				var processResult = function (option, text) {
					if (option == 'ok')
						this.buttonActionHandler(btn, e);
				};

				var msgBox = new Ext.window.MessageBox({
					buttonText: {
						ok: btn.gxConfirmation.OKButtonText,
						cancel: btn.gxConfirmation.CancelButtonText
					},
					listeners: {
						'afterrender': function (mb) {
							// Put focus on Cancel button by default.
							mb.defaultFocus = 3;
						}
					}
				});

				msgBox.show({
					title: btn.gxConfirmation.Title,
					msg: btn.gxConfirmation.Message,
					buttons: Ext.Msg.OKCANCEL,
					fn: processResult,
					scope: this,
					animateTarget: btn.getEl(),
					icon: Ext.Msg.QUESTION
				});
			}
			else {
				this.buttonActionHandler(btn, e);
			}
			this.fireEvent("buttonpressed", this, btn, e);
		}
	},

	//private
	buttonActionHandler: function (btn, e) {
		/**
		* @event ButtonPressed
		* Fires after a toolbar item has been pressed. The only items that fire this event are Button and SplitButton.
		* The following properties are set when the event is fired:
		*
		* - {@link #ButtonPressedId}
		*/
		if (this.ButtonPressed) {
			this.ButtonPressedId = btn.gxid;
			this.ButtonPressed(btn);
		}
	},

	//private
	editActionHandler: function (field) {
		this.EditFieldValue = field.getValue();
		this.buttonActionHandler(field);
	},

	//private
	getConfig: function (button) {
		if (button.id && button.id.indexOf("ext") == 0)
			return button;

		if (!button.Type)
			button.Type = gxui.Toolbar.ItemType.Button;

		var resolver = gxui.Toolbar.ItemResolvers.get(button.Type) || gxui.Toolbar.ItemResolvers.get(gxui.Toolbar.ItemType.Button);
		if (resolver)
			return resolver(this, button);
	},

	//private
	defineBtnsDropTarget: function () {
		this.m_toolbar.items.each(function (item, pos) {
			if (item.type == "button" && item.isDropTarget) {
				var dt = new Ext.dd.DropTarget(item.getEl(), { ddGroup: 'GridDD' });
				dt._btn = item;
				dt._scope = this;
				dt.notifyOver = function (source, e, data) {
					if (data.grid) {
						return 'x-dd-drop-ok';
					}
					return 'x-dd-drop-nodrop';
				};
				dt.notifyDrop = function (source, e, data) {
					if (data.grid) {
						this._scope.buttonActionHandler(this._btn);
						return true;
					}
					return false;
				};
				dt.notifyEnter = function (source, e, data) {
					if (data.grid) {
						return 'x-dd-drop-ok';
					}
					return 'x-dd-drop-nodrop';
				};
			}
		},
		this);
	},

	//private
	refreshButtons: function (buttons, renderedButtons) {
		var i = 0;
		var ItemType = gxui.Toolbar.ItemType;
		renderedButtons.each(function (renderedBtn) {
			var button = buttons[i];
			if (button) {
				if (!gxui.CBoolean(button.Disabled) && renderedBtn.disabled) {
					if (renderedBtn.enable)
						renderedBtn.enable();
				}
				else {
					if (gxui.CBoolean(button.Disabled) && !renderedBtn.disabled) {
						if (renderedBtn.disable)
							renderedBtn.disable();
					}
				}
				if (gxui.CBoolean(button.Hidden) && !renderedBtn.hidden) {
					if (renderedBtn.hide)
						renderedBtn.hide();
				}
				else {
					if (!gxui.CBoolean(button.Hidden) && renderedBtn.hidden) {
						if (renderedBtn.show)
							renderedBtn.show();
					}
				}
				if ((button.Type == ItemType.Menu || button.Type == ItemType.SplitButton) && button.Items && renderedBtn.menu) {
					this.refreshButtons(button.Items, renderedBtn.menu.items);
				}
			}
			i += 1;
		}, this)
	},

	//private
	getUniqueButtonId: function (btnId) {
		return this.getUniqueId() + "_btn_" + btnId;
	},

	//private
	findItem: function (id, items) {
		var ItemType = gxui.Toolbar.ItemType;
		var searchedItem;
		Ext.each(items, function (item) {
			if (item.Id == id) {
				searchedItem = item;
			}
			else {
				if ((item.Type == ItemType.Menu || item.type == ItemType.SplitButton) && item.Items) {
					searchedItem = this.findItem(id, item.Items);
				}
			}

			if (searchedItem) {
				return false;
			}
		}, this);
		return searchedItem;
	},

	//private
	changeItemPropertyValue: function (itemId, propertyId, propertyValue) {
		var item = this.findItem(itemId, this.Data.Buttons);
		if (item) {
			item[propertyId] = propertyValue;
		}
		return item;
	},

	//private
	getBtnCls: function (btn) {
		if (!btn.Cls) {
			if (btn.Icon) {
				return (btn.Text) ? "x-btn-text-icon" : "x-btn-icon";
			}
			else {
				return "x-btn-text";
			}
		}
		return btn.Cls;
	},

	// Methods
	/**
	* Changes the current list of toolbar items with a new one and render it.
	* @param {gxuiToolbar} toolbar gxuiToolbar configuration object containing the list of new toolbar items to render
	* @method
	*/
	ChangeToolbar: function (toolbarData, id, container) {
		var ownerCt = this.m_toolbar.ownerCt;
		this.m_toolbar.destroy();

		this.createToolbar({
			data: toolbarData,
			id: id,
			container: container
		});

		var ct;
		if (ownerCt) {
			ownerCt.addDocked(this.m_toolbar)
			ct = ownerCt.getDockedComponent(this.getUniqueId());
		}
		else {
			ct = this.getContainerControl();
			this.m_toolbar.render(ct);
		}

		return this.m_toolbar;
	},

	/**
	* Disable a toolbar item by id
	* @param {String} itemId Toolbar item id
	* @method
	*/
	DisableItem: function (itemId) {
		this.changeItemPropertyValue(itemId, "Disabled", true);
		this.refreshButtons(this.Data.Buttons, this.m_toolbar.items);
	},

	/**
	* Enable a toolbar item by id
	* @param {String} itemId Toolbar item id
	* @method
	*/
	EnableItem: function (itemId) {
		this.changeItemPropertyValue(itemId, "Disabled", false);
		this.refreshButtons(this.Data.Buttons, this.m_toolbar.items);
	},

	/**
	* Hide a toolbar item by id
	* @param {String} itemId Toolbar item id
	* @method
	*/
	HideItem: function (itemId) {
		this.changeItemPropertyValue(itemId, "Hidden", true);
		this.refreshButtons(this.Data.Buttons, this.m_toolbar.items);
	},

	/**
	* Shows a hidden toolbar item by id
	* @param {String} itemId Toolbar item id
	* @method
	*/
	ShowItem: function (itemId) {
		this.changeItemPropertyValue(itemId, "Hidden", false);
		this.refreshButtons(this.Data.Buttons, this.m_toolbar.items);
	}
});

/**
* @class gxui.Toolbar.ItemType
* Standard gxui.Toolbar item types
* @ignore
*/
gxui.Toolbar.ItemType = {
	Button: "Button",
	Text: "Text",
	Edit: "Edit",
	Fill: "Fill",
	Separator: "Separator",
	Menu: "Menu",
	SplitButton: "SplitButton",
	Group: "Group"
};

/**
* @class gxui.Toolbar.ItemResolvers
* gxui.Toolbar.ItemResolvers stores the list of toolbar item resolvers for {@link gxui.Toolbar}. A resolver maps
* a {@link gxui.Toolbar} item configuration with a Ext.toolbar.Toolbar component configuration or object.
* New types of items can be added to {@link gxui.Toolbar}. For each new type, a resolver must be registered using 
* the register method.
* @singleton
* @ignore
*/
gxui.Toolbar.ItemResolvers = {
	// private
	items: {},

	/**
	* Register a new {@link gxui.Toolbar} item resolver.
	* @param {String} type Toolbar item type
	* @param {Function} resolver Resolver function that maps a {@link gxui.Toolbar} configuration with a Ext.toolbar.Toolbar component configuration or object.
	* @method
	*/
	register: function (type, resolver) {
		if (typeof (type) == 'string')
			this.items[type] = resolver;
		else if (typeof (type) == 'object') {
			for (var item in type) {
				if (typeof (type[item]) == 'function') {
					this.items[item] = type[item];
				}
			}
		}
	},

	/**
	* Unregister a {@link gxui.Toolbar} item resolver.
	* @param {String} type Toolbar item type
	* @method
	*/
	unregister: function (type) {
		delete this.items[type];
	},

	/**
	* Get an existing {@link gxui.Toolbar} item resolver, by name.
	* @param {String} type Toolbar item type
	* @method
	*/
	get: function (type) {
		return this.items[type];
	}
};