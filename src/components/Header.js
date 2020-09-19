import React from "react";
import logo from "../assets/logo.png";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn"; 
import CheckCircleIcon from "@material-ui/icons/CheckCircle"; 
import ClearAllIcon from "@material-ui/icons/ClearAll"; 
import AssignmentIcon from '@material-ui/icons/Assignment'; 
const Header = () => {
  return (
    <div className="header">
      <a href="/" className="header__logo">
        <img src={logo} alt="logo" className="logo"></img>
      </a>
      <ul className="header__list">
        <li>
        <CheckCircleIcon style={{fontSize:'3rem'}} className="icon" /> 
          <span>All</span>
        </li>
        <li>
        <AssignmentIcon style={{fontSize:'3rem'}} fontSize="large" className="icon"/>
         <span>Active</span>
        </li>
        <li>
    
          <AssignmentTurnedInIcon style={{fontSize:'3rem'}} className="icon" /><span>Completed</span>
        </li>
        <li>
        <ClearAllIcon style={{fontSize:'3rem'}} fontSize="large" className="icon" />
          <span>Clear Completed</span>
        </li>
      </ul>
    </div>
  );
};
export default Header;
