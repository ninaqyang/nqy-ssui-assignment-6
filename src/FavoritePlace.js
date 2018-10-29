import React, { Component } from 'react';
import './FavoritePlace.css';

class FavoritePlace extends Component {
  render() {
    const {
      click,
      image,
      altText,
      title
    } = this.props;

    return (
      <div className="favoritePlace" onClick={click} >
        <img className="favoritePlaceImg" src={image} alt={altText} />
        <div className="favoritePlaceText">
          <span>{title}</span>
        </div>
      </div>
    );
  }
}

export default FavoritePlace;
