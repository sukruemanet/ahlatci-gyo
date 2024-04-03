gsap.registerPlugin(ScrollTrigger);


mm.add("(min-width: 1024px)", () => {

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".start",
      toggleActions: "play none none none",
      // markers: true,
      scrub: true,
      pin: ".start",
      pinSpacing: false,
      start: "top+=1 top",
      end: "bottom top",
      // end: "bottom top+=10%",
      id: "start-bg"
    }
  });

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

  const imageScale = gsap.utils.toArray('.imageScale');
  imageScale.forEach((box, i) => {
    const anim = gsap.fromTo(box, { y:'-100px', scale: 1.5, willChange: "transform", }, { duration: 3, scale: 1, y:'0', willChange: "transform", });
    ScrollTrigger.create({
      trigger: box,
      animation: anim,
      toggleActions: 'play none none none',
      once: true
    });
  });

  //Scale
  console.clear();

  document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const slidesCount = slides.length;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".content-image-caption",
        start: "top top",
        end: window.innerHeight * slidesCount + " top",
        scrub: true,
        pin: true,
        // markers: true
      }
    });

    tl.fromTo(
      "#slide-1",
      {
        scale: 0.5
      },
      {
        scale: 1
      }
    )
  });

});

//Menu
const menuopen = document.querySelector(".menu-open");
const menu = document.querySelector('.main-menu');
const menuitem = menu.querySelectorAll('.main-menu .menu li a');
const social = menu.querySelectorAll('.main-menu .social li a');
const icon = menu.querySelectorAll('.main-menu .icon img');

var tl = gsap.timeline({ paused: true });

// Menü açılışı animasyonu
tl.to(menu, {
  duration: .5,
  opacity: 1,
  right: "0",
  ease: 'expo.inOut',
  visibility: "visible",
  willChange: "transform",
})
.from([menuitem, social, icon], {
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
  y: 320,
  stagger: 0.1,
  willChange: "transform",
}, "-=0.1");


menuopen.addEventListener('click', () => {
  if (tl.progress() === 1) {
    tl.reverse();
  } else {
    tl.play();
  }
});

let isMenuOpen = false;

menuopen.addEventListener('click', () => {
  if (!isMenuOpen) {
    tl.play();
    isMenuOpen = true;
  } else {
    tl.reverse();
    isMenuOpen = false;
  }
});
