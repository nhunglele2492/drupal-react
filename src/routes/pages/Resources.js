import React, { Component } from 'react';
import DefaultLayout from '../layout/DefaultLayout';

import ResourcesList from '../components/ResourcesList';
import SliderList  from '../components/SliderList';

class ResourcesPage extends Component {
  render() {
    return(
      <DefaultLayout>
        <SliderList/>
        <ResourcesList/>
      </DefaultLayout>
    )
  }
}

export default ResourcesPage;
