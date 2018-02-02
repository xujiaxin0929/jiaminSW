'use strict';

var hotel_testimonials = $('#hotel_testimonials'),
    hotel_testimonials_container = $('#hotel_testimonials').find('.swiper-container');
new Swiper(hotel_testimonials_container, {
    centeredSlides: true,
    spaceBetween: 50,
    loop: true,
    paginationClickable: true,
    pagination: hotel_testimonials.find('.swiper-pagination')
});
//# sourceMappingURL=../maps/hotel_testimonials.js.map
