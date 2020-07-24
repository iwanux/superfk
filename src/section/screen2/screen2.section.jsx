import React from 'react'
import {gsap,TweenMax} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

const scrollLeftDesc = ({id})=>{
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline()
    const SectionElement = document.getElementById(id)
    const LeftDesc = SectionElement.children[0]

    tl.to(LeftDesc, {
        scrollTrigger:{
            trigger:SectionElement,
            toggleActions:"restart none none none",
            start:'20px 90%',
            end:'20px 80%',
            scrub:true,
            markers:true
        },
        opacity:1,
        left:"0%",
        duration:3,
    }).to(LeftDesc, {
        scrollTrigger:{
            trigger:SectionElement,
            toggleActions:"restart none none none",
            start:'20px 20%',
            end:'20px 10%',
            scrub:true,
            markers:true
        },
        opacity:0,
        left:"-18%",
        duration:3,
    })
}

const Screen2 = (props)=>{
    useEffect(()=>{
        scrollLeftDesc(props)
    })
    const {upperTitle ,lowerTitle} = props
        return(
            <div className="screen2-section" id={props.id} >
                <div className="leftDesc">
                <h2>{upperTitle}</h2>
                    <ul>
                        {lowerTitle.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                </div>
            </div>
        );
}
export default Screen2