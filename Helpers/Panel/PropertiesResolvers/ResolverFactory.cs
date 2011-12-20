using System;
using System.Collections.Generic;
using System.Text;
using Artech.Common.Properties;

namespace Artech.UC.gxui.Panel.PropertiesResolvers
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
				case "Width":
					return new WidthResolver();
				case "Height":
					return new HeightResolver();
				case "Draggable":
					return new DraggableResolver();
				case "ShowAsWindow":
					return new ShowAsWindowResolver();
				//case "AutoHeight":
				//    return new AutoHeightResolver();
				//case "AutoWidth":
				//    return new AutoWidthResolver();
				//case "Resizable":
				//    return new ResizableResolver();
				case "MinWidth":
					return new MinWidthResolver();
				case "MaxWidth":
					return new MaxWidthResolver();
				case "MinHeight":
					return new MinHeightResolver();
				case "MaxHeight":
					return new MaxHeightResolver();
				case "Pinned":
					return new PinnedResolver();
				case "Handles":
					return new HandlesResolver();
				case "ToolbarData":
					return new ToolbarDataResolver();
				case "Collapsed":
					return new CollapsedResolver();
				case "AnimateCollapse":
					return new AnimateCollapseResolver();
				case "Modal":
					return new ModalResolver();
				default:
					return null;
			}
		}

		#endregion
	}
}
