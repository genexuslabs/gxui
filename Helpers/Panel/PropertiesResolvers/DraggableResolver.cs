using System;
using System.Collections.Generic;
using System.Text;
using Artech.Common.Properties;
using Artech.Genexus.Common.Resolvers;

namespace Artech.UC.gxui.Panel.PropertiesResolvers
{
	public class DraggableResolver : ResolverBase, IVisibleResolver
	{
		public bool IsVisible(IPropertyBag properties)
		{
			if (base.CompareFromContext(properties, "UserMode", "1") != 0)          // Runtime
				return true;
			else                                                                    // DesignTime            
			{
				bool viewport = properties.GetPropertyValue<bool>("Viewport");
				//string Type = properties.GetPropertyValue<string>("Type");
				return !viewport;
			}
		}

		public string[] GetDependencies()
		{
			string[] dependencies = { "Viewport" };
			return dependencies;
		}
	}
}
