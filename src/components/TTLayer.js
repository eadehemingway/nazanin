import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TTText } from "./TTText";
import { useEffect } from "react";

export function TTLayer({ layer, setLayer, tl, text_arr, setStage }){
    const inner_tl = gsap.timeline({});

    useEffect(() => {
        const trigg = ScrollTrigger.create({
            trigger: `#${layer}`,
            markers: true,
            start: "0px 300px",
            end: "bottom 200px",
            scroller: ".scroll-container",
            onEnter:()=>  setLayer(layer),
            onEnterBack:()=> setLayer(layer)
        });

        tl.add(trigg);
    }, [setLayer, layer, tl]);
    return (

        <TextWrapper id={layer}>
            {text_arr.map((t,i)=> <TTText
                text={t}
                key={`${t}-${i}`}
                inner_tl={inner_tl}
                index={i}
                setStage={setStage}
                layer={layer}
            >{t}</TTText>)}
        </TextWrapper>

    );
}


const TextWrapper = styled.div`
    width: 30%;
    border: 2px solid red;
    background: linen;
    display:flex;
    flex-direction: column;
    min-height: 50vh;
    margin-top: 300px;
    margin-bottom: 600px;
    justify-content: space-between;
`;

