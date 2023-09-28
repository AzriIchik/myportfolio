import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faDownload } from "@fortawesome/free-solid-svg-icons"; //Icon
import Navbar from "./components/Navbar";
import DataBox from "./components/DataBox";
import SkillBox from "./components/SkillBox";
import ContactUsForm from "./components/ContactUsForm";
import ProjectBox from "./components/ProjectBox";
import PButton from "./components/PButton";
import { AppContext } from "appdata/appcontext";

const Home = () => {
  const { appData, appDispatch, appAction } = useContext(AppContext);

  return (
    <>
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
              <img
                src={`https://${appData.profiledata.imgurl}`}
                alt="dp"
                className="profile-photo"
              ></img>
            </div>
            <div className="ps-0 ps-md-5 pt-5 bd-highlight flex-grow-1">
              <h2> {appData.profiledata.name} </h2>
              <p className="text-opacity">{appData.profiledata.title}</p>

              <dl className="section1__biodata py-4">
                <dt className="text-opacity">AGE:</dt>{" "}
                <dd>{appData.profiledata.age}</dd>
                <dt className="text-opacity">PHONE:</dt>{" "}
                <dd>
                  {" "}
                  <a
                    className="alink"
                    href={"tel:" + appData.profiledata.phoneno}
                  >
                    {appData.profiledata.phoneno}
                  </a>{" "}
                </dd>
                <dt className="text-opacity">EMAIL:</dt>{" "}
                <dd>
                  <a
                    className="alink"
                    href={"mailto:" + appData.profiledata.email}
                  >
                    {appData.profiledata.email}
                  </a>
                </dd>
                <dt className="text-opacity">ADDRESS:</dt>{" "}
                <dd>{appData.profiledata.address}</dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="section2__container px-6 py-5">
          <h2 className="mt-5">Hi There_</h2>
          <p className="my-4">{appData.profiledata.aboutme}</p>
          <PButton
            icon={faDownload}
            name={"DOWNLOAD CV"}
            handler={() => {
              window.open(appData.profiledata.resumeurl, "_blank");
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
          <p className="my-5">{appData.profiledata.aboutresume}</p>

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
            <h5 className="fw-bold">Programming</h5>
            <div className="row row-cols-md-2 row-cols-1 mb-5">
              {appData.skilldata.map((data, index) => {
                if (data.category == 1)
                  return (
                    <SkillBox key={"skills" + index} data={data}></SkillBox>
                  );
              })}
            </div>
            <h5 className="fw-bold">Front-End Framework</h5>
            <div className="row row-cols-md-2 row-cols-1 mb-5">
              {appData.skilldata.map((data, index) => {
                if (data.category == 2)
                  return (
                    <SkillBox key={"skills" + index} data={data}></SkillBox>
                  );
              })}
            </div>
            <h5 className="fw-bold">Back-End Framework</h5>
            <div className="row row-cols-md-2 row-cols-1 mb-5">
              {appData.skilldata.map((data, index) => {
                if (data.category == 3)
                  return (
                    <SkillBox key={"skills" + index} data={data}></SkillBox>
                  );
              })}
            </div>
            <h5 className="fw-bold">Tools</h5>
            <div className="row row-cols-md-2 row-cols-1 mb-5">
              {appData.skilldata.map((data, index) => {
                if (data.category == 4)
                  return (
                    <SkillBox key={"skills" + index} data={data}></SkillBox>
                  );
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
                    <a
                      className="alink"
                      href={"tel:" + appData.profiledata.phoneno}
                    >
                      {appData.profiledata.phoneno}
                    </a>
                  </dd>
                  <dt className="text-opacity">EMAIL:</dt>{" "}
                  <dd>
                    {" "}
                    <a
                      className="alink"
                      href={"mailto:" + appData.profiledata.email}
                    >
                      {appData.profiledata.email}
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
    </>
  );
};

export default Home;
