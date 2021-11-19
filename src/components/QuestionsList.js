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
    <div>
      <div className="list-group">
        <div className="btn-group d-flex">
          <button
            onClick={() => {
              if (activeTab === "answered") {
                setactiveTab("notAnswered");
              }
            }}
            className=" btn-lg btn-dark p-3 mt-3"
          >
            Not Answered
          </button>
          <button
            onClick={() => {
              if (activeTab === "notAnswered") {
                setactiveTab("answered");
              }
            }}
            className=" btn-lg btn-dark p-3 mt-3"
          >
            Answered
          </button>
        </div>
        {filteredQuestions.map((questionId) => (
          <div className="list-group-item" key={questionId}>
            <QuestionCard questionId={questionId} />
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = ({ currentUser, users, questions }) => {
  const questionsIds = Object.keys(questions);
  const unAnsweredQuestions = questionsIds
    .filter((id) => {
      return !users[currentUser.id].answers[id];
    })
    .sort((a, b) => a.timestamp - b.timestamp);
  const answeredQuestions = questionsIds
    .filter((id) => {
      return users[currentUser.id].answers[id];
    })
    .sort((a, b) => a.timestamp - b.timestamp);
  // console.log(questionsIds);
  return {
    // userId: currentUser.id,
    // users,
    // questionsIds: questionsIds,
    answeredQuestions: answeredQuestions,
    unAnsweredQuestions: unAnsweredQuestions,
  };
};

export default connect(mapStateToProps)(QuestionsList);
