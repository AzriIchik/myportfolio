import React from "react";
import { useEffect, useState, useContext } from "react";
import "./navbar.css";

const Navbar = () => {

  const [navAnimStyle, setnavAnimStyle] = useState({});

  useEffect(() => {
    window.addEventListener("scroll", function () {
      let scrollBarPos = this.scrollY;

      let navAnimStyleData = {
        container: {
          backgroundColor: "rgba(255, 255, 255, 1)",
          boxShadow: "0 2px 10px gray",
          color: "black"
        },
        ul: {
          transform: "translateY(0%)",
        }
      };

      if (scrollBarPos > 50) {
        setnavAnimStyle(navAnimStyleData);
      } else {
        setnavAnimStyle({});
      }
    });
  }, []);

  return (
    <>
      <div className="navbar__container px-6" style={navAnimStyle.container}>
        <ul style={navAnimStyle.ul} className="list-group">
          <li><a href="#aboutme">HELLO</a></li>
          <li><a href="#resume">RESUME</a></li>
          <li><a href="#portfolio">PORTFOLIO</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
      <div className="navbarmobile_container d-flex justify-content-evenly text-center">
        <div className="m-0 my-3 bd-highlight flex-fill"><a href="#aboutme">HELLO</a></div>
        <div className="m-0 my-3 bd-highlight flex-fill"><a href="#resume">RESUME</a></div>
        <div className="m-0 my-3 bd-highlight flex-fill"><a href="#portfolio">PORTFOLIO</a></div>
        <div className="m-0 my-3 bd-highlight flex-fill"><a href="#contact">CONTACT</a></div>
      </div>
    </>
  );
};

export default Navbar;
