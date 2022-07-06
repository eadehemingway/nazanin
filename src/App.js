import './App.css';
import {BACKGROUND_COLOR} from './data/CONSTANTS'
import styled from 'styled-components'

function App() {
  return (
    <PageContainer>


    <div style={{ backgroundColor: "red", height: "500px", width: "600px" }}>
    </div>
    <div style={{ backgroundColor: "blue", height: "500px", width: "600px" }}>
    </div>
    <div style={{ backgroundColor: "yellow", height: "500px", width: "600px" }}>
    </div>

</PageContainer>
  );
}

const PageContainer = styled.div`
    // display: flex;
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
