/**
 * @class   Ext.grid.RadioSelectionModel
 * @extends Ext.grid.RowSelectionModel
 * @constructor
 * @param {Object} config The configuration options
 */
Ext.grid.RadioSelectionModel = function(config) {

    // call parent
    Ext.grid.RadioSelectionModel.superclass.constructor.call(this, config);

    // force renderer to run in this scope
    this.renderer = function(v, p, record){
        var checked = record === this.selections.get(0);
        var retval = 
            '<div class="x-grid3-row-radio"><input type="radio" name="' + this.id + '"'
            + (checked ? 'checked="checked"' : '')
            + '></div>';
        return retval;
    }.createDelegate(this);

}; // end of constructor

Ext.extend(Ext.grid.RadioSelectionModel, Ext.grid.RowSelectionModel, {
     header:'<div> </div>'
    ,width:25
    ,sortable:false

    // private
    ,fixed:true
    ,dataIndex:''
    ,id:'radio'
    ,singleSelect:true

    ,selectRow:function(index) {
        // call parent
        Ext.grid.RadioSelectionModel.superclass.selectRow.apply(this, arguments);

        // check radio
        var row = Ext.fly(this.grid.view.getRow(index));
        if(row) {
            row.child('input[type=radio]').dom.checked = true;
        }
    } // eo function selectRow

}); // eo extend

// eof 
