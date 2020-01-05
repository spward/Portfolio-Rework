import React from "react";
import "./Portfolio.scss";
import Project from "../Project";
import Projects from "../../../assets/projects.json";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="portfolio container container-fluid">
      <h3>My Portfolio</h3>
      <div className="portfolio__filter">
        <ul className="filter list">
          <li className="active" data-filter="*">
            <a href="#">All Categories</a>
          </li>
          <li data-filter=".brand">
            <a href="#">Branding</a>
          </li>
          <li data-filter=".webdev">
            <a href="#">Web Development</a>
          </li>
          <li data-filter=".web">
            <a href="#">Web Design</a>
          </li>
        </ul>
      </div>
      <div className="portfolio__inner row">
        {Projects.map(project => (
          <div className="col-lg-4 col-sm-6">
            <Router>
              <Switch></Switch>
            </Router>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
