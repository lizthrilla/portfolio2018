import React from "react";

import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";
import Conferences from "./Conferences";

const Resume = () => (
  <section id="resume">
    <Work />
    <Conferences />
    <Education />
    <Skills />
  </section>
);

export default Resume;
