//Services Slider
var swiper = new Swiper(".product-slider", {
  slidesPerView: 'auto',
  speed: 1000,
  spaceBetween: 40,
  grabCursor: true,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
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
      slidesPerView: 3.2,
      spaceBetween: 40
    },
    2560: {
      slidesPerView: 4.2,
      spaceBetween: 40
    }
  },
});

//Blog Slider
var swiper2 = new Swiper(".blogSlider", {
  slidesPerView: 1,
  draggable: true,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
