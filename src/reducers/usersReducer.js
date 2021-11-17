import { GET_USERS_DATA } from "../actions/dataTypes";

const initialState = {};

const userReducer = (state = initialState, { type, payload }) => {
  // console.log("2-should have payload !!!! ", type, payload);
  switch (type) {
    case GET_USERS_DATA:
      // console.log("3-get_data triggered payload ?", payload);
      return { ...state, ...payload };

    // case "ADD":
    //   // console.log("3-ADD triggered payload = ", payload);
    //   return { ...state, ...payload };

    default:
      return state;
  }
};
export default userReducer;
