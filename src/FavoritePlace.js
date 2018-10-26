import React, { Component } from 'react';
import './FavoritePlace.css';

class FavoritePlace extends Component {
  render() {
    return (
      <div className="favoritePlace">
        <img className="favoritePlaceImg" src={this.props.image} alt={this.props.altText} />
      </div>
    );
  }
}

export default FavoritePlace;
