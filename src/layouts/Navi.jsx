import React from "react";
import { Icon, Menu, Button, Dropdown } from "semantic-ui-react";
export default function Navi() {
  return (
    <div>
      <Menu icon>
        <Menu.Item name="home">
          <Icon name="home" />
          <p className="menu-text">Home</p>
        </Menu.Item>

        <Menu.Item name="list">
          <Icon name="list" />
          <p className="menu-text">Advertisements</p>
        </Menu.Item>

        <Menu.Item name="list layout">
          <Icon name="list layout" />
          <p className="menu-text">Employees</p>
        </Menu.Item>
        <Menu.Item name="th list">
          <Icon name="th list" />
          <p className="menu-text">Employers</p>
        </Menu.Item>
        <Menu.Item name="info">
          <Icon name="info" />
          <p className="menu-text">Abou Us</p>
        </Menu.Item>
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
