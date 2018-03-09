import React, { Component } from 'react';
import DefaultLayout from '../layout/DefaultLayout';

import BlogList from '../components/BlogList';

class BlogPage extends Component {
  render() {
    return(
      <DefaultLayout>
        <div className="hero-banner hero-banner--small bg--dark">
          <div className="hero-banner__image"><img src="https://i.imgur.com/Zi2PJ4Y.jpg" alt="FFW images" width="1920" height="600" /> </div>
          <div className="hero-banner__inner">
            <div className="container">
              <div className="hero-banner__content">
                <h1 className="hero-banner__heading">Blog</h1>
              </div>
            </div>
          </div>
        </div>
        <BlogList/>
      </DefaultLayout>
    )
  }
}

export default BlogPage;
