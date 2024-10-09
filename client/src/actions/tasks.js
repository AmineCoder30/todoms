import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
} from "../constants/actionTypes.js";
import * as api from "../api/index.js";

export const fetchTasks = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchTasks(id);

    dispatch({ type: GET_TASKS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createTask = (task) => async (dispatch) => {
  try {
    const { data } = await api.createTask(task);
    dispatch({ type: ADD_TASK, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    await api.deleteTask(id);
    dispatch({ type: DELETE_TASK, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = (id, task) => async (dispatch) => {
  try {
    await api.updateTask(id, task);
    dispatch({ type: UPDATE_TASK, payload: task });
  } catch (error) {
    console.log(error);
  }
};
