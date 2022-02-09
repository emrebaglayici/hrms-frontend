import "./App.css";
import Navi from "./layouts/Navi";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import HomeContainer from "./layouts/HomeContainer";
import Dashboard from "./layouts/Dashboard";
import { Route, Routes } from "react-router-dom";
import JobAdvertisements from "./pages/JobAdvertisements";
import Employees from "./pages/Employees";
import Employers from "./pages/Employers";
import JobPostings from "./pages/JobPostings";

function App() {
  return (
    <div className="App">
      <Container className="main">
        <Navi />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/JobAdvertisements" element={<JobAdvertisements />} />
          <Route exact path="/Employees" element={<Employees />} />
          <Route exact path="/Employers" element={<Employers />} />
          <Route exact path="/JobPostings" element={<JobPostings />} />
          
        </Routes>
        <HomeContainer />
      </Container>
    </div>
  );
}

export default App;
