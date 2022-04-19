import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useEffect, useMemo } from "react";
import { TTLayer } from "./TTLayer";


gsap.registerPlugin(ScrollTrigger);

export function TextContainer({ setLayer }){

    const tl = useMemo(()=> gsap.timeline({}), []);

    const layer_names = ["politics", "location"];
    return (
        <ScrollContainer className="scroll-container">
            {layer_names.map((l,i)=> <TTLayer key={i} layer={l} text_arr={[]} setLayer={setLayer} tl={tl}/>)}

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
const P = styled.p`
border: 3px solid blue;
`;

const TextWrapper = styled.div`
    width: 30%;
    border: 2px solid red;
    background: red;

    display:flex;
    flex-direction: column;
    min-height: 100vh;
    margin-top: 300px;
    margin-bottom: 200px;
    justify-content: space-between;
`;

