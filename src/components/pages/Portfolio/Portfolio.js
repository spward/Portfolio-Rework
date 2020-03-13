import React from "react";
import "./Portfolio.scss";
import { Link } from "react-router-dom";
import projects from "../../../assets/projects.json";

const Portfolio = () => {
  return (
    <div className="portfolio container container-fluid">
      <h3>My Portfolio</h3>
      <div className="portfolio__filter">
        <ul className="filter list">
          <li className="active" data-filter="*">
            <button>All Categories</button>
          </li>
          <li data-filter=".brand">
            <button href="#">Branding</button>
          </li>
          <li data-filter=".webdev">
            <button>Web Development</button>
          </li>
          <li data-filter=".web">
            <button>Web Design</button>
          </li>
        </ul>

        <div className="projects">
          {projects.map(project => (
            <Link to={`portfolio/${project.name}`} key={project.id}>
              <div
                className={
                  "project--item card " + project.tech.join(" ").toLowerCase()
                }
                key={project.id}
              >
                <h3>{project.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
