
import React from "react";
import Avatar from "@mui/material/Avatar";
import SocialIcon from "../SocialIcon/SocialIcon";
import { Link } from "react-router-dom";



import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
} from "./HeroElements";
function Hero() {
  const handleClick = () =>{
    window.open("/files/Tabrez-Alam-Resume.pdf")
    // window.location.href='https://drive.google.com/file/d/1wjdmzSpw8VOgXTuYlmQGE2A59dKmi841/view?usp=share_link'
  }
  return (
    <>
    <div  id="home">
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <div id="user-detail-intro">
            <h1>Hi,</h1>
            <img width='70px' height='70px' src="https://c.tenor.com/z2xJqhCpneIAAAAM/wave-hand.gif"/>
            </div>
            <h1 id="user-detail-name">I'm <span style={{color:"rgb(131,40,57)"}}>Tabrez Alam</span></h1>
           
            <h5>Full Stack Web Developer</h5>
            <p style={{ fontWeight: "500" }}>I am from Siddharth Nagar, Utter Pradesh.</p>
            <p style={{ fontWeight: "500" ,marginTop:'10px'}}>Phone - 9554445594</p>
            <p style={{ fontWeight: "500" ,marginTop:'10px'}}>Email - tabrezalamyci1@gmail.com</p>
            <div className="download"    >
              <button
                // to="/files/Tabrez-Alam-Resume.pdf"
                onClick={handleClick}
                value="download"
                 className="btn btn--outline"
                 target="_blank"
                id='resume-button-2'
              >
                Resume
              </button>
            </div>

            <SocialIcon />
          </HeroLeft>
          <HeroRight>
            {/* <Avatar
            className="home-img"
              alt="tabrez photo"
              src="/images/tabrez.jpeg"
              sx={{ width: 300, height: 300 }}
            /> */}
            <img className="home-img" src="/images/tabrez.jpeg"/>
          </HeroRight>
        </HeroWrapper>
       
      </HeroContainer>
      
    </div>

    </>
  );
}

export default Hero;
