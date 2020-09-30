import React from 'react'

function LoginPage(){
    

  
        return (
            <div ref={this.wrapperRef} className='myLoginContainer'>
                <h1>Login </h1>
                <input type='email' placeholder="enter email" id="userEmail" required />

                <input type='password' placeholder="enter password" id="userPassword" required />
                <div className='myButtonContainerTwo'>

                    <button > Login </button>
                    <button onClick={() => this.handleClick()} > SignIn  </button>
                </div>
            </div>
        )
  
}

export default LoginPage