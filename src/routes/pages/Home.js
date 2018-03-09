import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import BoxWork from '../components/BoxWork';
import OurCLients from '../components/OurCLients';
import BoxHero from '../components/BoxHero';
import RecentResources from '../components/RecentResources';
import RecentBlog from '../components/RecentBlog';

class Home extends React.Component {
  render() {
    return (
      <DefaultLayout title="Home Page">
        <BoxHero />
        <RecentResources />
        <OurCLients />
        <RecentBlog />
        <BoxWork />
      </DefaultLayout>
    )
  }
}

export default Home;
