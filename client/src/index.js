import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { mainRoutes } from './routes';
import './index.css'


ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/admin' render={(routerProps) => {
        return <App {...routerProps} />
      }} />
      {
        mainRoutes.map(route => {
          return <Route
            exact
            key={route.pathname}
            path={route.pathname}
            component={route.component} />
        })
      }
      <Redirect to='/login' from='/' exact />
      <Redirect to='/404' />
    </Switch>
  </Router>,
  document.getElementById('root')
);


