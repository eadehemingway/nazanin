import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function TTText({ layer, setStage, inner_tl, text, index }){
    const id = `${layer}-text-${index}`;

    useEffect(() => {
        const trigg = ScrollTrigger.create({
            trigger: `#${id}`,
            markers: true,
            start: "0px 300px",
            end: "bottom 200px",
            scroller: ".scroll-container",
            onEnter:()=> setStage(index),
            onEnterBack:()=> setStage(index)
        });

        inner_tl.add(trigg);

    }, [setStage, index, id, inner_tl]);

    return (
        <P id={id}>{text}</P>
    );
}


const P = styled.p`
border: 3px solid blue;
`;
