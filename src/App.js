import { useCallback, useEffect, useMemo, useState } from "react";
import * as d3 from "d3";
import styled from "styled-components";
import { Legend } from "./components/Legend";
import { TextContainer } from "./components/TTContainer";
import { SvgVisual } from "./components/VSvg";
import { LAYER_NAMES} from "./data/LAYERS";
import { getDividerPathLookup } from "./services/getDividerPathLookup";
import { getHighlightPathLookup } from "./services/getHighlightPathLookup";
import { getCenterArea, BACKGROUND_COLOR, FILL_COLOR, BLANK_COLOR } from "./services/utils";
import "./App.css"

function App() {
    const [stage, setStage] = useState(0);
    const [fill_layer, setFillLayer] = useState(null);
    const [divider_layer, setDividerLayer] = useState(null);

    const [is_end, setIsEnd] = useState(false);



    const divider_path_lookups = useMemo(()=>{
        return getDividerPathLookup();
    }, []);

    const highlight_path_lookups = useMemo(()=>{
        return getHighlightPathLookup();
    }, []);

    const new_divider_data = useMemo(()=> {

        if (!divider_layer) return [];

        return divider_path_lookups[divider_layer][stage] || [];
    }, [divider_path_lookups, divider_layer, stage]);

    const updateFills = useCallback(()=>{
        d3
            .selectAll("rect")
            .transition()
            .duration(1000)
            .attr("fill", (d)=>{
                return d.is_in_range ? d[`${fill_layer}-fill`] ? FILL_COLOR: BLANK_COLOR: "transparent";
            });
    }, [fill_layer]);

    const updateDividerLabels = useCallback(()=>{

        const dividers =  d3.select("svg")
            .selectAll(".divider-labels")
            .data(new_divider_data);

        const entering_dividers = dividers
            .enter()
            .append("text")
            .attr("class", "divider-labels");

        const update_dividers = entering_dividers.merge(dividers);

        update_dividers


            .text(d => {
                return d.name;
            })
            .attr("x", d=> {
                return getCenterArea(d).x;
            })
            .attr("y", d => {
                return getCenterArea(d).y;
            })
            .attr("opacity", "0")
            .attr("text-anchor", "middle")
            .transition()
            .duration(1000)
            .attr("opacity", "1");

        dividers.exit()
            .transition()
            .duration(1000)
            .remove();


    }, [new_divider_data]);

    const updateDividers = useCallback(()=>{
        if (!divider_layer )return;

        const dividers =  d3.select("svg")
            .selectAll(".dividers")
            .data(new_divider_data);

        const entering_dividers = dividers
            .enter()
            .append("path")
            .attr("class", "dividers");


        const update_dividers = entering_dividers.merge(dividers);
        update_dividers
            .attr("d", (d)=>{
                return d.path;
            })
            .attr("stroke-width", 0)
            .transition()
            .duration(1500)

            .attr("stroke-width", 1)
            .attr("stroke", (d, i)=> {
                return "#fff";
            }).attr("fill", "none");

        dividers.exit()
            .transition()
            .duration(1500)
            .attr("stroke-width", 0)
            .remove();


    }, [new_divider_data]);

    const updateHighlights = useCallback(()=>{
        if (!fill_layer )return;
        // update highlights
        const new_highlight_data = highlight_path_lookups[fill_layer][stage] || [];

        const highlights =  d3.select("svg")
            .selectAll(".highlights")
            .data(new_highlight_data);

        const entering_highlights = highlights
            .enter()
            .append("path")
            .attr("class", "highlights");

        const update_highlights = entering_highlights.merge(highlights);
        update_highlights.attr("d", (d)=>{
            return d.path;
        })
            .attr("stroke-width", 3)
            .attr("stroke", (d, i)=> {
                return "white";
            }).attr("fill", "none");

        highlights.exit().remove();


    }, [highlight_path_lookups, fill_layer, stage]);

    useEffect(()=> {
        updateFills();
        updateHighlights();
    }, [fill_layer, stage]);

    useEffect(()=> {
        updateDividers();
        updateDividerLabels();
    }, [updateDividers]);

  return (
    <PageContainer>
        {/* <Legend
                setStage={setStage}
                is_end={is_end}
                setFillLayer={setFillLayer}
                setDividerLayer={setDividerLayer}
                fill_layer={fill_layer}
                divider_layer={divider_layer}/> */}
    <SvgVisual/>
    <TextContainer setStage={setStage} setFillLayer={setFillLayer} setIsEnd={setIsEnd} setDividerLayer={setDividerLayer} fill_layer={fill_layer}/>

    </PageContainer>
  );
}

const PageContainer = styled.div`
    display: flex;
    background: ${BACKGROUND_COLOR};
    width: 100%;
    font-family: code-saver, sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #ffffff;
    fill: #fff;
    position:relative;
    justify-content: space-between;
    overflow: hidden;
    height: 100%;
`;

export default App;
