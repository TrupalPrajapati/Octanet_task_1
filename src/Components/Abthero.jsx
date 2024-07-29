import React from 'react'
import night from '../assets/night.jpg'
import './Abthero.css'

const Abthero = () => {
  return (
    
    <div className='abthero'>
        <img src={night} type="night/jpg" alt="bg_img" />
        <h1 className='abthero-text'>About</h1>
    </div>
    
  )
}

export default Abthero