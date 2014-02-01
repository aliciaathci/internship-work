//code originally from http://try.sencha.com/extjs/4.0.7/docs/Ext.menu.DatePicker.1/viewer.html

Ext.onReady(function () {
    Ext.create('Ext.menu.DatePicker', {
    	renderTo: 'EventMenu',
        handler: function (dp, date) {
            Ext.Msg.alert('Date Selected', 'You selected ' + Ext.Date.format(date, 'M j, Y'));
        }
    });
});
