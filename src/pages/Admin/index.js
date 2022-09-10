import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachographDigital,
  faFileAlt,
  faUser,
  faSignOut,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useContext } from "react";
import Dashboard from "./subpage/Dashboard";
import Projects from "./subpage/Projects";
import Profile from "./subpage/Profile";
import Login from "./subpage/Login";
import { AppContext } from "appdata/appcontext";
import { checkLogin } from "api/portfolioserver";

function Admin() {
  const { appData, appDispatch, appAction } = useContext(AppContext);
  const [showPage, setshowPage] = useState(0);

  let setPage = () => {
    switch (showPage) {
      case 1:
        sessionStorage.setItem("adminPageView", 1);
        return <Projects />;
      case 2:
        sessionStorage.setItem("adminPageView", 2);
        return <Profile />;
      case 3:
        sessionStorage.setItem("adminPageView", 3);
        return <Dashboard />;
    }
  };

  let initLogin = async () => {
    let authToken = await checkLogin();
    if (authToken) {
      appDispatch({
        type: appAction.SET_LOG_IN,
        payload: {
          login: true,
        },
      });
    } else {
      sessionStorage.removeItem("authkey-azriperisiben.me");
    }
  };

  useEffect(() => {
    initLogin();

    if ("adminPageView" in sessionStorage) {
      let pagenum = parseInt(sessionStorage.getItem("adminPageView"));
      setshowPage(pagenum);
    } else {
      setshowPage(3);
    }
  }, [appData.loggedin]);

  return (
    <div className="" id="home">
      {appData.loggedin ? (
        <NavAdmin showPage={showPage} setshowPage={setshowPage} />
      ) : (
        ""
      )}

      {/*PAGES*/}
      {appData.loggedin ? setPage() : <Login></Login>}
      {/*PAGES*/}
      <footer className="tm-footer row tm-mt-small">
        <div className="col-12 font-weight-light">
          <p className="text-center text-white mb-0 px-4 small">
            Copyright &copy; <b>2018</b> All rights reserved. Design:
            <a
              rel="nofollow noopener"
              href="https://templatemo.com"
              className="tm-footer-link"
            >
              Template Mo
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

const NavAdmin = ({ showPage, setshowPage }) => {
  const { appData, appDispatch, appAction } = useContext(AppContext);

  return (
    <nav className="navbar navbar-expand-xl p-0 shadow">
      <div className="container h-100">
        <a className="navbar-brand" href="index.html">
          <h1 className="tm-site-title mb-0">MY PORTFOLIO</h1>
        </a>
        <button
          className="navbar-toggler ml-auto mr-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarToggleExternalContent"
        >
          <ul className="navbar-nav mx-auto h-100">
            <li className="nav-item">
              <a
                className={showPage === 3 ? "nav-link active" : "nav-link"}
                onClick={() => {
                  setshowPage(3);
                }}
              >
                <span className="d-block m-1">
                  <FontAwesomeIcon icon={faTachographDigital} />
                </span>
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a
                className={showPage === 1 ? "nav-link active" : "nav-link"}
                onClick={() => {
                  setshowPage(1);
                }}
              >
                <span className="d-block m-1">
                  <FontAwesomeIcon icon={faFileAlt} />
                </span>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className={showPage === 2 ? "nav-link active" : "nav-link"}
                onClick={() => {
                  setshowPage(2);
                }}
              >
                <span className="d-block m-1">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => {
                  sessionStorage.removeItem("authkey-azriperisiben.me");

                  appDispatch({
                    type: appAction.SET_LOG_IN,
                    payload: {
                      login: false,
                    },
                  });
                }}
              >
                <span className="d-block m-1">
                  <FontAwesomeIcon icon={faSignOut} />
                </span>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Admin;
