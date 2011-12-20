gxui.PropertiesEditorNodeUI = Ext.extend(Ext.tree.TreeNodeUI, {
	focus: Ext.emptyFn, // prevent odd scrolling behavior

	renderElements: function(n, a, targetNode, bulkRender) {
		this.indentMarkup = n.parentNode ? n.parentNode.ui.getChildIndent() : '';

		var t = n.getOwnerTree();
		var cols = t.columns;
		var bw = t.borderWidth;

		// Label markup
		var c = cols.label;
		var buf = [
			'<li class="x-tree-node"><div ext:tree-node-id="', n.id, '" class="x-tree-node-el x-tree-node-leaf ', a.cls, '">',
				'<div class="x-tree-col x-tree-label-col" style="width:', c.width - bw, 'px;">',
					'<span class="x-tree-node-indent">', this.indentMarkup, "</span>",
					'<img src="', this.emptyIcon, '" class="x-tree-ec-icon x-tree-elbow">',
					'<img src="', a.icon || this.emptyIcon, '" class="x-tree-node-icon', (a.icon ? " x-tree-node-inline-icon" : ""), (a.iconCls ? " " + a.iconCls : ""), '" unselectable="on">',
					'<a hidefocus="on" class="x-tree-node-anchor" href="', a.href ? a.href : "#", '" tabIndex="1" ',
					a.hrefTarget ? ' target="' + a.hrefTarget + '"' : "", '>',
					'<span unselectable="on">', n.text || (c.renderer ? c.renderer(a[c.dataIndex], n, a) : a[c.dataIndex]), "</span></a>",
				"</div>"];

		// Value markup
		c = cols.value;


		var data = (typeof (a[c.dataIndex]) == 'object') ? a[c.dataIndex].data : a[c.dataIndex];
		// Create the editor, if there's one defined and the property is editable.
		if (a.editor) {
			this.valueEditor = this.createEditor(t, n, a.editor);
		}

		// If the property has a custom editor, call its renderer, if there's one defined.
		if (this.valueEditor && this.valueEditor.renderer) {
			data = this.valueEditor.renderer(data);
		}

		buf.push('<div class="x-tree-col x-tree-value-col', (c.cls ? c.cls : ''), '" style="width:', c.width - bw, 'px;">',
					'<div class="x-tree-col-text ', (!a.isDefault ? 'x-tree-value-not-default' : ''), '">', (c.renderer ? c.renderer(data, n, a) : data) || "&nbsp;", "</div>",
				"</div>");

		buf.push(
			'<div class="x-clear"></div></div>',
			'<ul class="x-tree-node-ct" style="display:none;"></ul>',
			"</li>");

		if (bulkRender !== true && n.nextSibling && n.nextSibling.ui.getEl()) {
			this.wrap = Ext.DomHelper.insertHtml("beforeBegin",
								n.nextSibling.ui.getEl(), buf.join(""));
		} else {
			this.wrap = Ext.DomHelper.insertHtml("beforeEnd", targetNode, buf.join(""));
		}

		this.elNode = this.wrap.childNodes[0];
		this.ctNode = this.wrap.childNodes[1];
		var cs = this.elNode.firstChild.childNodes;
		this.indentNode = cs[0];
		this.ecNode = cs[1];
		this.iconNode = cs[2];
		this.anchor = cs[3];
		this.textNode = cs[3].firstChild;
		this.valueNode = Ext.get(this.elNode.childNodes[1].childNodes[0]);

		// Fire "labeldoubleclick" event when the label is double clicked.
		Ext.get(this.elNode).on('dblclick', function() {
			t.fireEvent('labeldoubleclick', t, n);
		});

		if (this.valueEditor) {
			this.valueNode.on('click', function(e) {
				this.startEditor(t, n);
			}, this);
		}
	},

	startEditor: function(t, n) {
		if (this.valueEditor) {
			this.valueEditor.startEdit(this.valueNode, n.attributes.value);
			///////////////////////////////////////
			// WA to avoid alignment problems in IE the first time the editor is opened or when the container is resized.
			this.valueEditor.el.alignTo(this.valueNode, "c-c?");
			///////////////////////////////////////
		}
	},

	startEditorDeferred: function(t, n) {
		this.startEditor.defer(350, this, [t, n]);
	},

	createEditor: function(t, n, editor) {
		if (t.readOnly || n.attributes.isReadonly) {
			return null;
		}

		if (!n.leaf) {
			return null;
		}

		var xtype = editor.xtype || "text-editor";

		// editor.cfg is a key/value list with the editor config. Create an object with the list items.
		var config = {};
		if (editor.cfg) {
			Ext.each(editor.cfg, function(c) {
				if (c.Key) {
					config[c.Key] = c.Value;
				}
			}, this);
		}

		var n = this.node;
		var property = {
			data: n.attributes.property.json,
			definition: n.attributes.descriptor
		};
		var valueEditor = gxui.PropertyEditorMgr.create(xtype, n.getOwnerTree(), property, config);

		if (valueEditor) {
			valueEditor.on({
				'complete': function(e, value) {
					t.selectionPath = t.getSelectionModel().getSelectedNode().getPath();
					t.setPropertyValue(n, value);

				},
				'hide': function(e, value) {
					// This is to set focus on the property again, after the focus on the edit field is lost.
					n.ui.anchor.focus();

				},
				scope: this
			});
		}

		return valueEditor;
	},

	destroy: function() {
		gxui.PropertiesEditorNodeUI.superclass.destroy.call(this);

		// Delete members that aren't deleted by superclass' destroy method
		delete this.valueNode;

		if (this.valueEditor) {
			this.valueEditor.destroy();
			delete this.valueEditor;
		}
	}
});
