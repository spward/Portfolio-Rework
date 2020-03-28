import React from "react";
import "./Portfolio.scss";
import { Link } from "react-router-dom";
import projects from "../../../assets/projects.json";

const Portfolio = () => {
  return (
    <div className="portfolio container container-fluid">
      <div className="projects">
        {projects.map(project => (
          <Link to={`portfolio/${project.name}`} key={project.id}>
            <div className="project__item" key={project.id}>
              <img
                src={`/projects/thumbnails/${project.thumbnail}`}
                alt={project.name}
              />
              <div className="project__item--text">
                <h3>{project.name}</h3>
                <ul>
                  {project.technologies.map((technology, index) => (
                    <li key={index}>{technology}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
