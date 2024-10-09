import {
  GET_TASKS,
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
} from "../constants/actionTypes";

const initialState = {
  tasks: [],
  task: {},
};

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_TASK:
      // Assuming action.payload is the id of the task to be deleted
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload),
      };

    case ADD_TASK:
      // Assuming action.payload is the new task to be added
      return { ...state, tasks: [...state.tasks, action.payload] };

    case GET_TASKS:
      // Assuming action.payload is the array of tasks fetched from the server
      return { ...state, tasks: action.payload.todoList };

    case UPDATE_TASK:
      // Assuming action.payload is the updated task
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task._id === action.payload._id
            ? { ...task, ...action.payload }
            : task
        ),
      };
    // console.log(action.payload._id);
    case "SET_TASK":
      return { ...state, task: action.payload };

    default:
      return state;
  }
}
