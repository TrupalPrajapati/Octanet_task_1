import React from 'react'
import SignUpForm from '../Components/SignUpForm'
import NavSignUp from '../Components/NavSignUp'
import SignupImg from '../Components/SignupImg'
import Footer from '../Components/Footer'


const SignUp = () => {
  return (
    <div>
       <NavSignUp/>
       <SignupImg/>
        <SignUpForm/>
        <Footer/>
    </div>
  )
}

export default SignUp