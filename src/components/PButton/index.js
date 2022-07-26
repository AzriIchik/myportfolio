import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const PButton = (props) => {
  let { icon, name, handler } = props;

  return (
    <button
      className="btn btn-secondary rounded-pill my-2 py-3 px-4 btn-anim"
      style={{fontSize:"inherit"}}
      onClick={handler}
    >
      {(icon && <FontAwesomeIcon icon={icon} />) || " "}
      {" "+name}
    </button>
  );
};
 
export default PButton;
