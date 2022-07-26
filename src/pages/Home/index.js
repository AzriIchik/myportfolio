import React, { useReducer } from "react";
import Navbar from "../../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faDownload } from "@fortawesome/free-solid-svg-icons"; //Icon
import DataBox from "../../components/DataBox";
import SkillBox from "../../components/SkillBox";
import ContactUsForm from "../../components/ContactUsForm";
import profilePhoto from "../../assets/img/profilephoto.jpeg";
import ProjectBox from "../../components/ProjectBox";
import PButton from "../../components/PButton";
import { homeReducer } from "./reducer/homeReducer";
import webdata from "../../components/webdata";

//api
import {
  fetchEducation,
  fetchEmployment,
  fetchProject,
  fetchSkill,
} from "./api/portfolioserver";

const Home = () => {
  const [state, dispatch] = useReducer(homeReducer.reducer, homeReducer.state);

  let loadData = async () => {
    let projectData = await fetchProject();
    let employmentData = await fetchEmployment();
    let educationData = await fetchEducation();
    let skillData = await fetchSkill();

    dispatch({ type: homeReducer.action.SET_PROJECT, payload: projectData });
    dispatch({
      type: homeReducer.action.SET_EMPLOYMENT,
      payload: employmentData,
    });

    dispatch({
      type: homeReducer.action.SET_EDUCATION,
      payload: educationData,
    });
    dispatch({
      type: homeReducer.action.SET_SKILL,
      payload: skillData,
    });
  };

  React.useEffect(() => {
    loadData();
  }, []);

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
        <PButton
          icon={faDownload}
          name={"DOWNLOAD CV"}
          handler={() => {
            alert("you click download cv button");
          }}
        ></PButton>
      </div>
      <div className="section3__container px-6 py-5" id="resume">
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
          {state.employmentdata.map((data, index) => {
            return (
              <DataBox key={"employmentData" + index} data={data}></DataBox>
            );
          })}
        </div>

        <h5 className="fw-bold my-5">E D U C A T I O N </h5>
        <div>
          {state.educationdata.map((data, index) => {
            return (
              <DataBox key={"educationData" + index} data={data}></DataBox>
            );
          })}
        </div>

        <h5 className="fw-bold my-5">T E C H &nbsp; S K I L L S</h5>

        <div className="container-fluid">
          <div className="row row-cols-md-2 row-cols-1">
            {state.skilldata.map((data, index) => {
              return <SkillBox key={"skills" + index} data={data}></SkillBox>;
            })}
          </div>
        </div>
      </div>
      <div className="section3__container px-6 py-5" id="portfolio">
        <h2 className="my-5">My Project_</h2>
        <div className="container-fluid">
          {state.portfoliodata &&
            state.portfoliodata.map((data, index) => {
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
