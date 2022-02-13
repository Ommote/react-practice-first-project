import React from "react";
import "./Nav.css";
import logo from "./logo.PNG";

const Nav = () => {
  return (
    <div className="nav-container">
      <img src={logo} alt="" />
      <h1>ReactFacts</h1>
      <h2>React Course - Project 1</h2>
    </div>
  );
};

export default Nav;
