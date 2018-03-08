import React from 'react';
import axios from 'axios';
import DefaultLayout from '../layout/DefaultLayout';

class BlogDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      date: '',
      title: '',
      image: '',
      body: '',
      author: '',
      position: ''
    }
  }

   // calling the componentDidMount() method after a component is rendered for the first time
  componentDidMount() {
    //console.log(this.props);
    let id = '';
    if (this.props.match.params.id !== undefined) {
      id = this.props.match.params.id;
    }
    var self = this;
    this.serverRequest = axios.get('http://dev-d8react.pantheonsite.io/node/' + id + '?_format=hal_json')
    .then(function(result){
      let img_src = '';
      Object.keys(result.data._embedded).forEach((key) => {
        if (key.indexOf('field_blog_image') >= 0) {
          const images = result.data._embedded[key];
          images.forEach((image) => {
            img_src = image.uri[0].value;
          });
        }
      });
      //console.log(result.data._embedded);
      self.setState({
        date: result.data.field_date_time["0"].value,
        title: result.data.title["0"].value,
        image: img_src,
        body: result.data.body["0"].value,
        position: result.data.field_position["0"].value,
      });
    })
   }

  render() {
    return (
      <DefaultLayout>
        <div class="article-title text--center">
          <div class="container">
            <div class="article-title__datetime">{this.state.date}</div>
            <h1 class="article-title__heading">{this.state.title}</h1>
            <div class="article-author">
              <div class="article-author__group">
                <span>Thought by</span>
                <a class="article-author__name" href={this.state.author}>{this.state.author}</a>,
                <span class="article-author__position">{this.state.position}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="block-text">
          <div className="container">
            <div className="block-text__content" dangerouslySetInnerHTML={{__html: this.state.body}} />
          </div>
        </div>
      </DefaultLayout>
    )
  }
}

export default BlogDetail;
