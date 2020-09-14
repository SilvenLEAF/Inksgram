import React from 'react';

import './App.scss';
import OpeningPage from './components/OpeningPage';
import  AllSignInPages from './AllSignInPages'
import UserProfile from './components/UserProfile'
import MessageContainer from './components/MessageContainer'

function App() {

  return (
    <div className="App">
      <OpeningPage />
      <AllSignInPages />
     
       <UserProfile />

       <MessageContainer />
      

    </div>
  );
}

export default App;
