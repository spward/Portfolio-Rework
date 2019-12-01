import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <div className="experience container container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <h3 className="experience__title">Education</h3>
          <div className="experience__card">
            <h4>
              Coastal Carolina University | Bachelor of Science in Information
              System
            </h4>
            <ul>
              <li>Minor in Graphic Design</li>
              <li>Winner of the Carolina Design Clash</li>
              <li>Dean's List</li>
            </ul>
          </div>

          <div className="experience__card">
            <h4>
              Horry Georgetown Technical College | Associate in Applied Science
            </h4>
            <ul>
              <li>Computer Technology, Programming Emphasis</li>
            </ul>
          </div>
        </div>

        <div className="col-lg-6">
          <h3 className="experience__title">Work Experience</h3>
          <div className="experience__card">
            <h4>Krypto Media One</h4>
            <li>
              Develop secure authentication systems using JavaScript, and PHP
            </li>
            <li>
              Design corporate logos and website layouts using Photoshop and
              Illustrator
            </li>
            <li>Creating applications with frameworks like VueJS</li>
            <li>Style modern websites with SASS to create response websites</li>
          </div>

          <div className="experience__card">
            <h4>Girls Varsity Head Soccer Coach</h4>
            <li>Being a leader and role model to those around me</li>
            <li>Schedule and coordinate meetings, practices, and games</li>
            <li>Prepare lesson plans and problem solve mistakes</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
