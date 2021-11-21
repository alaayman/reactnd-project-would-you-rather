import { ADD_QUESTION, GET_QUESTIONS_DATA } from "./dataTypes";

export const getQuestionsDataAction = (questions) => {
  return { type: GET_QUESTIONS_DATA, payload: questions };
};

export const newQuestion = (question) => {
  return { type: ADD_QUESTION, payload: question };
};
