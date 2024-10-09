import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../actions/tasks";

const DeleteTaskCard = ({ setshowDeleteTaskCard }) => {
  const dispatch = useDispatch();
  const { task } = useSelector((state) => state.tasks);
  const handleDeleteTask = () => {
    dispatch(deleteTask(task._id));
    setshowDeleteTaskCard(false);
  };
  return (
    <div className="w-full h-full flex justify-center items-center z-50 bg-[#121215d6] absolute left-0 top-0">
      <div className="bg-[#121215] shadow-md rounded px-4 py-2 w-64 ">
        <h2 className="text-lg font-bold mb-2">Delete Task?</h2>
        <p className="text-gray-600 mb-4">
          Are you sure you want to delete this task?
        </p>
        <div className="flex justify-end">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleDeleteTask}
          >
            Delete
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded ml-2"
            onClick={() => setshowDeleteTaskCard(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTaskCard;
