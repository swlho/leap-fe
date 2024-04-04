'use client'

import { frogScript } from "../lib/loaderScript";

export default function LeapFrogLoader () {

    const style = "w-full h-full invisible"

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
    <script src={`${frogScript}`} async={true}></script>
</svg>
    )
}