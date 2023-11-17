//to combine our reducers
import { combineReducers } from "redux";
import ErrorReducer from "./ErrorReducer";
import LoginReducer from "./loginReducer";
const roorReducer = combineReducers({
  errorsReducerContent: ErrorReducer,
  auth: LoginReducer,
});
export default roorReducer;
