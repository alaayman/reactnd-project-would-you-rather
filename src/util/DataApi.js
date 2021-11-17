import * as getter from "../util/_DATA";

export function getInitialData() {
  return Promise.all([getter._getUsers(), getter._getQuestions()]).then(
    ([users, questions]) => ({ users, questions })
  );
}
