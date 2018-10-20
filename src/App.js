import React, { Component } from 'react';
import './App.css';
import Favorites from './Favorites';

class App extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="topContainer">
          <h1>Ninas Favorite Places in NYC</h1>
        </div>
        <div className="bodyContainer">
          <h2>Food Edition</h2>
          <Favorites />
          <footer>Copyright 2018 Nina Yang</footer>
        </div>
      </div>
    );
  }
}

export default App;
