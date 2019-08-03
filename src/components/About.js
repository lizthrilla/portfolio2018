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
          I am a recovering film academic turned developer, part-time instructor
          for the Academy at Suncoast Developers Guild, the current Tampa Bay
          City Organizer for Tech Ladies, organizer for the Tampa Bay Women's
          Tech Network, and co-organizer of Suncoast Developers Guild Jr, which
          provides free kids coding classes.
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
              <a href="https://docs.google.com/document/d/e/2PACX-1vR3J1xYbW_JKaTVrWKs7XuoUktAVnOyK66ji_ZUXk_DzdY2eAs-jafKBXVzqtPgaj4GvZsBKmWWkGxC/pub" className="button">
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
