// @flow

import React from 'react'
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import defaultTheme from 'themes/default'

import Home from 'views/pages/Home'

const App = () => (
  <Router>
    <ThemeProvider theme={defaultTheme}>
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/home' />} />
        <Route exact path='/home' component={Home} />
      </Switch>
    </ThemeProvider>
  </Router>
)

export {
  App as default
}
