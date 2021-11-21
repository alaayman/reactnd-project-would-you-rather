import React, { useState } from "react";
import { connect } from "react-redux";
import { handleNewQuestion } from "../actions/shared";

function NewQuestion(props) {
  const { author, handleNew } = props; // named it author just in case _saveQuestin need author in props
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");

  const handleChangeOne = (e) => {
    setOptionOneText(e.target.value);
  };
  const handleChangeTwo = (e) => {
    setOptionTwoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const rawQuestion = { optionOneText, optionTwoText, author };
    // took me a long more than 4 hours time to notice i need optionOneText and not optionOne
    // console.log({ optionOneText, optionTwoText, author });
    handleNew(rawQuestion);
  };

  return (
    <div className="container  mx-1 my-5">
      <div className="card p-3 text-center box-shadow">
        <div className="card-header p-5 fs-3 fw-bold">Create New Question</div>
        <div className="card-body">
          <h5 className="card-title mb-4">Would you rather : </h5>
          <div className="card-text">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Option 1
              </span>
              <input
                onChange={handleChangeOne}
                type="text"
                className="form-control"
                placeholder="Enter first option"
              />
            </div>
            <h5>OR</h5>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Option 2
              </span>
              <input
                onChange={handleChangeTwo}
                type="text"
                className="form-control"
                placeholder="Enter second option"
              />
            </div>
          </div>
          <button onClick={handleSubmit} className="btn btn-primary my-4 w-50">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ currentUser }) => ({
  author: currentUser.id,
});

const mapDispatchToProps = (dispatch) => {
  const handleNew = (rawQuestion) => {
    dispatch(handleNewQuestion(rawQuestion)); // question should be like {optionOneText, optionTwoText, author}
  };
  return { handleNew: handleNew };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);
