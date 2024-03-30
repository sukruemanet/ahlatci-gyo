
//Index Slider
var swiper = new Swiper(".startSlider", {
  slidesPerView: 1,
  parallax: true,
  speed: 1500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//Product Slider
var swiper = new Swiper(".product-slider", {
  slidesPerView: 'auto',
  spaceBetween: 40,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2.2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 2.8,
      spaceBetween: 20
    },
    2560: {
      slidesPerView: 3.8,
      spaceBetween: 40
    }
  },
});

//Gallery Slider
var swiper = new Swiper(".gallery-slider", {
  slidesPerView: 'auto',
  spaceBetween: 40,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3.2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 1.4,
      spaceBetween: 40
    },
    2560: {
      slidesPerView: 2.2,
      spaceBetween: 40
    }
  },
});