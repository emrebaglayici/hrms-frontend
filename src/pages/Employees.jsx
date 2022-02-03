import React, { useState, useEffect } from "react";
import { Button, Card, Icon } from "semantic-ui-react";
import EmployeeService from "../services/employeeService";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    let employeeService = new EmployeeService();
    employeeService
      .getEmployees()
      .then((result) => setEmployees(result.data.data));
  });
  return (
    <div>
      <Card.Group className="custom">
        {employees.map((employee) => (
          <Card key={employee.id}>
            <Card.Content textAlign="left">
              <Card.Header>
                {employee.first_name + employee.last_name}
              </Card.Header>
              <Card.Meta>{employee.email}</Card.Meta>
              <Card.Description>Yaş : {employee.birth_year}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button positive>View Employee</Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
