import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Result(props) {
  const { questionId, currentUser, users, question } = props;
  const { optionOne, optionTwo } = question;
  const numAnswerOne = optionOne.votes.length;
  const numAnswerTwo = optionTwo.votes.length;
  const numOfAnswers = numAnswerOne + numAnswerTwo;
  const percentageOne = Math.round((numAnswerOne / numOfAnswers) * 100);
  const percentageTwo = Math.round((numAnswerTwo / numOfAnswers) * 100);

  console.log(percentageOne, percentageTwo);

  return (
    <div className="my-5 mx-2">
      <div className="list-group-item text-start p-3 card mb-2 m-auto box-shadow">
        <Link to="/home" className="float-end">
          Back
        </Link>
        <h4 className="card-header bg-darken-2 m-2 row g-0">
          Asked by {users[question.author].name}
        </h4>
        <div className="row g-0">
          <div className="col-sm-4 m-auto text-center">
            <img
              src={
                require("../avatars/" + users[question.author].avatarURL)
                  .default
              }
              className="img-fluid rounded-circle"
              alt="..."
              width={120}
            />
          </div>
          <div className="col-sm-8 m-auto">
            <div className="card-body border-start">
              <h5 className="card-title mb-4">Results</h5>
              <div className="container-fluid">
                <div className="box-shadow p-3 my-3 position-relative">
                  <p>Would you rather {optionOne.text} ?</p>
                  {optionOne.votes.includes(currentUser.id) ? (
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      Your choice
                    </span>
                  ) : null}
                  <div class="progress my-3" style={{ height: 20 }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentageOne}%` }}
                      aria-valuenow={percentageOne}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {percentageOne}%
                    </div>
                  </div>
                  <p>
                    {numAnswerOne} out of {numOfAnswers} votes
                  </p>
                </div>
                <div className="box-shadow p-3 my-3 position-relative">
                  <p>Would you rather {optionTwo.text} ?</p>
                  {optionTwo.votes.includes(currentUser.id) ? (
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      Your choice
                    </span>
                  ) : null}
                  <div className="progress my-3" style={{ height: 20 }}>
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentageTwo}%` }}
                      aria-valuenow="25"
                      aria-valuenow={percentageTwo}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {percentageTwo}%
                    </div>
                  </div>
                  <p>
                    {numAnswerTwo} out of {numOfAnswers} votes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (
  { currentUser, users, questions },
  { questionId }
) => ({
  currentUser: currentUser,
  users: users,
  question: questions[questionId],
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
