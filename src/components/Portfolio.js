import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import Ryma from "../assets/images/portfolio/ryma.png";
import Memory from "../assets/images/portfolio/cats-memory.png";
import Rain from "../assets/images/portfolio/rain.png";
import Tarot from "../assets/images/portfolio/tarot.png";

const Portfolio = () => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Some Fun Apps I've Built. </h1>

        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="https://ryma.herokuapp.com/" target="_blank" title="Ryma - Hospitality Hackathon">
                <img alt="" src={Ryma} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Ryma</h5>
                    <p>Hospitality Hackathon 2017</p>
                    <p>React and Rails app</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="http://tarot.lizthrilla.surge.sh/" target="_blank" title="Tarot with Sybil">
                <img alt="" src={Tarot} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Tarot with Sybil</h5>
                    <p>TIY Final Project</p>
                    <p> 
                      Using react I created a tarot card game as a promotional tool for a paranormal mystery manuscript. Rather than use an API, I manipulated the data through a javascript file.
                    </p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="http://rain.lizthrilla.surge.sh" target="_blank" title="Make it Rain">
                <img alt="" src={Rain} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Make it Rain</h5>
                    <p>TIY Project</p>
                    <p>Vanilla JS, CSS, and HTML</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="http://memory.lizthrilla.surge.sh" target="_blank" title="Memory">
                <img alt="" src={Memory} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Memory</h5>
                    <p>TIY Project</p>
                    <p>A simple React memory game.</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>
        </div>
        <h1>Visit my <a href="https://github.com/lizthrilla" target="_blank"> github</a> to see what I'm working on now.</h1>
      </div>
    </div>
  </section>
);

export default Portfolio;
