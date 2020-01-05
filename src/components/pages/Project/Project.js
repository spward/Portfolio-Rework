import React from "react";
import "./Project.scss";
import weather from "../../../assets/images/projects/weather.png";

const Project = ({ props }) => {
  return (
    <div className="project">
      <h3>Test Title</h3>
      <img
        src={weather}
        alt="The projects visual representation"
        className="project__photo"
      />
      <div className=" container container-fluid project__details">
        <div className="row">
          <div className="col-md-6">
            <div className="project__actions">
              <a href="#" className="link">
                <i class="fas fa-desktop"></i>
                <span>Live Preview</span>
              </a>
              <a href="#" className="link">
                <i class="fas fa-code-branch"></i>
                <span>View Source</span>
              </a>
            </div>
            <div className="project__technology">
              <h5>technologies Used</h5>
              <ul className="technology__list col-md-4">
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>Typescript</li>
                <li>ExpressJS</li>
              </ul>
            </div>
            <div className="project__features">
              <h5>Notable Features</h5>
              <ul>
                <li>Registration</li>
                <li>Login</li>
                <li>Account Confirmation</li>
                <li>Token Authentication with JSON Web Token</li>
                <li>Automatic Image resiging on images over 1600px wide</li>
                <li>select multiple items to perform batch operations</li>
                <li>Type photo colection name to confirm delete</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project__role">
              <h5>My Roles</h5>
              <p>
                In this project I oversaw the entire SDLC. I met regularly with
                the client discussing project requirements, vision and end
                goals, while working in a scrum like manner.
              </p>
            </div>
            <div className="project__difficulties">
              <h5>Project Difficulties</h5>
              <p>
                This project really tested my skills in architecting out a
                workable solution. In the beginning of development, the first
                thing I did was starting up an express server. With no plan of
                action, I wasted two weeks worth of work before I was forced to
                start over.
              </p>
            </div>
            <div className="project__solution">
              <h5>My Solution</h5>
              <p>
                To solve this struggle, I decided to kick it old school with
                some good ol' Object Oriented Design and Analysis. Following a
                planning structure, I was able to improve my work efficency and
                reach my set sprints.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
