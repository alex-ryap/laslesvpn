gsap.registerPlugin(ScrollTrigger);

TweenMax.from('.top__title', {
  scrollTrigger: '.top__title',
  y: 100,
  opacity: 0,
});

TweenMax.from('.top__text', 1, {
  y: 100,
  opacity: 0,
  delay: 0.2,
});

TweenMax.from('.top__btn', 1, {
  opacity: 0,
  delay: 0.4,
});

TweenMax.from('.info', {
  scrollTrigger: {
    trigger: '.info',
    start: 'top 80%',
  },
  y: 200,
  opacity: 0,
});

TweenMax.from('.features__title', {
  scrollTrigger: {
    trigger: '.features__title',
    start: 'top 80%',
  },
  y: 200,
  opacity: 0,
});

TweenMax.from('.features__subtitle', {
  scrollTrigger: {
    trigger: '.features__subtitle',
    start: 'top 80%',
  },
  y: 100,
  opacity: 0,
});

TweenMax.staggerFrom(
  '.feature__item',
  1,
  {
    scrollTrigger: {
      trigger: '.features__title',
      start: 'top 95%',
      scrub: true,
    },
    x: 100,
    opacity: 0,
    delay: 1,
  },
  0.3
);

TweenMax.staggerFrom(
  '.plan__card',
  1,
  {
    scrollTrigger: {
      trigger: '.plans__title',
      start: 'top center',
      scrub: true,
    },
    y: 300,
    duration: 0.7,
  },
  0.5
);

TweenMax.from('.subscribe__box', {
  scrollTrigger: {
    trigger: '.subscribe__box',
    start: 'top 100%',
    toggleActions: 'restart none reverse none',
  },
  y: -50,
  opacity: 0,
});

TweenMax.staggerFrom(
  'circle[fill="white"]',
  1,
  {
    scrollTrigger: {
      trigger: '.network__title',
      start: 'top 0%',
      scrub: true,
    },
    scaleX: 0.3,
    scaleY: 0.3,
    opacity: 0,
  },
  0.1
);

TweenMax.staggerFrom(
  'circle[stroke="#F53838"]',
  1,
  {
    scrollTrigger: {
      trigger: '.network__title',
      start: 'top 0%',
      scrub: true,
    },
    scaleX: 0.3,
    scaleY: 0.3,
    opacity: 0,
    delay: 0.1,
  },
  0.1
);

TweenMax.staggerFrom(
  'circle[fill="#F53838"]',
  1,
  {
    scrollTrigger: {
      trigger: '.network__title',
      start: 'top 0%',
      scrub: true,
    },
    scaleX: 0.3,
    scaleY: 0.3,
    opacity: 0,
  },
  0.1
);

TweenMax.from('.counter', {
  textContent: 0,
  duration: 4,
  ease: Power1.easeIn,
  snap: { textContent: 1 },
  stagger: 1,
});
