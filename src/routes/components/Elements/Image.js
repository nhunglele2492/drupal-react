import React, { Component } from 'react'

export default class Image extends Component {
  render() {
    let {image} = this.props;
    let imageAttr = image;
    let alt="Image FFW";

    if(image && image.url) {
      imageAttr = {...image, src: image.url}
    }

    if(image && image.alt) {
      alt = image.alt;
    }

    return (
      <img {...imageAttr} alt={alt} />
    )
  }
}
