import { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const states = {
    0: "hunger",
    1: "articles",
    2: "default"
};

export function TriggerText({ text, index, setAccessor }){
    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: `#text-${index}`,
                markers: true,
                start: "0px 300px",
                end: "bottom 200px",
                scroller: ".scroll-container",
                onEnter:()=> { // when start meets scroller-start
                    console.log("enter");
                    setAccessor(states[index]);
                },
                // onLeave:()=> console.log("ON LEAVEEEE", index), // end meets scroller-end
                onEnterBack:()=> { // when scroller-end meets end
                    console.log("enter back");
                    setAccessor(states[index]);
                },
                // onLeaveBack:()=> console.log("ON LEAVEEEE BACK", index) // scroller-start meets start

            },
        });

    }, [index, setAccessor]);

    return <P id={`text-${index}`}>{text}</P>;
}

const P = styled.p`
    width: 80%;
    margin: 600px 20px;
    border: 1px solid black;

`;