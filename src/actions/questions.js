import {
  ADD_QUESTION,
  ADD_QUESTION_ANSWER,
  GET_QUESTIONS_DATA,
} from "./dataTypes";

export const getQuestionsDataAction = (questions) => {
  return { type: GET_QUESTIONS_DATA, payload: questions };
};

export const newQuestion = (question) => {
  return { type: ADD_QUESTION, payload: question };
};

export const addAnswer = (answer) => {
  // console.log(answer);
  return { type: ADD_QUESTION_ANSWER, payload: answer };
};
