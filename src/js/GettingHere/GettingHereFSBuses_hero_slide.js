$(function () {

    $('.tab_bar>li').show();
    

    $('.tab_bar').on('click',function(e){

        e.stopPropagation();
        $('.tab_parking').toggleClass('m_show');
        $('.tab_buses').toggleClass('m_show');
    })

    $('.tab_buses').on('click',function(){
        $('.getting_Buses').show();
        $('.getting_Parking').hide();
    })
    $('.tab_parking').on('click',function(){
        $('.getting_Buses').hide();
        $('.getting_Parking').show();
    })

   
    $('.get-content-show').on('click',function(){
        $('.get_content-hide').toggle();
        $(this).toggleClass('change_ico_bottom');

        var hasClass = $(this).hasClass("change_ico_bottom");
        console.log(hasClass)
        if(hasClass == false){
            $('.get-content-show > .glyphicon').removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down')
        }else{
            $('.get-content-show > .glyphicon').removeClass('glyphicon-menu-down').addClass('glyphicon-menu-up')
        }
    })

    $('.get-title-show').on('click',function(){
        $('.get_title_message').toggle();
        $('.address_prompt').toggle();
        $(this).toggleClass('change_ico_top');

        var p_hasClass = $(this).hasClass("change_ico_top");
        console.log(p_hasClass)
        if(p_hasClass == false){
            $('.get-title-show > .glyphicon').removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down')
        }else{
            $('.get-title-show > .glyphicon').removeClass('glyphicon-menu-down').addClass('glyphicon-menu-up')
        }
    })


     // var windowLocation = window.location.href;
    // // alert(windowLocation);

    // var newWindowLocation = windowLocation + '#Buses';
    // // alert(newWindowLocation);

    // var oldWindowLocation = GetQueryString("id")
    // // alert(oldWindowLocation)
    // if(oldWindowLocation == null){
    //     window.location.href = newWindowLocation
    // }

    

    // function GetQueryString(name) {
    //     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //     var r = window.location.search.substr(1).match(reg);
    //     if (r != null) return unescape(r[2]); return null;
    // }

    // $('.tab_bar .tab_common').on('click', function (e) {
    //     e.preventDefault();
    //     // alert(1)
    //     var clientWidth = $(window).width();
    //     // alert(clientWidth)
    //     if (clientWidth > 991) {
    //         $(this).addClass('active').siblings().removeClass('active');
    //     } else {
    //         $(this).addClass('active').siblings().removeClass('active');
    //         $('#tab_show').siblings().toggleClass('m_show');
    //     }


    // })


})