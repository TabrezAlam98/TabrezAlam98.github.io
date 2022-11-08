import "./Styles.css";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="homeMain">
      <div className="homeStart">
        <div>
          <AvatarS 
            alt="Remy Sharp"
            src="/images/tabrez.jpeg"
            sx={{ width: 200, height: 200 }}
          />
        </div>
        <div>
          <div>Hi,</div>
          <div>I am Tabrez Alam</div>
          <div>I am a Full Stack Web Developer</div>
          <div className="download">
            <Link to="/files/ShaikShakeer_Resume.pdf" target="_blank" download>
              Resume
            </Link>
          </div>
        </div>
      </div>
      <div className="homeSkills">
        <div>A liitle bit about my self</div>
        <div>
          I am a full-stack web developer coming from Siddharth nagar, Utter Uradesh. I have an
          unwavering passion and energy for web development and am always open
          to making new friends.
        </div>
        <div>Skilled in</div>
        <div>JavaScript,HTML,CSS,Node.js,mongoDB,React,express</div>
        <div>Connect me on - LinkedIn,github,email</div>
      </div>
    </div>
  );
};
