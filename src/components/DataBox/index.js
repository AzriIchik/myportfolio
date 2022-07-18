import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import "./databox.css";

const DataBox = () => {
  const [viewDescription, setviewDescription] = useState(false);

  return (
    <div className="databox__container">
      <div className="ind" />
      <h5 className="m-0 fw-bold text-primary2">
        UNIVERSITI PENDIDIKAN SULTAN IDRIS
      </h5>
      <p className="font-small my-2">2002 - 2022</p>
      <p className="fw-bold mb-1">Bachelor Computer Engineering Lorem</p>
      <p className="mb-0">
        Student, Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed
        do eiusmod tempor incididunt ut
      </p>
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
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
    </div>
  );
};

export default DataBox;
