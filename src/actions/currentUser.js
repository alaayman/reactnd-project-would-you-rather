import { SET_CURRENT_USER } from "./dataTypes";

const setCurrentUserAction = (currentUser) => {
  return { type: SET_CURRENT_USER, payload: currentUser };
};

export default setCurrentUserAction;
