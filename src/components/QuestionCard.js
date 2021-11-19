import React from "react";
import { connect } from "react-redux";

function QuestionCard(props) {
  const { user, question } = props;
  // console.log("props = --- ", questionId);
  return (
    <div>
      <div className="card mb-2 m-auto box-shadow">
        <h4 className="card-header bg-darken-2 m-2 row g-0">{user.name}:</h4>
        <div className="row g-0">
          <div className="col-sm-4 m-auto">
            <img
              src={require("../avatars/" + user.avatarURL).default}
              className="img-fluid rounded-circle"
              alt="..."
              width={120}
            />
          </div>
          <div className="col-sm-8 m-auto">
            <div className="card-body">
              <h5 className="card-title">Would you rather</h5>
              <p className="card-text">{question.optionOne.text} ...</p>
              <button className="btn-md btn-primary p-2 rounded-3">
                View & Answer
              </button>
            </div>
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
