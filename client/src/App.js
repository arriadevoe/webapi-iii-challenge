import React, { Component } from 'react';
import react from '../src/imgs/logo.svg';
import redux from '../src/imgs/redux.png';
import nodejs from '../src/imgs/nodejs.png';
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
          <div className="powered-by">
            <p>Powered By:</p>
            <img src={react} className="react-logo" alt="logo" />
            <img src={redux} className="redux-logo" alt="gollum" />
            <img src={nodejs} className="nodejs-logo" alt="gollum" />
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
