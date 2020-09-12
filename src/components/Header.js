import React from "react";
// import SvgIcon from '@material-ui/core/SvgIcon';
import logo from "../assets/logo.png";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn"; //all
import CheckCircleIcon from "@material-ui/icons/CheckCircle"; //completed
import ClearAllIcon from "@material-ui/icons/ClearAll"; //clear completed
const Header = () => {
  return (
    <div className="header">
      <a href="/" className="header__logo">
        <img src={logo} alt="logo" className="logo"></img>
      </a>
      <ul className="header__list">
        <li>
          <AssignmentTurnedInIcon style={{fontSize:'3rem'}} className="icon" />
          <span>All</span>
        </li>
        <li>

          <ClearAllIcon style={{fontSize:'3rem'}} fontSize="large" className="icon" /> <span>Active</span>
        </li>
        <li>
          <CheckCircleIcon style={{fontSize:'3rem'}} className="icon" /> <span>Completed</span>
        </li>
      </ul>
    </div>
  );
};
export default Header;
