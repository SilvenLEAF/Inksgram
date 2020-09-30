import React from "react";
import fbot from "./fbot.jpg";
class OpeningPage extends React.Component {
    render() {
        function SignIn() {
            document.getElementById("OpenPage").style.display = "none";
        }
        const img = fbot;

        return (
            <div id="OpenPage" className="myOpeningPage">
                <div className="myOpeningUpperBox">
                    <h1>INKSGRAM</h1>
                    <span>
                        <img source={img} alt="fbot image" height="100%" width="100%" />
                    </span>
                </div>
                <span className="myStarContainer"></span>

                <h1>GET STARTED WITH INKSNATION </h1>
                <button className='myStartButton' onClick={SignIn}>sign in</button>
            </div>
        );
    }
}

export default OpeningPage;
