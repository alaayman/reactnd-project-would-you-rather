import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import setCurrentUserAction from "../actions/currentUser";

function Navbar(props) {
  const { user, logOut } = props;
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
            <NavLink className="nav-link" to="/add">
              New Question
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/leaderbord">
              Leader Boards
            </NavLink>
          </li>
        </nav>
        <ul className="nav navbar-dark bg-dark float-end">
          {user ? (
            <>
              <img
                src={require("../avatars/" + user.avatarURL).default}
                className="img-fluid m-2 rounded-circle"
                alt="..."
                width={40}
              />
              <div className="nav-item nav-link text-light ">{user.name}</div>
              <button
                onClick={() => {
                  logOut(0);
                }}
                className="btn-sm btn-info "
              >
                Log out
              </button>
            </>
          ) : (
            "mo user logged"
          )}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = ({ currentUser, users }) => ({
  user: users[currentUser.id],
});

const mapDispatchToProps = (dispatch) => {
  const dispatchCurrentUser = (id) =>
    dispatch(
      setCurrentUserAction({
        id: id,
        loggedin: false,
      })
    );
  return { logOut: dispatchCurrentUser };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
