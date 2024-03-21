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

var tl = new TimelineMax({ repeat: -1, yoyo: true });
tl.fromTo(".down", 1, { y: -10 }, { ease: Power0.easeNone, y: 10 });


//Menu
const menuopen = document.querySelector(".menu-open");
const menu = document.querySelector('.main-menu');
const menuItemslg = menu.querySelectorAll('ul li a');

var mainMenu = gsap.timeline({ paused: true });

mainMenu.to(menu, {
  duration: 1.4,
  opacity: 1,
  right: '0',
  ease: 'expo.inOut',
});

mainMenu.fromTo(
  menuItemslg,
  {
    opacity: 0,
    y: 100,
  },
  {
    opacity: 1,
    duration: 1,
    ease: 'power4.out',
    y: 0,
    stagger: 0.2,
  },
  "-=.4"
);

mainMenu.reverse();

menuopen.addEventListener('click', () => {
  mainMenu.reversed(!mainMenu.reversed());
});
