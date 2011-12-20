using System;
using System.Collections.Generic;
using System.Text;
using System.Xml;
using System.Xml.XPath;
using Jayrock.Json;
using Jayrock.Json.Conversion;
using Artech.Genexus.Common.Parts.WebForm;

namespace Artech.UC.gxui.Renders
{
	public class TabPanel : UserControl
	{
		public TabPanel(IUserControlInfo info) : base(info) { }

		public override string HandleClick()
		{
			base.HandleClick();

			string clickedElementId = ControlInfo.GetClickedElementId();
			if (clickedElementId == null)
				return "";
			if (clickedElementId.Equals("+"))
				return SetSelectedTab(this.AddPanel());

			else if (clickedElementId.StartsWith("x"))
				this.RemovePanel(clickedElementId.Substring(1));

			else if (!clickedElementId.Equals(""))
				return SetSelectedTab(clickedElementId);

			if (this.PanelsCount() > 0)
				return SetSelectedTab(((JsonObject)GetPanelsArray()[0])["id"].ToString());
			else
				return "";
		}

		public XPathNodeIterator GetPanels()
		{
			try
			{
				JsonArray panels = GetPanelsArray();

				StringBuilder builder = new StringBuilder();
				builder.AppendFormat("<Panels>");
				foreach (JsonObject panel in panels)
				{
					builder.AppendFormat("<Panel><Id>{0}</Id><Selected>{1}</Selected></Panel>", panel["id"], panel["selected"]);
				}
				builder.Append("</Panels>");
				XmlDocument document = new XmlDocument();
				document.LoadXml(builder.ToString());
				return document.CreateNavigator().Select("Panels");
			}
			catch (Exception e)
			{
				return null;
			}
		}

		public int PanelsCount()
		{
			try
			{
				return GetPanelsArray().Count;
			}
			catch (Exception e)
			{
				return 0;
			}
		}

		private string SetSelectedTab(string tabId)
		{
			try
			{
				JsonArray panels = GetPanelsArray();
				foreach (JsonObject panel in panels)
				{
					panel["selected"] = "false";
					if (tabId.Equals(panel["id"]))
						panel["selected"] = "true";
				}
				ControlInfo.Properties.SetPropertyValue("DesignTimeTabs", JsonConvert.ExportToString(panels));
				return tabId;
			}
			catch (Exception e)
			{
				return tabId;
			}
		}

		private string AddPanel()
		{
			try
			{
				JsonArray panels = GetPanelsArray();

				int maxPanelId = 0;
				foreach (JsonObject panel in panels)
				{
					int currentPanelId = int.Parse(panel["id"].ToString().Substring(8));
					if (currentPanelId > maxPanelId)
						maxPanelId = currentPanelId;
				}

				string panelId = "tabPanel" + (maxPanelId + 1).ToString();
				panels.Add(new JsonObject(new string[] { "id", "selected" }, new string[] { panelId, "false" }));
				ControlInfo.Properties.SetPropertyValue("DesignTimeTabs", JsonConvert.ExportToString(panels));
				// Uncollapse the created panel
				return panelId;
			}
			catch (Exception e)
			{
				return "";
			}
		}

		private void RemovePanel(string toRemove)
		{
			try
			{
				JsonArray panels = GetPanelsArray();

				if (panels.Count > 0)
				{
					JsonObject selected = new JsonObject();
					foreach (JsonObject panel in panels)
					{
						if (toRemove.Equals(panel["id"]))
						{
							selected = panel;
							break;
						}
					}
					panels.Remove(selected);
					ControlInfo.Properties.SetPropertyValue("DesignTimeTabs", JsonConvert.ExportToString(panels));
				}
			}
			catch (Exception e)
			{
			}
		}

		private JsonArray GetPanelsArray()
		{
			object propertyValue = ControlInfo.Properties.GetPropertyValue("DesignTimeTabs");
			if (propertyValue == null || propertyValue.Equals(""))
			{
				JsonArray panels = new JsonArray();
				panels.Add(new JsonObject(new string[] { "id", "selected" }, new string[] { "tabPanel1", "false" }));
				return panels;
			}
			else
			{
				return JsonConvert.Import(propertyValue as string) as JsonArray;
			}
		}
	}
}
