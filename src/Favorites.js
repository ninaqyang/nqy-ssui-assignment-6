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
      address: ["Boba Guys", "11 Waverly Place", "New York, NY 10002"],
      description: "Boba Guys is probably my favorite bubble tea shop in this country. They provide the most natural ingredients including their boba or pearls which are made in house like all their other toppings as well. Their teas are brewed and mixed in house as well and a lot of the sweetners come from the fruit being naturally sweet. This is my favorite place to go for a mid day break as there was one located near my old job in Astor Place."
    }

    this.fishCheeks = {
      title: "Fish Cheeks",
      image: fishCheeksImg,
      address: ["Fish Cheeks", "55 Bond Street", "New York, NY 10012"],
      description: "Fish Cheeks is just one of those restaurants that tastes great no matter what you order. They serve South Asian cuisine and although the prices are a bit on the expensive side, the taste justifies the price. I went here with my close friends for happy hour and got a set for 3 people and we were stuffed after. I also brought my mom here on another occassion and she was also pleasantly surprised at how amazing everything tasted."
    }

    this.mountainHouse = {
      title: "Szechuan Mountain House",
      image: mountainHouseImg,
      address: ["Szechuan Mountain House", "23 St Marks Place", "New York, NY 10003"],
      description: "Szechuan Mountain House is one of the more authentic Chinese restaurants around St Marks. Their first restaurant was opened in Flushing, but the Manhattan location is just as great. The food is spicy enough to attract overseas Chinese tourists and locals. It is definitely one of my favorite go tos for authentic Sichuanese food."
    }

    this.nomWah = {
      title: "Nom Wah Tea Parlor",
      image: nomWahImg,
      address: ["Nom Wah Tea Parlor", "13 Doyers Street", "New York, NY 10013"],
      description: "Nom Wah Tea Parlor is the oldest dim sum restaurant in New York City. I have been here twice and can attest to its popularity. Although there are cheaper dim sum alternatives nearby, Nom Wah has a feel inside that no other restaurant can beat due to its 90s interior. There is a nostalgic element that the dim sum brings out and it is a popular tourist spot. The restaurant has popped up in multiple articles as well."
    }

    this.ramenLab = {
      title: "Ramen Lab",
      image: ramenLabImg,
      address: ["Ramen Lab", "13 Kenmare Street", "New York, NY 10012"],
      description: "I discovered Ramen Lab quite late in my ramen adventures around NYC. I have had ramen at the popular spots like Ippudo and Totto Ramen. Unlike these other chains, Ramen Lab is a tiny place squeezed between other restaurants. There is one counter where people stand and eat their ramen and they change their menu every month. It sounds a bit dingy but it was the best ramen I have ever had in the country."
    }

    this.spiceWorld = {
      title: "Spice World",
      image: spiceWorldImg,
      address: ["Spice World", "136-20 Roosevelt Avenue #2m", "Flushing, NY 11354"],
      description: "Spice World is one of the best hot pots ever because it is one of the few authentic and traditional Sichuanese hot pots in NYC. I love to eat Sichuanese food, but even the mild soup base here burns my tongue. This means that it is not for the faint of heart. You have to really love your spice and be able to handle it well to eat here. Although there are soup bases that are non spicy, hot pot is not the same without a spicy base."
    }

    this.state = {
      showModal: false,
      favPlaces: [this.bobaGuys, this.fishCheeks, this.mountainHouse, this.nomWah, this.ramenLab, this.spiceWorld],
      description: null,
    };
  }

  selectedPlace(id) {
    console.log("selected", id)
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
    var places = []
    for(var i=0; i < this.state.favPlaces.length; i++) {
      var place = this.state.favPlaces[i]
      places.push(<FavoritePlace click = {this.selectedPlace.bind(this, i)} title={place.title} image={place.image} altText={place.altText} />)
    }

    return (
      <div className="bodyContainer">
        <h2>Food Edition</h2>
        <div className="favoritesContainer">
          {places}
          {this.renderModal()}
        </div>
        <footer>Copyright 2018 Nina Yang</footer>
      </div>
    );
  }
}

export default Favorites;
