$(document).ready(function(){
    // visual swiper
	new Swiper('.swiper-container', {
		loop: true,
		speed: 1000,
		allowTouchMove: false,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			prevEl: '.sw-prev-btn',
			nextEl: '.sw-next-btn',
		},
	});

	 //.depth1 바로 밑에 있는 li 를 저장
	 var lis = $('.depth1 > li');

	 $.each(lis, function(index, itme) {
 
		 $(this).mouseenter(function() {
			 $(this).find('.depth2').stop().show();
		 });
 
		 $(this).mouseleave(function() {
			 $(this).find('.depth2').stop().hide();
		 });
 
	 });
})