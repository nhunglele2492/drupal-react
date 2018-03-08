import React, { Component } from 'react';
import DefaultLayout from '../layout/DefaultLayout';

import BlogList from '../components/BlogList';

class BlogPage extends Component {
  render() {
    return(
      <DefaultLayout>
        <BlogList/>
      </DefaultLayout>
    )
  }
}

export default BlogPage;
