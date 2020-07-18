jQuery(function ($) {
    "use strict";
      /* Testimonial */
      $('.testimonial').owlCarousel({
          items:1,
          loop: true,
          smartSpeed: 500,
          responsiveClass: true,
          nav: false,
          dots: true,
          dotsContainer: ".owl-thumbsss",
          autoplay: false,
          autoplayHoverPause: true,
          autoplayTimeout: 3000,
          responsive: {
              0: {
                  items: 1,
                  margin: 30,
              },
              480: {
                  items: 1,
                  margin: 30,
              },
              992: {
                  items: 1,
                  margin: 30,
              }
          }
      });

    
    
    $("[data-trigger]").on("click", function(e){
        e.preventDefault();
        e.stopPropagation();
        var offcanvas_id =  $(this).attr('data-trigger');
        $(offcanvas_id).toggleClass("show");
        $('body').toggleClass("offcanvas-active");
        $(".screen-overlay").toggleClass("show");
    }); 

    $(".btn-close, .screen-overlay").click(function(e){
        $(".screen-overlay").removeClass("show");
        $(".mobile-offcanvas").removeClass("show");
        $("body").removeClass("offcanvas-active");
    }); 


    
});