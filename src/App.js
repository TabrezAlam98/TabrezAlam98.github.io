import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Nav from "./Components/Nav";
import Navbar1 from "./Components/Navbar1";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import FixSocialIcon from "./Components/SocialIcon/FixSocialIcon";

function App() {
  return (
    <div>
     <Navbar1/>
     {/* <Nav/> */}
      <section id="hero">
          <Hero />
          </section>
          <section id="about-me">
          <About />
          </section>
          <section id='skills'>
          <Skills  />
          </section>
          <Projects />
          <section id="contact">
          <Contact />
          </section>
          <FixSocialIcon />
    </div>
  );
}

export default App;
