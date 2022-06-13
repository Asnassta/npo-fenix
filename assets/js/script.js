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

  /*======Popup=============*/
   $(".about__item").on("click", function() {
    $(".popup-about").fadeIn();
    //$('.popup-about').css('top', $(window).scrollTop()+'px');
    $("body").addClass('hidden');
  });

   $(".popup-about__close").on("click", function() {
    $(".popup-about").fadeOut();
    $("body").removeClass('hidden');
  });

  /*==========/popup=========*/

  /*======List-product__more=============*/
    $(".list-product__more").on("click", function(event) {
        event.preventDefault();
      $(".list-product__col_more").slideToggle();
  });
  /*==========/list-product__more=========*/

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

  /*==About__slider==*/
  $('.popup-about__slider').slick({
      infinite: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.popup-about .slider-arrows__arrow_prev'),
      nextArrow: $('.popup-about .slider-arrows__arrow_next'),
  });/*==/about__slider==*/

  /*==Intro__slider==*/
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
  });/*==/intro__slider==*/

  /*======/sliders=============*/

});



function bzoom(Element, t) {
  var block = document.getElementById('map');
  if(t == 'plus')
  {
    
      x += 15;
      block.style.width = x + '%';
    }
    else
    {

      x -= 15;
      block.style.width = x + '%';
    }
}

    //КОД ПРИБЛИЖЕНИЯ И ОТДАЛЕНИЯ
var block = document.getElementById('map');
var x = 100;

block.onwheel = function(event) {
        if(event.deltaY < 0 && x < 500){
        x += 5;
        this.style.width = x + '%';
    }
    if(event.deltaY > 0 && x > 100){
        x -= 5;
        this.style.width = x + '%';
    }
    return false;
}

//КОД ПЕРЕМЕЩЕНИЯ
var blockmove = document.getElementById('border1');
var left = 0, tp = 0, xx, yy;


blockmove.onmousedown = function(e) {
  e.preventDefault();
  xx = e.pageX;
  yy = e.pageY;


  function moveAt(e) {
    block.style.left = (left + e.pageX - xx) + 'px';
    block.style.top = (tp + e.pageY - yy) + 'px';
  }

  blockmove.onmousemove = function(e) {
    moveAt(e);
  }

blockmove.onmouseleave = blockmove.onmouseup = function(e) {
    left = parseFloat(block.style.left);
    tp = parseFloat(block.style.top);
    blockmove.onmouseleave = null;
    blockmove.onmousemove = null;
    blockmove.onmouseup = null;
  }
}