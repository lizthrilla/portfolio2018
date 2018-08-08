import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaTwitter,
  FaLinkedin
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
  <li>
    <a href="https://www.linkedin.com/in/elizabethtiller/">
      <FaLinkedin />
    </a>
  </li>
    <li>
      <a href="https://twitter.com/liztiller">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://github.com/lizthrilla">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="mailto:elizabeth.tiller@gmail.com?Subject=Hello%20again">
        <FaEnvelope />
      </a>
  </li>
  </ul>
);

export default SocialLinks;
