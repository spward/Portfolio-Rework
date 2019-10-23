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
        <Link to="/">
          <img
            src={logo}
            className="navbar-brand"
            alt="Sean Ward Personal Logo"
          />
        </Link>
        <button className="icon" onClick={navToggle}>
          <i className="fa fa-bars"></i>
        </button>
        <div className="nav-routes">
          <ul className="nav" id="nav-links">
            <Link to="/" onClick={navToggle}>
              <li className="nav-item active">Home</li>
            </Link>

            <Link to="/about" onClick={navToggle}>
              <li className="nav-item">About Me</li>
            </Link>
            <Link to="/experience" onClick={navToggle}>
              <li className="nav-item">Experience</li>
            </Link>
            <Link to="/portfolio" onClick={navToggle}>
              <li className="nav-item">Portfolio</li>
            </Link>
            <Link to="/contact" onClick={navToggle}>
              <li className="nav-item">Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
