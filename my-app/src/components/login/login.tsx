import React from 'react'
import './login.css'
const login = () => {
  return (
        <div className="background-img">
       <div className="login_area">
        <h1>Bhangariwala</h1>
        <form action="">
            <div className="input_area">
                <label htmlFor="email">Username</label>
                <br />
                <input type="email" name="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="input_area">
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" name="password" id="password" placeholder="Enter your password" />
            </div>
            <a href="" className='fp'>Forget password?</a>
            <br />
            <button>Login</button>
        </form>
        <p>Don't have an account? <a href="/signup">Signup</a></p>
       </div>
        </div>
  )
}

export default login
