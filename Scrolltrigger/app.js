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
gsap.to("#page4 #box",{
  transform: "scaleX(2)",
  scrollTrigger : {
    trigger: "#page4",
    scroller: "body",
    start: "top 0%",
    scrub : 1,
    pin : true,
    markers : true,
  }
})
