import React from "react";

const Conferences = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Conferences</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>
            <a href="https://infinite.red/ChainReactConf/speakers" target="_blank">
                Chain React 2019 - Portland
            </a>
          </h3>
          <p className="info">
            Talk: "Why Can't We Be Friends": Lightning Talk
            <span>&bull;</span>
            <em className="date">July 11, 2019</em>
          </p>
          <p>
            Discussing the short comings of React Native for android development and ways my team worked around it.
          </p>
        </div>
      </div>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>
            <a href="https://devfestflorida.org/" target="_blank">
                DevFest Florida 2019 - Orlando
            </a>
          </h3>
          <p className="info">
            Talk: "Dispatches from React Native"
            <span>&bull;</span>
            <em className="date">January 19, 2019</em>
          </p>
          <p>
            Discussing the short comings of React Native for android development and ways my team worked around it.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3><a href="https://startupweektampabay.com/" target="_blank">Tech Stars Startup Week Tampa Bay 2019</a></h3>
          <p className="info">
            Panel: Web Accessibility
            <span>&bull;</span>
            <em className="date">February 4, 2019</em>
          </p>

          <p>
            Particpating in a panel on the importance of web accessibility.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3><a href="https://www.saintleo.edu/women-in-data-science-conference" target="_blank">Women in Data + Science Conference - Saint Leo University</a></h3>
          <p className="info">
            Panel: "Get Your Code On"
            <span>&bull;</span>
            <em className="date">March 1, 2019</em>
          </p>

          <p>
            Organizing and participating in a panel about alternative opportunities to learn to code in the Tampa Bay Area.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Conferences;
