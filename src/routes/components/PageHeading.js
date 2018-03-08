import React, { Component } from 'react'

export default class PageHeading extends Component {
  render() {
    const {title, description, classes} = this.props;

    return (
      <div className={"page-heading " + classes}>
        <div className="container">
          <div className="page-heading__inner">
            <h1 className="page-heading__title">{title}</h1>
            <div className="page-heading__description">
              {description}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
