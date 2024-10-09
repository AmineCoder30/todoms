import React, { useEffect, useState } from "react";
import { Spinner, NavBar, NewTAsk, Header, TaskList } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CiMedicalCross } from "react-icons/ci";
import { fetchTasks } from "../actions/tasks";

const Todos = ({ userInfo }) => {
  const [filterName, setfilterName] = useState({ name: "all", value: "all" });
  const [showForm, setshowForm] = useState(false);
  const [type, setType] = useState("create");

  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));

  const [showNavbar, setshowNavbar] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setLoading(true);
      dispatch(fetchTasks(user._id));
      setLoading(false);
    } else {
      navigate("/singin");
    }
  }, []);
  const handleAddButton = () => {
    setshowForm(true);

    setType("create");
  };

  return (
    <div className="h-[100vh] w-full bg-[#121215] flex items-center justify-center overflow-hidden ">
      <div className="home w-full md:w-[80%] lg:w-70% py-1 mr-auto ml-auto">
        <Header setshowNavbar={setshowNavbar} setshowForm={setshowForm} />

        <div
          className="todo_body flex items-cnter justify-center 
          overflow-x-hidden
         w-full  mr-auto ml-auto relative gap-[10px]"
        >
          <button
            className="save bt_bg absolute right-2 bottom-3 z-50 "
            onClick={handleAddButton}
          >
            <CiMedicalCross />
          </button>
          <NavBar
            setfilterName={setfilterName}
            filterName={filterName}
            setshowNavbar={setshowNavbar}
            showNavbar={showNavbar}
          />
          <NewTAsk
            userInfo={userInfo}
            showForm={showForm}
            setshowForm={setshowForm}
            setshowNavbar={setshowNavbar}
            type={type}
          />
          {loading ? (
            <Spinner />
          ) : (
            <TaskList
              setshowForm={setshowForm}
              filterName={filterName}
              setType={setType}
            />
          )}
        </div>
      </div>
      )
    </div>
  );
};

export default Todos;
