import styled from "styled-components";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

export function TTText({ stage,  layer, setStage, inner_tl, text, index }){
    const id = `${layer}-text-${index}`;

    useEffect(() => {
        const trigg = ScrollTrigger.create({
            trigger: `#${id}`,
            markers: true,
            start: "0px 300px",
            end: "bottom 300px",
            scroller: ".scroll-container",
            onEnter:()=>{
                if (stage === index) return;
                setStage(index);
            },
            onEnterBack:()=> {
                if (stage === index) return;
                setStage(index);
            }
        });

        inner_tl.add(trigg);

    }, []);

    return (
        <P id={id}>{text}</P>
    );
}


const P = styled.p`
margin: 50px 0;
border: 3px solid blue;
min-height: 100px;
`;
