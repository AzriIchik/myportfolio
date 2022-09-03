import "./index.css";
import { useContext } from "react";
import { AppContext } from "appdata/appcontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachographDigital,
  faFileAlt,
  faUser,
  faSignOut,
  faBars,
  faAdd,
} from "@fortawesome/free-solid-svg-icons";

import EducationForm from "./components/EducationForm";
import EmploymentForm from "./components/EmploymentForm";
import SkillForm from "./components/SkillForm";

function Admin() {
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

  return (
    <div className="" id="home">
      <nav className="navbar navbar-expand-xl p-0 shadow">
        <div className="container h-100">
          <a className="navbar-brand" href="index.html">
            <h1 className="tm-site-title mb-0">MY PORTFOLIO</h1>
          </a>
          <button
            className="navbar-toggler ml-auto mr-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarToggleExternalContent"
          >
            <ul className="navbar-nav mx-auto h-100">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <span className="d-block m-1">
                    <FontAwesomeIcon icon={faTachographDigital} />
                  </span>
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="d-block m-1">
                    <FontAwesomeIcon icon={faFileAlt} />
                  </span>
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="d-block m-1">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="d-block m-1">
                    <FontAwesomeIcon icon={faSignOut} />
                  </span>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container main-container">
        <div className="row">
          <div className="col">
            <p className="mt-5 mb-5" style={{ color: "#2292a4" }}>
              Welcome back, <b>Admin</b>
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
                  {appData.employmentdata.map((data) => {
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
                  {appData.educationdata.map((data) => {
                    return (
                      <tr
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
                  </tr>
                </thead>
                <tbody>
                  {appData.skilldata.map((data) => {
                    let { id, name, proficiency } = data;
                    return (
                      <tr
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
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <footer className="tm-footer row tm-mt-small">
        <div className="col-12 font-weight-light">
          <p className="text-center text-white mb-0 px-4 small">
            Copyright &copy; <b>2018</b> All rights reserved. Design:
            <a
              rel="nofollow noopener"
              href="https://templatemo.com"
              className="tm-footer-link"
            >
              Template Mo
            </a>
          </p>
        </div>
      </footer>
      <EmploymentForm></EmploymentForm>
      <EducationForm></EducationForm>
      <SkillForm></SkillForm>
    </div>
  );
}

export default Admin;
