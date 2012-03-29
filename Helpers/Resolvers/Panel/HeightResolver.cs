using System;
using System.Collections.Generic;
using System.Text;
using Artech.Common.Properties;
using Artech.Genexus.Common.Resolvers;

namespace Artech.UC.gxui.PropertiesResolvers.Panel
{
	public class HeightResolver : ResolverBase, IVisibleResolver
	{
		public bool IsVisible(IPropertyBag properties)
		{
			if (base.CompareFromContext(properties, "UserMode", "1") != 0)          // Runtime
				return true;
			else                                                                    // DesignTime            
			{
				string autoHeight = properties.GetPropertyValue<string>("AutoHeight");
				return autoHeight != "true";
			}
		}

		public string[] GetDependencies()
		{
			string[] dependencies = { "AutoHeight" };
			return dependencies;
		}
	}
}
