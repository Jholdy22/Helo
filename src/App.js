import React, { Component } from 'react';
import './App.css';
import route from './route.js';
import Nav from './component/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
      {route}
      <Nav />
      </div>
    );
  }
}

export default App;
