import React from 'react'
import './Signupimg.css'
import night from '../assets/night.jpg'

const SignInImg = () => {
  return (
    <div>
        <div className='signupimg'>
        <img src={night} type="night/jpg" alt="bg_img" />
        <h1 className='signup-text'>Sign In</h1>
    </div>
    </div>
  )
}

export default SignInImg