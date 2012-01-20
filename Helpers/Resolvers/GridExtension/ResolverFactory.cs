using System;
using System.Collections.Generic;
using System.Text;
using Artech.Common.Properties;

namespace Artech.UC.gxui.PropertiesResolvers.GridExtension
{
	public class ResolverFactory : IResolverFactory
	{
		#region IResolverFactory Members

		public IApplyResolver GetApplyResolver(string propName)
		{
			return null;
		}

		public IContextResolver GetContextResolver()
		{
			return null;
		}

		public IApplyResolver GetCustomApplyResolver(string propName)
		{
			return null;
		}

		public IDefaultResolver GetCustomDefaultResolver(string propName)
		{
			return null;
		}

		public IReadOnlyResolver GetCustomReadOnlyResolver(string propName)
		{
			return null;
		}

		public IValidResolver GetCustomValidResolver(string propName)
		{
			return null;
		}

		public IValuesResolver GetCustomValuesResolver(string propName)
		{
			return null;
		}

		public IVisibleResolver GetCustomVisibleResolver(string propName)
		{
			return null;
		}

		public IDefaultResolver GetDefaultResolver(string propName)
		{
			return null;
		}

		public IAfterSetValueHandler GetOnAfterSetValueHandler(string propName)
		{
			return null;
		}

		public IReadOnlyResolver GetReadOnlyResolver(string propName)
		{
			return null;
		}

		public IResourceManagerResolver GetResourceManagerResolver(string propName)
		{
			return null;
		}

		public IValidResolver GetValidResolver(string propName)
		{
			return null;
		}

		public IValuesResolver GetValuesResolver(string propName)
		{
			return null;
		}

		public IVisibleResolver GetVisibleResolver(string propName)
		{
			switch (propName)
			{
				case "GridHeight":
					return new GridHeightResolver();
				case "Grouping":
					return new GroupingResolver();
				case "GroupField":
					return new GroupFieldResolver();
				case "HideGroupField":
					return new HideGroupFieldResolver();
				case "GroupTemplate":
					return new GroupTemplateResolver();
				case "DragDropGroup":
					return new DragDropGroupResolver();
				case "DragDropText":
					return new DragDropTextResolver();
				default:
					return null;
			}
		}

		#endregion
	}
}
