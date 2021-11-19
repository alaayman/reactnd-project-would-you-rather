import { getInitialData } from "../util/DataApi";
import setCurrentUserAction from "./currentUser";
import getquestionsDataAction from "./questions";
import getUsersDataAction from "./users";

const handleInitialData = () => async (dispatch) => {
  try {
    const { users, questions } = await getInitialData();
    dispatch(getUsersDataAction(users));
    dispatch(getquestionsDataAction(questions));
    dispatch(setCurrentUserAction({ id: 0, loggedin: false }));
  } catch (error) {
    return console.log(error);
  }
};

export default handleInitialData;
