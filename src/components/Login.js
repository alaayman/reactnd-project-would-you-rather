import { default as React, useState } from "react";
import { connect } from "react-redux";
import setCurrentUserAction from "../actions/currentUser";
import img from "../avatars/logo.svg";
import { Navigate } from "react-router";

function Login(props) {
  const { users, currentUser, setCurrentUser } = props;
  const [selectValue, setselectValue] = useState("");

  return !currentUser.loggedin ? (
    <div className="bg-light bg-gradient m-auto my-5 mx-2 p-3 box-shadow rounded-3 justify-content-center align-items-center ">
      <div className="card-header  text-primary fst-italic">
        <h4> Welcome to the </h4>
        <h3> WOULD YOU RATHER GAME </h3>
        <p>to proceed please Login</p>
      </div>
      <div className="card-body w-75 m-auto">
        <img className=" m-4 " src={img} width="150" alt=" " />
        <select
          defaultValue="Choose user"
          placeholder={"Choose user"}
          onChange={(e) => {
            setselectValue(e.target.value);
          }}
          className="form-select form-select-lg m-auto"
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
          className="btn btn-primary  my-3 p-2 w-50"
        >
          Log in
        </button>
      </div>
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
