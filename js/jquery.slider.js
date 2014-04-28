jQuery(document).ready(function ($) {
	
	var position;
	var count;
	var currentpos = 0;
	var x = 0;
	var time = setInterval(function(){
			$('#holder').fadeOut(500,move2).fadeIn(500);
		},3000);

	$('#holder img, #slidecounter').hover(function(){
		clearInterval(time);
		time ='';
		},function(){
			fade();
		}
	)
	
	$('#slidecounter span').on('click', function(){
		position = $(this).index();
		$('#holder').fadeOut(500,function(){
			$('#holder').css('margin-left',position * -400 + 'px');
			$('#slidecounter span').attr('class','black');
			$('#slidecounter span').removeAttr('id','white');
			$($('#slidecounter span')[position]).attr('id','white');
		}).fadeIn(500);
	});

	function move2(){
		position = currentpos + 1;
		$('#holder').css('margin-left',position * -400 + 'px');
		
		currentpos++;
		if(currentpos > 2)
		{
			currentpos = -1;
		}
		$('#slidecounter span:last-child').prependTo('#slidecounter');
	}

	function fade(){
		time = setInterval(function(){
			$('#holder').fadeOut(500,move2).fadeIn(500);
		},3000);
	}

});