const swiper = new Swiper(".slider__swiper", {
	direction: "horizontal",
	slidesPerView: 1,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	speed: 1000,
	navigation: {
		nextEl: ".slider-next",
		prevEl: ".slider-prev",
	},
});
const btnPlayPause = document.querySelector(".slider__play-pause");
btnPlayPause.addEventListener("click", function () {
	btnPlayPause.classList.toggle("slider__play-pause_paused");
	btnPlayPause.classList.contains("slider__play-pause_paused") ? swiper.autoplay.stop() : swiper.autoplay.start();
});

const swiperVideos = new Swiper(".videos__slider", {
	slidesPerView: 1,
	centeredSlides: true,
	spaceBetween: 10,
	loop: true,
	loopedSlides: 3,
	breakpoints: {
		769: {
			loopedSlides: 5,
		},
	},
});

const thumbsVideos = new Swiper(".videos__thumbs", {
	slidesPerView: 3,
	spaceBetween: 10,
	centeredSlides: false,
	loop: true,
	slideToClickedSlide: true,
	navigation: {
		nextEl: ".videos-next",
		prevEl: ".videos-prev",
	},
	breakpoints: {
		769: {
			slidesPerView: 5,
		},
	},
});

swiperVideos.controller.control = thumbsVideos;
thumbsVideos.controller.control = swiperVideos;

const sliderContainer = document.querySelector(".slider");
const slideSwitch = sliderContainer.querySelectorAll(".slide_switch");
const slides = sliderContainer.querySelectorAll(".swiper-slide");

const iconsWrapperDesktop = sliderContainer.querySelector("#desktop-icons");
const iconsDesktop = iconsWrapperDesktop.querySelectorAll(".slider__ico");
const iconWrappersDesktop = iconsWrapperDesktop.querySelectorAll(".slider__wrapper");

const iconsWrapperMobile = sliderContainer.querySelector("#mobile-icons");
const iconsMobile = iconsWrapperMobile.querySelectorAll(".slider__ico");
const iconWrappersMobile = iconsWrapperMobile.querySelectorAll(".slider__wrapper");
const iconPagesMobile = iconsWrapperMobile.querySelectorAll(".slider__icons_wrapper");

const pageFooter = document.querySelector(".page-footer");
const backButton = pageFooter.querySelector("#back");

window.innerWidth > 768 ? changeIcons(iconsDesktop, iconWrappersDesktop) : changeIcons(iconsMobile, iconWrappersMobile);

backButton.addEventListener("click", () => {
	history.go(-1);
});

function changeIcons(icons, iconWrappers) {
	for (let i = 1; i <= slides.length; i++) {
		if (icons[i - 1] === undefined) {
			break;
		}
		icons[i - 1].addEventListener("click", () => {
			goToSlide(i, iconWrappers[i - 1]);
		});
	}
	swiper.on("slideChange", () => {
		goToSlide(swiper.activeIndex, iconWrappers[swiper.activeIndex - 1]);
	});

	function goToSlide(slide, ico) {
		if (slide === 7) {
			ico = iconWrappers[0];
		}
		if (slide === 0) {
			ico = iconWrappers[5];
		}
		swiper.slideTo(slide, 1000, false);
		iconWrappers.forEach((ico) => {
			ico.classList.remove("slider__ico_active");
		});
		ico.classList.add("slider__ico_active");
		if (window.innerWidth < 769) {
			if (Number(ico.id) > 3) {
				iconPagesMobile.item(1).classList.remove("slider__icons_wrapper_hidden");
				iconPagesMobile.item(0).classList.add("slider__icons_wrapper_hidden");
			} else {
				iconPagesMobile.item(0).classList.remove("slider__icons_wrapper_hidden");
				iconPagesMobile.item(1).classList.add("slider__icons_wrapper_hidden");
			}
		}
	}
}

setInterval(switchSlide, 4000);
function switchSlide() {
	slideSwitch.forEach((slide) => (slide.classList.contains("slide_disabled") ? slide.classList.remove("slide_disabled") : slide.classList.add("slide_disabled")));
}

function runAutoplay() {
	swiper.autoplay.start();
	setTimeout(function () {
		if (swiper.autoplay.running === false) {
			runAutoplay();
		} else {
			clearInterval(checkAutoPlayInterval);
		}
	}, 4000);
}

const checkAutoPlayInterval = setInterval(autoplayCheck, 1000);

function autoplayCheck() {
	if (swiper.autoplay.running === false && !btnPlayPause.classList.contains("slider__play-pause_paused")) {
		console.info("Slider autoplay check each 1 second");
		runAutoplay();
	}
}
