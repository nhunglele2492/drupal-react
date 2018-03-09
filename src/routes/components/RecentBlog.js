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
      itemData.push(
        <div key={index} className="grid-feed__item grid-feed__item--blog" style={{backgroundImage: "url(" + item.field_blog_image[0].url + ")"}}>
          <div className="grid-feed__content">
          </div>
          <div className="grid-feed__link"><Link to={"blog/" + item.nid[0].value }></Link></div>
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
