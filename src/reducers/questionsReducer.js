import { GET_QUESTIONS_DATA } from "../actions/dataTypes";

const initialState = {};

const questionsReducer = (state = initialState, { type, payload }) => {
  // console.log("HHH-in payloadreducer----", payload);
  switch (type) {
    case GET_QUESTIONS_DATA:
      return { ...state, ...payload };

    default:
      return state;
  }
};
export default questionsReducer;
