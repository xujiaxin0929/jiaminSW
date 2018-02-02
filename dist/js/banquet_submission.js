'use strict';

$(function () {

    $('.btn-info').on('click', function (e) {
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

    var verification = {
        input: null,
        init: function init(config) {
            this.input = $(config.id);
            this.bind();
            return this;
        },
        bind: function bind() {
            var self = this;
            this.input.on('blur', function () {
                self.render();
            });
        },
        isName: function isName(name) {
            var pattern = /^[\u4E00-\u9FA5]{1,6}$/;
            return pattern.test(name);
        },
        render: function render(name) {
            if ($.trim($(name.id).val()).length == 0) {
                $(".error-name").css('display', 'block');
            } else {
                if (isChinaName($.trim($(name.id).val())) == false) {
                    $(".error-name").css('display', 'block');
                } else {
                    $(".error-name").css('display', 'none');
                }
            }
        }
    };

    $('#modal-date').dateRangePicker({
        language: 'cn',
        separator: ' - ',
        autoClose: true,
        startDate: formatDate(new Date()),
        customTopBar: ' ',
        format: 'YYYY$)ADjMMTBDDHU',
        showShortcuts: true,
        swapTime: true,
        singleMonth: true,
        singleDate: true
    });
});

$(function () {
    textCount.init({ id: '#J_input' }).render();
});
//# sourceMappingURL=../maps/banquet_submission.js.map
