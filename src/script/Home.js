 $(document).ready(function(){
    $('.slick-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      dots: true,
      speed: 1500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            speed: 1500,
        }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1500,
        }
        }
      ]
    });
  });
