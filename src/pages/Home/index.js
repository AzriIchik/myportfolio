import React, {useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faDownload } from "@fortawesome/free-solid-svg-icons"; //Icon
import Navbar from "./components/Navbar";
import DataBox from "./components/DataBox";
import SkillBox from "./components/SkillBox";
import ContactUsForm from "./components/ContactUsForm";
import ProjectBox from "./components/ProjectBox";
import PButton from "./components/PButton";
import { AppContext } from "../../appdata/appcontext";
import profilePhoto from "../../assets/img/profilephoto.jpeg";
import webdata from "./components/webdata";

const Home = () => {

  const {appData, appDispatch, appAction} = useContext(AppContext);

  return (
    <div
      className="container-fluid p-0"
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
    >
      <div className="section1__container">
        <div className="section1__filter"></div>
        <Navbar></Navbar>
        <div className="section1__content px-6 d-flex" id="aboutme">
          <div className="bd-highlight">
            <img src={profilePhoto} alt="dp" className="profile-photo"></img>
          </div>
          <div className="ps-0 ps-md-5 pt-5 bd-highlight flex-grow-1">
            <h2> {webdata.profile.name} </h2>
            <p className="text-opacity">{webdata.profile.description}</p>

            <dl className="section1__biodata py-4">
              <dt className="text-opacity">AGE:</dt>{" "}
              <dd>{webdata.profile.age}</dd>
              <dt className="text-opacity">PHONE:</dt>{" "}
              <dd>
                {" "}
                <a className="alink" href={"tel:" + webdata.profile.phoneno}>
                  {webdata.profile.phoneno}
                </a>{" "}
              </dd>
              <dt className="text-opacity">EMAIL:</dt>{" "}
              <dd>
                <a className="alink" href={"mailto:" + webdata.profile.email}>
                  {webdata.profile.email}
                </a>
              </dd>
              <dt className="text-opacity">ADDRESS:</dt>{" "}
              <dd>
                Pangsapuri Ria, Jalan Bukit Mewah 31,Taman Bukit Mewah, 43000
                Kajang, Selangor
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="section2__container px-6 py-5">
        <h2 className="mt-5">Hi There_</h2>
        <p className="my-4">
          I am a Web Dev Enthusiast with interest in learning Web development, I
          am able to develop web presence from the ground up, able to design web
          from concept, navigation, layout and programming. When it come to web
          tech I am a Fast learner, hard worker and team player who is
          proficient in an array of scripting languages
        </p>
        <PButton
          icon={faDownload}
          name={"DOWNLOAD CV"}
          handler={() => {
            alert("you click download cv button");
          }}
        ></PButton>
      </div>
      <div
        id="resume"
        className="section3__container px-6 py-5"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 className="mt-3">My Resume_</h2>
        <p className="my-5">
          These is are some of my experience and archivement in programming, i've works in some places that help improved my proficiency in programming. I also have experience working in a team of professional, and I assure I can add a value to your team 
        </p>

        <div data-aos="fade-up">
          <h5 className="fw-bold my-5">E M P L O Y M E N T</h5>
          <div>
            {appData.employmentdata.map((data, index) => {
              return (
                <DataBox key={"employmentData" + index} data={data}></DataBox>
              );
            })}
          </div>
        </div>

        <div data-aos="fade-up">
          <h5 className="fw-bold my-5">E D U C A T I O N </h5>
          <div>
            {appData.educationdata.map((data, index) => {
              return (
                <DataBox key={"educationData" + index} data={data}></DataBox>
              );
            })}
          </div>
        </div>

        <h5 className="fw-bold my-5">T E C H &nbsp; S K I L L S</h5>

        <div className="container-fluid">
          <div className="row row-cols-md-2 row-cols-1">
            {appData.skilldata.map((data, index) => {
              return <SkillBox key={"skills" + index} data={data}></SkillBox>;
            })}
          </div>
        </div>
      </div>
      <div className="section3__container px-6 py-5" id="portfolio">
        <h2 className="my-5">My Project_</h2>
        <div className="container-fluid">
          {appData.portfoliodata &&
            appData.portfoliodata.map((data, index) => {
              return (
                <ProjectBox key={"project" + index} data={data}></ProjectBox>
              );
            })}
        </div>
      </div>
      <div className="section4__container px-6 py-5" id="contact">
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

        <div className="container-fluid">
          <div className="row row-cols-auto">
            <div className="col p-0 mb-5 me-0 me-md-5">
              <dl className="section1__biodata">
                <dt className="text-opacity">PHONE:</dt>{" "}
                <dd>
                  <a className="alink" href={"tel:" + webdata.profile.phoneno}>
                    {webdata.profile.phoneno}
                  </a>
                </dd>
                <dt className="text-opacity">EMAIL:</dt>{" "}
                <dd>
                  {" "}
                  <a className="alink" href={"mailto:" + webdata.profile.email}>
                    {webdata.profile.email}
                  </a>
                </dd>
              </dl>
            </div>
            <div className="col p-0">
              <p>Or just write me a letter here, i'll contact you later</p>
              <ContactUsForm color={"white"}></ContactUsForm>
            </div>
          </div>
        </div>

        <p className="text-center font-small mt-5">
          © 2016 Mohammad Azri. Hire me, I code for food{" "}
        </p>
      </div>
    </div>
  );

};

export default Home;
