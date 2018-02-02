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
            spaceBetween: 5,
        }
    }
});

var wedding_parent = $('#banquet_wedding'),
    wedding_swiper = wedding_parent.find('.swiper-container-wrapper .swiper-container'),
    wedding_control = wedding_parent.find('.swiper-container-wrapper .control');
new Swiper(wedding_swiper, {
    spaceBetween: 30,
    slidesPerView: 3,
    prevButton: wedding_parent.find('.swiper-container-wrapper .left'),
    nextButton: wedding_parent.find('.swiper-container-wrapper .right'),
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
    onInit: function(swiper) {
        // swiper.slides.length <= swiper.params.slidesPerView ? offers_control.hide() : offers_control.show();
        var img = swiper.container.find('.img img')[0];
        img.onload = function() {
            var _height = $(img).height();
            wedding_control.css( 'top' , _height/2 + 'px' );
        }
    },
    onAfterResize: function(swiper) {
        // swiper.slides.length <= swiper.params.slidesPerView ? offers_control.hide() : offers_control.show();
        var _height = swiper.container.find('.img').height();
        wedding_control.css( 'top' , _height/2 + 'px' );
    }
})
