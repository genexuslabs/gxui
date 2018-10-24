using System;
using System.Collections.Generic;
using System.Text;
using System.Xml;
using System.Xml.XPath;
using Jayrock.Json;
using Artech.Genexus.Common.Parts.WebForm;
using System.IO;

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
				return SetSelectedTab(((JObject)GetPanelsArray()[0])["id"].ToString());
			else
				return "";
		}

		public XPathNodeIterator GetPanels()
		{
			try
			{
				JArray panels = GetPanelsArray();

				StringBuilder builder = new StringBuilder();
				builder.AppendFormat("<Panels>");
				foreach (JObject panel in panels)
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
				JArray panels = GetPanelsArray();
				foreach (JObject panel in panels)
				{
					panel["selected"] = "false";
					if (tabId.Equals(panel["id"]))
						panel["selected"] = "true";
				}
				ControlInfo.Properties.SetPropertyValue("DesignTimeTabs", panels.ToString());
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
				JArray panels = GetPanelsArray();

				int maxPanelId = 0;
				foreach (JObject panel in panels)
				{
					int currentPanelId = int.Parse(panel["id"].ToString().Substring(8));
					if (currentPanelId > maxPanelId)
						maxPanelId = currentPanelId;
				}

				string panelId = "tabPanel" + (maxPanelId + 1).ToString();
				JObject obj = new JObject();
				obj.Put("id", panelId);
				obj.Put("selected", "false");
				panels.Add(obj);
				ControlInfo.Properties.SetPropertyValue("DesignTimeTabs", panels.ToString());
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
				JArray panels = GetPanelsArray();

				if (panels.Count > 0)
				{
					JObject selected = new JObject();
					foreach (JObject panel in panels)
					{
						if (toRemove.Equals(panel["id"]))
						{
							selected = panel;
							break;
						}
					}
					panels.Remove(selected);
					ControlInfo.Properties.SetPropertyValue("DesignTimeTabs", panels.ToString());
				}
			}
			catch (Exception e)
			{
			}
		}

		private JArray GetPanelsArray()
		{
			object propertyValue = ControlInfo.Properties.GetPropertyValue("DesignTimeTabs");
			if (propertyValue == null || propertyValue.Equals(""))
			{
				JArray panels = new JArray();
				JObject obj = new JObject();
				obj.Put("id", "tabPanel1");
				obj.Put("selected", "false");
				panels.Add(obj);
				return panels;
			}
			else
			{
				JsonReader reader = new JsonTextReader(new StringReader(propertyValue as string));
                JsonToken token = reader.ReadToken();
                return (JArray)reader.DeserializeNext();
			}
		}
	}
}
