import { ADD_QUESTION, GET_QUESTIONS_DATA } from "../actions/dataTypes";

const initialState = {};

const questionsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_QUESTIONS_DATA:
      return { ...state, ...payload };
    case ADD_QUESTION:
      return {
        ...state,
        [payload.id]: payload,
      };
    default:
      return state;
  }
};
export default questionsReducer;
