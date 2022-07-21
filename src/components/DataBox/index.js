import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import "./databox.css";
import PButton from "../PButton";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const DataBox = (props) => {
  const [viewDescription, setviewDescription] = useState(false);

  let {cert_url, desc, more_desc, place, year, position} = props.data;

  return (
    <div className="databox__container">
      <div className="ind" />
      <h5 className="m-0 fw-bold text-primary2">
        {place || "Place"}
      </h5>
      <p className="font-small my-2"> {year || "year"} </p>
      <p className="fw-bold mb-1">{position}</p>
      <p className="mb-0"> {desc || "description"} </p>
      <button
        className="font-small fw-bold btninfo"
        onClick={() => {
          setviewDescription(!viewDescription);
        }}
      >
        More Info...
      </button>
      <Collapse in={viewDescription}>
        <div className="font-small">
          {more_desc} <br/>
          {cert_url ? <PButton icon={faDownload} name={"Download Cert"} handler={()=>{window.open(cert_url,'_blank')}}></PButton> : ""}
        </div>
      </Collapse>
    </div>
  );
};

export default DataBox;
