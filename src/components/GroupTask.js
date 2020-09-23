import React from "react";
import { connect } from "react-redux";

import Task from "./Task";
import { iconClickAll } from "../action";
class GroupTask extends React.Component {
  renderList = () => {
    if (this.props.headerTasks.length === 0) {
      return this.props.tasks.map((task) => {
        return (
          <Task
            key={task.id}
            title={task.title}
            id={task.id}
            checked={task.checked}
          />
        );
      });
    } else {
      return this.props.headerTasks.map((task) => {
        return (
          <Task
            key={task.id}
            title={task.title}
            id={task.id}
            checked={task.checked}
          />
        );
      });
    }
  };
  render() {
    return (
      <form className="group">
        <ul className="group__list">{this.renderList()}</ul>
      </form>
    );
  }
}
const mapStateToProps = (state) => {

  return {
    tasks: state.taskReducer,
    headerTasks: state.completeTaskReducer,
  };
};
export default connect(mapStateToProps, { iconClickAll })(GroupTask);
