import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand react" />
            <em>React</em>
          </li>
          <li>
            <span className="bar-expand reactNative" />
            <em>React Native</em>
          </li>
          <li>
            <span className="bar-expand javascript" />
            <em>Javascript</em>
          </li>
          <li>
            <span className="bar-expand html5" />
            <em>CSS/HTML5</em>
          </li>
          <li>
            <span className="bar-expand wordpress" />
            <em>Wordpress</em>
          </li>
          <li>
            <span className="bar-expand rollerskating" />
            <em>Roller Skating</em>
          </li>
        </ul>
        <p>
          Other skills include: Ruby, Rails, Coldfusion, SQL, Ubuntu and Microsoft servers and basic photoshop skills.
        </p>

      </div>
    </div>
  </div>
);

export default Skills;
