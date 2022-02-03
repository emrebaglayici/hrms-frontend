import React from "react";
import {Grid,Image} from "semantic-ui-react";
import homeimage from "../images/home.jpg";
import Employees from "../pages/Employees";
import Employers from "../pages/Employers";
import Footer from "./Footer";
import RecentlyAdded from "./RecentlyAdded";

export default function HomeContainer() {
  return (
    <div>
      <Grid>
        <Grid.Column width={16}>
          <Image src={homeimage} />
          <h2>Recently Added Job Advertisements</h2>
        </Grid.Column>
        
      </Grid>
      <RecentlyAdded />
      <Employees/>
      <Employers/>
      <Footer/>
    </div>
  );
}
