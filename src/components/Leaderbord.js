import React from "react";
import { connect } from "react-redux";
import UserStats from "./UserStats";

function Leaderbord(props) {
  const { users } = props;

  return (
    <div>
      {Object.keys(users).map((user) => (
        <UserStats key="{user.id}" user={users[user]} />
      ))}
    </div>
  );
}

const mapStateToProps = ({ users }) => ({
  users: users,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Leaderbord);
