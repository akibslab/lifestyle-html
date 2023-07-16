(function ($) {
	"use strict";

	// data - background
	$("[data-background]").each(function () {
		$(this).css(
			"background-image",
			"url(" + $(this).attr("data-background") + ")"
		);
	});

	$(window).on("load resize", function () {
		if ($(".wining_prize_wrapper").length > 0) {
			$(".wining_prize_wrapper").owlCarousel({
				loop: true,
				dots: false,
				nav: true,
				navText: [
					'<i class="fas fa-arrow-left"></i>',
					'<i class="fas fa-arrow-right"></i>',
				],
				autoplay: false,
				autoplayTimeout: 1000,
				autoplayHoverPause: true,
				autoWidth: true,
				margin: 20,
				responsive: {
					0: {
						items: 1,
					},
					767: {
						items: 2,
					},
					992: {
						items: 4.2,
					},
				},
			});
		}
		if ($(".wining-prize").length > 0) {
			var testimonialsWidth = $(".wining-prize .container").width();
			var testimonialsWidthOf = $(".wining-prize .container").offset(); // this will return the left and top
			var testimonialsWidthLeft = testimonialsWidthOf.left; // this will return left
			if ($(window).width() > 992) {
				$(".wining-prize .owl-carousel").width(
					testimonialsWidth + testimonialsWidthLeft
				);
			} else {
				$(".wining-prize .owl-carousel").width(testimonialsWidth);
			}
		}
	});

	// Start Slick Nav
	$("#mobile-menu").slicknav({
		prependTo: ".show-mobile-menu",
		allowParentLinks: true,
	});
	// End Slick Nav

	// Sticky Menu
	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (scroll < 300) {
			$(".header-area").removeClass("sticky");
		} else {
			$(".header-area").addClass("sticky");
		}
	});

	// WOW active
	var wow = new WOW({
		boxClass: "wow",
		animateClass: "animated",
		offset: 0,
		mobile: true,
		live: true,
	});
	wow.init();
	//  End Wow

	// One Page Nav
	var top_offset = $(".header-area").height() - 10;
	$(".main-menu").onePageNav({
		currentClass: "active",
		scrollOffset: top_offset,
	});

	//  Scroll Up
	$.scrollUp({
		scrollName: "scrollUp",
		topDistance: "300",
		topSpeed: 300,
		animation: "fade",
		animationInSpeed: 200,
		animationOutSpeed: 200,
		scrollText: '<i class="fa fa-arrow-up"></i>',
		activeOverlay: false,
	});
	//   Scroll Up

	// Magnific Popup
	$(".video-play").magnificPopup({
		type: "iframe",
	});
	//   End  Magnific Popup

	//for menu active class
	$(".portfolio-tab button").on("click", function (event) {
		$(this).siblings(".active").removeClass("active");
		$(this).addClass("active");
		event.preventDefault();
	});

	// Smooth Scroll for IE/ EDGE/ SAFARI
	$("a").on("click", function (event) {
		if (this.hash !== "") {
			event.preventDefault();

			var hash = this.hash;

			$("html, body").animate(
				{
					scrollTop: $(hash).offset().top,
				},
				800,
				function () {
					window.location.hash = hash;
				}
			);
		}
	});
	// End Smooth Scroll for IE/ EDGE/ SAFARI
})(jQuery);
