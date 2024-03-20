import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currentState, setCurrentState] = useState("Log In")

  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=''/>
            </div>
            <div className="login-popup-inputs">
                {currentState==="Log In"?<></>:<input type='text' placeholder='Your Name' required />}
                <input type='email' placeholder='Your Email' required />
                <input type='password' placeholder='Your Password' required />

            </div>
            <button>{currentState==="Sign Up"?"Create Account":"Log In"}</button>
            <div className="login-popup-condition">
                <input type='checkbox' required />
                <p>By continuing, I agree to the terms of use & privacy policy</p>
            </div>
            {currentState==="Log In"?<p>Create A New Account? <span onClick={()=>setCurrentState("Sign Up")}> Click Here</span></p>:
            <p>Already Have An Account? <span onClick={()=>setCurrentState("Log In")}>Log In Here</span></p>}
            
            
        </form>

    </div>
  )
}

export default LoginPopup