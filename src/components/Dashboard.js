import QuestionsList from "./QuestionsList";

function Dashboard() {
  return (
    <div className="container justify-content-center align-items-center">
      <div className="h-100 bg-gradient bg-secondary bg-opacity-50  border-2 border-black justify-content-center align-items-center">
        <div className="btn-group d-flex">
          <button className=" btn-lg btn-dark my-3">Not Answered</button>{" "}
          <button className=" btn-lg btn-dark my-3">Answered</button>
        </div>
        <QuestionsList />
      </div>
    </div>
  );
}

export default Dashboard;
