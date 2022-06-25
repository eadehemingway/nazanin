import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TTText } from "./TTText";
import { useEffect } from "react";

export function TTLayer({ stage, layer, setLayer, tl, events, setStage }){
    const inner_tl = gsap.timeline({});

    useEffect(() => {
        const trigg = ScrollTrigger.create({
            trigger: `#${layer}`,
            markers: true,
            start: "0px 300px", // 0px from top of element and 300px from top of screen
            end: "bottom 300px",
            scroller: ".scroll-container",
            onEnter:()=> {
                setLayer(layer);
                setStage(0);
            },
            onEnterBack:()=> setLayer(layer)
        });

        tl.add(trigg);
    }, [ layer]);
    return (

        <TextWrapper id={layer}>
            {/* UN STACKED UN COMPLECATED */}
            {events.map((t,i)=> <TTText
                text={t.description}
                key={`${t.id}-${i}`}
                inner_tl={inner_tl}
                index={i}
                setStage={setStage}
                layer={layer}
                stage={stage}
            >{t}</TTText>)}
        </TextWrapper>

    );
}


const TextWrapper = styled.div`
    width: 15%;
    background: #111;
    display:flex;
    flex-direction: column;
    min-height: 50vh;
    margin: 300px 0px 600px 0px;
    justify-content: space-between;
    margin-right: 15%;
    border: 5px solid red;
`;

