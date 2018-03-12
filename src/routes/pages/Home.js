import React from 'react';
import axios from 'axios';

import * as Utilities from '../api';
import DefaultLayout from '../layout/DefaultLayout';
import BoxWork from '../components/BoxWork';
import OurClients from '../components/OurClients';
import BoxHero from '../components/BoxHero';
import RecentResources from '../components/RecentResources';
import RecentBlog from '../components/RecentBlog';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hr_data: {},
      oc_data: {},
      oc_para_data: []
    }
  }

  componentDidMount() {
    const hero_banner_id = 2;
    const our_clients_id = 4;
    const heroBannerURL = Utilities.getBlockUrl(hero_banner_id);
    const ourClientsURL = Utilities.getBlockUrl(our_clients_id);
    const th = this;

    th.serverRequest = axios.get(heroBannerURL)
    .then(function(res) {
      th.setState({
        hr_data: res.data
      });
    })
    .catch((err) => console.log('err:', err))

    th.serverRequest = axios.get(ourClientsURL)
    .then(function(res) {
      th.setState({
        oc_data: res.data
      });
      if(res.data.field_paragraph){
        res.data.field_paragraph.forEach((item) => {
          th.serverRequest = axios.get(Utilities.getParagraphUrl(item.target_id))
          .then(function(res) {
            th.setState((prevState) => {
              return { oc_para_data: [...prevState.oc_para_data, res.data] }
            });
          })
          .catch((err) => console.log('err:', err))
        })
      }
    })
    .catch((err) => console.log('err:', err))
  }

  render() {
    let hero_banner = [];
    let our_client = [];

    if(this.state.hr_data) {
      let {hr_data} = this.state;
      hero_banner = hr_data.field_classes ? {...hero_banner, 'classes': hr_data.field_classes[0].value} : hero_banner;
      hero_banner = hr_data.field_image ? {...hero_banner, 'image': hr_data.field_image[0]} : hero_banner;
      hero_banner = hr_data.field_title ? {...hero_banner, 'title': hr_data.field_title[0].value} : hero_banner;
      hero_banner = hr_data.field_more_link ? {...hero_banner, 'links': hr_data.field_more_link} : hero_banner;
    }

    if(Utilities.notEmpty(this.state.oc_data)) {
      let {oc_data} = this.state;
      let {oc_para_data} = this.state;
      our_client = oc_data.field_classes.length > 0 ? {...our_client, 'classes': oc_data.field_classes[0].value} : our_client;
      our_client = oc_data.field_title.length > 0 ? {...our_client, 'title': oc_data.field_title[0].value} : our_client;
      our_client = oc_data.body.length > 0 ? {...our_client, 'body': oc_data.body[0].value} : our_client;
      if(oc_para_data) {
        let list = [];
        oc_para_data.forEach((item) => {
          list = [...list, {image_normal: item.field_image_normal, image_hover: item.field_image_hover}]
        })
        our_client = oc_para_data ? {...our_client, 'list': list} : our_client;
      }
      our_client = oc_data.field_more_link.length > 0 ? {...our_client, 'links': oc_data.field_more_link} : our_client;
    }

    return (
      <DefaultLayout title="Home Page">
        <BoxHero data={hero_banner} />
        <RecentResources />
        <OurClients data={our_client} />
        <RecentBlog />
        <BoxWork />
      </DefaultLayout>
    )
  }
}

export default Home;
