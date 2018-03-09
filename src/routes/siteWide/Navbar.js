import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem('username')
    };
  }

  renderLink() {
    let loggedIn = localStorage.getItem('auth');
    let uid = localStorage.getItem('uid');
    if(loggedIn) {
      return(
        <li className="user-info"><Link to={"/user/" + uid }>Hi, {this.state.username} </Link><span>|</span><Link to="/user/logout">Logout</Link></li>
      )
    } else {
      return(
        <li><Link to="/user/login">Login</Link></li>
      )
    }
  }

  render() {
    return (
      <nav className="navigation menu--main">
        <ul className="menu header__nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {this.renderLink()}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
