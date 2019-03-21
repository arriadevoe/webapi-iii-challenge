import React, { Component } from 'react';
import logo from '../src/imgs/logo.svg';
import gollum from '../src/imgs/gollum.png';
import './App.css';

import Posts from './components/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="title">
            <img src={gollum} className="gollum" alt="gollum" />
            <h1>
              Riddles in the Dark
            </h1>
          </div>
          <div className="react-powered">
            <p>Powered By:</p>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="component-container">
            <Posts />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
