import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMemo } from "react";
import { TTLayer } from "./TTLayer";
import { LAYERS } from "../data/CONSTANTS";
gsap.registerPlugin(ScrollTrigger);


export function TextContainer({ setLayer, setStage }){
    const tl = useMemo(()=> gsap.timeline({}), []);
    return (
        <ScrollContainer className="scroll-container">
            {LAYERS.map((l,i)=> <TTLayer
                key={i}
                layer={l.name}
                events={l.events}
                setLayer={setLayer}
                setStage={setStage}
                tl={tl}
            />)}
        </ScrollContainer>
    );
}

const ScrollContainer = styled.div`
    position:absolute;
    width: 100%;
    height: 100vh;
    overflow:scroll;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;