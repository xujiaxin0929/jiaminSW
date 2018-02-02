'use strict';

var $booking_tab1 = $("#bookingbar-tab1"),
    menu = $('.sm_top_menu_03'),

// re = /galaxyhotel.html/gi,
beforeScrollTop = 0,
    $btn_toggle = $('#booking-fixed .navbar-toggle'),
    _container = $('#booking-fixed');
$(function () {
    $("#date1").dateRangePicker({
        language: 'cn',
        separator: ' - ',
        autoClose: true,
        customTopBar: ' ',
        format: 'YYYY年MM月DD日',
        startDate: formatDate(new Date()),
        showShortcuts: true,
        getValue: function getValue() {
            return this.innerHTML;
        },
        setValue: function setValue(s) {
            this.innerHTML = s;
        }
    }).bind('datepicker-closed', function () {
        $(this).removeClass('open');
    }).bind('datepicker-open', function () {
        $(this).removeClass('open');
    });
    $("#date1").click(function (event) {
        if ($(this).hasClass('open')) {
            $("#date1").data('dateRangePicker').close();
            $(this).removeClass('open');
            return;
        }
        $(this).addClass('open');
        var _left = $(this).offset().left;
        var $dpw = $(".date-picker-wrapper");
        $dpw.css('left', _left);
        if ($(window).width() < 560) {
            var _width = $(this).innerWidth();
            $dpw.find('.month-wrapper').innerWidth(_width);
        }
    });
    if ($('#date2').length > 0) {
        $("#date2").dateRangePicker({
            language: 'cn',
            separator: ' - ',
            autoClose: true,
            customTopBar: ' ',
            format: 'YYYY年MM月DD日',
            startDate: formatDate(new Date()),
            showShortcuts: true,
            getValue: function getValue() {
                return this.innerHTML;
            },
            setValue: function setValue(s) {
                this.innerHTML = s;
            }
        }).bind('datepicker-closed', function () {
            $("#date2").removeClass('open');
        }).bind('datepicker-open', function () {
            $(this).addClass('date2-datepicker');
        });
        $("#date2").click(function (event) {
            if ($(this).hasClass('open')) {
                $("#date2").data('dateRangePicker').close();
                $(this).removeClass('open');
                return;
            }
            $(this).addClass('open');
            var _left = $(this).offset().left;
            var $dpw = $(".date-picker-wrapper");
            $dpw.css('left', _left);
            if ($(window).width() < 560) {
                var _width = $(this).innerWidth();
                $dpw.find('.month-wrapper').width(_width);
            }
        });
    }
    $('.hotel-select,.number-people-select').on('click', function () {
        if ($("#date1").length > 0) {
            $("#date1").data('dateRangePicker').close();
        }
        if ($("#date2").length > 0) {
            $("#date2").data('dateRangePicker').close();
        }
        if ($("#date3").length > 0) {
            $("#date3").data('dateRangePicker').close();
        }
    });
    $('.hp-select li a').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).closest('.dropdown').find('.result:visible').text($(this).text());
        $(this).closest('.dropdown-menu').trigger('click');
    });
    $('.dropdown-menu1 .title').on('click', function (e) {
        e.stopPropagation();
    });
    $('.nps-cancel').click(function () {
        $('#select-result3').text(2);
        $('#adult-num').text(1);
        $('#children-num').text(1);
    });

    // SM only hotel page show skinny bookingbar
    // function booking_fixed_show() {
    //     var current_height = $(window).scrollTop(),
    //         _width = $(window).width();
    //     if (_width > 991) {
    //         if (current_height > booking_height) {
    //             if (_container.is(":hidden")) {
    //                 menu.hide().next('#booking-fixed').show();
    //             }
    //         } else {
    //             if (_container.is(":visible")) {
    //                 _container.hide().prev().show();
    //             }
    //             if ($btn_toggle.is(":hidden")) {
    //                 $btn_toggle.show();
    //             }
    //             menu.removeClass('rel');
    //         }
    //     }
    // }
    // if ($(window).width() > 991) {
    //     beforeScrollTop = document.body.scrollTop;
    //     $(window).on("load", function() {
    //         booking_fixed_show();
    //         setTimeout(function() {$(window).trigger('resize')},1000)
    //     });
    //     $(window).on("resize", function() {
    //         booking_fixed_show();
    //     });
    //     $(window).on("scroll", function() {
    //         booking_fixed_show();
    //         var afterScrollTop = $(window).scrollTop(),
    //             delta = afterScrollTop - beforeScrollTop;
    //         if (delta === 0) return false;
    //         if (delta > 0) {
    //             if ($('.sm_top_menu_03').hasClass('rel')) {
    //                 $('.sm_top_menu_03').removeClass('rel').slideUp(350);
    //                 $btn_toggle.fadeIn();
    //             }
    //         }
    //         beforeScrollTop = afterScrollTop;
    //     });
    //     $btn_toggle.click(function() {
    //         $('.sm_top_menu_03').toggleClass('rel').slideToggle(350);
    //         $(this).fadeOut();
    //     });
    // }
});
//# sourceMappingURL=../maps/hp_bookingbar_10.js.map
