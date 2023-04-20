function tabs(n) {
    $('.tabs-nav a').removeClass('active');
    $('.tabs-nav a.t' + n).addClass('active');
    $('.tabs-block').fadeOut(0);
    $('.tabs-block.tab_' + n).fadeIn(222);
};

$(document).ready(function() {
    /*======Production-filter=============*/
  $(".production-filter__btn").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $(".production-filter__inner").slideToggle();
  });
  /*==========/production-filter=========*/

	/*======Lang-toggle=============*/
  $(".header-lang").on("click", function() {
    $(this).toggleClass("active");
    $(".header-lang__dropdown").slideToggle();
  });
  /*==========/lang-toggle=========*/

  /*======Menu-toggle=============*/
  $(".burger").on("click", function() {
    $(".mobile-menu").addClass('active');
    $("body").addClass('hidden');
  });

    $(".mobile-menu__close").on("click", function() {
    $(".mobile-menu").removeClass('active');
    $("body").removeClass('hidden');
  });
  /*==========/menu-toggle=========*/

  
  /*======Text-more=============*/
    $(".text-more__btn").on("click", function(event) {
        event.preventDefault();
      $(this).parent().find(".text-more").slideToggle();
  });
  /*==========/text-more=========*/

    /*======Vacancy-toggle=============*/
  $(".vacancy__header").on("click", function() {
    $(this).toggleClass("active");
    $(this).next().slideToggle();
  });
  /*==========/vacancy-toggle=========*/

      /*======List-box-toggle=============*/
  $(".list-box_desc .list-box__title").on("click", function() {
    if ($(window).width() <= 540){
      $(this).toggleClass("active");
      $(this).next().slideToggle();   
    }
  });
  /*==========/list-box-toggle=========*/

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

/*======View-btn=============*/
    $(".view-btn a.table").on("click", function(event) {
        event.preventDefault();
      $(this).addClass('active');
      $(".view-btn a").not(this).removeClass('active');
      $(".manufacture__inner").removeClass('line');
    });

    $(".view-btn a.line").on("click", function(event) {
        event.preventDefault();
      $(this).addClass('active');
      $(".view-btn a").not(this).removeClass('active');
      $(".manufacture__inner").addClass('line');
    });
  /*==========/view-btn=========*/

  /*==========Mobile-menu==========*/
    $(".mobile-menu__link-drop").on("click", function(event) {
        event.preventDefault();
      $(".mobile-menu__submenu").slideToggle();
      $(".mobile-menu__hide").hide();
    });

    $(".mobile-menu__back").on("click", function(event) {
        event.preventDefault();
      $(".mobile-menu__submenu").slideUp();
      $(".mobile-menu__hide").show();
    });
  /*==========/mobile-menu==========*/

  /*==========Nav-dropdown==========*/
    $(".nav-drop").hover(function(event) {
        event.preventDefault();
      $(this).find('.nav__link').toggleClass('active');
      $(this).find(".nav-dropdown").fadeToggle();
    });
  /*==========/nav-dropdown==========*/

  /*==========Text-block__more==========*/
    $(".text-block__btn-more").on("click", function(event) {
        event.preventDefault();
        $(this).find('.text-block__show').toggleClass('hide');
        $(this).find(".text-block__hide").toggleClass('show');
        $(this).prev().slideToggle(333);
    });
  /*==========/text-block__more==========*/

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
      slidesPerRow: 1,
      rows: 3,
      prevArrow: $('.partner .slider-arrows__arrow_prev'),
      nextArrow: $('.partner .slider-arrows__arrow_next'),
      responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesPerRow: 1,
          rows: 3,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesPerRow: 1,
          rows: 3,
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 415,
        settings: {
          slidesPerRow: 1,
          rows: 1,
          slidesToShow: 1,
        }
      },
      ]
  });
  /*==/partner__slider==*/

   /*==About__slider==*/
  $('.about__slider').slick({
      infinite: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.about__inner .slider-arrows__arrow_prev'),
      nextArrow: $('.about__inner .slider-arrows__arrow_next'),
  });/*==/about__slider==*/


  /*==Sertificats__slider==*/
  $('.sertificats__slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: $('.sertificats .slider-arrows__arrow_prev'),
      nextArrow: $('.sertificats .slider-arrows__arrow_next'),
      responsive: [
      {
        breakpoint: 993,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          prevArrow: $('.sertificats .slider-arrows__arrow_prev'),
          nextArrow: $('.sertificats .slider-arrows__arrow_next'),
        }
      },
      {
        breakpoint: 766,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow: $('.sertificats .slider-arrows__arrow_prev'),
          nextArrow: $('.sertificats .slider-arrows__arrow_next'),
        }
      },
      {
        breakpoint: 415,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: $('.sertificats .slider-arrows__arrow_prev'),
          nextArrow: $('.sertificats .slider-arrows__arrow_next'),
        }
      }
    ]
  });/*==/sertificats__slider==*/

  /*==Reviews__slider==*/
  $('.reviews__slider').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow: $('.reviews .slider-arrows__arrow_prev'),
      nextArrow: $('.reviews .slider-arrows__arrow_next'),
      responsive: [
        {
          breakpoint: 1200, 
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
        },
        {
          breakpoint: 765, 
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
        },
        {
          breakpoint: 547, 
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
        },
        {
          breakpoint: 377, 
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
        },
      ]
  });/*==/reviews__slider==*/

    /*==Testimonial__slider==*/
  $('.testimonial__slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      slidesPerRow: 1,
      rows: 2,
      prevArrow: $('.testimonial .slider-arrows__arrow_prev'),
      nextArrow: $('.testimonial .slider-arrows__arrow_next'),
      responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesPerRow: 1,
          rows: 2,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 547,
        settings: {
          slidesPerRow: 1,
          rows: 1,
          slidesToShow: 1,
        }
      },
      ]
  });
  /*==/testimonial__slider==*/

     /*==Supply__slider==*/
  $('.supply__slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 2,
        }
      },
      ]
  });/*==/supply__slider==*/

     /*==Labor__slider==*/
  $('.labor__slider').slick({
      infinite: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.labor__inner .slider-arrows__arrow_prev'),
      nextArrow: $('.labor__inner .slider-arrows__arrow_next'),
  });/*==/labor__slider==*/

       /*==header__stat==*/
  $('.header__stat').slick({
      infinite: true,
      slidesToShow: 9,
      slidesToScroll: 2,
      arrows: false,
      variableWidth: true,
      responsive: [
      {
        breakpoint: 1251,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
        }
      },
      ]
  });/*==/header__stat==*/


  /*======/sliders=============*/

