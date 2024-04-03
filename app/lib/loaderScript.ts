import { gsap } from "gsap";
// gsap.registerPlugin();

export const frogScript = () => gsap.set('svg', {
    visibility: 'visible'
})

let tl = gsap.timeline({repeat: -1}).timeScale(2);
tl.to('#whole', {
    duration: 2,
    x: 200,
    ease: 'linear'
})
.set('#startDot', {
    opacity: 0
}, 0)
.from('#connector', {
    duration: 1,
    drawSVG: '0% 0%',
    ease: 'linear'
}, 0)
.to('#connector', {
    drawSVG: '100% 100%',
    ease: 'expo'
}, 0.5)
.set('#endDot', {
    opacity: 1
}, '-=1.1')
.to('#endDot', {
    y: -5,
    duration: 1.1,
    ease: 'wiggle({type:easeOut, wiggles:1})'
}, '-=1.1')