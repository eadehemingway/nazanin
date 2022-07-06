
import {BACKGROUND_COLOR} from './data/CONSTANTS'
import styled from 'styled-components'
import {SvgVisual} from './components/VSvg'
import {TextContainer} from './components/TTContainer'

function App() {
  return (
    <PageContainer>

    <SvgVisual/>
    <TextContainer />
    {/* <TextContainer setStage={setStage} setFillLayer={setFillLayer} setIsEnd={setIsEnd} setDividerLayer={setDividerLayer}/> */}
    {/* <div style={{ backgroundColor: "red", height: "500px", width: "600px" }}>
    </div>
    <div style={{ backgroundColor: "blue", height: "500px", width: "600px" }}>
    </div>
    <div style={{ backgroundColor: "yellow", height: "500px", width: "600px" }}>
    </div> */}

</PageContainer>
  );
}

const PageContainer = styled.div`
    display: flex;
    background: ${BACKGROUND_COLOR};
    width: 100%;
    font-family: code-saver, sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #ffffff;
    fill: #fff;
    position:relative;
    justify-content: space-between;
`;

export default App;