/*=======Contact-block (number)======*/
  $('.contact-block__inner').removeClass('one').addClass(function(){
    return ["none", "one", "two", "three", "four"]
       [$(this).children('.contact-block__box').length];
  });
/*=======/contact-block (number)======*/

  /*============Progress==========*/
  var $slider = $('.photo-slider__slider');
  var $progressBar = $('.progress');
  var $progressBarLabel = $( '.photo-slider__label' );
  
  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    
    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
    
    $progressBarLabel.text( calc + '% completed' );
  });
  
  $slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 400,
    prevArrow: $('.photo-slider__arrow_prev'),
    nextArrow: $('.photo-slider__arrow_next'),
    responsive: [
      {
        breakpoint: 861,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      ]
  });
  /*============/progress==========*/

  /*============Product-slider==========*/

 $('.product-slider__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    
    $('.product-slider__progress')
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
    
    $( '.product-slider__label' ).text( calc + '% completed' );
  });
  
  $('.product-slider__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 400,
    slidesPerRow: 1,
    rows: 2,
    prevArrow: $('.product-slider__arrow_prev'),
    nextArrow: $('.product-slider__arrow_next'),
    responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesPerRow: 1,
        rows: 2,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesPerRow: 1,
        rows: 1,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesPerRow: 1,
        rows: 1,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 415,
      settings: {
        slidesPerRow: 1,
        rows: 1,
        slidesToShow: 1,
      }
    },
    ]
  });
  /*============/product-slider==========*/

/*============Product-slider-new==========*/
 $('.product-slider__slider-new').on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    
    $('.product-slider__progress')
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
    
    $( '.product-slider__label' ).text( calc + '% completed' );
  });
  

function productNew()
{
  if($(window).width() > 414)
  {
    $('.product-slider__slider-new').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 400,
      slidesPerRow: 1,
      rows: 2,
      prevArrow: $('.product-slider__arrow_prev'),
      nextArrow: $('.product-slider__arrow_next'),
      responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesPerRow: 1,
          rows: 2,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesPerRow: 1,
          rows: 2,
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 415,
        settings: "unslick"
      },
      ]
    });
  };
};

  $(window).resize(function(){
    productNew();
  });

  productNew();

  

  $(".product-slider_new .btn").on("click", function(event) {
    event.preventDefault();
    $(".product-slider__slide").show();
    $(this).hide();
  });
  /*==========/product-slider_new=========*/

  /*==================Slider-nav==========*/
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  prevArrow: $('.slider-arrows__arrow_prev'),
  nextArrow: $('.slider-arrows__arrow_next'),
  responsive: [
        {
          breakpoint: 415,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            centerMode: false,
            focusOnSelect: true,
            prevArrow: $('.slider-arrows__arrow_next'),
            nextArrow: $('.slider-arrows__arrow_next'),
          }
        }
      ]
});  

});




