import React from "react";
import logo from "../logo.svg";
import "../App.css";

const Header = () => {
  return (
    <div className="App-header pt-4">
      <img src={logo} className="App-logo " alt="logo" />
      <h2>React Boilerplate</h2>
    </div>
  );
};

export default Header;
