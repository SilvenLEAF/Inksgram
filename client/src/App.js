import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';
import OpeningPage from './components/openingPage/OpeningPage';
import  AllSignInPages from './components/signingPage/AllSignInPages'
import UserProfile from './components/userProfile/UserProfile'
import MessageContainer from './components/messagePage/MessageContainer'

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <div >
        
        <Switch>
          <Route exact path="/" component={OpeningPage} />
          <Route path="/signpage" component={AllSignInPages} />
          <Route path="/userprofile" component={UserProfile  } />
          <Route path="/messagecontainer" component={MessageContainer } />
       
          
          
        </Switch>
        
      </div>

     
    </div>
  </BrowserRouter>
  

  );
}

export default App;
