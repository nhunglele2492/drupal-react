import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class WorkList extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
      client: '',
      image: ''
    }
  }

   // calling the componentDidMount() method after a component is rendered for the first time
  componentDidMount() {
    console.log(this.props);
    // let id = '';
    // if (this.props.match.params.id !== undefined) {
    //   id = this.props.match.params.id;
    // }
    // var self = this;
    // this.serverRequest = axios.get('http://dev-d8react.pantheonsite.io/node/' + id + '?_format=hal_json')
    // .then(function(result){
    //   self.setState({
    //     title: result.data.title["0"].value,
    //     body: result.data.body["0"].value,
    //     client: result.data.field_client_work["0"].value
    //   });
    // })
   }

  render() {
    return (
      <div>
        <div className="article-title text--center">
          <div className="container">
            <div className="article-title__datetime">{this.state.client}</div>
            <h1 className="article-title__heading">{this.state.title}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkList;
