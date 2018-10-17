import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class FavoritePlace extends React.Component {
  render() {
    return (
      <div className="favoritePics">

      </div>
    );
  }
}

class Favorites extends React.Component {
  render() {
    return (
      <div className="favoritePics">

      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="topContainer">
          <h1>Ninas Favorite Places in NYC</h1>
        </div>
        <div className="bodyContainer">
          <h2>Food Edition</h2>
          <div className="favoritesContainer">
            <Favorites />
          </div>
          <footer>Copyright 2018 Nina Yang</footer>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
