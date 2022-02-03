import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  CardDescription,
  Icon,
} from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function RecentlyAdded() {
  const [jobAds, setJobAds] = useState([]);
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAds()
      .then((result) => setJobAds(result.data.data));
  });
  return (
    <div>
      <Card.Group className="custom">
        {jobAds.map((jobAd) => (
          <Card key={jobAd.job_ads_id}>
            <Card.Content textAlign="left">
              <Card.Header>{jobAd.jobPositions.jobName}</Card.Header>
              <Card.Meta>{jobAd.employer.company_name}</Card.Meta>
              <Card.Description>{jobAd.description}</Card.Description>
              <Card.Description>
                Job Creation Time{jobAd.creation_time}
              </Card.Description>
              <CardDescription>
                Latest Apply Time{jobAd.latest_apply_time}
              </CardDescription>
              <CardDescription>
                Minimum Salary : {jobAd.min_salary}
                <Icon name="try" />
              </CardDescription>
              <CardDescription>
                Maximum Salary : {jobAd.max_salary}
                <Icon name="try" />
              </CardDescription>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button positive>View Job Details</Button>
              </div>
            </Card.Content>
          </Card>
          
        ))}
        
      </Card.Group>
    </div>
  );
}
