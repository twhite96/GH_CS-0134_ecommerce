$(document).ready(function() {
  $('.slide').slick({
    slidesToShow: 3,
  });
});
$('.slide').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 2,
  accessibility: true,
  dots: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
