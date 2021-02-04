var scene = document.getElementById('animate-class');
var parallax = new Parallax(scene);

TweenMax.from(".wrapper", 1, {
  opacity: 0,
  x: -200,
  ease: Expo.easeIn
}, 0.5)

TweenMax.from(".logo", 2, {
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
})

TweenMax.staggerFrom(".menu-links ul li", 2, {
  opacity: 0,
  x: -50,
  ease: Power3.easeInOut
}, 0.08)

TweenMax.from(".search", 2, {
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
})

TweenMax.staggerFrom(".search a", 2, {
  opacity: 0,
  x: -50,
  ease: Power3.easeInOut
}, 0.08)

TweenMax.from(".social", 2, {
  opacity: 0,
  x: 20,
  ease: Expo.easeInOut
}, 0.08)

TweenMax.staggerFrom(".social a", 2, {
  opacity: 0,
  x: 50,
  ease: Power3.easeInOut
}, 0.08)

TweenMax.from(".menu", 2, {
  opacity: 0,
  x: 20,
  ease: Expo.easeInOut
}, 0.09)

TweenMax.staggerFrom(".menu a", 2, {
  opacity: 0,
  x: 50,
  ease: Power3.easeInOut
}, 0.08)

TweenMax.from(".intro", 2, {
  opacity: 0,
  x: -50,
  ease: Expo.easeInOut
}, 0.05)

TweenMax.staggerFrom(".intro-image", 2, {
  opacity: 0,
  x: -100,
  ease: Power3.easeInOut
}, 0.08)

TweenMax.staggerFrom(".intro-logo", 2, {
  opacity: 0,
  x: 100,
  ease: Power3.easeInOut
}, 0.08)

TweenMax.staggerFrom(".more-info", 2, {
  opacity: 0,
  x: -50,
  ease: Expo.easeInOut
}, 0.07)

TweenMax.staggerFrom(".address", 2, {
  opacity: 0,
  x: -100,
  ease: Power3.easeInOut
}, 0.08)

TweenMax.staggerFrom(".phone", 2, {
  opacity: 0,
  x: 100,
  ease: Power3.easeInOut
}, 0.08)

TweenMax.staggerFrom(".more-button", 2, {
  opacity: 0,
  x: 100,
  ease: Power3.easeInOut
}, 0.08)
