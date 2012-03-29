using System;
using System.Collections.Generic;
using System.Text;
using Artech.Common.Properties;
using Artech.Genexus.Common.Resolvers;

namespace Artech.UC.gxui.PropertiesResolvers.Panel
{
	public class WidthResolver : ResolverBase, IVisibleResolver
	{
		public bool IsVisible(IPropertyBag properties)
		{
			if (base.CompareFromContext(properties, "UserMode", "1") != 0)          // Runtime
				return true;
			else                                                                    // DesignTime            
			{
				string autoWidth = properties.GetPropertyValue<string>("AutoWidth");
				//string Type = properties.GetPropertyValue<string>("Type");
				return autoWidth != "true";
			}
		}

		public string[] GetDependencies()
		{
			string[] dependencies = { "AutoWidth" };
			return dependencies;
		}
	}
}
