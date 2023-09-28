import React from "react";
import "./index.css";
import { AppContext } from "appdata/appcontext";
import { loginUser } from "api/portfolioserver";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const { appData, appDispatch, appAction } = React.useContext(AppContext);
  const [loginData, setloginData] = React.useState({
    email: "",
    password: "",
  });

  const [showPassword, setshowPassword] = React.useState(false);
  const [showError, setshowError] = React.useState(false);

  let handleInputChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;

    setloginData({ ...loginData, [key]: value });
  };


  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center" style={{ height: "85vh" }}>
        <div className="align-self-center" style={{ width: "400px" }}>
          <div className="login-container p-4">
            <h2 className="text-light text-center my-4">
              {" "}
              <b>LOGIN</b>{" "}
            </h2>
            <form>
              <input
                type="text"
                className="form-control mb-3"
                name="email"
                onChange={handleInputChange}
                value={loginData.email}
                placeholder="EMAIL"
                style={{ color: "white" }}
              />

              <div className="position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  name="password"
                  onChange={handleInputChange}
                  value={loginData.password}
                  placeholder="PASSWORD"
                  style={{ color: "white", position: "relative" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "calc(50% - 13px)",
                    right: "15px",
                  }}
                >
                  {showPassword ? (
                    <button
                      className="btn position-absolute p-0"
                      style={{ top: 0, right: "20px" }}
                    >
                      <FontAwesomeIcon
                        className="ms-1"
                        style={{ color: "white" }}
                        icon={faEye}
                        onClick={(e) => {
                          e.preventDefault();
                          setshowPassword(false);
                        }}
                      />
                    </button>
                  ) : (
                    <button
                      className="btn position-absolute p-0"
                      style={{ top: 0, right: "20px" }}
                    >
                      <FontAwesomeIcon
                        className="ms-1"
                        style={{ color: "white" }}
                        icon={faEyeSlash}
                        onClick={(e) => {
                          e.preventDefault();
                          setshowPassword(true);
                        }}
                      />
                    </button>
                  )}
                </div>
              </div>

              <span className={showError ? "d-inline" : "d-none"} style={{color:"red"}} >Insert a proper login credentials</span>

              <div className="text-center mt-4">
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={async () => {
                    let response = await loginUser(loginData);
                    if (response) {
                      setshowError(false);
                      appDispatch({
                        type: appAction.SET_LOG_IN,
                        payload: {
                          login: true,
                        },
                      });
                    } else {
                      console.log("fail email");
                      setshowError(true);
                    }
                  }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
