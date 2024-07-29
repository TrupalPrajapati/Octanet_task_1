import React from 'react'
import "./Trip.css"
import TripData from './TripData'
import borabora from '../assets/borabora.jpg'
import NewZealand from '../assets/NewZealand.jpg'
import NewYork from '../assets/NewYork.jpg'
import peris from '../assets/peris.jpg'
import swizerland from '../assets/place-1.jpg'
import Kerala from '../assets/Kerala.jpg'


const Trip = () => {
  return (
    <div className='trip'>
        <h1 className='head'>Recent Trips</h1>
        <p className='head'>You can Discover unique destination using Google Maps</p>
        <div className='tripcard'>
            <TripData
            img={borabora}
            heading="Trip in Lakshdweep"
            text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, laborum similique ducimus magnam inventore ea, doloremque repellendus quam  voluptatum necessitatibus id quisquam nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos velit qua"
            />

            <TripData
            img={NewZealand}
            heading="Trip in NewZealand"
            text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, laborum similique ducimus magnam inventore ea, doloremque repellendus quam  voluptatum necessitatibus id quisquam nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos velit qua"
            />

            <TripData
            img={NewYork}
            heading="Trip in NewYork"
            text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, laborum similique ducimus magnam inventore ea, doloremque repellendus quam  voluptatum necessitatibus id quisquam nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos velit qua"
            />
        </div>
        <div className='tripcard'>
            <TripData
            img={peris}
            heading="Trip in Paris"
            text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, laborum similique ducimus magnam inventore ea, doloremque repellendus quam  voluptatum necessitatibus id quisquam nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos velit qua"
            />

            <TripData
            img={swizerland}
            heading="Trip in Swizerland"
            text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, laborum similique ducimus magnam inventore ea, doloremque repellendus quam  voluptatum necessitatibus id quisquam nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos velit qua"
            />

            <TripData
            img={Kerala}
            heading="Trip in Kerala"
            text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, laborum similique ducimus magnam inventore ea, doloremque repellendus quam  voluptatum necessitatibus id quisquam nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos velit qua"
            />
        </div>
      
    </div>
  )
}

export default Trip