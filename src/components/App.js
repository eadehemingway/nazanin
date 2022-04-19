import { useEffect, useState } from "react";
import * as d3 from "d3";
import styled from "styled-components";
import { TextContainer } from "./TTContainer";
import { SvgVisual } from "./SvgVisual";
import { LAYER_NAMES } from "../data/CONSTANTS";

function App() {
    const [stage, setStage] = useState(0);
    const [layer, setLayer] = useState(LAYER_NAMES.politics);

    useEffect(()=> {
        d3
            .selectAll("rect")
            .transition()
            .duration(1000)
            .attr("fill", (d)=>{
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
