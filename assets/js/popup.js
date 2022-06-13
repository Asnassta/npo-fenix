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