import styled from "styled-components";
import { YearViz } from "./VYear";
import { BOX_SIZE , SPACE_FOR_TOP_LABELS, SVG_WIDTH, SVG_HEIGHT, MARGIN_TOP, MARGIN_RIGHT, MARGIN_BOTTOM, MARGIN_LEFT } from "../services/utils";

export function SvgVisual(){
    const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022];
    return (
        <Container>
            {MONTHS.map((d,i) => <MonthLabel
                key={`month_label_${i}`}
                x={0}
                y={SPACE_FOR_TOP_LABELS + (i * (4.4 * BOX_SIZE)) + 30}
                opacity={0.5}
                style={{ fontSize: "10px" }}
            >{d}</MonthLabel>)}
            {years.map((d,i)=> <YearViz
                key={i}
                year={d}
                index={i}
            />)}
        </Container>
    );
}

const Container = styled.svg`
    display: flex;
    align-self: start;
    overflow: visible;
	width: ${SVG_WIDTH}px;
    height: ${SVG_HEIGHT}px;
    margin: ${MARGIN_TOP}px ${MARGIN_RIGHT}px ${MARGIN_BOTTOM}px ${MARGIN_LEFT}px;
    position: fixed;
    top:0;

`;

const MonthLabel = styled.text`

`;