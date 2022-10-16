import React from "react";
import { NavLink } from "react-router-dom";
import "./Style/style.scss";

export function Menu() {
  let activeStyle = ({isActive}) => {
    return{
        color : isActive ? "red" : "white"
    }
  }
    





  return (
    <div className="menu">
      <div className="continer">
        <div className="items">
          <div className="sec1">
            <p>LOGO</p>
          </div>
          <div className="sec2">
            <NavLink
              className="link"
              to="/"
              style={activeStyle}
            >
              HOME
            </NavLink>
            <NavLink
              className="link"
              to="/about"
              style={activeStyle}
            >
              ABOUT
            </NavLink>
            <NavLink
              className="link"
              to="/service"
              style={activeStyle}
            >
              SERVICES
            </NavLink>
            <NavLink
              className="link"
              to="/contact"
              style={activeStyle}
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
