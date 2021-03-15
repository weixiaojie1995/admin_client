import React, { Component, lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Loading from './components/loading'

const Login = lazy(() => import('./pages/login'))
const Admin = lazy(() => import('./pages/admin'))

export default class App extends Component {
  render() {

    return (
      <div>
        <Suspense fallback={<Loading/>}>
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/admin' component={Admin}></Route>
            <Redirect to='/admin'></Redirect>
          </Switch>
        </Suspense>
      </div>
    )
  }
}
