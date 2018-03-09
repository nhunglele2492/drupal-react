import React, { Component } from 'react';
import { Link } from "react-router-dom";

class OurCLients extends Component {
  render() {
    return (
      <div className="grid-client bg--light-gray">
        <div className="container">
          <h2 className="grid-client__heading">Our Clients</h2>
          <div className="grid-client__description">
            <p>We build creative, powerful, and user-friendly digital solutions that deliver results. For over 16 years, brands across the world have relied on us to take on their most difficult technical challenges.</p>
          </div>
          <div className="grid-client__list">
            <div className="grid-client__item">
              <a className="grid-client__logo" href="/">
                <div className="grid-client__logo__normal"><img src="https://ffw-style.herokuapp.com/images/client/logo1.png" alt="FFW images" width="140" height="100"/> </div>
                <div className="grid-client__logo__hover"><img src="https://ffw-style.herokuapp.com/images/client/logo1hover.png" alt="FFW images" width="140" height="100"/> </div>
              </a>
            </div>
            <div className="grid-client__item">
              <a className="grid-client__logo" href="/">
                <div className="grid-client__logo__normal"><img src="https://ffw-style.herokuapp.com/images/client/logo2.png" alt="FFW images" width="140" height="100"/> </div>
                <div className="grid-client__logo__hover"><img src="https://ffw-style.herokuapp.com/images/client/logo2hover.png" alt="FFW images" width="140" height="100"/> </div>
              </a>
            </div>
            <div className="grid-client__item">
              <a className="grid-client__logo" href="/">
                <div className="grid-client__logo__normal"><img src="https://ffw-style.herokuapp.com/images/client/logo3.png" alt="FFW images" width="140" height="100"/> </div>
                <div className="grid-client__logo__hover"><img src="https://ffw-style.herokuapp.com/images/client/logo3hover.png" alt="FFW images" width="140" height="100"/> </div>
              </a>
            </div>
            <div className="grid-client__item">
              <a className="grid-client__logo" href="/">
                <div className="grid-client__logo__normal"><img src="https://ffw-style.herokuapp.com/images/client/logo4.png" alt="FFW images" width="140" height="100"/> </div>
                <div className="grid-client__logo__hover"><img src="https://ffw-style.herokuapp.com/images/client/logo4hover.png" alt="FFW images" width="140" height="100"/> </div>
              </a>
            </div>
            <div className="grid-client__item">
              <a className="grid-client__logo" href="/">
                <div className="grid-client__logo__normal"><img src="https://ffw-style.herokuapp.com/images/client/logo5.png" alt="FFW images" width="140" height="100"/> </div>
                <div className="grid-client__logo__hover"><img src="https://ffw-style.herokuapp.com/images/client/logo5hover.png" alt="FFW images" width="140" height="100"/> </div>
              </a>
            </div>
            <div className="grid-client__item">
              <a className="grid-client__logo" href="/">
                <div className="grid-client__logo__normal"><img src="https://ffw-style.herokuapp.com/images/client/logo6.png" alt="FFW images" width="140" height="100"/> </div>
                <div className="grid-client__logo__hover"><img src="https://ffw-style.herokuapp.com/images/client/logo6hover.png" alt="FFW images" width="140" height="100"/> </div>
              </a>
            </div>
          </div>
          <div className="grid-client__link"><Link to="/contact" className="btn">Contact Us</Link></div>
        </div>
      </div>
    );
  }
}

export default OurCLients;
