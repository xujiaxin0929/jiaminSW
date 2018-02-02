var offers_parent = $('#hp_offers'),
offers_swiper = offers_parent.find('.swiper-container'),
offers_control = offers_parent.find('.control');
new Swiper(offers_swiper, {
    spaceBetween: 30,
    slidesPerView: 3,
    prevButton: offers_parent.find('.left'),
    nextButton: offers_parent.find('.right'),
    loop:true,
    simulateTouch : false,
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
    onInit: function(swiper) {
        // swiper.slides.length <= swiper.params.slidesPerView ? offers_control.hide() : offers_control.show();
        var img = swiper.container.find('.img img')[0];
        img.onload = function() {
            var _height = $(img).height();
            offers_control.css( 'top' , _height/2 + 'px' );
        }
    },
    onAfterResize: function(swiper) {
        // swiper.slides.length <= swiper.params.slidesPerView ? offers_control.hide() : offers_control.show();
        var _height = swiper.container.find('.img').height();
        offers_control.css( 'top' , _height/2 + 'px' );
    }
})
