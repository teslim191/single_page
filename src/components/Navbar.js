import React from "react";
import reactLogo from "../images/react-logo.png";

export const Navbar = () => {
  return (
    <header className="nav">
      <div className="left-nav">
      <img src={reactLogo} alt='react' />
      <h1>ReactFacts</h1>
      </div>
      <h3>ReactCourse - Project 1</h3>
    </header>
  );
};
