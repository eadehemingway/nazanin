import styled from "styled-components";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import gsap from "gsap";

export function TTEnd({ setIsEnd }){

    useEffect(() => {

      const animation =  gsap.to(".end-trigger",
            {
                duration: 8,
                scrollTrigger: {
                    trigger: ".end-trigger",
                    // markers: true,
                    start: "0px 300px",
                    end: "bottom 300px",
                    onEnter:()=> setIsEnd(true),
                    onLeaveBack: () => setIsEnd(false)
                } });
        return () => animation.scrollTrigger.kill()

    }, []);

    return (
        <div className="end-trigger"/>
    );
}

