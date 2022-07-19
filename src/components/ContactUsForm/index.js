import React from "react";
import OutlineInput from "./OutlineInput";
import "./index.css";
import PButton from "../PButton";

const ContactUsForm = ({color}) => {

  return (
    <div className="contactus-form-container">
      <form>
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12 p-2">
              <OutlineInput
                id="email"
                type="text"
                label="Your Name"
                color={color}
              ></OutlineInput>
            </div>

            <div className="col-12 p-2">
              <OutlineInput
                id="phone-no"
                type="number"
                label="Phone"
                color={color}
              ></OutlineInput>
            </div>

            <div className="col-12 p-2">
              <OutlineInput
                id="email"
                type="textarea"
                label="Ask us you question"
                color={color}
              ></OutlineInput>
            </div>
          </div>
        </div>
        <PButton name={"SEND"} handler={(e)=>{ e.preventDefault();console.log("SEND DATA")}}></PButton>
      </form>
    </div>
  );
};

export default ContactUsForm;
