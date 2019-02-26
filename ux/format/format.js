Ext.define('Ext.ux.util.Format', {
    override: 'Ext.util.Format',
    originalNumberFormatter: Ext.util.Format.number,
    number: function (v, formatString) {
        if (v < 0) {
            //negative number: flip the sign, format then prepend '-' onto output
            return '-' + this.originalNumberFormatter(v * -1, formatString);
        } else {
            //positive number: as you were
            return this.originalNumberFormatter(v, formatString);
        }
    }
});