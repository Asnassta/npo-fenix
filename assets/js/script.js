$(document).ready(function() {
	/*======Lang-toggle=============*/
  
  $(".header-lang").on("click", function() {
    $(this).toggleClass("active");
    $(".header-lang__dropdown").slideToggle();
  });
  /*==========/lang-toggle=========*/

  /*======Menu-toggle=============*/
  $(".header__burger").on("click", function() {
    $(".mobile-menu").addClass('active');
    $("body").addClass('hidden');
  });

  $(".footer__burger").on("click", function() {
    $(".mobile-menu").addClass('active');
    $(".mobile-menu").addClass('footer');
    $("body").addClass('hidden');
  });

    $(".mobile-menu__close").on("click", function() {
    $(".mobile-menu").removeClass('active');
    $(".mobile-menu").removeClass('footer');
    $("body").removeClass('hidden');
  });
  /*==========/menu-toggle=========*/

  /*=========Smooth scroll=============*/
  $("[data-scroll]").on("click", function(event) {
  event.preventDefault();
 
      blockID = $(this).data('scroll');
     
      blockOffset = $('#'+blockID).offset().top;
 
    $("html, body").animate ({
      scrollTop: blockOffset - 30
    }, 500);
  });
/*=========/smooth scroll=============*/

  /*======Sliders=============*/

  /*==Intro__slider==*/
  $('.intro__slider').slick({
      infinite: true,
      //fade: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.intro .slider-arrows__arrow_prev'),
      nextArrow: $('.intro .slider-arrows__arrow_next'),
  });/*==/intro__slider==*/

  /*==Product__slider==*/
  $('.product__slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.product .slider-arrows__arrow_prev'),
      nextArrow: $('.product .slider-arrows__arrow_next'),
      responsive: [
      {
        breakpoint: 993,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow: $('.product .slider-arrows__arrow_prev'),
          nextArrow: $('.product .slider-arrows__arrow_next'),
        }
      },
      {
        breakpoint: 546,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: $('.product .slider-arrows__arrow_prev'),
          nextArrow: $('.product .slider-arrows__arrow_next'),
        }
      }
    ]
  });/*==/product__slider==*/

    /*==Intro__slider==*/
  $('.service__slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.service .slider-arrows__arrow_prev'),
      nextArrow: $('.service .slider-arrows__arrow_next'),
      responsive: [
      {
        breakpoint: 861,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow: $('.service .slider-arrows__arrow_prev'),
          nextArrow: $('.service .slider-arrows__arrow_next'),
        }
      },
      {
        breakpoint: 546,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: $('.service .slider-arrows__arrow_prev'),
          nextArrow: $('.service .slider-arrows__arrow_next'),
        }
      }
    ]
  }).on('setPosition', function (event, slick) {
  
  h = 0;
  par =  $('.service__slider .slick-slide');
   par.each(function() {
     
     
 if($(this).height() > h)
 {
   h = $(this).height();
 }
 

});
 
  $('.service__slider .slick-slide').css('height', h+'px');
 
});
/*==/service__slider==*/

/*==Partner__slider==*/
  $('.partner__slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      rows: 3,
      prevArrow: $('.partner .slider-arrows__arrow_prev'),
      nextArrow: $('.partner .slider-arrows__arrow_next'),
      responsive: [
      {
        breakpoint: 993,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 3,
          prevArrow: $('.partner .slider-arrows__arrow_prev'),
          nextArrow: $('.partner .slider-arrows__arrow_next'),
        }
      },
      {
        breakpoint: 769,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 3,
          prevArrow: $('.partner .slider-arrows__arrow_prev'),
          nextArrow: $('.partner .slider-arrows__arrow_next'),
        }
      },
      {
        breakpoint: 415,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          prevArrow: $('.partner .slider-arrows__arrow_prev'),
          nextArrow: $('.partner .slider-arrows__arrow_next'),
        }
      },
      ]
  });
  /*==/partner__slider==*/

  /*======/sliders=============*/

});

