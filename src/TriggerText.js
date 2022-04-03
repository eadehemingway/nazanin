import { useState, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const states = {
    0: "hunger",
    1: "articles",
    2: "default"
};

gsap.registerPlugin(ScrollTrigger);
export function TriggerText({ text, index, setAccessor }){

    useEffect(() => {
        const tl_one = gsap.timeline({
            scrollTrigger: {
                trigger: `#dicked-${index}`,
                markers: true,
                // scrub: true,
                start: "0px 100px",
                // end: "bottom center",
                scroller: ".container",

            },
        });
        tl_one.to(`#dicked-${index}`, {
            onStart: ()=> setAccessor(states[index]),
        });

    }, []);

    return <P id={`dicked-${index}`}>{text}</P>;
}

const P = styled.p`
    width: 80%;
    margin: 300px 20px;
    border: 1px solid black;
    margin-bottom: 800px;


`;