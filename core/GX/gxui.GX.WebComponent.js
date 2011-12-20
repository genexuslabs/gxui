/// <reference path="..\VStudio\vswd-ext_2.2.js" />

gxui.GX.WebComponent = {
	create: function(options) {
		var o = options;
		try {
			if (!gx.O) {
				gx.O = o.parentObject;
			}
			var srvResponse = gx.ajax.dynComponent(o.program, o.params, o.prefix, "");

			if (srvResponse.gxComponents) {
				var first = true;
				gx.fn.setPostHiddens(srvResponse.gxHiddens);
				for (wc in srvResponse.gxComponents) {
					var cmpPrefix = gx.fn.cmpContextFromCtrl(wc);
					var targetEl;
					if (first) {
						targetEl = o.target;
						first = false;
					}
					else {
						targetEl = Ext.getDom(wc);
					}

					if (targetEl) {
						gx.html.setInnerHtml(targetEl, srvResponse.gxComponents[wc], true); // Inserta el HTML

						var cmp = gx.createComponent(srvResponse.gxHiddens[cmpPrefix + "_CMPPGM"].split(".")[0], cmpPrefix); // Crea el web component
						if (cmp) {
							cmp.onload(); // Carga los grids dentro del WC.
						}
					}
				}
			}
		}
		catch (e) {
			gx.dbg.logEx(e, 'gxui.GX.WebComponent.js', 'create');
			return false;
		}

		return true;
	},

	update: function(options) {
		var o = options;
		try {
			if (!gx.O) {
				gx.O = o.parentObject;
			}
			var prefix = o.cmpContext + o.wc;
			var srvResponse = gx.ajax.dynComponent(o.program, o.params, prefix, "");

			if (srvResponse.gxComponents) {
				var first = true;
				gx.fn.setPostHiddens(srvResponse.gxHiddens);
				for (wc in srvResponse.gxComponents) {
					var cmpPrefix = gx.fn.cmpContextFromCtrl(wc);
					var cmpPgm = (first ? wc : cmpPrefix) + "_CMPPGM";
					var targetEl = Ext.getDom(wc);

					if (wc == prefix && !targetEl) {
						targetEl = Ext.getDom(o.cmpContext + "gxHTMLWrp" + o.wc);
					}

					if (targetEl) {
						gx.html.setInnerHtml(targetEl, srvResponse.gxComponents[wc], true); // Inserta el HTML

						var cmp = gx.createComponent(srvResponse.gxHiddens[cmpPgm].split(".")[0], cmpPrefix); // Crea el web component

						if (cmp) {
							gx.pO.setWebComponent(cmp);
							gx.fn.setPostHiddens(srvResponse.gxHiddens);
							gx.fn.setPostValues(srvResponse.gxValues);
							cmp.onload(); // Carga los grids dentro del WC.
						}
					}

					if (first) {
						first = false;
					}
				}
			}
		}
		catch (e) {
			gx.dbg.logEx(e, 'gxui.GX.WebComponent.js', 'update');
			return false;
		}

		return true;
	}
};