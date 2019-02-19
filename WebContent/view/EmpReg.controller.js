sap.ui.controller("view.EmpReg", {
	
	onNextPage : function(){
		// goto Page2.view.xml
		this.getView().getParent().to("id2");
	}
	
	
});