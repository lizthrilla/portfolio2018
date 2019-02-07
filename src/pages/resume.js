import React from "react";
import Link from "gatsby-link";

import "../assets/css/resume.css";


const ResumePage = () => (
  <div className="resume">
    <div className="resumeHeader">
      <Link 
          className="backButton" 
          activeStyle={{color: "#fedd32", padding: '20px', fontWeight: 'bolder' }}
          to="/"> 
          Back
      </Link>
    </div>
    <iframe src="https://docs.google.com/document/d/e/2PACX-1vR3J1xYbW_JKaTVrWKs7XuoUktAVnOyK66ji_ZUXk_DzdY2eAs-jafKBXVzqtPgaj4GvZsBKmWWkGxC/pub?embedded=true"></iframe>
    <Link to="/"> Back </Link>
  </div>
);

export default ResumePage;