import React from "react";
import img from "../avatars/logo512.png";

function Login() {
  return (
    <div className="container-sm vh-100 justify-content-center align-items-center ">
      <img src={img} width="250" alt=" " />
      <h1> login screen </h1>
      <select className="form-select form-select-lg">
        <option className="dropdown-item dropdown-item-text">first</option>
        <option className="dropdown-item dropdown-item-text">second</option>
        <option className="dropdown-item dropdown-item-text">Third</option>
      </select>
    </div>
  );
}

export default Login;
