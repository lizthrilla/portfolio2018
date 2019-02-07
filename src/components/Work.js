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
            I recently finished work on a React Native mobile ordering app using Redux (Reselect, Redux-Saga), GraphQL, Jenkins, and Expo for a Fortune 500 company. During this project, I was in charge of our daily builds and I worked closely with the lead developer and QA team to ensure continuous delivery of our product to our clients. 
          </p>
          <p>
            I also lead the development of the rebranded company website and the transition from a GatsbyJS and GraphCMS static site to a Wordpress site. On this project, I worked closely with the designers and VP of UX and Innovation to develop the site, transition the site to Wordpress, and trained them to continue their own work on the new site.
          </p>
        </div>
      </div>
      <div className="row item">
        <div className="twelve columns">
          <h3>Freelance Developer</h3>
          <p className="info">
            Fullstack Developer
            <span>&bull;</span>
            <em className="date">February 2017 - Present</em>
          </p>

          <p>
            <a href="http://americanstage.org/" target="_blank"> American Stage</a>: Cleaned up and rebuilt parts of the CSS and PHP of their Wordpress site. Assisted with the relaunch on new servers.
          </p>
          {/* <p>
            <a href="http://www.denisetiller.com" target="_blank"> Denise Tiller</a>: Designed, built, launched and mantain a website and blog for a mystery writer.
          </p> */}
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
