$(document).ready(function(){

	$(document).ready(function () {
		//안내창
		let modal = $(".modal");
		let modal_con = $(".modal-cont, .madal-close");
		// let modal_close = $(".madal-close");
	  
		modal_con.click(function () {
		  modal.fadeOut()
		});
	  
		// modal_close.click(function () {
		//   $(this).hide();
		//   console.log("닫기버튼");
		// });
	  });

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