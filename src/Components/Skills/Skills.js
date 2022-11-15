import React from "react";
import { stackList } from "../../data/ProjectData";
import CalendarAndStats from "../CalendarAndStats/CalendarAndStats";
import Calendra from "../Calendra/Calendra";
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
    <ContactWrapper id="about">
      <div className="Container" style={{border:'1px solid white'}} >
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
                <TechImg src={stack.img} alt={stack.name}  />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
    {/* <Calendra/> */}
    {/* <CalendarAndStats/> */}
 </> );
}

export default Skills;
