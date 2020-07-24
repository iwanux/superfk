import React,{useEffect} from 'react'
import {gsap,TweenMax} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const ScreenTitle = ()=>{
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.to('.screenTitle', {
            scrollTrigger:{
                trigger:'.screen2',
                toggleActions:"restart none none none",
                scrub:true
            },
            y:300,
            duration:3,
        })
        gsap.to('.screen1', {
            scrollTrigger:{
                trigger:'.screen2',
                toggleActions:"restart none none none",
                scrub:true
            },
            backgroundSize:"120%",
            autoRound:false,
        })
    })
    return(
        <div className="screenTitle" >
        <h1>Super Future Kids</h1>
      </div>
    )
}

export default ScreenTitle