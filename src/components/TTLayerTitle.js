import styled from "styled-components";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import gsap from "gsap";

// gsap.registerPlugin(ScrollTrigger);

export function TTLayerTitle(){
    const $title = useRef(null);
    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: $title.current,
                start: "top 50",
                end: "bottom 200",
                markers: true,
                scrub: true,
                pin: true
            },
        });
        // return () => animation.scrollTrigger.kill()

    }, []);

    return (
        <Title ref={$title}>2,172 </Title>
    );
}


const Title = styled.h2`
    position: absolute;
    left: -200px;
    height: 100%;
    font-family: fairweather;
    font-weight: 800;
    font-size: 126px;
    color: #ffffff;
    margin: 0;
`;
