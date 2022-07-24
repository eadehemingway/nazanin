import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMemo } from "react";
import { TTLayer } from "./TTLayer";
import { LAYERS } from "../data/LAYERS";
import { TEXT_COLUMN_WIDTH, TEXT_H2_FONT_SIZE } from "../services/utils";
// import { TotalTitle } from "./App";
import { TTEnd } from "./TTEnd";
gsap.registerPlugin(ScrollTrigger);

export function TextContainer({ setFillLayer, setStage, setIsEnd, setDividerLayer }){
    // const layer_names = LAYERS.map(d=> d.name)
    return (
        <Wrapper>
            {LAYERS.map((l,i)=> {

                const setLayer = l.type === "fill" ? setFillLayer : setDividerLayer;
                const unsetLayer = l.type === "fill" ? setDividerLayer: setFillLayer;

                return  (<TTLayer
                    key={i}
					index={i}
                    current_layer={l.name}
                    events={l.events}
                    setLayer={setLayer}
                    unsetLayer={unsetLayer}
                    setStage={setStage}
                />);
            })}
			<DaysTitle>days</DaysTitle>
            <TTEnd setIsEnd={setIsEnd}/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const DaysTitle = styled.h2`
	width: ${TEXT_COLUMN_WIDTH}px;
	font-size: ${TEXT_H2_FONT_SIZE}px;
	position: fixed;
	bottom: 0px;
	right: 0px;
	padding: 40px 40px 40px 10px;
	margin: 0px;
	background-image: linear-gradient(0deg, #000, 80%, rgba(0, 0, 0, 0));
`;
