import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useEffect, useMemo } from "react";
import { TTLayer } from "./TTLayer";


gsap.registerPlugin(ScrollTrigger);

export function TextContainer({ setLayer, setStage }){

    const tl = useMemo(()=> gsap.timeline({}), []);

    const layers = [
        {
            name: "location",
            text_arr: ["nine", "yeah", "huuu"]
        },
        {
            name: "politics",
            text_arr: ["cock", "yuuu", "lana", "minl"]
        },


    ];
    return (
        <ScrollContainer className="scroll-container">
            {layers.map((l,i)=> <TTLayer key={i} layer={l.name} text_arr={l.text_arr} setLayer={setLayer} setStage={setStage} tl={tl}/>)}

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