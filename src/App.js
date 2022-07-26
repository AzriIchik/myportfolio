import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Home from "./pages/Home/";
import { AppContext, Appdata } from "./appdata/appcontext";

function App() {
  return (
    <AppContext.Provider value={Appdata}>
      <div className="App">
        <Home/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
