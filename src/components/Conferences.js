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
            "React Native is advertised as a framework for developing native apps with JavaScript. Roughly 90% of the time, my team is able to work strictly in JavaScript, with only occassional trips into native code. In particular, my team has found our Android build to require more care than its iOS counterpart. This talk will look at the ways in which we have learned, sometimes the hard way, how to develop a react native app for Android, as well as my experience as a JavaScript developer being thrust into the native world. In particular, I will discuss our use of the react native device detection package to work through our Android style audits and ways we have worked around react native's shortcomings."
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3><a href="https://startupweektampabay.com/" target="_blank">Startup Week Tampa Bay 2019</a></h3>
          <p className="info">
            <a href="https://sched.co/KBl9">
              Panel: "Inclusive Design and Development with Web Accessibility Panel"
            </a>
            <span>&bull;</span>
            <em className="date">February 4, 2019</em>
          </p>

          <p>
            "The focus on improving web accessibility has indavertently shifted to avoiding lawsuits when, more importantly, on the other end of the screen is a user base that is being excluded. In this panel discussion, you'll hear from two front-end developers/accessibility advocates and two assistive technology users to hear how incorporating a focus on web accessibility can transform your users' experiences for the better."
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
