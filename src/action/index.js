export const deleteTask = (id) => {
  return {
    type: "DELETE_TASK",
    payload: { id },
  };
};

export const addTask = (id, title, isChecked = false) => {
  return {
    type: "ADD_TASK",
    payload: {
      id,
      title,
      isChecked,
    },
  };
};

export const editTask = (id, title,isChecked) => {
  return {
    type: "EDIT_TASK",
    payload: {
      id,
      title,
      isChecked
    },
  };
};

export const checkTask = (id, title, isChecked) => {
  return {
    type: "COMPLETE_TASK",
    payload: {
      id,
      title,
      isChecked,
    },
  };
};

export const iconClickComplete = (tasks) => {
  return {
    type: "ICON_CLICK_COMPLETE",
    payload: { tasks },
  };
};
export const iconClickIncomplete = (tasks) => {
  return {
    type: "ICON_CLICK_INCOMPLETE",
    payload: { tasks },
  };
};

export const iconClickAll = (tasks) => {
  return {
    type: "ICON_CLICK_ALL",
    payload: { tasks },
  };
};

export const clearAll=(tasks)=>{
  return{
    type:"CLEAR_ALL",
    payload:{tasks}
  }
}


