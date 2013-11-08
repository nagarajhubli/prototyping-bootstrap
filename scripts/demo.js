var demo = {
	
	init: function(){

		// handling the click on show loader button
		$(document).on("click", ".show_loader_btn", function(){
			$(".loader").dialog("open");
			setTimeout(function(){
				$(".loader").dialog("close");
			}, 5000);
		});

	}

};

$(document).ready(function(){
	demo.init();
});