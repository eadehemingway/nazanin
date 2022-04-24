import { useEffect, useMemo, useState } from "react";
import * as d3 from "d3";
import styled from "styled-components";
import { TextContainer } from "./TTContainer";
import { SvgVisual } from "./VSvg";
import { LAYER_NAMES } from "../data/CONSTANTS";
import { getDividerPathLookup } from "../services/getDataDividers";

const FILL_COLOR = "#2a52d1";
const BLANK_COLOR = "transparent";

function App() {
    const [stage, setStage] = useState(0);
    const [layer, setLayer] = useState(LAYER_NAMES.politics);

    const divider_path_lookups = useMemo(()=>{
        return getDividerPathLookup();
    }, []);

    useEffect(()=> {
        // update fills
        d3
            .selectAll("rect")
            .transition()
            .duration(1000)
            .attr("fill", (d)=>{
                return d.is_in_range ? d[`${layer}-fill`] ? FILL_COLOR: BLANK_COLOR: "transparent";
            });

        // update dividors
        const new_divider_data = divider_path_lookups[layer][stage];
        const dividers =  d3.select("svg")
            .selectAll(".dividers")
            .data(new_divider_data);

        const entering_dividers = dividers
            .enter()
            .append("path")
            .attr("class", "dividers");

        const update_dividers = entering_dividers.merge(dividers);
        update_dividers.attr("d", (d)=>{
            return d.path;
        })
            .attr("stroke-width", 1)
            .attr("stroke", (d, i)=> {
                return "#fff";
            }).attr("fill", "none");

        dividers.exit().remove();
    }, [layer, stage]);

    return (
        <PageContainer>
            <Panel>
                <Title>2,173</Title>
            </Panel>
            <SvgVisual/>
            <TextContainer setStage={setStage} setLayer={setLayer}/>
            <Panel style={{ position: "absolute", right: "0px" }}>
                <Title>days</Title>
            </Panel>
        </PageContainer>
    );
}

const Panel = styled.div`
    width: 15%;
    font-size: 126px;
`;

const Title = styled.div`
    font-family: fairweather;
    font-weight: 800;
    width: calc(100% - 20px);
    font-size: 126px;
    color: #ffffff;
    margin: 40vh 0px 0px 20px;
`;

const PageContainer = styled.div`
    display: flex;
    background: #000000;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    font-family: code-saver, sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #ffffff;
    fill: #fff;
`;

export default App;
