import React, { useState, useEffect } from "react";
import { Button, Card, Icon } from "semantic-ui-react";
import EmployerService from "../services/employerService";

export default function Employers() {
  const [employers, setEmployers] = useState([]);
  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  });
  return (
    <div>
      <Card.Group className="custom">
        {employers.map((employer) => (
          <Card key={employer.id}>
            <Card.Content textAlign="left">
              <Card.Header>
                {employer.company_name}
              </Card.Header>
              <Card.Meta>{employer.email}</Card.Meta>
              <Card.Description>Phone : {employer.phone}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button positive>View Employers</Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
