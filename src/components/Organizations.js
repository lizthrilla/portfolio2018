import React from "react";
import "../assets/css/organization.css";

import SDGjr from "../assets/images/sdgjr.svg";
import TechLadies from "../assets/images/techladies.png";
import SDG from "../assets/images/sdglogo.svg";

const Organizations = () => (
    <section id="organizations">
        <div className="row">
            <h3 className="org-title">Organizations I belong to: </h3>
            <div className="org-row">
                <div className="org-col">
                    <a href="https://suncoast.io/jr" target="blank">
                        <img className="org-img" src={SDGjr} alt="logo for Suncoast Developers Guild Jr"/>
                    </a>
                    <p>Instructor and Organizer</p>
                </div>
                <div className="org-col">
                    <a href="https://www.hiretechladies.com" target="blank">
                        <img className="org-img" src={TechLadies} alt="Tech Ladies Logo and link"/>
                    </a>
                    <p>City Organizer</p>
                </div>
                {/* <div className="org-col">
                    <a href="https://www.girldevelopit.com" target="blank">
                        <img className="org-img" src={GDI} alt="Girl Develop It logo"/>
                    </a>
                    <p>Girl Develop It</p>
                </div> */}
                <div className="org-col">
                    <a href="https://www.suncoast.io" target="blank">
                        <img className="org-img" src={SDG} alt="Suncoast Developers Guild logo"/>
                    </a>
                    <p>Developer Avocado &#x1f951;</p>
                </div>
            </div>
        </div>
    </section>
)
export default Organizations;