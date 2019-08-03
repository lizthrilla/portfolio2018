import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Liz Tiller</h1>
      <h3>
        I'm a Tampa based <span>developer</span>,
        <span> community organizer,</span> and <span> educator</span>, who is passionate about front end development and teaching the next generation of programmers. 
        <br />
        Let's
        <a className="smoothscroll" href="#about"> start scrolling </a>
          to learn more
        <a className="smoothscroll" href="#about"> about me</a>.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
