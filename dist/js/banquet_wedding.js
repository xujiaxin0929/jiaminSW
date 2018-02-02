"use strict";

var spv = 'auto';
if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/9./i) == "9.") {
    spv = 1.48;
}
var swiper = new Swiper('#banquet_wedding .auto-swiper-container', {
    // autoplay:3000,
    loop: true,
    loopedSlides: 3,
    spaceBetween: 32,
    speed: 550,
    centeredSlides: true,
    slidesPerView: spv,
    pagination: '.swiper-pagination',
    nextButton: '.right',
    prevButton: '.left',
    breakpoints: {
        767: {
            //xs
            spaceBetween: 5
        }
    }
});

var occsaions_parent = $('#banquet_wedding'),
    occsaions_swiper = occsaions_parent.find('.swiper-container-wrapper .swiper-container'),
    occsaions_control = occsaions_parent.find('.swiper-container-wrapper .control');
new Swiper(occsaions_swiper, {
    spaceBetween: 30,
    slidesPerView: 3,
    prevButton: occsaions_parent.find('.swiper-container-wrapper .left'),
    nextButton: occsaions_parent.find('.swiper-container-wrapper .right'),
    loop: true,
    simulateTouch: false,
    breakpoints: {
        500: {
            //xs
            slidesPerView: 1
        },
        991: {
            //sm
            slidesPerView: 2
        },
        1199: {
            //md
            slidesPerView: 3
        }
    },
    onInit: function onInit(swiper) {
        swiper.slides.length <= swiper.params.slidesPerView ? occsaions_control.hide() : occsaions_control.show();
    },
    onAfterResize: function onAfterResize(swiper) {
        swiper.slides.length <= swiper.params.slidesPerView ? occsaions_control.hide() : occsaions_control.show();
    }
});
//# sourceMappingURL=../maps/banquet_wedding.js.map
