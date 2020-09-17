import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import LoginPage from './components/auth/LoginPage'
import SignupPage from './components/auth/SignupPage'

import Home from './components/home/Home'
import Profile from './components/profile/Profile';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route path="/profile" component={Profile} />
        </Switch>




      </div>
    </BrowserRouter>
  );
}

export default App;
