import './App.less';
import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Frame } from './components'
import LoginForm from './pages/LoginForm'
import { adminRoutes } from './routes';
import fire from './fire';
const subMenus = adminRoutes.map(each => each.subMenus)
const merged = [].concat.apply([], subMenus);
console.log(merged)


const App = () => {

  //************************* */
  const [user, setUser] = useState('');
  const [password, setPassord] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('')

  const clearInputs = () => {
    setEmail('');
    setPassord('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }


  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message)
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break

        }
      })
  }
  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message)
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break
        }
      })
  };

  const handleLogout = () => {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs()
        setUser(user);
      } else {
        setUser('')
      }
    })
  };

  useEffect(() => {
    authListener()
  }, []);

  return (
    <div className="app">

      {
        (!user) ?
          (<LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassord={setPassord}
            handleLogin={handleLogin}
            emailError={emailError}
            passwordError={passwordError}
          />)
          :
          (<Frame
            logout={handleLogout}>
            <Switch>
              {
                merged.map(route => {
                  return (
                    <Route
                      exact={route.exact}
                      key={route.pathname}
                      path={route.pathname}
                      render={(routerProps) => {
                        console.log({...routerProps})
                        return <route.component {...routerProps} />
                      }} />
                  )
                })
              }
              <Redirect to='/404' />
            </Switch>
          </Frame >)
      }
    </div>
  )
}
export default App;