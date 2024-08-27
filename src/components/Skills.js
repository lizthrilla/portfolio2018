import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>
    <div className="three columns main-col">
        <ul>
          <li>Frontend Development</li>
          <li>Engineering Management</li>
          <li>Project Management</li>
          <li>Leadership</li>
          <li>Teaching & Mentoring</li>
        </ul>  
    </div>

    <div className="three columns main-col">
      <ul>
        <li>Strategic Planning & Execution</li>
        <li>Technical Decision Making</li>
        <li>Cross-functional Collaboration</li>
        <li>Agile Methodologies</li>
      </ul>  
    </div>

    <div className="three columns main-col">
      <ul>
        <li>React & React Native</li>
        <li>Ruby & Ruby on Rails</li>
        <li>Angular</li>
        <li>Community Organizaing</li>
      </ul>  
    </div>

    {/* <div className="nine columns main-col">
      <p>
        Other skills include: Coldfusion, SQL, Ubuntu and Microsoft servers and basic photoshop skills.
      </p>
    </div> */}
  </div>
);

export default Skills;
