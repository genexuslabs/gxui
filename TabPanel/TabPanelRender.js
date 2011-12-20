gxui.TabPanel = Ext.extend(gxui.UserControl, {
	//Private members
	m_tabPanel: null,
	m_designTabs: [],
	m_activeTab: 0,

	initialize: function() {
		gxui.TabPanel.superclass.initialize.call(this);

		this.HandleUniqueId = true;
	},

	// Databinding for property Data
	SetRunTimeTabs: function(data) {
		if (data) {
			if (Ext.isArray(data))
				this.RunTimeTabs = data;
			else
				this.RunTimeTabs = [data];
		}
		else
			this.RunTimeTabs = [];
	},

	// Databinding for property Data
	GetRunTimeTabs: function() {
		return this.RunTimeTabs;
	},

	onRender: function() {
		if (this.RunTimeTabs)
			Ext.each(this.RunTimeTabs, function(tab, index, allTabs) {
				tab.InternalName = '';
			}, this);

		this.m_designTabs = Ext.util.JSON.decode(this.DesignTimeTabs);

		var tabCount = 0;
		if (this.m_designTabs != undefined && this.m_designTabs.length != undefined)
			tabCount += this.m_designTabs.length;
		if (this.RunTimeTabs != undefined && this.RunTimeTabs.length != undefined)
			tabCount += this.RunTimeTabs.length;

		if (tabCount > 0) {
			this.m_tabPanel = new Ext.TabPanel(this.getConfig());

			this.m_tabPanel.setActiveTab(this.m_activeTab);
			this.m_tabPanel.on('tabchange', this.handlers.tabChanged, this);
			this.m_tabPanel.strip.on('mousedown', this.handlers.tabStripClick, this);

			// Register this User Control as a container. Each tab of the tabpanel control is registered
			// as an individual container.
			this.registerAsContainer();

			// Add to parent UC container
			if (gxui.CBoolean(this.AddToParentGxUIControl)) {
				this.addToParentContainer(this.m_tabPanel);
			}

			this.displayTabPanels();
		}
	},

	onRefresh: function() {
		var setActiveTab = false;
		Ext.each(this.getTabPanelsList(), function(tab, index, allTabs) {
			this.m_tabPanel.add(tab);
			this.registerAsContainer(tab);
			setActiveTab = true;
		}, this);

		if (setActiveTab) {
			this.m_tabPanel.setActiveTab(this.m_activeTab);
		}
	},

	onDestroy: function() {
		if (this.m_tabPanel) {
			this.m_tabPanel.items.each(function(tab) {
				this.unregisterCt(tab);
			}, this);
		}
		gxui.TabPanel.superclass.onDestroy.call(this);
	},

	getUnderlyingControl: function() {
		return this.m_tabPanel;
	},

	getConfig: function() {
		var config = {
			id: this.getUniqueId(),
			renderTo: this.getContainerControl(),
			tabPosition: this.TabPosition || "top",
			deferredRender: false,
			border: gx.lang.gxBoolean(this.Border),
			autoWidth: gxui.CBoolean(this.AutoWidth),
			autoHeight: gxui.CBoolean(this.AutoHeight),
			enableTabScroll: (this.TabPosition == "top") ? gxui.CBoolean(this.EnableTabScroll) : false,
			minTabWidth: this.MinTabWidth,
			items: this.getTabPanelsList(),
			listeners: {
				activate: this.handlers.tabItemActivated,
				deactivate: this.handlers.tabItemDeactivated,
				remove: this.handlers.tabItemClosed,
				beforeRemove: this.handlers.tabItemBeforeClosed,
				scope: this
			}
		};

		if (gxui.CBoolean(this.AutoWidth)) {
			if (!gxui.CBoolean(this.AddToParentGxUIControl)) {
				config.cls = "auto-width-tab-strip";
			}
		}
		else {
			config.width = parseInt(this.Width);
		}
		if (!gxui.CBoolean(this.AutoHeight)) {
			config.height = parseInt(this.Height);
		}
		if (this.Cls) {
			config.cls += " " + this.Cls;
		}

		return config;
	},

	getTabPanelsList: function() {
		var rawTabs = (this.RunTimeTabs && this.RunTimeTabs.length) ? this.m_designTabs.concat(this.RunTimeTabs) : this.m_designTabs;
		var tabPanels = [];
		Ext.each(rawTabs, function(tab, index, allTabs) {
			var panel;
			if (index >= this.m_designTabs.length)
				tab.isRuntimeTab = true;

			if (!tab.rendered) {
				var webcomEl;
				if (!tab.isRuntimeTab) {
					var titleEl = Ext.get(this.getChildContainer("Title" + tab.id));
					if (titleEl) {
						tab.Name = titleEl.dom.innerHTML;
						titleEl.dom.parentNode.removeChild(titleEl.dom);
					}
				}
				else
					webcomEl = this.getWebComEl(index);

				if (tab.isRuntimeTab) {
					if (!tab.HTML) {
						tab.InternalName = (webcomEl) ? webcomEl.id : null;
					}
				}
				else {
					tab.InternalName = tab.id;
				}

				if (tab.InternalName) {
					var layout = tab.layout || this.Layout;
					var config = {
						id: this.getTabUniqueId(tab.InternalName),
						layout: layout == "default" ? undefined : layout,
						contentEl: !tab.HTML ? (tab.isRuntimeTab ? webcomEl : this.getChildContainer(tab.id)) : undefined,
						html: tab.HTML,
						title: tab.Name,
						closable: (tab.isRuntimeTab) ? (tab.closable !== undefined ? gxui.CBoolean(tab.closable) : true) : gxui.CBoolean(tab.closable),
						autoScroll: tab.autoScroll || (layout == 'fit' ? false : true),
						listeners: {
							activate: this.handlers.tabItemActivated,
							deactivate: this.handlers.tabItemDeactivated,
							scope: this
						}
					};

					if (this.TabCls)
						config.cls = this.TabCls;

					panel = new Ext.Panel(config);
					tab.rendered = true;
					tabPanels.push(panel);
				}
				else
					return;
			}
			else {
				panel = this.m_tabPanel.items.items[index];
				if (tab.isRuntimeTab && !tab.HTML) {
					var webcomEl = this.getWebComEl(index);
					tab.InternalName = webcomEl.id;
					panel.contentEl = webcomEl.dom; //Ext.get(tab.InternalName).dom;
					var panelDom = panel.body.dom;
					if (panelDom.firstChild)
						panelDom.removeChild(panelDom.firstChild);
					panelDom.appendChild(panel.contentEl);
				}
			}

			if (gxui.CBoolean(tab.selected) || gxui.CBoolean(tab.Selected))
				this.m_activeTab = panel;

		}, this);

		return tabPanels;
	},

	getWebComEl: function(index) {
		var Prefix = this.ParentObject.getComponentPrefix(this.RunTimeWebComponent);
		webcomEl = Ext.get(this.ParentObject.CmpContext + 'gxHTMLWrp' + Prefix + String(index - this.m_designTabs.length + 1 + 10000).substr(1));
		return webcomEl;
	},

	displayTabPanels: function() {
		Ext.each(this.m_designTabs, function(tab, index, allTabs) {
			Ext.get(this.getChildContainer(tab.id)).setDisplayed(true)
		}, this);
	},

	registerAsContainer: function(t) {
		if (t) {
			this.registerCt(Ext.get(t.contentEl || t.body).dom, t.add, t.doLayout, t);
		}
		else {
			Ext.each(this.m_tabPanel.items.items,
				function(tab, index, allTabs) {
					this.registerCt(Ext.get(tab.contentEl || tab.body).dom, tab.add, tab.doLayout, tab);
				},
			this);
		}
	},

	handlers: {
		tabChanged: function(tab, tabItem) {
			if (this.TabChanged) {
				this.TabChanged();
			}
		},

		tabItemActivated: function(tabItem) {
			this.ActiveTabId = tabItem.id;
			if (this.RunTimeTabs)
				Ext.each(this.RunTimeTabs, function(item, index, allItems) {
					if (this.getTabUniqueId(item.InternalName) == tabItem.id) {
						item.Selected = true;
						return false;
					}
				}, this);
		},

		tabItemDeactivated: function(tabItem) {
			if (this.RunTimeTabs)
				Ext.each(this.RunTimeTabs, function(item, index, allItems) {
					if (this.getTabUniqueId(item.InternalName) == tabItem.id) {
						item.Selected = false;
						return false;
					}
				}, this);
		},

		tabItemClosed: function(tabpanel, tabItem) {
			if (this.RunTimeTabs) {
				var rtt = new Array();
				Ext.each(this.RunTimeTabs, function(tab, index, allTabs) {
					if (this.getTabUniqueId(tab.InternalName) != tabItem.id) {
						rtt.push(tab);
					}
					else {
						if (!tab.HTML) {
							this.deleteWebComponent(tabItem.contentEl.id);
						}
					}
				}, this);
				this.SetRunTimeTabs(rtt);
			}
			if (this.TabClosed) {
				this.ClosedTabId = tabItem.id;
				this.TabClosed();
			}
		},

		tabItemBeforeClosed: function(tabPanel, tabItem) {
			if (this.BeforeTabClosed) {
				this.ClosedTabId = tabItem.id;
				this.CancelEvent = false;
				this.BeforeTabClosed();
				return !this.CancelEvent;
			}
		},

		tabStripClick: function(e) {
			if (e.button != 0) {
				return;
			}
			var t = this.m_tabPanel.findTargets(e);
			if (t.close) {
				return;
			}
			if (t.item) {
				if (this.TabClick) {
					this.ActiveTabId = t.item.id;
					this.TabClick();
				}
			}
		}
	},

	getTabUniqueId: function(tabId) {
		if (gxui.CBoolean(this.HandleUniqueId))
			return this.getUniqueId() + "_tab_" + tabId;
		else
			return tabId;
	},

	// Methods
	OpenTab: function(tabId, title, tabHTMLContent, closable, layout) {
		if (this.IsTabOpen(tabId)) {
			this.m_activeTab = this.getTabUniqueId(tabId);
		}
		else {
			var tab = {
				Name: title,
				InternalName: tabId,
				HTML: tabHTMLContent,
				Selected: true,
				closable: closable
			};
			if (layout)
				tab.layout = layout;
			this.RunTimeTabs.push(tab);

			Ext.each(this.getTabPanelsList(), function(tab, index, allTabs) {
				this.m_tabPanel.add(tab);
				this.m_tabPanel.doLayout();
				this.registerAsContainer(tab);
			}, this);
		}

		this.m_tabPanel.setActiveTab(this.m_activeTab);
	},

	CloseTab: function(tabId) {
		if (this.IsTabOpen(tabId)) {
			var tab = this.m_tabPanel.findById(this.getTabUniqueId(tabId));
			if (tab) {
				this.m_tabPanel.remove(tab, true);
			}
		}
	},

	SelectTab: function(tabId) {
		this.m_activeTab = this.getTabUniqueId(tabId);
		this.m_tabPanel.setActiveTab(this.m_activeTab);
	},

	IsTabOpen: function(tabId) {
		var tab = this.m_tabPanel.findById(this.getTabUniqueId(tabId));
		return (tab) ? true : false;
	},

	ShowTab: function(i) {
		this.m_tabPanel.unhideTabStripItem(i);
	},

	HideTab: function(i) {
		this.m_tabPanel.hideTabStripItem(i);
	},

	SetTabDirty: function(tabId, dirty) {
		var tab = this.m_tabPanel.findById(this.getTabUniqueId(tabId));
		if (tab) {
			tab.dirty = dirty;
			var tabEl = Ext.get(this.m_tabPanel.id + "__" + tab.id);
			var tabTextEl = tabEl.query(".x-tab-strip-text")[0];

			if (tabTextEl) {
				if (Ext.isIE) {
					if (dirty) {
						tabTextEl.innerHTML += "*";
					}
					else {
						if (tabTextEl.innerHTML.charAt(tabTextEl.innerHTML.length - 1) == "*")
							tabTextEl.innerHTML = tabTextEl.innerHTML.substring(0, tabTextEl.innerHTML.length - 1);
					}
				}
				else {
					tabTextEl = Ext.get(tabTextEl);
					if (dirty) {
						tabTextEl.addClass("x-tab-strip-dirty");
					}
					else {
						tabTextEl.removeClass("x-tab-strip-dirty");
					}
				}
			}
		}
	},

	IsTabDirty: function(tabId) {
		var tab = this.m_tabPanel.findById(this.getTabUniqueId(tabId));
		return tab && (tab.dirty == true);
	},

	SetTabTitle: function(tabId, title) {
		var tab = this.m_tabPanel.findById(this.getTabUniqueId(tabId));
		if (tab) {
			tab.setTitle(title);
			this.SetTabDirty(tabId, tab.dirty || false);
		}
	}
});