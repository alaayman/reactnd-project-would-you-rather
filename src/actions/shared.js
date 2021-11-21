import {
  getInitialData,
  saveQuestion,
  saveQuestionAnswer,
} from "../util/DataApi";
import setCurrentUserAction from "./currentUser";
import { addAnswer, getQuestionsDataAction, newQuestion } from "./questions";
import { getUsersDataAction } from "./users";

// I used .then .catch but source control said it could be changed to async await ..
// pressed fix and it changed it !!!!!
const handleInitialData = () => async (dispatch) => {
  try {
    const { users, questions } = await getInitialData();
    dispatch(getUsersDataAction(users));
    dispatch(getQuestionsDataAction(questions));
    dispatch(setCurrentUserAction({ id: 0, loggedin: false }));
  } catch (error) {
    return console.log(error);
  }
};

export const handleNewQuestion = (question) => (dispatch) => {
  saveQuestion(question)
    .then((question) => {
      dispatch(newQuestion(question));
    })
    .catch((error) => console.log(error));
};

export const handleAddAnswer =
  ({ authedUser, qid, answer }) =>
  (dispatch) => {
    // console.log("action handle  : ", { authedUser, qid, answer });
    // Oh my god the promise does'nt return a resolve that is why it return undefined  have to change the reducer
    saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => {
        // console.log("after .then", res);
        dispatch(addAnswer({ authedUser, qid, answer }));
      })
      .catch((error) => console.log(error));
    // console.log("finished dispatching ");
  };

export default handleInitialData;
