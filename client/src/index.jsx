import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '@/components/navbar';
import Index from '@/routes/index';
import Users from '@/routes/users';
import Login from '@/routes/login';
import Signup from '@/routes/signup';


import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


ReactDOM.render(
  <div>
    <Router>
        <div>
          <Navbar />
          <Route path="/" exact component={Index} />
          <Route path="/users/" exact component={Users} />
          <Route path="/login/" exact component={Login} />
          <Route path="/signup/" exact component={Signup} />


        </div>
    </Router>
  </div>,
  document.getElementById('app'),
);

module.hot.accept();
