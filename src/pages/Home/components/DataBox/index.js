import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import "./databox.css";
import PButton from "../PButton";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const DataBox = (props) => {
  const [viewDescription, setviewDescription] = useState(true);

  let {cert_url, desc, more_desc, place, start_date, end_date, position} = props.data;

  return (
    <div className="databox__container">
      <div className="ind" />
      <h5 className="m-0 fw-bold text-primary2">
        {place || "Place"}
      </h5>
      <p className="font-small my-2"> {start_date || "year"} <b>---</b> {end_date || "year"} </p>
      <p className="fw-bold mb-1">{position}</p>
      <p className="mb-0"> {desc || "description"} </p>
    </div>
  );
};

export default DataBox;
