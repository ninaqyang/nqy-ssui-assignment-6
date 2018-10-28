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
    // this.createHoverStateWith = this.createHoverStateWith.bind(this);
    // var bobaGuys = {image: bobaGuysImg, altText:"Boba Guys"}
  }

  render() {
    return (
      <div className="favoritesContainer">
        <FavoritePlace title="Boba Guys" image={bobaGuysImg} altText="Boba Guys" />
        <FavoritePlace title="Fish Cheeks" image={fishCheeksImg} altText="Fish Cheeks" />
        <FavoritePlace title="Szechuan Mountain House" image={mountainHouseImg} altText="Mountain House" />
        <FavoritePlace title="Nom Wah Tea Parlor" image={nomWahImg} altText="Nom Wah" />
        <FavoritePlace title="Ramen Lab" image={ramenLabImg} altText="Ramen Lab" />
        <FavoritePlace title="Spice World" image={spiceWorldImg} altText="Spice World" />
      </div>
    );
  }
}

export default Favorites;
