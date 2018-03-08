import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class BoxWork extends Component {
  constructor() {
     super();
     this.state = {
        data: []
     }
   }

   // calling the componentDidMount() method after a component is rendered for the first time
  componentDidMount() {
    var th = this;
    this.serverRequest = axios.get("http://dev-d8react.pantheonsite.io/api/boxwork")
    .then(function(results) {
       th.setState({
         data: results.data
       });
     })
   }

  render() {
    var itemData = []
    this.state.data.map((item, index) => {
      itemData.push(<div className="grid-content__item" key={index}>
         <div className="grid-content__link"><Link to={"work/" + item.nid[0].value }>Read More</Link></div>
         <div className="grid-content__image"><img src={item.field_image_work[0].url} alt="FFW images" width="760" height="760" /></div>
         <div className="grid-content__group">
           <h4 className="grid-content__title">{item.title[0].value}</h4>
           <div className="grid-content__subtitle">{item.field_client_work[0].value}</div>
         </div>
       </div>);

       return itemData;
    })

    return (
      <div className="grid-content grid-content--space-big ">
        <div className="container">
          <h3 className="grid-content__heading">Our Work</h3>
          <div className="grid-content__inner">
            {itemData}
          </div>
          <div className="grid-content__readmore"><Link to="/work" className="btn">See more projects</Link></div>
        </div>
      </div>
    );
  }
}

export default BoxWork;
