Ext.grid.LockingGridPanel = Ext.extend(Ext.grid.GridPanel,{
	getView : function(){
		if(!this.view){
			this.view = new Ext.grid.LockingGridView(this.viewConfig);
		}
		return this.view;
	},

	initComponent : function(){
		if(!this.cm) {
			this.cm = new Ext.grid.LockingColumnModel(this.columns);
			delete this.columns;
		}
		Ext.grid.LockingGridPanel.superclass.initComponent.call(this);
	}
});

Ext.grid.LockingEditorGridPanel = Ext.extend(Ext.grid.EditorGridPanel,{
	getView : function(){
		if(!this.view){
			this.view = new Ext.grid.LockingGridView(this.viewConfig);
		}
		return this.view;
	},

	initComponent : function(){
		if(!this.cm) {
			this.cm = new Ext.grid.LockingColumnModel(this.columns);
			delete this.columns;
		}
		Ext.grid.LockingEditorGridPanel.superclass.initComponent.call(this);
	}
});

Ext.grid.LockingGridView = Ext.extend(Ext.grid.GridView, {

	lockText : "Lock",
	unlockText : "Unlock",

	initTemplates : function(){
		if(!this.templates){
			this.templates = {};
		}
		if(!this.templates.master){
			this.templates.master = new Ext.Template(
				'<div class="x-grid3" hidefocus="true">',
					'<div class="x-grid3-locked">',
						'<div class="x-grid3-header"><div class="x-grid3-header-inner"><div class="x-grid3-header-offset">{lockedHeader}</div></div><div class="x-clear"></div></div>',
						'<div class="x-grid3-scroller"><div class="x-grid3-body">{lockedBody}</div><div class="x-grid3-scroll-spacer"></div></div>',
					'</div>',
					'<div class="x-grid3-viewport">',
						'<div class="x-grid3-header"><div class="x-grid3-header-inner"><div class="x-grid3-header-offset">{header}</div></div><div class="x-clear"></div></div>',
						'<div class="x-grid3-scroller"><div class="x-grid3-body">{body}</div><a href="#" class="x-grid3-focus" tabIndex="-1"></a></div>',
					'</div>',
					'<div class="x-grid3-resize-marker">&#160;</div>',
					'<div class="x-grid3-resize-proxy">&#160;</div>',
				'</div>'
			);
		}
		Ext.grid.LockingGridView.superclass.initTemplates.call(this);
	},

	initElements : function(){
		var E = Ext.Element;
		var el = this.grid.getGridEl();
		el = el.dom.firstChild;
		var cs = el.childNodes;
		this.el = new E(el);
		this.lockedWrap = new E(cs[0]);
		this.lockedHd = new E(this.lockedWrap.dom.firstChild);
		this.lockedInnerHd = this.lockedHd.dom.firstChild;
		this.lockedScroller = new E(this.lockedWrap.dom.childNodes[1]);
		this.lockedBody = new E(this.lockedScroller.dom.firstChild);
		this.mainWrap = new E(cs[1]);
		this.mainHd = new E(this.mainWrap.dom.firstChild);
		this.innerHd = this.mainHd.dom.firstChild;
		this.scroller = new E(this.mainWrap.dom.childNodes[1]);
		if(this.forceFit){
			this.scroller.setStyle('overflow-x', 'hidden');
		}
		this.mainBody = new E(this.scroller.dom.firstChild);
		this.focusEl = new E(this.scroller.dom.childNodes[1]);
		this.focusEl.swallowEvent("click", true);
		this.resizeMarker = new E(cs[2]);
		this.resizeProxy = new E(cs[3]);
	},

	getLockedRows : function(){
		return this.hasRows() ? this.lockedBody.dom.childNodes : [];
	},

	getLockedRow : function(row){
		return this.getLockedRows()[row];
	},

	getCell : function(rowIndex, colIndex){
		var locked = this.cm.getLockedCount();
		var row;
		if(colIndex < locked){
			row = this.getLockedRow(rowIndex);
		}else{
			row = this.getRow(rowIndex);
			colIndex -= locked;
		}
		return row.getElementsByTagName('td')[colIndex];
	},

	getHeaderCell : function(index){
		var locked = this.cm.getLockedCount();
		if(index < locked){
			return this.lockedHd.dom.getElementsByTagName('td')[index];
		} else {
			return this.mainHd.dom.getElementsByTagName('td')[(index-locked)];
		}
	},

	scrollToTop : function(){
		Ext.grid.LockingGridView.superclass.scrollToTop.call(this);
		this.syncScroll();
	},

	syncScroll : function(e){
		Ext.grid.LockingGridView.superclass.syncScroll.call(this, e);
		var mb = this.scroller.dom;
		this.lockedScroller.dom.scrollTop = mb.scrollTop;
	},

	processRows : function(startRow, skipStripe){
		if(this.ds.getCount() < 1){
			return;
		}
		skipStripe = skipStripe || !this.grid.stripeRows;
		startRow = startRow || 0;
		var cls = ' x-grid3-row-alt ';
		var rows = this.getRows();
		var lrows = this.getLockedRows();
		for(var i = startRow, len = rows.length; i < len; i++){
			var row = rows[i];
			var lrow = lrows[i];
			row.rowIndex = i;
			lrow.rowIndex = i;
			if(!skipStripe){
				var isAlt = ((i+1) % 2 === 0);
				var hasAlt = (' '+row.className + ' ').indexOf(cls) != -1;
				if(isAlt == hasAlt){
					continue;
				}
				if(isAlt){
					row.className += " x-grid3-row-alt";
					lrow.className += " x-grid3-row-alt";
				}else{
					row.className = row.className.replace("x-grid3-row-alt", "");
					lrow.className = lrow.className.replace("x-grid3-row-alt", "");
				}
			}
		}
	},

	updateSortIcon : function(col, dir){
		var sc = this.sortClasses;
		var clen = this.cm.getColumnCount();
		var lclen = this.cm.getLockedCount();
		var hds = this.mainHd.select('td').removeClass(sc);
		var lhds = this.lockedHd.select('td').removeClass(sc);
		if(lclen > 0 && col < lclen){
			lhds.item(col).addClass(sc[dir == "DESC" ? 1 : 0]);
		}else{
			hds.item(col-lclen).addClass(sc[dir == "DESC" ? 1 : 0]);
		}
	},

	updateColumnHidden : function(col, hidden){
		var tw = this.cm.getTotalWidth();
		var lw = this.cm.getTotalLockedWidth();
		var lclen = this.cm.getLockedCount();
		this.innerHd.firstChild.firstChild.style.width = tw + 'px';
		var display = hidden ? 'none' : '';
		var hd = this.getHeaderCell(col);
		hd.style.display = display;
		var ns, gw;
		if(col < lclen) {
			ns = this.getLockedRows();
			gw = lw;
			this.lockedHd.dom.firstChild.firstChild.style.width = gw + 'px';
			this.mainWrap.dom.style.left= this.cm.getTotalLockedWidth() + 'px';
		} else {
			ns = this.getRows();
			gw = tw - lw;
			col -= lclen;
			this.innerHd.firstChild.firstChild.style.width = gw + 'px';
		}
		for(var i = 0, len = ns.length; i < len; i++){
			ns[i].style.width = gw + 'px';
			ns[i].firstChild.style.width = gw + 'px';
			ns[i].firstChild.rows[0].childNodes[col].style.display = display;
		}
		this.onColumnHiddenUpdated(col, hidden, tw);
		delete this.lastViewWidth;
		this.layout();
	},

	syncHeaderHeight : function() {
		if(this.lockedInnerHd === undefined || this.innerHd === undefined){
			return;
		}
		this.lockedInnerHd.firstChild.firstChild.style.height = "auto";
		this.innerHd.firstChild.firstChild.style.height = "auto";
		var height = (this.lockedInnerHd.firstChild.firstChild.offsetHeight > this.innerHd.firstChild.firstChild.offsetHeight) ?
			this.lockedInnerHd.firstChild.firstChild.offsetHeight : this.innerHd.firstChild.firstChild.offsetHeight;
		this.lockedInnerHd.firstChild.firstChild.style.height = height + 'px';
		this.innerHd.firstChild.firstChild.style.height = height + 'px';
	},

	doRender : function(cs, rs, ds, startRow, colCount, stripe){
		var ts = this.templates, ct = ts.cell, rt = ts.row, last = colCount-1;
		var tw = this.cm.getTotalWidth();
		var lw = this.cm.getTotalLockedWidth();
		var clen = this.cm.getColumnCount();
		var lclen = this.cm.getLockedCount();
		var tstyle = 'width:'+this.getTotalWidth()+';';
		var buf = [], lbuf = [], cb, lcb, c, p = {}, rp = {tstyle: tstyle}, r;
		for(var j = 0, len = rs.length; j < len; j++){
			r = rs[j]; cb = []; lcb = [];
			var rowIndex = (j+startRow);
			for(var i = 0; i < colCount; i++){
				c = cs[i];
				p.id = c.id;
				p.css = i === 0 ? 'x-grid3-cell-first ' : (i == last ? 'x-grid3-cell-last ' : '');
				p.attr = p.cellAttr = "";
				p.value = c.renderer(r.data[c.name], p, r, rowIndex, i, ds);
				p.style = c.style;
				if(p.value === undefined || p.value === ""){
					p.value = "&#160;";
				}
				if(r.dirty && typeof r.modified[c.name] !== 'undefined'){
					p.css += ' x-grid3-dirty-cell';
				}
				if(c.locked){
					lcb[lcb.length] = ct.apply(p);
				}else{
					cb[cb.length] = ct.apply(p);
				}
			}
			var alt = [];
			if(stripe && ((rowIndex+1) % 2 === 0)){
				alt[0] = "x-grid3-row-alt";
			}
			if(r.dirty){
				alt[1] = " x-grid3-dirty-row";
			}
			rp.cols = colCount;
			if(this.getRowClass){
				alt[2] = this.getRowClass(r, rowIndex, rp, ds);
			}
			rp.alt = alt.join(" ");
			rp.cells = lcb.join("");
			rp.tstyle = 'width:'+lw+'px;';
			lbuf[lbuf.length] = rt.apply(rp);
			rp.cells = cb.join("");
			rp.tstyle = 'width:'+(tw-lw)+'px;';
			buf[buf.length] = rt.apply(rp);
		}
		return [buf.join(""), lbuf.join("")];
	},

	layout : function(){
		if(!this.mainBody){
			return;
		}
		var g = this.grid;
		var c = g.getGridEl(), cm = this.cm,
			expandCol = g.autoExpandColumn,
			gv = this;
		var lw = cm.getTotalLockedWidth();
		var csize = c.getSize(true);
		var vw = csize.width;
		if (vw < 20 || csize.height < 20) {
			return;
		}
		this.syncHeaderHeight();
		if(g.autoHeight){
			this.scroller.dom.style.overflow = 'visible';
			this.lockedScroller.dom.style.overflow = 'visible';
		}else{
			this.el.setSize(csize.width, csize.height);
			var vh = csize.height - this.mainHd.getHeight();
			this.lockedScroller.setSize(lw, vh);
			this.scroller.setSize(vw-lw, vh);
			if(this.innerHd){
				this.innerHd.style.width = (vw)+'px';
			}
		}
		if(this.forceFit){
			if(this.lastViewWidth != vw){
				this.fitColumns(false, false);
				this.lastViewWidth = vw;
			}
		}else {
			this.autoExpand();
			lw = cm.getTotalLockedWidth();
		}
		this.mainWrap.dom.style.left = lw +'px';
		this.onLayout(vw, vh);
	},

	renderHeaders : function(){
		var cm = this.cm, ts = this.templates;
		var ct = ts.hcell;
		var tw = this.cm.getTotalWidth();
		var lw = this.cm.getTotalLockedWidth();
		var cb = [], lb = [], sb = [], lsb = [], p = {};
		for(var i = 0, len = cm.getColumnCount(); i < len; i++){
			p.id = cm.getColumnId(i);
			p.value = cm.getColumnHeader(i) || "";
			p.style = this.getColumnStyle(i, true);
			p.tooltip = this.getColumnTooltip(i);
			if(cm.config[i].align == 'right'){
				p.istyle = 'padding-right:16px';
			}
			if(cm.isLocked(i)) {
				lb[lb.length] = ct.apply(p);
			} else {
				cb[cb.length] = ct.apply(p);
			}
		}
		return [ts.header.apply({cells: cb.join(""), tstyle:'width:'+(tw-lw)+';'}),
				ts.header.apply({cells: lb.join(""), tstyle:'width:'+(lw)+';'})];
	},

	getColumnTooltip : function(i) {
		var tt = this.cm.getColumnTooltip(i);
		if (tt) {
			if (Ext.QuickTips.isEnabled()) {
				return 'ext:qtip="'+tt+'"';
			} else {
				return 'title="'+tt+'"';
			}
		}
		return "";
	},

	updateHeaders : function(){
		var hd = this.renderHeaders();
		this.innerHd.firstChild.innerHTML = hd[0];
		this.lockedInnerHd.firstChild.innerHTML = hd[1];
	},

	insertRows : function(dm, firstRow, lastRow, isUpdate){
		if(firstRow === 0 && lastRow == dm.getCount()-1){
			this.refresh();
		}else{
			if(!isUpdate){
				this.fireEvent("beforerowsinserted", this, firstRow, lastRow);
			}
			var html = this.renderRows(firstRow, lastRow);
			var before = this.getRow(firstRow);
			if(before){
				Ext.DomHelper.insertHtml('beforeBegin', before, html[0]);
			} else {
				Ext.DomHelper.insertHtml('beforeEnd', this.mainBody.dom, html[0]);
			}
			var beforeLocked = this.getLockedRow(firstRow);
			if (beforeLocked) {
				Ext.DomHelper.insertHtml('beforeBegin', beforeLocked, html[1]);
			}else{
				Ext.DomHelper.insertHtml('beforeEnd', this.lockedBody.dom, html[1]);
			}
			if(!isUpdate){
				this.fireEvent("rowsinserted", this, firstRow, lastRow);
				this.processRows(firstRow);
			}
		}
	},

	removeRow : function(row) {
		Ext.removeNode(this.getRow(row));
		if (this.cm.getLockedCount() > 0) {
			Ext.removeNode(this.getLockedRow(row));
		}
	},

	getColumnData : function(){
				var cs = [], cm = this.cm, colCount = cm.getColumnCount();
		for(var i = 0; i < colCount; i++){
			var name = cm.getDataIndex(i);
			cs[i] = {
				name : (typeof name == 'undefined' ? this.ds.fields.get(i).name : name),
				renderer : cm.getRenderer(i),
				id : cm.getColumnId(i),
				style : this.getColumnStyle(i),
				locked : cm.isLocked(i)
			};
		}
		return cs;
	},

	renderBody : function(){
		var markup = this.renderRows();
		return [this.templates.body.apply({rows: markup[0]}), this.templates.body.apply({rows: markup[1]})];
	},

	refresh : function(headersToo){
		this.fireEvent("beforerefresh", this);
		this.grid.stopEditing();
		var result = this.renderBody();
		this.mainBody.update(result[0]);
		this.lockedBody.update(result[1]);
		if(headersToo === true){
			this.updateHeaders();
			this.updateHeaderSortState();
		}
		this.processRows(0, true);
		this.layout();
		this.applyEmptyText();
		this.fireEvent("refresh", this);
	},

	handleLockChange : function(){
		this.refresh(true);
	},

	onDenyColumnHide : function(){
	},

	onColumnLock : function(){
		this.handleLockChange.apply(this, arguments);
	},

	addRowClass : function(row, cls){
		var r = this.getRow(row);
		if(r){
			this.fly(r).addClass(cls);
			r = this.getLockedRow(row);
			this.fly(r).addClass(cls);
		}
	},

	removeRowClass : function(row, cls){
		var r = this.getRow(row);
		if(r){
			this.fly(r).removeClass(cls);
			r = this.getLockedRow(row);
			this.fly(r).removeClass(cls);
		}
	},

	handleHdMenuClick : function(item){
		var index = this.hdCtxIndex;
		var cm = this.cm, ds = this.ds, lc;
		switch(item.id){
			case "asc":
				ds.sort(cm.getDataIndex(index), "ASC");
				break;
			case "desc":
				ds.sort(cm.getDataIndex(index), "DESC");
				break;
			case "lock":
				lc = cm.getLockedCount();
				if(cm.getColumnCount(true) <= lc+1){
					this.onDenyColumnLock();
					return;
				}
				if(lc != index){
					cm.setLocked(index, true, true);
					cm.moveColumn(index, lc);
					this.grid.fireEvent("columnmove", index, lc);
				}else{
					cm.setLocked(index, true);
				}
			break;
			case "unlock":
				lc = cm.getLockedCount();
				if((lc-1) != index){
					cm.setLocked(index, false, true);
					cm.moveColumn(index, lc-1);
					this.grid.fireEvent("columnmove", index, lc-1);
				}else{
					cm.setLocked(index, false);
				}
			break;
			default:
				index = cm.getIndexById(item.id.substr(4));
				if(index != -1){
					if(item.checked && cm.getColumnsBy(this.isHideableColumn, this).length <= 1){
						this.onDenyColumnHide();
						return false;
					}
					cm.setHidden(index, item.checked);
				}
		}
		return true;
	},

	handleHdDown : function(e, t){
		if(Ext.fly(t).hasClass('x-grid3-hd-btn')){
			e.stopEvent();
			var hd = this.findHeaderCell(t);
			Ext.fly(hd).addClass('x-grid3-hd-menu-open');
			var index = this.getCellIndex(hd);
			this.hdCtxIndex = index;
			var ms = this.hmenu.items, cm = this.cm;
			ms.get("asc").setDisabled(!cm.isSortable(index));
			ms.get("desc").setDisabled(!cm.isSortable(index));
			if(this.grid.enableColLock !== false){
				ms.get("lock").setDisabled(cm.isLocked(index));
				ms.get("unlock").setDisabled(!cm.isLocked(index));
			}
			this.hmenu.on("hide", function(){
				Ext.fly(hd).removeClass('x-grid3-hd-menu-open');
			}, this, {single:true});
			this.hmenu.show(t, "tl-bl?");
		}
	},

	renderUI : function(){
		var header = this.renderHeaders();
		var body = this.templates.body.apply({rows:''});
		var html = this.templates.master.apply({
			body: body,
			header: header[0],
			lockedBody: body,
			lockedHeader: header[1]
		});
		var g = this.grid;
		g.getGridEl().dom.innerHTML = html;
		this.initElements();
		Ext.fly(this.innerHd).on("click", this.handleHdDown, this);
		Ext.fly(this.lockedInnerHd).on("click", this.handleHdDown, this);
		this.mainHd.on("mouseover", this.handleHdOver, this);
		this.mainHd.on("mouseout", this.handleHdOut, this);
		this.mainHd.on("mousemove", this.handleHdMove, this);
		this.lockedHd.on("mouseover", this.handleHdOver, this);
		this.lockedHd.on("mouseout", this.handleHdOut, this);
		this.lockedHd.on("mousemove", this.handleHdMove, this);
		this.mainWrap.dom.style.left= this.cm.getTotalLockedWidth() + 'px';
		this.scroller.on('scroll', this.syncScroll, this);
		if(g.enableColumnResize !== false){
			this.splitone = new Ext.grid.GridView.SplitDragZone(g, this.lockedHd.dom);
			this.splitone.setOuterHandleElId(Ext.id(this.lockedHd.dom));
			this.splitone.setOuterHandleElId(Ext.id(this.mainHd.dom));
		}
		if(g.enableColumnMove){
			this.columnDrag = new Ext.grid.GridView.ColumnDragZone(g, this.innerHd);
			this.columnDrop = new Ext.grid.HeaderDropZone(g, this.mainHd.dom);
		}
		if(g.enableHdMenu !== false){
			if(g.enableColumnHide !== false){
				this.colMenu = new Ext.menu.Menu({id:g.id + "-hcols-menu"});
				this.colMenu.on("beforeshow", this.beforeColMenuShow, this);
				this.colMenu.on("itemclick", this.handleHdMenuClick, this);
			}
			this.hmenu = new Ext.menu.Menu({id: g.id + "-hctx"});
			this.hmenu.add(
				{id:"asc", text: this.sortAscText, cls: "xg-hmenu-sort-asc"},

				{id:"desc", text: this.sortDescText, cls: "xg-hmenu-sort-desc"}
			);
			if(this.grid.enableColLock !== false){
				this.hmenu.add('-',
					{id:"lock", text: this.lockText, cls: "xg-hmenu-lock"},

					{id:"unlock", text: this.unlockText, cls: "xg-hmenu-unlock"}
				);
			}
			if(g.enableColumnHide !== false){
				this.hmenu.add('-',
					{id:"columns", text: this.columnsText, menu: this.colMenu, iconCls: 'x-cols-icon'}
				);
			}
			this.hmenu.on("itemclick", this.handleHdMenuClick, this);
		}
		if(g.enableDragDrop || g.enableDrag){
			var dd = new Ext.grid.GridDragZone(g, {
				ddGroup : g.ddGroup || 'GridDD'
			});
		}
		this.updateHeaderSortState();
	},

	afterRender : function(){
		var bd = this.renderRows();
		if (bd === '') {
			bd = ['', ''];
		}
		this.mainBody.dom.innerHTML = bd[0];
		this.lockedBody.dom.innerHTML = bd[1];
		this.processRows(0, true);
		if(this.deferEmptyText !== true){
			this.applyEmptyText();
		}
	},

	updateAllColumnWidths : function(){
		var tw = this.cm.getTotalWidth();
		var lw = this.cm.getTotalLockedWidth();
		var clen = this.cm.getColumnCount();
		var lclen = this.cm.getLockedCount();
		var ws = [];
		var i;
		for(i = 0; i < clen; i++){
			ws[i] = this.getColumnWidth(i);
		}
		this.innerHd.firstChild.firstChild.style.width = (tw - lw) + 'px';
		this.mainWrap.dom.style.left = lw + 'px';
		this.lockedInnerHd.firstChild.firstChild.style.width = lw + 'px';
		for(i = 0; i < clen; i++){
			var hd = this.getHeaderCell(i);
			hd.style.width = ws[i] + 'px';
		}
		var ns = this.getRows();
		var lns = this.getLockedRows();
		for(i = 0, len = ns.length; i < len; i++){
			ns[i].style.width =(tw - lw) + 'px';
			ns[i].firstChild.style.width = (tw-lw) + 'px';
			lns[i].style.width = lw + 'px';
			lns[i].firstChild.style.width = lw + 'px';
			var j, row;
			for(j = 0; j < lclen; j++){
				row = lns[i].firstChild.rows[0];
				row.childNodes[j].style.width = ws[j] + 'px';
			}
			for(j = lclen; j < clen; j++){
				row = ns[i].firstChild.rows[0];
				row.childNodes[j].style.width = ws[j] + 'px';
			}
		}
		this.onAllColumnWidthsUpdated(ws, tw);
	},

	updateColumnWidth : function(col, width){
		var w = this.getColumnWidth(col);
		var tw = this.cm.getTotalWidth();
		var lclen = this.cm.getLockedCount();
		var lw = this.cm.getTotalLockedWidth();
		var hd = this.getHeaderCell(col);
		hd.style.width = w;
		var ns, gw;
		var ncol = col;
		if(col < lclen) {
			ns = this.getLockedRows();
			gw = lw;
			this.lockedInnerHd.firstChild.firstChild.style.width = gw + 'px';
			this.mainWrap.dom.style.left= this.cm.getTotalLockedWidth() + 'px';
			this.mainWrap.dom.style.display='none';
			this.mainWrap.dom.style.display='';
		}else {
			ns = this.getRows();
			gw = tw - lw;
			ncol -= lclen;
			this.innerHd.firstChild.firstChild.style.width = gw + 'px';
		}
		for(var i = 0, len = ns.length; i < len; i++){
			ns[i].style.width = gw + 'px';
			ns[i].firstChild.style.width = gw + 'px';
			ns[i].firstChild.rows[0].childNodes[ncol].style.width = w;
		}
		this.onColumnWidthUpdated(col, w, tw);
		this.layout();
	},

	getEditorParent : function(ed){
		return this.el.dom;
	},

	refreshRow : function(record){
		Ext.grid.LockingGridView.superclass.refreshRow.call(this, record);
		var index = this.ds.indexOf(record);
		this.getLockedRow(index).rowIndex = index;
	}
});

Ext.grid.LockingColumnModel = Ext.extend(Ext.grid.ColumnModel,{
	getTotalLockedWidth : function(){
		var totalWidth = 0;
		for(var i = 0; i < this.config.length; i++){
			if(this.isLocked(i) && !this.isHidden(i)){
				totalWidth += this.getColumnWidth(i);
			}
		}
		return totalWidth;
	}
});
