import React from 'react'
import './Destination.css'

import keywest from '../assets/keywest.jpg'
import maldives from '../assets/maldives.jpg'
import maldives2 from '../assets/maldives2.jpg'
import borabora from '../assets/borabora.jpg'
import DestinationData from './DestinationData'
import paris from '../assets/paris1.jpg'
import paris2 from '../assets/paris2.jpg'
import florida1 from '../assets/florida1.jpg'
import florida2 from '../assets/florida2.jpg'
import switzerland1 from '../assets/switzerland1.jpg'
import switzerland2 from '../assets/switzerland2.jpg'

const Destination = () => {
  return (
    <div className='destination'>
        <h1 className='heading'>Popular Destination</h1>
        <p className='heading'>Tours give you the opportunity to see a lot, within a time frame</p>
        
        <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas" 
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, laborum similique ducimus magnam inventore ea, doloremque repellendus quam explicabo quidem tenetur nam eaque. Nobis magnam voluptatum necessitatibus id quisquam nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos velit quam aliquam sed veritatis est labore tempora itaque eius consectetur praesentium natus, minima laboriosam consequuntur, exercitationem molestias illo reiciendis!"
        img1 ={maldives2}
        img2 ={maldives}/>

        <DestinationData 
        className="first-des-reverse"
        heading="Switzerland" 
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, laborum similique ducimus magnam inventore ea, doloremque repellendus quam explicabo quidem tenetur nam eaque. Nobis magnam voluptatum necessitatibus id quisquam nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos velit quam aliquam sed veritatis est labore tempora itaque eius consectetur praesentium natus, minima laboriosam consequuntur, exercitationem molestias illo reiciendis!"
        img1 ={switzerland1}
        img2 ={switzerland2}/>

        <DestinationData
        className="first-des"
        heading="Paris, France" 
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, laborum similique ducimus magnam inventore ea, doloremque repellendus quam explicabo quidem tenetur nam eaque. Nobis magnam voluptatum necessitatibus id quisquam nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos velit quam aliquam sed veritatis est labore tempora itaque eius consectetur praesentium natus, minima laboriosam consequuntur, exercitationem molestias illo reiciendis!"
        img1 ={paris}
        img2 ={paris2}/>

        <DestinationData 
        className="first-des-reverse"
        heading="Florida, USA" 
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, laborum similique ducimus magnam inventore ea, doloremque repellendus quam explicabo quidem tenetur nam eaque. Nobis magnam voluptatum necessitatibus id quisquam nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos velit quam aliquam sed veritatis est labore tempora itaque eius consectetur praesentium natus, minima laboriosam consequuntur, exercitationem molestias illo reiciendis!"
        img1 ={florida1}
        img2 ={florida2}/>
    </div>
  )
}

export default Destination