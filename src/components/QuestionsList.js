import { default as React, useEffect, useState } from "react";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";

function QuestionsList(props) {
  const { answeredQuestions, unAnsweredQuestions } = props;
  const [activeTab, setactiveTab] = useState("notAnswered");
  const [filteredQuestions, setfilteredQuestions] =
    useState(unAnsweredQuestions);

  useEffect(() => {
    activeTab === "answered"
      ? setfilteredQuestions(answeredQuestions)
      : setfilteredQuestions(unAnsweredQuestions);
    // console.log(filteredQuestions);
  }, [activeTab, answeredQuestions, unAnsweredQuestions]);

  return (
    <div className="list-group">
      <div className="btn-group d-flex mt-3">
        <button
          onClick={() => {
            if (activeTab === "answered") {
              setactiveTab("notAnswered");
            }
          }}
          className=" btn-lg btn-dark p-2"
        >
          Not Answered
        </button>
        <button
          onClick={() => {
            if (activeTab === "notAnswered") {
              setactiveTab("answered");
            }
          }}
          className=" btn-lg btn-dark p-2"
        >
          Answered
        </button>
      </div>
      {filteredQuestions.length ? (
        filteredQuestions.map((question) => (
          <div className="list-group-item" key={question.id}>
            <QuestionCard questionId={question.id} />
          </div>
        ))
      ) : (
        <h2 className="card">
          No more unanswered questions<h3>Create new ones</h3>
        </h2>
      )}
      {}
    </div>
  );
}

const mapStateToProps = ({ currentUser, users, questions }) => {
  const questionsIds = Object.keys(questions).map((id) => ({
    id: id,
    timestamp: questions[id].timestamp,
  }));
  const unAnsweredQuestions = questionsIds
    .filter(({ id, timestamp }) => {
      return !users[currentUser.id].answers[id];
    })
    .sort((a, b) => b.timestamp - a.timestamp);
  const answeredQuestions = questionsIds
    .filter(({ id, timestamp }) => {
      return users[currentUser.id].answers[id];
    })
    .sort((a, b) => b.timestamp - a.timestamp);
  // console.log(questionsIds);
  return {
    // userId: currentUser.id,
    // questionsIds: questionsIds,
    // users,
    // questions,
    answeredQuestions: answeredQuestions,
    unAnsweredQuestions: unAnsweredQuestions,
  };
};

export default connect(mapStateToProps)(QuestionsList);
