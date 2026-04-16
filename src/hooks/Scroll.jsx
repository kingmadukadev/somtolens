import React from 'react'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Scroll = () => {

    const headingRef = useRef(null);
    useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = headingRef.current.querySelectorAll("div");

      gsap.fromTo(
        lines,
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.3,            // slow & smooth
          ease: "power3.out",
          stagger: 0.25,             // div-by-div reveal
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",         // good for mobile & desktop
            toggleActions: "play none none none",
          },
        }
      );
    }, headingRef);

    return () => ctx.revert();
  }, []);
  return headingRef;
}

export default Scroll
