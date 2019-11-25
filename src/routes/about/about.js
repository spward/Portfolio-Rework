import React from "react";
import "./about.css";
import ProfilePic from "../../assets/images/profile_pic.png";
import Resume from "../../assets/Sean Ward resume.pdf";

const About = () => {
  return (
    <div className="about container">
      <div className="row">
        <div className="about__text">
          <h3>About Myself</h3>
          <p>
            Hello my name is Sean. I am a full stack web-developer. I have rich
            experience in web site design & building and customization. I love
            to learn and stay with the most advanced technologies in the
            development and branding fields. I strongly believe that anything is
            possible as long as your mind is set to it.
          </p>
          <a href={Resume} target="blank" className="btn">
            My Resume
          </a>
        </div>
        <div className="about__img">
          <img src={ProfilePic} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default About;
