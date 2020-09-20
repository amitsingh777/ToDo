import React from "react";
import Task from "./Task";

const GroupTask = () => {
  return (
    <form className="group">
      <ul className="group__list">
        <Task key="1" />
        <Task key="2" />
        <Task key="3" />
        <Task key="4" />
      </ul>
    </form>
  );
};
export default GroupTask;
