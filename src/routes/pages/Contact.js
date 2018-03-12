import React from 'react';
import axios from 'axios';

import * as Utilities from '../api';
import Webform from '../components/Webform'
import PageHeading from '../components/PageHeading'
import DefaultLayout from '../layout/DefaultLayout';

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hr_data: {}
    }
  }

  componentDidMount() {
    const hero_banner_id = 8;
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
    let bg_img = '';
    let pageTitle = '';
    let pageDesc = '';

    if (Utilities.notEmpty(this.state.hr_data)) {
      let {hr_data} = this.state;
      bg_img = hr_data.field_image.length > 0 ? hr_data.field_image[0].url : '';
      pageTitle = hr_data.field_title.length > 0 ? hr_data.field_title[0].value : '';
      pageDesc = hr_data.body.length > 0 ? hr_data.body[0].value : '';
    }

    return (
      <DefaultLayout title="Cotact Page">
        <div className="block-contact" style={{backgroundImage: `url(${bg_img})`}}>
          <div className="container">
            <div className="block-contact__intro">
              <PageHeading title={pageTitle} description={pageDesc} classes="text--center" />
            </div>
            <div className="block-contact__form">
              <div className="contact-form">
                <div className="container">
                  <div className="contact-form__inner">
                    <Webform webform_id="contact" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    )
  }
}

export default Contact
