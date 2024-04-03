'use client'

import {Helmet} from "react-helmet";
import { gsap } from "gsap";

export default function LeapFrogLoader () {

    const style = "w-full h-full invisible"
    const script = `const frogScript = () => gsap.set('svg', {
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
    }, '-=1.1')`

    return (
        <svg id="mainSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" className={style}>
        <g id="whole">
        <g id="dotGroup" fill="#90D26D">
        <circle id="endDot" cx="100" cy="500" r="25"  opacity="0"/>
        <circle cx="300" cy="500" r="25"/>
        <circle cx="500" cy="500" r="25"/>
        <circle id="startDot" cx="700" cy="500" r="25"/>
      </g>
      <path id="connector" d="M700,500c0-165.69-134.31-300-300-300S100,334.31,100,500" fill="none" stroke="#90D26D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="50"/>	
    </g>
    <Helmet>
    <script>{script}</script>
    </Helmet>
</svg>
    )
}