


$(document).ready(function () {
    $('.mobile-menu').click(function () {
        $(this).toggleClass("active");
        $('body').toggleClass("no-scroll");
        $("#hamburger-menu").toggleClass("open");
        smoother.paused(true);
    });
});

$(document).ready(function () {
  $(function () {
      var header = $("header");

      $(window).scroll(function () {
          var scroll = $(window).scrollTop();
          if (scroll >= 50) {
              header.addClass("scrolled");
          } else {
              header.removeClass("scrolled");
          }
      });
  });
});

$(document).ready(function () {
  'use strict';
  var c, currentScrollTop = 0,
      navbar = $('header');

  $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();

      currentScrollTop = a;

      if (c < currentScrollTop && a > b + b) {
          navbar.addClass("scrollUp");
      } else if (c > currentScrollTop && !(a <= b)) {
          navbar.removeClass("scrollUp");
      }
      c = currentScrollTop;
  });
})

