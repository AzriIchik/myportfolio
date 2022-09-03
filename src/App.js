import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import React from "react";
import Home from "./pages/Home/";
import Admin from "./pages/Admin";
import { AppContext, appReducer } from "./appdata/appcontext";

//api
import {
  fetchEducation,
  fetchEmployment,
  fetchProject,
  fetchSkill,
} from "./api/portfolioserver";

function App() {
  const [appData, appDispatch] = React.useReducer(
    appReducer.reducer,
    appReducer.state
  );

  let loadData = async () => {
    let projectData = await fetchProject();
    let employmentData = await fetchEmployment();
    let educationData = await fetchEducation();
    let skillData = await fetchSkill();

    appDispatch({ type: appReducer.action.SET_PROJECT, payload: projectData });
    appDispatch({
      type: appReducer.action.SET_EMPLOYMENT,
      payload: employmentData,
    });

    appDispatch({
      type: appReducer.action.SET_EDUCATION,
      payload: educationData,
    });
    appDispatch({
      type: appReducer.action.SET_SKILL,
      payload: skillData,
    });
  };

  React.useEffect(() => {
    AOS.init();
    loadData();
  }, []);

  return (
    <AppContext.Provider
      value={{ appData, appDispatch, appAction: appReducer.action }}
    >
      <div className="App">
        <Admin />
      </div>
    </AppContext.Provider>
  );
}

export default App;
