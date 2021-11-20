import * as getter from "../util/_DATA";

export function getInitialData() {
  return Promise.all([getter._getUsers(), getter._getQuestions()]).then(
    ([users, questions]) => ({ users, questions })
  );
}

export function saveQuestion(question) {
  return getter._saveQuestion(question);
}

export function saveQuestionAnswer(currentUser, questionId, answer) {
  // console.log('from API', { currentUser, questionId, answer });
  return getter._saveQuestionAnswer({ currentUser, questionId, answer });
}
