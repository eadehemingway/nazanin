import { useEffect, useState } from "react";
import * as d3 from "d3";
import styled from "styled-components";
import { TextContainer } from "./TTContainer";
import { SvgVisual } from "./SvgVisual";

export const LAYER_NAMES = {
    politics: "politics",
    location: "location"
};

export const LAYERS = [
    {
        name: LAYER_NAMES.politics,
        text_arr: ["nine", "yeah", "huuu"]
    },
    {
        name: LAYER_NAMES.location,
        text_arr: ["cock", "yuuu", "lana", "minl"]
    },
];

function App() {
    const [stage, setStage] = useState(0);
    const [layer, setLayer] = useState(LAYER_NAMES.politics);


    useEffect(()=> {
        d3.selectAll("rect").transition().duration(1000).attr("fill", (d)=>{
            // console.log(layer);
            return d.colors[layer][stage];
        });
    }, [layer, stage]);


    return (
        <PageContainer>
            <SvgVisual layer={layer} stage={stage}/>
            <TextContainer setStage={setStage} setLayer={setLayer}/>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    display:flex;
`;

export default App;
