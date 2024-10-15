import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { useDispatch } from "react-redux";
import { signup } from "../actions/auth";

function Singin() {
  const [email, setEmail] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  //send and save data in the database
  const sendData = async (e) => {
    e.preventDefault();
    setLoading(true);
    const isValidEmail = (eml) => {
      // Regular expression for a basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(eml);
    };
    if (!isValidEmail(email)) {
      toast.error("invalid gmail!", toastOptions);
      setLoading(false);
    } else if (userName.length <= 8) {
      toast.error("The username must be more than 8 characters!", toastOptions);
      setLoading(false);
    } else if (password.length <= 8) {
      toast.error("The password must be more than 8 characters!", toastOptions);
      setLoading(false);
    } else {
      dispatch(signup({ userName, password, email }, navigate, setLoading));
    }
  };
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
      navigate("/");
    }
  }, []);
  return (
    <div className="bg-[#18181c]">
      <div className="inter-form singin flex flex-col justify-center items-center w-full h-screen">
        <div className="inner-form bg-[#18181c] flex flex-col justify-center items-center gap-2 p-[7px] w-[300px]">
          <div className="form_title">create acount</div>
          <h1 className="logo text-white text-[30px] font-bold mb-3">
            Todo<span className="text-[#704BEC]">ms</span>
          </h1>
          <form>
            <label htmlFor="gmail">gmail:</label>
            <input
              className="w-[100%]  my-[5px]"
              id="gmail"
              type="email"
              name="gmail"
              placeholder="gmail"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="userName">userName:</label>
            <input
              className="w-[100%]  my-[5px]"
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
              className="w-[100%]  my-[5px]"
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
                  className="save bt_bg mt-3"
                  onClick={sendData}
                />
              )}
            </div>
          </form>

          <div className="flex justify-between items-center pt-4">
            <p className="text-[#8784ad] text-[12px]">you have account?</p>
            <button className="text-[#2853ad] pl-2">
              <Link to="/login">login</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singin;
