import React, { useState } from "react";
import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/shared";
import NoMatch from "./NoMatch";

function Vote(props) {
  const [answer, setAnswer] = useState("");
  const { questionId, currentUserId, handleVote, users, question } = props;

  if (question === undefined) return <NoMatch />;

  const { optionOne, optionTwo } = question;
  const handleChange = (e) => {
    setAnswer(e.target.id);
  };
  //will change names to what _Data is expecting !{ currentUserId, questionId, answer }
  const handleSubmit = (e) => {
    e.preventDefault();

    const qid = questionId;
    const authedUser = currentUserId;

    answer !== ""
      ? handleVote({ authedUser, qid, answer })
      : alert("You have to choose an answer"); //expecting { authedUser, qid, answer }
  };

  return (
    <div className="m-5">
      <div className="list-group-item text-start p-3 card mb-2 m-auto box-shadow">
        <h3 className="card-header bg-darken-2 m-2 row g-0">
          {users[question.author].name}
        </h3>
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
            <div className="card-body">
              <h4 className="card-title mb-4">Would you rather</h4>
              <form>
                <div className="form-check py-2 ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="option"
                    id="optionOne"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="optionOne">
                    {optionOne.text}
                  </label>
                </div>
                <div className="form-check py-2 ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="option"
                    id="optionTwo"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="optionTwo">
                    {optionTwo.text}
                  </label>
                </div>
                <button
                  onClick={handleSubmit}
                  className="text-light btn-sm btn-primary p-2 mt-4 rounded-3"
                >
                  Submit
                </button>
              </form>
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
  currentUserId: currentUser.id,
  users: users,
  question: questions[questionId],
});
const mapDispatchToProps = (dispatch) => {
  const handleAnswer = ({ authedUser, qid, answer }) => {
    dispatch(handleAddAnswer({ authedUser, qid, answer })); //expecting answer = { authedUser, qid, answer }
  };
  return { handleVote: handleAnswer };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vote);
