import { useEffect, useState } from "react";
import * as d3 from "d3";
import styled from "styled-components";
import { TextContainer } from "./TTContainer";
import { SvgVisual } from "./SvgVisual";
import { getFill } from "../services/getFill";

function App() {
    const [stage, setStage] = useState(0);
    const [layer, setLayer] = useState("block");
    console.log("stage:", stage, layer);

    useEffect(()=> {
        d3.selectAll("rect").transition().duration(1000).attr("fill", (d)=>{
            return getFill(d, d.day_index, layer, stage);
        });
    }, [layer, stage]);


    return (
        <PageContainer>
            <SvgVisual/>
            <TextContainer setStage={setStage} setLayer={setLayer}/>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    display:flex;
`;

export default App;
