// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Person from './Person'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/person/:id" component={Person}/>
    </div>
  </Router>,
  document.getElementById('root')
);
