Ext.define('plist1', {
	extend: 'Ext.menu.Menu',
	width: 300,
	plain: true,
	floating: false,  // usually you want this set to True (default)
	items: [{
		text: 'Free Spirit Pottery Website',
		listeners : {
			click : function(){
				document.location = 'project_details.html';
			}
		} 
	},{
		text: 'Local Placeholder 1',
		listeners : {
			click : function(){
				document.location = 'project_details.html'; //this is a generic example and does not use a loop because the link is a placeholder
			 }
		} 
	},{
		text: 'Local Placeholder 2',
		listeners : {
			click : function(){
				document.location = 'project_details.html';
			}
		} 
	}]
});

Ext.create('plist1', { 
	renderTo: 'localProjects'
}); //end Ext.create