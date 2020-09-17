import React from 'react'

function LoginPage() {
  return (
    <div className='myLoginContainer'>
        <h1>Login </h1>
        <input type='email' placeholder="enter email" id="userEmail" required />

        <input type='password' placeholder="enter password" id="userPassword" required />
        <div className='myButtonContainerTwo'>

            <button > Login </button>
            <button > SignIn  </button>
        </div>
    </div>
  )
}

export default LoginPage
