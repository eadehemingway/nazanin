import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMemo } from "react";
import { TTLayer } from "./TTLayer";
import { LAYERS } from "../data/LAYERS";
import { TotalTitle } from "./App";
import { TTEnd } from "./TTEnd";
// gsap.registerPlugin(ScrollTrigger);

export function TextContainer({ setFillLayer, setStage, setIsEnd, setDividerLayer }){
    return (
        <Wrapper>
            {Array.apply(null, Array(20)).map(function (d) {"h";}).map((d,i)=> <p key={i}> h</p>)}
            {/* {LAYERS.map((l,i)=> {
                const setLayer = l.type === "fill" ? setFillLayer : setDividerLayer;
                const unsetLayer = l.type === "fill" ? setDividerLayer: setFillLayer;

                return  (<TTLayer
                    key={i}
                    current_layer={l.name}
                    events={l.events}
                    setLayer={setLayer}
                    unsetLayer={unsetLayer}
                    setStage={setStage}
                />);
            })}
            <TTEnd setIsEnd={setIsEnd}/> */}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    min-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border: 10px solid orange;
`;