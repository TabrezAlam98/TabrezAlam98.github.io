import React from "react";
import "./Nav.css"
import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'

const Navbar = () => {
  const [mobile,setMobile]=React.useState(false)
  return (
    <nav className="navbar">
      <div className="container">
      <h1 className="logo">Logo</h1>
      <ul className={mobile?"nav_links_mobile":"nav_links"} onClick={()=>setMobile(false)}>
       
      <a href="#">Home</a>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        
      </ul>
      <button className="mobile_menu_icons" onClick={()=>setMobile(!mobile)}>
        {mobile?<ImCross/>:<FaBars/>}
        
      </button>
      </div>
    </nav>
    
  );
};

export default Navbar;
