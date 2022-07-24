import styled from "styled-components";
import { TEXT_COLUMN_WIDTH, TEXT_H2_FONT_SIZE, SPACE_FOR_TOP_LABELS, FILL_COLOR } from "../services/utils";
import { useEffect, useRef } from "react";
import gsap from "gsap";


export function TTLayerTitle({ type }){
    const $title = useRef(null);
    useEffect(() => {
    if (!$title.current) return
        const a = gsap.to($title.current, {
            scrollTrigger: {
                trigger: $title.current,
                start: `top ${SPACE_FOR_TOP_LABELS}`,
                end: "bottom 200",
                // markers: true,
                scrub: true,
                pin: true
            },
        });
        return () => a.scrollTrigger.kill()

    }, []);

    return (
        <Title ref={$title} color={type === "fill" ? FILL_COLOR : "#fff"}>2,172 </Title>
    );
}


const Title = styled.h2`
    position: absolute;
    left: -${TEXT_COLUMN_WIDTH + 20}px;
	width: ${TEXT_COLUMN_WIDTH}px;
    height: 100%;
    font-size: ${TEXT_H2_FONT_SIZE}px;
    color: ${props => props.color};
    margin: 0;
`;
