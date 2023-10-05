$(function(){
	//스크롤이벤트
	$(window).scroll(function(){
		if($(window).scrollTop() > 68) {
			$('header').addClass('active')
		}
		else {
			$('header').removeClass('active')
		}
	});
	//마우스오버이벤트
	$('.header__navMain').mouseover(function(){
		$(this).siblings('.header__navSub').show()
	});
	$('.header__navList li').mouseleave(function(){
		$(this).children('.header__navSub').hide()
	});
	//모달
	$('.header__memList i').click(function(){
		$('.header__modal').addClass('active')
	})
	$('.header__modalBg').click(function(){
		$('.header__modal').removeClass('active')
	})
	
	
	/*메인섹션 스와이퍼 슬라이더*/
	const swiper = new Swiper('.main__swiper', {
		effect: "fade",
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
	});
	//베스트섹션 스와이퍼 슬라이더
	const swiper1 = new Swiper('.bestSec__swiper', {
		loop: true,
		slidesPerView: "auto",
		spaceBetween: 100,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
	});
});

