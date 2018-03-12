import React from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";

import * as Utilities from '../api';
import DefaultLayout from '../layout/DefaultLayout';
import BoxHero from '../components/BoxHero';

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
      redirect: false,
      hr_data: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const hero_banner_id = 7;
    const heroBannerURL = Utilities.getBlockUrl(hero_banner_id);
    const th = this;

    th.serverRequest = axios.get(heroBannerURL)
    .then(function(res) {
      th.setState({
        hr_data: res.data
      });
    })
    .catch((err) => console.log('err:', err))
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

    axios.post(Utilities.getUserLogin(), {
      name: this.state.name,
      pass: this.state.password
    })
    .then(function (response) {
      self.setState({
        'success': 'Login successful',
        'error': ''
      });

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
      messagesText = <div className="form-item"><p className="messages messages--error" dangerouslySetInnerHTML={{__html: this.state.error}} /></div>
    }

    let successText = '';
      if (this.state.success) {
      successText = <div className="form-item"><p className="messages messages--status">{this.state.success}</p></div>
    }

    let hero_banner = [];
    if (Utilities.notEmpty(this.state.hr_data)) {
      let {hr_data} = this.state;
      hero_banner = hr_data.field_classes.length > 0 ? {...hero_banner, 'classes': hr_data.field_classes[0].value} : hero_banner;
      hero_banner = hr_data.field_image.length > 0 ? {...hero_banner, 'image': hr_data.field_image[0]} : hero_banner;
      hero_banner = hr_data.field_title.length > 0 ? {...hero_banner, 'title': hr_data.field_title[0].value} : hero_banner;
      hero_banner = hr_data.body.length > 0 ? {...hero_banner, 'body': hr_data.body[0].value} : hero_banner;
    }

    return (
      <DefaultLayout title="Home Page">
        <BoxHero data={hero_banner} />
        <div className="container">
          <form onSubmit={this.handleSubmit} className="box-content">
            {messagesText}
            {successText}
            <div className="form-item form-type-textfield form-item-name">
              <input name="name" value={this.state.name} onChange={this.handleChange} required id="name" className="form-text" type="text" placeholder="Enter Username" />
            </div>
            <div className="form-item form-type-textfield form-item-name">
              <input name="password" value={this.state.password} onChange={this.handleChange} id="password" className="form-text" type="password" placeholder="Enter password" />
            </div>
            <div className="form-actions"> <input type="submit" className="form-submit" value="Login" /> </div>
            <br />
            <div><Link to='/user/register'>Dont have an account?</Link></div>
          </form>
        </div>
      </DefaultLayout>
    )
  }
}

export default Login;
