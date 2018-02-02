'use strict';

var occsaions_parent = $('#diningdetail_recommended'),
    occsaions_swiper = occsaions_parent.find('.swiper-container'),
    occsaions_control = occsaions_parent.find('.control');
new Swiper(occsaions_swiper, {
    spaceBetween: 30,
    slidesPerView: 3,
    prevButton: occsaions_parent.find('.left'),
    nextButton: occsaions_parent.find('.right'),
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
//# sourceMappingURL=../maps/diningdetail_recommended.js.map
