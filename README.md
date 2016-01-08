# GxUI Library

## Description
GxUI is a user controls library for GeneXus X or higher, based on ExtJS 4.1. It features a set of controls for building highly interactive web  applications with GeneXus.

## Features
Currently, GxUI provides the following user controls:

* **GridExtension**

  Custom render for Grid controls. Wraps `Ext.grid.Panel` so it can be used from GeneXus. Grids are an excellent way of showing large amounts of tabular data on the client side. Essentially a supercharged <table>, GridExtension makes it easy to fetch, sort and filter large amounts of data.

* **Layout**

  Layout User Control. Wraps an `Ext.panel.Panel` with a BorderLayout so it can be used from GeneXus. This is a multi-pane, application-oriented UI layout style that supports multiple nested panels, automatic split bars between regions and built-in expanding and collapsing of regions.

* **Menu**

  A basic floating menu control. It supports adding buttons, separators and submenus. It's an implementation of `Ext.menu.Menu`.

* **Message**

  This control allows you to show a message in two ways: Alert or Notification. If you want to show an alert, a modal message dialog will appear. If you want to show a notification, a non-modal notification window will appear, similar to the one used by Microsoft Outlook when a new mail message arrives.

* **Panel**

  Panel User Control. Wraps `Ext.panel.Panel` so it can be used from GeneXus.
  The control basically is a container of other controls. After dragging the control to the form you can include any control in the cell provided by the control. Also, it came with a Toolbar included. 

* **Splash**

  This control shows a splash screen. The splash screen is shown only once (a cookie is stored to remember if it was already shown). 

* **TabPanel**

  A basic tab container. Wraps `Ext.tab.Panel` so it can be used from GeneXus.

* **Toolbar**

  Toolbar User Control. Wraps `Ext.toolbar.Toolbar` so it can be used from GeneXus. The control basically loads a SDT which contains the toolbar items.

* **Treeview**

  Treeview User Control wraps `Ext.tree.Panel` so it can be used from GeneXus. This control provides tree-structured UI representation of tree-structured data and is an excellent tool for displaying heirarchical data in an application. Tree nodes can be loaded invoking a remote URL or through a SDT. 

* **Viewport**

  Viewport user control allows any contained GxUI control to occupy all the available space on screen.

## Building Your Copy of GxUI
GxUI is built using [MSBuild](https://msdn.microsoft.com/en-us//library/dd393574.aspx)

### Prerequisites

* You have `MSBuild`
* You are familiar with `git`.

### Build

Once you have the repository cloned, building a copy of GxUI is really easy.

```
BuildBatch.bat
```
At this point, you should now have a `build/` directory populated with everything you need to use GxUI.

The bat file accepts an optional parameter to indicate if it's a `Debug` or `Release` build. If no parameter is specified, a `Debug` build is performed.

## Documentation
Detailed documentation is available here: http://wiki.genexus.com/gxui/docs/index.html

## License
Released under the [BSD license](http://opensource.org/licenses/BSD-3-Clause).

