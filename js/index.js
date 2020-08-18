$(document).ready(function() {
    const $cont = $('.cont');
    const $slide = $('.slide');
    const $closeBtn = $('.slide__close');
    const $text = $('.slide__text');
    const $iconTwitter = $('.icon-link--twitter');
    const $container = $('.slide__container-content');
    const $bgdark = $('.slide__bg-dark');
    const numSlides = 5;
    const initialAnimDur = 3000;
    const animDelay = 1000;
    let initialAnim = true;
    let clickAnim = false;
    var animation = false,
        animDur = 1000,
        $row = $('.box__row'),
        $cell = $('.box__row-cell'),
        $content = $('.box__content'),
        $closeBtn2 = $('.box__close');

    /*Работа блока при нажатии на выбранный блок*/
    $(document).on('click', '.slide__bg-dark', function() {
        if (initialAnim || clickAnim) return;
        let _this = $(this).parent();
        let target = +_this.attr('data-target');
        clickAnim = true;

        _this.css({
            'transform': 'translate3d(-100%, 0, 0)',
            'transition': '750ms',
            'cursor': 'default'
        });

        for(let i = target, length = $slide.length; i < length; i++) {
            $('.slide--' + (i + 1)).css({
                'transform': 'translate3d(0, 0, 0)',
                'transition': '750ms'
            })
        }

        for(let i = target, length = $slide.length; i > 1; i--) {
            $('.slide--' + (i - 1)).css({
                'transform': 'translate3d(-150%, 0, 0)',
                'transition': '750ms'
            })
        }

        setTimeout(function() {
            $slide.not(_this).find('.slide__bg-dark').css({
                'opacity': '0'
            })
        }, 750);

        $closeBtn.addClass('show-close');
        $iconTwitter.addClass('icon-show');

        var animFalse = function() {
            animation = false;
        };

        var active = function() {
            if (animation) return;
            var cellData = $(this).data('cell');
            var $content = $('.box__content[data-content=' + cellData + ']');
            animation = true;

            $cell.addClass('cell-fade');
            $(this).addClass('active');
            $content.addClass('show-content');
            $closeBtn2.addClass('box-close-active');

            _this.find('.box-close-active').css({
                'display': 'block',
                'transition': '2s'
            });

            $closeBtn.removeClass('show-close');
            $iconTwitter.removeClass('icon-show');

            setTimeout(animFalse, animDur);
        };

        var close = function() {
            animation = true;

            $cell.removeClass('active cell-fade');
            $content.removeClass('show-content');
            $(this).removeClass('box-close-active');

            _this.find('.box__close').css({
                'display': 'none'
            });

            $closeBtn.addClass('show-close');
            $iconTwitter.addClass('icon-show');

            setTimeout(animFalse, animDur);
        };

        $row.on('click', '.box__row-cell', active);
        $closeBtn2.on('click', close);

        $cell.on({
            mouseenter: function() {
                $cell.addClass('hover-cell');
                $(this).removeClass('hover-cell');
            },
            mouseleave: function() {
                $cell.removeClass('hover-cell');
            }
        });

        _this.find('.slide__bg-dark').css({
            'z-index': '1'
        });

        _this.find('.slide__text').css({
            'display': 'none'
        });

        $container.css({
            'display': 'flex'
        });
    });
    /*Работа блока при наведении курсора*/
    $(document).on('mousemove', '.slide', function() {
        if(initialAnim || clickAnim) return;
        let _this = $(this);
        let target = +_this.attr('data-target');

        _this.css({
            'transform': 'translate3d(-' + (((100 / numSlides) * (numSlides - (target - 1))) + 5) + '%, 0, 0)',
            'transition': '750ms'
        });

        function windowSize(){
            if ($(window).width() > '576'){
                _this.find('.slide__text').css({
                    'transform': 'translate3d(0, -40%, 0) rotate(0.01deg)',
                    '-moz-transform': 'translate3d(0, -40%, 0) rotate(0.01deg)',
                    'opacity': '1',
                    'transition': '750ms',
                    '-webkit-transition': '750ms',
                    'display': 'block',
                    'font-size': '35px'
                });
            } else {
                _this.find('.slide__text').css({
                    /*'transform': 'translate3d(0, -40%, 0) rotate(0.01deg)',
                    '-moz-transform': 'translate3d(0, -40%, 0) rotate(0.01deg)',*/
                    'opacity': '1',
                    'transition': '750ms',
                    '-webkit-transition': '750ms',
                    'display': 'block',
                    'font-size': '35px',
                    'transform': 'ratate(90deg)',
                    'left': '-14%',
                    'width': '50%',
                });
            }
        }
        $(window).load(windowSize);
        /*_this.find('.slide__text').css({
            'transform': 'translate3d(0, -40%, 0) rotate(0.01deg)',
            '-moz-transform': 'translate3d(0, -40%, 0) rotate(0.01deg)',
            'opacity': '1',
            'transition': '750ms',
            '-webkit-transition': '750ms',
            'display': 'block',
            'font-size': '35px'
        });*/

        _this.find('.slide__text--1').css({
            'left': '8%'
        });

        for(let i = target, length = $slide.length; i < length; i++) {
            $('.slide--' + (i + 1)).css({
                'transform': 'translate3d(-' + (((100 / numSlides) * (numSlides - ((i + 1) - 1))) - 5) + '%, 0, 0)',
                'transition': '750ms'
            })
        }

        for(let i = target; i > 1; i--) {
            $('.slide--' + (i - 1)).css({
                'transform': 'translate3d(-' + (((100 / numSlides) * (numSlides - ((i - 1) - 1))) + 5) + '%, 0, 0)',
                'transition': '750ms'
            })
        }

        $slide.not(_this).find('.slide__img-wrapper').css({
            'transform': 'translate3d(-200px, 0, 0) scale(.90, .90)',
            'transition': '1000ms'
        });

        $slide.not(_this).find('.slide__bg-dark').css({
            'opacity': '.75'
        });

        $container.css({
            'display': 'none'
        });
    });
    /*Работа блока при уборе курсора*/
    $(document).on('mouseleave', '.slide', function() {
        if(initialAnim || clickAnim) return;
        let _this = $(this);
        let target = +_this.attr('data-target');

        for(let i = 1, length = $slide.length; i <= length; i++) {
            $('.slide--' + i).css({
                'transform': 'translate3d(-' + (100 / numSlides) * (numSlides - (i - 1)) + '%, 0, 0)',
                'transition': '1000ms'
            })
        }

        $slide.find('.slide__bg-dark').css({
            'opacity': '0'
        });

        /*_this.find('.slide__text--1').css({
            'left': '4%'
        });*/

        function windowSize(){
            if ($(window).width() > '576'){
                _this.find('.slide__text').css({
                    'transform': 'translate3d(0, -50%, 0) rotate(0.01deg)',
                    'opacity': '1',
                    'transition': '200ms',
                    '-webkit-transition': '200ms',
                    'display': 'block',
                    'font-size': '30px'
                });
                _this.find('.slide__text--1').css({
                    'left': '4%'
                });
            } else {
                _this.find('.slide__text').css({
                    /*'transform': 'translate3d(0, -40%, 0) rotate(0.01deg)',
                    '-moz-transform': 'translate3d(0, -40%, 0) rotate(0.01deg)',*/
                    'opacity': '1',
                    'transition': '750ms',
                    '-webkit-transition': '750ms',
                    'display': 'block',
                    'font-size': '30px',
                    'transform': 'ratate(90deg)',
                    'left': '-14%',
                    'width': '50%',
                });
            }
        }
        $(window).load(windowSize);
        /*$text.css({
            'transform': 'translate3d(0, -50%, 0) rotate(0.01deg)',
            'opacity': '1',
            'transition': '200ms',
            '-webkit-transition': '200ms',
            'display': 'block',
            'font-size': '30px'
        });*/

        $container.css({
            'display': 'none'
        });
    });
    /*Работа блока при клике курсора на закрытие*/
    $(document).on('click', '.slide__close', function() {

        setTimeout(function() {
            clickAnim = false;
        }, 1000);

        $closeBtn.removeClass('show-close');
        $iconTwitter.removeClass('icon-show');

        for(let i = 1, length = $slide.length; i <= length; i++) {
            $('.slide--' + i).css({
                'transform': 'translate3d(-' + (100 / numSlides) * (numSlides - (i - 1)) + '%, 0, 0)',
                'transition': '1000ms',
                'cursor': 'pointer'
            })
        }

        $text.css({
            'transform': 'translate3d(150px, -40%, 0)',
            'opacity': '1',
            'transition': '200ms',
            '-webkit-transition': '200ms',
            'display': 'block',
            'font-size': '30px',
            'left': '4%',
        });

        $bgdark.css({
            'z-index': '2'
        });

        $container.css({
            'display': 'none'
        });

        setTimeout(function() {
            $text.css({
                'transform': 'translate3d(0, -50%, 0)'
            })
        }, 200)
    });

    setTimeout(function() {
        $cont.addClass('active');
    }, animDelay);

    setTimeout(function() {
        initialAnim = false;
    }, initialAnimDur + animDelay);

    /*FIRST PAGE SCRIPT*/


    <!--Google reCaptcha-->
    var onSuccess = function(response) {
        document.getElementById("butdis").disabled = false;
    };

    $(".linkButton").click(function() {
        $( "input[name*='formInfo']" ).val($(this).attr( "title" ));
    });

    <!--Cookies modal window-->
    /*(function(){
        //Change these values
        var msg = "Мы используем файлы cookie. Продолжив работу с сайтом, вы соглашаетесь с Политикой обработки персональных данных. ";
        var closeBtnMsg = "Согласен(а)";
        var privacyBtnMsg = "Узнать больше";
        var privacyLink = "documents/politicks.pdf";
        //check cookies
        if(document.cookie){
            var cookieString = document.cookie;
            var cookieList = cookieString.split(";");
            // if cookie named OKCookie is found, return
            for(x = 0; x < cookieList.length; x++){
                if (cookieList[x].indexOf("OKCookie") != -1){return};
            }
        }
        var docRoot = document.body;
        var okC = document.createElement("div");
        okC.setAttribute("id", "okCookie");
        var okCp = document.createElement("p");
        var okcText = document.createTextNode(msg);
        //close button
        var okCclose = document.createElement("a");
        var okcCloseText = document.createTextNode(closeBtnMsg);
        okCclose.setAttribute("href", "#");
        okCclose.setAttribute("id", "okClose");
        okCclose.appendChild(okcCloseText);
        okCclose.addEventListener("click", closeCookie, false);
        //privacy button
        var okCprivacy = document.createElement("a");
        var okcPrivacyText = document.createTextNode(privacyBtnMsg);
        okCprivacy.setAttribute("href", privacyLink);
        okCprivacy.setAttribute("target", "_blank");
        okCprivacy.setAttribute("id", "okCprivacy");
        okCprivacy.appendChild(okcPrivacyText);
        //add to DOM
        okCp.appendChild(okcText);
        okC.appendChild(okCp);
        okC.appendChild(okCclose);
        okC.appendChild(okCprivacy);
        docRoot.appendChild(okC);
        okC.classList.add("okcBeginAnimate");
        function closeCookie(){
            var cookieExpire = new Date();
            cookieExpire.setFullYear(cookieExpire.getFullYear() +2);
            document.cookie="OKCookie=1; expires=" + cookieExpire.toGMTString() + ";";
            docRoot.removeChild(okC);
        }
    })();*/

    <!--Mask number phone-->
    $("#phone").mask("+7 (999) 999-99-99");

    <!--Contact form style-->
    var $input = $('.form-fieldset > input');

    $input.blur(function (e) {
        $(this).toggleClass('filled', !!$(this).val());
    });
});