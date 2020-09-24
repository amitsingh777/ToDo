import React from "react";
import { connect } from "react-redux";

import { addTask,iconClickAll } from "../action";

class Main extends React.Component {
  state = { id: 0, title: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    let useID = this.state.id;
    if(this.props.tasks.length !== 0){
      this.props.iconClickAll(this.props.tasks);
    }
    this.props.addTask(this.state.id, this.state.title);
   

    this.setState({ id: ++useID });
    this.setState({ title: "" });
  };

  render() {
    return (
      <form action="" className="form-main" onSubmit={this.onFormSubmit}>
        <div className="form-main__div">
          <input
            type="text"
            name="input"
            placeholder="Task you want to complete"
            className="input"
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
            required
            autoComplete="off"
          />
          <button name="task" className="btn">
            Add
          </button>
        </div>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return { tasks: state.taskReducer };
};
export default connect(mapStateToProps, { addTask, iconClickAll })(Main);
