$(document).ready(function(){
    $('#banner-carousel ').owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay: 1,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1,
              
          },
          1000:{
              items:1,
            
          }
      }
    });
  });
