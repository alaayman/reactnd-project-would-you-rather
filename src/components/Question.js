import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import Result from "./Result";
import Vote from "./Vote";

function Question(props) {
  // take id and answered or not from props
  const { questionId } = useParams();
  const { userId, users } = props;
  const answered = users[userId].answers[questionId] ? true : false;

  console.log(answered);

  return (
    <>
      {answered ? (
        <Result questionId={questionId} answered={answered} />
      ) : (
        <Vote questionId={questionId} answered={answered} />
      )}
    </>
  );
}

const mapStateToProps = ({ users, currentUser }) => {
  return { userId: currentUser.id, users: users };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
