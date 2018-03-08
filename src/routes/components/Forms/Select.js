import React, { Component } from 'react'

export default class Select extends Component {
  constructor(props) {
    super(props);

    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(e) {
    this.props.onChange(e);
  }

  render() {
    const { label, options, required, name, defaultValue, multiple } = this.props;
    const classes = required ? 'form-item form-type-select required' : 'form-item form-type-select';

    return (
      <div className={classes}>
        <label>{label}</label>
        <select className="form-select" name={name}
          defaultValue={defaultValue}
          multiple={multiple}
          onChange={this.inputChange} required={required}>
          { options.map((item) => <option key={item.value} value={item.value}>{item.text}</option>) }
        </select>
      </div>
    )
  }
}
