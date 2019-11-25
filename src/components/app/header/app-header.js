import React from "react";
import "./app-header.css";
import logo from "../../../assets/images/favicon.png";
import { Link } from "react-router-dom";

const AppHeader = () => {
  function navToggle() {
    var x = document.querySelector(".nav");

    if (x.className === "nav") {
      x.className += " mobile";
    } else {
      x.className = "nav";
    }
  }

  return (
    <header className="header">
      <div className="navbar">
        <Link to="/" className="nav__brand">
          <img
            src={logo}
            className="nav__brand__icon"
            alt="Sean Ward Personal Logo"
          />
        </Link>
        <button className="icon" onClick={navToggle}>
          <i className="fa fa-bars"></i>
        </button>
        <ul className="nav" id="nav__links">
          <Link to="/" onClick={navToggle}>
            <li className="nav__links__item">Home</li>
          </Link>

          <Link to="/about" onClick={navToggle}>
            <li className="nav__links__item">About Me</li>
          </Link>
          <Link to="/experience" onClick={navToggle}>
            <li className="nav__links__item">Experience</li>
          </Link>
          <Link to="/portfolio" onClick={navToggle}>
            <li className="nav__links__item">Portfolio</li>
          </Link>
          <Link to="/contact" onClick={navToggle}>
            <li className="nav__links__item">Contact</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default AppHeader;
