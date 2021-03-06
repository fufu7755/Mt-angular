//Check
var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
    navigator.userAgent && !navigator.userAgent.match('CriOS');

window.setTimeout(function () {
        $(".tab-btn .item").eq(0).trigger("click")
    },
    1500);

$(document).on("click", ".tab-btn .item", function() {

        if (!$(this).hasClass("active")) {
            banner_index($(this))
        }
        _createTimer();
        timer_slide = window.setInterval(function () {
                banner_index()
            },
            5000)
});

function banner_index(btn_item) {
    var i_now;
    var i_next;
    if (btn_item == null) {
        var btn = $(".tab-btn");
        var num = btn.find(".active").index();
        if (num + 1 == btn.find(".item").length) {
            i_now = num;
            i_next = 0
        } else {
            i_now = num;
            i_next = num + 1
        }
        btn_item = btn.find(".item").eq(i_next);
    } else {
        i_now = btn_item.siblings(".active").index();
        i_next = btn_item.index();
        if (i_now == i_next) {
            return false;
        }
    }
    btn_item.trigger("mouseover").addClass("active").siblings(".active").removeClass("active").trigger("mouseleave");
    var $tab_con = $(".index-banner .tab-con");
    $tab_con.find(".active").removeClass("active").animate({
            opacity: 0
        },
        400);
    $tab_con.find(".item").eq(i_next).addClass("active").animate({
            opacity: 1
        },
        500)
}

var timer_slide;

function _createTimer() {
    window.clearInterval(timer_slide)
}

jQuery(document).ready(function($) {
    $(window).load(function() {
        /* Act on the event */
        var h1 = $(window).height();
        var w1 = $(window).width()
        var h2 =  $('.intro').height();
        var h3 = $('.case-top').height();


        if(w1 > 768) {
            $('.tab-con .item').height(h1 - h2);
        } else {
            if(isSafari) {
                $('.tab-con .item').height(560);

            }else {
                $('.tab-con .item').height(h1 - h2 + 15);
            }
        }
        if(h3 < 180) {
            $('.slogan').css({
                "font-size":"24px"
            });
        }
        if(h3 >= 180) {
            $('.slogan').css({
                "font-size":"36px"
            });
        }
    });
    $(window).resize(function(event) {
        /* Act on the event */
        var h1 = $(window).height();
        var w1 = $(window).width();
        var h2 = $('.intro').height();
        var h3 = $('.case-top').height();
        if(w1 > 768) {
            $('.tab-con .item').height(h1 - h2);
        } else {
            if(isSafari) {

                $('.tab-con .item').height(560);
            }else {
                $('.tab-con .item').height(h1 - h2 + 15);
            }
        }

        if(h3 < 180) {
            $('.slogan').css({
                "font-size":"24px"
            });
        }

        if(h3 >= 180) {
            $('.slogan').css({
                "font-size":"36px"
            });
        }
    });



});

jQuery(document).ready(function($) {

    $(window).scroll(function(){

        if ($(window).scrollTop() > 50) {
            $(".js-transparent").removeClass("transparent");
        }
        else {
            $(".js-transparent").addClass("transparent");
        }
    });


});

jQuery(document).ready(function($) {
    $(window).load(function() {
        /* Act on the event */
        var w_book_item = $('.book_list ul li').width()
        $('.book_list ul li .right').width(w_book_item - 150);
    });
    $(window).resize(function(event) {
        var w_book_item = $('.book_list ul li').width()
        $('.book_list ul li .right').width(w_book_item - 150);
    });

});
