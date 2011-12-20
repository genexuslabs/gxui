/// <reference path="..\VStudio\vswd-ext_2.2.js" />
gxui.Toolbar = Ext.extend(gxui.UserControl, {
	m_toolbar: null,
	initialize: function() {
		gxui.Toolbar.superclass.initialize.call(this);

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
			*/
			"beforebuttonpressed": true,
			/**
			* @event buttonpressed
			* Fires after a toolbar Button (Type = "Button") has been pressed.
			* @param {gxui.UserControl} this
			* @param {Ext.Toolbar.Button} btn Pressed button
			* @param {Ext.EventObject} e
			*/
			"buttonpressed": true,
			/**
			* @event editfieldkeypress
			* Fires after a key has been pressed in a toolbar Edit field (Type == "Edit").
			* @param {gxui.UserControl} this
			* @param {Ext.form.TextField} edit Edit field
			* @param {Ext.EventObject} e
			*/
			"editfieldkeypress": true,
			/**
			* @event editfieldblur
			* Fires after a toolbar Edit field (Type == "Edit") loses focus.
			* @param {gxui.UserControl} this
			* @param {Ext.form.TextField} edit Edit field
			*/
			"editfieldblur": true
		});
	},

	SetData: function(data) {
		this.Data = data;
	},

	GetData: function(data) {
		return this.Data;
	},

	GetToolbar: function(add) {
		return this.m_toolbar;
	},

	onRender: function() {
		this.CreateToolbar().render(this.getContainerControl());
	},

	onRefresh: function() {
		this.refreshButtons(this.Data.Buttons, this.m_toolbar.items);
	},

	getUnderlyingControl: function() {
		return this.m_toolbar;
	},

	CreateToolbar: function(options) {
		if (options) {
			if (options.id) {
				this.getUniqueId = function() {
					return options.id;
				};
			}

			if (options.data) {
				this.SetData(options.data);
			}

			if (options.container) {
				options.container.ButtonActionHandler = this.ButtonActionHandler;
				options.container.EditActionHandler = this.EditActionHandler;

				this.ButtonActionHandler = this.ButtonActionHandler.createDelegate(options.container);
				this.EditActionHandler = this.EditActionHandler.createDelegate(options.container);
			}

			if (options.on) {
				this.on(options.on);
			}
		}

		this.m_toolbar = new Ext.Toolbar({
			id: this.getUniqueId(),
			stateful: false,
			buttons: this.CreateButtons()
		});

		return this.m_toolbar;
	},

	CreateButtons: function() {
		var toolbarItems = [];
		if (this.Data && this.Data.Buttons) {
			Ext.each(this.Data.Buttons, function(item, index, allItems) {
				if (!item.Type) {
					item.Type = gxui.Toolbar.ItemType.Button;
				}
				toolbarItems.push(this.GetConfig(item));
				if (this.SeparateAll && allItems[index + 1])
					toolbarItems.push('-');
			}, this);
		}
		return toolbarItems;
	},

	ButtonClickHandler: function(btn, e) {
		if (this.fireEvent("beforebuttonpressed", this, btn, e) !== false) {
			if (btn.gxConfirmation) {
				var processResult = function(option, text) {
					if (option == 'ok')
						this.ButtonActionHandler(btn, e);
				};

				// Put focus on Cancel button by default.
				Ext.Msg.getDialog().defaultButton = 3;

				var msgBox = Ext.Msg.show({
					title: btn.gxConfirmation.Title,
					msg: btn.gxConfirmation.Message,
					buttons: {
						ok: btn.gxConfirmation.OKButtonText,
						cancel: btn.gxConfirmation.CancelButtonText
					},
					fn: processResult,
					scope: this,
					animEl: btn.getEl(),
					icon: Ext.MessageBox.QUESTION
				});

				// Restore Ext.MessageBox defaultButton value to avoid affecting other places where it might be used
				setTimeout(function() {
					Ext.Msg.getDialog().defaultButton = 0;
				}, 500);
			}
			else {
				this.ButtonActionHandler(btn, e);
			}
			this.fireEvent("buttonpressed", this, btn, e);
		}
	},

	ButtonActionHandler: function(btn, e) {
		if (this.ButtonPressed) {
			this.ButtonPressedId = btn.gxid;
			this.ButtonPressed(btn);
		}
	},

	EditActionHandler: function(field) {
		this.EditFieldValue = field.getValue();
		this.ButtonActionHandler(field);
	},

	GetConfig: function(button) {

		var getBtnCls = function(btn) {
			if (!btn.Cls) {
				if (btn.Icon) {
					return (btn.Text) ? "x-btn-text-icon" : "x-btn-icon";
				}
				else {
					return "x-btn-text";
				}
			}
			return btn.Cls;
		};

		var config;

		if (button.id && button.id.indexOf("ext") == 0)
			return button;

		if (!button.Type || button.Type == gxui.Toolbar.ItemType.Button) {
			button.Type = gxui.Toolbar.ItemType.Button;
			config = {
				id: this.getUniqueButtonId(button.Id),
				gxid: button.Id,
				gxConfirmation: gxui.CBoolean(button.AskConfirmation) ? button.Confirmation : false,
				text: button.Text,
				tooltip: button.Tooltip,
				icon: button.Icon,
				iconCls: button.IconCls,
				cls: getBtnCls(button),
				enableToggle: gxui.CBoolean(button.EnableToggle),
				pressed: gxui.CBoolean(button.Pressed),
				disabled: gxui.CBoolean(button.Disabled),
				hidden: gxui.CBoolean(button.Hidden),
				handler: this.ButtonClickHandler,
				isDropTarget: gxui.CBoolean(button.IsDropTarget),
				scope: this,
				RefreshData: gxui.CBoolean(button.RefreshData)
			};
		}
		else {
			if (button.Type == gxui.Toolbar.ItemType.Text) {
				config = button.Text;
			}
			else {
				if (button.Type == gxui.Toolbar.ItemType.Edit) {
					config = new Ext.form.TextField({
						id: this.getUniqueButtonId(button.Id),
						cls: button.Cls,
						width: 180,
						disabled: gxui.CBoolean(button.Disabled),
						hidden: gxui.CBoolean(button.Hidden),
						enableKeyEvents: true
					});
					if (button.Text != '')
						config.emptyText = button.Text;

					config.on({
						"keypress": {
							fn: function(field, e) {
								this.fireEvent("editfieldkeypress", this, field, e);
								if (e.getKey() == Ext.EventObject.ENTER) {
									e.stopEvent();
									this.EditActionHandler(field);
								}
							},
							scope: this
						},
						"blur": {
							fn: function(field) {
								this.fireEvent("editfieldblur", this, field);
								this.EditActionHandler(field);
							},
							scope: this
						}
					});
					config.gxid = button.Id;
				}
				else {
					if (button.Type == gxui.Toolbar.ItemType.Fill) {
						config = new Ext.Toolbar.Fill();
					}
					else {
						if (button.Type == gxui.Toolbar.ItemType.Separator) {
							config = "-";
						}
						else {
							if (button.Type == gxui.Toolbar.ItemType.Menu || button.Type == gxui.Toolbar.ItemType.SplitButton) {
								var menuItems = [];

								Ext.each(button.Items, function(item, index, allItems) {
									menuItems.push(this.GetConfig(item));
								}, this);

								config = {
									text: button.Text,
									tooltip: button.Tooltip,
									hidden: gxui.CBoolean(button.Hidden),
									icon: button.Icon,
									iconCls: button.IconCls,
									menu: menuItems,
									cls: getBtnCls(button),
									disabled: gxui.CBoolean(button.Disabled)
								};

								if (button.Type == gxui.Toolbar.ItemType.SplitButton) {
									config.gxid = button.Id;
									config.gxConfirmation = gxui.CBoolean(button.AskConfirmation) ? button.Confirmation : false;
									config.xtype = 'tbsplit';
									config.enableToggle = gxui.CBoolean(button.EnableToggle);
									config.pressed = gxui.CBoolean(button.Pressed);
									if (gxui.CBoolean(button.EnableToggle)) {
										config.toggleHandler = this.ButtonClickHandler;
									}
									else {
										config.handler = this.ButtonClickHandler;
									}
									config.scope = this;
								}
							}
							else {
								if (button.Type == "Search") {
									config = new Ext.app.SearchField({
										store: button.Store,
										width: button.Width,
										enableKeyEvents: gxui.CBoolean(button.AutoRefresh),
										listeners: {
											'keydown': {
												fn: function(field, e) {
													if (e.getKey() != e.TAB) {
														this.onTrigger2Click();
													}
												},
												buffer: button.AutoRefreshTimeout || 350
											}
										}
									});
									config.on('resize', function(field) {
										field.getEl().setWidth(button.Width - 17);
										field.getEl().parent().setWidth(button.Width);
									});
									button.Store = 'undefined';
								}
							}
						}
					}
				}
			}
		}
		return config;
	},

	defineBtnsDropTarget: function() {
		this.m_toolbar.items.each(function(item, pos) {
			if (item.type == "button" && item.isDropTarget) {
				var dt = new Ext.dd.DropTarget(item.getEl(), { ddGroup: 'GridDD' });
				dt._btn = item;
				dt._scope = this;
				dt.notifyOver = function(source, e, data) {
					if (data.grid) {
						return 'x-dd-drop-ok';
					}
					return 'x-dd-drop-nodrop';
				};
				dt.notifyDrop = function(source, e, data) {
					if (data.grid) {
						this._scope.ButtonActionHandler(this._btn);
						return true;
					}
					return false;
				};
				dt.notifyEnter = function(source, e, data) {
					if (data.grid) {
						return 'x-dd-drop-ok';
					}
					return 'x-dd-drop-nodrop';
				};
			}
		},
		this);
	},

	refreshButtons: function(buttons, renderedButtons) {
		var i = 0;
		var ItemType = gxui.Toolbar.ItemType;
		renderedButtons.each(function(renderedBtn) {
			var button = buttons[i];
			if (button) {
				if (button.Type == ItemType.Button || button.Type == ItemType.Edit || button.Type == ItemType.Menu || button.Type == ItemType.SplitButton) {
					if (!gxui.CBoolean(button.Disabled) && renderedBtn.disabled) {
						renderedBtn.enable();
					}
					else {
						if (gxui.CBoolean(button.Disabled) && !renderedBtn.disabled) {
							renderedBtn.disable();
						}
					}
					if (gxui.CBoolean(button.Hidden) && !renderedBtn.hidden) {
						renderedBtn.hide();
					}
					else {
						if (!gxui.CBoolean(button.Hidden) && renderedBtn.hidden) {
							renderedBtn.show();
						}
					}
				}
				if ((button.Type == ItemType.Menu || button.Type == ItemType.SplitButton) && button.Items && renderedBtn.menu) {
					this.refreshButtons(button.Items, renderedBtn.menu.items);
				}
			}
			i += 1;
		}, this)
	},

	getUniqueButtonId: function(btnId) {
		return this.getUniqueId() + "_btn_" + btnId;
	},

	findItem: function(id, items) {
		var ItemType = gxui.Toolbar.ItemType;
		var searchedItem;
		Ext.each(items, function(item) {
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

	changeItemPropertyValue: function(itemId, propertyId, propertyValue) {
		var item = this.findItem(itemId, this.Data.Buttons);
		if (item) {
			item[propertyId] = propertyValue;
		}
		return item;
	},

	// Methods
	ChangeToolbar: function(toolbarData, id, container) {
		var ownerCt = this.m_toolbar.ownerCt;
		this.m_toolbar.destroy();

		this.CreateToolbar({
			data: toolbarData,
			id: id,
			container: container
		});

		var ct;
		if (ownerCt) {
			ownerCt.topToolbar = this.m_toolbar;
			this.m_toolbar.ownerCt = ownerCt;
			ct = ownerCt.tbar;
		}
		else {
			ct = this.getContainerControl();
		}
		this.m_toolbar.render(ct);

		return this.m_toolbar;
	},

	DisableItem: function(itemId) {
		this.changeItemPropertyValue(itemId, "Disabled", true);
		this.refreshButtons(this.Data.Buttons, this.m_toolbar.items);
	},

	EnableItem: function(itemId) {
		this.changeItemPropertyValue(itemId, "Disabled", false);
		this.refreshButtons(this.Data.Buttons, this.m_toolbar.items);
	},

	HideItem: function(itemId) {
		this.changeItemPropertyValue(itemId, "Hidden", true);
		this.refreshButtons(this.Data.Buttons, this.m_toolbar.items);
	},

	ShowItem: function(itemId) {
		this.changeItemPropertyValue(itemId, "Hidden", false);
		this.refreshButtons(this.Data.Buttons, this.m_toolbar.items);
	}
});

// Supported item types
gxui.Toolbar.ItemType = {
	Button: "Button",
	Text: "Text",
	Edit: "Edit",
	Fill: "Fill",
	Separator: "Separator",
	Menu: "Menu",
	SplitButton: "SplitButton"
};
