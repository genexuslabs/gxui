gxui.Message = Ext.extend(gxui.UserControl, function() {

	// Private variables
	var msgCt;

	return {
		initialize: function() {
			gxui.Message.superclass.initialize.call(this);

			this.Width;
			this.Height;
			this.Duration;
			this.Message;
			this.Title;
			this.Icon;
			this.Cls;
			this.Show;
		},

		onRender: function() {
			if (gxui.CBoolean(this.Show)) {
				this.ShowMessage(this.Type, this.Title, this.Message);
			}
		},

		onRefresh: function() {
			if (gxui.CBoolean(this.Show)) {
				this.ShowMessage(this.Type, this.Title, this.Message);
			}
		},

		ShowMessage: function(title, message, type) {
			if (!type) {
				type = this.Type;
			}

			if (type == "alert") {
				Ext.MessageBox.show({
					title: title,
					msg: message,
					buttons: Ext.MessageBox.OK,
					/*animEl: '',*/
					/*fn: showResult,*/
					icon: this.Icon == "info" ? Ext.MessageBox.INFO : (this.Icon == "question" ? Ext.MessageBox.QUESTION : (this.Icon == "warning" ? Ext.MessageBox.WARNING : Ext.MessageBox.ERROR))
				});
			}
			else {
				var titleMsgs = (title || "").split("|");
				Ext.each((message || "").split("|"), function(msg, i) {
					// Create the message box
					if (!msgCt) {
						msgCt = Ext.DomHelper.insertFirst(document.body, { id: 'msg-div' }, true);
						if (this.Cls != "")
							msgCt.addClass(this.Cls);
					}
					msgCt.alignTo(document, this.Position + '-' + this.Position);
					var m = Ext.DomHelper.append(msgCt, { html: this.createBox(titleMsgs[i], msg) }, true);

					var timeoutId;
					var hideMessage = function() {
						var f;
						if (this.Position == 'c'){
							f = function(){
								m.fadeOut({
								opacity: 0, //can be any value between 0 and 1 (e.g. .5)
								easing: 'easeOut',
								remove: true});
							};
						}else
						{
							f = function(){
								m.ghost( this.Position, { remove: true });								
							}.createDelegate(this);
						}
						timeoutId = setTimeout(f, this.Duration * 1000);
					};

					// Slide the message box into view
					m.slideIn(this.Position, {
						callback: hideMessage,
						scope: this
					});

					// Do not hide the message box if the mouse is over it
					m.on('mouseover', function(e) {
						if (timeoutId) {
							clearTimeout(timeoutId);
							timeoutId = null;
						}
					}, this);

					// If the mouse is outside the message box, schedule its hiding, according to duration
					m.on('mouseout', function(e) {
						var box = m.getBox();
						var x = e.getPageX();
						var y = e.getPageY();
						if (x && y) {
							if (x > box.x && x < box.x + box.width && y > box.y && y < box.y + box.height) {
								return
							}
						}
						hideMessage.createDelegate(this)();
					}, this)
				}, this);
			}
		},

		createBox: function(t, s) {
			return ['<div class="msg">',
	                '<div class="x-box-tl"><div class="x-box-tr"><div class="x-box-tc"></div></div></div>',
	                '<div class="x-box-ml"><div class="x-box-mr"><div class="x-box-mc"><h3>', t, '</h3>', s, '</div></div></div>',
	                '<div class="x-box-bl"><div class="x-box-br"><div class="x-box-bc"></div></div></div>',
	                '</div>'].join('');
		}
	};
} ());