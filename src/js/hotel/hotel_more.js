var hotel_more_parent = $('#hotel_more'),
hotel_more_swiper = hotel_more_parent.find('.swiper-container'),
hotel_more_control = hotel_more_parent.find('.control');
new Swiper(hotel_more_swiper, {
    spaceBetween: 30,
    slidesPerView: 2,
    prevButton: hotel_more_parent.find('.left'),
    nextButton: hotel_more_parent.find('.right'),
    loop:true,
    loopAdditionalSlides : 1,
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
    onInit: function(swiper) {
        // swiper.slides.length <= swiper.params.slidesPerView ? offers_control.hide() : offers_control.show();
        var img = swiper.container.find('.img img')[0];
        img.onload = function() {
            var _height = $(img).height();
            hotel_more_control.css( 'top' , _height/2 + 'px' );
        }
    },
    onAfterResize: function(swiper) {
        // swiper.slides.length <= swiper.params.slidesPerView ? offers_control.hide() : offers_control.show();
        var _height = swiper.container.find('.img').height();
        hotel_more_control.css( 'top' , _height/2 + 'px' );
    }
})
