$(document).ready(function() {

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

  /*======/sliders=============*/

});



var x = 100;
$(".popup-about__slider").on("beforeChange", function (){
  $('.popup-about__slider .main-border img').attr('id', '');
  $('.popup-about__slider .slick-slide.slick-active img').attr('style', '');

  setTimeout(function() {
    $('.popup-about__slider .slick-slide.slick-active .main-border img').attr('id', 'active_border');
    drag();
  }, 100);


  x = 100;
  left = 0
  tp = 0

});


function bzoom(t) {
  
  $('.popup-about__slider .main-border').css('height', $(window).height()+'px');
  $('.popup-about__slider .main-border').css('overflow', 'hidden');

 img = $('.popup-about__slider .slick-slide.slick-active img');
  if(t == 'plus')
  {
    
      x += 15;
      img.css('width', x + '%');
    }
    else
    {

      x -= 15;
      if(x > 50)
      {
        
        img.css('width', x + '%');
      }
    }
}


  /*======Popup=============*/
  $(".about__item").on("click", function() {
    $(".popup-about").fadeIn();
    $("body").addClass('hidden');
  
  
      /*==About__slider==*/
  $('.popup-about__slider').slick({
    infinite: true,
    dots: true,
    draggable: false,
    swipeToSlide: false,
    touchMove: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.popup-about .slider-arrows__arrow_prev'),
    nextArrow: $('.popup-about .slider-arrows__arrow_next'),
});/*==/about__slider==*/
  });

   $(".popup-about__close").on("click", function() {
    $(".popup-about").fadeOut();
    $("body").removeClass('hidden');
  });

  /*==========/popup=========*/

function drag()
{
    //КОД ПЕРЕМЕЩЕНИЯ
  var blockmove = document.getElementById('active_border');
  var left = 0, tp = 0, xx, yy;
  blockmove.onmousedown = function(e) {
    e.preventDefault();
    xx = e.pageX;
    yy = e.pageY;

    function moveAt(e) {
       $('.popup-about__slider .slick-slide.slick-active img').css('left', (left + e.pageX - xx) + 'px');
       $('.popup-about__slider .slick-slide.slick-active img').css('top', (tp + e.pageY - yy) + 'px');
 
    }

    blockmove.onmousemove = function(e) {
      moveAt(e);
    }

  blockmove.onmouseleave = blockmove.onmouseup = function(e) {
      left = parseFloat($('.popup-about__slider .slick-slide.slick-active img').css('left'));
      tp = parseFloat($('.popup-about__slider .slick-slide.slick-active img').css('top'));
      blockmove.onmouseleave = null;
      blockmove.onmousemove = null;
      blockmove.onmouseup = null;
    }
  }


}

drag();