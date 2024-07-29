import React from 'react'
import NavLogin from '../Components/NavLogin'
import Footer from '../Components/Footer'
import SignInImg from '../Components/SignInImg'
import SignInForm from '../Components/SignInForm'


const SignIn = () => {
  return (
    <div>
        <NavLogin/>
        <SignInImg/>
        <SignInForm/>
        <Footer/>
    </div>
  )
}

export default SignIn