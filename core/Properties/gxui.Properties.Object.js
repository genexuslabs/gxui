gxui.Properties.Object = function(objId, options){
	this.objId = objId;
	
	Ext.apply(this, options);
    
	this.root = this.root || this.repository.root ;
	this.fields = this.fields || this.repository.fields;
	this.url = this. url || this.repository.url;
    
    this.initialize();
};

gxui.Properties.Object.prototype = {
	initialize: function() {
		this.store = new Ext.data.JsonStore({
			baseParams: {
				id: this.objId
			},
			root: this.root,
			fields: this.fields,
			url: this.url
		});
	},

	getProperties: function(options) {
		this.store.load({
			params: options.params,
			callback: function(r, o, success) {
				if (success) {
					this.jsonData = this.store.reader.jsonData;
					this.Id = this.jsonData.Id;
					this.ObjectClass = this.jsonData.ObjectClass;
					this.Name = this.jsonData.Name;
				}
				options.callback.call(options.scope, this, this.store, r, success);
			},
			scope: this
		});
	}
};