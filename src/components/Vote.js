import React from "react";
import { connect } from "react-redux";

function Vote(props) {
  const { questionId } = props;
  return (
    <div className="m-5">
      <div className="list-group-item text-start p-3 card mb-2 m-auto box-shadow">
        <h4 className="card-header bg-darken-2 m-2 row g-0">sara Edo</h4>
        <div className="row g-0">
          <div className="col-sm-4 m-auto text-center">
            <img
              src={'require("../avatars/" + user.avatarURL).default'}
              className="img-fluid rounded-circle"
              alt="..."
              width={120}
            />
          </div>
          <div className="col-sm-8 m-auto">
            <div className="card-body">
              <h5 className="card-title mb-4">Would you rather</h5>
              <div className="form-check  ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  Default radio
                </label>
              </div>
              <div className="form-check  ">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Default checked radio
                </label>
              </div>
              <button className="text-light btn-sm btn-primary p-2 mt-4 rounded-3">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Vote);
