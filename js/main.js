/** HOMEPAGE */
// Rating Carousel
$(document).ready(function () {
  $('.rating-body').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      "<img src='./assets/icons/chevron-circle-left.svg' class='slick-custom slick-prev slick-arrow'>",
    nextArrow:
      "<img src='./assets/icons/chevron-circle-right.svg' class='slick-custom slick-next slick-arrow'>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  //   News carousel
  $('.news-carousel-wrapper').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      "<img src='./assets/icons/chevron-circle-left.svg' class='slick-custom slick-prev slick-arrow'>",
    nextArrow:
      "<img src='./assets/icons/chevron-circle-right.svg' class='slick-custom slick-next slick-arrow'>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  //   Reviews carousel
  $('.reviews-carousel ').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // Series carousel
  $('.series-carousel').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      "<img src='./assets/icons/chevron-circle-left.svg' class='slick-custom slick-prev slick-arrow'>",
    nextArrow:
      "<img src='./assets/icons/chevron-circle-right.svg' class='slick-custom slick-next slick-arrow'>",
    variableWidth: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          prevArrow: false,
          nextArrow: false,
          variableWidth: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
          variableWidth: false,
          centerMode: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // column carousel
  $('.column-carousel').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      "<img src='./assets/icons/chevron-circle-left.svg' class='slick-custom slick-prev slick-arrow'>",
    nextArrow:
      "<img src='./assets/icons/chevron-circle-right.svg' class='slick-custom slick-next slick-arrow'>",
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Talks carousel
  $('.talks ').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      "<img src='./assets/icons/chevron-circle-left.svg' class='slick-custom slick-prev slick-arrow'>",
    nextArrow:
      "<img src='./assets/icons/chevron-circle-right.svg' class='slick-custom slick-next slick-arrow'>",
    variableWidth: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // Detail film
  $('.actor-container').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      "<img src='./assets/icons/chevron-circle-left.svg' class='slick-custom slick-prev slick-arrow'>",
    nextArrow:
      "<img src='./assets/icons/chevron-circle-right.svg' class='slick-custom slick-next slick-arrow'>",
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $('.berita-container').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      "<img src='./assets/icons/chevron-circle-left.svg' class='slick-custom slick-prev slick-arrow'>",
    nextArrow:
      "<img src='./assets/icons/chevron-circle-right.svg' class='slick-custom slick-next slick-arrow'>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $('.film-carousel').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $('.tags-carousel').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          prevArrow:
            "<img src='./assets/icons/chevron-circle-left.svg' class='slick-custom slick-prev slick-arrow'>",
          nextArrow:
            "<img src='./assets/icons/chevron-circle-right.svg' class='slick-custom slick-next slick-arrow'>",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          prevArrow:
            "<img src='./assets/icons/chevron-circle-left.svg' class='slick-custom slick-prev slick-arrow'>",
          nextArrow:
            "<img src='./assets/icons/chevron-circle-right.svg' class='slick-custom slick-next slick-arrow'>",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow:
            "<img src='./assets/icons/chevron-circle-left.svg' class='slick-custom slick-prev slick-arrow'>",
          nextArrow:
            "<img src='./assets/icons/chevron-circle-right.svg' class='slick-custom slick-next slick-arrow'>",
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $('.tags-carousel-2').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      "<img src='./assets/icons/chevron-circle-left.svg' class='slick-custom slick-prev slick-arrow'>",
    nextArrow:
      "<img src='./assets/icons/chevron-circle-right.svg' class='slick-custom slick-next slick-arrow'>",
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          prevArrow:
            "<img src='./assets/icons/chevron-circle-left.svg' class='slick-custom slick-prev slick-arrow'>",
          nextArrow:
            "<img src='./assets/icons/chevron-circle-right.svg' class='slick-custom slick-next slick-arrow'>",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          prevArrow:
            "<img src='./assets/icons/chevron-circle-left.svg' class='slick-custom slick-prev slick-arrow'>",
          nextArrow:
            "<img src='./assets/icons/chevron-circle-right.svg' class='slick-custom slick-next slick-arrow'>",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow:
            "<img src='./assets/icons/chevron-circle-left.svg' class='slick-custom slick-prev slick-arrow'>",
          nextArrow:
            "<img src='./assets/icons/chevron-circle-right.svg' class='slick-custom slick-next slick-arrow'>",
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $('a.nav-link.dropdown-toggle').click(function () {
    location.href = this.href;
  });
});

// Plyr
var player = new Plyr('#animation-player');
var playerAudio = new Plyr('#playerAudio');
var players = Array.from(document.querySelectorAll('.js-player')).map(function (
  p
) {
  return new Plyr(p);
});
