 // const scroll = new LocomotiveScroll({
//   el: document.querySelector('body'),
//   smooth: true
// });
const tl = gsap.timeline();
tl.from("h1", {
  // scale: 1,
  opacity: 0,
  duration: 1,
  y: -100,
  // repeat: 1,
});
// tl.from(".id", {
//   scale: 1,
//   duration: 1,
//   opacity: 0,
//   y: -50,
// });
// tl.from(".id", {
//   scale: 1,
//   duration: 1,
//   opacity: 0,
//   y: -50,
// });
// tl.from('.feedbackmsg',{
//   scale: 1,
//   duration: 1,
//   opacity: 0,
//   y: 50,
// })
// tl.from('button',{
//   rotate:360,
//   scale: 1,
//   duration: 1,
//   opacity: 0,
//   y: 50,
// })