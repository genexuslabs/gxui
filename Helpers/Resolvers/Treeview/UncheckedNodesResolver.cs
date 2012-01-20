using System;
using System.Collections.Generic;
using System.Text;
using Artech.Common.Properties;
using Artech.Genexus.Common.Resolvers;

namespace Artech.UC.gxui.PropertiesResolvers.Treeview
{
	public class UncheckedNodesResolver : ResolverBase, IVisibleResolver
	{
		public bool IsVisible(IPropertyBag properties)
		{
			if (base.CompareFromContext(properties, "UserMode", "1") != 0)          // Runtime
				return true;
			else                                                                    // DesignTime            
				return properties.GetPropertyValue<bool>("EnableCheckbox");
		}

		public string[] GetDependencies()
		{
			string[] dependencies = { "EnableCheckbox" };
			return dependencies;
		}
	}
}
