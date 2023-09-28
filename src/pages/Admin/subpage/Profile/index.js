import React from "react";
import { useContext } from "react";
import { AppContext } from "appdata/appcontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileForm from "pages/Admin/components/ProfileForm";
import { faPen, faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { addProfileImage, fetchProfile } from "api/portfolioserver";

const Profile = () => {
  const { appData, appDispatch, appAction } = useContext(AppContext);

  return (
    <div className="container main-container mt-5">
      <div className="row tm-content-row">
        <div className="col-12 tm-block-col" style={{ position: "relative" }}>
          <div style={{ position: "absolute", right: "50px", top: "25px" }}>
            <h2
              className="tm-block-title add-btn"
              data-bs-toggle="modal"
              data-bs-target="#modalProfileForm"
              onClick={() => {
                appDispatch({
                  type: appAction.SET_PROFILE_FORM,
                  payload: appData.profiledata,
                });
              }}
            >
              <FontAwesomeIcon icon={faPen} />
            </h2>
          </div>
          <div
            className="tm-bg-primary-dark tm-block tm-block-taller"
            style={{ minHeight: "150vh" }}
          >
            <div className="d-flex justify-content-between">
              <div className="mx-auto mx-md-0">
                <h2 className="tm-block-title">Profile</h2>
              </div>
            </div>

            <div className="container-fluid p-0">
              <div className="row">
                <div className="col-auto mx-auto mx-md-0 position-relative">
                  <img
                    className="mx-auto"
                    src={`https://${appData.profiledata.imgurl}`}
                    style={{ width: "250px" }}
                  />
                  <button
                    className="btn position-absolute p-0"
                    style={{ top: 0, right: "15px" }}
                    onClick={(e) => {
                      let fileInput =
                        document.getElementById("profileimginput");
                      fileInput.click();
                    }}
                  >
                    <FontAwesomeIcon
                      className="ms-1"
                      style={{ color: "red", fontSize: "2rem" }}
                      icon={faPenSquare}
                    />
                  </button>
                  <input
                    type="file"
                    id={"profileimginput"}
                    style={{ height: "0px", display: "none" }}
                    onChange={async () => {
                      let fileInput =
                        document.getElementById("profileimginput");
                      let response = await addProfileImage(fileInput.files[0]);
                      if (response) {
                        let profileData = await fetchProfile();
                        await appDispatch({
                          type: appAction.SET_PROFILE,
                          payload: profileData,
                        });
                      } else {
                        console.log("fail?");
                      }
                    }}
                  ></input>
                </div>
                <div className="col-md-6">
                  <div
                    className="bd-highlight flex-grow-1"
                    style={{ color: "white" }}
                  >
                    <h2> {appData.profiledata.name} </h2>
                    <p className="text-opacity">{appData.profiledata.title}</p>

                    <dl className="section1__biodata py-4">
                      <dt className="text-opacity">AGE:</dt>{" "}
                      <dd>{appData.profiledata.age}</dd>
                      <dt className="text-opacity">PHONE:</dt>{" "}
                      <dd>
                        {" "}
                        <a
                          className="alink"
                          href={"tel:" + appData.profiledata.phoneno}
                        >
                          {appData.profiledata.phoneno}
                        </a>{" "}
                      </dd>
                      <dt className="text-opacity">EMAIL:</dt>{" "}
                      <dd>
                        <a
                          className="alink"
                          href={"mailto:" + appData.profiledata.email}
                        >
                          {appData.profiledata.email}
                        </a>
                      </dd>
                      <dt className="text-opacity">ADDRESS:</dt>{" "}
                      <dd>{appData.profiledata.address}</dd>
                    </dl>

                    <h2> ABOUT ME </h2>
                    <p className="text-opacity">
                      {appData.profiledata.aboutme}
                    </p>

                    <h2> ABOUT RESUME </h2>
                    <p className="text-opacity">
                      {appData.profiledata.aboutresume}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProfileForm></ProfileForm>
    </div>
  );
};

export default Profile;
