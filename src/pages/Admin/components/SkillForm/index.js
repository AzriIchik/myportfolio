import React from "react";
import { useContext } from "react";
import { AppContext } from "appdata/appcontext";

// api
import {
  updateSkill,
  deleteSkill,
  addSkill,
  fetchSkill,
} from "api/portfolioserver";

const SkillForm = () => {
  const { appData, appDispatch, appAction } = useContext(AppContext);

  let handleInputChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    appDispatch({
      type: appAction.SET_SKILL_FORM,
      payload: { ...appData.skillformdata, [key]: value },
    });
  };

  let loadData = async () => {
    let skillData = await fetchSkill();
    appDispatch({
      type: appAction.SET_SKILL,
      payload: skillData,
    });
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
                value={appData.skillformdata.name}
                placeholder="SKILL NAME"
                style={{ color: "white" }}
              />
              <select
                className="form-select"
                name="proficiency"
                value={appData.skillformdata.proficiency}
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
                  /**If currently adding data (undefined id), hide delete button */
                  let response;

                  if (appData.skillformdata.id) {
                    response = await updateSkill(appData.skillformdata);
                  } else {
                    response = await addSkill(appData.skillformdata);
                  }

                  if (response) {
                    loadData();
                    document.getElementById("modalSkillForm").click();
                  } else {
                    console.log("ERROR: " + response);
                  }
                }}
              >
                Approve
              </button>
              {/**If currently adding data (undefined id), hide delete button */}
              {appData.skillformdata.id && (
                <button
                  type="button"
                  className="btn btn-danger display-inline"
                  onClick={async () => {
                    let reply = window.confirm(
                      "Are you sure you want to delete this data?"
                    );

                    if (reply) {
                      let response = await deleteSkill(
                        appData.skillformdata.id
                      );
                      if (response) {
                        loadData();
                        document.getElementById("modalSkillForm").click();
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

export default SkillForm;
