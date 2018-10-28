import React, { Component } from 'react';
import './FavoritePlace.css';

class FavoritePlace extends Component {
  render() {
    return (
      <div className="favoritePlace">
        <img className="favoritePlaceImg" onClick={this.props.click} src={this.props.image} alt={this.props.altText} />
        <div className="favoritePlaceText">
          <span>{this.props.title}</span>
        </div>
      </div>
    );
  }
}

export default FavoritePlace;
