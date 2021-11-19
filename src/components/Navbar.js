import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navContainer navbar navbar-expand-sm navbar-dark bg-dark fw-bold fs-5">
      <div className="container-fluid">
        <nav className="navbar-nav me-auto mb-2 mb-lg-0 h-100 ">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/question">
              New Question
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/leaderbord">
              Leader Boards
            </NavLink>
          </li>
        </nav>
        <ul className="navbar-nav">
          <li className="nav-item float-end">
            <NavLink className="nav-link" to="/login">
              Log out
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
