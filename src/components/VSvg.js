import { useEffect } from "react";
import styled from "styled-components";
import { YearViz } from "./VYear";

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
    width: 55%;
    height: 100vh;
`;