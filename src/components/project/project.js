import React from "react";
import "./project.css";

const Project = ({ props }) => {
  return (
    <div>
      <p>{props.description}</p>
    </div>
  );
};

export default Project;
