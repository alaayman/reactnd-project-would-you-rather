import { SET_CURRENT_USER } from "../actions/dataTypes";

const initialState = { id: 0, loggedin: false };

const currentUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return { ...payload };

    default:
      return state;
  }
};
export default currentUserReducer;
