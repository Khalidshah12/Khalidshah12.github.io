import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import GitHub from './Components/Github/Github';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar'
import Project from './Components/Project/Project';
import Skills from './Components/Skills/Skills';
import Stat from "./Components/Stat/Stat"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Project />
      <About />
      <Stat />
      <GitHub />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
