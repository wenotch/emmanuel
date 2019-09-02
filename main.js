$(document).ready(function () {
	$('.menu-toggler').on('click', function () {
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
	})

	$('.top-nav .nav-link').on('click', function () {
		$('.menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');
	})
	//
	//	$('nav a[href="#"]').on('click', function(){
	//		$('html, body').animate(keyframes:{
	//			scrollTop:$($(this).attr('href')).offset().top - 100
	//		}; options:2000);
	//	})

//var btn =document.getElementById('#up');
//	window.onscroll = function () {
//		scrollFunction()
//	};
//
//	function scrollFunction() {
//		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//			document.getElementById("up").style.display = "block";
//		} else {
//			document.getElementById("up").style.display = "none";
//		}
//	};
//	
//	btn.on('click', function(e){
//		e.preventDefault();
//		$('html, body').animate({scrollTop:0}, '300');
//	});


	AOS.init({
		easing: 'ease',
		duration: 1800,
		once: true
	});









});
