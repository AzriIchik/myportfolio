import React from "react";
import "./projectbox.css";

const ProjectBox = (props) => {
  let { img_url, name, desc, tech_stack, link } = props.data;

  let projectLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="row project__container mb-5">
      <div className="col-lg-4 p-0">
        <div
          className="project__data"
          style={{ backgroundImage: `url(${img_url})` }}
        ></div>
      </div>
      <div className="col-lg-8 p-3 p-md-5 position-relative">
        <p className="fw-bold"> {name || "PROJECT NAME"} </p>

        <p>{desc || "PROJECT DESCRIPTION"}</p>

        <span className="font-small">TECH STACK: </span>
        <div className="d-flex flex-wrap">
          {tech_stack.map((data, index) => {
            return (
              <div className="bd-highlight me-2 project__tech-stack">
                {data}
              </div>
            );
          })}
        </div>
        <p className="py-2">
          <a
            className="project__link font-small fw-bold"
            onClick={() => {
              projectLink(link);
            }}
          >
            {link}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProjectBox;
