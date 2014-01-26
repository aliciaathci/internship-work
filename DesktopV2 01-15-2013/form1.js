//Ext.application({
  //  launch: function() {

		Ext.define('form1', {
			extend: 'Ext.form.Panel',
			title: 'Email Marcus & Malcolm',
			bodyPadding: 5,
			height: 350,
			//renderTo: 'formContainer1',
			//url: 'form_submit.html', 	// The form will submit an AJAX request to this URL when submitted
			defaultType: 'textfield',
			layout: 'anchor', // Fields will be arranged vertically, stretched to full width
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
					xtype: 'radiogroup',
		        	fieldLabel: 'Subject',
					columns: 1,
					vertical: true,
					items: [
						{ boxLabel: 'Request a Project', name: 'rb', inputValue: '1', checked: true},
					    { boxLabel: 'Site Feedback', name: 'rb', inputValue: '2'},
					    { boxLabel: 'General Inquiry', name: 'rb', inputValue: '3' },
					    { boxLabel: 'Other', name: 'rb', inputValue: '4' }
					]
				},{
					xtype: 'textareafield',
					grow : true,
					name: 'message',
					fieldLabel: 'Message',
					anchor: '100%'
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
					            });
					        }
					}
				}];
			}
		}); //end Ext.define

		Ext.create('form1', { 
           renderTo: 'formContainer1''
		}); //end Ext.create

//	} //end launch function
//}); //end application