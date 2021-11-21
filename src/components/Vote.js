import React, { useState } from "react";
import { connect } from "react-redux";

function Vote(props) {
  const [choice, setchoice] = useState(null);
  const { questionId, currentUser, users, question } = props;
  const { optionOne, optionTwo } = question;
  return (
    <div className="m-5">
      <div className="list-group-item text-start p-3 card mb-2 m-auto box-shadow">
        <h3 className="card-header bg-darken-2 m-2 row g-0">sara Edo</h3>
        <div className="row g-0">
          <div className="col-sm-4 m-auto text-center">
            <img
              src={
                require("../avatars/" + users[currentUser.id].avatarURL).default
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
                    name="optionOne"
                    id="optionOne"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    {optionOne.text}
                  </label>
                </div>
                <div className="form-check py-2 ">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="optionTwo"
                    id="optionTwo"
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    {optionTwo.text}
                  </label>
                </div>
                <button className="text-light btn-sm btn-primary p-2 mt-4 rounded-3">
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
  currentUser: currentUser,
  users: users,
  question: questions[questionId],
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Vote);
