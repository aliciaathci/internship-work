Ext.define('form2', {
	extend: 'Ext.form.Panel',
	title: 'Apply for an Internship',
	bodyPadding: 5,
	height: 325,
	//url: 'form_submit.html', // The form will submit an AJAX request to this URL when submitted
	defaultType: 'textfield',
	layout: 'anchor', 	// Fields will be arranged vertically, stretched to full width
	defaults: {
		anchor: '100%'
	},
	initComponent : function(){
		var me = this;
		me.items = me.buildItems();
		/*We use the items property to add components to our form. We are calling a function that should return an array of components.*/
		me.callParent();
	},
	
	buildItems : function(){ 
		return [{
			fieldLabel: 'Your Name',
			name: 'name',
			allowBlank: false
		},{
			fieldLabel: 'Your Email',
			name: 'email',
			allowBlank: false
		},{
			xtype: 'filefield',
			name: 'resume',
			fieldLabel: 'Resume',
			msgTarget: 'under',
			allowBlank: false,
			anchor: '100%',
			buttonText: 'Browse'
		},{
			xtype: 'filefield',
			name: 'transcript',
			fieldLabel: 'Unoffical copy of academic transcript',
			msgTarget: 'under',
			allowBlank: false,
			anchor: '100%',
			buttonText: 'Browse'
		},{
			xtype: 'filefield',
			name: 'portfolio',
			fieldLabel: 'Portfolio (please upload as .zip file)',
			msgTarget: 'under',
			allowBlank: false,
			anchor: '100%',
			buttonText: 'Browse'
		},{
			fieldLabel: 'Personal Website (optional)',
			name: 'website',
			allowBlank: true
		},{
			xtype: 'label',
			text: 'Please also prepare two letters of recommendation. You will be contacted within X business days.'
		},{
			xtype: 'button',
			text: 'Submit',
			formBind: true, //only enabled once the form is valid
			disabled: true,
			handler: function() {
				var form = this.up('form').getForm();
				if (form.isValid()) {
					form.submit({
				    	success: function(form, action) {
				        	Ext.Msg.alert('Success', action.result.msg);
				        },
				    	failure: function(form, action) {
				        	Ext.Msg.alert('Failed', action.result.msg);
				        }
				   	}); //end form.submit
				} //end if statement
			} //end handler function
		}]; //end return
	} //end buildItems
}); //end Ext.define

Ext.create('form2', { 
	renderTo: 'formContainer2'
}); //end Ext.create