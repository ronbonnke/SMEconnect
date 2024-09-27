$(document).ready(function () {
  const slickSlider = $('.slick-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    speed: 1500,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 1500,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1500,
        },
      },
    ],
  });

  // Function to update the progress bar
  function updateProgressBar() {
    const totalSlides = $('.slick-slider .slick-slide').not('.slick-cloned').length;
    const slidesPerGroup = 3;
    const currentSlide = $('.slick-slider').slick('slickCurrentSlide');
    const groupIndex = Math.floor(currentSlide / slidesPerGroup);

    // Calculate progress percentage for each group
    let progressPercent;
    if (groupIndex === 0) {
      progressPercent = 33;
    } else if (groupIndex === 1) {
      progressPercent = 67;
    } else if (groupIndex >= 2) {
      progressPercent = 100;
    }

    if (currentSlide === totalSlides - 1) {
      $('.progress').css('background-size', '100% 100%');
    } else {
      $('.progress').css('background-size', progressPercent + '% 100%');
    }
  }

  slickSlider.on('init', updateProgressBar);

  slickSlider.on('afterChange', function (event, slick, currentSlide) {
    updateProgressBar();
  });

  $('.prev, .next').on('click', function () {
    const sliderTop = $('.slide-cont').offset().top;
    $('html, body').animate({ scrollTop: sliderTop }, 800);
  });
});

