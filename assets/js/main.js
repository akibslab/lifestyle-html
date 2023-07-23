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
						autoWidth: false,
					},
					768: {
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

	if ($(".winners_portfolio").length > 0) {
		$(".winners_portfolio").slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: true,
			variableWidth: true,
			arrows: false,
			autoplay: true,
			speed: 3000,
			autoplaySpeed: 2000,
			// cssEase: "linear",
		});
	}
	if ($(".winners_active_2").length > 0) {
		$(".winners_active_2").slick({
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			arrows: false,
			variableWidth: true,
			speed: 5000,
			autoplay: true,
			autoplaySpeed: 0,
			pauseOnHover: false,
			cssEase: "linear",
		});
	}
	if ($(".winners_active_3").length > 0) {
		$(".winners_active_3").slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			centerMode: true,
			variableWidth: true,
			arrows: false,
			speed: 5000,
			autoplay: true,
			autoplaySpeed: 0,
			pauseOnHover: false,
			cssEase: "linear",
		});
	}

	// Sticky Menu
	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (scroll < 300) {
			$(".header-area").removeClass("sticky");
		} else {
			$(".header-area").addClass("sticky");
		}
	});

	$(".menu_bar button").on("click", function () {
		$(".side_menu").addClass("open");
	});
	$(".side_menu .close").on("click", function () {
		$(".side_menu").removeClass("open");
	});

	// background video
	$("#hero-video").vide();
})(jQuery);
