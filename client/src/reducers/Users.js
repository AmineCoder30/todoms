import * as actionType from "../constants/actionTypes";

const initialState = {
  user: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem("user", JSON.stringify({ ...action?.data }));
      return { ...state, user: action.data };
    default:
      return state;
  }
};

export default userReducer;
