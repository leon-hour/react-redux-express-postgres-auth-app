import { LOGIN, LOGOUT } from "../actions/types";

// Initialize the initial state by reading from local storage
const initialState = {
  isAuthenticated: localStorage.getItem("user"),
};

export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      // Update the state and save it to local storage
      const newState = { ...state, isAuthenticated: action.payload.userrole };
      localStorage.setItem("user", action.payload.userrole);
      return newState;
    }
    case LOGOUT: {
      // Update the state and save it to local storage
      const newState = { ...state, isAuthenticated: null };
      localStorage.removeItem("user");
      return newState;
    }
    default:
      return state;
  }
}
