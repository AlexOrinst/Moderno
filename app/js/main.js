$(function(){

if ($('.products__inner-box').length) {
    var mixer = mixitup('.products__inner-box');
  };
   
    $('.rate-star').rateYo({
        rating: 5,
        starWidth: '12px',
        readOnly: true
      });

    $('.product-slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToScroll: 4,
        slidesToShow: 4
    });

    $(".js-range-slider").ionRangeSlider({
      type: "double",
      min: 0,
      max: 1000,
      from: 0,
      to: 600,
      prefix: "$"
    });

    $('.icon-th-list').on('click', function(){
      $('.products__item').addClass('list')
    });
});