import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import profilePhoto from "./assets/img/profilephoto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="section1__container">
        <div className="section1__filter"></div>
        <Navbar></Navbar>
        <div className="section1_content px-6 d-flex">
          <div className="bd-highlight">
            <img src={profilePhoto} className="profile-photo"></img>
          </div>
          <div className="ps-0 ps-md-5 pt-5 bd-highlight flex-grow-1">
            <h2>MOHAMMAD AZRI BIN PERISIBEN</h2>
            <p className="text-opacity">Fullstack Web-tech Enthusiast</p>
            <dl className="section1_biodata py-4">
              <dt className="text-opacity">AGE:</dt> <dd>26</dd>
              <dt className="text-opacity">PHONE:</dt> <dd>014-6511665</dd>
              <dt className="text-opacity">EMAIL:</dt>{" "}
              <dd>azriperisiben96@gmail.com</dd>
              <dt className="text-opacity">ADDRESS:</dt>{" "}
              <dd>
                Pangsapuri Ria, Jalan Bukit Mewah 31, <br /> Taman Bukit Mewah,
                43000 Kajang, Selangor
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="section2__container px-6 py-5">
        <h2 className="mt-5">Hi There_</h2>
        <p>
          I am Junior Web developer able to build a Web presence from the ground
          up - from concept, navigation, layout and programming to UX and SEO.
          Skilled at writing well-designed, testable and efficient code using
          current best practices in Web development. Fast learner, hard worker
          and team player who is proficient in an array of scripting languages
          and multimedia Web tools.
        </p>
        {/*Later change this into components*/}
        <button className="btn btn-secondary rounded-pill py-3 px-4"><FontAwesomeIcon icon={faDownload} /> DOWNLOAD CV</button>
        
      </div>
      <p style={{ color: "red", paddingTop: "1rem" }}>HELLO</p>
    </div>
  );
}

export default App;
