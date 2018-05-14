$(document).ready(function() {
    (function() {
        //首页顶部横向导航
        var i = 0;
        var t = setInterval(move, 1500);
        $('.couserListLeft').hover(function() {
            $('.td1Hiden').slideToggle(200);
        });
        $('.td1').mouseover(function() {
            var index = $(this).index();
            $('.td1Hiden ul').eq(index).css('background', '#F0EAEA').siblings().css('background', '#FFFAFA');
        });
        //极客大图片主banner轮播图star
        $('.Hnav .main1').hover(function(event) {
            var index = $(this).index();
            $('.HnavSecond').css('display', 'block');
            $('.HnavSecond ul').eq(index).css('display', 'block').siblings().css('display', 'none');
            $(this).css('border-left', '1px solid #27EA27').siblings().css('border-left', '0');
            $(this).children('span').css('display', 'none');
        }, function() {
            $(this).children('span').css('display', 'block');
            $('.HnavSecond').css('display', 'none');
        });
        var size = $('.img li').size();
        for (i = 1; i <= size; i++) {
            var li = "<li>" + i + "</li>";
            $('.num').append(li);
        }
        //手动切换
        $('.img li').eq(0).show();
        $('.num li').eq(0).addClass('active');
        $('.num li').mouseover(function() {

            $(this).addClass("active").siblings().removeClass('active');
            var index = $(this).index();
            i = index;
            $('.img li').eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
        });
        function moveL() {
            i--;
            if (i == -1) {
                i = size - 1;
            }
            //console.log($('.num li').eq(i));
            $('.num li').eq(i).addClass('active').siblings().removeClass('active');
            $('.img li').eq(i).fadeIn(300).siblings().fadeOut(300);
        }
        function move() {
            i++;
            if (i == size) {
                i = 0;
            }
            //console.log($('.num li').eq(i));
            $('.num li').eq(i).addClass('active').siblings().removeClass('active');
            $('.img li').eq(i).fadeIn(300).siblings().fadeOut(300);
        }
        $('.bannerPhoto').hover(function() {
            clearInterval(t);
        }, function() {
            t = setInterval(move, 1500);
        });
        $('.sideLeft').click(function(event) {
            moveL();
        });
        $('.sideRight').click(function(event) {
            move();
        });
    }());
    //极客大图片主banner轮播图ending
    //职业路径路径
    var te = $('.jobCourse .jobcontent');
    te.children('.jbpt').mouseover(function(event) {
        $(this).css('border', '1px solid #35b558').siblings().css('border', '1px solid #ccc');
        var tt = $(this).children('.jcbtn');
        tt.css({
            "background-color": "#35b558",
            "color": "#fff"
        });
        $(this).siblings().children('.jcbtn').css({
            "background-color": "#fff",
            "color": "#35b558"
        });
    });

    $('.kdpt').hover(function(event) {
        $(this).children('div').removeClass('Rkdpthover').stop().addClass('kdpthover');
    }, function() {
        $(this).children('div').removeClass('kdpthover').stop().addClass('Rkdpthover');
    });

    $('.gdcontent').hover(function(event) {
        $(this).children('.gdbody').css('opacity', '0.3');
        $(this).children('.gdfl').css('display', 'block');

    }, function() {
        $(this).children('.gdbody').css('opacity', '1');
        $(this).children('.gdfl').css('display', 'none');
    });
    //右侧Rnav 隐藏快的显示
    $('.rnav_img').hover(function() {
        $('.Rnav3hide').fadeIn(300);
        $('.lihiden').eq(0).fadeIn(300);
        $('.Rnav3hide>ul li').mouseover(function() {
            var index = $(this).index();
            $('.lihiden').eq(0).fadeOut(300);
            $('.lihiden').eq(index).fadeIn(300).siblings().fadeOut(300);
            //console.log(index);
        });
    }, function() {
        $('.Rnav3hide').fadeOut(300);
    });


    //右侧的悬浮部分star
    $('.gotop .to-top').hide();

    window.onscroll = function() {
            var top = document.documentElement.scrollTop || document.body.scrollTop;
            //console.log(top>70);
            if (top > 70) {
                $('.gotop .to-top').fadeIn(100);
            } else {
                $('.gotop .to-top').fadeOut(100);
            }
        };
        //置顶事件
    $('.gotop .to-top').click(function() {
        document.body.scrollTop = 0;
        //document.body.scrollTop=document.body.scrollHeight;置底
    });
});