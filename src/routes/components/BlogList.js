import React, { Component } from 'react';

import * as Utilities from '../api';
import { Link } from "react-router-dom";
import axios from 'axios';

class BlogList extends Component {
  constructor() {
     super();
     this.state = {
        data: []
     }
   }

   // Calling the componentDidMount() method after a component is rendered for the first time.
  componentDidMount() {
    let th = this;
    this.serverRequest = axios.get(Utilities.getFromView('blog'))
    .then(function(results) {
       th.setState({
         data: results.data
       });
     })
   }

  render() {
    let itemData = []
    this.state.data.map((item, index) => {
      itemData.push(<div className="article-list__item" key={index}>
          <div className="article-list__left">
            <h4 className="article-list__title"><Link to={"blog/" + item.nid[0].value }>{item.title[0].value}</Link></h4>
            <div className="article-author">
              <div className="article-author__group">
                <span>Thought by</span>
                <Link className="article-author__name" to={item.field_author[0].url}>{item.field_author[0].target_id}</Link>,
                <span className="article-author__position">{item.field_position[0].value}</span>
              </div>
            </div>
            <div className="article-list__body" dangerouslySetInnerHTML={{__html: item.body[0].value}} />
            <div className="article-list__meta">
              <div className="article-list__datetime">{item.field_date_time[0].value}</div>
            </div>
          </div>
          <div className="article-list__right">
            <div className="article-list__image"><img src={item.field_blog_image[0].url} alt=""/></div>
          </div>
       </div>);

       return itemData;
    })

    return (
      <div className="article-list">
        <div className="container">
          {itemData}
        </div>
      </div>
    );
  }
}

export default BlogList;
