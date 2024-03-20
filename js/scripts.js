// GSAP Library
// https://unpkg.com/gsap@3/dist/gsap.min.js

// Instantiate Plugin(s) not needed here
// gsap.registerPlugin(
//   DrawSVGPlugin,
//   Draggable,
//   InertiaPlugin,
//   ScrambleTextPlugin
// );
// Get(acquire) stuff
let tl1 = gsap.timeline();
let tl2 = gsap.timeline();
let tl3 = gsap.timeline();
let tl4 = gsap.timeline();
// Set(perspire) stuff
// Use Plugin(drawSVG)
gsap.to("#firstG", {
  y: -500,
  duration: 5,
  delay: 2
});

gsap.to("#firstO", {
  y: 700,
  duration: 5,
  delay: 2
});

gsap.to("#secondO", {
  x: -500,
  duration: 4.5,
  delay: 2.5
});
gsap.to("#secondG", {
  y: 475,
  x: 400,
  rotate: 90,
  ease: "elastic.out(1,0.5)",
  duration: 5,
  delay: 2
});
gsap.to("#theL", {
  y: -250,
  rotate: -360,
  duration: 4.75,
  delay: 2.25
});

gsap.to("#theE", {
  x: 900,
  duration: 5,
  delay: 2
});

gsap.from("#armShield", {
  delay: 5,
  x: -100,
  rotate: -100
});

gsap.from("#wholePotion", {
  delay: 9,
  ease: "power1.out",
  x: 500
});
gsap.from("#mrE", {
  delay: 8,
  y: -500
});

gsap.from("#helmet", {
  delay: 10,
  ease: "bounce.out",
  y: -500
});
gsap.from("#face", {
  delay: 7,
  ease: "bounce.out",
  opacity: 0
});

tl1.fromTo(
  "#pupils",
  { x: -10 },
  { duration: 2, delay: 7, x: 10, yoyo: 1, repeat: -1 }
);

tl2.fromTo(
  "#swordHand",
  { x: 0, y: 0, rotation: "0deg" },
  {
    duration: 1,
    delay: 10.75,
    x: 45,
    y: -30,
    rotation: 20,
    yoyo: 1,
    repeat: -1
  }
);
// RELEASE ME
// GSDevTools.create();
