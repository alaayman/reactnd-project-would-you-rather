import {
  ADD_QUESTION,
  ADD_QUESTION_ANSWER,
  GET_USERS_DATA,
} from "../actions/dataTypes";

const userReducer = (state = {}, { type, payload }) => {
  // console.log("2-should have payload !!!! ", type, payload);
  // same problem again and again to pass an object with wrong property names in it
  switch (type) {
    case GET_USERS_DATA:
      // console.log("3-get_data triggered payload ?", payload);
      return { ...state, ...payload };
    case ADD_QUESTION:
      // did that after noticing that _saveQuestion return formatted question only and dont change user
      // console.log("from user ", payload.author);
      return {
        ...state,
        [payload.author]: {
          ...state[payload.author],
          questions: state[payload.author].questions.concat([payload.id]),
        },
      };
    case ADD_QUESTION_ANSWER:
      return {
        //had to change the reducer after finding that _saveQuestionAnswer doesn't return anything
        ...state,
        [payload.authedUser]: {
          ...state[payload.authedUser],
          answers: {
            ...state[payload.authedUser].answers,
            [payload.qid]: payload.answer,
          },
        },
      };
    default:
      return state;
  }
};

export default userReducer;
