import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TTText } from "./TTText";
import { useEffect } from "react";
import { TotalTitle } from "./App";
import { TTLayerTitle } from "./TTLayerTitle";

export function TTLayer({ stage, current_layer, setLayer, events, setStage, unsetLayer }){

    useEffect(() => {

        // gsap.to(`#${current_layer}`, { scrollTrigger: {
        //     trigger: `#${current_layer}`,
        //     markers: true,
        //     start: "0px 300px", // 0px from top of element and 300px from top of screen
        //     end: "bottom 300px",
        //     onEnter:()=> {
        //         setLayer(current_layer);
        //         setStage(0);
        //         unsetLayer(null);
        //     },
        //     onEnterBack:()=> {
        //         unsetLayer(null);
        //         setLayer(current_layer);
        //     }
        // }
        // });
    }, [ current_layer]);
    return (

        <TextWrapper id={current_layer}>
            <TTLayerTitle />
            {/* UN STACKED UN COMPLECATED */}
            {events.map((t,i)=> <TTText
                text={t.description}
                key={`${t.id}-${i}`}
                index={i}
                setStage={setStage}
                current_layer={current_layer}
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
    margin: 300px 0px 600px 0px;
    justify-content: space-between;
    margin-right: 5%;
    border: 5px solid red;
    position: relative;
`;

