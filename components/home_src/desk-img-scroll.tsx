import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styled from "styled-components";
import bg from "../../public/IMG-20230331-WA0007.jpg";
import img1 from "../../public/IMG-20230331-WA0028.jpg";
import img2 from "../../public/1679793226740-01.jpeg";
import img3 from "../../public/IMG-20230405-WA0007.jpg";
import Media from "react-media";
import Image from "next/image";
import { on } from "events";
function DeskScrollSection() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    
  
    gsap.registerPlugin(ScrollTrigger);
  
    useEffect(() => {
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-180vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
          },
        }
      );
    
      return () => {
        {/* A return function for killing the animation on component unmount */ }
        pin.kill();
       
      };
    }, []);
    return (

        <section className="scroll-section-outer">
        {/* The section up act just as a wrapper. If the trigger (below) is the
        first jsx element in the component, you get an error on route change */}
  
        {/* The div below act just as a trigger. As the doc suggests, the trigger and 
        the animation should alway be two separated refs */}
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner">
          
            <div className="scroll-section">
            <span className="image1">
            <Image src={bg.src} width={500} height={500} alt="" />
            </span>
            </div>
            <div className="scroll-section">
            <span className="image1">
            <Image src={img1.src} width={500} height={500} alt="" />
            </span>
            </div>
            <div className="scroll-section">
            <span className="image1">
            <Image src={img2.src} width={500} height={500} alt="" />
            </span>
            </div>
            <div className="scroll-section">
            <span className="image1">
            <Image src={img3.src} width={500} height={500} alt="" />
            </span>
            </div>
          </div>
        </div>
      </section>)}
       export default DeskScrollSection;     