jQuery(document).ready(function ($) {
	
	var time;

	$('#imageslider').load(fade());

	function fade(){
		time = setInterval(function(){
			$('#holder').fadeOut("slow",
				function(){
					$('#holder img:first').appendTo('#holder');
				}).fadeIn("slow");
			$('#slidecounter img:last-child').prependTo('#slidecounter');
	
		},2000);
	};

});