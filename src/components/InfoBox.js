import React, { Component } from 'react'
import Dropdown from './dropdown/Dropdown';


export default class InfoBox extends Component {

  render(){
    return(
      <div className="info-container">
        <h5>EARN FOR BEING SOCIAL</h5>
        <h1>Strength In Numbers</h1>
        <p>The little things add up. We use dozens of apps to connect to each other and to brands. At Fluz, we’re trying to bridge the two. Our mission is to connect as many shoppers as possible, so that earning money becomes as easy as spending it.</p>
        <Dropdown />
      </div>
    )
  }
}
