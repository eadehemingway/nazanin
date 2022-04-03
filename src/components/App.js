import { useEffect, useState } from "react";
import * as d3 from "d3";
import styled from "styled-components";
import { TextContainer } from "./TextContainer";
import { SvgVisual } from "./SvgVisual";
import { getFill } from "../utils/getFill";

function App() {
    const [accessor, setAccessor] = useState("articles");

    // set up some scroll thing that updates the accessor which then updates the fills...
    useEffect(()=> {
        d3.selectAll("rect").transition().duration(1000).attr("fill", (d, i)=>{
            const color = getFill(d, d.day_index, accessor);
            return color;
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
