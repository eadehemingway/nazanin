import styled from "styled-components";
import { TEXT_COLUMN_WIDTH, TEXT_H2_FONT_SIZE, SPACE_FOR_TOP_LABELS, FILL_COLOR } from "../services/utils";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { format } from "d3";

function commaSeparated(number) {
	return format(",")(number);
}

export function TTLayerTitle({ type, days }){

    return (
        <Title color={type === "fill" ? FILL_COLOR : "#fff"}>{commaSeparated(days)}</Title>
    );
}


const Title = styled.h2`
    position: sticky;
	text-align: right;
	width: ${TEXT_COLUMN_WIDTH}px;
    height: 80px;
    font-size: ${TEXT_H2_FONT_SIZE}px;
    color: ${props => props.color};
    margin: 0;
    top: ${SPACE_FOR_TOP_LABELS}px;
    transform: translateX(-${TEXT_COLUMN_WIDTH + 20}px);
`;
