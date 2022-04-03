import styled from "styled-components";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TriggerText } from "./TriggerText";

gsap.registerPlugin(ScrollTrigger);

export function TextContainer({ setAccessor }){

    // useEffect(() => {
    //     const tl_one = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: "#one",
    //             markers: true,
    //             // scrub: true,
    //             start: "0px 100px",
    //             // end: "bottom center",
    //             scroller: ".container",

    //         },
    //     });
    //     tl_one.to("#one", {
    //         onStart: ()=> setAccessor("hunger"),
    //     });
    //     const tl_two = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: "#two",
    //             markers: true,
    //             // scrub: true,
    //             start: "0px 100px",
    //             // end: "bottom center",
    //             scroller: ".container",

    //         },
    //     });
    //     tl_two.to("#two", {
    //         onStart: ()=> setAccessor("articles"),
    //     });

    // }, []);
    const text = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."];
    return <Container className="container">
        {text.map((t,i)=> <TriggerText text={t} key={i} index={i} setAccessor={setAccessor}/>)}
    </Container>;
}

const Container = styled.div`
    border: 2px solid red;
    width: 30%;
    height: 100vh;
    overflow:scroll;

`;

