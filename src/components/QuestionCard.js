import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { formatDate } from "../util/helper";

function QuestionCard(props) {
  const { user, question } = props;
  // console.log("props = --- ", questionId);

  return (
    <div className="card mb-2 m-auto box-shadow">
      <h4 className="card-header bg-darken-2 m-2 row g-0">
        {user.name}
        <span className="text-end fs-6">{formatDate(question.timestamp)}</span>
      </h4>

      <div className="row g-0 m-2">
        <div className="col-sm-4 m-auto">
          <img
            src={require("../avatars/" + user.avatarURL).default}
            className="img-fluid box-shadow rounded-circle"
            alt="..."
            width={120}
          />
        </div>
        <div className="col-sm-8 m-auto border-start">
          <div className="card-body m-2">
            <h5 className="card-title">Would you rather</h5>
            <p className="card-text">{question.optionOne.text} ...</p>
            <Link
              to={`/questions/${question.id}`}
              className="d-block text-light btn-md btn-primary p-2 rounded-3"
            >
              View Question
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = ({ currentUser, users, questions }, { questionId }) => {
  const question = questions[questionId];
  // console.log(questions[questionId]);
  return {
    question: question,
    user: users[question.author],
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCard);
