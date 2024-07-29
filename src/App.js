import React from 'react'
import './App.css'
import Home from './Routes/Home'
import Service from './Routes/Service'
import About from './Routes/About'
import Contact from './Routes/Contact'
import { Route, Routes} from 'react-router-dom';
import SignUp from './Routes/SignUp'
import SignIn from './Routes/SignIn'


const App = () => {
  return (
    <div>
        <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/service' element={<Service/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='*' element={<div>This page is not Found</div>}/>
         <Route path='/signup' element={<SignUp/>}/>
         <Route path='/signin' element={<SignIn/>}/>
        </Routes>
    </div>
  )
}

export default App