import React from "react";
import { useContext } from "react";
import { AppContext } from "appdata/appcontext";

// api
import {
  updateEducation,
  addEducation,
  deleteEducation,
  fetchEducation,
} from "api/portfolioserver";

const EducationForm = () => {
  const { appData, appDispatch, appAction } = useContext(AppContext);

  let handleInputChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    appDispatch({
      type: appAction.SET_EDUCATION_FORM,
      payload: { ...appData.educationformdata, [key]: value },
    });
  };

  let loadData = async () => {
    let educationData = await fetchEducation();

    appDispatch({
      type: appAction.SET_EDUCATION,
      payload: educationData,
    });
  };

  return (
    <div className="modal fade" id="modalEducationForm">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {" "}
              {appData.educationformdata.id ? "Edit Data" : "Add Data"}{" "}
            </h5>
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
                value={appData.educationformdata.place}
                placeholder="PLACE"
                style={{ color: "white" }}
              />

              <div className="mb-3">
                <input
                  type="date"
                  name="start_date"
                  onChange={handleInputChange}
                  value={appData.educationformdata.start_date}
                  min="2018-01-01"
                  max="2040-12-12"
                  style={{ padding: "10px 9px" }}
                />
                <span className="fw-bolder mx-2">---</span>
                <input
                  type="date"
                  name="end_date"
                  onChange={handleInputChange}
                  value={appData.educationformdata.end_date}
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
                value={appData.educationformdata.position}
                placeholder="POSITION"
                style={{ color: "white" }}
              />

              <textarea
                className="form-control mb-3"
                style={{ height: "20vh" }}
                name="desc"
                onChange={handleInputChange}
                value={appData.educationformdata.desc}
                placeholder="DESCRIPTION"
                rows="6"
              ></textarea>

              <textarea
                className="form-control mb-3"
                style={{ height: "20vh" }}
                name="more_desc"
                onChange={handleInputChange}
                value={appData.educationformdata.more_desc}
                placeholder="MORE DESCRIPTION"
                rows="6"
              ></textarea>

              <textarea
                className="form-control mb-3"
                style={{ height: "15vh" }}
                name="cert_url"
                onChange={handleInputChange}
                value={appData.educationformdata.cert_url}
                placeholder="URL CERT"
                rows="3"
              ></textarea>

              <button
                type="button"
                className="btn btn-primary"
                onClick={async () => {
                  /**If currently adding data (undefined id), hide delete button */
                  let response;

                  if (appData.educationformdata.id) {
                    response = await updateEducation(appData.educationformdata);
                  } else {
                    response = await addEducation(appData.educationformdata);
                  }

                  if (response) {
                    loadData();
                    document.getElementById("modalEducationForm").click();
                  } else {
                    console.log("ERROR: " + response);
                  }
                }}
              >
                Approve
              </button>

              {/**If currently adding data (undefined id), hide delete button */}
              {appData.educationformdata.id && (
                <button
                  type="button"
                  className="btn btn-danger display-inline"
                  onClick={async () => {
                    let reply = window.confirm(
                      "Are you sure you want to delete this data?"
                    );
                    if (reply) {
                      let response = await deleteEducation(
                        appData.educationformdata.id
                      );
                      if (response) {
                        loadData();
                        document.getElementById("modalEducationForm").click();
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

export default EducationForm;
