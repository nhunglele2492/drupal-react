import React from 'react';
import Webform from '../components/Webform'
import PageHeading from '../components/PageHeading'
import DefaultLayout from '../layout/DefaultLayout';

class Contact extends React.Component {
  render() {
    const bg_img = 'https://ffw-style.herokuapp.com/images/contact-bg.jpg';
    const pageTitle = 'Get in touch';
    const pageDesc = "In need of some help? Tell us about your project by entering your contact details below. We'd love to hear from you.";

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
