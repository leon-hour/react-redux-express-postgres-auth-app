import { LOGOUT, LOGIN, GET_ERRORS } from "./types";
import axios from "axios";
// import history from './history'
export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
    payload: false,
  });
};

export const login = (loginData) => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/login", loginData);
    dispatch({
      type: LOGIN,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
