import React from "react";
import "./app-welcome.scss";
import { Link } from "react-router-dom";
const AppWelcome = () => {
  return (
    <div className="welcome container container-fluid">
      <div className="welcome__contents">
        <h5>Hello I'm</h5>
        <h2>Sean Ward</h2>
        <p>
          Welcome to my portfolio. Listed below is a few of my social media
          profiles and a little more about who I am.
        </p>
        <div className="social">
          <ul className="list">
            <li>
              <a href="http://www.github.com/spward" target="blank">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sward7/" target="blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="https://www.dribbble.com/Denial" target="blank">
                <i className="fab fa-dribbble"></i>
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com/users/8120909/sean"
                target="blank"
              >
                <i className="fab fa-stack-overflow"></i>
              </a>
            </li>
          </ul>
        </div>
        <Link to="/portfolio">
          <div className="btn">My Portfolio</div>
        </Link>
      </div>
    </div>
  );
};

export default AppWelcome;
