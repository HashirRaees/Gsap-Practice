function breakText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;

  var splittedText = h1Text.split("");
  var halfValue = splittedText.length / 2;

  var clutter = "";

  splittedText.forEach(function (elem, index) {
    if (index < halfValue) {
      clutter += `<span class="a">${elem}</span>`;
    } else {
      clutter += `<span class="b">${elem}</span>`;
    }
  });

  h1.innerHTML = clutter;
}
breakText();

// gsap.from("h1 span", {
//   y: 70,
//   duration: 0.8,
//   delay: 0.5,
//   opacity: 0,
//   stagger: 0.15,
// });

gsap.from(".a",{
    y:50,
    duration: 0.6,
    delay: 0.5,
    stagger: 0.15,
    opacity : 0
})
gsap.from(".b",{
    y:50,
    duration: 0.6,
    delay: 0.5,
    stagger: -0.15,
    opacity : 0
})