import React from "react";
import { useContext } from "react";
import { AppContext } from "appdata/appcontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import {
  addProjectImage,
  fetchProject,
  deleteProjectImage,
} from "api/portfolioserver";

const MultiImageForm = () => {
  const { appData, appDispatch, appAction } = useContext(AppContext);

  return (
    <div className="container-fluid mb-3">
      <div className="row">
        <div className="col-md-4 p-0">
          {appData.projectformdata.img_url1 ? (
            <FilledImageInput
              url={appData.projectformdata.img_url1}
              id={1}
            ></FilledImageInput>
          ) : (
            <EmptyImageInput id={1}></EmptyImageInput>
          )}
        </div>

        <div className="col-md-4 p-0">
          {appData.projectformdata.img_url2 ? (
            <FilledImageInput
              url={appData.projectformdata.img_url2}
              id={2}
            ></FilledImageInput>
          ) : (
            <EmptyImageInput id={2}></EmptyImageInput>
          )}
        </div>

        <div className="col-md-4 p-0">
          {appData.projectformdata.img_url3 ? (
            <FilledImageInput
              url={appData.projectformdata.img_url3}
              id={3}
            ></FilledImageInput>
          ) : (
            <EmptyImageInput id={3}></EmptyImageInput>
          )}
        </div>
      </div>
    </div>
  );
};

const FilledImageInput = ({ url, id }) => {
  const { appData, appDispatch, appAction } = useContext(AppContext);

  return (
    <div
      className="form-project-item position-relative"
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <button
        className="btn position-absolute p-0"
        style={{ top: 0, right: 0 }}
      >
        <FontAwesomeIcon
          className="ms-1"
          style={{ color: "red", fontSize: "2rem" }}
          icon={faSquareXmark}
          onClick={async (e) => {
            e.preventDefault();
            let response = await deleteProjectImage(
              appData.projectformdata.id,
              id
            );

            if (response) {
              let projectData = await fetchProject();
              await appDispatch({
                type: appAction.SET_PROJECT,
                payload: projectData,
              });
            } else {
              console.log("fail?");
            }

          }}
        />
      </button>
    </div>
  );
};

const EmptyImageInput = ({ id }) => {
  const { appData, appDispatch, appAction } = useContext(AppContext);

  return (
    <>
      <div className="form-project-item position-relative">
        <button
          className="btn position-absolute p-0"
          style={{ top: 0, right: 0 }}
        >
          <FontAwesomeIcon
            className="ms-1"
            style={{ color: "red", fontSize: "2rem" }}
            icon={faSquarePlus}
            onClick={(e) => {
              e.preventDefault();
              let fileInput = document.getElementById(`imginput${id}`);
              fileInput.click();
            }}
          />
        </button>
      </div>
      <input
        type="file"
        id={`imginput${id}`}
        style={{ height: "0px" }}
        onChange={async () => {
          let fileInput = document.getElementById(`imginput${id}`);
          let response = await addProjectImage(
            appData.projectformdata.id,
            id,
            fileInput.files[0]
          );

          if (response) {
            let projectData = await fetchProject();
            await appDispatch({
              type: appAction.SET_PROJECT,
              payload: projectData,
            });
          } else {
            console.log("fail?");
          }
        }}
      ></input>
    </>
  );
};

export default MultiImageForm;
