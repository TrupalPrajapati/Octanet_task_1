import React from 'react'
import './Footer.css'
import {FaFacebook , FaInstagram , FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div>
                <h1>TRAWELL</h1>
                <p>Choose Your Favourite Destination</p>
            </div>
            <div>
                <a href="/">
                    <FaFacebook className='icons' />
                </a>
                <a href="/">
                    <FaInstagram className='icons' />
                </a>
                <a href="/">
                    <FaTwitter className='icons' />
                </a>
            </div>
        </div>
        <div className="bottom">
            <div>
                <h4>Project</h4>
                <a href="/">Changlog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">All Versions</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href="/">Github</a>
                <a href="/">Peoject</a>
                <a href="/">Issues</a>
                <a href="/">Twitter</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href="/">Troubleshooting</a>
                <a href="/">License</a>
                <a href="/">Contact Us</a>
            </div>
            <div>
                <h4>Others</h4>
                <a href="/">Terms of Services</a>
                <a href="/">Privacy Policy</a>
                <a href="/">License</a>
            </div>
        </div>
    </div>
  )
}

export default Footer
