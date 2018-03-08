import React, { Component } from 'react';
import { Link } from "react-router-dom";

import logo from '../../Assets/images/logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <Link className="header__logo" to="/" label="logo"><img src={logo} alt=''/></Link>
          <nav className="navigation menu--main">
            <ul className="menu header__nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
