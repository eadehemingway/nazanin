
import "./App.css";
import styled from "styled-components";
import { TextContainer } from "./TextContainer";
import { SvgVisual } from "./SvgVisual";

function App() {
    return (
        <PageContainer>
            <SvgVisual/>
            <TextContainer/>
        </PageContainer>
    );
}

const PageContainer = styled.div`
display:flex;

`;

export default App;
