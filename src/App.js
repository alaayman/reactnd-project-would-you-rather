import { useEffect } from "react";
import { Route, Routes } from "react-router";
import handleInitialData from "./actions/shared";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { Result } from "./components/Result";
import { Vote } from "./components/Vote";
import store from "./store/store";

function App() {
  useEffect(() => {
    store.dispatch(handleInitialData());
  }, []);

  return (
    <div className="container-fluid mt-2 justify-content-center align-items-center ">
      <div className=" bg-dark text-light text-center p-2">
        <h1 className="">Would You Rather</h1>
      </div>
      <Navbar />
      <div className="App  m-auto">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/vote" element={<Vote />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
