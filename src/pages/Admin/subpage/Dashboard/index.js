import React from "react";
import { useContext } from "react";
import { AppContext } from "../../../../appdata/appcontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import EducationForm from "../../components/EducationForm";
import EmploymentForm from "../../components/EmploymentForm";
import SkillForm from "../../components/SkillForm";

const Dashboard = () => {
  const { appData, appDispatch, appAction } = useContext(AppContext);

  let setProficiency = (proficiency) => {
    switch (proficiency) {
      case 1:
        return <span>Really Poor</span>;
      case 2:
        return <span>Poor</span>;
      case 3:
        return <span>Average</span>;
      case 4:
        return <span>Good</span>;
      case 5:
        return <span>Very Good</span>;
      default:
        return <span>Really Poor</span>;
    }
  };

  let setCategory = (category) => {
    switch (category) {
      case 1:
        return <span>Programming Language</span>;
      case 2:
        return <span>Front-End Framework</span>;
      case 3:
        return <span>Back-end Framework</span>;
      case 4:
        return <span>Tools</span>;
      default:
        return <span>No Category</span>;
    }
  }

  return (
    <div className="container main-container">
      <div className="row">
        <div className="col">
          <p className="mt-5 mb-5" style={{ color: "#2292a4" }}>
            Welcome back, <b>{appData.profiledata.name}</b>
          </p>
        </div>
      </div>
      <div className="row tm-content-row">
        <div className="col-12 tm-block-col" style={{ position: "relative" }}>
          <div style={{ position: "absolute", right: "50px", top: "25px" }}>
            <h2
              id="addEducation"
              className="tm-block-title add-btn"
              data-bs-toggle="modal"
              data-bs-target="#modalEmploymentForm"
              onClick={() => {
                appDispatch({
                  type: appAction.SET_EMPLOYMENT_FORM,
                  payload: {
                    id: undefined,
                    cert_url: "",
                    desc: "",
                    place: "",
                    position: "",
                    more_desc: "",
                    start_date: "",
                    end_date: "",
                  },
                });
              }}
            >
              <FontAwesomeIcon icon={faAdd} />
            </h2>
          </div>
          <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
            <div className="d-flex justify-content-between">
              <div>
                <h2 className="tm-block-title">Employment List</h2>
              </div>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">PLACE</th>
                  <th scope="col">DATE START</th>
                  <th scope="col">DATE END</th>
                  <th scope="col">POSITION</th>
                  <th scope="col">DESCRIPTION</th>
                  <th scope="col">EX DESCRIOTION</th>
                  <th scope="col">CERT</th>
                </tr>
              </thead>
              <tbody>
                {appData.employmentdata.map((data, i) => {
                  let {
                    id,
                    cert_url,
                    desc,
                    place,
                    position,
                    more_desc,
                    start_date,
                    end_date,
                  } = data;

                  return (
                    <tr
                      key={"emp" + i}
                      id={id}
                      onClick={() => {
                        appDispatch({
                          type: appAction.SET_EMPLOYMENT_FORM,
                          payload: { ...data, action: "edit" },
                        });
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#modalEmploymentForm"
                    >
                      <th scope="col">
                        <b>{place}</b>
                      </th>

                      <td>{start_date}</td>
                      <td>{end_date}</td>
                      <td>{position}</td>
                      <td className="fixed-td">
                        <b>{desc}</b>
                      </td>
                      <td className="fixed-td">
                        <b>{more_desc}</b>
                      </td>
                      <td scope="col">
                        <a href={cert_url}>Downlod Me</a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-12 tm-block-col" style={{ position: "relative" }}>
          <div style={{ position: "absolute", right: "50px", top: "25px" }}>
            <h2
              id="addEducation"
              className="tm-block-title add-btn"
              data-bs-toggle="modal"
              data-bs-target="#modalEducationForm"
              onClick={() => {
                appDispatch({
                  type: appAction.SET_EDUCATION_FORM,
                  payload: {
                    id: undefined,
                    cert_url: "",
                    desc: "",
                    place: "",
                    position: "",
                    more_desc: "",
                    start_date: "",
                    end_date: "",
                  },
                });
              }}
            >
              <FontAwesomeIcon icon={faAdd} />
            </h2>
          </div>
          <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
            <div className="d-flex justify-content-between">
              <div>
                <h2 className="tm-block-title">Education List</h2>
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">PLACE</th>
                  <th scope="col">DATE START</th>
                  <th scope="col">DATE END</th>
                  <th scope="col">POSITION</th>
                  <th scope="col">DESCRIPTION</th>
                  <th scope="col">EX DESCRIOTION</th>
                  <th scope="col">CERT</th>
                </tr>
              </thead>
              <tbody>
                {appData.educationdata.map((data, i) => {
                  return (
                    <tr
                      key={"edu" + i}
                      id={data.id}
                      onClick={() => {
                        appDispatch({
                          type: appAction.SET_EDUCATION_FORM,
                          payload: { ...data, action: "edit" },
                        });
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#modalEducationForm"
                    >
                      <th scope="col">
                        <b>{data.place}</b>
                      </th>

                      <td>{data.start_date}</td>
                      <td>{data.end_date}</td>
                      <td>{data.position}</td>
                      <td className="fixed-td">
                        <b>{data.desc}</b>
                      </td>
                      <td className="fixed-td">
                        <b>{data.more_desc}</b>
                      </td>
                      <td scope="col">
                        <a href={data.cert_url}>Downlod Me</a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-12 tm-block-col" style={{ position: "relative" }}>
          <div style={{ position: "absolute", right: "50px", top: "25px" }}>
            <h2
              id="addEducation"
              className="tm-block-title add-btn"
              data-bs-toggle="modal"
              data-bs-target="#modalSkillForm"
              onClick={() => {
                appDispatch({
                  type: appAction.SET_SKILL_FORM,
                  payload: {
                    id: undefined,
                    name: "",
                    proficiency: 1,
                  },
                });
              }}
            >
              <FontAwesomeIcon icon={faAdd} />
            </h2>
          </div>
          <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
            <div className="d-flex justify-content-between">
              <div>
                <h2 className="tm-block-title">Tech Skill List</h2>
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">SKILL NAME</th>
                  <th scope="col">PROFECIENCY</th>
                  <th scope="col">CATEGORY</th>
                </tr>
              </thead>
              <tbody>
                {appData.skilldata.map((data, i) => {
                  let { id, name, proficiency, category } = data;
                  return (
                    <tr
                      key={"skill" + i}
                      id={id}
                      onClick={() => {
                        appDispatch({
                          type: appAction.SET_SKILL_FORM,
                          payload: { ...data, action: "edit" },
                        });
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#modalSkillForm"
                      data-bs-whatever="@mdo"
                    >
                      <th>{name}</th>
                      <th>{setProficiency(proficiency)}</th>
                      <th>{setCategory(category)}</th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <EmploymentForm></EmploymentForm>
      <EducationForm></EducationForm>
      <SkillForm></SkillForm>
    </div>
  );
};

export default Dashboard;
