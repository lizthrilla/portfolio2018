import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Liz Tiller</h1>
      <h3>
        I'm a Tampa based <span>Javascript Developer</span>,
        <span> community organizer,</span> and <span> educator</span> currently working in react native and helping to teach the next generation of developers. 
        Let's
        <a className="smoothscroll" href="#about">
          {" "}
          start scrolling
        </a>{" "}
        and learn more
        <a className="smoothscroll" href="#about">
          {" "}
          about me
        </a>.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
