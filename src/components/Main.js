import React from "react";

const Main = () => {
  return (
    <form action="" className="form-main">
      <div className="form-main__div">
        <input
          type="text"
          name="input"
          placeholder="Task you want to complete"
          className="input"
        />
        <button name="task" className="btn">
          Add
        </button>
      </div>
    </form>
  );
};

export default Main;
