gxui.Properties.ObjectsRepository = function(){
	var objects;
	
	return {
		/**
		 * @cfg {String} url The URL to be used for requests to the server. Required.
		 */
		/**
		 * @cfg {String} root Name of the property which contains the Array of property descriptors. Defaults to "Properties"
		 */
		root: "Properties",
		/**
		 * @cfg {String} fields An Array of field names that are present in the Object Descriptor. Defaults to ["Name", "Value", "IsDefault", "IsReadOnly"].
		 */
		fields: ["Name", "Value", "IsDefault", "IsReadonly"],
		
		/**
		 * Initializes the repository. Must be called before starting to use the repository.
		 */
		init: function(options){
			Ext.apply(this, options);
			
			objects = new gxui.SimpleCache();
		},
		
		/**
		 * Gets the properties of an object, given its Id. 
		 * The properties are requested to the server (if they aren't already cached), so the response is returned asynchronously, through a callback function.
		 * The request to the server is a HTTP POST to the url specified in the initialization parameters, with id as a variable.
	     * @param {String} objId Id of the object.
	     * @param {Function} callback The function to be called upon receipt of the HTTP response. The callback is called regadless of success o failure and is passed the following arguments:
	     *  obj: gxui.Properties.Object
	     *	store: Ext.data.JsonStore
	     *	r: Ext.data.Record[]
	     *	success: Boolean success indicator
	     * @param {Object} scope The scope in which to execute the callback.
		 */
		getProperties: function(objId, category, callback, scope){
			var obj = objects.get(objId);
			if (!obj){
				obj = new gxui.Properties.Object(objId, {
					repository: this
				});
				
				objects.add(objId, obj);
			}
							
			obj.getProperties({
				callback: callback,
				scope: scope,
				params: category ? {category: category} : undefined
			});
		}
	};
}();