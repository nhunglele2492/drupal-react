import React from 'react';
import axios from 'axios';

import * as Utilities from '../api';
import DefaultLayout from '../layout/DefaultLayout';

class ResourcesDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
      image: ''
    }
  }

   // calling the componentDidMount() method after a component is rendered for the first time
  componentDidMount() {
    let id = '';
    if (this.props.match.params.id !== undefined) {
      id = this.props.match.params.id;
    }
    let self = this;
    this.serverRequest = axios.get(Utilities.getNodeUrl(id))
    .then(function(result){
      let img_src = '';
      Object.keys(result.data._embedded).forEach((key) => {
        if (key.indexOf('field_resource_image') >= 0) {
          const images = result.data._embedded[key];
          images.forEach((image) => {
            img_src = image.uri[0].value;
          });
        }
      });
      self.setState({
        title: result.data.title["0"].value,
        body: result.data.field_body["0"].value,
        image: img_src
      });
    })
   }

  render() {
    return (
      <DefaultLayout>
        <div className="page-heading">
          <div className="container">
            <div className="page-heading__inner">
              <h1 className="page-heading__title">{this.state.title}</h1>
            </div>
          </div>
        </div>
        <div className="box-feature">
          <div className="container">
            <div className="box-feature__inner">
              <div className="box-feature__text">{this.state.body}</div>
              <div className="box-feature__media"><img src={this.state.image} alt=""/></div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    )
  }
}

export default ResourcesDetail;
