import React, { useState, useEffect } from "react";
import "./Portfolio.scss";
// import Project from "../Project";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then(res => res.json())
      .then(data => {
        setProjects(data);
      });
  }, []);

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
        {projects.map(project => (
          <div
            className={"project card " + project.tech.join(" ").toLowerCase()}
            key={project.id}
          >
            <h3>{project.name}</h3>
          </div>
        ))}
      </div>
      <div className="portfolio__inner row"></div>
    </div>
  );
};

export default Portfolio;
