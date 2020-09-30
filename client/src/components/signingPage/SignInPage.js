import React from "react";

function SignInPage(){
  

        return (
            <div ref={this.wrapperRef} className="mySignInContainer">
                <form>
                <h1>CREATE ACCOUNT</h1>
                <input type='text' placeholder="enter name" id="userName" required />

                <input type='email' placeholder="enter email" id="userEmail" required />

                <input type='password' placeholder="enter password" id="userPassword" required />
                <input type='password' placeholder="confirm password" id="userPassword2" required />

                <span className='file'>
                    <input id="userImg" type='file' />
                </span>

                <div className='myButtonContainer'>
                    <button > Login </button>
                    <button> SignIn  </button>
                </div>

                </form>

            </div>
        );
    }


export default SignInPage;
