import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Image from "./Elements/Image";

class BoxHero extends Component {
  render() {
    const data = this.props.data;
    const classes = data.classes ? data.classes : '';
    const image = data.image ? data.image: {};
    const title = data.title ? data.title: '';
    const body = data.body ? data.body: '';
    let links = [];
    if(data.links) {
      data.links.forEach((link, key) => {
        links.push(<Link key={key} to={link.uri.replace('internal:', '')} className="btn">{link.title}</Link>);
      })
    }

    return (
      <div className={"hero-banner " + classes}>
        <div className="hero-banner__image"><Image image={image} /></div>
        <div className="hero-banner__inner">
          <div className="container">
            <div className="hero-banner__content">
              <h1 className="hero-banner__heading">{title}</h1>
              <h5 className="hero-banner__subtitle" dangerouslySetInnerHTML={{__html: body}} />
              <div className="hero-banner__link">{links}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoxHero;
