gxui.TagCloud = function(){
	this.Tag1Class;
	this.Tag2Class;
	this.Tag3Class;
	this.Tag4Class;
	this.Tag5Class;
	this.Tag6Class;
	this.Tag7Class;
	this.Tag8Class;
	this.Tag9Class;
	this.Tag10Class;
	this.BaseTagClass;
	this.Animate;
	this.Distribution;
	this.SortBy;
	this.Order;
	this.ShowWeight;
	this.Width;
	this.Height;
	this.Tags;
	this.TagDragDropId;

	// Databinding for property Tags
	this.SetTags = function(data)
	{
		///UserCodeRegionStart:[SetTags] (do not remove this comment.)
		this.Tags = data;
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property Tags
	this.GetTags = function(data)
	{
		///UserCodeRegionStart:[GetTags] (do not remove this comment.)
		data = this.Tags;
		return this.Tags;
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)
		if (!this._Initialized){
			Ext.get(this.ContainerName).setWidth(this.Width).setHeight(this.Height).setStyle('overflow-x', 'hidden').setStyle('overflow-y', 'auto').setStyle('margin-left', '3px');
			
			this._tc = new Artech.UC.TagCloud(this.ContainerName, this.Tags);
			
			this._tc.on('dragdrop', 
						function(tag, e){
							if(this.DragDrop){
								this.TagDragDropId = tag.id;
								this.DragDrop(tag);
							}
						}, 
						this);
			
			this._Initialized = true;
		}
		
		this._tc.show({
						animate : (this.Animate == "true"),
						showWeight : (this.ShowWeight == "true"),
						sortBy : this.SortBy,
						sort : this.Order,
						distribution : this.Distribution,
						baseTagCls : this.BaseTagClass,
						tagCls : [this.Tag1Class, this.Tag2Class, this.Tag3Class, this.Tag4Class, this.Tag5Class, this.Tag6Class, this.Tag7Class, this.Tag8Class, this.Tag9Class, this.Tag10Class]
		});
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)
	
	///UserCodeRegionEnd: (do not remove this comment.):
}
