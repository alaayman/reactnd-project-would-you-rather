import { combineReducers } from "redux";
import questionsReducer from "./questionsReducer";
import usersReducer from "./usersReducer";
import currentUserReducer from "./currentUserReducer";

export default combineReducers({
  users: usersReducer,
  questions: questionsReducer,
  currentUser: currentUserReducer,
});
