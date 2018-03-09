import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class WorkList extends Component {
  constructor() {
     super();
     this.state = {
        data: []
     }
   }

   // calling the componentDidMount() method after a component is rendered for the first time
  componentDidMount() {
    let th = this;
    this.serverRequest = axios.get("http://dev-d8react.pantheonsite.io/api/worklist")
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
             <h4 className="article-list__title">{item.title}</h4>
             <div className="article-list__body" dangerouslySetInnerHTML={{__html: item.body}} />
             <div className="article-list__link"><Link to={"/work/" + item.nid } className="btn">See the case study</Link></div>
           </div>
           <div className="article-list__right">
             <div className="article-list__image"><img src={"http://dev-d8react.pantheonsite.io" + item.field_image_work} alt=""/></div>
           </div>

        </div>);

        return itemData;
     })

     return (
       <div className="article-list work-list">
         <div className="container">
            {itemData}
         </div>
       </div>
     );
   }
}

export default WorkList;
