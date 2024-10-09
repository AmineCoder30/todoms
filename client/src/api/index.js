import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000" });

//auth api
export const signIn = (formData) =>
  API.post(`/user/get/${formData.username}`, formData);
export const signUp = async (formData) => {
  return await API.post("/user/create/", formData);
};

//messages api
export const fetchTasks = async (id) => await API.get(`/todos/get/${id}`);
export const createTask = async (newTask) => {
  return await API.post("/todos/create", newTask);
};

export const deleteTask = async (id) => await API.delete(`/todos/delete/${id}`);
export const updateTask = async (id, task) =>
  await API.put(`/todos/update/${id}`, task);
