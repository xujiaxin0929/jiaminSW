function booking_fixed_show() {
    var current_height = $(window).scrollTop(),
        _width = $(window).width();
    if (_width > 991) {
        if (current_height > booking_height) {
            if (_container.is(":hidden")) {
                menu.hide().next('#booking-fixed').show();
            }
        } else {
            if (_container.is(":visible")) {
                _container.hide().prev().show();
            }
            if ($btn_toggle.is(":hidden")) {
                $btn_toggle.show();
            }
            menu.removeClass('rel');
        }
    }
}
if ($(window).width() > 991) {
    beforeScrollTop = document.body.scrollTop;
    $(window).on("load", function() {
        booking_fixed_show();
        setTimeout(function() { $(window).trigger('resize') }, 1000)
    });
    $(window).on("resize", function() {
        booking_fixed_show();
    });
    $(window).on("scroll", function() {
        booking_fixed_show();
        var afterScrollTop = $(window).scrollTop(),
            delta = afterScrollTop - beforeScrollTop;
        if (delta === 0) return false;
        if (delta > 0) {
            if ($('.sm_top_menu_03').hasClass('rel')) {
                $('.sm_top_menu_03').removeClass('rel').slideUp(350);
                $btn_toggle.fadeIn();
            }
        }
        beforeScrollTop = afterScrollTop;
    });
    $btn_toggle.click(function() {
        $('.sm_top_menu_03').toggleClass('rel').slideToggle(350);
        $(this).fadeOut();
    });
}
