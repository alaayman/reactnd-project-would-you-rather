import { NotFound } from "http-errors";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import handleInitialData from "./actions/shared";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Leaderbord from "./components/Leaderbord";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import NewQuestion from "./components/NewQuestion";
import Question from "./components/Question";
// import  Result  from "./components/Result";
// import  Vote  from "./components/Vote";

function App(props) {
  const { islogged, handleData } = props;

  useEffect(() => handleData(), [handleData]);

  // console.log("islogged ", props.islogged);
  return (
    <div className="bg-gradient">
      <Navbar />
      <div className="App  m-auto">
        <div className="col-lg-8 col-md-8 col-sm-10">
          {!islogged ? (
            <Login />
          ) : (
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/home" element={<Dashboard />} />
              <Route path="/add" element={<NewQuestion />} />
              <Route path="/leaderbord" element={<Leaderbord />} />
              <Route path="/questions/:questionId" element={<Question />} />
              <Route path="*" element={<NotFound />} />
              {/* used in showing components while designing */}
              {/* <Route path="/vote" element={<Vote />} />
              <Route path="/result" element={<Result />} />
              <Route path="/login" element={<Login />} /> */}
            </Routes>
          )}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = ({ currentUser }) => ({
  islogged: currentUser.loggedin,
});

const mapDispatchToProps = (dispatch) => {
  const handleData = () => {
    dispatch(handleInitialData());
  };
  return { handleData: handleData };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
