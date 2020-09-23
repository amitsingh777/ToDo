import React, { useState, useRef, useEffect } from "react";

import DeleteIcon from "@material-ui/icons/Delete"; //delete button
import EditIcon from "@material-ui/icons/Edit"; //edit button
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";

import { deleteTask, editTask, checkTask } from "../action";

const Task = (props) => {
  const { title, deleteTask, editTask, id, checkTask, checked } = props;
  const [editTitle, setEditTitle] = useState(title);
  const [edit, setEdit] = useState(false);
  const [hide, setHide] = useState("");
  const [afterEditBox, setAfterEditBox] = useState("");
  const [afterEditBoxPara, setAfterEditBoxPara] = useState("");
  const myRef = useRef(null);
 
  useEffect(() => {
    myRef.current.checked = checked;
  }, [checked]);

  const onButtonClickDelete = (e) => {
    e.preventDefault();
    deleteTask(id);
  };
  const onButtonClickEdit = (e) => {
    e.preventDefault();

    setEdit(true);
    setHide("hide");
    setAfterEditBox("after-edit-box");
    setAfterEditBoxPara("after-edit-box-para");
  };
  const onDoneClick = (e) => {
    e.preventDefault();

    editTask(id, editTitle, checked);
    setEdit(false);
    setHide("");
    setAfterEditBoxPara("");
    setAfterEditBox("");
  };
  const onCloseClick = (e) => {
    e.preventDefault();
    // editTask()
    setEdit(false);
    setHide("");
    setAfterEditBoxPara("");
    setAfterEditBox("");
  };
  const input = () => {
    if (edit) {
      return (
        <React.Fragment>
          <input
            type="text"
            name="text"
            value={editTitle}
            onChange={(e) => {
              setEditTitle(e.target.value);
            }}
            onKeyPress={(e)=>{if(e.key.toLowerCase() === 'enter'){e.preventDefault()}}}
            className="after-edit-input"
          />
          <span className="after-edit-buttons">
            <button
              className="after-edit-btn after-edit-done-btn"
              onClick={onDoneClick}
            >
              <DoneIcon style={{ fontSize: "2.5rem" }} />
            </button>
            <button
              className="after-edit-btn after-edit-close-btn"
              onClick={onCloseClick}
            >
              <CloseIcon style={{ fontSize: "2.5rem" }} />
            </button>
          </span>
        </React.Fragment>
      );
    }
    return false;
  };
  const onCheckBoxClick = (e) => {
    checkTask(id, title, e.target.checked);
  };

  return (
    <li className="task">
      <div className={`task__main ${afterEditBox} `}>
        <input
          type="checkbox"
          name="task-check"
          className="task__check"
          onClick={onCheckBoxClick}
          value={title}
          ref={myRef}
        />
        <p className={`task__text ${afterEditBoxPara}`}>{input() || title}</p>
      </div>
      <div className="task__button">
        <button
          className={`button button--edit ${hide}`}
          onClick={onButtonClickEdit}
        >
          <EditIcon style={{ fontSize: "2.5rem" }} />
        </button>
        <button
          className={`button button--delete ${hide}`}
          onClick={onButtonClickDelete}
        >
          <DeleteIcon style={{ fontSize: "2.5rem" }} />
        </button>
      </div>
    </li>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return { state };
};
export default connect(mapStateToProps, { deleteTask, editTask, checkTask })(
  Task
);
