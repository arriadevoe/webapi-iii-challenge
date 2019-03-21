import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Posts from './components/Posts';
import UserList from './components/UserList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="title">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              WEB API III Challenge - Blog with Node.js
            </p>
          </div>
          <div className="component-container">
            <Posts />
            <UserList />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
