import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useEffect, useMemo } from "react";
import { TTLayer } from "./TTLayer";
import { LAYERS } from "./App";


gsap.registerPlugin(ScrollTrigger);

export function TextContainer({ setLayer, setStage }){

    const tl = useMemo(()=> gsap.timeline({}), []);

    return (
        <ScrollContainer className="scroll-container">
            {LAYERS.map((l,i)=> <TTLayer key={i} layer={l.name} text_arr={l.text_arr} setLayer={setLayer} setStage={setStage} tl={tl}/>)}

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