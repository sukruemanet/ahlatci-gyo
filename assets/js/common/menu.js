

$(function () {
    $(".mobile-menu").click(function (event) {
        event.stopPropagation();
        $("#hamburger-menu").toggleClass("open");
        $('body').toggleClass("no-scroll");
        $(".mobile-menu .text").toggleClass("up-down");
        smoother.paused(true);
    });
    
    $(".cookies-close").click(function (event) {
        $(".cookies").removeClass("visible");
    });
  
});



    






