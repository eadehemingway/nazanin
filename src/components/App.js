import { useEffect, useMemo, useState } from "react";
import * as d3 from "d3";
import styled from "styled-components";
import { TextContainer } from "./TTContainer";
import { SvgVisual } from "./VSvg";
import { LAYER_NAMES } from "../data/CONSTANTS";
import { getDividerPathLookup } from "../services/getDataDividers";




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
                return d.is_in_range ? d[`${layer}-fill`] ? "red": "pink": "transparent";
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
            .attr("stroke-width", 7)
            .attr("stroke", (d, i)=> {
                return "red";
            }).attr("fill", "none");

        dividers.exit().remove();
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
