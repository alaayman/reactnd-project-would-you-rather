import { getInitialData, saveQuestion } from "../util/DataApi";
import setCurrentUserAction from "./currentUser";
import { getQuestionsDataAction, newQuestion } from "./questions";
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

export default handleInitialData;
