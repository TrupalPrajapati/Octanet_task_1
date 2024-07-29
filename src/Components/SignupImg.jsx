import React from 'react'
import night from '../assets/night.jpg'
import './Signupimg.css'

const SignupImg = () => {
  return (
    <div>
         <div className='signupimg'>
        <img src={night} type="night/jpg" alt="bg_img" />
        <h1 className='signup-text'>Sign Up</h1>
    </div>
    
    </div>
  )
}

export default SignupImg