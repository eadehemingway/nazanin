import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TTText } from "./TTText";
import { useEffect, useRef } from "react";
// import { TotalTitle } from "./App";
import { TEXT_COLUMN_WIDTH, SPACE_FOR_TOP_LABELS } from "../services/utils";
import { TTLayerTitle } from "./TTLayerTitle";

export function TTLayer({ stage, current_layer, setLayer, events, setStage, unsetLayer, index, type, days, intro }){
    const $ref = useRef(null)

    useEffect(() => {
        if (!$ref.current) return
        const a = gsap.to($ref.current, { scrollTrigger: {
            trigger: $ref.current,
            start: "top bottom", // 0px from top of element and 300px from top of screen
            end: "bottom top",
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

    }, [ setLayer, unsetLayer, setStage, current_layer, stage]);
    return (

        <Layer ref={$ref} margin_top={index === 0 ? SPACE_FOR_TOP_LABELS : 20}>
            <TTLayerTitle type={type} days={days}/>
			<TTLayerSubtitle>{current_layer}</TTLayerSubtitle>
			<TTLayerIntro>{intro}</TTLayerIntro>
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
    width: ${TEXT_COLUMN_WIDTH}px;
    display:flex;
    flex-direction: column;
	margin: ${props => props.margin_top}px 40px 100vh 20px;
    justify-content: space-between;
    position: relative;
`;

const TTLayerSubtitle = styled.span`
	width: 100%;
	font-weight: 700;
	position: absolute;
	bottom: 100%;
`;

const TTLayerIntro = styled.p`
	width: 100%;
`;

