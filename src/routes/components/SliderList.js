import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Slider from 'react-slick';

class SliderList extends Component {
  constructor() {
     super();
     this.state = {
        data: []
     }
   }

   // calling the componentDidMount() method after a component is rendered for the first time
  componentDidMount() {
    let th = this;
    this.serverRequest = axios.get("http://dev-d8react.pantheonsite.io/api/resources")
    .then(function(results) {
       th.setState({
         data: results.data
       });
     })
   }

  render() {
    let itemData = [];
    let settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false
    };

    this.state.data.map((item, index) => {
      itemData.push(<div className="slide__item bg--dark-blue--overlay" key={index}>
         <div className="slide__media" style={{backgroundImage: "url(" + item.field_resource_image[0].url + ")"}}>
          </div>
          <div className="slide__constrained">
            <div className="slide__caption container">
              <h2 className="slide__title">{item.title[0].value}</h2>
              <div className="slide__description">{item.field_body[0].value.substring(0, 82)}</div>
              <div className="slide__link"><Link to={"resources/" + item.nid[0].value} className="btn">{item.field_text_link[0].value}</Link></div>
            </div>
          </div>
       </div>);
       return itemData;
    })

    return (
      <div className="featured-resources">
        <Slider {...settings}>
          {itemData}
        </Slider>
      </div>
    );
  }
}

export default SliderList;
