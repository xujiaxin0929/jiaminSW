$(function () {

    var bsWidth;
    var productList;
    var containerWidth, afterWidth;
    var load_more_click = 1;
    bsWidth = $(window).width();
    calculateWidth(bsWidth)
    $(window).on('resize', function () {
        bsWidth = $(window).width();
        calculateWidth(bsWidth)
    })

    load_more(load_more_click);
    $(window).scroll(function () {

        var scrollTop = $(window).scrollTop();  //页面向上滚动的距离
        var windowHeight = $(window).height(); // 浏览器自身的高度
        // var offsetTop = $(".exc_load_more_btn").offset().top;  //目标相对于document顶部的位置
        var offsetTop = $('#sm_footer_section').offset().top;

        if (offsetTop < (scrollTop + windowHeight) && offsetTop > scrollTop) { 
            if (load_more_click == 1) {
                load_more_click = 2
            }
            load_more(load_more_click);
            load_more_click++;
        }
    })

    function load_more(load_more_click) {
        $(".product_list .row > div").removeClass("ok");
        var load_more_lg = $(".product_list .row > div").length;
        var j = 3 * load_more_click;
        for (var i = 0; i <= load_more_lg; i++) {
            if (i < j) {
                $(".product_list .row > div:eq(" + i + ")").addClass("ok");
            }
        }

        var load_more_show = $(".product_list .row > div").length;
        var load_more_ok = $(".product_list .row .ok").length;
        var remaing_cunt = load_more_show - load_more_ok;

        $(".load_more_btn span").html(remaing_cunt);


        if (remaing_cunt == 0) {
            $(".load_more_btn").hide();
        }
        else {
            $(".load_more_btn").show();
        }
    }

    function calculateWidth(bsWidth) {
        if (bsWidth > 991) {
            containerWidth = $('.container').css('width');
            afterWidth = (parseInt(containerWidth) - 60) / 3;
            $('.product_list > .row > div').css('width', '' + afterWidth);
        } else {
            $('.product_list > .row > div').css('width', '100%');
        }
    }


})