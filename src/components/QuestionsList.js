import { default as React, useState } from "react";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";

function QuestionsList(props) {
  const { userId, users, questionsIds } = props;
  const [activeTab, setactiveTab] = useState("notAnswered");

  // console.log("Questionids = ", questionsIds);

  let filteredQuestions = [];
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
        {questionsIds.map((questionId) => (
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
  // console.log(questionsIds);
  return {
    userId: currentUser.id,
    users,
    questionsIds: questionsIds,
    answeredQuestions: {},
    unAnsweredQuestions: {},
  };
};

export default connect(mapStateToProps)(QuestionsList);
