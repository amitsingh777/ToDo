import { combineReducers } from "redux";

const clearAll = (tasks) => {
  return [];
};

const edit = (tasks, action) => {
  return tasks.map((task) => {
    if (task.id === action.payload.id) {
      return {
        title: action.payload.title,
        id: action.payload.id,
        checked: action.payload.isChecked,
      };
    }
    return task;
  });
};
let preTasks = [
  { id: 1000, title: "Exercise for 10mins", checked: false },
  { id: 1001, title: "Coding for atleast 1min", checked: true },
  { id: 1002, title: "Sleep in day for atleast 2hr", checked: false },
  { id: 1003, title: "Walk in the night after dinner", checked: true },
];
const taskReducer = (tasks =preTasks, action) => {
  switch (action.type) {
    case "DELETE_TASK":
      return tasks.filter((task) => task.id !== action.payload.id);
    case "ADD_TASK":
      return [
        ...tasks,
        {
          id: action.payload.id,
          title: action.payload.title,
          checked: action.payload.isChecked,
        },
      ];
    case "EDIT_TASK":
      return edit(tasks, action);
    case "COMPLETE_TASK":
      return tasks.map((task) => {
        if (task.id === action.payload.id) {
          return {
            id: action.payload.id,
            title: action.payload.title,
            checked: action.payload.isChecked,
          };
        }
        return task;
      });
    case "CLEAR_ALL":
      return clearAll(action.payload.tasks);

    default:
      return tasks;
  }
};

const completeTaskReducer = (completeTask = [], action) => {
  switch (action.type) {
    case "ICON_CLICK_COMPLETE":
      return [...action.payload.tasks];
    case "ICON_CLICK_INCOMPLETE":
      return [...action.payload.tasks];
    case "ICON_CLICK_ALL":
      return [...action.payload.tasks];
    case "CLEAR_ALL":
      return clearAll(action.payload.tasks);
    case "EDIT_TASK":
      return edit(completeTask, action);
    case "COMPLETE_TASK":
      return completeTask.map((task) => {
        if (task.id === action.payload.id) {
          return {
            id: action.payload.id,
            title: action.payload.title,
            checked: action.payload.isChecked,
          };
        }
        return task;
      });
    case "DELETE_TASK":
      return completeTask.filter((task) => task.id !== action.payload.id);
    case "ADD_TASK":
      return [
        ...completeTask,
        {
          id: action.payload.id,
          title: action.payload.title,
          checked: action.payload.isChecked,
        },
      ];

    default:
      return completeTask;
  }
};

export default combineReducers({ taskReducer, completeTaskReducer });
