gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const mm = gsap.matchMedia();

let smoother;

mm.add("(min-width: 1024px)", () => {
  ScrollSmoother.create({
    smooth: 2,
    effects: true,
    normalizeScroll: false,
    ignoreMobileResize: true
  });
});


function getSamePageAnchor(link) {
  if (
    link.protocol !== window.location.protocol ||
    link.host !== window.location.host ||
    link.pathname !== window.location.pathname ||
    link.search !== window.location.search
  ) {
    return false;
  }

  return link.hash;
}

// Anchor
function scrollToHash(hash, e) {
  const elem = hash ? document.querySelector(hash) : false;
  if (elem) {
    if (e) e.preventDefault();
    gsap.to(window, { scrollTo: elem });
  }
}

// Click event listener for anchor tags
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const samePageAnchor = getSamePageAnchor(a);

    if (samePageAnchor) {
      scrollToHash(samePageAnchor, e);
    }
  });
});


if (window.location.hash) {
  scrollToHash(window.location.hash);
}