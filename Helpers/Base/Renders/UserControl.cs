using System;
using System.Collections.Generic;
using System.Text;
using Artech.Genexus.Common.Parts.WebForm;
using Artech.UC.gxui.Installation;
using Artech.Architecture.Common.Services;

namespace Artech.UC.gxui.Renders
{
	public class UserControl
	{
		protected UserControl()
		{
		}

		public UserControl(IUserControlInfo info)
		{
			m_controlInfo = info;

			if (!m_validated)
			{
				string message;
				if (!Validator.ValidateAll(out message))
				{
					CommonServices.Output.AddErrorLine(message);
				}
			}
		}

		public static bool m_validated = false;

		private IUserControlInfo m_controlInfo;
		public IUserControlInfo ControlInfo
		{
			get { return m_controlInfo; }
		}

		public virtual string HandleClick()
		{
			#region Hack for avoiding "." problem in ControlName
			// *******************************************************
			string ctrlName = (string)ControlInfo.Properties.GetPropertyValue("ControlName");
			if (!String.IsNullOrEmpty(ctrlName) && ctrlName.Contains("."))
			{
				ControlInfo.Properties.SetPropertyValue("ControlName", ctrlName.Replace(".", ""));
			}
			// *******************************************************
			#endregion

			return "";
		}

	}
}
