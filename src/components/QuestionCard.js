import React from "react";

function QuestionCard(props) {
  return (
    <div>
      <div className="card mb-3 m-auto">
        <h4 className="card-header m-2 row g-0">Sara Edo asks:</h4>
        <div className="row g-0">
          <div className="col-sm-4">
            <img
              src={props.img}
              className="img-fluid rounded-circle"
              alt="..."
              width={150}
            />
          </div>
          <div className="col-sm-8">
            <div className="card-body">
              <h5 className="card-title">Would you rather</h5>
              <p className="card-text">Option1</p>
              <button className="btn-md btn-primary p-2 rounded-3">
                Answer Question
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
