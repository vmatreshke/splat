$(document).ready(function(){	
	var countClick = 0;

	$('.carousel').append('<div class="On"></div>');

	$('.carousel').click(function(){		
		if(countClick === 2)
		{
			$('.On').animate({left: '-=204px'},500);
			countClick = 0;
		}else {
			$('.On').animate({left: '+=102px'}, 500);
			countClick++;
		}

		var $slide_element = $('.head-slider .col-md-3:first-child');
		$slide_element.hide('3000', function() {
			$(this).remove();
			$slide_element.appendTo('.wrap-slider').show('3000');
		
		});

    	

	});
			
});