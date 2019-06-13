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
          I am a recovering film academic turned developer, part-time instructor for the Academy at Suncoast Developers Guild, the current Tampa Bay City Organizer for Tech Ladies, organizer for the Tampa Bay Women's Tech Network,  and co-organizer of Suncoast Developers Guild Jr, which provides free kids coding classes.
        </p>
        <p>
          Growing up, my parents stressed the importance of math and science.  As actuaries, they told me that math was a way of thinking and eventually I would transcend number crunching.  Instead, I ran towards film and theater in an effort to rebel.  After nearly a decade in academia, I found myself finishing the front end engineering program at The Iron Yard in 2017.  I may have taken the long way round, but I'm here now!
        </p>
        <p>
          I am passionate about web accessibility, over analyzing movies, my <a href="https://www.instagram.com/thegreatgizmodo/">cats </a>, my <a href="http://michaelenash.com">husband</a> and <a href="https://www.midnightlotusdance.com/">belly dance</a>.
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
              <a href="https://docs.google.com/document/d/1FRpyAiv8_Us_rYCOoPhFNJ7Fer7E2hJVHkhzYWKea7g/edit?usp=sharing" className="button">
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
