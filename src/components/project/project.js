import React from "react";
import "./project.scss";

const Project = ({ props }) => {
  return (
    <div>
      <p>{props.description}</p>
    </div>
  );
};

export default Project;
