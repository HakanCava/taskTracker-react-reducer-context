export const initialState = {
  tasks: [],
};

const reducer = (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        tasks: [...state.tasks].filter((task) => task.id !== action.payload),
      };
    case "COMPLETE_TODO":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id !== action.payload) {
            return task;
          }
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }),
      };
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id !== action.payload.taskId) {
            return task;
          }

          return {
            ...task,
            name: action.payload.newName,
            date: action.payload.newDate,
          };
        }),
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
