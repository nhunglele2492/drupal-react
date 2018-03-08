import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import logo from '../../Assets/images/logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <Link className="header__logo" to="/" label="logo"><img src={logo} alt=''/></Link>
          <Navbar />
        </div>
      </div>
    );
  }
}

export default Header;
