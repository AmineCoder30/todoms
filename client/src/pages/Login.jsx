import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { signin } from "../actions/auth";
const toastOptions = {
  position: "bottom-right",
  autoClose: 8000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

function Login() {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getDate = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!password || !userName) {
      toast.error("password and username are required!", toastOptions);
      setLoading(false);
    } else {
      dispatch(signin({ userName, password }, navigate, setLoading));
    }
  };
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
      navigate("/");
    }
  }, []);
  return (
    <div className="inter-form bg-[#18181c] relative singin flex flex-col justify-center items-center w-full h-screen">
      <div className="inner-form flex flex-col justify-center items-center p-[7px] w-[300px]">
        <div className="form_title">login</div>
        <h1 className="logo text-white text-[30px] font-bold mb-3">
          Todo<span className="text-[#704BEC]">ms</span>
        </h1>
        <form action="">
          <label htmlFor="userName">userName:</label>
          <input
            className="w-[100%] mb-3 my-[5px]"
            id="userName"
            type="text"
            name="userName"
            placeholder="username"
            required
            onChange={(e) => {
              setuserName(e.target.value);
            }}
          />
          <label htmlFor="password">password:</label>
          <input
            className="w-[100%] mb-3 my-[5px]"
            id="password"
            type="password"
            name="password"
            placeholder="password"
            required
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />

          <div>
            {Loading ? (
              <Spinner />
            ) : (
              <input
                type="submit"
                value="save"
                className="save bt_bg"
                onClick={getDate}
              />
            )}
          </div>
        </form>
        <div className="flex justify-between items-center pt-4">
          <p className="text-[#8784ad] text-[12px]">have not an account?</p>
          <button className="text-[#2853ad] pl-2">
            <Link to="/singin">Sing in</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
