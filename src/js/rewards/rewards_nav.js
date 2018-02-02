$(function () {

    $('.tab_bar>li').show();
    $('.tab_bar .tab_common').on('click', function (e) {
        e.preventDefault();
        // alert(1)
        var indexNum = $(this).index();
        indexNum = indexNum - 1;
        var clientWidth = $(window).width();
         $('.rewards_common').eq(indexNum).removeClass('rewards_box_none').siblings().addClass('rewards_box_none')
        //        if(indexNum == 4){
        //     $('.rewards_all_2').removeClass('rewards_box_none');
        //     $('.rewards_all_1').addClass('rewards_box_none');
        // }else{
        //      $('.rewards_all_2').addClass('rewards_box_none');
        //     $('.rewards_all_1').removeClass('rewards_box_none');
        // }
        // alert(clientWidth)
        if (clientWidth > 991) {
            $(this).addClass('active').siblings().removeClass('active');
        } else {
             $('#tab_show').siblings().toggleClass('m_show');
            $('.tab_bar .m_tab_check').on('click', function () {
                $(this).addClass('active').siblings().removeClass('active');
                var current_val = $(this).text();
                $('#tab_show a').html(current_val);
            })
        }
    });

    // $('.tab_bar>li').show();
    // $('.tab_bar .tab_common').on('click', function (e) {
    //     e.preventDefault();
    //     // alert(1)
    //     // 
    //     var clientWidth = $(window).width();
    //     // alert(clientWidth)
    //     if (clientWidth > 991) {
    //         $(this).addClass('active').siblings().removeClass('active');
    //     } else {
    //         $('#tab_show').siblings().toggleClass('m_show');
    //         $('.tab_bar .m_tab_check').on('click', function () {
    //             $(this).addClass('active').siblings().removeClass('active');
    //             var current_val = $(this).text();
    //             $('#tab_show a').html(current_val);
    //         })
    //     }


    // })


})