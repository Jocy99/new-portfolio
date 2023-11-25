import React from "react";
import resume from "../assets/JocelynBenitez_FullStackDeveloper_Resume.pdf";

const Resume = () => {
  return (
    <div className="resume">
      <h2> Resume </h2>
      <br></br>
      <br></br>
      <h6> Click the link below to download my resume! </h6>
      <a href={ resume } download { ... resume }> Download my Resume! </a>
      <br></br>
      <br></br>

      <h6>Front-End:</h6>
      <ul>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
        <li>Responsive Web Design</li>
      </ul>

      <h6>Back-End:</h6>
      <ul>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>MySQL</li>
      </ul>
    </div>
  );
};

export default Resume;
