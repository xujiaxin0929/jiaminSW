'use strict';

var hotel_more_parent = $('#hotel_more'),
    hotel_more_swiper = hotel_more_parent.find('.swiper-container'),
    hotel_more_control = hotel_more_parent.find('.control');
new Swiper(hotel_more_swiper, {
    spaceBetween: 30,
    slidesPerView: 2,
    prevButton: hotel_more_parent.find('.left'),
    nextButton: hotel_more_parent.find('.right'),
    loop: true,
    loopAdditionalSlides: 1,
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
            slidesPerView: 2
        }
    },
    onInit: function onInit(swiper) {
        swiper.params.slidesPerView < swiper.slides.length - 2 ? hotel_more_control.show() : hotel_more_control.hide();
    },
    onAfterResize: function onAfterResize(swiper) {
        swiper.params.slidesPerView < swiper.slides.length - 2 ? hotel_more_control.show() : hotel_more_control.hide();
    }
});
//# sourceMappingURL=../maps/hotel_more.js.map
