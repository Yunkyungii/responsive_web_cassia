$(function () {


    $('.mopen').on('click', function () {
        $(this).toggleClass('on')
        $('.gnb').toggleClass('on')
    });

    $('.gnb').on('wheel touchmove', function (e) {
        e.preventDefault();
    })


    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        // 스크롤 값을 구할 수 있는 조건문
        if (sct > 0) {
            $('.header').addClass('on')
        }
        else {
            $('.header').removeClass('on')
        }
    });

    $('.mainSlide').slick({
        arrows: false,
        fade: true,
        dots: true,
    });

    $('.mainVisual .arrows .left').on('click', function () {
        $('.mainSlide').slick('slickPrev')
    });
    $('.mainVisual .arrows .right').on('click', function () {
        $('.mainSlide').slick('slickNext')
    });


})