import React from "react";
import DeleteIcon from "@material-ui/icons/Delete"; //delete button
import EditIcon from "@material-ui/icons/Edit"; //edit button

const Task = () => {
  return (
    <li className="task">
      <div className="task__main">
        <input type="checkbox" name="task-check" className="task__check" />
        <p className="task__text">Balayam</p>
      </div>
      <div className="task__button">
        <button className="button button--edit">
          <EditIcon style={{ fontSize: "2.5rem" }} />
        </button>
        <button className="button button--delete">
          <DeleteIcon style={{ fontSize: "2.5rem" }} />
        </button>
      </div>
    </li>
  );
};

export default Task;
