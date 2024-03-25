


$(document).ready(function () {
    $('.mobile-menu').click(function () {
        $(this).toggleClass("active");
        $('body').toggleClass("no-scroll");
        $("#hamburger-menu").toggleClass("open");
        smoother.paused(true);
    });
});


    






