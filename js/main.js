(function($) {

"use strict";

    /*
    |--------------------------------------------------------------------------
    | Template Name: Buildm
    | Version: 1.0.1
    |--------------------------------------------------------------------------
    |--------------------------------------------------------------------------
    | TABLE OF CONTENTS:
    |--------------------------------------------------------------------------
    |
    | 1. Scripts initialization
    | 2. Preloader
    | 3. Primary Menu
    | 4. Scroll Function
    | 5. Scroll Up
    | 6. Owl Carousel
    | 7. Smooth Scroll
    | 8. Accordian
    | 9. Portfolio
    | 10. Magnific Popup
    | 11. Tamjid Counter
    |
    */

    /*--------------------------------------------------------------
        1. Scripts initialization
    --------------------------------------------------------------*/

    $(window).on('load', function() {
        $(window).trigger("scroll");
        $(window).trigger("resize");
        preloaderSetup();
        portfolioMsSetup();
    });

    $(document).ready(function() {
        $(window).trigger("resize");
        primaryMenuSetup();
        mobileMenu();
        scrollUp();
        owlCarouselSetup();
        smoothScrollSetup();
        accordianSetup();
        portfolioMsSetup();
        magnificPopupSetup();
        counterUp();
        new WOW().init();
        $('.parallax').parallax("50%", 0.3);
    });

    $(window).on('resize', function() {
        mobileMenu();
        portfolioMsSetup();
    });

    $(window).on('scroll', function() {
        scrollFunction();
    });

    /*--------------------------------------------------------------
        2. Preloader
    --------------------------------------------------------------*/

    function preloaderSetup() {

        $("body").imagesLoaded(function () {
            $(".t-circle").fadeOut();
            $("#preloader").delay(200).fadeOut("slow").remove();
        });

    }

    /*--------------------------------------------------------------
        3. Primary Menu
    --------------------------------------------------------------*/
    function primaryMenuSetup() {

        $( ".primary-nav-list" ).before( "<div class='m-menu-btn'><span></span></div>" );

        $(".m-menu-btn").on('click', function(){
            $( this ).toggleClass( "m-menu-btn-ext" );
            $(this).siblings('.primary-nav-list').slideToggle("slow");
        });

        $( ".menu-item-has-children > ul" ).before( "<i class='fa fa-plus m-dropdown'></i>" );

        $('.m-dropdown').on('click', function() {
            $(this).siblings('ul').slideToggle("slow");
            $(this).toggleClass("fa-plus fa-minus")
        });

    }

    function mobileMenu() {

        if ($(window).width() <= 983){  
            $('.primary-nav').addClass('m-menu').removeClass('primary-nav');
        } else {
            $('.m-menu').addClass('primary-nav').removeClass('m-menu');
        }

    }

    /*--------------------------------------------------------------
        4. Scroll Function
    --------------------------------------------------------------*/

    function scrollFunction() {

        var scroll = $(window).scrollTop();
        if(scroll >= 10) {
            $(".site-header").addClass("small-height");
        } else {
            $(".site-header").removeClass("small-height");
        }
        
        if(scroll >= 350) {
            $(".scrollup").addClass("scrollup-show");
        } else {
            $(".scrollup").removeClass("scrollup-show");
        }

    }

    /*--------------------------------------------------------------
        5. Scroll Up
    --------------------------------------------------------------*/

    function scrollUp() {

        $( "body" ).append( "<span class='scrollup'></span>" );

        $('.scrollup').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 1000);
        });

    }


    /*--------------------------------------------------------------
        6. Owl Carousel
    --------------------------------------------------------------*/

    function owlCarouselSetup() {

        /* Hero Slider */
        $('.hero-slider').owlCarousel({
            items:1,
            loop:true,
            margin:0,
            nav:false,
            dots:true,
            autoplay:true,
            autoplayHoverPause:false,
            smartSpeed:900,
            autoplayTimeout:5000         
        });

        /* Testimonial */
        $('.testimonial').owlCarousel({
            items:1,
            loop:true,
            margin:0,
            nav:false,
            dots:true,
            autoplay:true,
            autoplayHoverPause:false,
            smartSpeed:1200,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplayTimeout:5000        
        });

        /* Owl Carousel For Partner Logo */
        $('.clients').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            navText:false,
            autoplay:true,
            smartSpeed:600,
            autoplayTimeout:3000,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                800:{
                    items:4
                },
                1000:{
                    items:5
                }
            }
        });

    }

    /*--------------------------------------------------------------
        7. Smooth Scroll
    --------------------------------------------------------------*/

    function smoothScrollSetup() {

        if (typeof smoothScroll == 'object') {
            smoothScroll.init();
        }

    }

    /*--------------------------------------------------------------
        8. Accordian
    --------------------------------------------------------------*/
  
    function accordianSetup() {

        var $this = $(this);
        $( ".accordian-head" ).append( "<span class='accordian-toggle'></span>" );
        $('.single-accordian').filter(':nth-child(n+2)').children('.accordian-body').hide();
        $('.single-accordian:first-child').children('.accordian-head').addClass('active');
        $('.accordian-head').on('click', function() {
            $(this).parent('.single-accordian').siblings().children('.accordian-body').slideUp();
            $(this).siblings().slideToggle();
            /* Accordian Active Class */
            $(this).toggleClass('active');
            $(this).parent('.single-accordian').siblings().children('.accordian-head').removeClass('active');
        });

    }


    /*--------------------------------------------------------------
        9. Portfolio
    --------------------------------------------------------------*/
    function portfolioMsSetup() {

        $('.portfolio').isotope({
            itemSelector: '.portfolio-item',
            transitionDuration: '0.60s',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });

        /* Active Class of Portfolio*/
        $('.portfolio-filter ul li').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

        /*=== Portfolio filtering ===*/
        $('.portfolio-filter ul').on('click', 'a', function() {
            var filterElement = $(this).attr('data-filter');
            $(this).parents(".portfolio-filter").next().isotope({
                filter: filterElement
            });
        });

    }

  /*--------------------------------------------------------------
    10. Magnific Popup
  --------------------------------------------------------------*/
    function magnificPopupSetup() {

        $('.instagram').magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function(element) {
                    return element.find('img');
                }
            }
          
        });

    }

    /*--------------------------------------------------------------
        11. Tamjid Counter
    --------------------------------------------------------------*/

    function counterUp() {

        $('.counter').tamjidCounter({
            duration: 3000,
            delay: 0,
            easing: 'swing'
        });

    }

   
})(jQuery); // End of use strict