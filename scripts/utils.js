var utils = {
	
	init: function(){

		// initialize the loader
		$(".loader").dialog({
			modal: true,
			resizable: false,
			autoOpen: true,
			closeOnEscape: false,
			draggable: false,
			width: 180,
			height: 180,
			dialogClass: "loader_dialog"
		});

		// initialize the spinner
		$('.loader_dialog .loader').spin("larger");

		// close the loader
		$(".loader").dialog("close");

		// initialize the tooltips
		$('[title]').tipsy({gravity: 's'});

	}

};

$(document).ready(function(){
	utils.init();
});