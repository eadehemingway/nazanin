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
                    start: "bottom bottom",
                    end: "bottom bottom",
                    onEnter:()=> setIsEnd(true),
                    onLeaveBack: () => setIsEnd(false)
                } });
        return () => animation.scrollTrigger.kill()

    }, []);

    return (
        <End className="end-trigger"/>
    );
}

const End = styled.div`
height: 100px;
width: 100px;
`