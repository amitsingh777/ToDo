import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const Main = () => {
  return (
    <form action="" className="form-main">
    <input
        type="text"
        name="input"
        placeholder="Task you want to complete"
        className="input"
    />
    <button name="task"className="btn">
        <AddCircleIcon className="icon"/>
    </button>
    </form>
  );
};

export default Main;
