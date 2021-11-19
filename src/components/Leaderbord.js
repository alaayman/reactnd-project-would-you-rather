import React from "react";
import { connect } from "react-redux";

export const Leaderbord = (props) => {
  return (
    <div>
      <h1>Leaderbord</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Leaderbord);
