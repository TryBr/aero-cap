$( document ).ready(function() {

    // MAIN SLIDER
    var swiperMainBanner = new Swiper('.swiper-main-banner', {
        speed: 500,
        loop: false,
        pagination: {
            el: '.swiper-pagination-main',
        },
        autoplay: {
            delay: 5000,
        },
        disableOnInteraction: false
    });

    if (swiperMainBanner.isBeginning) {
        $('.banner-nav-prev-btn').addClass('disabled');

    } else {
        $('.banner-nav-prev-btn').removeClass('disabled');
    }


    $('.banner-nav-prev-btn').on('click', function (e) {
        var bannerNumber = $(".banner-nav__val").text();
        if (parseInt(bannerNumber) != 1) {
            var bannerCount = parseInt(bannerNumber) - 1;
            $(".banner-nav__val").text(bannerCount);
            swiperMainBanner.slidePrev();

            if (swiperMainBanner.isBeginning) {
                $('.banner-nav-prev-btn').addClass('disabled');
            } else {
                $('.banner-nav-prev-btn').removeClass('disabled');
            }

            if (swiperMainBanner.isEnd) {
                $('.banner-nav-next-btn').addClass('disabled');
            } else {
                $('.banner-nav-next-btn').removeClass('disabled');
            }
        }
    });

    $('.banner-nav-next-btn').on('click', function (e) {
        // var slidesLength = swiperMainBanner.slides;
        // console.log(slidesLength);
        var bannerNumber = $(".banner-nav__val").text();
        if (parseInt(bannerNumber) != 4) {
            var bannerCount = parseInt(bannerNumber) + 1;
            $(".banner-nav__val").text(bannerCount);
            swiperMainBanner.slideNext();

            if (swiperMainBanner.isEnd) {
                $('.banner-nav-next-btn').addClass('disabled');
            } else {
                $('.banner-nav-next-btn').removeClass('disabled');
            }

            if (swiperMainBanner.isBeginning) {
                $('.banner-nav-prev-btn').addClass('disabled');
            } else {
                $('.banner-nav-prev-btn').removeClass('disabled');
            }
        }
    });

    // BANNER NAV
    //mySwiper.slideTo(index, speed, runCallbacks);
    $(".swiper-pagination-main").find(".swiper-pagination-bullet").each(function(indx, element){
        $(this).attr("slide-number", indx);
    });

    // BANNER PAGINATION NAV CLICK
    $(".swiper-pagination-bullet").click(function() {
        var slideNumber = $(this).attr('slide-number');
        var slideNumberModify = parseInt(slideNumber) + 1;

        $(".banner-nav__val").text(slideNumberModify);

        swiperMainBanner.slideTo(slideNumber)

        if (swiperMainBanner.isBeginning) {
            $('.banner-nav-prev-btn').addClass('disabled');
        } else {
            $('.banner-nav-prev-btn').removeClass('disabled');
        }

        if (swiperMainBanner.isEnd) {
            $('.banner-nav-next-btn').addClass('disabled');
        } else {
            $('.banner-nav-next-btn').removeClass('disabled');
        }
    });

    // BANNER CHANGE
    swiperMainBanner.on('slideChange', function () {
        var activeIndex = swiperMainBanner.activeIndex;
        var slideNumberModify = parseInt(activeIndex) + 1;
        $(".banner-nav__val").text(slideNumberModify);

        if (swiperMainBanner.isEnd) {
            $('.banner-nav-next-btn').addClass('disabled');
        } else {
            $('.banner-nav-next-btn').removeClass('disabled');
        }

        if (swiperMainBanner.isBeginning) {
            $('.banner-nav-prev-btn').addClass('disabled');
        } else {
            $('.banner-nav-prev-btn').removeClass('disabled');
        }
    });


    // FRIENDS SLIDER
    var swiperFriends = new Swiper('.swiper-friends', {
        speed: 500,
        loop: true,
        slidesPerView: 4,
        spaceBetween: 34,
        // Responsive breakpoints
        breakpoints: {
            // when window width is <= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            // when window width is <= 480px
            767: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            // when window width is <= 640px
            1299: {
                slidesPerView: 3,
                spaceBetween: 43
            }
        }
    });

    $('.our-friends-nav-prev-btn').on('click', function (e) {
        swiperFriends.slidePrev();
    });

    $('.our-friends-nav-next-btn').on('click', function (e) {
        swiperFriends.slideNext();
    });

    // NEWS SLIDER
    var swiperAddNews = new Swiper('.swiper-add-news', {
        speed: 500,
        loop: true
    });

    $('.news-list-nav-prev-btn').on('click', function (e) {
        swiperAddNews.slidePrev();
    });

    $('.news-list-nav-next-btn').on('click', function (e) {
        swiperAddNews.slideNext();
    });

    // NEWS SLIDER MOBILE
    var swiperAddNews = new Swiper('.swiper-add-news-mobile', {
        speed: 500,
        loop: true,
        breakpoints: {
            // when window width is <= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            // when window width is <= 480px
            767: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            // when window width is <= 640px
            1299: {
                slidesPerView: 2,
                spaceBetween: 43
            }
        }
    });

    $('.news-m-list-nav-prev-btn').on('click', function (e) {
        swiperAddNews.slidePrev();
    });

    $('.news-m-list-nav-next-btn').on('click', function (e) {
        swiperAddNews.slideNext();
    });


    // NEWS BOTTOM SLIDER
    var swiperAddNewsBottom = new Swiper('.swiper-add-bottom-news', {
        speed: 500,
        loop: true,
        slidesPerView: 3,
        spaceBetween: 40
    });

    $('.news-add-list-nav-prev-btn').click(function(){
        swiperAddNewsBottom.slidePrev();
    });

    $('.news-add-list-nav-next-btn').click(function(){
        swiperAddNewsBottom.slideNext();
    });


    // TO TOP
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 1200);
        });
    }


    // DOCS
    $('.sport-rules-item-info-nav').click(function(){
        if (!$(this).closest('.sport-rules-item').hasClass('sport-rules-item-active')) {
            $(this).closest('.sport-rules-item').addClass('sport-rules-item-active');
            $(this).closest('.sport-rules-item').find('.sport-rules-item-content').addClass('content-active');
        } else {
            $(this).closest('.sport-rules-item').removeClass('sport-rules-item-active');
            $(this).closest('.sport-rules-item').find('.sport-rules-item-content').removeClass('content-active');
        }
    });

    // PUSHY MENU
    $("#menu-btn").click(function() {
        $(this).toggleClass( "active" );
        $(this).closest(".menu-mobile-wrapper").toggleClass( "active" );
    });

    // PUSHY RESIZE
    $( window ).resize(function() {
        if ($(window).width() <= 1299) {
            if ($("body").hasClass("pushy-open-left")) {
                $('#menu-btn').click();
                $('#menu-btn').removeClass("active");
            }
        }
    });

    // FANCY BOX
    $('.fancybox').fancybox({
        close : false,
        autoDimensions: false,
        fitToView: false,
        autoScale: false,
        'showNavArrows' :   true
    });


    // MOBILE MENU
    $(".mobile-menu-item").click(function() {
        $(this).toggleClass( "active" );
        $(this).find('.dropdown-menu').toggleClass( "active" );
    });

    // MOBILE MENU CLOSE BTN
    $("#close-menu-mobile-btn").click(function() {
        $('body').removeClass('pushy-open-left');
        windowWidth = $(window).width();
        $('.pushy-left').css({
            transform: "translate3d(-"+windowWidth+"px, 0, 0)"
        });
    });

    // MOBILE MENU OPEN BTN
    $("#menu-btn").click(function() {
        if ($(window).width() <= 767) {
            $(this).removeClass('active');
            $('.menu-mobile-wrapper').removeClass('active');
            windowWidth = $( window ).width();
            $('.main-container').attr("id","");
            $('.pushy').width(windowWidth);
            $('.pushy-open-left .pushy').css({
                transform: "translate3d(0, 0, 0)"
            });
        } else {
            $('.main-container').attr("id","container");
        }
    });


    $( window ).resize(function() {
        $('body').removeClass('pushy-open-left');
        if ($(window).width() <= 767) {

            $('#menu-btn').removeClass( "active" );
            $('#menu-btn-close').removeClass( "active" );
            windowWidth = $( window ).width();
            $('.main-container').attr("id","");
            $('.pushy').width(windowWidth);
            $('.pushy-left').css({
                transform: "translate3d(-"+windowWidth+"px, 0, 0)"
            });
            if ($("body").hasClass("pushy-open-left")) {
                windowWidth = $( window ).width();
                $('.pushy').width(windowWidth);
                $('.pushy-open-left .pushy').css({
                    transform: "translate3d(0, 0, 0)"
                });
                $('#menu-btn').removeClass( "active" );
            }
        } else {
            windowWidth = 280;
            $('.pushy').width(windowWidth);

        }
    });

    // MASK INPUT
    $(".phone__field").mask("+7 999 999 99 99", { autoclear: false } );


    // FEEDBACK FORM
    $("#feedback-form").validate({
        errorPlacement: function(error, element) {
            error.appendTo('.form__error');
        }
    });

    $('#feedback-form').submit(function(){
        if(!$("#agree2").is(':checked')) {
            $("#agree2").parent().addClass('invalid');
            return false;
        }
        return true;
        var msg   = $('#feedback-form').serialize();
        $.ajax({
            type: 'POST',
            url: 'send.php',
            data: msg,
            dataType: 'json',
            success: function(data) {
                $('#results').html(data);
                $('.form-result').text('Успех! Форма отправлена.');
            },
            error:  function(xhr, str){
                console.log('Возникла ошибка: ' + xhr.responseCode);
                $('.contacts-form-result').text('Ошибка! Форма не отправлена!');
            }
        });
    });


    // YANDEX MAP
    if ($('#map').length) {
        ymaps.ready(function () {
            var myMap = new ymaps.Map('map', {
                    center: [56.6336,36.8424],
                    zoom: 12,
                    scrollZoom: false,
                    controls: []
                }, {
                    searchControlProvider: 'yandex#search'
                }),



                // Создаём макет содержимого.
                MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
                ),

                // добавляем зум


                myPlacemarkWithContent = new ymaps.Placemark([56.6343, 36.8858], {
                    hintContent: '',
                    balloonContent: '',
                    iconContent: ''
                }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#imageWithContent',
                    // Своё изображение иконки метки.
                    iconImageHref: 'img/geo.png',
                    // Размеры метки.
                    iconImageSize: [51, 51],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-24, -24],
                    // Смещение слоя с содержимым относительно слоя с картинкой.
                    iconContentOffset: [15, 15],
                    // Макет содержимого.
                    iconContentLayout: MyIconContentLayout
                });

            myMap.controls.add('zoomControl');
            myMap.behaviors.disable('scrollZoom');

            myMap.geoObjects
                .add(myPlacemarkWithContent);
        });
    }


});
