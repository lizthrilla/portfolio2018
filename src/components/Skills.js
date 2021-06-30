import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>
    <div className="three columns main-col">
        <h3>Strong</h3> 
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>React Native</li>
          <li>CSS/HTML</li>
          <li>Git</li>
          <li>Gatsby.JS</li>
          <li>MobX</li>
        </ul>  
    </div>

    <div className="three columns main-col">
      <h3>Mid-Level</h3> 
      <ul>
        <li>Redux</li>
        <li>GraphQL</li>
        <li>Ruby</li>
        <li>Rails</li>
        <li>Bash</li>
        <li>Belly dance</li>
      </ul>  
    </div>

    <div className="three columns main-col">
      <h3>Developing</h3> 
      <ul>
        <li><a href="https://codesandbox.io/s/6ln6z">Vue</a></li>
        <li>Angular</li>
        <li>Python</li>
        <li>C#</li>
        <li>WordPress</li>
        <li>.Net</li>
      </ul>  
    </div>

    <div className="nine columns main-col">
      <p>
        Other skills include: Coldfusion, SQL, Ubuntu and Microsoft servers and basic photoshop skills.
      </p>
    </div>
  </div>
);

export default Skills;
