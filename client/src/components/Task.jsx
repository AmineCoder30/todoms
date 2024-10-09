import React from "react";
import { BsCheck } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { MdOutlineModeEditOutline } from "react-icons/md";

function Task({ item, onDelete, setshowForm, setType }) {
  const dispatch = useDispatch();
  const handlePriorityColor = (priority) => {
    if (priority.toLowerCase() === "low") {
      return "bg-[#2eff00]";
    } else if (priority.toLowerCase() === "medium") {
      return "bg-[#ffd244]";
    } else {
      return "bg-[#ff0000]";
    }
  };
  const handleUpdateTask = () => {
    setshowForm(true);
    setType("update");
    dispatch({ type: "SET_TASK", payload: item });
  };

  return (
    <div
      className="item items-center relative overflow-hidden  "
      key={item._id}
    >
      <span
        className={`h-full w-3 absolute top-0 left-0 ${handlePriorityColor(
          item.priority
        )}`}
      ></span>
      <div className="content ml-3 flex items-center w-full lg:w-[350px] cursor-pointer relative">
        <p
          className={`text_content capitalize text-[12px] sm:text-[15px] ${
            item.status === "complete"
              ? "line-through text-[#7E7E7E]"
              : "text-white"
          }`}
        >
          {item.content}
        </p>
      </div>

      <div className="status bg-[#704bec24] text-white rounded-[5px] py-1 px-3 hidden lg:block text-[10px] md:text-[12px]">
        {item.status}
      </div>
      <div
        className="time bg-[#898acc3b] text-white rounded-[5px] py-1 px-3 text-[10px] md:text-[12px]
       items-center hidden lg:flex"
      >
        {String(item.date).slice(5, 10).replace("-", "/")}
      </div>

      <div className="controlls flex gap-5 text-[20px]">
        <MdOutlineModeEditOutline
          onClick={handleUpdateTask}
          className="fill-[#704bec] hover:fill-[#2bfc23]"
        />
        <RiDeleteBin5Line
          onClick={onDelete}
          className="fill-[#704bec] hover:fill-[#f10202]"
        />
      </div>
    </div>
  );
}

export default Task;
