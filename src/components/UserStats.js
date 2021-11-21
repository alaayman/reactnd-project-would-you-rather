import React from "react";
import { connect } from "react-redux";

function UserStats(props) {
  const { user } = props;
  const numAnswered = Object.keys(user.answers).length;
  const numQuestions = user.questions.length;
  return (
    <div className="card box-shadow my-3 py-2 mx-1">
      <div className="card-body row g-1 justify-content-around align-content-center">
        <div className="col-3 d-flex align-items-center m-auto">
          <img
            className="rounded-circle box-shadow"
            width={120}
            src={require("../avatars/" + user.avatarURL).default}
            alt="..."
          ></img>
        </div>
        <div className="col-6 text-start border-2 px-3 border-start border-end">
          <h2 className="card-header mb-4 border-bottom p-1">{user.name}</h2>
          <p>
            Answered questions <span className="float-end">{numAnswered}</span>
          </p>
          <p>
            Created questions <span className="float-end">{numQuestions}</span>
          </p>
        </div>
        <div className="col-2 d-flex flex-column border justify-justify-content-evenly">
          <h5 className="card-header ">score</h5>
          <div
            className="border m-auto p-2 fs-5 fw-bolder bg-success rounded-circle box-shadow"
            style={{ width: 50, height: 50 }}
          >
            {numAnswered + numQuestions}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserStats);
