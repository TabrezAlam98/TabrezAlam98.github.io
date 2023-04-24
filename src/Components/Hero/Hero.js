
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
  return (
    <>
    <div  id="user-detail-intro">
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
              <Link
              
                to="/files/Tabrez-Alam-Resume.pdf"
                className="btn btn--outline"
                target="_blank"
                download
              >
                Resume
              </Link>
            </div>
            {/* <div className="download">
              <a href={`mailto:tabrezalamyci1@gmail.com`}>
                <span type='button' className='btn btn--outline'>
                  Email me
                </span>
              </a>
            </div> */}

            <SocialIcon />
          </HeroLeft>
          <HeroRight>
            <Avatar
            id="home-img"
              alt="tabrez photo"
              src="/images/tabrez.jpeg"
              sx={{ width: 300, height: 300 }}
            />
            {/* <img id="home-img" src="/images/tabrez.jpeg"/> */}
          </HeroRight>
        </HeroWrapper>
       
      </HeroContainer>
      
    </div>

    </>
  );
}

export default Hero;
