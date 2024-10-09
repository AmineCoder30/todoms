import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import done from "../assets/done.svg";
import { useNavigate } from "react-router-dom";
function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/todos");
    }
  }, []);
  return (
    <section className=" relative pt-20 ">
      <header className=" flex justify-between items-center py-4 px-14 absolute top-0 left-0 w-full">
        <h1 className="text-3xl text-white uppercase font-extrabold">todoms</h1>
        <Link to="/singin">
          <button className="save bt_bg">Get Started</button>
        </Link>
      </header>
      <div className="container h-full mt-5 flex  flex-col justify-center items-center text-center  mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="  text-7xl xl:text-9xl font-bold text-white mb-4 leading-[1.2]">
          Get Things{" "}
          <span className=" text-[#704bec] relative">
            Done{" "}
            <img
              className="absolute -right-[40px] bottom-[45px]"
              src={done}
              alt="done"
            />{" "}
          </span>
          <br />
          with <span className="text-[#704bec]  uppercase">todoms</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-50 mt-3">
          This is a user-friendly application designed to help you stay
          organized and productive. With this app, you can easily:
          <br /> Create and manage tasks, Edit existing tasks, Filter tasks.
        </p>

        <div className="buttons mt-8 ">
          <Link to="/singin">
            <button className="border-2 save border-white rounded-3xl   ">
              Sign In
            </button>
          </Link>
          <Link to="/login">
            <button className="save bt_bg ml-4">Sign Up</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
