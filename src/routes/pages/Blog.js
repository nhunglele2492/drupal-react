import React, { Component } from 'react';
import axios from 'axios';

import * as Utilities from '../api';
import DefaultLayout from '../layout/DefaultLayout';
import BlogList from '../components/BlogList';
import BoxHero from '../components/BoxHero';

class BlogPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hr_data: {}
    }
  }

  componentDidMount() {
    const hero_banner_id = 6;
    const heroBannerURL = Utilities.getBlockUrl(hero_banner_id);
    const th = this;

    th.serverRequest = axios.get(heroBannerURL)
    .then(function(res) {
      th.setState({
        hr_data: res.data
      });
    })
    .catch((err) => console.log('err:', err))
  }

  render() {
    let hero_banner = [];

    if (Utilities.notEmpty(this.state.hr_data)) {
      let {hr_data} = this.state;
      hero_banner = hr_data.field_classes.length > 0 ? {...hero_banner, 'classes': hr_data.field_classes[0].value} : hero_banner;
      hero_banner = hr_data.field_image.length > 0 ? {...hero_banner, 'image': hr_data.field_image[0]} : hero_banner;
      hero_banner = hr_data.field_title.length > 0 ? {...hero_banner, 'title': hr_data.field_title[0].value} : hero_banner;
    }

    return(
      <DefaultLayout>
        <BoxHero data={hero_banner} />
        <BlogList/>
      </DefaultLayout>
    )
  }
}

export default BlogPage;
