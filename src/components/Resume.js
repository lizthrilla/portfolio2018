import React from "react";

import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";
import Conferences from "./Conferences";
import Writing from './Writing';

const Resume = () => (
  <section id="resume">
    <Work />
    <Conferences />
    <Writing />
    <Education />
    <Skills />
  </section>
);

export default Resume;
