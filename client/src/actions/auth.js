import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";
import { toast } from "react-toastify";
const toastOptions = {
  position: "bottom-right",
  autoClose: 8000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};
export const signin = (formData, router, setLoading) => async (dispatch) => {
  try {
    const response = await api.signIn(formData);
    if (response && response.data) {
      const { data } = response;
      if (data.status == false) {
        setLoading(false);
        toast.error(data.msg, toastOptions);
      } else {
        dispatch({ type: AUTH, data });
        router("/todos");
      }
    } else {
      console.log("API response is invalid");
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const signup = (formData, router, setLoading) => async (dispatch) => {
  try {
    const response = await api.signUp(formData);

    if (response && response.data) {
      const { data } = response;
      setLoading(false);
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      } else {
        dispatch({ type: AUTH, data });
        router("/todos");
      }
    } else {
      console.log("API response is invalid");
    }
  } catch (error) {
    console.log(error.response.data);
  }
};
