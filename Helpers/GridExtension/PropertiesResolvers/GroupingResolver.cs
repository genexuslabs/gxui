using System;
using System.Collections.Generic;
using System.Text;
using Artech.Common.Properties;
using Artech.Genexus.Common.Resolvers;

namespace Artech.UC.gxui.GridExtension.PropertiesResolvers
{
	public class GroupingResolver : ResolverBase, IVisibleResolver
	{
		public bool IsVisible(IPropertyBag properties)
		{
			if (base.CompareFromContext(properties, "UserMode", "1") != 0)          // Runtime
				return true;
			else                                                                    // DesignTime            
			{
				bool columnLocking = properties.GetPropertyValue<bool>("EnableColumnLocking");
				return !columnLocking;
			}
		}

		public string[] GetDependencies()
		{
			string[] dependencies = { "EnableColumnLocking" };
			return dependencies;
		}
	}
}
