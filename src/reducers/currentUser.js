const SET_CURRENT_USER = "SET_CURRENT_USER";

const initialState = {};

const currentUserReducer (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return { ...state, ...payload };

    default:
      return state;
  }
};
export default currentUserReducer