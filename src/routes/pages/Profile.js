import React from 'react';
import axios from 'axios';
import DefaultLayout from '../layout/DefaultLayout';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      date: ''
    };
  }

  componentDidMount() {
    let uid = localStorage.getItem('uid');
    let auth = localStorage.getItem('auth');
    let self = this;
    this.serverRequest = axios.get('http://dev-d8react.pantheonsite.io/user/' + uid + '?_format=json', {
      headers: {"Authorization":"Basic " + auth}
    })
    .then(function(result){
      let datedate = result.data.created["0"].value;
      let cdate = (new Date(datedate)).toLocaleDateString();
      self.setState({
        'username': result.data.name["0"].value,
        'email': result.data.mail["0"].value,
        'date': cdate
      });

      localStorage.setItem('email', result.data.mail["0"].value);
    })
  }

  render() {
    return (
      <DefaultLayout title="Home Page">
        <div className="hero-banner hero-banner--small bg--dark">
          <div className="hero-banner__image"><img src="https://i.imgur.com/HdkxUjT.jpg" alt="FFW images" width="1920" height="600" /> </div>
          <div className="hero-banner__inner">
            <div className="container">
              <div className="hero-banner__content">
                <h1 className="hero-banner__heading">Welcome to visit my profile</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box-content">
            <p><b>UserName:</b> {this.state.username}</p>
            <p><b>Email:</b> {this.state.email}</p>
            <p><b>Created on:</b> {this.state.date}</p>
          </div>
        </div>
      </DefaultLayout>
    )
  }
}

export default Profile;
