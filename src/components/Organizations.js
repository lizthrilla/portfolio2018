import React from "react";
import "../assets/css/organization.css";

import { WWCTampa, TechLadies, SDGjr, SDG, TechNetwork } from '../assets/logos/index.js'
const TBTechNetwork = "Tampa Bay Women's Tech Network";

const Organizations = () => (
    <section id="organizations">
        <div className="row">
            <h3 className="org-title">Organizations I work with: </h3>
            <div className="org-row">
            <div className="org-col">
                    <a href="https://www.womenwhocode.com/tampa" target="blank">
                        <img className="org-img" src={WWCTampa} alt="Women Who Code logo"/>
                    </a>
                    <p>Co-Director</p>
                </div>
                <div className="org-col">
                    <img className="org-img" src={TechNetwork} alt="Tampa Bay Women's Tech Network"/>
                    <p className="techNetwork">Organizer</p>
                </div>
                <div className="org-col">
                    <a href="https://www.suncoast.io" target="blank">
                        <img className="org-img" src={SDG} alt="Suncoast Developers Guild logo"/>
                    </a>
                    <p>Instructor & Developer Avocado &#x1f951;</p>
                </div>
                 <div className="org-col">
                    <a href="https://suncoast.io/jr" target="blank">
                        <img className="org-img" src={SDGjr} alt="logo for Suncoast Developers Guild Jr"/>
                    </a>
                    <p>Former Instructor and Organizer</p>
                </div>
                {/* <div className="org-col">
                    <a href="https://www.hiretechladies.com" target="blank">
                        <img className="org-img" src={TechLadies} alt="Tech Ladies Logo and link"/>
                    </a>
                    <p>Former City Organizer</p>
                </div> */}
 
            </div>
        </div>
    </section>
)
export default Organizations;