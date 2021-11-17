import { getInitialData } from "../util/DataApi";
import getquestionsDataAction from "./questions";
import getUsersDataAction from "./users";

const handleInitialData = () => (dispatch) => {
  return getInitialData()
    .then(({ users, questions }) => {
      dispatch(getUsersDataAction(users));

      dispatch(getquestionsDataAction(questions));
      // console.table(
      //   "1-questions from getInitialState",
      //   getquestionsDataAction(questions)
      // );
    })
    .catch((error) => console.log(error));
};

export default handleInitialData;
