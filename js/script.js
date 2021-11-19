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
})