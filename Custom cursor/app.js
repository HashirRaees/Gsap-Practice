var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");
var image = document.querySelector("#image");

main.addEventListener("mousemove",function(event){
    gsap.to(cursor,{
        x: event.x,
        y: event.y,
        duration :1,
        ease: "back.out"
    })
})
image.addEventListener("mouseenter", function(){
    cursor.innerHTML = "View More"
    gsap.to(cursor,{
        scale: 5,
    })
})
image.addEventListener("mouseleave",function(){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale: 1,
    })
})