gsap.registerPlugin(ScrollTrigger);


mm.add("(min-width: 1024px)", () => {

  // Video
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".content-video",
      start: "50% 50%",
      end: "150% 50%",
      // markers: true,
      pin: true,
      scrub: 2,
    }
  });

  tl.fromTo(
    ".start-video", 
    { scale: 0.8 },
    { scale: 1, ease: "power2.inOut" }
  )


  function scroll() {
    const imageCard = document.querySelectorAll('.image-card .image');
    imageCard.forEach((img) => {
      gsap.fromTo(img, {
        yPercent: -120,
        willChange: "transform",

      }, {
        // ease: 'none',
        yPercent: 0,
        scrollTrigger: {
          trigger: img,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          willChange: "transform",
        }
      });
    });

    const startImage = document.querySelectorAll('.start-image .image img');
    startImage.forEach((img) => {
      gsap.fromTo(img, {
        yPercent: -60,
        willChange: "transform",

      }, {
        // ease: 'none',
        yPercent: 0,
        scrollTrigger: {
          trigger: img,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          willChange: "transform",
        }
      });
    });
  }

  scroll();


  //fadeYbottom
  const fadeYbottom = gsap.utils.toArray('.fadeYbottom');
  fadeYbottom.forEach((box, i) => {
    const anim = gsap.fromTo(box, { autoAlpha: 0, scale: .8, y: 200 }, { duration: 1, autoAlpha: 1, y: 0, scale: 1, });
    ScrollTrigger.create({
      trigger: box,
      animation: anim,
      toggleActions: 'play none none none',
      once: true
    });
  });

  //fadeup
  const fadeUp = gsap.utils.toArray('.fadeUp');
  fadeUp.forEach((box, i) => {
    const anim = gsap.fromTo(box, { autoAlpha: 0, y: 160 }, { duration: 1, autoAlpha: 1, y: 0 });
    ScrollTrigger.create({
      trigger: box,
      animation: anim,
      toggleActions: 'play none none none',
      once: true
    });
  });

});

//Menu
const menuopen = document.querySelector(".menu-open");
  const menu = document.querySelector('.main-menu');
  const menuitem = menu.querySelectorAll('.main-menu ul li a');

  var tl = gsap.timeline({ paused: true });

  tl.to(menu, {
    duration: .5,
    opacity: 1,
    right: "0",
    ease: 'expo.inOut',
    visibility: "visible",
    willChange: "transform",
  });

  tl.from(menuitem, {
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
    y: 320,
    stagger: 0.1,
    willChange: "transform",
  }, "-=0.1");

  tl.reverse();

  menuopen.addEventListener('click', () => {
    tl.reversed(!tl.reversed());
  });
