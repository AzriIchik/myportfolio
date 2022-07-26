import React from "react";
import "./index.css";

const OutlineInput = ({
  label,
  type,
  id,
  color,
  refs,
  alertmassage,
  unalert,
}) => {
  color = alertmassage ? "red" : "white";

  return (
    <>
      <div style={{ position: "relative", zIndex: 1 }}>
        {type != "textarea" ? (
          <input
            ref={refs}
            type={type || "text"}
            id={id || "no-id"}
            className="outline-input-style"
            style={{ border: "1px solid " + color, color: color }}
            placeholder=" "
            autoComplete="off"
            onChange={() => {
              unalert();
            }}
          />
        ) : (
          <textarea
            name="textarea"
            ref={refs}
            className="outline-input-style textarea-style"
            style={{ border: "1px solid " + color, color: color }}
            placeholder=" "
            rows="4"
            onChange={() => {
              unalert();
            }}
          ></textarea>
        )}

        {alertmassage ? (
          <span className="font-small position-absolute" style={{ color: color, right:15, bottom:"calc(50% - 10px)" }}>
            {" "}
            {alertmassage}{" "}
          </span>
        ) : (
          ""
        )}

        {/**Label ele*/}
        <div className="d-flex bd-highlight p-0 m-0 outline-label-container">
          <div
            className="bd-highlight border-focus1"
            style={{ borderTop: "1px solid " + color }}
          ></div>
          <div
            className="bd-highlight px-1 outline-label"
            style={{ color: color }}
          >
            {label}
          </div>
          <div
            className="flex-grow-1 bd-highlight"
            style={{ borderTop: "1px solid " + color }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default OutlineInput;
