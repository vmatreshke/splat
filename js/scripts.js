/*$(document).ready(function(){	
	var countClick = 0;

	$('.carousel').append('<div class="On"></div>');

	$('.carousel').click(function(){		
		if(countClick === 4)
		{
			$('.On').animate({left: '-=79.9917356687898%'},500);
			countClick = 0;
		}else {
			$('.On').animate({left: '+=20%'}, 500);
			countClick++;
		}

		var $slide_element = $('.head-slider .col-md-3:first-child');
		$slide_element.hide('3000', function() {
			$(this).remove();
			$slide_element.appendTo('.wrap-slider').show('3000');
		
		});

	});			
});*/