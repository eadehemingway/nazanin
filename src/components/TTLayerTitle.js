import styled from "styled-components";
import { TEXT_COLUMN_WIDTH, TEXT_H2_FONT_SIZE } from "../services/utils";
import { useEffect, useRef } from "react";
import gsap from "gsap";


export function TTLayerTitle(){
    const $title = useRef(null);
    useEffect(() => {
    if (!$title.current) return
        const a = gsap.to($title.current, {
            scrollTrigger: {
                trigger: $title.current,
                start: "top 50",
                end: "bottom 200",
                // markers: true,
                scrub: true,
                pin: true
            },
        });
        return () => a.scrollTrigger.kill()

    }, []);

    return (
        <Title ref={$title}>2,172 </Title>
    );
}


const Title = styled.h2`
    position: absolute;
    left: -${TEXT_COLUMN_WIDTH + 20}px;
	width: ${TEXT_COLUMN_WIDTH}px;
    height: 100%;
    font-size: ${TEXT_H2_FONT_SIZE}px;
    color: #ffffff;
    margin: 0;
`;
