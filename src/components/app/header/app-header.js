import React from "react";
import "./app-header.css";
import logo from "../../../assets/images/favicon.png";
import { Link } from "react-router-dom";

const AppHeader = () => {
  function navToggle() {
    var x = document.getElementById("nav-links");

    if (x.className === "nav") {
      x.className += " mobile";
    } else {
      x.className = "nav";
    }
  }
  return (
    <header className="header">
      <nav className="navbar">
        <a className="navbar-brand logo_h" href="/">
          <img src={logo} alt="Sean Ward Personal Logo" />
        </a>
        <div className="nav-routes">
          <ul className="nav" id="nav-links">
            <li className="nav-item nav-icon">
              <a href="#" className="icon" onClick={navToggle}>
                <i className="fa fa-bars"></i>
              </a>
            </li>
            <Link to="/">
              <li className="nav-item active">Home</li>
            </Link>

            <Link to="/about">
              <li className="nav-item">About Me</li>
            </Link>
            <Link to="/experience">
              <li className="nav-item">Experience</li>
            </Link>
            <Link to="/portfolio">
              <li className="nav-item">Portfolio</li>
            </Link>
            <Link to="/contact">
              <li className="nav-item">Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
