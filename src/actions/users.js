import { GET_USERS_DATA } from "./dataTypes";

const getUsersDataAction = (users) => {
  // console.log("the action should have users:", users);
  return { type: GET_USERS_DATA, payload: users };
};

export default getUsersDataAction;
