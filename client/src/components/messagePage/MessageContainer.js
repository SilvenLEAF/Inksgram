import React from 'react'
import OptionContainer from '../userProfile/OptionContainer'
import UsersMessageList from '../userMessageList/UsersMessageProfile';
function MessageContainer() {
    return (
        <div className='myMessageContainer'>
            <div class='myMessageHeader'>
            <h1>MESSAGES</h1>
            </div>
            <UsersMessageList />
            <OptionContainer />
        </div>

    )

}

export default MessageContainer