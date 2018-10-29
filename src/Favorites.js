import React, { Component } from 'react';
import './Favorites.css';
import FavoritePlace from './FavoritePlace';
import DescriptionModal from './DescriptionModal';

import bobaGuysImg from './images/boba_guys.jpg';
import fishCheeksImg from './images/fish_cheeks.jpg';
import mountainHouseImg from './images/mountain_house.jpg';
import nomWahImg from './images/nom_wah.jpg';
import ramenLabImg from './images/ramen_lab.jpg';
import spiceWorldImg from './images/spice_world.jpg';

class Favorites extends Component {
  constructor(props) {
    super(props);

    this.bobaGuys = {
      title: "Boba Guys",
      image: bobaGuysImg,
      address: "Boba Guys, 11 Waverly Place, New York, NY 10002",
      description: "Boba Guys is probably my favorite bubble tea shop in this country. They provide the most natural ingredients including their boba or pearls which are made in house like all their other toppings as well. Their teas are brewed and mixed in house as well and a lot of the sweetners come from the fruit being naturally sweet. This is my favorite place to go for a mid day break as there was one located near my old job in Astor Place."
    }

    this.fishCheeks = {
      title: "Fish Cheeks",
      image: fishCheeksImg,
      address: "Fish Cheeks, 55 Bond Street, New York, NY 10012",
      description: "Boba Guys is probably my favorite"
    }

    this.mountainHouse = {
      title: "Szechuan Mountain House",
      image: mountainHouseImg,
      address: "Szechuan Mountain House, 23 St Marks Place, New York, NY 10003",
      description: "Boba Guys is probably my favorite"
    }

    this.nomWah = {
      title: "Nom Wah Tea Parlor",
      image: nomWahImg,
      address: "Nom Wah Tea Parlor, 13 Doyers Street, New York, NY 10013",
      description: "Boba Guys is probably my favorite"
    }

    this.ramenLab = {
      title: "Ramen Lab",
      image: ramenLabImg,
      address: "Ramen Lab, 13 Kenmare Street, New York, NY 10012",
      description: "Boba Guys is probably my favorite"
    }

    this.spiceWorld = {
      title: "Spice World",
      image: spiceWorldImg,
      address: "Spice World, 136-20 Roosevelt Avenue #2m, Flushing, NY 11354",
      description: "Boba Guys is probably my favorite"
    }

    this.state = {
      showModal: false,
      favPlaces: [this.bobaGuys, this.fishCheeks, this.mountainHouse, this.nomWah, this.ramenLab, this.spiceWorld],
      description: null,
    };
  }

  handleToggleModal() {
    this.setState({showModal: !this.state.showModal});
  }

  selectedPlace(id) {
    console.log("selected", id)
    this.handleToggleModal()
    var place = this.state.favPlaces[id]
    var descriptionModal = <DescriptionModal onClose = {(ev) => this.setState({description: null})} title={place.title} description={place.description} address={place.address} />
    this.setState({description: descriptionModal})
  }

  renderModal() {
    if (this.state.description !== null) {
      return this.state.description
    }
  }

  render() {
    const { showModal } = this.state;

    var elements = []
    for(var i=0; i < this.state.favPlaces.length; i++) {
      var place = this.state.favPlaces[i]
      elements.push(<FavoritePlace click = {this.selectedPlace.bind(this, i)} title={place.title} image={place.image} altText={place.altText} />)
    }

    return (
      <div className="bodyContainer">
        <h2>Food Edition</h2>
        <div className="favoritesContainer">
          {elements}
          {this.renderModal()}
        </div>
        <footer>Copyright 2018 Nina Yang</footer>
      </div>
    );
  }
}

export default Favorites;
