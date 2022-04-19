import { useEffect, useState } from "react";
import * as d3 from "d3";
import styled from "styled-components";
import { TextContainer } from "./TTContainer";
import { SvgVisual } from "./SvgVisual";
import { getFill } from "../services/getFill";

function App() {
    const [accessor, setAccessor] = useState("block");
    const [layer, setLayer] = useState("block");

    useEffect(()=> {
        d3.selectAll("rect").transition().duration(1000).attr("fill", (d)=>{
            return getFill(d, d.day_index, layer);
        });
    }, [layer]);


    return (
        <PageContainer>
            <SvgVisual/>
            <TextContainer setAccessor={setAccessor} setLayer={setLayer}/>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    display:flex;
`;

export default App;
