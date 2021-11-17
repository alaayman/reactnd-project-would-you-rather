import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="nav navbar-expand navbar-dark bg-dark text-light justify-content-center">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/question">
            New Question
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/boards">
            Leader Boards
          </Link>
        </li>
        <li className="nav-item float-end">
          <Link className="nav-link" to="/login">
            login
          </Link>
        </li>
      </nav>
    </div>
  );
}

export default Navbar;
