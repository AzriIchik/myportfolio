import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faDownload } from "@fortawesome/free-solid-svg-icons";
import DataBox from "./components/DataBox";
import SkillBox from "./components/SkillBox";
import ContactUsForm from "./components/ContactUsForm";

import profilePhoto from "./assets/img/profilephoto.jpg";
import ProjectBox from "./components/ProjectBox";
import PButton from "./components/PButton";

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
        <PButton
          icon={faDownload}
          name={"DOWNLOAD CV"}
          handler={() => {
            alert("you click download cv button");
          }}
        ></PButton>
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
        <div>
          <DataBox></DataBox>
          <DataBox></DataBox>
          <DataBox></DataBox>
        </div>

        <h5 className="fw-bold my-5">E M P L O Y M E N T</h5>
        <div>
          <DataBox></DataBox>
          <DataBox></DataBox>
          <DataBox></DataBox>
        </div>

        <h5 className="fw-bold my-5">T E C H &nbsp; S K I L L S</h5>
        <SkillBox></SkillBox>
      </div>
      <div className="section3__container px-6 py-5">
        <h2 className="my-5">My Project_</h2>
        <div className="container-fluid">
          <ProjectBox></ProjectBox>
          <ProjectBox></ProjectBox>
          <ProjectBox></ProjectBox>
        </div>
      </div>
      <div className="section4__container px-6 py-5">
        <div className="section4__quotes">
          {" "}
          <p
            style={{
              color: "gray",
              textAlign: "center",
              paddingTop: "calc(50%)",
            }}
          >
            <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
          </p>{" "}
        </div>
        <h2 className="my-5">Get In Touch_</h2>
        <div class="row row-cols-auto">
          <div class="col px-0 pe-5 mb-5 p-2">
            <dl className="section1__biodata">
              <dt className="text-opacity">PHONE:</dt> <dd>014-6511665</dd>
              <dt className="text-opacity">EMAIL:</dt>{" "}
              <dd>azriperisiben96@gmail.com</dd>
              <dt className="text-opacity">TELEGRAM:</dt>{" "}
              <dd>azriperisiben96@gmail.com</dd>
            </dl>
          </div>
          <div class="col px-0">
            <ContactUsForm></ContactUsForm>
          </div>
        </div>
        <p className="text-center font-small mt-5">© 2016 Mohammad Azri. Hire me, I code for food</p>
      </div>
    </div>
  );
}

export default App;
