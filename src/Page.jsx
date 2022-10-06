import About from './Components/About/About';
import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import GitHub from './Components/Github/Github';
import Home from './Components/Home/Home';
import Navbar from './Navbar/Navbar';
import Project from './Project/Project';
import Skills from './Skills/Skills';
import Stat from "./Stat/Stat"

export default function Page() {
  return (
    <div>
      <div className="area" >
        <Navbar />
        <Home />
        <Skills />
        <Project />
        <About />
        <Stat />
        <GitHub />
        <Contact />
        <Footer />
      </div >
    </div>
  );
}