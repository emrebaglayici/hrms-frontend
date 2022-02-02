import React from 'react';
import { Grid } from "semantic-ui-react";
import JobAdvertisements from '../pages/JobAdvertisements';

export default function Dashboard() {
  return <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <JobAdvertisements/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
  </div>;
}
