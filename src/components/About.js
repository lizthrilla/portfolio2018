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
          I am a recovering film academic turned javascript developer and the current Tampa Bay City Organizer for Tech Ladies and co-organizer of Suncoast Developers Guild Jr, which provides free kids coding classes. I finished the front end engineering program at The Iron Yard in February 2017 and I am passionate about web accessibility, over analyzing movies, my cats, and bellydance.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Liz Tiller</span>
              <br />
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
