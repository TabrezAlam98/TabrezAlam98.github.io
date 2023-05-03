import React from "react";
import { stackList } from "../../data/ProjectData";

import {
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./SkillsElements.js";
function Skills() {
  return (
    <>
    <ContactWrapper >
      <div className="Container skills-card" style={{border:'1px solid white'}} >
        <div className="SectionTitle">
          <div
            style={{
              fontSize: "40px",
              marginTop:'60px',
              fontFamily: "'Trebuchet MS', sans-serif",
              textAlign:'center'
            }}
          >
            Skills
          </div>
          <div style={{width:'100px',height:'3px',backgroundColor:'rgb(164,49,88)',margin:'auto'}}></div>
        </div>
        <div className="BigCard">
          <div className="AboutBio tagline2">
            The <strong>tech stacks</strong> 
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg className="skills-card-img" src={stack.img} alt={stack.name}  />
                <TechName className="skills-card-name">{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
 </> );
}

export default Skills;
