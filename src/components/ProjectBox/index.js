import React from "react";
import porjectImg from "../../assets/img/imgproject.png";
import "./projectbox.css";

let test = [1, 2, 3, 4];

const ProjectBox = () => {
  return (
    <div className="row project__container mb-5">
      <div className="col-lg-4 p-0">
        <div
          className="project__data"
          style={{ backgroundImage: `url(${porjectImg})` }}
        ></div> 
      </div>
      <div className="col-lg-8 p-5">
        <p className="fw-bold">PROJECT NAME</p>
        <p>
          Do answered bachelor occasion in of offended no concerns. Supply
          worthy warmth branch of no ye. Voice tried known to as my to. Though
          wished merits or be. Alone visit use these smart rooms ham.
        </p>
        <span className="font-small">TECH STACK: </span>
        <div className="d-flex flex-wrap">
          <div class="bd-highlight me-2 project__tech-stack">JQuery</div>
          <div class="bd-highlight me-2 project__tech-stack">JQUERY</div>
          <div class="bd-highlight me-2 project__tech-stack">JQUERY</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
