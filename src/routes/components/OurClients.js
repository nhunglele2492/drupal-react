import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Image from "./Elements/Image";

class OurCLients extends Component {
  render() {
    const data = this.props.data;
    const classes = data.classes ? data.classes : '';
    const title = data.title ? data.title: '';
    const body = data.body ? data.body: '';
    let list = [];
    let links = [];

    if(data.list) {
      data.list.forEach((item, key) => {
        list.push(
          <div className="grid-client__item" key={key}>
            <a className="grid-client__logo" href="/">
              <div className="grid-client__logo__normal"><Image image={item.image_normal[0]} /></div>
              <div className="grid-client__logo__hover"><Image image={item.image_hover[0]} /></div>
            </a>
          </div>
        )
      })
    }

    if(data.links) {
      data.links.forEach((link, key) => {
        links.push(<Link key={key} to={link.uri.replace('internal:', '')} className="btn">{link.title}</Link>);
      })
    }

    return (
      <div className={"grid-client " + classes }>
        <div className="container">
          <h2 className="grid-client__heading">{title}</h2>
          <div className="grid-client__description" dangerouslySetInnerHTML={{__html: body}} />
          <div className="grid-client__list">{list}</div>
          <div className="grid-client__link">{links}</div>
        </div>
      </div>
    );
  }
}

export default OurCLients;
