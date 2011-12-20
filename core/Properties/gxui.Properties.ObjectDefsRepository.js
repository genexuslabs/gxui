gxui.Properties.ObjectDefsRepository = function(){
	var definitions;
	var store;
	
	return {
		/**
		 * @cfg {String} url The URL to be used for requests to the server. Required.
		 */
		/**
		 * @cfg {String} root Name of the property which contains the Array of property definitions. Defaults to "Properties"
		 */
		root: "Properties",
		/**
		 * @cfg {String} fields An Array of field names that are present in the Object Definition. Defaults to ["Name", "DisplayName", "Category", "Type", "Editor"].
		 */
		fields: ["Name", "DisplayName", "Category", "Type", "Editor"],
		/**
		 * Initializes the repository. Must be called before starting to use the repository.
		 */
		init: function(options){
			Ext.apply(this, options);
			
			definitions = new gxui.SimpleCache();
			
			store = new Ext.data.JsonStore({
				root: this.root,
				fields: this.fields,
				url: this.url
			});
		},
		
		/**
		 * Gets the definition of an object, given its ObjClass. 
		 * The definition is requested to the server (if it is not already cached), so the response is returned asynchronously, through a callback function.
		 * The request to the server is a HTTP POST to the url specified in the initialization parameters, with objClass as a variable.
	     * @param {String} objClass ObjClass of the object.
	     * @param {Function} callback The function to be called upon receipt of the HTTP response. The callback is called regadless of success o failure and is passed the following arguments:
	     *	def: Array with the definitions returned by the server
	     *	success: Boolean success indicator
	     * @param {Object} scope The scope in which to execute the callback.
		 */
		getDefinition: function(objClass, callback, scope){
			var def = definitions.get(objClass);
			if (def){
				callback.defer(1, scope, [def, true]);
			}
			else{
				store.load({
					params: {
						objClass: objClass
					},
					callback: function(r, options, success){
						if (success){
							def = store.reader.jsonData[this.root];
							definitions.add(objClass, def);
						}
						callback.call(scope, def, success);
					}
				});
			}
		}
	};
}();