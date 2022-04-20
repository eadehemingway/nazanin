import { useEffect } from "react";
import styled from "styled-components";
import { YearViz } from "./YearViz";

export function SvgVisual(){
    const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022];
    return (
        <Container>
            {years.map((d,i)=> <YearViz
                key={i}
                year={d}
                index={i}
            />)}
        </Container>
    );
}

const Container = styled.svg`
    border: 2px solid blue;
    width: 70%;
    height: 100vh;

`;