import React from "react";
import Avatar from "@mui/material/Avatar";
import { Image, ContactWrapper } from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container" style={{border:'1px solid white'}}>
        <div className="SectionTitle">
          <div
            style={{
              fontSize: "40px",
              marginTop:'60px',
              textAlign:'center',
              fontFamily: "'Trebuchet MS', sans-serif",
            }}
          >
            About <span style={{color:'rgb(164,49,88)'}}>Me</span>
          </div>
         
          <div style={{width:'177px',height:'3px',backgroundColor:'rgb(164,49,88)',margin:'auto'}}></div>
          
        </div>
        <div className="BigCard bg">
          <Image>
            <Avatar
              alt="Tabrez img"
              // src="/images/tabrez.jpeg"
              src="/images/gif.png"
              sx={{ width: 150, height: 150 }}
            />
          </Image>
          <div className="AboutBio">
            <div
              style={{
                fontSize: "28px",
                fontFamily: "'Trebuchet MS', sans-serif",
              }}
            >
              Hello! I am Tabrez
            </div>
            who enjoys coding and solving problems.As an aspiring Full Stack Web
            developer, I like the impact it creates on the world. <br></br>One
            of my strongest skills is creativity and it helps me a lot in web
            designs I have created various end to end website clone using{" "}
            <strong>MERN stack</strong>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
