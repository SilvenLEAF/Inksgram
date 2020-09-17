import React from 'react'



function Home() {
  return (
    <div id="OpenPage" className="myOpeningPage">
        <div className="myOpeningUpperBox">
            <h1>INKSGRAM</h1>
            <span>
                <img src="/images/pinkRobot.jpg" alt="Pink Robot" height="100%" width="100%" />
            </span>
        </div>
        <span className="myStarContainer"></span>

        <h1>GET STARTED WITH INKSNATION </h1>
        <button className='myStartButton'>sign in</button>
    </div>
  )
}

export default Home
