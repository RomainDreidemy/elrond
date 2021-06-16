import './App.css';
import Navigation from "./components/molecules/navigation";
import LogoDark from './assets/images/logo-dark.png'
import styled from "styled-components";
import {breakpoint} from "./styles/Style";

function App() {
  return (
    <div className="App">
        <LogoDarkStyle src={LogoDark} />
      <Navigation />
    </div>
  );
}

const LogoDarkStyle = styled.img`
  margin: 15px 0 0 15px;
  display: none;

  @media (max-width: ${breakpoint.medium}){
    display: block;
  }
`;

export default App;
