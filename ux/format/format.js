Ext.apply(Ext.util.Format, {
    formatNumber: function(value, numberFormat) {
        var format = Ext.apply(Ext.apply({}, Ext.util.Format.numberFormat), numberFormat);
        if (typeof value !== 'number') {
            value = String(value);
            if (format.currencySymbol) {
                value = value.replace(format.currencySymbol, '');
            }
            if (format.groupingSeparator) {
                value = value.replace(new RegExp(format.groupingSeparator, 'g'), '');
            }
            if (format.decimalSeparator !== '.') {
                value = value.replace(format.decimalSeparator, '.');
            }
            value = parseFloat(value);
        }
        var neg = value < 0;
        value = Math.abs(value).toFixed(format.decimalPrecision);
        var i = value.indexOf('.');
        if (i >= 0) {
            if (format.decimalSeparator !== '.') {
                value = value.slice(0, i) + format.decimalSeparator + value.slice(i + 1);
            }
        } else {
            i = value.length;
        }
        if (format.groupingSeparator) {
            while (i > format.groupingSize) {
                i -= format.groupingSize;
                value = value.slice(0, i) + format.groupingSeparator + value.slice(i);
            }
        }
        if (format.currencySymbol) {
            value = format.currencySymbol + value;
        }
        if (neg) {
            value = '-' + value;
        }
        return value;
    }
});