gsap.to("#page2 h1",{
    transform: "translateX(-240%)",
    scrollTrigger:{
        trigger: "#page2",
        scroller : "body",
        markers : true,
        start: "top 0%",
        scrub :3,
        pin : true,
    }
})