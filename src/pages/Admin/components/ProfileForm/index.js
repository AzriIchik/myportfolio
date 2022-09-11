import React from "react";
import { useContext } from "react";
import { AppContext } from "appdata/appcontext";

// api
import { updateProfile, fetchProfile } from "api/portfolioserver";

const ProfileForm = () => {
  const { appData, appDispatch, appAction } = useContext(AppContext);

  let handleInputChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    appDispatch({
      type: appAction.SET_PROFILE_FORM,
      payload: { ...appData.profileformdata, [key]: value },
    });
  };

  let loadData = async () => {
    let profileData = await fetchProfile();
    appDispatch({
      type: appAction.SET_PROFILE,
      payload: profileData,
    });
  };

  return (
    <div className="modal fade" id="modalProfileForm">
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
                value={appData.profileformdata.name}
                placeholder="NAME"
                style={{ color: "white" }}
              />

              <input
                type="text"
                className="form-control mb-3"
                name="title"
                onChange={handleInputChange}
                value={appData.profileformdata.title}
                placeholder="TITLE"
                style={{ color: "white" }}
              />

              <input
                type="number"
                max={75}
                className="form-control mb-3"
                name="age"
                onChange={handleInputChange}
                value={appData.profileformdata.age}
                placeholder="AGE"
                style={{ color: "white" }}
              />

              <input
                type="text"
                className="form-control mb-3"
                name="phoneno"
                onChange={handleInputChange}
                value={appData.profileformdata.phoneno}
                placeholder="PHONE NO"
                style={{ color: "white" }}
              />

              <input
                type="text"
                className="form-control mb-3"
                name="email"
                onChange={handleInputChange}
                value={appData.profileformdata.email}
                placeholder="EMAIL"
                style={{ color: "white" }}
              />

              <input
                type="text"
                className="form-control mb-3"
                name="resumeurl"
                onChange={handleInputChange}
                value={appData.profileformdata.resumeurl}
                placeholder="RESUME URL"
                style={{ color: "white" }}
              />

              <textarea
                className="form-control mb-3"
                style={{ height: "15vh" }}
                name="address"
                onChange={handleInputChange}
                value={appData.profileformdata.address}
                placeholder="ADDRESS"
                rows="6"
              ></textarea>

              <textarea
                className="form-control mb-3"
                style={{ height: "20vh" }}
                name="aboutme"
                onChange={handleInputChange}
                value={appData.profileformdata.aboutme}
                placeholder="ABOUT ME"
                rows="6"
              ></textarea>

              <textarea
                className="form-control mb-3"
                style={{ height: "20vh" }}
                name="aboutresume"
                onChange={handleInputChange}
                value={appData.profileformdata.aboutresume}
                placeholder="ABOUT RESUME"
                rows="6"
              ></textarea>

              <button
                type="button"
                className="btn btn-primary"
                onClick={async () => {
                  let response;

                  response = await updateProfile(appData.profileformdata);

                  if (response) {
                    loadData();
                    document.getElementById("modalProfileForm").click();
                  } else {
                    console.log("ERROR: " + response);
                  }
                }}
              >
                Approve
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
