import React from 'react';
import './HotelCard.css';



const HotelCardData = (props) => {
  return (
    <div className="HotelCard">
       <div className="card">
            <div className="d-image">
            <img src={props.image} alt="text" />
            </div>
            <h2>{props.name}</h2>
            
        <button className="explore-button">Explore</button>
        </div>
    </div>
  );
};

export default HotelCardData;