import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
function Projects() {
  return (
    <>
      <div className="projectmaindiv" >
        <div className="ProjectWrapper" id="projects">
          <div className="Container" style={{border:'1px solid white '}} >
            <div className="SectionTitle">
              <div
                style={{
                  fontSize: "40px",
                  marginTop:'60px',
                  fontFamily: "'Trebuchet MS', sans-serif",
                  textAlign:'center'
                }}
              >
                Projects
              </div>
              <div style={{width:'160px',height:'3px',backgroundColor:'rgb(164,49,88)',margin:'auto'}}></div>
            </div>

            <ProjectCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
