import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'

import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

const renderRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login/:uid" component={Login} />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  )
}

const App = () => {
  return (
    <BrowserRouter>{renderRouter()}</BrowserRouter>
  );
}

export default App;
