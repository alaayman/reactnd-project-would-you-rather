import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="container  card p-3 mt-5 box-shadow">
      <div className="card-body p-3 ">
        <h1>404</h1>
        <h3 className="mt-5">Page Not Found</h3>
        <NavLink to="/home" className="btn btn-outline-dark mt-5">
          Return home
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound;
