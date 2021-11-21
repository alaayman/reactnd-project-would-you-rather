import {
  ADD_QUESTION,
  ADD_QUESTION_ANSWER,
  GET_QUESTIONS_DATA,
} from "../actions/dataTypes";

const questionsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_QUESTIONS_DATA:
      return { ...state, ...payload };
    case ADD_QUESTION:
      return {
        ...state,
        [payload.id]: payload,
      };
    case ADD_QUESTION_ANSWER:
      // console.log(type, payload);
      return {
        ...state,
        [payload.qid]: {
          ...state[payload.qid],
          [payload.answer]: {
            ...state[payload.qid][payload.answer],
            votes: [
              ...state[payload.qid][payload.answer].votes,
              payload.authedUser,
            ],
          },
        },
      };
    default:
      return state;
  }
};

export default questionsReducer;
