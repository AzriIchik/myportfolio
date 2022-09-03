import React from "react";
import { useContext } from "react";
import { AppContext } from "appdata/appcontext";

// api
import {
  updateEmployment,
  addEmployment,
  deleteEmployment,
  fetchEmployment,
} from "api/portfolioserver";

const EmploymentForm = () => {
  const { appData, appDispatch, appAction } = useContext(AppContext);

  let handleInputChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    appDispatch({
      type: appAction.SET_EMPLOYMENT_FORM,
      payload: { ...appData.employmentformdata, [key]: value },
    });
  };

  let loadData = async () => {

    let employmentData = await fetchEmployment();
    console.log(employmentData);
    appDispatch({
      type: appAction.SET_EMPLOYMENT,
      payload: employmentData,
    });
  };

  return (
    <div className="modal fade" id="modalEmploymentForm">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {" "}
              {appData.employmentformdata.id ? "Edit Data" : "Add Data"}{" "}
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
                value={appData.employmentformdata.place}
                placeholder="PLACE"
                style={{ color: "white" }}
              />

              <div className="mb-3">
                <input
                  type="date"
                  name="start_date"
                  onChange={handleInputChange}
                  value={appData.employmentformdata.start_date}
                  min="2018-01-01"
                  max="2040-12-12"
                  style={{ padding: "10px 9px" }}
                />
                <span className="fw-bolder mx-2">---</span>
                <input
                  type="date"
                  name="end_date"
                  onChange={handleInputChange}
                  value={appData.employmentformdata.end_date}
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
                value={appData.employmentformdata.position}
                placeholder="POSITION"
                style={{ color: "white" }}
              />

              <textarea
                className="form-control mb-3"
                style={{ height: "20vh" }}
                name="desc"
                onChange={handleInputChange}
                value={appData.employmentformdata.desc}
                placeholder="DESCRIPTION"
                rows="6"
              ></textarea>

              <textarea
                className="form-control mb-3"
                style={{ height: "20vh" }}
                name="more_desc"
                onChange={handleInputChange}
                value={appData.employmentformdata.more_desc}
                placeholder="MORE DESCRIPTION"
                rows="6"
              ></textarea>

              <textarea
                className="form-control mb-3"
                style={{ height: "15vh" }}
                name="cert_url"
                onChange={handleInputChange}
                value={appData.employmentformdata.cert_url}
                placeholder="URL CERT"
                rows="3"
              ></textarea>

              <button
                type="button"
                className="btn btn-primary"
                onClick={async () => {
                  /**If currently adding data (undefined id), hide delete button */
                  let response;

                  if (appData.employmentformdata.id) {
                    response = await updateEmployment(
                      appData.employmentformdata
                    );
                  } else {
                    response = await addEmployment(appData.employmentformdata);
                  }

                  if (response) {
                    loadData();
                    document.getElementById("modalEmploymentForm").click();
                  } else {
                    console.log("ERROR: " + response);
                  }
                }}
              >
                Approve
              </button>

              {/**If currently adding data (undefined id), hide delete button */}
              {appData.employmentformdata.id && (
                <button
                  type="button"
                  className="btn btn-danger display-inline"
                  onClick={async () => {
                    let reply = window.confirm(
                      "Are you sure you want to delete this data?"
                    );

                    if (reply) {
                      let response = await deleteEmployment(
                        appData.employmentformdata.id
                      );
                      if (response) {
                        loadData();
                        document.getElementById("modalEmploymentForm").click();
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

export default EmploymentForm;
