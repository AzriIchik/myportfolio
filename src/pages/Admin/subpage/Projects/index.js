import React from "react";
import { useContext } from "react";
import { AppContext } from "appdata/appcontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import ProjectForm from "../../components/ProjectForm";

const Projects = () => {
  const { appData, appDispatch, appAction } = useContext(AppContext);

  return (
    <div className="container main-container mt-5">
      <div className="row tm-content-row">
        <div className="col-12 tm-block-col" style={{ position: "relative" }}>
          <div style={{ position: "absolute", right: "50px", top: "25px" }}>
            <h2
              id="addEducation"
              className="tm-block-title add-btn"
              data-bs-toggle="modal"
              data-bs-target="#modalProjectForm"
              onClick={() => {
                appDispatch({
                  type: appAction.SET_PROJECT_FORM,
                  payload: {
                    id: undefined,
                    img_url1: "",
                    img_url2: "",
                    img_url3: "",
                    name: "",
                    desc: "",
                    tech_stack: [],
                    link: "",
                  },
                });
              }}
            >
              <FontAwesomeIcon icon={faAdd} />
            </h2>
          </div>
          <div
            className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll"
            style={{ height: "100vh" }}
          >
            <div className="d-flex justify-content-between">
              <div>
                <h2 className="tm-block-title">Project List</h2>
              </div>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">NAME</th>
                  <th scope="col">DESC</th>
                  <th scope="col">TECH</th>
                  <th scope="col">LINK</th>
                </tr>
              </thead>
              <tbody>
                {appData.portfoliodata.map((data, i) => {
                  let { id, name, desc, tech_stack, link } = data;

                  return (
                    <tr
                      key={"project" + i}
                      id={id}
                      data-bs-toggle="modal"
                      data-bs-target="#modalProjectForm"
                      onClick={() => {
                        appDispatch({
                          type: appAction.SET_PROJECT_FORM,
                          payload: data,
                        });
                      }}
                    >
                      <th scope="col">
                        <b>{name}</b>
                      </th>
                      <td className="fixed-td">
                        <b>{desc}</b>
                      </td>
                      <td>
                        {tech_stack.map((tech, i) => {
                          return (
                            <div
                              key={"tech" + i}
                              className="d-inline m-1 p-1 bg-info border-1"
                            >
                              {tech}
                            </div>
                          );
                        })}
                      </td>
                      <td>{link}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ProjectForm></ProjectForm>
    </div>
  );
};

export default Projects;
