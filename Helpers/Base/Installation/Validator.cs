using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Artech.Common.Helpers.IO;
using System.IO;

namespace Artech.UC.gxui.Installation
{
	public class Validator
	{
		private static string USER_CONTROLS_SHARED_DIRECTORY = Path.Combine(PathHelper.StartupPath, @"UserControls\Shared");
		public static string GXUI_DIRECTORY = Path.Combine(PathHelper.StartupPath, @"UserControls\gxui");
		public static string EXTJS_DIRECTORY = Path.Combine(USER_CONTROLS_SHARED_DIRECTORY, "ext");

		public static ExtJsVersion GetExtJsVersion()
		{
			if (!Directory.Exists(EXTJS_DIRECTORY))
				return ExtJsVersion.NotFound;

			if (File.Exists(Path.Combine(EXTJS_DIRECTORY, @"adapter\ext\ext-base.js")))
				return ExtJsVersion.v2;

			if (File.Exists(Path.Combine(EXTJS_DIRECTORY, @"adapter\ext\ext-all.js")))
				return ExtJsVersion.v4;

			return ExtJsVersion.Unknown;
		}

		public static GxuiVersion GetGxuiVersion()
		{
			if (File.Exists(Path.Combine(GXUI_DIRECTORY, @"gxui\Artech.UC.gxui.PropertiesResolvers.dll")))
				return GxuiVersion.v2;

			if (File.Exists(Path.Combine(GXUI_DIRECTORY, @"gxui\gxui-all.js")))
				return GxuiVersion.v1_1;

			return GxuiVersion.Unknown;
		}

		public static bool ValidateExtJsInstallation(out string message)
		{
			GxuiVersion gxuiVersion = GetGxuiVersion();
			ExtJsVersion extVersion = GetExtJsVersion();

			message = "";

			if (extVersion == ExtJsVersion.NotFound)
			{
				message = String.Format(Resources.ExtJsNotFound, EXTJS_DIRECTORY, Resources.GxUv2InstallationGuideUrl);
				return false;
			}

			if (gxuiVersion == GxuiVersion.v1_1 && extVersion != ExtJsVersion.v2)
			{
				message = Resources.IncompatibleVersionMessageGxUIv1;
				return false;
			}

			if (gxuiVersion == GxuiVersion.v2 && extVersion != ExtJsVersion.v4)
			{
				message = Resources.IncompatibleVersionMessageGxUIv2;
				return false;
			}

			return true;
		}

		public static bool ValidateAll(out string message)
		{
			return ValidateExtJsInstallation(out message);
		}

	}

	public enum ExtJsVersion { NotFound=-1, Unknown=0, v2=2, v3, v4 }

	public enum GxuiVersion { Unknown=0, v1_1, v2 }
}
