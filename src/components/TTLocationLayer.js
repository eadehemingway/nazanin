import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function TTLocationLayer({ setAccessor, tl }){

    const intra_city_tl = gsap.timeline({});
    const text = ["Location one", "location two", "location three"];
    const id = "location-layer";
    useEffect(() => {
        const str = "default"; // TODO change to be location but for now it accesees omething
        const trigg = ScrollTrigger.create({
            trigger: `#${id}`,
            markers: true,
            start: "0px 300px",
            end: "bottom 200px",
            scroller: ".scroll-container",
            onEnter:()=> { // when start meets scroller-start
                console.log("enter");
                setAccessor(str);
            },
            // onLeave:()=> console.log("ON LEAVEEEE", index), // end meets scroller-end
            onEnterBack:()=> { // when scroller-end meets end
                console.log("enter back");
                setAccessor(str);
            },
        });

        tl.add(trigg);


    }, [setAccessor]);
    return (

        <TextWrapper id={id}>
            {text.map((t,i)=> <P text={t} key={i} >{t}</P>)}
        </TextWrapper>

    );
}


const P = styled.p`
border: 3px solid blue;
`;

const TextWrapper = styled.div`
    width: 30%;
    border: 2px solid red;
    background: green;

    display:flex;
    flex-direction: column;
    min-height: 100vh;
    margin-top: 300px;
    margin-bottom: 200px;
    justify-content: space-between;
`;

