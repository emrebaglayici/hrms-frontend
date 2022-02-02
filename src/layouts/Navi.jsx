import React from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";
export default function Navi() {
  return (
    <div>
      <Menu size="small">
        <Menu.Item name="Home" />
        <Menu.Item name="Job Advertisements" />
        <Menu.Item name="Employees" />
        <Menu.Item name="Employers" />

        <Menu.Menu position="right">
          <Menu.Item>
            <Button primary>Login</Button>
          </Menu.Item>
          <Menu.Item>
            <Button primary>Register</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
