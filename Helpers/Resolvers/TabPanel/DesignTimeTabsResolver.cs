using System;
using System.Collections.Generic;
using System.Text;
using Artech.Common.Properties;
using Artech.Genexus.Common.Resolvers;

namespace Artech.UC.gxui.PropertiesResolvers.TabPanel
{
	public class DesignTimeTabsResolver : ResolverBase, IVisibleResolver
	{
		public bool IsVisible(IPropertyBag properties)
		{
			return true;
		}

		public string[] GetDependencies()
		{
			string[] dependencies = { "" };
			return dependencies;
		}
	}
}
