import React from "react";
import "./skillbox.css";

const SkillBox = (props) => {

  let { name, proficiency } = props.data;
  let progressBar = { width: "0%" };

  let setProficiency = () => {
    switch (proficiency) {
      case 1:
        progressBar = { width: "20%" };
        return <span>Really Poor: 20%</span>;
      case 2:
        progressBar = { width: "40%" };
        return <span>Poor: 40%</span>;
      case 3:
        progressBar = { width: "50%" };
        return <span>Average: 50%</span>;
      case 4:
        progressBar = { width: "80%" };
        return <span>Good: 80%</span>;
      case 5:
        progressBar = { width: "100%" };
        return <span>Very Good: 100%</span>;
    }
  };

  return (
    <div className="col p-0 pe-5 py-2">
      <div className="my-2">
        <span className="font-small py-1 m-0 fw-bold"> {name} </span>
        <span className="font-small py-1 m-0 float-end">
          {setProficiency()}
        </span>
      </div>
      <div className="progress">
        <div className="progress-bar" style={progressBar}></div>
      </div>
    </div>
  );
};

export default SkillBox;
