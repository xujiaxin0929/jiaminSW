'use strict';

$(function () {

    $('.btn').on('click', function (e) {
        e.preventDefault();
        formValidate();
        var length = $('select').val().length;
        console.log(length);
    });

    $('.name').on('blur', function () {
        name();
    });
    $('.email').on('blur', function () {
        email();
    });

    $('.tel').on('blur', function () {
        tel();
    });
    $('.textarea').on('blur', function () {
        textarea();
    });
    function formValidate() {
        select();
        name();
        email();
        tel();
        textarea();
    }

    function select() {
        if ($.trim($('.select').val()).length == 0) {
            $(".contUs_select").css('border-color', "red");
            $(".select_ico_box span").css('color', 'red');
        } else {
            $(".contUs_select").css('border-color', "#bbbbbb");
            $(".select_ico_box span").css('color', '#343434');
        }
    }

    function name() {
        if ($.trim($('.name').val()).length == 0) {
            $(".name").css('border-color', "red");
            $(".name_ico_box span").css('color', 'red');
        } else {
            $(".name").css('border-color', "#bbbbbb");
            $(".name_ico_box span").css('color', '#343434');
        }
    }

    function email() {
        if ($.trim($('.email').val()).length == 0) {
            $(".email").css('border-color', "red");
            $(".email_ico_box span").css('color', 'red');
        } else {
            $(".email").css('border-color', "#bbbbbb");
            $(".email_ico_box span").css('color', '#343434');
        }
    }

    function tel() {
        if ($.trim($('.tel').val()).length == 0) {
            $(".tel").css('border-color', "red");
            $(".tel_ico_box span").css('color', 'red');
        } else {
            $(".tel").css('border-color', "#bbbbbb");
            $(".tel_ico_box span").css('color', '#343434');
        }
    }
    function textarea() {
        if ($.trim($('.textarea').val()).length == 0) {
            $(".textarea").css({
                'border-color': "red"
            });
            $(".textarea").addClass('textarea_change');
        } else {
            $(".textarea").css('border-color', "#bbbbbb");
            $(".textarea").removeClass('textarea_change');
        }
    }

    /**
     *  var selectValue = $('select').val();
        $('select option').each(function(ele,index){
        if($(ele).attr('value') == selectValue){
        alert('被选中');
        }
        });
     */
});
//# sourceMappingURL=../maps/contactUs_content.js.map
