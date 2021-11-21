import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import NoMatch from "./NoMatch";
import Result from "./Result";
import Vote from "./Vote";

function Question(props) {
  // take id and answered or not from props
  const { questionId } = useParams();
  const { userId, users, questions } = props;
  const answered = users[userId].answers[questionId] ? true : false;

  // console.log(answered);

  if (questions[questionId] === null || questions[questionId] === undefined)
    return <NoMatch />;
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

const mapStateToProps = ({ users, currentUser, questions }) => {
  return { userId: currentUser.id, users: users, questions: questions };
};

export default connect(mapStateToProps)(Question);
