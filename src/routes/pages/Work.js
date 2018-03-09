import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import WorkList from '../components/WorkList';

class Work extends React.Component {
  render() {
    return(
      <DefaultLayout>
        <WorkList/>
      </DefaultLayout>
    )
  }
}

export default Work;
