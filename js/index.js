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



        /*Проверка CSS свойства блока team details*/
        /*var activepersone = function () {
            if  ($('.team-detail').css('visibiliti') !== 'visible'){
                _this.find('.box-close-active').css({
                    'display': 'block',
                    'transition': '2s'
                });
            } else {
                _this.find('.box__close').css({
                    'display': 'none'
                });
            }
        };*/

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
                _this.find('.slide__text--1').css({
                    'left': '8%'
                });
            } else {
                _this.find('.slide__text').css({
                    'opacity': '1',
                    'transition': '750ms',
                    '-webkit-transition': '750ms',
                    'display': 'block',
                    'font-size': '35px',
                    'transform': 'rotate(90deg)',
                    'left': '-14%',
                    'width': '50%',
                });
            }
        }
        $(window).on('load resize',windowSize);

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
                    'opacity': '1',
                    'transition': '750ms',
                    '-webkit-transition': '750ms',
                    'display': 'block',
                    'font-size': '30px',
                    'transform': 'rotate(90deg)',
                    'left': '-14%',
                    'width': '50%',
                });
            }
        }
        $(window).on('load resize',windowSize);

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


    var animFalse = function() {
        animation = false;
    };
    /*Открытие блока с полной информацией первой страницы*/
    var active = function() {
        if (animation) return;
        var cellData = $(this).data('cell');
        var $content = $('.box__content[data-content=' + cellData + ']');
        animation = true;

        $cell.addClass('cell-fade');
        $(this).addClass('active');
        $content.addClass('show-content');
        $closeBtn2.addClass('box-close-active');

        $('.box-close-active').css({
            'display': 'block',
            'transition': '2s'
        });

        $closeBtn.removeClass('show-close');
        $iconTwitter.removeClass('icon-show');

        setTimeout(animFalse, animDur);
    };
    /*Зыкрытие блока с полной информацией первой страницы*/
    var close = function() {
        animation = true;

        $cell.removeClass('active cell-fade');
        $content.removeClass('show-content');
        $(this).removeClass('box-close-active');

        $('.box__close').css({
            'display': 'none'
        });

        $closeBtn.addClass('show-close');
        $iconTwitter.addClass('icon-show');

        setTimeout(animFalse, animDur);
    };

    <!-- CONTENT SLIDE TEACHERS-->
    const persons = [
        {
            name: "Amber Gibs",
            photo: "https://serving.photos.photobox.com/53464066dc132288128cb11531bb767f0082dcde75f3b845cd905d38c4223e95e0dc7bc9.jpg",
            title: "Developer",
            bio:
              "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
            social: {
                facebook: "#",
                twitter: "https://twitter.com/knyttneve",
                linkedin: "#"
            }
        },
        {
            name: "Andrey Grizodub",
            photo: "https://sun9-21.userapi.com/c849232/v849232101/1d6f2f/nilWa9vgT7Y.jpg",
            title: "Hip-Hop",
            bio:
              "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
            social: {
                facebook: "#",
                twitter: "https://twitter.com/knyttneve",
                linkedin: "#"
            }
        },
        {
            name: "Sergey Mihutkin",
            photo: "https://sun9-76.userapi.com/c850624/v850624965/18ab92/qUoaHK6IgCg.jpg",
            title: "K-Pop",
            bio:
              "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
            social: {
                facebook: "#",
                twitter: "https://twitter.com/knyttneve",
                linkedin: "#"
            }
        },
        {
            name: "Alice Jenkins",
            photo: "https://serving.photos.photobox.com/52898788b03c8a0e32a8cb52b4d43d7525f119daa2629569dbda0a8d827192217fb64c22.jpg",
            title: "QA Engineer",
            bio:
              "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
            social: {
                facebook: "#",
                twitter: "https://twitter.com/knyttneve",
                linkedin: "#"
            }
        },
        {
            name: "Amber Gibs",
            photo: "https://serving.photos.photobox.com/53464066dc132288128cb11531bb767f0082dcde75f3b845cd905d38c4223e95e0dc7bc9.jpg",
            title: "Developer",
            bio:
              "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
            social: {
                facebook: "#",
                twitter: "https://twitter.com/knyttneve",
                linkedin: "#"
            }
        },
        {
            name: "Andrey Grizodub",
            photo: "https://sun9-21.userapi.com/c849232/v849232101/1d6f2f/nilWa9vgT7Y.jpg",
            title: "Hip-Hop",
            bio:
              "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
            social: {
                facebook: "#",
                twitter: "https://twitter.com/knyttneve",
                linkedin: "#"
            }
        },
        {
            name: "Sergey Mihutkin",
            photo: "https://sun9-76.userapi.com/c850624/v850624965/18ab92/qUoaHK6IgCg.jpg",
            title: "K-Pop",
            bio:
              "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
            social: {
                facebook: "#",
                twitter: "https://twitter.com/knyttneve",
                linkedin: "#"
            }
        },
        {
            name: "Alice Jenkins",
            photo: "https://serving.photos.photobox.com/52898788b03c8a0e32a8cb52b4d43d7525f119daa2629569dbda0a8d827192217fb64c22.jpg",
            title: "QA Engineer",
            bio:
              "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
            social: {
                facebook: "#",
                twitter: "https://twitter.com/knyttneve",
                linkedin: "#"
            }
        }
    ];

    const app = new Vue({
        el: "#app",
        data() {
            return {
                persons: persons,
                selectedPersonIndex: null,
                isSelected: false,
                selectedPerson: null,
                inlineStyles: null,
                isReady: false,
                isOk: false,
                selectedPersonData: {
                    name: null,
                    title: null,
                    photo: null,
                    social: {
                        facebook: null,
                        twitter: null,
                        linkedin: null
                    }
                }
            };
        },
        methods: {
            selectPerson(index, el) {
                if (!this.isOk) {
                    this.selectedPersonIndex = index;
                    this.isSelected = true;
                    el.target.parentElement.className == "person-details"
                      ? (this.selectedPerson = el.target.parentElement.parentElement)
                      : (this.selectedPerson = el.target.parentElement);

                    this.selectedPerson.classList.add("person-selected");
                    this.selectedPerson.setAttribute(
                      "style",
                      `width:${this.selectedPerson.offsetWidth}px;`
                    );
                    this.selectedPersonData = this.persons[index];
                    window.setTimeout(() => {
                        this.inlineStyles = `width:${this.selectedPerson
                          .offsetWidth}px;height:${this.selectedPerson
                          .offsetHeight}px;left:${this.selectedPerson.offsetLeft}px;top:${this
                          .selectedPerson.offsetTop}px;position:fixed`;
                        this.selectedPerson.setAttribute("style", this.inlineStyles);
                    }, 400);
                    window.setTimeout(() => {
                        this.isReady = true;
                        this.isOk = true;
                    }, 420);
                } else {
                    this.reset();
                }
            },
            reset() {
                this.isReady = false;
                window.setTimeout(() => {
                    this.selectedPerson.classList.add("person-back");
                }, 280);
                window.setTimeout(() => {
                    this.selectedPerson.setAttribute("style", "");
                }, 340);
                window.setTimeout(() => {
                    this.isSelected = false;
                    this.selectedPerson.classList.remove("person-back", "person-selected");
                    this.isOk = false;
                }, 400);
            }
        }
    });
});