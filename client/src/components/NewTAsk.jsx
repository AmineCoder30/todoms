import React, { useState, useEffect } from "react";

import Selector from "./selector";
import navbarList from "../tools/NavbarList";
import { createTask, updateTask } from "../actions/tasks";
import { useDispatch, useSelector } from "react-redux";
function NewTAsk({ type, showForm, setshowForm }) {
  const { task } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const dt = new Date();
  const [content, setContent] = useState("");
  const [date, setdate] = useState("");
  const [priority, setpriority] = useState("");
  const [status, setstatus] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    setContent(type === "create" ? "" : task.content);
    setdate(
      type === "create"
        ? `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(
            2,
            "0"
          )}-${String(dt.getDate()).padStart(2, "0")}`
        : task.date
    );
    setpriority(type === "create" ? "low" : task.priority);
    setstatus(type === "create" ? "in progress" : task.status);
  }, [task]);

  const handlePriority = (item) => {
    setpriority(item);
  };

  const handleStatus = (item) => {
    setstatus(item);
  };
  const handleSubmit = () => {
    if (type === "create") {
      dispatch(
        createTask({ content, date, priority, status, userid: user._id })
      );
    } else {
      dispatch(
        updateTask(task._id, {
          _id: task._id,
          content,
          date,
          priority,
          status,
          userid: user._id,
        })
      );
    }

    setshowForm(false);
    setContent("");
  };

  return (
    <div
      className={` add_form flex origin-center ${
        showForm ? "scale-1 " : "scale-0"
      } duration-200 
       items-center justify-center  absolute top-0 left-0 w-full h-full bg-[#18181c]`}
    >
      <div className="w-[300px] h-[350px] flex flex-col  gap-6">
        <h3 className="w-full text-white text-center capitalize text-[25px] font-normal">
          add new task
        </h3>
        <input
          className="add_input bg-gray-700 text-gray-200 border-0 rounded-md p-2"
          onChange={(e) => setContent(e.target.value)}
          type="text"
          value={content}
          placeholder="add some tasks..."
        />
        <input
          className="bg-gray-700 text-gray-200 border-0 rounded-md p-2"
          type="date"
          name="date"
          defaultValue={date}
          onChange={(e) => setdate(e.target.value)}
        />
        <Selector
          onChange={handleStatus}
          currentState={status}
          list={["pending", "in progress", "complete"]}
        />
        <Selector
          onChange={handlePriority}
          currentState={priority}
          list={["low", "medium", "high"]}
        />

        <div className="flex justify-center items-center gap-3">
          <button className="save bt_bg" onClick={handleSubmit}>
            save
          </button>
          <button className="save bt_bg" onClick={() => setshowForm(false)}>
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewTAsk;
