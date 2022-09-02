import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css"
import React from "react";
import Home from "./pages/Home/";
import Admin from "./pages/Admin";
import { AppContext, Appdata } from "./appdata/appcontext";
import AOS from "aos";

function App() {
  
  React.useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <AppContext.Provider value={Appdata}>
      <div className="App">
        <Admin/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
