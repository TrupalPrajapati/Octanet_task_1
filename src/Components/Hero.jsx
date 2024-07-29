import React from 'react'
import './Hero.css'
import Video from '../assets/Video.mp4'

const Hero = () => {
  return (
    <div className='hero'>
        <video autoPlay loop  muted id="video">
            <source src={Video} type='video/mp4'/>
            Your Browser Not support the video tag.
        </video>
        <div className="hero-text">
            <h1>Your Journey Your Story</h1>
            <p>Choose Your Favourite Destination</p>
            <a href="/" className='show'>
                Travel Plan
            </a>
        </div>
    </div>
  )
}

export default Hero