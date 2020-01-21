import React from "react";
import "./About.scss";
import Resume from "../../../assets/Sean Ward resume.pdf";

const About = () => {
  return (
    <div className="about container container-fluid">
      <div className="row">
        <div className="col-md-6 about__me">
          <h3>About Myself</h3>
          <p>
            Hello my name is Sean. I am a full stack web-developer. I have rich
            experience in web site design & building and customization. I love
            to learn and stay with the most advanced technologies in the
            development and branding fields. I strongly believe that anything is
            possible as long as your mind is set to it.
          </p>
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            My Resume
          </a>
        </div>
        <div className="col-md-6 about__skills">
          <h3>Skills</h3>
          <div className="skills">
            <div className="skills__item">
              <i className="fab fa-js"></i>
              <h6>JavaScript</h6>
            </div>
            <div className="skills__item">
              <i className="fab fa-html5"></i>
              <h6>HTML5</h6>
            </div>
            <div className="skills__item">
              <i className="fab fa-css3-alt"></i>
              <h6>CSS3</h6>
            </div>
            <div className="skills__item">
              <i className="fab fa-react"></i>
              <h6>React</h6>
            </div>
            <div className="skills__item">
              <i className="fab fa-vuejs"></i>
              <h6>Vue</h6>
            </div>
            <div className="skills__item">
              <i className="fab fa-sass"></i>
              <h6>Sass</h6>
            </div>
            <div className="skills__item">
              <i className="fab fa-bootstrap"></i>
              <h6>Bootstrap</h6>
            </div>
            <div className="skills__item">
              <i className="fab fa-node-js"></i>
              <h6>Node.js</h6>
            </div>
            <div className="skills__item">
              <i className="fab fa-php"></i>
              <h6>PHP</h6>
            </div>
            <div className="skills__item">
              <i className="fab fa-npm"></i>
              <h6>NPM</h6>
            </div>
            <div className="skills__item">
              <i className="fab fa-git-alt"></i>
              <h6>Git</h6>
            </div>
            <div className="skills__item">
              <i className="fab fa-github"></i>
              <h6>Github</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
