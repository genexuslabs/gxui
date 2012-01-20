using System;
using System.Collections.Generic;
using System.Text;
using Artech.Common.Properties;
using Artech.Genexus.Common.Resolvers;

namespace Artech.UC.gxui.PropertiesResolvers.Panel
{
	public class ToolbarDataResolver : ResolverBase, IVisibleResolver
	{
		public bool IsVisible(IPropertyBag properties)
		{
			if (base.CompareFromContext(properties, "UserMode", "1") != 0)          // Runtime
				return true;
			else                                                                    // DesignTime            
			{
				string useToolbar = properties.GetPropertyValue<string>("UseToolbar");
				return useToolbar == "true";
			}
		}

		public string[] GetDependencies()
		{
			string[] dependencies = { "UseToolbar" };
			return dependencies;
		}
	}
}
