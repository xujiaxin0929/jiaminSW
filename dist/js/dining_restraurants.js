'use strict';

var occsaions_parent = $('#dining_restraurants'),
    occsaions_swiper = occsaions_parent.find('.swiper-container'),
    occsaions_control = occsaions_parent.find('.control');

var swiper = buildSwiper($(window).width() < 991);

function buildSwiper(bool) {
    var swiper = new Swiper(occsaions_swiper, {
        spaceBetween: 30,
        slidesPerView: bool ? 1 : 3,
        slidesPerColumn: bool ? 1 : 3,
        slidesPerColumnFill: 'row',
        prevButton: occsaions_parent.find('.left'),
        nextButton: occsaions_parent.find('.right'),
        loop: bool,
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
        }
    });
    bool ? occsaions_control.show() : occsaions_control.hide();
    return swiper;
}
// $(window).on("resize", function() {
//     console.log(swiper);
//     swiper.destroy();
//     buildSwiper($(window).width() < 991);
// })
//# sourceMappingURL=../maps/dining_restraurants.js.map
