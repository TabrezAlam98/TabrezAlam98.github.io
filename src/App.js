import { Box } from '@chakra-ui/react'
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About'
import Skills from './Pages/Skills'
import Project from './Pages/Project';
import Contact from './Pages/Contact';


function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
