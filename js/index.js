$(document).ready(function() {
    const $cont = $('.cont');
        $slide = $('.slide');
        $closeBtn = $('.slide__close');
        $text = $('.slide__text');
        $iconTwitter = $('.icon-link--twitter');
        $container = $('.slide__container-content');
        $bgdark = $('.slide__bg-dark');
        numSlides = 5;
        initialAnimDur = 3000;
        animDelay = 1000;
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

        _this.find('.slide__text--1').css({
            'left': '8%'
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

        _this.find('.slide__text--1').css({
            'left': '4%'
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

    $(document).on('mousemove', '.fa-vk', function(){
        $.ajax({
            type: "POST",
            url: '../php/zapros.php',
            //data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                $('#vkontakte_count').html(data);
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $('#vkontakte_count').html(error);
            }
        });
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
        document.getElementById('butdis').disabled = false;
    };

    $(".linkButton").click(function() {
        $( "input[name*='formInfo']" ).val($(this).attr( 'title' ));
    });

    <!--Mask number phone-->
    $('#phone').mask('+7 (999) 999-99-99');

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

    <!-- CONTENT TEACHERS-->

    /*
		* Создаем функцию которая делает запрос на php файл
		* Php файл делает запрос по API, принимаем данные
		* Переводим их в JSON, парсим нужные данные
		* Возвращаем результат функции в переменную Vue.JS
		* Youtube API KEY AIzaSyBKBG2-r2hg5O8tyvLCTiKzv4HT4J44Jrg
		* */
    Vue.component("carousel", {
        template: "#v-carousel",
        data() {
            return {
                currentOffset: 0,
                windowSize: 3,
                windowSizeMobile: 1,
                paginationFactor: 220,
                paginationFactorMobile: 359,
                width: 0,
                items: [
										{name: ['Василиса Дегтярь'], tag: ['TWERK'], href: 'https://vk.com/wall-85050907_9023', banner: 'https://sun1-19.userapi.com/ckSJkEIA08W1XyJVp1zhqd0uWI8AOwGsfMsIxw/86IUIspRyTQ.jpg'},
                    {name: ['Kiril Zaharov'], tag: ['Hip-Hop'], href: 'https://vk.com/event190979061', banner: 'https://sun9-69.userapi.com/c858236/v858236971/166d10/ABbU9LnU70k.jpg'},
                    {name: ['RAF'], tag: ['Hip-Hop', 'Japanese', '$$$$'], href: 'https://vk.com/event187625337', banner: 'https://sun9-31.userapi.com/c850536/v850536203/1ed37d/Vvnmg5ZFBBo.jpg'},
                    {name: ['Aliya, Raf', 'Vitek, Tuzemec'], tag: ['Hip-Hop', 'Casual'], href: 'https://vk.com/event191745898', banner: 'https://sun9-17.userapi.com/nMAOm0S8oZ2IjRmqcpzFKT73pcbiLQRJyzJsXA/bdtpKTRNmzw.jpg'},
                    {name: ['Руслан Twist'], tag: ['Popping', 'Dance'], href: 'https://vk.com/ruslanpoppingtwist', banner: 'https://sun9-12.userapi.com/c858024/v858024753/9d2c0/J7oGG-MRJjU.jpg'},
                    {name: ['Васко Насонов', 'Ксения Шлезингер'], tag: ['Popping', 'Dance'], href: 'https://vk.com/event186203191', banner: 'https://sun9-26.userapi.com/c856120/v856120556/e2cd8/tVHFC-7obcQ.jpg'},
                    {name: ['Kipr'], tag: ['Kipr','Summer'], href: 'https://vk.com/event175214996', banner: 'https://sun9-43.userapi.com/c845017/v845017341/16220f/8FfnZEqJgME.jpg'},
                    {name: ['Алексей Арапов'], tag: ['Art House'], href: 'https://vk.com/arapovkolomna', banner: 'https://sun9-10.userapi.com/c849120/v849120739/90618/FebKvaZtAzs.jpg'},
                ]
            }
        },
        computed: {
            atEndOfList() {
                return this.currentOffset <= (this.paginationFactor * -1) * (this.items.length - this.windowSize);
            },
            atHeadOfList() {
                return this.currentOffset === 0;
            },
            atEndOfListMobile() {
                return this.currentOffset <= (this.paginationFactorMobile * -1) * (this.items.length - this.windowSizeMobile);
            },
            atHeadOfListMobile() {
                return this.currentOffset === 0;
            },
        },
        methods: {
            updateWidth() {
                this.width = window.innerWidth;
            },
            moveCarousel(direction) {
                // Find a more elegant way to express the :style. consider using props to make it truly generic
                if (direction === 1 && !this.atEndOfList) {
                    this.currentOffset -= this.paginationFactor;
                } else if (direction === -1 && !this.atHeadOfList) {
                    this.currentOffset += this.paginationFactor;
                }
            },
            moveCarouselmobile(direction) {
                // Find a more elegant way to express the :style. consider using props to make it truly generic
                if (direction === 1 && !this.atEndOfListMobile) {
                    this.currentOffset -= this.paginationFactorMobile;
                } else if (direction === -1 && !this.atHeadOfListMobile) {
                    this.currentOffset += this.paginationFactorMobile;
                }
            },
        },
        created() {
            window.addEventListener('resize', this.updateWidth);
            this.updateWidth();
        }
    });

    new Vue({
        el:"#appcarousel"
    });

    Vue.component("carousel", {
        template: "#v-carousel2",
        data() {
        	return {
                currentOffset: 0,
                windowSizeCalendar: 1,
                windowSizeMobileCalendar: 1,
                paginationFactorCalendar: 0,
                paginationFactorMobileCalendar: 0,
                width: 0,
								timestamp: " ",
								weekday: 0,
                items: [
                    {
                        name: "Зал 1 расписание на",
												price: '<span>*Стоимость абонимента на месяц, полную информацию о ценах и услугах можно узнать<a href="https://pfumiko.ru/other/price.pdf" target="_blank"> здесь</a></span>',
                        monday: [
                        	{time: '<h3>10:00 - 10:55</h3>', recruitment: '<p>Набор 7-10 лет</p>', style: '<p>Hip-Hop</p>', teacher: '<p>Слава</p>', price: '<p>*2700/**300</p>', message: ''},
													{time: '<h3>17:00 - 18:25</h3>', recruitment: '<p>Набор 10-13 лет</p>', style: '<p>Hip-Hop</p>', teacher: '<p>Андрей</p>', price: '<p>*2700/**300</p>', message: ''},
													{time: '<h3>18:30 - 19:25</h3>', recruitment: '', style: '<p>Hip-Hop</p>', teacher: '<p>Дмитрий</p>', price: '<p>*2700/**300</p>', message: ''},
													{time: '<h3>19:30 - 20:55</h3>', recruitment: '<p>Набор 14-25 лет</p>', style: '<p>Hip-Hop</p>', teacher: '<p>Andrey Grizodub</p>', price: '<p>*2700/**300</p>', message: ''},
													{time: '<h3>21:30 - 22:55</h3>', recruitment: '<p>Набор 25-50 лет</p>', style: '<p>Hip-Hop</p>', teacher: '<p>Andrey Grizodub</p>', price: '<p>*2700/**300</p>', message: ''},
													//{videoframe: '<iframe src="//vk.com/video_ext.php?oid=-85050907&id=456239394&hash=a272799d5c04d5fb&hd=2" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'},
                        ],
												tuesday: [
													{time: '<h3>18:00 - 19:25</h3>', recruitment: '<p>Набор 14-25 лет</p>', style: '<p>Jazz-funk(Kabuki)</p>', teacher: '<p>Есения</p>', price: '<p>*2700/**400</p>', message: ''},
													{time: '<h3>19:30 - 20:55</h3>', recruitment: '', style: '<p>Grizly</p>', teacher: '<p>Андрей</p>', price: '<p>*3000</p>', message: ''},
														//{videoframe: '<iframe src="//vk.com/video_ext.php?oid=-85050907&id=456239394&hash=a272799d5c04d5fb&hd=2" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'},
												],
												wednesday: [
													{time: '<h3>10:00 - 10:55</h3>', recruitment: '<p>Набор 7-10 лет</p>', style: '<p>Hip-Hop</p>', teacher: '<p>Слава</p>', price: '<p>*2700/**300</p>', message: ''},
													{time: '<h3>17:00 - 18:25</h3>', recruitment: '<p>Набор 10-13 лет</p>', style: '<p>Hip-Hop</p>', teacher: '<p>Андрей</p>', price: '<p>*2700/**300</p>', message: ''},
													{time: '<h3>18:30 - 19:25</h3>', recruitment: '', style: '<p>Hip-Hop</p>', teacher: '<p>Дмитрий</p>', price: '<p>*2700/**300</p>', message: ''},
													{time: '<h3>19:30 - 20:55</h3>', recruitment: '<p>Набор 14-25 лет</p>', style: '<p>Hip-Hop</p>', teacher: '<p>Andrey Grizodub</p>', price: '<p>*2700/**300</p>', message: ''},
													{time: '<h3>21:30 - 22:55</h3>', recruitment: '<p>Набор 25-50 лет</p>', style: '<p>Hip-Hop</p>', teacher: '<p>Andrey Grizodub</p>', price: '<p>*2700/**300</p>', message: ''},
													//{videoframe: '<iframe src="//vk.com/video_ext.php?oid=-85050907&id=456239394&hash=a272799d5c04d5fb&hd=2" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'},
												],
												thursday: [
													{time: '<h3>17:00 - 17:55</h3>', recruitment: '<p>Набор 14-25 лет</p>', style: '<p>Акробатика, Растяжка</p>', teacher: '<p>Андрей, Полина</p>', price: '<p>2000/**400</p>', message: ''},
													{time: '<h3>18:00 - 19:25</h3>', recruitment: '<p>Набор 14-25 лет</p>', style: '<p>Jazz-funk(Kabuki)</p>', teacher: '<p>Есения</p>', price: '<p>*2700/**400</p>', message: ''},
													{time: '<h3>19:30 - 20:55</h3>', recruitment: '', style: '<p>Grizly</p>', teacher: '<p>Андрей</p>', price: '<p>*3000</p>', message: ''},
													//{videoframe: '<iframe src="//vk.com/video_ext.php?oid=-85050907&id=456239394&hash=a272799d5c04d5fb&hd=2" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'},
												],
												friday: [
													{time: '<h3>10:00 - 10:55</h3>', recruitment: '<p>Набор 7-10 лет</p>', style: '<p>Hip-Hop</p>', teacher: '<p>Слава</p>', price: '<p>*2700/**300</p>', message: '<p>Отмена занятий</p>'},
													{time: '<h3>17:00 - 18:25</h3>', recruitment: '<p>Набор 10-13 лет</p>', style: '<p>Hip-Hop</p>', teacher: '<p>Андрей</p>', price: '<p>*2700/**300</p>', message: ''},
													{time: '<h3>18:30 - 19:25</h3>', recruitment: '', style: '<p>Hip-Hop</p>', teacher: '<p>Дмитрий</p>', price: '<p>*2700/**300</p>', message: ''},
													{time: '<h3>19:30 - 20:55</h3>', recruitment: '<p>Набор 14-25 лет</p>', style: '<p>Hip-Hop</p>', teacher: '<p>Andrey Grizodub</p>', price: '<p>*2700/**300</p>', message: ''},
													{time: '<h3>21:30 - 22:55</h3>', recruitment: '<p>Набор 25-50 лет</p>', style: '<p>Hip-Hop</p>', teacher: '<p>Andrey Grizodub</p>', price: '<p>*2700/**300</p>', message: ''},
													//{videoframe: '<iframe src="//vk.com/video_ext.php?oid=-85050907&id=456239394&hash=a272799d5c04d5fb&hd=2" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'},
												],
												saturday: [
													{message: '<span>У нас выходной. Проверьте вкладку Events возможно там будет что то интересное</span>'},
												],
												sunday : [
													{time: '<h3>17:00 - 17:55</h3>', recruitment: '<p>Набор 14-25 лет</p>', style: '<p>Акробатика, Растяжка</p>', teacher: '<p>Андрей, Полина</p>', price: '<p>2000/**400</p>', message: ''},
													{time: '<h3>18:00 - 19:25</h3>', recruitment: '<p>Набор 14-25 лет</p>', style: '<p>Jazz-funk(Kabuki)</p>', teacher: '<p>Есения</p>', price: '<p>*2700/**400</p>', message: ''},
													{time: '<h3>19:30 - 20:55</h3>', recruitment: '', style: '<p>Grizly</p>', teacher: '<p>Андрей</p>', price: '<p>*3000</p>', message: ''},
													//{videoframe: '<iframe src="//vk.com/video_ext.php?oid=-85050907&id=456239394&hash=a272799d5c04d5fb&hd=2" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'},
												],
												mobilecalendar: [
													{href: '<a href="https://sun9-33.userapi.com/k7d64s-OQU3lYTPjd6mOwmugND65HBbTCocnNg/UW8ONyWQvp0.jpg" target="_blank"><img alt="Здесь было расписание Зала #1, но оно куда то исчезло. Мы знаем о данной проблеме и стараемся её решить" src="https://sun9-33.userapi.com/k7d64s-OQU3lYTPjd6mOwmugND65HBbTCocnNg/UW8ONyWQvp0.jpg" class="lazyloaded" /*data-src="../img/zal1.jpg"*/ ></a>', text: '<p>Нажмите на картинку что бы скачать распиание Зала #1</p>'}
												],
                    },
                    {
                        name: "Зал 2 расписание на",
												price: '<span>*Стоимость абонимента на месяц, полную информацию о ценах и услугах можно узнать<a href="https://pfumiko.ru/other/price.pdf" target="_blank"> здесь</a></span>',
												monday: [
														{time: '<h3>17:00 - 17:55</h3>', recruitment: '', style: '<p>Cherries</p>', teacher: '<p>Полина</p>', price: '<p>*2300/**300</p>', message: ''},
														{time: '<h3>18:00 - 18:55</h3>', recruitment: '<p>Набор от 10 лет</p>', style: '<p>Contemporary</p>', teacher: '<p>Полина</p>', price: '<p>*2300/**300</p>', message: ''},
														{time: '<h3>19:00 - 19:55</h3>', recruitment: '', style: '<p>Перчики</p>', teacher: '<p>Полина</p>', price: '<p>*2300/**300</p>', message: ''},
														//{time: '<h3>20:00 - 20:55</h3>', recruitment: '', style: '<p>Улей</p>', teacher: '<p>Полина</p>', price: '<p>*2300/**300</p>', message: ''},
														//{videoframe: '<iframe src="//vk.com/video_ext.php?oid=304797199&id=456239522&hash=a8eca156838556bf&hd=1" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'}
														],
													tuesday: [
														{time: '<h3>16:30 - 17:55</h3>', recruitment: '<p>Набор 7-10 лет</p>', style: '<p>Hip-Hip Начинающие</p>', teacher: '<p>Миша</p>', price: '<p>*2300/**300</p>', message: ''},
														{time: '<h3>17:30 - 18:25</h3>', recruitment: '', style: '<p>Hip-Hop Продолжающие</p>', teacher: '<p>Миша</p>', price: '<p>*2300/**300</p>', message: ''},
														{time: '<h3>18:30 - 19-25</h3>', recruitment: '', style: '<p>K-pop</p>', teacher: '<p>Серёжа</p>', price: '<p>*2300/**300</p>', message: ''},
														{time: '<h3>19:30 - 25:55</h3>', recruitment: '', style: '<p>Grizly kids</p>', teacher: '<p>Полина</p>', price: '<p>*3000</p>', message: ''},
														//{videoframe: '<iframe src="//vk.com/video_ext.php?oid=-85050907&id=456239394&hash=a272799d5c04d5fb&hd=2" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'},
													],
													wednesday: [
														{time: '<h3>17:00 - 17:55</h3>', recruitment: '', style: '<p>Cherries</p>', teacher: '<p>Полина</p>', price: '<p>*2300/**300</p>', message: ''},
														{time: '<h3>18:00 - 18:55</h3>', recruitment: '<p>Набор от 10 лет</p>', style: '<p>Contemporary</p>', teacher: '<p>Полина</p>', price: '<p>*2300/**300</p>', message: ''},
														{time: '<h3>19:00 - 19:55</h3>', recruitment: '', style: '<p>Перчики</p>', teacher: '<p>Полина</p>', price: '<p>*2300/**300</p>', message: ''},
														{time: '<h3>20:00 - 20:55</h3>', recruitment: '', style: '<p>Улей</p>', teacher: '<p>Полина</p>', price: '<p>*2300/**300</p>', message: ''},
														//{videoframe: '<iframe src="//vk.com/video_ext.php?oid=-85050907&id=456239394&hash=a272799d5c04d5fb&hd=2" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'},
													],
													thursday: [
														{time: '<h3>16:30 - 17:55</h3>', recruitment: '<p>Набор 7-10 лет</p>', style: '<p>Hip-Hip Начинающие</p>', teacher: '<p>Миша</p>', price: '<p>*2300/**300</p>', message: ''},
														{time: '<h3>17:30 - 18:25</h3>', recruitment: '', style: '<p>Hip-Hop Продолжающие</p>', teacher: '<p>Миша</p>', price: '<p>*2300/**300</p>', message: ''},
														{time: '<h3>18:30 - 19-25</h3>', recruitment: '', style: '<p>K-pop</p>', teacher: '<p>Серёжа</p>', price: '<p>*2300/**300</p>', message: ''},
														{time: '<h3>19:30 - 25:55</h3>', recruitment: '', style: '<p>Grizly kids</p>', teacher: '<p>Полина</p>', price: '<p>*3000</p>', message: ''},
														//{videoframe: '<iframe src="//vk.com/video_ext.php?oid=-85050907&id=456239394&hash=a272799d5c04d5fb&hd=2" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'},
													],
													friday: [
														{time: '<h3>17:00 - 17:55</h3>', recruitment: '', style: '<p>Cherries</p>', teacher: '<p>Полина</p>', price: '<p>*2300/**300</p>', message: ''},
														{time: '<h3>18:00 - 18:55</h3>', recruitment: '<p>Набор от 10 лет</p>', style: '<p>Contemporary</p>', teacher: '<p>Полина</p>', price: '<p>*2300/**300</p>', message: ''},
														{time: '<h3>19:00 - 19:55</h3>', recruitment: '', style: '<p>Перчики</p>', teacher: '<p>Полина</p>', price: '<p>*2300/**300</p>', message: ''},
														{time: '<h3>20:00 - 20:55</h3>', recruitment: '', style: '<p>Улей</p>', teacher: '<p>Полина</p>', price: '<p>*2300/**300</p>', message: ''},
														//{videoframe: '<iframe src="//vk.com/video_ext.php?oid=-85050907&id=456239394&hash=a272799d5c04d5fb&hd=2" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'},
													],
													saturday: [
														{message: '<span>У нас выходной. Проверьте вкладку Events возможно там будет что то интересное</span>'},
													],
													sunday : [
														{time: '<h3>16:30 - 17:55</h3>', recruitment: '<p>Набор 7-10 лет</p>', style: '<p>Hip-Hip Начинающие</p>', teacher: '<p>Миша</p>', price: '<p>*2300/**300</p>', message: ''},
														{time: '<h3>17:30 - 18:25</h3>', recruitment: '', style: '<p>Hip-Hop Продолжающие</p>', teacher: '<p>Миша</p>', price: '<p>*2300/**300</p>', message: ''},
														{time: '<h3>18:30 - 19-25</h3>', recruitment: '', style: '<p>K-pop</p>', teacher: '<p>Серёжа</p>', price: '<p>*2300/**300</p>', message: ''},
														{time: '<h3>19:30 - 25:55</h3>', recruitment: '', style: '<p>Grizly kids</p>', teacher: '<p>Полина</p>', price: '<p>*3000</p>', message: ''},
														//{videoframe: '<iframe src="//vk.com/video_ext.php?oid=-85050907&id=456239394&hash=a272799d5c04d5fb&hd=2" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'},
													],
													mobilecalendar: [
														{href: '<a href="https://sun9-59.userapi.com/9qMBnlUgdx6mZ_C8v1bGmoxwanTdd2WwK43hyA/pvPjyLNcSVY.jpg" target="_blank"><img alt="Здесь было расписание Зала #2, но оно куда то исчезло. Мы знаем о данной проблеме и стараемся её решить" src="https://sun9-59.userapi.com/9qMBnlUgdx6mZ_C8v1bGmoxwanTdd2WwK43hyA/pvPjyLNcSVY.jpg" class="lazyloaded" /*data-src="../img/zal2.jpg"*/ ></a>', text: '<p>Нажмите на картинку что бы скачать распиание Зала #2</p>'}
													],
										},
                    {
                        name: "Зал 3 расписание на",
												price: '<span>*Стоимость абонимента на месяц, полную информацию о ценах и услугах можно узнать<a href="https://pfumiko.ru/other/price.pdf" target="_blank"> здесь</a></span>',
												monday: [
													{time: '<h3>13:00 - 13:55</h3>', recruitment: '<p>Набор</p>', style: '<p>Bodyflex</p>', teacher: '<p>Альбина</p>', price: '<p>*2700/**400</p>', message: ''},
													{time: '<h3>16:30 - 17:25</h3>', recruitment: '<p>Набор 4-6 лет</p>', style: '', teacher: '<p>Алина</p>', price: '<p>*2300/**300</p>', message: ''},
													{time: '<h3>17:30 - 18:25</h3>', recruitment: '<p>Набор 4-6 лет</p>', style: '', teacher: '<p>Алина</p>', price: '<p>*2300/**300</p>', message: ''},
													{time: '<h3>18:30 - 19:25</h3>', recruitment: '<p>Набор 7-10 лет</p>', style: '<p>Hip-Hop & Urban</p>', teacher: '<p>Слава</p>', price: '<p>*2300/**300</p>', message: ''},
													{time: '<h3>19:30 - 20:25</h3>', recruitment: '<p>Набор от 10 лет</p>', style: '<p>K-pop</p>', teacher: '<p>Ольга</p>', price: '<p>*2300/**300</p>', message: ''},
													{time: '<h3>20:30 - 21:55</h3>', recruitment: '<p>Набор от 14 лет</p>', style: '<p>Творческая лаборатория</p>', teacher: '<p>Юля</p>', price: '<p>*2700/**400</p>', message: ''},
													],
												tuesday: [
													{time: '<h3>17:30 - 18:25</h3>', recruitment: '<p>Набор 3.5-4 лет</p>', style: '', teacher: '<p>Таисия</p>', price: '<p>*2700/**400</p>', message: ''},
													{time: '<h3>18:30 - 19:25</h3>', recruitment: '<p>Набор 5-6 лет</p>', style: '', teacher: '<p>Таисия</p>', price: '<p>*2300/**300</p>', message: ''},
													{time: '<h3>19:45 - 21:10</h3>', recruitment: '<p>Набор 16-50 лет</p>', style: '<p>Стрип пластика</p>', teacher: '<p>Есения</p>', price: '<p>2000/**400</p>', message: ''}
													//{videoframe: '<iframe src="//vk.com/video_ext.php?oid=-85050907&id=456239394&hash=a272799d5c04d5fb&hd=2" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'},
												],
												wednesday: [
													{time: '<h3>13:00 - 13:55</h3>', recruitment: '<p>Набор</p>', style: '<p>Bodyflex</p>', teacher: '<p>Альбина</p>', price: '<p>*2700/**400</p>', message: ''},
													{time: '<h3>16:30 - 17:25</h3>', recruitment: '<p>Набор 4-6 лет</p>', style: '', teacher: '<p>Алина</p>', price: '<p>*2300/**300</p>', message: ''},
													{time: '<h3>17:30 - 18:25</h3>', recruitment: '<p>Набор 4-6 лет</p>', style: '', teacher: '<p>Алина</p>', price: '<p>*2300/**300</p>', message: ''},
													{time: '<h3>18:30 - 19:25</h3>', recruitment: '<p>Набор 7-10 лет</p>', style: '<p>Hip-Hop & Urban</p>', teacher: '<p>Слава</p>', price: '<p>*2300/**300</p>', message: ''},
													{time: '<h3>19:30 - 20:25</h3>', recruitment: '<p>Набор от 10 лет</p>', style: '<p>K-pop</p>', teacher: '<p>Ольга</p>', price: '<p>*2300/**300</p>', message: ''},
													{time: '<h3>20:30 - 21:55</h3>', recruitment: '<p>Набор от 14 лет</p>', style: '<p>Творческая лаборатория</p>', teacher: '<p>Юля</p>', price: '<p>*2700/**400</p>', message: ''},
												],
												thursday: [
													{time: '<h3>17:30 - 18:25</h3>', recruitment: '<p>Набор 3.5-4 лет</p>', style: '', teacher: '<p>Таисия</p>', price: '<p>*2700/**400</p>', message: ''},
													{time: '<h3>18:30 - 19:25</h3>', recruitment: '<p>Набор 5-6 лет</p>', style: '', teacher: '<p>Таисия</p>', price: '<p>*2300/**300</p>', message: ''},
													{time: '<h3>19:45 - 21:10</h3>', recruitment: '<p>Набор 16-50 лет</p>', style: '<p>Стрип пластика</p>', teacher: '<p>Есения</p>', price: '<p>2000/**400</p>', message: ''}
													//{videoframe: '<iframe src="//vk.com/video_ext.php?oid=-85050907&id=456239394&hash=a272799d5c04d5fb&hd=2" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'},
												],
												friday: [
													{time: '<h3>13:00 - 13:55</h3>', recruitment: '<p>Набор</p>', style: '<p>Bodyflex</p>', teacher: '<p>Альбина</p>', price: '<p>*2700/**400</p>', message: ''},
													{time: '<h3>16:30 - 17:25</h3>', recruitment: '<p>Набор 4-6 лет</p>', style: '', teacher: '<p>Алина</p>', price: '<p>*2300/**300</p>', message: ''},
													{time: '<h3>17:30 - 18:25</h3>', recruitment: '<p>Набор 4-6 лет</p>', style: '', teacher: '<p>Алина</p>', price: '<p>*2300/**300</p>', message: ''},
													{time: '<h3>18:30 - 19:25</h3>', recruitment: '<p>Набор 7-10 лет</p>', style: '<p>Hip-Hop & Urban</p>', teacher: '<p>Слава</p>', price: '<p>*2300/**300</p>', message: ''},
													{time: '<h3>19:30 - 20:25</h3>', recruitment: '<p>Набор от 10 лет</p>', style: '<p>K-pop</p>', teacher: '<p>Ольга</p>', price: '<p>*2300/**300</p>', message: ''},
													{time: '<h3>20:30 - 21:55</h3>', recruitment: '<p>Набор от 14 лет</p>', style: '<p>Творческая лаборатория</p>', teacher: '<p>Юля</p>', price: '<p>*2700/**400</p>', message: ''},
												],
												saturday: [
													{message: '<span>У нас выходной. Проверьте вкладку Events возможно там будет что то интересное</span>'},
												],
												sunday : [
													{time: '<h3>15:30 - 17:00</h3>', recruitment: '<p>Набор 16-50 лет</p>', style: '<p>Стрип пластика</p>', teacher: '<p>Таисия</p>', price: '<p>2000/**400</p>', message: ''},
													{time: '<h3>17:30 - 18:25</h3>', recruitment: '<p>Набор 3.5-4 лет</p>', style: '', teacher: '<p>Таисия</p>', price: '<p>*2700/**400</p>', message: ''},
													{time: '<h3>18:30 - 19:25</h3>', recruitment: '<p>Набор 5-6 лет</p>', style: '', teacher: '<p>Таисия</p>', price: '<p>*2300/**300</p>', message: ''},
													//{videoframe: '<iframe src="//vk.com/video_ext.php?oid=-85050907&id=456239394&hash=a272799d5c04d5fb&hd=2" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'},
												],
												mobilecalendar: [
													{href: '<a href="https://sun9-74.userapi.com/j5hqqfbP8tSIA6jIrDci3N9Vd8-hxYNuutjxuA/tSvrBIdNKDI.jpg" target="_blank"><img alt="Здесь было расписание Зала #3, но оно куда то исчезло. Мы знаем о данной проблеме и стараемся её решить" src="https://sun9-74.userapi.com/j5hqqfbP8tSIA6jIrDci3N9Vd8-hxYNuutjxuA/tSvrBIdNKDI.jpg" class="lazyloaded" /*data-src="../img/zal3.jpg"*/></a>', text: '<p>Нажмите на картинку что бы скачать распиание Зала #3</p>'}
												],
                    },
								]
            }
        },
        computed: {
            atEndOfList() {
								return this.currentOffset <= (this.paginationFactorCalendar * -1) * (this.items.length - this.windowSizeCalendar);
            },
            atHeadOfList() {
                return this.currentOffset === 0;
            },
            atEndOfListMobileCalendar() {
                return this.currentOffset <= (this.paginationFactorMobileCalendar * -1) * (this.items.length - this.windowSizeMobileCalendar);
            },
            atHeadOfListMobileCalendar() {
                return this.currentOffset === 0;
            },
        },
        methods: {
            updateWidth() {
                this.width = window.innerWidth;
								this.paginationFactorCalendar = document.body.clientWidth/100 * 80 + 20;
								this.paginationFactorMobileCalendar = document.body.clientHeight/100 * 60 + 20;
            },
            moveCarouselCalendar(direction) {
                // Find a more elegant way to express the :style. consider using props to make it truly generic
                if (direction === 1 && !this.atEndOfList) {
                    this.currentOffset -= this.paginationFactorCalendar;
                } else if (direction === -1 && !this.atHeadOfList) {
                    this.currentOffset += this.paginationFactorCalendar;
                }
            },
            moveCarouselmobileCalendar(direction) {
                // Find a more elegant way to express the :style. consider using props to make it truly generic
                if (direction === 1 && !this.atEndOfListMobileCalendar) {
                    this.currentOffset -= this.paginationFactorMobileCalendar;
                } else if (direction === -1 && !this.atHeadOfListMobileCalendar) {
                    this.currentOffset += this.paginationFactorMobileCalendar;
                }
            },
						getNow: function() {
							const days = ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
							const d = new Date();
							const n = d.getDay();
							this.timestamp = days[n];
							this.weekday = n;
						},
        },
        created() {
            window.addEventListener('resize', this.updateWidth);
            this.updateWidth();
            window.addEventListener('load', this.getNow);
            this.getNow();
        }
    });

    new Vue({
        el:"#appcarouselCalendar"
    });

    const persons = [
        {
            name: "Esenia Astra",
            photo: "https://sun1-85.userapi.com/c854020/v854020657/1680ea/lGl4DMuNWbk.jpg",
            alt: 'Здесь было фото преподавателя',
            title: "Juzz-Funk",
            bio:
              "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
            social: {
                vk: "https://vk.com/danceastra",
                //vk_count: zaprosApiVK(),
                youtube: "https://www.youtube.com/channel/UCz6arMUrptoeLtghbb2YszQ",
                instagram: "https://www.instagram.com/eseniastra/"
            },
						photogallery: {
							photo1: "",
							photo2: "",
							photo3: "",
							photo4: "",
							photo5: "",
						},
						videogallery: {
							video1: "",
							video2: "",
							video3: "",
						},
						raspisanie: {
							monday: "",
							tuesday: "",
							wednesday: "",
							thursday: "",
							friday: "",
							saturday: "",
							sunday: "",
						},
        },
        {
            name: "Andrey Grizodub",
            photo: "https://sun9-21.userapi.com/c849232/v849232101/1d6f2f/nilWa9vgT7Y.jpg",
            alt: 'Здесь было фото преподавателя',
            title: "Hip-Hop",
            bio:
              "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
            social: {
                vk: "https://vk.com/id34453980",
                //vk_count: zaprosApiVK(),
                youtube: "https://www.youtube.com/channel/UCHVby83zLrdxwO4nMfEVeZw",
                instagram: "https://www.instagram.com/andreygrizodub/"
            },
						photogallery: {
            		photo1: "",
								photo2: "",
								photo3: "",
								photo4: "",
								photo5: "",
						},
						videogallery: {
            		video1: "",
								video2: "",
								video3: "",
						},
						raspisanie: {
            		monday: "",
								tuesday: "",
								wednesday: "",
								thursday: "",
								friday: "",
								saturday: "",
								sunday: "",
						}
        },
        {
            name: "Sergey Mihutkin",
            photo: "https://sun9-76.userapi.com/c850624/v850624965/18ab92/qUoaHK6IgCg.jpg",
            alt: 'Здесь было фото преподавателя',
            title: "K-Pop",
            bio:
              "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
            social: {
                vk: "https://vk.com/boombb",
                //vk_count: zaprosApiVK(),
                youtube: "https://www.youtube.com/channel/UCHVby83zLrdxwO4nMfEVeZw",
                instagram: "https://www.instagram.com/sergfd/"
            },
						photogallery: {
							photo1: "",
							photo2: "",
							photo3: "",
							photo4: "",
							photo5: "",
						},
						videogallery: {
							video1: "",
							video2: "",
							video3: "",
						},
						raspisanie: {
							monday: "",
							tuesday: "",
							wednesday: "",
							thursday: "",
							friday: "",
							saturday: "",
							sunday: "",
						},
        },
        {
            name: "Alice Jenkins",
            photo: "https://serving.photos.photobox.com/52898788b03c8a0e32a8cb52b4d43d7525f119daa2629569dbda0a8d827192217fb64c22.jpg",
            alt: 'Здесь было фото преподавателя',
            title: "QA Engineer",
            bio:
              "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
            social: {
                vk: "https://vk.com/interstellar_dance_studio",
                //vk_count: zaprosApiVK(),
                youtube: "https://www.youtube.com/channel/UCHVby83zLrdxwO4nMfEVeZw",
                instagram: "https://www.instagram.com/interstellar_dance_studio_/?igshi"
            },
						photogallery: {
							photo1: "",
							photo2: "",
							photo3: "",
							photo4: "",
							photo5: "",
						},
						videogallery: {
							video1: "",
							video2: "",
							video3: "",
						},
						raspisanie: {
							monday: "",
							tuesday: "",
							wednesday: "",
							thursday: "",
							friday: "",
							saturday: "",
							sunday: "",
						},
        },
        {
            name: "Polina Grizodub",
            photo: "https://sun9-64.userapi.com/c836736/v836736584/36be7/155uDD3TkJo.jpg",
            title: "Cantemporary",
            bio:
              "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
            social: {
                vk: "https://vk.com/dancepollyinterstellar",
                //vk_count: zaprosApiVK(),
                youtube: "https://www.youtube.com/channel/UCHVby83zLrdxwO4nMfEVeZw",
                instagram: "https://www.instagram.com/polinagrizodub/"
            },
						photogallery: {
							photo1: "",
							photo2: "",
							photo3: "",
							photo4: "",
							photo5: "",
						},
						videogallery: {
							video1: "",
							video2: "",
							video3: "",
						},
						raspisanie: {
							monday: "",
							tuesday: "",
							wednesday: "",
							thursday: "",
							friday: "",
							saturday: "",
							sunday: "",
						},
        },
        {
            name: "Vyacheslav Rodin",
            photo: "https://sun9-36.userapi.com/c850136/v850136939/18f5c3/uJ_HtA0TLQE.jpg",
            title: "Urban Hip-Hop",
            bio:
              "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
            social: {
                vk: "https://vk.com/pushkadancer",
                //vk_count: zaprosApiVK(),
                youtube: "https://www.youtube.com/channel/UCHVby83zLrdxwO4nMfEVeZw",
								instagram: "https://www.instagram.com/rodin_dancer/"
            },
						photogallery: {
							photo1: "",
							photo2: "",
							photo3: "",
							photo4: "",
							photo5: "",
						},
						videogallery: {
							video1: "",
							video2: "",
							video3: "",
						},
						raspisanie: {
							monday: "",
							tuesday: "",
							wednesday: "",
							thursday: "",
							friday: "",
							saturday: "",
							sunday: "",
						},
        },
        {
            name: "Al'bina Konstantinova",
            photo: "https://sun9-64.userapi.com/c845019/v845019794/14eb6b/1ivH2KMZfhs.jpg",
            title: "BodyFlex",
            bio:
              "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
            social: {
                vk: "https://vk.com/id34032898",
                //vk_count: zaprosApiVK(),
                youtube: "https://www.youtube.com/channel/UCHVby83zLrdxwO4nMfEVeZw",
                instagram: "https://www.instagram.com/albinakonstanti/"
            },
						photogallery: {
							photo1: "",
							photo2: "",
							photo3: "",
							photo4: "",
							photo5: "",
						},
						videogallery: {
							video1: "",
							video2: "",
							video3: "",
						},
						raspisanie: {
							monday: "",
							tuesday: "",
							wednesday: "",
							thursday: "",
							friday: "",
							saturday: "",
							sunday: "",
						},
        }
    ];

    const app = new Vue({
        el: '#app',
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
                    el.target.parentElement.className == 'person-details'
                      ? (this.selectedPerson = el.target.parentElement.parentElement)
                      : (this.selectedPerson = el.target.parentElement);

                    this.selectedPerson.classList.add('person-selected');
                    this.selectedPerson.setAttribute(
                      'style',
                      `width:${this.selectedPerson.offsetWidth}px;`
                    );
                    this.selectedPersonData = this.persons[index];
                    window.setTimeout(() => {
                        this.inlineStyles = `width:${this.selectedPerson
                          .offsetWidth}px;height:${this.selectedPerson
                          .offsetHeight}px;left:${this.selectedPerson.offsetLeft}px;top:${this
                          .selectedPerson.offsetTop}px;position:fixed`;
                        this.selectedPerson.setAttribute('style', this.inlineStyles);
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
                    this.selectedPerson.classList.add('person-back');
                }, 280);
                window.setTimeout(() => {
                    this.selectedPerson.setAttribute('style', '');
                }, 340);
                window.setTimeout(() => {
                    this.isSelected = false;
                    this.selectedPerson.classList.remove('person-back', 'person-selected');
                    this.isOk = false;
                }, 400);
            }
        }
    });
});