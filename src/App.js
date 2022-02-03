import './App.css';
import Navi from './layouts/Navi';
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import HomeContainer from './layouts/HomeContainer';

function App() {
  return (
    <div className="App">
      <Container className="main">
        <Navi/>
        <HomeContainer/>
      </Container>
    </div>
  );
}

export default App;
