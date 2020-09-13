(function ($) {
    'use strict'

    // Smooth scrolling using jQuery easing
    $('#mainNav li a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top - 50)
            }, 1000, "easeInOutExpo");
            return false;
            }
        }
    }); 

    // Closes responsive menu when a scroll trigger link is clicked
    $('#mainNav li a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 56
    });

    $(window).on('scroll', function() {
        var wScroll = $(this).scrollTop();
        if (wScroll > 1) {
            $('#mainNav').addClass('top-nav-fixed');
        } else {
            $('#mainNav').removeClass('top-nav-fixed');
        };
    });
   
    /*
    ========================================
    Preloader
    ========================================
    */
    if ($('#preloader').length) {
        $(window).on('load', function () {
            $('#preloader').delay(350).fadeOut('slow');
            $('body').delay(350).css({
                'overflow': 'visible'
            });
        });
    }

    /*
    ========================================
    circular progress
    ========================================
    */ 
    $('.circlechart').circlechart(); // Initialization
 
 
    /*
    ========================================
    Portfolio
    ========================================
    */
    if ($('#portfolio-area').length) {
        $('#container').imagesLoaded(function () {
            var $grid = $('.portfolio-grid').isotope({
                itemSelector: '.portfolio-grid-item',
                percentPosition: true,
                layoutMode: 'masonry',
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: 1,
                }
            });

            // filter items on li click
            $('.portfolio-filter').on('click', 'li', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });

            //for menu active class
            $('.portfolio-filter li').on('click', function (event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });
        });
    }
      
  
 
    /*
    ========================================
    Creative Experts
    ========================================
    */
    if ($('.creative-experts-slider').length) {
        $('.creative-experts-slider').owlCarousel({
            loop: true,
            dots: true,
            nav:false,
            margin: 30,
            dotsEach: true,
            autoplay: false,
            autoplayTimeout: 7500,
            smartSpeed: 1000,
            nav: false,  
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
    }

    /*
    ========================================
    Counter
    ========================================
    */
    if ($('counter')) {
        $('.counter').countUp({
            'time': 3000,
            'delay': 10
        });
    }

    /*
    ========================================
    Counter
    ========================================
    */
    if ($('counter')) {
        $('.slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            centerMode: true,
            variableWidth: true, 
            focusOnSelect: true,
            cssEase: 'linear',
            touchMove: true,
            prevArrow:'<button class="slick-prev"> </button>',
            nextArrow:'<button class="slick-next"> </button>',
            asNavFor: '.slider-for',
            //         responsive: [                        
            //             {
            //               breakpoint: 576,
            //               settings: {
            //                 centerMode: false,
            //                 variableWidth: false,
            //               }
            //             },
            //         ]
        });
        
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            draggable: false, 
            dots: true,
            asNavFor: '.slider'
        });
        
        
        var imgs = $('.slider img');
        imgs.each(function(){
        var item = $(this).closest('.item');
        item.css({
            'background-image': 'url(' + $(this).attr('src') + ')', 
            'background-position': 'center',            
            '-webkit-background-size': 'cover',
            'background-size': 'cover', 
            'background': 'onsen',
        });
        $(this).hide();
        });
         
    }

    /*
    ========================================
    Creative Experts
    ========================================
    */
    if ($('.feedback-slider').length) {
        $('.feedback-slider').owlCarousel({
            loop: true,
            dots: true,
            nav:false,
            margin: 30,
            dotsEach: true,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 1000,
            nav: false,  
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
    }
 
    /*
    ========================================
    video popup
    ========================================
    */
    $('#video-gallery').lightGallery(); 
    

    /*
    ========================================
    Wow Animated
    ========================================
    */
    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       1,          // distance to the element when triggering the animation (default is 0)
            mobile:       false,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null,    // optional scroll container selector, otherwise use window,
            resetAnimation: true,     // reset animation on end (default is true)
        }
    );
    wow.init();

    /*
    ========================================
    Scroll to top
    ========================================
    */
    if ($('#scroll-top').length) {
        function scrollToTop() {
            var $scrollUp = $('#scroll-top'),
                $lastScrollTop = 0,
                $window = $(window);

            $window.on('scroll', function () {
                var st = $(this).scrollTop();
                if (st > $lastScrollTop) {
                    $scrollUp.removeClass('show');
                } else {
                    if ($window.scrollTop() > 200) {
                        $scrollUp.addClass('show');
                    } else {
                        $scrollUp.removeClass('show');
                    }
                }
                $lastScrollTop = st;
            });

            $scrollUp.on('click', function (evt) {
                $('html, body').animate({ scrollTop: 0 }, 600);
                evt.preventDefault();
            });
        }
        scrollToTop();
    }

    
 
     


})(jQuery);

 