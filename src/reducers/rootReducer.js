import { combineReducers } from "redux";
import questionsReducer from "./questionsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  users: usersReducer,
  questions: questionsReducer,
});
