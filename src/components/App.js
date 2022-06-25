import { useCallback, useEffect, useMemo, useState } from "react";
import * as d3 from "d3";
import styled from "styled-components";
import { Legend } from "./Legend";
import { TextContainer } from "./TTContainer";
import { SvgVisual } from "./VSvg";
import { LAYER_NAMES, BACKGROUND_COLOR } from "../data/CONSTANTS";
import { getDividerPathLookup } from "../services/getDividerPathLookup";
import { getHighlightPathLookup } from "../services/getHighlightPathLookup";
import dividers_legend_icon from "../assets/divider_legend_icon.svg";
import fill_legend_icon from "../assets/fill_legend_icon.svg";

const FILL_COLOR = "#2a52d1";
const BLANK_COLOR = "transparent";

const dividers = [
    { id: 1, name: "Foreign Secretaries" },
    { id: 2, name: "Prime Ministers" },
    { id: 3, name: "Location" }
];

const fills = [
    { id: 1, name: "Solitary confinement" },
    { id: 2, name: "Daughter’s birthdays" },
];

function App() {
    const [stage, setStage] = useState(5);
    const [layer, setLayer] = useState(LAYER_NAMES.location);
    console.log("stage:", stage);
    console.log("layer:", layer);
    console.log("----------------------------");


    const divider_path_lookups = useMemo(()=>{
        return getDividerPathLookup();
    }, []);

    const highlight_path_lookups = useMemo(()=>{
        return getHighlightPathLookup();
    }, []);

    const new_divider_data = useMemo(()=> {
        return divider_path_lookups[layer][stage] || [];
    }, [divider_path_lookups, layer, stage]);

    const updateFills = useCallback(()=>{
        d3
            .selectAll("rect")
            .transition()
            .duration(1000)
            .attr("fill", (d)=>{
                return d.is_in_range ? d[`${layer}-fill`] ? FILL_COLOR: BLANK_COLOR: "transparent";
            });
    }, [layer]);

    const updateDividers = useCallback(()=>{
        console.log("UPDATING DIVIDERS");

        const dividers =  d3.select("svg")
            .selectAll(".dividers")
            .data(new_divider_data);

        const entering_dividers = dividers
            .enter()
            .append("path")
            .attr("class", "dividers")
            .attr("stroke-width", 0);


        const update_dividers = entering_dividers.merge(dividers);
        update_dividers
            .transition()
            .duration(1000)
            .attr("d", (d)=>{
                return d.path;
            })
            .attr("stroke-width", 1)
            .attr("stroke", (d, i)=> {
                return "#fff";
            }).attr("fill", "none");

        dividers.exit()
            .transition()
            .duration(1000)
            .attr("stroke-width", 0)
            .remove();


    }, [new_divider_data]);

    const updateHighlights = useCallback(()=>{
        // update highlights
        const new_highlight_data = highlight_path_lookups[layer][stage] || [];

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
            .attr("stroke-width", 1)
            .attr("stroke", (d, i)=> {
                return "red";
            }).attr("fill", "none");

        highlights.exit().remove();


    }, [highlight_path_lookups, layer, stage]);

    useEffect(()=> {
        updateFills();
        updateHighlights();
    }, [layer, stage]);

    useEffect(()=> {
        updateDividers();
    }, [updateDividers]);

    return (
        <PageContainer>
            <LegendContainer>
                <Legend options={dividers} icon={dividers_legend_icon}/>
                <Legend options={fills} icon={fill_legend_icon}/>
            </LegendContainer>
            <SvgVisual/>
            <TextContainer setStage={setStage} setLayer={setLayer} stage={stage}/>
            <Panel style={{ position: "absolute", right: "0px" }}>
                <DaysTitle>days</DaysTitle>
            </Panel>
        </PageContainer>
    );
}

const Panel = styled.div`
    width: 15%;
    font-size: 126px;
`;

export const Title = styled.div`
    font-family: fairweather;
    font-weight: 800;
    font-size: 126px;
    color: #ffffff;
`;

const DaysTitle = styled(Title)`
    width: calc(100% - 20px);
    margin: 40vh 0px 0px 20px;
`;

export const TotalTitle = styled(Title)`
    width: 15%;
    margin: 40vh 15% 0px 20px;
`;

const LegendContainer = styled.div`
	width: 10%;
	overflow: hidden;
	display: inline-block;
	z-index: 5;
`;

const PageContainer = styled.div`
    display: flex;
    background: ${BACKGROUND_COLOR};
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
