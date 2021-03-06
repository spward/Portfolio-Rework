import React from "react";
import "./Project.scss";
import projects from "../../../assets/projects.json";

const Project = ({ match }) => {
  const project = projects.find(project => {
    return match.params.projectName === project.name;
  });

  return (
    <div className="project">
      <h3>{project.name}</h3>
      <img
        src={`/projects/${project.image}`}
        alt={project.name}
        className="project__photo"
      />
      <div className=" container container-fluid project__details">
        <div className="row">
          <div className="col-md-6">
            <div className="project__actions">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={project.demo === "" ? "link--inactive" : "link"}
              >
                <i className="fas fa-desktop"></i>
                <span>Live Preview</span>
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={project.repo === "" ? "link--inactive" : "link"}
              >
                <i className="fas fa-code-branch"></i>
                <span>View Source</span>
              </a>
            </div>
            <div className="project__technology">
              <h5>technologies Used</h5>
              <ul className="technology__list col-md-4">
                {project.technologies.map((technology, index) => (
                  <li key={index}>{technology}</li>
                ))}
              </ul>
            </div>
            <div className="project__features">
              <h5>Notable Features</h5>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project__role">
              <h5>My Roles</h5>
              <p>{project.role}</p>
            </div>
            <div className="project__difficulties">
              <h5>Project Difficulties</h5>
              <p>{project.difficulties}</p>
            </div>
            <div className="project__solution">
              <h5>My Solution</h5>
              <p>{project.solution}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
