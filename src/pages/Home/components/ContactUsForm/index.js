import React, { useRef, useState } from "react";
import "./index.css";
import OutlineInput from "./OutlineInput";
import PButton from "../PButton";
import { sendLetter } from "api/submitHandler";

const ContactUsForm = ({ color }) => {
  let name = useRef();
  let phoneno = useRef();
  let textenquire = useRef();

  const [sendBtn, setsendBtn] = useState("SEND");

  const [alert, setAlert] = useState({
    nameAlert: undefined,
    phonenoAlert: undefined,
    textenquire: undefined,
  });

  let validateState = () => {
    let nameValue = name.current.value;
    let phonenoValue = phoneno.current.value;
    let textValue = textenquire.current.value;

    var term = "sample1";
    var phoneRegEx = new RegExp(
      "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
    );

    let isValid = true;
    if (nameValue == undefined || nameValue == "") isValid = false;
    if (
      phonenoValue == undefined ||
      phonenoValue == "" ||
      !phoneRegEx.test(phonenoValue)
    )
      isValid = false;
    if (textValue == undefined || textValue == "") isValid = false;

    setAlert((state) => {
      let newState = state;

      if (nameValue == undefined || nameValue == "") {
        newState = { ...newState, nameAlert: "Please provide a proper name" };
      }

      if (
        phonenoValue == undefined ||
        phonenoValue == "" ||
        !phoneRegEx.test(phonenoValue)
      ) {
        newState = {
          ...newState,
          phonenoAlert: "Please provide a proper phone number",
        };
      }
      if (textValue == undefined || textValue == "") {
        newState = { ...newState, textenquire: "Don't leave an empty massage" };
      }

      return newState;
    });

    return isValid;
  };

  return (
    <div className="contactus-form-container">
      <form>
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12 py-2">
              <OutlineInput
                id="name"
                refs={name}
                type="text"
                label="Your Name"
                color={color}
                alertmassage={alert.nameAlert}
                unalert={() => {
                  setAlert({ ...alert, nameAlert: undefined });
                }}
              ></OutlineInput>
            </div>

            <div className="col-12 py-2">
              <OutlineInput
                id="phone-no"
                refs={phoneno}
                type="number"
                label="Phone"
                alertmassage={alert.phonenoAlert}
                unalert={() => {
                  setAlert({ ...alert, phonenoAlert: undefined });
                }}
              ></OutlineInput>
            </div>

            <div className="col-12 py-2">
              <OutlineInput
                id="textenquire"
                refs={textenquire}
                type="textarea"
                label="Ask us you question"
                color={color}
                alertmassage={alert.textenquire}
                unalert={() => {
                  setAlert({ ...alert, textenquire: undefined });
                }}
              ></OutlineInput>
            </div>
          </div>
        </div>
        <PButton
          name={sendBtn}
          handler={async (e) => {
            e.preventDefault();

            validateState();

            if (validateState()) {
              setsendBtn("Sending letter....");

              let response = await sendLetter({
                name: name.current.value,
                phoneno: phoneno.current.value,
                textenquire: textenquire.current.value,
              });

              if (response) {
                name.current.value = "";
                phoneno.current.value = "";
                textenquire.current.value = "";

                setsendBtn("Thank you, I'll contact back later");
              } else {
                setsendBtn("Sorry letter failed to send, try email");
              }

              setTimeout(() => {
                setsendBtn("SEND");
              }, 2000);
            }
          }}
        ></PButton>
      </form>
    </div>
  );
};

export default ContactUsForm;
