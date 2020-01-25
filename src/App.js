import React from 'react';
import './App.scss';
import Header from './components/Header';
// import MandalaContext from './components/MandalaContext';
import Mandala from './components/Mandala';
// import Halo from './components/Halo';
import Home from './sections/Home';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

const themes = {
  passive: {
    zindex: 5,
    background: "#222222"
  },
  active: {
    zindex: 7,
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.passive);



function App() {
  // const [theme, setTheme] = React.useState({...initialTheme, setLanguage: setLanguage});
  return (
    <div className='App'>
      <ThemeContext.Provider value={themes.passive}>
        <Mandala /> {/* z-index: 5 */}
      </ThemeContext.Provider>
        <Header /> {/* z-index: 10 */}
      <main className='content'> {/* z-index: 6 */}
        <Home />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer /> {/* z-index: 7 */}
    </div>
  );
}

export default App;
