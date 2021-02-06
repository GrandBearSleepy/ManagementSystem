import './App.less';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Frame } from './components'

import { adminRoutes } from './routes';
const subMenus = adminRoutes.map(obj => obj.subMenus)
const merged = [].concat.apply([], subMenus);
console.log(merged)


const App = () => {
  return (
    <Frame>
      <Switch>
        {
          merged.map(route => {
            return (
              <Route
                exact={route.exact}
                key={route.pathname}
                path={route.pathname}
                render={(routerProps) => {
                  return <route.component {...routerProps} />
                }} />
            )
          })
        }
      </Switch>
    </Frame >
  )
}
export default App;