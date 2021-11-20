import React from "react";
import { connect } from "react-redux";

import logo from "../avatars/Avatar-John.svg";

function Leaderbord(props) {
  return (
    <div className="card box-shadow my-5 mx-1">
      <div className="card-body row g-1 justify-content-around align-content-center">
        <div className="col-3">
          <img
            className="rounded-circle box-shadow"
            width={120}
            src={logo}
            alt="..."
          ></img>
        </div>
        <div className="col-6 text-start border-2 px-3 border-start border-end">
          <h2 className="card-header mb-4 border-bottom p-1">John Do</h2>
          <p>
            Answered questions <span className="float-end">3</span>
          </p>
          <p>
            Created questions <span className="float-end">2</span>
          </p>
        </div>
        <div className="col-2 d-flex flex-column border justify-justify-content-evenly">
          <h5 className="card-header ">score</h5>
          <div
            className="border m-auto p-2 bg-success rounded-circle"
            style={{ width: 50, height: 50 }}
          >
            7
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Leaderbord);
