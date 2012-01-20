using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Artech.Common.Properties;
using Artech.Genexus.Common.Resolvers;


namespace Artech.UC.gxui.PropertiesResolvers.Treeview
{
	public class DropDataResolver : ResolverBase, IVisibleResolver
	{
		public bool IsVisible(IPropertyBag properties)
		{
			if (base.CompareFromContext(properties, "UserMode", "1") != 0)          // Runtime
				return true;
			else                                                                    // DesignTime            
			{
				string resizable = properties.GetPropertyValue<string>("EnableDragDrop");
				return resizable == "true";
			}
		}

		public string[] GetDependencies()
		{
			string[] dependencies = { "EnableDragDrop" };
			return dependencies;
		}
	}
}
