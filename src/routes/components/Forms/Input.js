import React, { Component } from 'react'

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(e) {
    this.props.onChange(e);
  }

  render() {
    const { label, type, required, placeholder, name } = this.props;
    const classes = required ? 'form-item form-type-textfield required' : 'form-item form-type-textfield';

    return (
      <div className={classes}>
        <label>{label}</label>
        <input type={type} name={name} className="form-text" placeholder={placeholder}
          required={required} onChange={this.inputChange} />
      </div>
    )
  }
}
