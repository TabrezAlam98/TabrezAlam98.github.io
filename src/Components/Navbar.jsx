import { useState } from "react";
import { Link } from "react-router-dom";
import "./Styles.css";

export const Navbar = () => {
  const [isPage, setIsPage] = useState("hero");
  const [isMobile, setIsMobile] = useState(true);

  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };
  return (
    <div className="navMain">
      <div
        className="logo"
        onClick={() => {
          setIsPage("hero");
        }}
        style={isPage === "hero" ? { color: "black" } : null}
      >
        <a
          href="#"
          onClick={() => toggleNavList("#hero")}
          style={{ fontSize: "18px" }}
          className="ta"
        >
          TA
        </a>
      </div>
      <div className={isMobile ? "mobile_size" : "navLinks"}>
        <div
          onClick={() => {
            setIsPage("about");
          }}
          style={isPage === "about" ? { color: "black" } : null}
          className="about-page"
        >
          <a href="#about-me" onClick={() => toggleNavList("#about-me")}>
            About
          </a>
        </div>

        <div
          className="skills-page"
          onClick={() => {
            setIsPage("skill");
          }}
          style={isPage === "skill" ? { color: "black" } : null}
        >
          <a href="#skills" onClick={() => toggleNavList("#skills")}>
            Skills
          </a>
        </div>
        <div
          onClick={() => {
            setIsPage("project");
          }}
          style={isPage === "project" ? { color: "black" } : null}
        >
          <a href="#projects" onClick={() => toggleNavList("#projects")}>
            Projects
          </a>
        </div>

        <div
          onClick={() => {
            setIsPage("Contact");
          }}
          style={isPage === "Contact" ? { color: "black" } : null}
        >
          <a href="#contact" onClick={() => toggleNavList("#contact")}>
            Contact
          </a>
        </div>
        <div >
          {/* <a
            href="https://tabrez.hashnode.dev/"
            rel="noreferrer"
            target="_blank"
          >
             Blog
          </a> */}
          {/* <a>
            <div className="download_resume">
              <Link
                to="/files/Tabrez_Alam_resume.pdf"
                // className="btn btn--outline"
                target="_blank"
                download
              >
                Resume
              </Link>
            </div>
          </a> */}
        </div>
      </div>
      {/* <button className="mobile_size">{isMobile ? "d" : "m"}</button> */}
    </div>
  );
};
