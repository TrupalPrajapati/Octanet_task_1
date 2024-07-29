import React from 'react';
import HotelCardData from './HotelCardData';
import image1 from '../assets/NewYork.jpg'
import image2 from '../assets/NewZealand.jpg'
import image3 from '../assets/Kerala.jpg'
import image4 from '../assets/keywest.jpg'
import image5 from '../assets/amritsar.jpeg'
import image6 from '../assets/LA.jpg'
import image7 from '../assets/sydney.jpg'
import image8 from '../assets/london.jpg'
import image9 from '../assets/capetown.jpg'
import image10 from '../assets/finland.jpg'
import image11 from '../assets/antarctica.jpg'
import image12 from '../assets/france.jpg'
import image13 from '../assets/russia.jpg'
import image14 from '../assets/iceland.jpg'
import image15 from '../assets/japan.jpg'
import image16 from '../assets/kashmir.jpg'

const data = [
  { image: image1, name: 'NewYork city, USA'      ,review:'4'},
  { image: image2, name: 'Switzerland'  ,review:'4' },
  { image: image3, name: 'Kerala, India'       ,review:'4'},
  { image: image4, name: 'Keywest, Florida, USA'      ,review:'4'},
  { image: image5, name: 'Amritsar, Panjab, India'     ,review:'4'},
  { image: image6, name: 'Los Angeles, USA'  ,review:'4'},
  { image: image7, name: 'Sydney, Australia'       ,review:'4'},
  { image: image8, name: 'London, England'      ,review:'4'},
  { image: image9, name: 'CapeTown, South Africa'      ,review:'4'},
  { image: image10, name: 'Finland'  ,review:'4'},
  { image: image11, name: 'Antarctica'       ,review:'4' },
  { image: image12, name: 'France'      ,review:'4'},
  { image: image13, name: 'Russia'      ,review:'4'},
  { image: image14, name: 'Iceland'  ,review:'4'},
  { image: image15, name: 'Japan'       ,review:'4' },
  { image: image16, name: 'Kashmir, India'      ,review:'4'}
  
];

const HotelCards = () => {
  return (
    <div>
        <h1 className="title">Top Destinations</h1>
        <div className='card-container'>
             {data.map((item, index) => (
            <HotelCardData key={index} image={item.image} review={item.review} name={item.name} />
        ))}
    </div>
    </div>
  );
};

export default HotelCards;