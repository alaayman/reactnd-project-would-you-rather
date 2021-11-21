import * as getter from "../util/_DATA";

export function getInitialData() {
  return Promise.all([getter._getUsers(), getter._getQuestions()]).then(
    ([users, questions]) => ({ users, questions })
  );
}

export function saveQuestion(question) {
  return getter._saveQuestion(question);
}

export function saveQuestionAnswer({ authedUser, qid, answer }) {
  // console.log("from api", { authedUser, qid, answer });
  return getter._saveQuestionAnswer({ authedUser, qid, answer });
}
