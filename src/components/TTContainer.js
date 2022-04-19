import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useEffect, useMemo } from "react";
import { TTLocationLayer } from "./TTLocationLayer";
import { TTPoliticsLayer } from "./TTPoliticsLayer";


gsap.registerPlugin(ScrollTrigger);

export function TextContainer({ setAccessor }){

    const tl = useMemo(()=> gsap.timeline({}), []);

    return (
        <ScrollContainer className="scroll-container">
            <TTLocationLayer tl={tl} setAccessor={setAccessor}/>
            <TTPoliticsLayer tl={tl} setAccessor={setAccessor}/>
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

