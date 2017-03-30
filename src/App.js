import React, { Component } from 'react';
import './App.css';

import hero from './hero.jpg';

const Hero = () => (
  <div className="Hero-Image">
    <img src={hero} alt="Hero"/>
  </div>
)


class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <div className="App-header">
          
          
          <h2>Welcome to Element Web</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
