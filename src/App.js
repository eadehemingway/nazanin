
import gsap from "gsap";
import { useEffect, useState } from "react";
import * as d3 from "d3";
import styled from "styled-components";
import { TextContainer } from "./TextContainer";
import { SvgVisual } from "./SvgVisual";
import { getFill } from "./getFill";

function App() {
    const [accessor, setAccessor] = useState("articles");

    // set up some scroll thing that updates the accessor which then updates the fills...
    useEffect(()=> {
        d3.selectAll("rect").attr("fill", (d)=>{
            const color = getFill(d, accessor);
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
