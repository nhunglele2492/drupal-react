import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import DefaultLayout from '../layout/DefaultLayout';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      success: '',
      error: '',
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    this.setState({
      [key]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    let self = this;

    if (this.state.password !== this.state.password2) {
      self.setState({
        'success': '',
        'error': 'Passwords do not match'
      });
      return;
    }

    axios.post('http://dev-d8react.pantheonsite.io/user/register?_format=json', {
      name: [{"value": this.state.name}],
      mail: [{"value": this.state.email}],
      pass: [{"value": this.state.password}]
    })
    .then(function (response) {
      self.setState({
        'success': 'Registration successful.',
        'error': ''
      });
      self.setState({redirect: true});
    })
    .catch(function (error) {
      var errorResponse = error.response.data.message;
      errorResponse = errorResponse.replace(/(?:\r\n|\r|\n)/g, '<br />');
      self.setState({
        'success': '',
        'error': errorResponse
      });
    });
  }

  render() {
    let messagesText = '';
    if (this.state.error) {
      messagesText = <div className="form-item"><p className="messages messages--error" dangerouslySetInnerHTML={{__html: this.state.error}} /></div>
    }

    let successText = '';
      if (this.state.success) {
      successText = <div className="form-item"><p className="messages messages--status">{this.state.success}</p></div>
    }

    return (
      <DefaultLayout title="Home Page">
        <div className="hero-banner hero-banner--small bg--dark">
          <div className="hero-banner__image"><img src="https://i.imgur.com/U4CSCJh.jpg" alt="FFW images" width="1920" height="600" /> </div>
          <div className="hero-banner__inner">
            <div className="container">
              <div className="hero-banner__content">
                <h1 className="hero-banner__heading">Register</h1>
                <h5 className="hero-banner__subtitle">Please enter your infomation to register</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <form onSubmit={this.handleSubmit} className="box-content">
            {messagesText}
            {successText}
            <div className="form-item form-type-textfield form-item-name">
              <input name="name" value={this.state.name} onChange={this.handleChange} id="name" className="form-text" type="text" placeholder="Enter Username" />
            </div>
            <div className="form-item form-type-textfield form-item-name">
              <input name="email" value={this.state.email} onChange={this.handleChange} id="email" className="form-text" type="email" placeholder="Enter Email" />
            </div>
            <div className="form-item form-type-textfield form-item-name">
              <input name="password" value={this.state.password} onChange={this.handleChange} id="password" className="form-text" type="password" placeholder="Enter password" />
            </div>
            <div className="form-item form-type-textfield form-item-name">
              <input name="password2" value={this.state.password2} onChange={this.handleChange} id="password2" className="form-text" type="password" placeholder="Enter password again" />
            </div>
            <div className="form-actions"> <input type="submit" className="form-submit" value="Register" /> </div>
            <br />
            <div><Link to='/user/login'>Already have an account?</Link></div>
          </form>
        </div>
      </DefaultLayout>
    )
  }
}

export default Register;
