import React, { useState, useEffect } from "react";
import { Button, Card,Grid } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisements() {
  const [jobAds, setJobAds] = useState([]);
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAds()
      .then((result) => setJobAds(result.data.data));
  });
  return (
    <div className="ui cards custom">
      <Grid>
        <Grid.Column width={16}>
          <h2 style={{ marginTop: "0.5em" }}>All Job Advertisements</h2>
          <Card.Group>
            {jobAds.map((jobAd) => (
              <Card key={jobAd.job_ads_id}>
                <Card.Content>
                  <Card.Header>{jobAd.employer.company_name}</Card.Header>
                  <Card.Meta>{jobAd.description}</Card.Meta>

                  <Card.Description>
                    {jobAd.jobPositions.jobName}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="green">
                      Approve
                    </Button>
                    <Button basic color="red">
                      Decline
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </Grid.Column>
      </Grid>
    </div>
  );
}
