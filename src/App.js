import React, { Component } from 'react';
import Home from './Home';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>This is where the header goes</h3>
        </header>
        <Home />
      </div>
    );
  }
}

export default App;
