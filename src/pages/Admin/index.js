import "./index.css";
import { useReducer, useState, useEffect } from "react";
import { homeReducer } from "../reducer/appReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachographDigital,
  faFileAlt,
  faUser,
  faSignOut,
  faBars,
  faAdd,
} from "@fortawesome/free-solid-svg-icons";
import Toast from "react-bootstrap/Toast";

//api
import {
  fetchEducation,
  fetchEmployment,
  fetchProject,
  fetchSkill,
  updateEmployment,
  updateEducation,
  updateSkill,
  deleteEmployment,
  deleteEducation,
  deleteSkill,
} from "../../api/portfolioserver";

function Admin() {
  const [state, dispatch] = useReducer(homeReducer.reducer, homeReducer.state);
  const [editEmployForm, setEditEmployForm] = useState({
    id: 0,
    cert_url: "",
    desc: "",
    place: "",
    position: "",
    more_desc: "",
    start_date: "",
    end_date: "",
  });

  const [editEducationForm, setEditEducationForm] = useState({
    id: 0,
    cert_url: "",
    desc: "",
    place: "",
    position: "",
    more_desc: "",
    start_date: "",
    end_date: "",
  });

  const [editSKillForm, setEditSkillForm] = useState({
    id: 0,
    name: "",
    proficiency: 1,
  });

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
    }
  };

  useEffect(() => {
    loadData();
  }, []);

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
          <div className="col-12 tm-block-col">
            <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
              <div className="d-flex justify-content-between">
                <div>
                  <h2 className="tm-block-title">Employment List</h2>
                </div>
                <div>
                  <h2 id="addEmployment" className="tm-block-title add-btn">
                    <FontAwesomeIcon icon={faAdd} />
                  </h2>
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
                  {state.employmentdata.map((data) => {
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
                          setEditEmployForm({
                            ...editEmployForm,
                            id,
                            cert_url,
                            desc,
                            place,
                            position,
                            more_desc,
                            start_date,
                            end_date,
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
            <div style={{ position: "absolute", right: "50px", top:"25px" }}>
              <h2 id="addEducation" className="tm-block-title add-btn">
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
                  {state.educationdata.map((data) => {
                    let {
                      cert_url,
                      desc,
                      id,
                      more_desc,
                      place,
                      position,
                      start_date,
                      end_date,
                    } = data;

                    return (
                      <tr
                        id={id}
                        onClick={() => {
                          setEditEducationForm({
                            ...editEducationForm,
                            id,
                            cert_url,
                            desc,
                            place,
                            position,
                            more_desc,
                            start_date,
                            end_date,
                          });
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#modalEducationForm"
                        data-bs-whatever="@mdo"
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

          <div className="col-12 tm-block-col">
            <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
              <div className="d-flex justify-content-between">
                <div>
                  <h2 className="tm-block-title">Tech Skill List</h2>
                </div>
                <div>
                  <h2 id="addEducation" className="tm-block-title add-btn">
                    <FontAwesomeIcon icon={faAdd} />
                  </h2>
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
                  {state.skilldata.map((data) => {
                    let { id, name, proficiency } = data;
                    return (
                      <tr
                        id={id}
                        onClick={() => {
                          setEditSkillForm({
                            ...editSKillForm,
                            id,
                            name,
                            proficiency,
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
      <EmploymentForm
        data={{ editEmployForm, setEditEmployForm }}
      ></EmploymentForm>

      <EducationForm
        data={{ editEducationForm, setEditEducationForm }}
      ></EducationForm>

      <SkillForm data={{ editSKillForm, setEditSkillForm }}></SkillForm>
    </div>
  );
}

function EmploymentForm({ data }) {
  let { editEmployForm, setEditEmployForm } = data;

  let handleInputChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    setEditEmployForm({ ...editEmployForm, [key]: value });
  };

  return (
    <div className="modal fade" id="modalEmploymentForm">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Data</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <input
                type="text"
                className="form-control mb-3"
                name="place"
                onChange={handleInputChange}
                value={editEmployForm.place}
                placeholder="PLACE"
                style={{ color: "white" }}
              />

              <div className="mb-3">
                <input
                  type="date"
                  name="start_date"
                  onChange={handleInputChange}
                  value={editEmployForm.start_date}
                  min="2018-01-01"
                  max="2040-12-12"
                  style={{ padding: "10px 9px" }}
                />
                <span className="fw-bolder mx-2">---</span>
                <input
                  type="date"
                  name="end_date"
                  onChange={handleInputChange}
                  value={editEmployForm.end_date}
                  min="2018-01-01"
                  max="2040-12-12"
                  style={{ padding: "10px 9px" }}
                />
              </div>

              <input
                type="text"
                className="form-control mb-3"
                name="position"
                onChange={handleInputChange}
                value={editEmployForm.position}
                placeholder="POSITION"
                style={{ color: "white" }}
              />

              <textarea
                className="form-control mb-3"
                style={{ height: "20vh" }}
                name="desc"
                onChange={handleInputChange}
                value={editEmployForm.desc}
                placeholder="DESCRIPTION"
                rows="6"
              ></textarea>

              <textarea
                className="form-control mb-3"
                style={{ height: "20vh" }}
                name="more_desc"
                onChange={handleInputChange}
                value={editEmployForm.more_desc}
                placeholder="MORE DESCRIPTION"
                rows="6"
              ></textarea>

              <textarea
                className="form-control mb-3"
                style={{ height: "15vh" }}
                name="cert_url"
                onChange={handleInputChange}
                value={editEmployForm.cert_url}
                placeholder="URL CERT"
                rows="3"
              ></textarea>

              <button
                type="button"
                className="btn btn-primary"
                onClick={async () => {
                  let response = await updateEmployment(editEmployForm);
                  if (response)
                    document.getElementById("modalEmploymentForm").click();
                  else return 1;
                }}
              >
                Approve
              </button>
              <button
                type="button"
                className="btn btn-danger display-inline"
                onClick={async () => {
                  let reply = window.confirm(
                    "Are you sure you want to delete this data?"
                  );
                  if (reply) deleteEmployment(editEmployForm.id);
                  document.getElementById("modalEmploymentForm").click();
                }}
              >
                Delete
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function EducationForm({ data }) {
  let { editEducationForm, setEditEducationForm } = data;

  let handleInputChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    setEditEducationForm({ ...editEducationForm, [key]: value });
  };

  return (
    <div className="modal fade" id="modalEducationForm">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Data</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <input
                type="text"
                className="form-control mb-3"
                name="place"
                onChange={handleInputChange}
                value={editEducationForm.place}
                placeholder="PLACE"
                style={{ color: "white" }}
              />

              <div className="mb-3">
                <input
                  type="date"
                  name="start_date"
                  onChange={handleInputChange}
                  value={editEducationForm.start_date}
                  min="2018-01-01"
                  max="2040-12-12"
                  style={{ padding: "10px 9px" }}
                />
                <span className="fw-bolder mx-2">---</span>
                <input
                  type="date"
                  name="end_date"
                  onChange={handleInputChange}
                  value={editEducationForm.end_date}
                  min="2018-01-01"
                  max="2040-12-12"
                  style={{ padding: "10px 9px" }}
                />
              </div>

              <input
                type="text"
                className="form-control mb-3"
                name="position"
                onChange={handleInputChange}
                value={editEducationForm.position}
                placeholder="POSITION"
                style={{ color: "white" }}
              />

              <textarea
                className="form-control mb-3"
                style={{ height: "20vh" }}
                name="desc"
                onChange={handleInputChange}
                value={editEducationForm.desc}
                placeholder="DESCRIPTION"
                rows="6"
              ></textarea>

              <textarea
                className="form-control mb-3"
                style={{ height: "20vh" }}
                name="more_desc"
                onChange={handleInputChange}
                value={editEducationForm.more_desc}
                placeholder="MORE DESCRIPTION"
                rows="6"
              ></textarea>

              <textarea
                className="form-control mb-3"
                style={{ height: "15vh" }}
                name="cert_url"
                onChange={handleInputChange}
                value={editEducationForm.cert_url}
                placeholder="URL CERT"
                rows="3"
              ></textarea>

              <button
                type="button"
                className="btn btn-primary"
                onClick={async () => {
                  let response = await updateEducation(editEducationForm);
                  if (response)
                    document.getElementById("modalEducationForm").click();
                  else return 1;
                }}
              >
                Approve
              </button>
              <button
                type="button"
                className="btn btn-danger display-inline"
                onClick={async () => {
                  let reply = window.confirm(
                    "Are you sure you want to delete this data?"
                  );
                  if (reply) deleteEducation(editEducationForm.id);
                  document.getElementById("modalEducationForm").click();
                }}
              >
                Delete
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillForm({ data }) {
  let { editSKillForm, setEditSkillForm } = data;

  let handleInputChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    setEditSkillForm({ ...editSKillForm, [key]: value });
  };

  return (
    <div className="modal fade" id="modalSkillForm">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Data</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <input
                type="text"
                className="form-control mb-3"
                name="name"
                onChange={handleInputChange}
                value={editSKillForm.name}
                placeholder="SKILL NAME"
                style={{ color: "white" }}
              />
              <select
                className="form-select"
                name="proficiency"
                value={editSKillForm.proficiency}
                onChange={handleInputChange}
              >
                <option value="1">Very Poor</option>
                <option value="2">Poor</option>
                <option value="3">Average</option>
                <option value="4">Good</option>
                <option value="5">Very Good</option>
              </select>
              <button
                type="button"
                className="btn btn-primary"
                onClick={async () => {
                  let response = await updateSkill(editSKillForm);
                  if (response)
                    document.getElementById("modalSkillForm").click();
                  else return 1;
                }}
              >
                Approve
              </button>
              <button
                type="button"
                className="btn btn-danger display-inline"
                onClick={async () => {
                  let reply = window.confirm(
                    "Are you sure you want to delete this data?"
                  );
                  if (reply) deleteSkill(editSKillForm.id);
                  document.getElementById("modalSkillForm").click();
                }}
              >
                Delete
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
