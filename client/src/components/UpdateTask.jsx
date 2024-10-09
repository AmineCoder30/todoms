import React, { useState } from "react";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import { updateTask } from "../api";

const UpdateTask = ({ setshowUpdateTaskForm }) => {
  const { task } = useSelector((state) => state.tasks);

  const handleUpdateTask = () => {
    // API call to update task information
    console.log("Updated task:");
  };

  return (
    <div className="w-full h-full flex justify-center items-center z-50 bg-[#18181c] absolute left-0 top-0">
      <div className="w-[300px] h-[350px] flex flex-col">
        <h2 className="text-lg font-bold mb-4 w-full text-center">
          Update Task
        </h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <input
            className="bg-gray-700 w-full text-gray-200 border-0 rounded-md p-2"
            type="text"
            value={task.content}
            placeholder="add new task"
            onChange={(e) => setTask({ ...task, content: e.target.value })}
          />
        </div>
        <div className="w-full flex gap-1">
          <div className="mb-4 flex-grow">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="status"
            >
              Status
            </label>
            <select
              className="block appearance-none capitalize w-full bg-[#374151] border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              value={task.status}
              onChange={(e) => setTask({ ...task, status: e.target.value })}
            >
              <option value="pending">Pending</option>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="mb-4 flex-grow">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="priority"
            >
              Priority
            </label>
            <select
              className="block appearance-none capitalize w-full bg-[#374151] border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              value={task.priority}
              onChange={(e) => setTask({ ...task, priority: e.target.value })}
            >
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="date"
          >
            Date
          </label>
          <input
            className="shadow appearance-none text-white bg-[#374151] border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            //   value={format(new Date(task.date), "yyyy-MM-dd")}
            //   onChange={(e) => setTask({ ...task, date: e.target.value })}
          />
        </div>

        <div className="flex justify-center items-center gap-3">
          <button className="save " onClick={updateTask}>
            Update
          </button>
          <button
            className="save  bg-white text-gray-950"
            onClick={() => setshowUpdateTaskForm(false)}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;
