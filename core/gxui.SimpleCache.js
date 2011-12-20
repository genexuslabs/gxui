gxui.SimpleCache = function(options){
    Ext.apply(this, options);
    
    /**
     * @cfg {Number} expireTime The time in miliseconds before an entry in the cache is considered expired. 
     * If it's set to 0, there's always a miss-cache. If it's set to -1, cache entries never expire. Defaults to -1.
     */
	this.expireTime = -1;
	this.elements = {};
};

gxui.SimpleCache.prototype = {
    //private
    /**
     * Checks if an element has expired, taking into account the expireTime property.
     * @param {Object} el Element to check
     * @return {boolean} True if it has expired, false if it hasn't.
     */
	elementHasExpired: function(el){
		return (this.expireTime < 0) ? false : el.timeStamp + this.expireTime < (new Date()).getTime();
	},
	
    /**
     * Adds an object to the cache, with the specified key. If an entry already exists, it is replaced with the new object.
     * @param {String} key Key associated to the object
     * @param {Object} obj Object to add to the cache
     */
	add: function(key, obj){
		this.elements[key] = {
			obj: obj,
			timeStamp: (new Date()).getTime()
		};
	},

    /**
     * Gets an object from the cache, with the specified key.
     * @param {String} key Key associated to the object
     * @return {Object} The object being searched for. If the object is not stored in the cache, it returns null.
     */
	get: function(key){
		var el = this.elements[key];
		if (el && !this.elementHasExpired(el)){
			return el.obj;
		}
		return null;
	},
	
    /**
     * Checks if an object is stored in the cache, with the specified key.
     * @param {String} key Key associated to the object
     * @return {boolean} True if it is stored, false if it isn't.
     */
	exists: function(key){
		return this.elements[key] ? true : false;
	},
	
    /**
     * Checks if an object is stored in the cache, with the specified key.
     * @param {String} key Key associated to the object
     * @return {boolean} True if it is stored, false if it isn't.
     */
	existsObject: function(obj){
		for (key in this.elements){
			var el = this.get(key)
			if (el === obj){
				return true;
			}
		}
		return false;
	},
	
    /**
     * Removes an object from the cache, with the specified key.
     * @param {String} key Key associated to the object
     */
	remove: function(key){
		this.elements[key] = undefined;
	},
	
    /**
     * Cleans the cache.
     */
	restart: function(){
		this.elements = {};
	}
};
