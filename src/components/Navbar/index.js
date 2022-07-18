import React from "react";
import { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [navAnimStyle, setnavAnimStyle] = useState({});

  useEffect(() => {
    window.addEventListener("scroll", function () {
      let scrollBarPos = this.scrollY;

      let navAnimStyleData = {
        container: {
          backgroundColor: "rgba(255, 255, 255, 1)",
          color: "black",
          boxShadow: "0 2px 10px gray"
        },
        ul: {
          transform: "translateY(0%)",
        },
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
        <ul style={navAnimStyle.ul}>
          <li>HELLO</li>
          <li>RESUME</li>
          <li>PORTFOLIO</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
