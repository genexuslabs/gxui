using System;
using System.Collections.Generic;
using System.Text;
using Artech.Common.Properties;
using Artech.Genexus.Common.Resolvers;

namespace Artech.UC.gxui.Panel.PropertiesResolvers
{
	public class CollapseDirectionResolver : ResolverBase, IVisibleResolver
	{
		public bool IsVisible(IPropertyBag properties)
		{
			if (base.CompareFromContext(properties, "UserMode", "1") != 0)          // Runtime
				return true;
			else                                                                    // DesignTime            
			{
				string collapsible = properties.GetPropertyValue<string>("Collapsible");
				return collapsible == "true";
			}
		}

		public string[] GetDependencies()
		{
			string[] dependencies = { "Collapsible" };
			return dependencies;
		}
	}
}
