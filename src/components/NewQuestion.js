import React from "react";

function NewQuestion() {
  return (
    <div className="container mx-1 my-5">
      <div className="card text-center box-shadow">
        <div className="card-header p-3 fs-3 fw-bold">Create New Question</div>
        <div className="card-body">
          <h5 className="card-title mb-4">Would you rather : </h5>
          <div className="card-text">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Option 1
              </span>
              <input
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
                type="text"
                className="form-control"
                placeholder="Enter second option"
              />
            </div>
          </div>
          <button className="btn btn-primary my-4 w-50">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default NewQuestion;
