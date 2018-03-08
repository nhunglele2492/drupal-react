import React, { Component } from 'react'

export default class Textarea extends Component {
  constructor(props) {
    super(props);

    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(e) {
    this.props.onChange(e);
  }

  render() {
    const { label, required, placeholder, name } = this.props;
    const classes = required ? 'form-item form-type-textarea required' : 'form-item form-type-textarea';

    return (
      <div className={classes}>
        <label>{label}</label>
        <div className="form-textarea-wrapper">
          <textarea name={name} className="form-textarea" required={required}
            placeholder={placeholder} onChange={this.inputChange}></textarea>
        </div>
      </div>
    )
  }
}
