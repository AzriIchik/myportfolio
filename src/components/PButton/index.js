import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const PButton = (props) => {
  let { icon, name, handler } = props;

  return (
    <button
      className="btn btn-secondary rounded-pill py-3 px-4"
      onClick={handler}
    >
      <FontAwesomeIcon icon={icon || null } /> {name}
    </button>
  );
};

export default PButton;
