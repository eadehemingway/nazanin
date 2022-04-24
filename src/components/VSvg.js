import styled from "styled-components";
import { YearViz } from "./VYear";
import { BOX_SIZE , TOP_PADDING } from "../data/CONSTANTS.js";

export function SvgVisual(){
    const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022];
    return (
        <Container>
            {MONTHS.map((d,i) => <MonthLabel
                key={`month_label_${i}`}
                x={0}
                y={TOP_PADDING + (i * (4.4 * BOX_SIZE)) + 30}
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
    width: 55%;
    height: 100vh;
`;

const MonthLabel = styled.text`

`;