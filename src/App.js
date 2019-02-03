import React, { Component } from 'react';
import './App.styles.css';
import WNavBar from './sections/navBar/navBar';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import PortfolioComponent from './components/portfolioComponent/PortfolioComponent';
import Portfolio from './sections/portfolio/Portfolio';

class App extends Component {
  render() {
    return (
      <div>
        <WNavBar/>
        <div className="App">
          <Home className="home-section"/>
          <About className="About-section"/>
          <Portfolio className="portfolio-section"/>
        </div>
      </div>
    );
  }
}

export default App;
