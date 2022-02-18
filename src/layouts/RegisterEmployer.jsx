import React from 'react';
import { Grid,Image } from "semantic-ui-react";
import RecentlyAdded from './RecentlyAdded';
import RegisterEmployerForm from '../pages/RegisterEmployerForm';

export default function RegisterEmployer() {
  return (
    <div>
    
      <Grid>
        <Grid.Column width={16}>
          <h2 style={{marginTop:"0.5em"}}>Employer Register</h2>
        </Grid.Column>
      </Grid>
      <RegisterEmployerForm/>
  </div>
  )
}
