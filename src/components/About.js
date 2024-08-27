import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/headshot.jpeg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          I am a recovering film academic turned front end developer and engineering manager. As an empathetic and results-driven Engineering Manager, I am dedicated to cultivating a thriving, cohesive team environment. My approach is holistic, emphasizing the well-being and productivity of every team member. I prioritize building trust, fostering accountability, and encouraging experimentation to unlock our collective potential.
        </p>
        <p>
          I am passionate about web accessibility, over analyzing movies, my
          <a href="https://www.instagram.com/thegreatgizmodo/"> cats </a>, my
          <a href="http://michaelenash.com"> husband</a> and
          <a href="https://www.midnightlotusdance.com/"> belly dance</a>.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>elizabeth.tiller@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="https://docs.google.com/document/d/1FF4tocHbjnaTjyb8wSMrnPlDk6XHfcAxAmOHYXyJ3uY/pub" target="_blank" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
