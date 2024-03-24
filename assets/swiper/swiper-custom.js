
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
