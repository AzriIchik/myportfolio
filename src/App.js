import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import React from "react";
import Home from "./pages/Home/";
import Admin from "./pages/Admin";
import { AppContext, appReducer } from "./appdata/appcontext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

//api
import {
  fetchEducation,
  fetchEmployment,
  fetchProfile,
  fetchProject,
  fetchSkill,
} from "./api/portfolioserver";

function App() {
  const [appData, appDispatch] = React.useReducer(
    appReducer.reducer,
    appReducer.state
  );

  const [showSpinner, setshowSpinner] = React.useState(true);

  let loadData = async () => {
    let profileData = await fetchProfile();
    appDispatch({ type: appReducer.action.SET_PROFILE, payload: profileData });

    let projectData = await fetchProject();
    appDispatch({ type: appReducer.action.SET_PROJECT, payload: projectData });

    let employmentData = await fetchEmployment();
    appDispatch({
      type: appReducer.action.SET_EMPLOYMENT,
      payload: employmentData,
    });

    let educationData = await fetchEducation();
    appDispatch({
      type: appReducer.action.SET_EDUCATION,
      payload: educationData,
    });

    let skillData = await fetchSkill();
    appDispatch({
      type: appReducer.action.SET_SKILL,
      payload: skillData,
    });
    setshowSpinner(false);
  };

  React.useEffect(() => {
    AOS.init();
    loadData();
  }, []);

  return (
    <AppContext.Provider
      value={{ appData, appDispatch, appAction: appReducer.action }}
    >
      {showSpinner ? <PSpinner></PSpinner> : ""}
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="admin" element={<Admin />} />
          </Routes>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

const PSpinner = () => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{
        position: "fixed",
        zIndex: "1000",
        backgroundColor: "white",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="align-self-center text-center">
        <h1 className="p-0 m-0 mb-5">
          <Spinner animation="border" variant="primary" />
        </h1>
      </div>
    </div>
  );
};

export default App;
