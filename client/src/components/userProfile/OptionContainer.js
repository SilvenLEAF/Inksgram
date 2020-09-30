import React from 'react'
import { faComment, faUsers, faNewspaper, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function OptionContainer() {

    return (
        <div className='myOptionContainer'>
            <span>
                <FontAwesomeIcon className='myFa' icon={faComment} />
                <p>chats</p>
            </span>

            <span>
                <FontAwesomeIcon className='myFa' icon={faUsers} />
                <p>groups</p>
            </span>

            <span>
                <FontAwesomeIcon className='myFa' icon={faNewspaper} />
                <p>notices</p>
            </span>


        </div>
    )
}

export default OptionContainer