using System;
using System.Collections.Generic;
using System.Text;
using Artech.Common.Helpers.Strings;
using System.Diagnostics;
using Artech.Common.Diagnostics;

namespace Artech.UC.gxui.Helpers
{
	public static class WebForm
	{
		#region TabPanel
		private const string k_tabPanelContainerIdFormat = "tabPanel{0}";

		public static string BeginTabPanel(string name, string themeTabPanelClass, string themeTabClass, int fixedTabs)
		{
			return BeginTabPanel(name, themeTabPanelClass, themeTabClass, fixedTabs, 0, true, true, null, null, null, null);
		}

		public static string BeginTabPanel(string name, string themeTabPanelClass, string themeTabClass, int fixedTabs, int selectedTabIndex, bool autoHeight, bool autoWidth, string width, string height, string runTimeTabs, string minTabWidth)
		{
			if (String.IsNullOrEmpty(name))
				throw new GxException("Paging toolbar must have a name");

			string p_autoheight = autoHeight ? "True" : "False";
			string p_cls = PropertyValue(themeTabPanelClass, String.Empty);
			string p_runtimetabs = PropertyValue("&amp;" + runTimeTabs, String.Empty);
			string p_designtimetabs = GetDesignTimeTabs(fixedTabs, selectedTabIndex);
			string p_autowidth = autoWidth ? "True" : "False";
			string p_controlName = PropertyValue(name, "gxuiTabPanel");
			string p_width = PropertyValue(width, "540");
			string p_height = PropertyValue(height, "400");
			string p_mintabwidth = PropertyValue(minTabWidth, "40");
			string p_tabcls = PropertyValue(themeTabClass, String.Empty);

			return String.Format("<gxgxui.TabPanel autoheight=\"{0}\" cls=\"{1}\" runtimetabs=\"{2}\" " +
								 "designtimetabs=\"{3}\" autowidth=\"{4}\" controlname=\"{5}\" " +
								 "width=\"{6}\" height=\"{7}\" mintabwidth=\"{8}\" tabcls=\"{9}\">",
								 p_autoheight, p_cls, p_runtimetabs,
								 p_designtimetabs, p_autowidth, p_controlName,
								 p_width, p_height, p_mintabwidth, p_tabcls);
		}

		public static string EndTabPanel()
		{
			return "</gxgxui.TabPanel>";
		}

		public static string TabTitle(string title, int tabIndex)
		{
			return String.Format("<container containerId=\"Title{0}\">{1}</container>", String.Format(k_tabPanelContainerIdFormat, tabIndex + 1), title);
		}

		public static string BeginTabBody(int tabIndex)
		{
			return String.Format("<container containerId=\"{0}\">", String.Format(k_tabPanelContainerIdFormat, tabIndex + 1));
		}

		public static string EndTabBody()
		{
			return "</container>";
		}

		private static string GetDesignTimeTabs(int fixedTabs, int selectedTabIndex)
		{
			StringBuilder designTimeTabs = new StringBuilder();
			for (int i = 0; i < fixedTabs; i++)
			{
				if (i > 0)
					designTimeTabs.Append(",");
				designTimeTabs.AppendFormat("{{&quot;id&quot;:&quot;{0}&quot;,&quot;selected&quot;:&quot;{1}&quot;}}", String.Format(k_tabPanelContainerIdFormat, i + 1), (i == selectedTabIndex).ToString());
			}

			return String.Format("[{0}]", designTimeTabs.ToString());
		}
		#endregion

		#region Container
		public static string BeginContainer(string name, string themeClass, string width, string height)
		{
			Dictionary<string, object> properties = new Dictionary<string, object>();
			properties[Properties.gxui_Container.Width] = width;
			properties[Properties.gxui_Container.Height] = height;
			return BeginContainer(name, themeClass, properties);
		}

		public static string BeginContainer(string name, string themeClass, Dictionary<string, object> properties)
		{
			if (properties == null)
				properties = new Dictionary<string, object>();

			properties[Properties.gxui_Container.Cls] = themeClass;

			return String.Format("{0}<container containerId=\"Body\">", BeginControl("gxui.Container", name, properties));
		}

		public static string EndContainer()
		{
			return "</container></gxgxui.Container>";
		}
		#endregion

		#region Panel
		public static string BeginPanel(string name, string themeClass, string title, string width, string height)
		{
			return BeginPanel(name, themeClass, title, width, height, null);
		}

		public static string BeginPanel(string name, string themeClass, string title, string width, string height, Dictionary<string, object> properties)
		{
			if (properties == null)
				properties = new Dictionary<string, object>();

			properties[Properties.gxui_Panel.Width] = width;
			properties[Properties.gxui_Panel.Height] = height;

			return BeginPanel(name, themeClass, title, properties);
		}

		public static string BeginPanel(string name, string themeClass, string title, Dictionary<string, object> properties)
		{
			if (properties == null)
				properties = new Dictionary<string, object>();

			properties[Properties.gxui_Panel.Cls] = themeClass;
			properties[Properties.gxui_Panel.Title] = title;

			return String.Format("{0}<container containerId=\"Body\">", BeginControl("gxui.Panel", name, properties));
		}

		public static string EndPanel()
		{
			return "</container></gxgxui.Panel>";
		}

		#endregion

		private static string BeginControl(string type, string name, Dictionary<string, object> properties)
		{
			Debug.Assert(type != null);
			if (String.IsNullOrEmpty(name))
				throw new GxException(String.Format("Control must have a name ({0})", type));

			StringBuilder attributes = new StringBuilder();
			if (properties != null)
				foreach (KeyValuePair<string, object> prop in properties)
					attributes.Append(String.Format(" {0}=\"{1}\"", prop.Key, prop.Value.ToString()));

			return String.Format("<gx{0} ControlName=\"{1}\"{2}>", type, name, attributes.ToString());
		}

		private static string EndControl(string type)
		{
			Debug.Assert(type != null);
			return String.Format("</gx{0}>", type);
		}
		private static string PropertyValue(string value, string defaultValue)
		{
			return String.IsNullOrEmpty(value) ? defaultValue : value;
		}
	}
}
