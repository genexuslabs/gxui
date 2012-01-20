using System;
using System.Collections.Generic;
using System.Text;
using Artech.Common.Properties;

namespace Artech.UC.gxui.PropertiesResolvers.Treeview
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
				case "CheckedNodes":
					return new CheckedNodesResolver();
				case "UncheckedNodes":
					return new UncheckedNodesResolver();
				case "RootText":
					return new RootTextResolver();
				case "RootIcon":
					return new RootIconResolver();
				case "RootCls":
					return new RootClsResolver();
				case "RootIconCls":
					return new RootIconClsResolver();
				case "DragDropGroup":
					return new DragDropGroupResolver();
				case "AppendOnly":
					return new AppendOnlyResolver();
				case "DropData":
					return new DropDataResolver();
				default:
					return null;
			}
		}

		#endregion
	}
}
