import React, { Component } from 'react';
import './Favorites.css';
import FavoritePlace from './FavoritePlace';

import bobaGuysImg from './images/boba_guys.jpg';
import fishCheeksImg from './images/fish_cheeks.jpg';
import mountainHouseImg from './images/mountain_house.jpg';
import nomWahImg from './images/nom_wah.jpg';
import ramenLabImg from './images/ramen_lab.jpg';
import spiceWorldImg from './images/spice_world.jpg';

class Favorites extends Component {
  constructor(props) {
    super(props);
    // var bobaGuys = {image: bobaGuysImg, altText:"Boba Guys"}
  }

  render() {
    return (
      <div className="favoritesContainer">
        <FavoritePlace image={bobaGuysImg} altText="Boba Guys" />
        <FavoritePlace image={fishCheeksImg} altText="Fish Cheeks" />
        <FavoritePlace image={mountainHouseImg} altText="Mountain House" />
        <FavoritePlace image={nomWahImg} altText="Nom Wah" />
        <FavoritePlace image={ramenLabImg} altText="Ramen Lab" />
        <FavoritePlace image={spiceWorldImg} altText="Spice World" />
      </div>
    );
  }
}

export default Favorites;
