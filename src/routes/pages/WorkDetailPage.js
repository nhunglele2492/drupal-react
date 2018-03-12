import React from 'react';
import axios from 'axios';

import * as Utilities from '../api';
import DefaultLayout from '../layout/DefaultLayout';

class WorkDetailPage extends React.Component {
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
    let id = '';
    if (this.props.match.params.id !== undefined) {
      id = this.props.match.params.id;
    }
    let self = this;
    this.serverRequest = axios.get(Utilities.getNodeUrl(id))
    .then(function(result){
      let img_src = '';
      Object.keys(result.data._embedded).forEach((key) => {
        if (key.indexOf('field_image_work') >= 0) {
          const images = result.data._embedded[key];
          images.forEach((image) => {
            img_src = image.uri[0].value;
          });
        }
      });
      self.setState({
        title: result.data.title["0"].value,
        body: result.data.body["0"].value,
        client: result.data.field_client_work["0"].value,
        image: img_src
      });
    })
   }

  render() {
    return (
      <DefaultLayout title="Work Detail Page">
        <div>
          <div className="hero-banner hero-banner--small bg--dark">
            <div className="hero-banner__image"><img src={this.state.image} alt="FFW images" width="1920" height="600" /> </div>
            <div className="hero-banner__inner">
              <div className="container">
                <div className="hero-banner__content">
                  <h1 className="hero-banner__heading">{this.state.title}</h1>
                  <h5 className="hero-banner__subtitle">{this.state.client}</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="block-text block-text--small">
            <div className="container">
              <div className="block-text__content" dangerouslySetInnerHTML={{__html: this.state.body}} />
            </div>
          </div>

        </div>
      </DefaultLayout>
    )
  }
}

export default WorkDetailPage;
