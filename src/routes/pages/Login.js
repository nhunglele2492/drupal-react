import React from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import DefaultLayout from '../layout/DefaultLayout';

class Login extends React.Component {
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

    axios.post('http://dev-d8react.pantheonsite.io/user/login?_format=json', {
      name: this.state.name,
      pass: this.state.password
    })
    .then(function (response) {
      self.setState({
        'success': 'Login successful',
        'error': ''
      });

      console.log(response);
      localStorage.setItem('username', response.data.current_user.name);
      localStorage.setItem('uid', response.data.current_user.uid);
      localStorage.setItem('csrf_token', response.data.csrf_token);
      localStorage.setItem('logout_token', response.data.logout_token);
      localStorage.setItem('auth', window.btoa(self.state.name + ':' + self.state.password));

      self.setState({redirect: true});
    })
    .catch(function (error) {
      let errorResponse = error.response.data.message;
      errorResponse = errorResponse.replace(/(?:\r\n|\r|\n)/g, '<br />');
      self.setState({
        'success': '',
        'error': errorResponse
      });
    });
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to="/" />
      );
    }
    let messagesText = '';
    if (this.state.error) {
      messagesText = <p className="messages messages--error" dangerouslySetInnerHTML={{__html: this.state.error}} />
    }

    return (
      <DefaultLayout title="Home Page">
        <div className="hero-banner hero-banner--small bg--dark">
          <div className="hero-banner__image"><img src="//unsplash.it/1920/600" alt="FFW images" width="1920" height="600" /> </div>
          <div className="hero-banner__inner">
            <div className="container">
              <div className="hero-banner__content">
                <h1 className="hero-banner__heading">Login</h1>
                <h5 className="hero-banner__subtitle">Please enter your account and password to login</h5>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="form-group">
              {messagesText}
            </div>
            <div className="form-item form-type-textfield form-item-name">
              <input name="name" value={this.state.name} onChange={this.handleChange} required id="name" className="form-text" type="text" placeholder="Enter Username" />
            </div>
            <div className="form-item form-type-textfield form-item-name">
              <input name="password" value={this.state.password} onChange={this.handleChange} id="password" className="form-text" type="password" placeholder="Enter password" />
            </div>
            <div className="form-actions"> <input type="submit" className="form-submit" value="Login" /> </div>
            <br />
            <div><Link to='/user/register'>Dont have an account?</Link></div>
          </div>
        </form>
      </DefaultLayout>
    )
  }
}

export default Login;
