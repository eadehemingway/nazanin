import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TTText } from "./TTText";
import { useEffect, useRef } from "react";
// import { TotalTitle } from "./App";
import { TTLayerTitle } from "./TTLayerTitle";

export function TTLayer({ stage, current_layer, setLayer, events, setStage, unsetLayer }){
    const $ref = useRef(null)

    useEffect(() => {
        if (!$ref.current) return
        const a = gsap.to($ref.current, { scrollTrigger: {
            trigger: $ref.current,
            markers: true,
            start: "top center", // 0px from top of element and 300px from top of screen
            end: "bottom bottom",
            onEnter:()=> {
                setLayer(current_layer);
                setStage(0);
                unsetLayer(null);
            },
            onEnterBack:()=> {
                unsetLayer(null);
                setLayer(current_layer);
            }
        }
        });

        return () => a.scrollTrigger.kill()

    }, [ setLayer, unsetLayer, setStage, current_layer]);
    return (

        <Layer ref={$ref}>
            <TTLayerTitle />
            {/* UN STACKED UN COMPLECATED */}
            {events.map((t,i)=> <TTText
                text={t.description}
                key={`${t.id}-${i}`}
                index={i}
                setStage={setStage}
                stage={stage}
            >{t}</TTText>)}
        </Layer>

    );
}


const Layer = styled.div`
    width: 15%;
    display:flex;
    flex-direction: column;
    margin: 20px;
    justify-content: space-between;
    margin-right: 5%;
    position: relative;
    margin-top: 400px;


`;

