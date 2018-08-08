import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Mad Mobile</h3>
          <p className="info">
            Javascript Developer
            <span>&bull;</span>
            <em className="date">January 2018 - Present</em>
          </p>

          <p>
            Currently building a react native ordering app and lead developer on the current website.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Daniels Corporation</h3>
          <p className="info">
            Fullstack Developer
            <span>&bull;</span>
            <em className="date">March 2017 - December 2017</em>
          </p>

          <p>
            Built and managed ecommerce sites for a select group of family owned companies. Worked on the migration of a Rails 3 site to Spree Ecommerce framework (built with Ruby on Rails) while maintaining a legacy Coldfusion site. I also managed the Ubuntu and Microsoft Servers, and worked closing with the marketing team to optimize our search engine results.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
