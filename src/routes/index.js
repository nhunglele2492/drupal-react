import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
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
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import Profile from './pages/Profile';

// Css
import '../Assets/css/styles.min.css';
import '../Assets/css/custom.css';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>

      <Route exact path="/resources" component={ResourcesPage}/>
      <Route path="/resources/:id" component={ResourcesDetail} />

      <Route exact path="/blog" component={BlogPage}/>
      <Route path="/blog/:id" component={BlogDetail} />

      <Route path="/work/:id" component={WorkDetailPage} />
      <Route path="/contact" component={Contact}/>

      <Route path="/user/login" component={Login} />
      <Route path="/user/logout" component={Logout} />
      <Route path="/user/register" component={Register} />
      <Route path="/user/:id" component={Profile} />
    </Switch>
  </Router>
);
