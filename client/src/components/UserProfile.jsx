import React from 'react'
import OptionContainer from './OptionContainer'
import {faComment, faUsers, faNewspaper, faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
function UserProfile(){
    return(
        <div className ='myUserProfile'>
       <div className='myUserPicture'>
       <FontAwesomeIcon className='myFaArrow' icon = {faArrowLeft} />
     
       </div>
       
       <div className='myUserDetailContainer'>
           <h1>Username</h1>
           <h2>merchant</h2>
           <h3>state</h3>

           <p>this all you need to know about me . am a programmer also a gamer.</p>
       </div>



       <OptionContainer />

        </div>
    )
}
export default UserProfile