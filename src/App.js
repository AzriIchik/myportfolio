import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import profilePhoto from "./assets/img/profilephoto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import DataBox from "./components/DataBox";

function App() {
  return (
    <div className="App">
      <div className="section1__container">
        <div className="section1__filter"></div>
        <Navbar></Navbar>
        <div className="section1__content px-6 d-flex">
          <div className="bd-highlight">
            <img src={profilePhoto} className="profile-photo"></img>
          </div>
          <div className="ps-0 ps-md-5 pt-5 bd-highlight flex-grow-1">
            <h2>MOHAMMAD AZRI BIN PERISIBEN</h2>
            <p className="text-opacity">Fullstack Web-tech Enthusiast</p>
            <dl className="section1__biodata py-4">
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
        <p className="my-5">
          I am Junior Web developer able to build a Web presence from the ground
          up - from concept, navigation, layout and programming to UX and SEO.
          Skilled at writing well-designed, testable and efficient code using
          current best practices in Web development. Fast learner, hard worker
          and team player who is proficient in an array of scripting languages
          and multimedia Web tools.
        </p>
        {/*Later change this into components*/}
        <button className="btn btn-secondary rounded-pill py-3 px-4">
          <FontAwesomeIcon icon={faDownload} /> DOWNLOAD CV
        </button>
      </div>
      <div className="section3__container px-6 py-5">
        <h2 className="mt-5">My Resume_</h2>
        <p className="my-5">
          I am Junior Web developer able to build a Web presence from the ground
          up - from concept, navigation, layout and programming to UX and SEO.
          Skilled at writing well-designed, testable and efficient code using
          current best practices in Web development. Fast learner, hard worker
          and team player who is proficient in an array of scripting languages
          and multimedia Web tools.
        </p>

        <h5 className="fw-bold my-5">E M P L O Y M E N T</h5>
        <DataBox></DataBox>
        <DataBox></DataBox>

        <h5 className="fw-bold my-5">E D U C A T I O N</h5>
        <DataBox></DataBox>
        <DataBox></DataBox>

        <h5 className="fw-bold my-5">T E C H &nbsp; S K I L L S</h5>

      </div>
      <p style={{ color: "red", paddingTop: "1rem" }}>HELLO</p>
    </div>
  );
}

export default App;
