import React from "react";
import "./skillbox.css";

const SkillBox = () => {
  return (
    <div className="container-fluid">
      <div className="row row-cols-md-2 row-cols-1">
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
      </div>
    </div>
  );
};

const Skill = () => {
  return (
    <div className="col p-0 pe-5 py-2">
      <div className="my-2">
        <span className="font-small py-1 m-0">Skill name</span>
        <span className="font-small py-1 m-0 float-end"> <span>Good: </span>100%</span>
      </div>
      <div className="progress">
        <div className="progress-bar"></div>
      </div>
    </div>
  );
};

export default SkillBox;
