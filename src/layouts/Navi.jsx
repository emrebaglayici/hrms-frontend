import React, { useState } from "react";
import { Icon, Menu } from "semantic-ui-react";
import { useNavigate} from "react-router-dom";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
export default function Navi() {
  const[isAuthenticated,setIsAuthenticated]=useState(true)
  let navigate=useNavigate();
  function handleSignOut(){
    setIsAuthenticated(false)
    navigate('/');
  }
  function handleSignIn(){
    setIsAuthenticated(true)
  }
  return (
    <div>
      <Menu icon>
        <Menu.Item name="home" onClick={()=>{navigate("/")}}>
          <Icon name="home" />
          <p className="menu-text">Home</p>
        </Menu.Item>

        <Menu.Item name="list" onClick={()=>{navigate("/JobAdvertisements")}}>
          <Icon name="list" />
          <p className="menu-text">Advertisements</p>
        </Menu.Item>

        <Menu.Item name="list layout" onClick={()=>{navigate("/Employees")}}>
          <Icon name="list layout" />
          <p className="menu-text">Employees</p>
        </Menu.Item>
        <Menu.Item name="th list" onClick={()=>{navigate("/Employers")}}>
          <Icon name="th list" />
          <p className="menu-text">Employers</p>
        </Menu.Item>
        <Menu.Item name="info" onClick={()=>{navigate("/JobPostings")}} >
          <Icon name="info" />
          <p className="menu-text">Job Postings</p>
        </Menu.Item>
        
        <Menu.Menu position="right">
          {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
        </Menu.Menu>
      </Menu>
    </div>
  );
}
