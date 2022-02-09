import React from 'react';
import { Grid,Image } from "semantic-ui-react";
import homeimage from "../images/home.jpg";
import RecentlyAdded from './RecentlyAdded';

export default function Dashboard() {
  return <div>
      <Grid>
        <Grid.Column width={16}>
          <Image src={homeimage} />
          <h2>Recently Added Job Advertisements</h2>
        </Grid.Column>
      </Grid>
      <RecentlyAdded/>
  </div>;
}
