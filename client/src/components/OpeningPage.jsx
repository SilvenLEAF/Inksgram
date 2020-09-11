import React from "react";
import fbot from "./fbot.jpg";
class OpeningPage extends React.Component {
    render() {
        function SignIn() {
            document.getElementById("OpenPage").style.display = "none";
        }
        const img = fbot;

        return (
            <div id="OpenPage" className="Opening-Page">
                <div className="opening-upper-box">
                    <h1>INKSGRAM</h1>
                    <span>
                        <img source={img} alt="fbot image" height="100%" width="100%" />
                    </span>
                </div>
                <span className="star-container"></span>

                <h1>GET STARTED WITH INKSNATION </h1>
                <button className='start-button' onClick={SignIn}>sign in</button>
            </div>
        );
    }
}

export default OpeningPage;
