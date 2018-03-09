import React, { Component } from 'react';
import { Link } from "react-router-dom";

class BoxHero extends Component {
  render() {
    return (
      <div className="hero-banner hero-banner--large bg--dark-blue--overlay">
        <div className="hero-banner__image"><img src="https://ffw-style.herokuapp.com/images/hero.jpg" alt="FFW images" width="2000" height="1500" /> </div>
        <div className="hero-banner__inner">
          <div className="container">
            <div className="hero-banner__content">
              <h1 className="hero-banner__heading">We engineer digital business solutions and create engaging online experiences.</h1>
              <div className="hero-banner__link"> <Link to="/work" className="btn">See our work</Link> <Link to="/contact" className="btn">Get in touch</Link> </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoxHero;
