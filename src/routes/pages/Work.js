import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import WorkList from '../components/WorkList';

class Work extends React.Component {
  render() {
    return(
      <DefaultLayout>
        <div className="hero-banner hero-banner--small bg--dark">
          <div className="hero-banner__image"><img src="https://i.imgur.com/sFThdJi.jpg" alt="FFW images" width="1920" height="600" /> </div>
          <div className="hero-banner__inner">
            <div className="container">
              <div className="hero-banner__content">
                <h1 className="hero-banner__heading">Work</h1>
              </div>
            </div>
          </div>
        </div>
        <WorkList/>
      </DefaultLayout>
    )
  }
}

export default Work;
