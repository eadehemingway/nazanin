import { LegendDropdown } from "./LegendDropdown";
import styled from "styled-components";


import dividers_legend_icon from "../assets/divider_legend_icon.svg";
import fill_legend_icon from "../assets/fill_legend_icon.svg";
import { LAYERS } from "../data/LAYERS";

const dividers = LAYERS.filter(d=> d.type === "divider");
const fills = LAYERS.filter(d=> d.type === "fill");


export function Legend({ is_end, setFillLayer, setDividerLayer, fill_layer, divider_layer, setStage }) {

    return (
        <LegendContainer>
            {is_end &&
            <>
                <LegendDropdown
                    options={dividers}
                    backup_label={"dividers"}
                    icon={dividers_legend_icon}
                    setLayer={setDividerLayer}
                    layer={divider_layer}
                    setStage={setStage}/>
                <LegendDropdown
                    options={fills}
                    backup_label={"fills"}
                    icon={fill_legend_icon}
                    setLayer={setFillLayer}
                    layer={fill_layer}
                    setStage={setStage}/>
            </>
            }
        </LegendContainer>
    );
};


const LegendContainer = styled.div`
	width: 16%;
	overflow: hidden;
	display: inline-block;
	z-index: 5;
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
`;