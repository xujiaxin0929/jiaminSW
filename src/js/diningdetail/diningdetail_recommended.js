var recommended_parent = $('#diningdetail_recommended'),
recommended_swiper = recommended_parent.find('.swiper-container'),
recommended_control = recommended_parent.find('.control');
new Swiper(recommended_swiper, {
    spaceBetween: 30,
    slidesPerView: 3,
    prevButton: recommended_parent.find('.left'),
    nextButton: recommended_parent.find('.right'),
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
            recommended_control.css( 'top' , _height/2 + 'px' );
        }
    },
    onAfterResize: function(swiper) {
        // swiper.slides.length <= swiper.params.slidesPerView ? offers_control.hide() : offers_control.show();
        var _height = swiper.container.find('.img').height();
        recommended_control.css( 'top' , _height/2 + 'px' );
    }
})
