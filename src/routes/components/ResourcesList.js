import React, { Component } from 'react';

import * as Utilities from '../api';
import { Link } from "react-router-dom";
import axios from 'axios';

class ResourcesList extends Component {
  constructor() {
     super();
     this.state = {
        data: []
     }
   }

   // calling the componentDidMount() method after a component is rendered for the first time
  componentDidMount() {
    let th = this;
    this.serverRequest = axios.get(Utilities.getFromView('resources'))
    .then(function(results) {
       th.setState({
         data: results.data
       });
     })
   }

  render() {
    let itemData = []
    this.state.data.map((item, index) => {
      itemData.push(<div className="resources-view__item" key={index}>
         <div className="resources-view__link-img">
            <Link to={"resources/" + item.nid[0].value } style={{backgroundImage: "url(" + item.field_resource_image[0].url + ")"}}>
              <div className="read-more">Read More</div>
            </Link>
          </div>
          <div className="resources-view__type">{item.field_type[0].value}</div>
          <div className="resources-view__title">{item.title[0].value}</div>
       </div>);

       return itemData;
    })

    return (
      <div className="resources-view ">
        <div className="container">
          <div className="resources-view__grid">
            {itemData}
          </div>
        </div>
      </div>
    );
  }
}

export default ResourcesList;
