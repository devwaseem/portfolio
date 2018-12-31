import React, { Component } from 'react';
import './App.styles.css';
import WNavBar from './sections/navBar/navBar';
import Home from './sections/Home/Home';

class App extends Component {
  render() {
    return (
      <div>
        <WNavBar/>
        <div className="App">
          <Home className="home-section"/>
        </div>
        
      </div>
    );
  }
}

export default App;
