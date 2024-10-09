import { combineReducers } from "redux";
import userReducer from "./Users";
import tasksReducer from "./Tasks";
export const reducers = combineReducers({
  users: userReducer,
  tasks: tasksReducer,
});
