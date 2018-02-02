$(function () {

    $('.btn-info,.wedding_btn_info').on('click', function (e) {
        e.preventDefault();
        // alert(1)
        $('#banquet_submission').fadeIn();
        $('body').css({
            'height': "100%",
            "overflow": "hidden"
        });
        $('html').css({
            "overflow": 'hidden'
            // 'height': "100%"
        });
        // $('.head-nav2').hide();
    });
    $('.formmodel_opc').on('click', function (e) {
        if (e.target.className == 'formmodel_opc' || e.target.className == 'form-modal-close') {
            $('#banquet_submission').fadeOut();
            $('body').css({
                'height': "auto"
            });
            $('html').css({
                'overflow': 'auto'
            });
        }
        // $('.head-nav2').show();
    });
    
    
  $('input').focus(function () {
    $(this).parent().addClass('active').siblings().removeClass('active');
  })
  $('.btn-order-from').on('click', function (e) {
    e.preventDefault();
    formValidate();
    // $(':input').val('')
    // $('.form-modal').fadeOut();
  })

  $('.chinaName').on('blur', function () {

    name()
  })
  $('.phone').on('blur', function () {

    phone()
  })
  $('.email').on('blur', function () {

    email()
  })
  $('.gs').on('blur', function () {

    gs()
  })
  $('.code').on('blur', function () {

    gs()
  })



  function formValidate() {

    name();
    phone();
    email();
    gs();
    number();

  }

  function name() {
    //判断姓名
    if ($.trim($('.chinaName').val()).length == 0) {
        $(".form-group-chinaName").css('border-color', 'red');
      
    } else {
      if (isChinaName($.trim($('.chinaName').val())) == false) {
        $(".form-group-chinaName").css('border-color', 'red');
      } else {
        $(".form-group-chinaName").css('border-color', '#cccccc');
      }
    }
  }

  function phone() {
    // 判断手机号码
    if ($.trim($('.phone').val()).length == 0) {
        $(".form-group-phone").css('border-color', 'red');
    } else {
      if (isPhoneNo($.trim($('.phone').val())) == false || $('.phone').val().length <= 10) {
        $(".form-group-phone").css('border-color', 'red');
        // $('.phone').focus();
        // return false;
      } else {
        $(".form-group-phone").css('border-color', '#cccccc');
        // alert('手机号验证成功')
      }
    }
  }
  function email() {
    // 判断邮箱
    if ($.trim($('.email').val()).length == 0) {
      $(".form-group-email").css('border-color', 'red');
      // $('.email').focus();
      // return false;
    } else {
      if (isEmail($.trim($('.email').val())) == false) {
        $(".form-group-email").css('border-color', 'red');
        // $('.email').focus();
        // return false;
      } else {
        // alert($('.email').val())
        $(".form-group-email").css('border-color', '#cccccc');
        // alert('邮箱验证成功')
      }
    }
  }
  function gs() {
    // 判断公司
    if ($.trim($('.gs').val()).length == 0) {
      $(".form-group-gs").css('border-color', 'red');
      // $('.email').focus();
      // return false;
    } else {
      if (isGs($.trim($('.gs').val())) == false) {
        $(".form-group-gs").css('border-color', 'red');
        // $('.email').focus();
        // return false;
      } else {
        // alert($('.email').val())
        $(".form-group-gs").css('border-color', '#cccccc');
        // alert('邮箱验证成功')
      }
    }
  }

  function number() {
    //判断人数
    if ($.trim($('.code').val()).length >= 6 || $.trim($('.code').val()).length <= 4) {
      $(".form-group-code").css('border-color', 'red');
    } else {
      if (isNumber($.trim($('.code').val()) == false)) {
        $(".form-group-code").css('border-color', 'red');
      } else {
        $(".form-group-code").css('border-color', '#cccccc');
        // alert('人数验证成功')
      }
    }
  }
  //正则姓名
  function isChinaName(name) {
    var pattern = /^[\u4E00-\u9FA5]{1,6}$/;
    return pattern.test(name);
  }
   //正则公司
   function isGs(name) {
    var pattern = /^[\u4E00-\u9FA5]{1,36}$/;
    return pattern.test(name);
  }

  //正则电话
  function isPhoneNo(phone) {
    var pattern = /^[1][3,4,5,7,8][0-9]{9}$/;
    return pattern.test(phone);
  }
  //正则邮箱
  function isEmail(email) {
    
    var pattern = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    return pattern.test(email);
  }

  function isNumber(number) {
    var pattern = /^[0-9]*$/;
    return pattern.test(number);
  }

  
   
    var _date = $('#modal-date');
    _date.dateRangePicker({
        language: 'cn',
        separator: ' - ',
        autoClose: true,
        startDate: formatDate(new Date()),
        customTopBar: ' ',
        format: 'YYYY.MM.DD',
        showShortcuts: true,
        swapTime: true,
        singleMonth: true,
        singleDate: true
    }).bind('datepicker-closed', function() {
        $(this).removeClass('open');
    }).bind('datepicker-open', function() {
        $(this).addClass('open');
        // $('.date-picker-wrapper').css('left',_date.offset().left);
    });
    _date.on('click', function() {
      $('.date-picker-wrapper').css('left',_date.offset().left);
    });
    $('.formmodel_opc').on('scroll', function() {
        if(_date.hasClass('open')) {
            $('#modal-date').data('dateRangePicker').close();
        }
    });
});


