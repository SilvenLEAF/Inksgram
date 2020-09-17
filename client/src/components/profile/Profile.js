import React from 'react'
import OptionContainer from './OptionContainer'



function Profile() {
  return(
    <div className ='myUserProfile'>
      <div className='myUserPicture'></div>
   
      <div className='myUserDetailContainer'>
        <h1>Username</h1>
        <h2>merchant</h2>
        <h3>state</h3>

        <p>this all you need to know about me . am a programmer also a gamer.</p>
      </div>



      <OptionContainer/>

    </div>
  )
}

export default Profile
