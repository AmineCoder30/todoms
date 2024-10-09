import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../actions/tasks";
import { DeleteTaskCard, Task } from "../components";

function TaskList({ filterName, setType, setshowForm }) {
  const [filtredTodos, setfiltredTodos] = useState([]);
  const [showDeleteTaskCard, setshowDeleteTaskCard] = useState(false);
  const { tasks } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const handleDeleteTask = (task) => {
    dispatch({ type: "SET_TASK", payload: task });
    setshowDeleteTaskCard(true);
  };

  useEffect(() => {
    const filteredList = tasks?.filter((item) => {
      if (filterName.name === "all") return true;
      if (filterName.name === "today")
        return item.date.slice(5, 10).replace("-", "/") === filterName.value;
      return item[filterName.name] === filterName.value.toLowerCase();
    });
    setfiltredTodos(filteredList);
  }, [filterName, tasks]);

  return (
    <div className="bg-[#18181c] todo h-[520px] py-[20px] px-[22px] relative overflow-y-scroll ">
      {showDeleteTaskCard && (
        <DeleteTaskCard setshowDeleteTaskCard={setshowDeleteTaskCard} />
      )}

      <h3 className="text-[#898ACC] mb-[20px] text-[25px]">Tasks</h3>
      {filtredTodos?.length === 0 ? (
        <h3 className="text-[#7e7e7e] text-[30px] capitalize font-normal w-full text-center mt-[80px]">
          no items to show...
        </h3>
      ) : (
        filtredTodos?.map((item) => (
          <Task
            key={item._id}
            item={item}
            onDelete={() => handleDeleteTask(item)}
            onEdit={() => editTodo(item._id, setNewFetch, newFetch)}
            setshowForm={setshowForm}
            setType={setType}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
