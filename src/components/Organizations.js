import React from "react";
import "../assets/css/organization.css";

import SDGjr from "../assets/images/sdgjr.svg";
import TechLadies from "../assets/images/techladies.png";
import GDI from "../assets/images/gdisquare.png";

const Organizations = () => (
    <section id="organizations">
        <div className="row">
            <h3 className="org-title">Organizations I belong to: </h3>
            <div className="org-row">
                <div className="org-col">
                    <a href="https://suncoast.io/jr" target="blank">
                        <img className="org-img" src={SDGjr} alt="logo for Suncoast Developers Guild Jr"/>
                    </a>
                    <p>Suncoast Developers Guild Jr</p>
                </div>
                <div className="org-col">
                    <a href="https://www.hiretechladies.com" target="blank">
                        <img className="org-img" src={TechLadies} alt="Tech Ladies Logo and link"/>
                    </a>
                    <p>Tech Ladies</p>
                </div>
                <div className="org-col">
                    <a href="https://www.girldevelopit.com" target="blank">
                        <img className="org-img" src={GDI} alt="Girl Develop It logo"/>
                    </a>
                    <p>Girl Develop It</p>
                </div>
            </div>
        </div>
    </section>
)
export default Organizations;