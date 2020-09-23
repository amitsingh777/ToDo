import React from "react";

import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import AssignmentIcon from "@material-ui/icons/Assignment";

import { connect } from "react-redux";

import logo from "../assets/logo.png";

import {
  iconClickComplete,
  iconClickIncomplete,
  iconClickAll,
  clearAll,
} from "../action";

const Header = (props) => {
  const onCompleteClick = () => {
    let completedTasks = props.taskReducer.filter(
      (task) => task.checked === true
    );
      props.iconClickComplete(completedTasks);
   
    
  };
  const onInCompleteClick = () => {
    let inCompleteTasks = props.taskReducer.filter(
      (task) => task.checked === false
    );
    props.iconClickIncomplete(inCompleteTasks);
  };
  const onAllClick = () => {
    props.iconClickAll(props.taskReducer);
  };
  const onClearClick = () => {
    props.clearAll(props.taskReducer);
  };
  return (
    <div className="header">
      <a href="/" className="header__logo">
        <img src={logo} alt="logo" className="logo"></img>
      </a>
      <ul className="header__list">
        <li onClick={onAllClick}>
          <CheckCircleIcon style={{ fontSize: "3rem" }} className="icon" />
          <span>All</span>
        </li>
        <li onClick={onInCompleteClick}>
          <AssignmentIcon
            style={{ fontSize: "3rem" }}
            fontSize="large"
            className="icon"
          />
          <span>Active</span>
        </li>
        <li onClick={onCompleteClick}>
          <AssignmentTurnedInIcon
            style={{ fontSize: "3rem" }}
            className="icon"
          />
          <span>Completed</span>
        </li>
        <li onClick={onClearClick}>
          <ClearAllIcon
            style={{ fontSize: "3rem" }}
            fontSize="large"
            className="icon"
          />
          <span>Clear All</span>
        </li>
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { taskReducer: state.taskReducer };
};
export default connect(mapStateToProps, {
  iconClickComplete,
  iconClickIncomplete,
  iconClickAll,
  clearAll,
})(Header);
