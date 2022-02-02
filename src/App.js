import './App.css';
import Navi from './layouts/Navi';
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import JobAdvertisements from './pages/JobAdvertisements';
import Dashboard from './layouts/Dashboard';

function App() {
  return (
    <div className="App">
      <Container className="main">
        <Navi/>
        <Dashboard/>
      </Container>
      
    </div>
  );
}

export default App;
