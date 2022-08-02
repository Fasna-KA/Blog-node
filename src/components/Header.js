import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <div className="logo-container">
          <span>The</span>
          <h1>Siren</h1>
        </div>
        <div className="navlinks-container">
          <ul>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? {color: "brown", padding:"5px"} : {color:"black"})}
                className="link"
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink style={({ isActive }) => (isActive ? {color: "brown", padding:"5px"} : {color:"black"})} className="link" to="/bollywood">
                Bollywood
              </NavLink>
            </li>

            <li>
              <NavLink style={({ isActive }) => (isActive ? {color: "brown", padding:"5px"} : {color:"black"})} className="link" to="/technology">
                Technology
              </NavLink>
            </li>

            <li>
              <NavLink style={({ isActive }) => (isActive ? {color: "brown", padding:"5px"} : {color:"black"})} className="link" to="/hollywood">
                Hollywood
              </NavLink>
            </li>

            <li>
              <NavLink style={({ isActive }) => (isActive ? {color: "brown", padding:"5px"} : {color:"black"})} className="link" to="/fitness">
                Fitness
              </NavLink>
            </li>

            <li>
              <NavLink style={({ isActive }) => (isActive ? {color: "brown", padding:"5px"} : {color:"black"})} className="link" to="/food">
                Food
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;