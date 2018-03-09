import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class BlogList extends Component {
  constructor() {
     super();
     this.state = {
        data: []
     }
   }

   // calling the componentDidMount() method after a component is rendered for the first time
  componentDidMount() {
    var th = this;
    this.serverRequest = axios.get("http://dev-d8react.pantheonsite.io/api/blog")
    .then(function(results) {
       th.setState({
         data: results.data
       });
     })
   }

  render() {
    var itemData = []
    this.state.data.map((item, index) => {
      itemData.push(<div className="article-list__item" key={index}>
          <div className="article-list__left">
            <h4 className="article-list__title"><Link to={"/blog/" + item.nid[0].value }>{item.title[0].value}</Link></h4>
            <div className="article-author">
              <div className="article-author__group">
                <span>Thought by</span>
                <a className="article-author__name" href={item.field_author[0].url}>{item.field_author[0].target_id}</a>,
                <span className="article-author__position">{item.field_position[0].value}</span>
              </div>
            </div>
            <div className="article-list__body">{item.body[0].value}</div>
            <div className="article-list__meta">
              <div className="article-list__datetime">{item.field_date_time[0].value}</div>
              <div className="article-list__tags">
                {
                  item.field_blog_tags.map((tag, index) => {
                    return <div className="article-list__tags__item" key={index}>{tag.url}</div>
                  })
                }
              </div>
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
