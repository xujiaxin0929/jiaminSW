+
function($) {
    'use strict';
    var SwiperBG = function(element) {
        this.$element = $(element)
            // this.$bgs = $(element).find('.slide-bg')
        this.resetSize()
        $(window).on('resize', $.proxy(this.resetSize, this))

        new Swiper($(element), {
            direction: 'horizontal',
            loop: true,
            pagination: $(element).find('.swiper-pagination')[0],
            paginationClickable: true,
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next',
            observer: true,
            observeParent: true
        })

        $(element).css('visibility', 'visible').hide().fadeIn()
        $(window).trigger('resize');
    }
    SwiperBG.prototype.resetSize = function() {
        var $bgs = this.findBg(),
        _width = this.findWidth(),
        _height = this.findHeight(),
        // In the test
        test = this.$element.hasClass('test'),
        han_width,han_height;
        // if(_width > 767) {
        //     han_width = 1440;
        //     han_height = 770;
        // }else{
        //     han_width = 750;
        //     han_height = 1092;
        // }
        if(_width < 767 && test) {
            han_width = 750;
            han_height = 1092;
        }else{
            han_width = 1440;
            han_height = 770;
        }
        if (_width / _height > han_width / han_height) {
            var _w = _width
            var _h = Math.round(_width * han_height / han_width)
            $bgs.css({
                left: 0,
                top: Math.round((_height - _h) / 2) + 'px',
                width: _w + 'px',
                height: _h + 'px',
            })
        } else {
            var _w = Math.round(_height * han_width / han_height)
            var _h = _height
            $bgs.css({
                left: -Math.round((_w - _width) / 2) + 'px',
                top: 0,
                width: _w + 'px',
                height: _h + 'px',
            })
        }

    }

    SwiperBG.prototype.findWidth = function() {
        return $(window).width();
    }
    SwiperBG.prototype.findHeight = function() {
        return $(window).height();
    }
    SwiperBG.prototype.findBg = function() {
        console.log(this.$element.find('.slide-bg').length);
        return this.$element.find('.slide-bg');
    }

    function Plugin(option) {
        return this.each(function() {
            new SwiperBG(this)
        })
    }

    var old = $.fn.swiperBG

    $.fn.swiperBG = Plugin
    $.fn.swiperBG.Constructor = SwiperBG


    // NO CONFLICT
    // ====================

    $.fn.swiperBG.noConflict = function() {
        $.fn.swiperBG = old
        return this
    }

    $(function() {
        Plugin.call($('#hp_hero_slideshow_09'))
    })

}(jQuery);
