import React from "react";
import "./index.css";
import { useContext } from "react";
import { AppContext } from "appdata/appcontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import MultiImageForm from "../MultiImageForm";

// api
import {
  updateProject,
  deleteProject,
  addProject,
  fetchProject,
} from "api/portfolioserver";

const ProjectForm = () => {
  const { appData, appDispatch, appAction } = useContext(AppContext);

  let handleInputChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    appDispatch({
      type: appAction.SET_PROJECT_FORM,
      payload: { ...appData.projectformdata, [key]: value },
    });
  };

  let loadData = async () => {
    let projectData = await fetchProject();
    appDispatch({
      type: appAction.SET_PROJECT,
      payload: projectData,
    });
  };

  let projectLink = (link) => {
    window.open(`${link}`, "_blank");
  };

  React.useEffect(()=>{
  
    try{
      appData.portfoliodata.forEach(data => {
        if(data.id === appData.projectformdata.id){
          appDispatch({
            type:appAction.SET_PROJECT_FORM,
            payload: data,
          })
        }
      });

    }catch(e){

    }

  },[appData.portfoliodata])

  return (
    <div className="modal fade" id="modalProjectForm">
      <div className="modal-dialog modal-xl">
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
               {appData.projectformdata.id ? <MultiImageForm></MultiImageForm> : <p>Note: Image can be added later after approved</p>} 
              <input
                type="text"
                className="form-control mb-3"
                name="name"
                onChange={handleInputChange}
                value={appData.projectformdata.name}
                placeholder="PROJECT NAME"
                style={{ color: "white" }}
              />

              <textarea
                className="form-control mb-3"
                style={{ height: "15vh" }}
                name="desc"
                onChange={handleInputChange}
                value={appData.projectformdata.desc}
                placeholder="PROJECT DESCRIPTION"
                rows="3"
              ></textarea>

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="link"
                  onChange={handleInputChange}
                  value={appData.projectformdata.link}
                  placeholder="PROJECT LINK"
                  style={{ color: "white" }}
                />
                <button
                  className="btn btn-outline-info"
                  onClick={(e) => {
                    e.preventDefault();
                    projectLink(appData.projectformdata.link);
                  }}
                >
                  GO TO
                </button>
              </div>

              <div className="container-fluid p-0 d-flex flex-wrap">
                {appData.projectformdata.tech_stack.map((tech, i) => {
                  return (
                    <div key={"tech"+i} className="d-inline m-1 p-1 bg-info border-1">
                      {tech}
                      <FontAwesomeIcon
                        className="ms-1"
                        icon={faSquareXmark}
                        onClick={() => {
                          let curStack = [
                            ...appData.projectformdata.tech_stack,
                          ];

                          let newStack = [];

                          curStack.forEach((data) => {
                            if (tech == data) return;
                            newStack.push(data);
                          });

                          appDispatch({
                            type: appAction.SET_PROJECT_FORM,
                            payload: {
                              ...appData.projectformdata,
                              tech_stack: newStack,
                            },
                          });
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="input-group mb-3">
                <input
                  id="techInput"
                  type="text"
                  className="form-control"
                  placeholder="Tech"
                  style={{ color: "white" }}
                />
                <button
                  className="btn btn-outline-info p-2"
                  onClick={(e) => {
                    e.preventDefault();
                    let techInput = document.getElementById("techInput");
                    let newStack = [...appData.projectformdata.tech_stack];

                    newStack.push(techInput.value);

                    appDispatch({
                      type: appAction.SET_PROJECT_FORM,
                      payload: {
                        ...appData.projectformdata,
                        tech_stack: newStack,
                      },
                    });

                    techInput.value = "";
                  }}
                >
                  ADD
                </button>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={async () => {
                  /**If currently adding data (undefined id), hide delete button */
                  let response;

                  if (appData.projectformdata.id) {
                    response = await updateProject(appData.projectformdata);
                  } else {
                    response = await addProject(appData.projectformdata);
                  }

                  if (response) {
                    loadData();
                    document.getElementById("modalProjectForm").click();
                  } else {
                    console.log("ERROR: " + response);
                  }
                }}
              >
                Approve
              </button>
              {/**If currently adding data (undefined id), hide delete button */}
              {appData.projectformdata.id && (
                <button
                  type="button"
                  className="btn btn-danger display-inline"
                  onClick={async () => {
                    
                    let reply = window.confirm(
                      "Are you sure you want to delete this data?"
                    );

                    if (reply) {
                      let response = await deleteProject(
                        appData.projectformdata.id
                      );
                      if (response) {
                        loadData();
                        document.getElementById("modalProjectForm").click();
                      } else {
                        console.log("ERROR: " + response);
                      }
                    }
                  }}
                >
                  Delete
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
