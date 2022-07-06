import styled from "styled-components";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import gsap from "gsap";

export function TTText({ stage,  current_layer, setStage, text, index }){
    const id = `${current_layer}-text-${index}`;

    useEffect(() => {
        const a = gsap.to(`#${id}`, { scrollTrigger: {
            trigger: `#${id}`,
            // markers: true,
            start: "0px 300px",
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


    }, []);

    return (
        <P id={id}>{text}</P>
    );
}


const P = styled.p`
margin: 50px 0;
border: 3px solid blue;
`;
