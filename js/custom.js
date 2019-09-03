
//Shinking navbar
$(window).scroll(function() 
{
	if ($(document).scrollTop() > 50)
	{
		$('nav').addClass('shrink');
		$('nav').addClass('fixed-top');
	}
	else
	{
		$('nav').removeClass('shrink');
		$('nav').removeClass('fixed-top');
	}
});




var scroll = new SmoothScroll('a[href*="#"]');
//Smooth scroll ininialization

///Testimonials
$(function () {
	$("#customers-testimonial").owlCarousel({
		items:1,
		autoplay:true,
		smartSpeed:700,
		look:true,
		autoPlayHoverPause:true
	});
});

// Wow animation
new WOW().init();