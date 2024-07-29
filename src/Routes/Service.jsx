import React from 'react'
import Navbar from '../Components/Navbar'
import Service1 from '../Components/Service1'
import Footer from '../Components/Footer'
import Trip from '../Components/Trip'
import HotelCards from '../Components/HotelCards'



const Service = () => {
  return (
    <div>
        <Navbar/>
        <Service1/>
        <Trip/>
        {/* <HotelCardData/> */}
        <HotelCards/>
        <Footer/>
    </div>
  )
}

export default Service