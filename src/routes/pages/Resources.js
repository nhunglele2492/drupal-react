import React, { Component } from 'react';
import DefaultLayout from '../layout/DefaultLayout';

import ResourcesList from '../components/ResourcesList';

class ResourcesPage extends Component {
  render() {
    return(
      <DefaultLayout>
        <ResourcesList/>
      </DefaultLayout>
    )
  }
}

export default ResourcesPage;
