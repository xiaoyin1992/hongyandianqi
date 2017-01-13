window.onload = function() {
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		autoplay: 3000,
		slidesPerView: 1,
		paginationClickable: true,
		spaceBetween: 30,
		loop: true,
		noSwiping: true,
		autoplayDisableOnInteraction: false
	});
}