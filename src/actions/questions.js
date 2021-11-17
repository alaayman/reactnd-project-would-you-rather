import { GET_QUESTIONS_DATA } from "./dataTypes";

const getquestionsDataAction = (questions) => {
  return { type: GET_QUESTIONS_DATA, payload: questions };
};

export default getquestionsDataAction;
