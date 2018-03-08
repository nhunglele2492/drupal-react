import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Pages List
import Home from './pages/Home';
import ResourcesPage from './pages/Resources';
import BlogPage from './pages/Blog';


// Page Detail
import WorkDetailPage from './pages/WorkDetailPage';
import BlogDetail from './pages/BlogDetail';
import ResourcesDetail from './pages/ResourcesDetail';
import Contact from './pages/Contact';

// Css
import '../Assets/css/styles.min.css';
import '../Assets/css/custom.css';

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/resources" component={ResourcesPage}/>
      <Route exact path="/blog" component={BlogPage}/>
      <Route exact path="/contact" component={Contact}/>
      <Route path="/work/:id" component={WorkDetailPage} />
      <Route path="/blog/:id" component={BlogDetail} />
      <Route path="/resources/:id" component={ResourcesDetail} />
    </div>
  </Router>
);
