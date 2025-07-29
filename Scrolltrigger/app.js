gsap.to("#page2 h1", {
  transform: "translateX(-200%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 0%",
    scrub: 3,
    pin: true,
  },
});
