import styled from "styled-components";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function TTText({ stage, setStage, text, index }){
    const $s = useRef(null)

    useEffect(() => {
        if (!$s.current) return
        const a = gsap.to($s.current, { scrollTrigger: {
            trigger: $s.current,
            markers: true,
            start: "top 300px",
            end: "bottom 300px",
            onEnter:()=>{
                if (stage === index) return;
                setStage(index);
            },
            onEnterBack:()=> {
                if (stage === index) return;
                setStage(index);
            }
        }
        });
        return () => a.scrollTrigger.kill()


    }, [ setStage, stage, text, index]);

    return (
        <P ref={$s}>{text}</P>
    );
}


const P = styled.p`
margin: 50px 0;
`;
