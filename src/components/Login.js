import { default as React, useState } from "react";
import { connect } from "react-redux";
import setCurrentUserAction from "../actions/currentUser";
import img from "../avatars/logo.svg";
import { Navigate } from "react-router";

function Login(props) {
  const { users, currentUser, setCurrentUser } = props;
  const [selectValue, setselectValue] = useState("");

  return !currentUser.loggedin ? (
    <div className="container bg-success bg-opacity-50 m-auto mt-5 p-5 box-shadow rounded-3 justify-content-center align-items-center ">
      <form>
        <img src={img} width="200" alt=" " />
        <h1> login screen </h1>
        <div className="spinner-border text-dark m-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <select
          defaultValue="Choose user"
          placeholder={"Choose user"}
          onChange={(e) => {
            setselectValue(e.target.value);
          }}
          className="form-select form-select-lg w-75 m-auto"
        >
          {<option disabled={true}>Choose user</option>}
          {Object.values(users).map((user) => (
            <option
              value={user.id}
              key={user.id}
              className="dropdown-item dropdown-item-text"
            >
              {user.name}
            </option>
          ))}
        </select>
        <button
          onClick={(e) => {
            e.preventDefault();
            selectValue === ""
              ? alert("No user chosen")
              : setCurrentUser(selectValue);
          }}
          className=" btn-primary  mt-5 p-2 w-25"
        >
          Log in
        </button>
      </form>
    </div>
  ) : (
    <Navigate to="/home" />
  );
}

const mapStateToProps = ({ users, currentUser }) => ({ users, currentUser });

const mapDispatchToProps = (dispatch) => {
  const dispatchCurrentUser = (id) =>
    dispatch(
      setCurrentUserAction({
        id: id,
        loggedin: true,
      })
    );
  return { setCurrentUser: dispatchCurrentUser };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
