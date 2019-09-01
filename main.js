$(document).ready(function () {
	$('.menu-toggler').on('click', function(){
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
	})

	$('.top-nav .nav-link').on('click', function(){
		$('.menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');
	})
	//
	//	$('nav a[href="#"]').on('click', function(){
	//		$('html, body').animate(keyframes:{
	//			scrollTop:$($(this).attr('href')).offset().top - 100
	//		}; options:2000);
	//	})



//
//	function topFunction() {
//		document.body.scrollTop = 0; // For Safari
//		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
//	}




AOS.init({
	easing:'ease',
	duration:1800,
	once: true
});

















});