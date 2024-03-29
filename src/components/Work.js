import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>
    <div className="nine columns main-col">
      {/* Kin */}
      <div className="row item">
        <div className="twelve columns">
          <h3><a href="https://www.kin.com">Kin Insurance</a></h3>
          <p className="info">
            Associate Engineering Manager
            <span>&bull;</span>
            <em className="date">December 2022 - Present</em>
          </p>
          <p>Leading and coordinating work for a small team to drive improvements for our Electronic First Notification of Loss application. Responsible for delivery of the product. Actively coaching and direct reports in their career growth.</p>
          <p className="info">
            Software Engineer
            <span>&bull;</span>
            <em className="date">March 2022 - December 2022</em>
          </p>
          <p>Worked on the Electronic First Notification of Loss angular application; developed small features, investigated issues, and mentored associate level engineers.</p>
          <p>Member of the Front End Guild and organized and ran "Kinversations," a weekly engineering meeting where we discuss, share, and collaborate on ideas and projects.</p>
          <p>Kin’s mission is to reimagine home insurance. Kin is built for the future and prepared to meet its challenges head on while helping our customers do the same through technology and direct-to-consumer model, we provide affordable pricing without compromising coverage, even in areas most impacted by climate change.</p>
        </div>
      </div>
      {/* Shogun */}
      <div className="row item">
        <div className="twelve columns">
          <h3><a href="https://www.getshogun.com">Shogun</a></h3>
          <p className="info">
            React Engineer
            <span>&bull;</span>
            <em className="date">June 2021 - March 2022</em>
          </p>
          <p>Worked on the Shogun Page Builder team to develop new features for our customers.</p>
          <p>Shogun is an ecommerce experience platform empowering brands to drive higher conversions, revenue, and brand loyalty. Our products Shogun Page Builder and Shogun Frontend help teams build and optimize their online stores to deliver exceptional experiences. Our products integrate with ecommerce platforms like Shopify and BigCommerce, and our 18,000 customers include Leesa, MVMT, Timbuk2, and Chubbies.</p>
        </div>
      </div>
       {/* SDG */}
       <div className="row item">
        <div className="twelve columns">
          <h3>
            <a href="https://www.suncoast.io">Suncoast Developers Guild</a>
          </h3>
          <p className="info">
            Part-Time Instructor
            <span>&bull;</span>
            <em className="date">March 2019 - Present</em>
          </p>

          <p>
            Instructor for the part-time{" "}
            <a href="https://suncoast.io/academy/part-time/test-drive/">
              Web Development Test Drive
            </a>{" "}
            and{" "}
            <a href="https://suncoast.io/academy/part-time/react-i">
              React I: Building Interactive Websites
            </a>{" "}
            courses. Class meets for 2 hours twice a week over the course of 6
            weeks. These programs are developed for those curious about web
            development, and for experienced developers to skill up.
          </p>
          <p>
            The Academy at Suncoast Developers Guild is a code school that
            serves people, not profit. We are changing lives and teaching people
            to be the best software developers they can be.
          </p>
        </div>
      </div>
       {/* AgileThought */}
       <div className="row item">
        <div className="twelve columns">
          <h3><a href="https://www.agilethought.com">Agile Thought</a></h3>
          <p className="info">
            Consultant
            <span>&bull;</span>
            <em className="date">January 2020 - June 2021</em>
          </p>
          <p>Technology consultant specializing in the Front End development and Azure</p>
          <p>Member of the Development Community of Practice team, which works to create learning opportunities for Agile Thought's employees</p>
        </div>
      </div>
      
      {/* DXC TE */}
      <div className="row item">
        <div className="twelve columns">
          <h3>
            <a href="https://www.dxc.technology/">DXC Technology</a>
          </h3>
          <p className="info">
            Professional Software Engineer
            <span>&bull;</span>
            <em className="date">May 2019 - January 2020</em>
          </p>

          <p>
            Developing custom applications for clients; utilizing React, Redux,
            Angular, and Python.
          </p>
          <p>
            DXC Technology is the world's leading independent, end-to-end IT
            services company, serving nearly 6,000 private and public-sector
            clients from a diverse array of industries across 70 countries. The
            company's technology independence, global talent and extensive
            partner network deliver transformative digital offerings and
            solutions that help clients harness the power of innovation to
            thrive on change.
          </p>
        </div>
      </div>

      {/* Mad Mobile */}
      <div className="row item">
        <div className="twelve columns">
          <h3>
            <a href="https://www.madmobile.com">Mad Mobile</a>
          </h3>
          <p className="info">
            Javascript Developer
            <span>&bull;</span>
            <em className="date">January 2018 - Present</em>
          </p>

          <p>
            Worked on a React Native mobile ordering app using
            Redux (Reselect, Redux-Saga), GraphQL, Jenkins, and Expo for a
            Fortune 500 company. During this project, I was in charge of our
            daily builds and I worked closely with the lead developer and QA
            team to ensure continuous delivery of our product to our clients.
          </p>
          <p>
            I also lead the development of the rebranded company website and the
            transition from a GatsbyJS and GraphCMS static site to a Wordpress
            site. On this project, I worked closely with the designers and VP of
            UX and Innovation to develop the site, transition the site to
            Wordpress, and trained them to continue their own work on the new
            site.
          </p>
        </div>
      </div>

      {/* DCorp */}
      <div className="row item">
        <div className="twelve columns">
          <h3>
            <a href="https://www.danielscorporation.com/">
              Daniels Corporation
            </a>
          </h3>
          <p className="info">
            Fullstack Developer
            <span>&bull;</span>
            <em className="date">March 2017 - December 2017</em>
          </p>

          <p>
            Built and managed ecommerce sites for a select group of family owned
            companies. Worked on the migration of a Rails 3 site to Spree
            Ecommerce framework (built with Ruby on Rails) while maintaining a
            legacy Coldfusion site. I also managed the Ubuntu and Microsoft
            Servers, and worked closing with the marketing team to optimize our
            search engine results.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
