import { Button, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
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
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div className="App">
      {/* <Button size='lg' id='themeButton' onClick={toggleColorMode} > {colorMode === 'light' ? <FaMoon fontSize='20px' /> : <FaSun fontSize='20px' />}</Button> */}
      <Navbar colorMode={colorMode} />
      <Home colorMode={colorMode} />
      <Project colorMode={colorMode} />
      <Skills colorMode={colorMode} />
      {/* <About colorMode={colorMode} /> */}
      <Stat colorMode={colorMode} />
      <GitHub colorMode={colorMode} />
      <Contact colorMode={colorMode} />
      <Footer colorMode={colorMode} />
    </div>
  );
}

export default App;
