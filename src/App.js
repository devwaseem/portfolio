import React, { Component } from 'react';
import './App.styles.css';
import WNavBar from './sections/navBar/navBar';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Portfolio from './sections/portfolio/Portfolio';
import HireMeSection from './sections/HireMeSection/HireMeSection';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <WNavBar/>
        <div className="App">
          <Home className="home-section"/>
          <About className="About-section"/>
          <Portfolio className="portfolio-section"/>
          <HireMeSection className="HireMeSection"/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
