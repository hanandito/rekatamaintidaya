$(document).ready(function() {
     $('.button-menu').click(function() {
      $(".side-nav").addClass("active");
    })
    $('.button-close, .side-nav li').click(function() {
      $(".side-nav").removeClass("active");
    })
  $('.carousel-testimonials').addClass('owl-carousel owl-theme').owlCarousel({
      loop: true,
      responsiveClass: true,
      responsive:{
        0: {
          items: 1,
          dots: true,
          nav: false
        },
        600: {
          items: 1,
          dots: true,
          nav: false
        },
        1000: {
          items: 3,
          dots: false,
          nav: false
        }
      }
    });
    $('.carousel-clients').addClass('owl-carousel owl-theme').owlCarousel({
      loop: true,
      responsiveClass: true,
      autoplay:true,
      autoplayTimeout:1000,
      autoplayHoverPause:true,
      responsive:{
        0: {
          items: 4,
          dots: false,
          nav: false
        },
        600: {
          items: 1,
          dots: true,
          nav: false
        },
        1000: {
          items: 6,
          dots: false,
          nav: false
        }
      }
    });
  });
  $(document).ready(function(){
    // Add smooth scrolling to all links
    $(".nav-birthday-2 a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav_rekatama").style.top = "0";
  } else {
    document.getElementById("nav_rekatama").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
}