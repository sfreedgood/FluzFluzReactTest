import React, { Component } from 'react'
import Slider from 'react-slick'
import Cards from './Card';

const dataArray = require('../../data')

class Carosel extends Component {
  state = {
    cards: null,
  }

  componentWillMount = () => {
    this.renderCards()
  }

  renderCards = () => {
    let cards = dataArray.map((data, key) => (
      <Cards key={key} data={data} />
    ))
    this.setState(prevState => ({
      cards
    }))
  }

  render() { 
    const settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      easing: "easeInOutQuart",
      speed: 500,
      rtl: true,
      slidesToShow: 1.5,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings} className="carosel">
        {this.state.cards}
      </Slider>
    );
  }
}
 
export default Carosel;