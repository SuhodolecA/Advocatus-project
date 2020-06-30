$( document ).ready(function() {

    // Slick slider
    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5500,
    });

    
    var header = $('#header'),
        introH = $('#intro').innerHeight(),
        scrollOffset = $(window).scrollTop();
        console.log(scrollOffset);

    // Fixed Header and change active menu as scroll
    checkScroll(scrollOffset);

    $(window).on('scroll', function() {
        scrollOffset = $(this).scrollTop();
        
        checkScroll(scrollOffset);

        // change active menu as scroll
        var about = $('#about').offset().top,
        practice = $('#practice').offset().top,
        lawyers = $('#lawyers').offset().top,
        publications = $('#publications').offset().top,
        faq = $('#faq').offset().top,
        contact = $('#contact').offset().top;

        if (scrollOffset >= about) {
            $('.nav__link_1').addClass('active');
        } else {
            $('.nav__link_1').removeClass('active');
        }

        if (scrollOffset >= practice) {
            $('.nav__link_2').addClass('active');
            $('.nav__link_1').removeClass('active');
        } else {
            $('.nav__link_2').removeClass('active');
        }

        if (scrollOffset >= lawyers) {
            $('.nav__link_3').addClass('active');
            $('.nav__link_2').removeClass('active');
        } else {
            $('.nav__link_3').removeClass('active');
        }

        if (scrollOffset >= publications) {
            $('.nav__link_4').addClass('active');
            $('.nav__link_3').removeClass('active');
        } else {
            $('.nav__link_4').removeClass('active');
        }

        if (scrollOffset >= faq) {
            $('.nav__link_5').addClass('active');
            $('.nav__link_4').removeClass('active');
        } else {
            $('.nav__link_5').removeClass('active');
        }

        if (scrollOffset >= contact) {
            $('.nav__link_6').addClass('active');
            $('.nav__link_5').removeClass('active');
        } else {
            $('.nav__link_6').removeClass('active');
        }

    }); 

    function checkScroll(scrollOffset) {
        if ( scrollOffset >= introH ) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }

    // Smooth scroll
    $('[data-scroll]').on( 'click', function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

            $('#nav li').removeClass('active');
            $this.addClass('active');

            $('html, body').animate({
                scrollTop: blockOffset
            }, 500);

    });

    // Menu Nav Toggle
    $('#hamburger').on( 'click', function(event) {
        event.preventDefault();

        $(this).toggleClass('active');
        $('#nav').toggleClass('active');

    });

    // Open Modal Window 
    $('#intro_btn').on( 'click', function(event) {
        event.preventDefault();

        $('#modal').removeClass('hide')
    });

    // Close Modal Window 
    $('#close_modal').on ('click', function(event) {
        event.preventDefault();
        $('#modal').addClass('hide');

    });

    // Active tabs
    $('[data-tab]').on('click', function(event) {
        event.preventDefault();

        var tablinks = $('.tablinks'),
            tabId = $(this).data('tab'),
            tabcontent = $('.tabcontent__item');

        tablinks.removeClass('active');
        tabcontent.removeClass('active');
    

        $(this).addClass('active');
        $(tabId).addClass('active');

        if($(this).hasClass('active')) {
            $('.question__content').css({
                display: 'block'
            });
        } else {
            $('.question__content').css({
                display: 'none'
            });
        }

    });

    // Close tab content button
    $('.close__tab').on('click', function() {

        var closeTab = $('.close__tab');

        closeTab.parent().css({
            display: 'none'
        });

        $('.tablinks').removeClass('active');

    });

});