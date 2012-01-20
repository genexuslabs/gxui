using System;
using System.Collections.Generic;
using System.Text;
using Artech.Common.Properties;
using Artech.Genexus.Common.Resolvers;

namespace Artech.UC.gxui.PropertiesResolvers.Panel
{
	public class CollapseDirectionDefaultResolver : ResolverBase, IDefaultResolver
	{
		public bool GetDefaultValue(IPropertyBag properties, out object value)
		{
			string headerPosition = properties.GetPropertyValue<string>("HeaderPosition");
			if (String.IsNullOrEmpty(headerPosition))
			{
				value = "top";
				return false;
			}
			value = headerPosition;
			return true;
		}

		public string[] GetDependencies()
		{
			return null;
		}

	}
}
