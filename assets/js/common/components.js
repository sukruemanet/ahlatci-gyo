$(document).ready(function () {
    //Modalbox Open
    $('.modalboxOpen').click(function () {
        $('.modalbox').addClass('visible');
        smoother.paused(true);
        $('#video')[0].play();
    });

    //Modalbox Close
    $('.modalboxClose').click(function () {
        $('.modalbox').removeClass('visible');
        smoother.paused(false);
        $('#video')[0].pause();
    });
});
