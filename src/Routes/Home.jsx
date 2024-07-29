import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Destination from '../Components/Destination'
import Trip from '../Components/Trip'
import Footer from '../Components/Footer'
import HotelCards from '../Components/HotelCards'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Destination/>
      <Trip/>
      <HotelCards/>
      <Footer/>
    </div>
  )
}

export default Home