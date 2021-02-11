import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { mainRoutes } from './routes';
import './index.css';




ReactDOM.render(

  <Router>
    <Switch>
      <Route path='/' render={(routerProps) => {
        return <App {...routerProps} />
      }} />
      <Redirect to='/404' />
    </Switch>
  </Router>,
  document.getElementById('root')
);
