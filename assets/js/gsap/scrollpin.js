gsap.registerPlugin(ScrollTrigger);

let panels = gsap.utils.toArray(".panel")

panels.forEach((panel, i) => {

    ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: i === panels.length - 1 ? false : true,
        //end:"bottom 100",
        pinSpacing: false
    });
});


gsap.utils.toArray('.animated-image').forEach(box => {
    gsap.fromTo(box, {
        autoAlpha: 1,
        y: 50,
        scale: 2,
        willChange: "transform",
    }, {
        scrollTrigger: {
            trigger: box,
            scrub: true
                //       no start end yet
        },
        duration: 2,
        autoAlpha: 1,
        y: 0,
        scale: 1,
        willChange: "transform",
    });
});
gsap.utils.toArray('.animated-text').forEach(box => {
    gsap.fromTo(box, {
        autoAlpha: 1,
        y: 50,
        // scale: 2,
        y: -150,
    }, {
        scrollTrigger: {
            trigger: box,
            scrub: true
                //       no start end yet
        },
        duration: 2,
        autoAlpha: 1,
        y: 0,
        // scale: 1,
    });
});