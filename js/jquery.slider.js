jQuery(document).ready(function ($) {
	
	var time = setInterval(function(){
			$('#holder').fadeOut(500,move).fadeIn(500);
		},3000);
	
	var position;
	var count;
	var currentpos = 0;
	
	$('#slidecounter img').on('click', function(){
		position = $(this).index();
		while(position > 0)
		{
			$('#holder img:last').prependTo('#holder');
			$('#slidecounter img:first').appendTo('#slidecounter');
			position--;
		}
	});

	$('#holder img').hover(function(){
		clearInterval(time);
		time ='';
		},function(){
			fade();
		}
	)

	function move(){
		$('#holder img:first').appendTo('#holder');
		$('#slidecounter img:last-child').prependTo('#slidecounter');
	};

	function fade(){
		time = setInterval(function(){
			$('#holder').fadeOut(500,move).fadeIn(500);
			currentpos++;
			if (currentpos>3) {
				currentpos = 0;
			};
		},3000);
	}

});