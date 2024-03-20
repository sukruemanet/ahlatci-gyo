
$(document).ready(function () {
    //For Firefox we have to handle it in JavaScript 
    var vids = $("video");
    $.each(vids, function () {
        this.controls = false;
    });
    //Loop though all Video tags and set Controls as false

    $("video").click(function () {
        //console.log(this); 
        if (this.paused) {
            this.play();
        } else {
            this.pause();
        }
    });
});

// $(document).ready(function () {
//     $('video').prop('muted', true).play()
// });