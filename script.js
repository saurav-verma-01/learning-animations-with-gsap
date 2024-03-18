const tl = gsap.timeline();

gsap.from(".title", {
  x: -300,
  duration: 0.75,
  delay: 1,
  opacity: 0,
});

gsap.from(".nav-link", {
  x: 400,
  delay: 1,
});
