import { useEffect, useState } from "react";
import * as d3 from "d3";
import styled from "styled-components";
import { TextContainer } from "./TextContainer";
import { SvgVisual } from "./SvgVisual";
import { getFill } from "../utils";

function App() {
    const [accessor, setAccessor] = useState("block");

    useEffect(()=> {
        d3.selectAll("rect").transition().duration(1000).attr("fill", (d)=>{
            return getFill(d, d.day_index, accessor);
        });
    }, [accessor]);


    return (
        <PageContainer>
            <SvgVisual/>
            <TextContainer setAccessor={setAccessor}/>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    display:flex;
`;

export default App;
