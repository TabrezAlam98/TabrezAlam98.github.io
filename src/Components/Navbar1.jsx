import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Styles.css"; 


const Navbar1 = () => {
  const [isPage, setIsPage] = useState("hero");
  return (<>
    <div id="nav-menu">
      <div className="nav1">
        <div className="div1"
         onClick={() => {
            setIsPage("hero");
          }}
          style={isPage === "hero" ? { color: "black" } : null}
          >TA
          {/* <a href="#"><img style={{width:"100px",height:"50px"}} src="/images/logo.jpg"/></a> */}
        </div>
      </div>
      <div className="nav2">
        <div className="div2"
        onClick={() => {
            setIsPage("hero");
          }}
          style={isPage === "hero" ? { color: "black" } : null}>
          <a href="#">Home</a>
        </div>
        <div className="div2"
         onClick={() => {
            setIsPage("about");
          }}
          style={isPage === "about" ? { color: "black" } : null}>
          <a href="#about-me">AboutMe</a>
        </div>
        <div className="div2"
        onClick={() => {
            setIsPage("skill");
          }}
          style={isPage === "skill" ? { color: "black" } : null}
        >
          <a href="#skills">Skills</a>
        </div>
        <div
          className="div2"
          onClick={() => {
            setIsPage("project");
          }}
          style={isPage === "project" ? { color: "black" } : null}
        >
          <a href="#projects">Projects</a>
        </div>
        <div className="div2"
        onClick={() => {
            setIsPage("Contact");
          }}
          style={isPage === "Contact" ? { color: "black" } : null}>
          <a href="#contact">Contact</a>
        </div>
        <div className="resume">
          <a
            // to="/files/Tabrez-Alam-Resume.pdf"
            href="https://drive.google.com/file/d/1wjdmzSpw8VOgXTuYlmQGE2A59dKmi841/view?usp=share_link"
             target="_blank"
            
          >
            Resume
          </a>
        </div>
      </div>
    </div>

 
  </>);
};

export default Navbar1;
