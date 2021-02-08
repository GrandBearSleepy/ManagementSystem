import './App.less';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Frame } from './components'
import LoginForm from './pages/LoginForm'
import { adminRoutes } from './routes';
const subMenus = adminRoutes.map(obj => obj.subMenus)
const merged = [].concat.apply([], subMenus);
console.log(merged)


const App = () => {

  const adminUser = {
    username: 'admin',
    password: 'admin123'
  }

  const [user, setUser] = useState('');
  const [error, setError] = useState('')

  const inputInfo = userInfo => {
    console.log(userInfo)
    if (userInfo.username === adminUser.username && userInfo.password === adminUser.password) {
      console.log('login');
      setUser(userInfo.username);
      setError('');
    }
    else {
      console.log('error');
      setError('Details do not match!!');
    }
  }
  const logout = () => {
    setUser('');
  }

  return (
    <div>

      {
        (user != '') ?
          (<Frame logout={logout}>
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
          </Frame >) :
          (<LoginForm
            error={error}
            inputInfo={inputInfo} />)
      }
    </div>

  )
}
export default App;