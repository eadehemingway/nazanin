import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function TTPoliticsLayer({ setAccessor, tl }){
    const id = "politics-layer";
    const intra_city_tl = gsap.timeline({});
    const text = ["politics one", "politics two", "politics three"];
    useEffect(() => {
        const str = "hunger";

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
    background: red;

    display:flex;
    flex-direction: column;
    min-height: 100vh;
    margin-top: 300px;
    margin-bottom: 200px;
    justify-content: space-between;
`;

