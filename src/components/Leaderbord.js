import React from "react";
import { connect } from "react-redux";
import UserStats from "./UserStats";

function Leaderbord(props) {
  const { users, sortedUser } = props;

  return (
    <div>
      {sortedUser.map((user, index) => {
        const order = (index) => {
          switch (index) {
            case 0:
              return "gold";
            case 1:
              return "silver";
            case 2:
              return "white";
            default:
              return "white";
          }
        };
        return (
          <div key={user}>
            <UserStats user={users[user]} order={order(index)} />
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = ({ users }) => {
  const sortedUser = Object.keys(users).sort((a, b) => {
    const scoreA =
      Object.keys(users[a].answers).length + users[a].questions.length;
    const scoreB =
      Object.keys(users[b].answers).length + users[b].questions.length;

    return scoreB - scoreA;
  });

  return {
    users: users,
    sortedUser: sortedUser,
  };
};

export default connect(mapStateToProps)(Leaderbord);
