import React from "react";
import aboutImage from "../images/about.png";

const About = () => {
  return (
    <div id="about">
      <div className="about-text">
        <h1>UPCOMING EVENT</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          velit officiis quaerat et officia, natus repudiandae dolor
          necessitatibus dolore eligendi optio quasi .
        </p>
        <button>React More</button>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="" />
      </div>
    </div>
  );
};

export default About;
