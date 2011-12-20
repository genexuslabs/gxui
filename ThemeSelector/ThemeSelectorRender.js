gxui.ThemeSelector = function()
{
	this.Width;
	this.Height;
	this.Themes;
	this.Css;
	
	//debugger;
	
	// Databinding for property Data
	this.SetThemes = function(data)
	{
		///UserCodeRegionStart:[SetData] (do not remove this comment.)
		this.Themes = data;
		this.createStyleSheets();	
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property Data
	this.GetThemes = function(data)
	{
		///UserCodeRegionStart:[GetData] (do not remove this comment.)
		return this.Themes;
		///UserCodeRegionEnd: (do not remove this comment.)
	}		

	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)
			
		if(!this._Initialized)
			this.Initialize();				
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)
	
	this.Initialized = false;
	
	this.Initialize = function(){
	
		var cookie = this.readCookie("xtheme");
		var title = (cookie!="null")? cookie : this.getPreferredStyleSheet();
		window.gxuiThemeSelector.setActiveStyleSheet(title);	
		
		var div = this.getContainerControl();
		var el = Ext.get(div);
		el.addClass("XThemeSelectorBar");
		div.setAttribute("style", this.Css);//el.applyStyles(this.Css);
		//var html = '<div id="XThemeSelectorBarInner">'
		html = '<span id="XThemeSelectorCaption">Theme:</span>'
		html += '<select id="XThemeSelectorSelect" onchange="window.XThemeSelector.setActiveSelectedStyleSheet()">'
		var title = this.getActiveStyleSheet();
		for(i=0; (t = this.Themes[i]); i++) {		
			html += '<option value="' + t.Title + '"';
			if(title!=null || (title==null && gxui.CBoolean(t.Preferred)))
				html += ' selected="selected"';				
			html += '>' + t.Title + '</option>'
		}
		html += '</select>'		
		//html += '</div>'				
		div.innerHTML = html;
		
		this._Initialized = true;
	}
	
		
	this.createStyleSheet = function(item, index, allItems){
		var ss = document.createElement("link");
		if(item.Preferred=="True")
			ss.setAttribute("rel", "stylesheet");
		else
			ss.setAttribute("rel", "alternate stylesheet");			
		ss.setAttribute("type", "text/css");
		ss.setAttribute("title", item.Title);
		ss.setAttribute("href", item.Url);
		document.getElementsByTagName("head")[0].appendChild(ss);
	}
	
	this.createStyleSheets = function(){
		if(this.Themes){
			Ext.each(this.Themes, this.createStyleSheet, this);
		}	
	}	
	
	window.XThemeSelector.setActiveStyleSheet = function(title){
		var i, a, main;
		for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
			if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
				a.disabled = true;
				if(a.getAttribute("title") == title) 
					a.disabled = false;
			
			}
		}
		window.XThemeSelector.createCookie("xtheme", title, 365);
	}
	
	window.XThemeSelector.setActiveSelectedStyleSheet = function(){
		var option = document.getElementById("XThemeSelectorSelect");
		var title = option.value;
		window.XThemeSelector.setActiveStyleSheet(title);	
	}

	this.getActiveStyleSheet = function() {
	  var i, a;
	  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
	    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
	  }
	  return null;
	}

	this.getPreferredStyleSheet = function() {
	  var i, a;
	  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
	    if(a.getAttribute("rel").indexOf("style") != -1
	       && a.getAttribute("rel").indexOf("alt") == -1
	       && a.getAttribute("title")
	       ) return a.getAttribute("title");
	  }
	  return null;
	}
	
	/*
	this.removeActiveStyleSheet = function(title){
		  var i, a;
		  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
		    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled)
				a.parentNode.removeChild(a);
		  }
	}
   
	this.swapStyleSheet = function(title, url){
       this.removeActiveStyleSheet(title);	   
       var ss = doc.createElement("link");
       ss.setAttribute("rel", "stylesheet");
       ss.setAttribute("type", "text/css");
       ss.setAttribute("title", title);
       ss.setAttribute("href", url);
       doc.getElementsByTagName("head")[0].appendChild(ss);
	}*/

	window.XThemeSelector.createCookie = function(name,value,days) {
	  if (days) {
	    var date = new Date();
	    date.setTime(date.getTime()+(days*24*60*60*1000));
	    var expires = "; expires="+date.toGMTString();
	  }
	  else expires = "";
	  document.cookie = name+"="+value+expires+"; path=/";
	}

	this.readCookie = function(name) {
	  var nameEQ = name + "=";
	  var ca = document.cookie.split(';');
	  for(var i=0;i < ca.length;i++) {
	    var c = ca[i];
	    while (c.charAt(0)==' ') c = c.substring(1,c.length);
	    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	  }
	  return null;
	}
	
	/*
	this.onload = function(e){
	  var cookie = readCookie("xtheme");
	  var title = cookie ? cookie : this.getPreferredStyleSheet();
	  this.setActiveStyleSheet(title);
	}

	this.onunload = function(e){
	  var title = this.getActiveStyleSheet();
	  this.createCookie("xtheme", title, 365);
	}
		
	window.onload = this.onload;
	window.onunload = this.onunload;*/
	
	///UserCodeRegionEnd: (do not remove this comment.):
}

Ext.extend(gxui.ThemeSelector, gxui.UserControl);