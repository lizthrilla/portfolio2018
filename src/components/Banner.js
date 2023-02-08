import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Liz Tiller</h1>
      <h3>
        I'm a Tampa based <span>engineering manager</span>, <span>developer</span>, and
        <span> community organizer,</span> who is passionate about front end development and teaching the next generation of programmers. 
        <br />
        <a className="smoothscroll" href="#about"> Scroll </a>
          to learn more
        <a className="smoothscroll" href="#about"> about me</a>.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
