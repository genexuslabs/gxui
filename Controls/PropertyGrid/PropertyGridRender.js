gxui.PropertyGrid = function()
{
	this.Width;
	this.Height;
	this.Data;
	this.NameText;
	this.EnableHdMenu;
	this.AutoSize;
	
	// Databinding for property Data
	this.SetData = function(data)
	{
		///UserCodeRegionStart:[SetData] (do not remove this comment.)
		this.Data = data;
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property Data
	this.GetData = function(data)
	{
		///UserCodeRegionStart:[GetData] (do not remove this comment.)
		return this.Data;
		///UserCodeRegionEnd: (do not remove this comment.)
	}	

	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)
		
		Ext.onReady( function(){
			
			if(!this._Initialized)
				this.Initialize();

			if(this.Data){
				this._propsGrid.setSource(this.Data);                
				this._propsGrid.render();	
				if(gxui.CBoolean(this.AutoSize))
					this._propsGrid.autoSize();
			}						
		
		}, this);		
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)
	
	this.Initialized = false;
	this._propsGrid;
	
	this.Initialize = function(){
	
			this._propsGrid = new Ext.grid.PropertyGrid(this.getContainerControl(), {
			nameText: this.NameText,
			enableHdMenu: this.EnableHdMenu,
			viewConfig : {
				forceFit:true,
				scrollOffset:2 // the grid will never have scrollbars
			}
		});
	}
	
	///UserCodeRegionEnd: (do not remove this comment.):
}

Ext.extend(gxui.PropertyGrid, gxui.UserControl);