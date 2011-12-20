Ext.namespace('Artech.UC');

Artech.UC.TagCloud = function(container, tags, options){
	this.initialize(container, tags, options);
	return this;
};

Ext.extend(Artech.UC.TagCloud, Ext.util.Observable, {
	setOptions: function(options) {
		this.options = {
			animate : true,
			showWeight : false,
			sortBy : "name",
			sort : "asc",
			viewAs : "cloud",
			distribution : "log",
			baseTagCls : "tag",
			tagCls : ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "tag8", "tag9", "tag10"],
			ddGroup : "GridDD",
			enableDragDrop : true
		}
		
		// Merge tag classes from options parameter and options initial values
		Ext.each(this.options.tagCls, 
				 function(el, idx, all){
					if (options && options.tagCls && (!options.tagCls[idx] || options.tagCls[idx] == ""))
						options.tagCls[idx]=el;
				 }, 
				 this);
			
		for (property in (options || {})) {
			this.options[property] = options[property];
		}
	},
	
	initialize : function(container, tags, options){
		this.container = (container && container != '') ? container : 'tag-cloud';
		this.setOptions(options);
		
		if (!Array.prototype.max){
			Array.prototype.max = function(){
				return Math.max.apply({},this)
			}
		}
		
		if (!Array.prototype.min){
			Array.prototype.min = function(){
				return Math.min.apply({},this)
			}
		}
		
		if (!Array.prototype.map){
			Array.prototype.map = function(iterator) {
				var results = [];
				Ext.each(this,
						 function(value, index, allValues) {
							results.push(iterator(value, index));
						});
			    return results;
			}
		}
		
		this.tags = tags;
		this._maxWeight = this.tags.map(function(el){return el.Weight}).max();
		this._minWeight = this.tags.map(function(el){return el.Weight}).min();
		
		this._domHelper = Ext.DomHelper;
		this._cloud = Ext.get(this._domHelper.append(this.container, {tag: 'ul', cls: 'cloud'}));
		this._cloud.hide();
		this._tpl = this._domHelper.createTemplate('<li>\n<a id="{id}" href="{url}" class="{classes}">{text}</a><span class="tag-weight" style="{weightDisplay}">{weight}</span>\n</li>\n');
		this._tpl.compile();
		
		 this.addEvents({
			 "dragdrop" : true
		 });
	},
	
	getTagClass : function(tag){
		var tagId;
		if (this.options.distribution == "lineal"){
		    var step = (this._maxWeight - this._minWeight + 1) / 10;
		    tagId = (((tag.Weight - this._minWeight) - ((tag.Weight - this._minWeight) % step)) / step) + 1;
		}
		else{//lineal
			var logWeight = Math.round(Math.log(tag.Weight) / Math.log(1.8));
			tagId = ((logWeight > 10) ? 10 : ((logWeight == 0) ? 1 : logWeight));
		}
		return this.options.baseTagCls + " " + this.options.tagCls[tagId - 1];
	},
	
	sortWeight : function(a, b){
		return (a.Weight - b.Weight) * ((this.options.sort == "asc") ? 1 : -1);
	},
		
	sortAlpha : function(a, b){
		var sort = (this.options.sort == "asc") ? 1 : -1;
		if (a.Name > b.Name)
			return 1 * sort;
		if (a.Name < b.Name)
			return -1 * sort;
		return 0;
	},
		
	show : function(options){
		for (property in (options || {})) {
			this.options[property] = options[property];
		}

		var tagsArray = [{la: true, lo: false}];
		tagsArray.sort()
		
		var opts = this.options;
		this.tags.sort((this.options.sortBy == "weight") ? this.sortWeight.createDelegate(this) : this.sortAlpha.createDelegate(this));
		
		Ext.each(this.tags, 
				function(tag, idx, allTags){
					var tplOpts = { id 	: "Tag" + idx, 
			    					url : tag.Url, 
									classes : this.getTagClass(tag),
			    					text : tag.Name,
									weight : "(" + tag.Weight + ")",
									weightDisplay : (this.options.showWeight) ? "" : "display:none;"  
					}
					if (idx == 0)
						this._tpl.overwrite(this._cloud, tplOpts);
					else
						this._tpl.append(this._cloud, tplOpts);
				}, 
				this);
		
		if (this.options.enableDragDrop){
			var scope = this;
			Ext.each(Ext.query("ul#" + this._cloud.id + " li a"),
					function(item, index, allItems){
						var dt = new Ext.dd.DropTarget(item, {ddGroup: this.options.ddGroup});
						dt._tag = item;
						var scope = this;
						dt.notifyOver = function(source, e, data){
							 if (data.grid){
							 return 'x-dd-drop-ok';
							 }
							 return 'x-dd-drop-nodrop';
						};
						dt.notifyDrop = function(source, e, data){
							if (data.grid){
								Ext.get(dt._tag).frame('#015F78');
								scope.fireEvent("dragdrop", this, e);
								return true;
							}
							return false;
						};
						dt.notifyEnter = function(source, e, data){
							if (data.grid){
								return 'x-dd-drop-ok';
							}
							return 'x-dd-drop-nodrop';
						};
					},
					this);
		}		
		this._cloud.show();
		return this._cloud;
	},
	
	toggleWeight: function(){
		this.options.showWeight = !this.options.showWeight;
		Ext.select("ul#" + this._cloud.id + " li span.tag-weight").enableDisplayMode().toggle(this.options.animate);
	}
});

