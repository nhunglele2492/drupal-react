import React, { Component } from 'react'

export default class Button extends Component {  
  render() {
    const { label, type } = this.props;

    return (
      <div className="form-actions">
        <input type={type} className="form-submit" value={label} />
      </div>
    )
  }
}
